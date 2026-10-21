// Saves progress + usage on this device, and (optionally) sends usage events to a Google Sheet.
(function () {
  var KEY = "w4j.v1";
  var TICK = 5;            // seconds between activity checks
  var IDLE_LIMIT = 120;    // stop counting after 2 minutes with no taps/typing

  function blank() {
    return { progress: {}, writings: [], days: {}, sessions: [], pages: [], drafts: {}, settings: {}, deviceId: "" };
  }
  function load() {
    try { var d = JSON.parse(localStorage.getItem(KEY)); if (d && d.progress) return Object.assign(blank(), d); } catch (e) {}
    return blank();
  }
  var DB = load();
  if (!DB.deviceId) DB.deviceId = "dev-" + Math.random().toString(36).slice(2, 8);

  function save() { try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e) {} }

  function dayKey(d) {
    d = d || new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function today() {
    var k = dayKey();
    if (!DB.days[k]) DB.days[k] = { sec: 0, visits: 0, lessons: [] };
    return DB.days[k];
  }

  // ---------- optional cloud sync ----------
  var queue = [];
  function send(type, detail, extra) {
    var url = (window.CONFIG && window.CONFIG.syncUrl) || "";
    if (!url) return;
    queue.push(Object.assign({ at: new Date().toISOString(), device: DB.deviceId, kid: (window.CONFIG.kidName || ""), type: type, detail: detail || "" }, extra || {}));
    flush();
  }
  function flush() {
    var url = (window.CONFIG && window.CONFIG.syncUrl) || "";
    if (!url || !queue.length || !navigator.onLine) return;
    var batch = queue.splice(0, queue.length);
    var body = JSON.stringify({ events: batch });
    try {
      fetch(url, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" }, body: body, keepalive: true })
        .catch(function () { queue = batch.concat(queue); });
    } catch (e) { queue = batch.concat(queue); }
  }
  window.addEventListener("online", flush);

  // ---------- session + active time ----------
  var lastInput = Date.now();
  var session = { start: new Date().toISOString(), sec: 0 };
  var unsentSec = 0;
  DB.sessions.push(session);
  if (DB.sessions.length > 400) DB.sessions = DB.sessions.slice(-400);
  today().visits++;
  save();
  send("open", "Opened the app");

  ["pointerdown", "keydown", "scroll", "touchstart"].forEach(function (ev) {
    window.addEventListener(ev, function () { lastInput = Date.now(); }, { passive: true });
  });

  setInterval(function () {
    if (document.visibilityState !== "visible") return;
    if ((Date.now() - lastInput) / 1000 > IDLE_LIMIT) return;
    today().sec += TICK;
    session.sec += TICK;
    session.end = new Date().toISOString();
    unsentSec += TICK;
    if (unsentSec >= 60) { send("active", "Active minute", { minutes: Math.round(unsentSec / 60) }); unsentSec = 0; }
    save();
  }, TICK * 1000);

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      if (unsentSec >= 15) { send("active", "Active time", { minutes: +(unsentSec / 60).toFixed(1) }); unsentSec = 0; }
      flush(); save();
    } else {
      lastInput = Date.now();
    }
  });

  // ---------- public API ----------
  window.Tracker = {
    db: function () { return DB; },
    save: save,
    dayKey: dayKey,
    lessonDone: function (lessonId, title, score, stars) {
      var prev = DB.progress[lessonId] || { tries: 0, stars: 0, best: 0 };
      prev.tries++;
      prev.stars = Math.max(prev.stars, stars);
      prev.best = Math.max(prev.best, score);
      prev.last = score;
      prev.done = new Date().toISOString();
      DB.progress[lessonId] = prev;
      var t = today(); if (t.lessons.indexOf(lessonId) < 0) t.lessons.push(lessonId);
      save();
      send("lesson", title, { score: Math.round(score * 100), stars: stars });
    },
    saveWriting: function (lessonId, title, q, text) {
      DB.writings.push({ lessonId: lessonId, title: title, q: q, text: text, at: new Date().toISOString() });
      delete DB.drafts[lessonId + "|" + q.slice(0, 30)];
      save();
      send("writing", title, { words: text.trim().split(/\s+/).length, text: text });
    },
    draft: function (key, text) { if (text == null) return DB.drafts[key] || ""; DB.drafts[key] = text; save(); },
    pageLookup: function (page, lessonTitle) {
      DB.pages.push({ page: page, title: lessonTitle, at: new Date().toISOString() });
      if (DB.pages.length > 300) DB.pages = DB.pages.slice(-300);
      save();
      send("page", "Workbook page " + page + " → " + lessonTitle);
    },
    testSync: function () { send("test", "Test from the grown-ups page"); },
    reset: function () { var keep = { settings: DB.settings, deviceId: DB.deviceId }; DB = Object.assign(blank(), keep); save(); },
    streak: function () {
      var n = 0, d = new Date();
      var used = function (k) { var x = DB.days[k]; return x && (x.sec >= 60 || x.lessons.length); };
      if (!used(dayKey(d))) d.setDate(d.getDate() - 1); // today not yet counted? start from yesterday
      while (used(dayKey(d))) { n++; d.setDate(d.getDate() - 1); }
      return n;
    }
  };
})();
