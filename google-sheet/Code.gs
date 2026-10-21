/**
 * Writing Quest → Google Sheet usage log
 * Paste this whole file into Extensions → Apps Script of a new Google Sheet,
 * then Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone).
 * Copy the web-app URL into config.js → syncUrl.
 */
var TZ = Session.getScriptTimeZone();

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var data = JSON.parse(e.postData.contents);
    var events = data.events || [data];
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var log = sheet_(ss, "Log", ["Time", "Device", "What", "Detail", "Minutes", "Score %", "Stars", "Words", "Writing"]);
    var daily = sheet_(ss, "Daily", ["Date", "Active minutes", "Times opened", "Lessons finished", "Writing pieces", "Pages looked up"]);
    events.forEach(function (ev) {
      var when = new Date(ev.at || new Date());
      log.appendRow([when, ev.device || "", ev.type || "", ev.detail || "", ev.minutes || "", ev.score != null ? ev.score : "", ev.stars || "", ev.words || "", ev.text || ""]);
      bumpDaily_(daily, when, ev);
    });
    return ContentService.createTextOutput("ok");
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput("Writing Quest log is running ✔");
}

function sheet_(ss, name, header) {
  var sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); sh.appendRow(header); sh.setFrozenRows(1); sh.getRange(1, 1, 1, header.length).setFontWeight("bold"); }
  return sh;
}

function bumpDaily_(sh, when, ev) {
  var key = Utilities.formatDate(when, TZ, "yyyy-MM-dd");
  var vals = sh.getRange(1, 1, sh.getLastRow(), 1).getDisplayValues();
  var row = -1;
  for (var i = vals.length - 1; i >= 1; i--) if (vals[i][0] === key) { row = i + 1; break; }
  if (row < 0) { sh.appendRow([key, 0, 0, 0, 0, 0]); row = sh.getLastRow(); sh.getRange(row, 1).setNumberFormat("@").setValue(key); }
  var col = { active: 2, open: 3, lesson: 4, writing: 5, page: 6 }[ev.type];
  if (!col) return;
  var cell = sh.getRange(row, col);
  var add = ev.type === "active" ? Number(ev.minutes || 0) : 1;
  cell.setValue(Number(cell.getValue() || 0) + add);
}
