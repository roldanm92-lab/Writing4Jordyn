(function () {
  "use strict";
  var C = window.COURSE, CFG = window.CONFIG || {};
  var app = document.getElementById("app");
  var PDF_OFFSET = 2; // workbook page N is PDF page N+2

  // ---------- lesson index ----------
  var ALL = [];
  C.sections.forEach(function (s) { s.lessons.forEach(function (l) { l.section = s; ALL.push(l); }); });
  ALL.forEach(function (l, i) { l.endPage = i + 1 < ALL.length ? ALL[i + 1].page - 1 : 129; });
  function byId(id) { return ALL.filter(function (l) { return l.id === id; })[0]; }
  function lessonForPage(p) {
    if (p < ALL[0].page) return ALL[0];
    for (var i = ALL.length - 1; i >= 0; i--) if (p >= ALL[i].page) return ALL[i];
    return ALL[0];
  }

  // ---------- utils ----------
  function h(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function stripTags(s) { return String(s).replace(/<[^>]+>/g, ""); }
  function toast(msg) { var t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, 2200); }
  function starsStr(n) { return "★★★".slice(0, n) + "☆☆☆".slice(0, 3 - n); }
  function pagesLabel(l) { return l.page === l.endPage ? "p. " + l.page : "pp. " + l.page + "–" + l.endPage; }
  function speak(text) {
    if (!("speechSynthesis" in window)) return toast("Read-aloud isn't available on this device");
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(stripTags(text)); u.rate = 0.95; speechSynthesis.speak(u);
  }
  function speakBtn(text) { var b = h('<button class="speak" aria-label="Read aloud" title="Read aloud">🔊</button>'); b.onclick = function () { speak(text); }; return b; }
  function totalStars() { var p = Tracker.db().progress, n = 0; for (var k in p) n += p[k].stars || 0; return n; }
  function updateHud() {
    document.getElementById("hud-stars").textContent = totalStars();
    document.getElementById("hud-streak").textContent = Tracker.streak();
  }
  function nextUp() { var p = Tracker.db().progress; return ALL.filter(function (l) { return !p[l.id]; })[0] || ALL[0]; }
  function confetti() {
    var bits = ["🎉", "⭐", "✨", "🌟", "💫"];
    for (var i = 0; i < 26; i++) {
      var s = h('<span class="confetti">' + bits[i % bits.length] + "</span>");
      s.style.left = Math.random() * 100 + "vw"; s.style.animationDelay = Math.random() * 0.5 + "s"; s.style.fontSize = 18 + Math.random() * 18 + "px";
      document.body.appendChild(s); setTimeout(function (el) { el.remove(); }.bind(null, s), 2600);
    }
  }

  // ---------- workbook PDF (stored only in this browser) ----------
  var WB = {
    _db: null, _pdf: null, _lib: null,
    open: function () {
      var self = this;
      if (self._db) return Promise.resolve(self._db);
      return new Promise(function (res, rej) {
        var r = indexedDB.open("w4j-workbook", 1);
        r.onupgradeneeded = function () { r.result.createObjectStore("files"); };
        r.onsuccess = function () { self._db = r.result; res(r.result); };
        r.onerror = function () { rej(r.error); };
      });
    },
    get: function () { return this.open().then(function (db) { return new Promise(function (res) { var q = db.transaction("files").objectStore("files").get("pdf"); q.onsuccess = function () { res(q.result || null); }; q.onerror = function () { res(null); }; }); }).catch(function () { return null; }); },
    put: function (blob) { this._pdf = null; return this.open().then(function (db) { return new Promise(function (res, rej) { var tx = db.transaction("files", "readwrite"); tx.objectStore("files").put(blob, "pdf"); tx.oncomplete = res; tx.onerror = function () { rej(tx.error); }; }); }); },
    remove: function () { this._pdf = null; return this.open().then(function (db) { return new Promise(function (res) { var tx = db.transaction("files", "readwrite"); tx.objectStore("files").delete("pdf"); tx.oncomplete = res; }); }); },
    has: function () { return this.get().then(function (b) { return !!b; }); },
    lib: function () {
      var self = this;
      if (self._lib) return self._lib;
      self._lib = new Promise(function (res, rej) {
        var s = document.createElement("script");
        s.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
        s.onload = function () { window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"; res(window.pdfjsLib); };
        s.onerror = rej; document.head.appendChild(s);
      });
      return self._lib;
    },
    doc: function () {
      var self = this;
      if (self._pdf) return self._pdf;
      self._pdf = Promise.all([self.lib(), self.get()]).then(function (r) {
        if (!r[1]) throw new Error("none");
        return r[1].arrayBuffer().then(function (buf) { return r[0].getDocument({ data: buf }).promise; });
      });
      self._pdf.catch(function () { self._pdf = null; });
      return self._pdf;
    },
    render: function (bookPage, canvas) {
      return this.doc().then(function (pdf) {
        var n = Math.min(Math.max(bookPage + PDF_OFFSET, 1), pdf.numPages);
        return pdf.getPage(n).then(function (page) {
          var w = Math.min(canvas.parentElement.clientWidth || 600, 900);
          var vp1 = page.getViewport({ scale: 1 });
          var scale = (w / vp1.width) * (window.devicePixelRatio || 1);
          var vp = page.getViewport({ scale: scale });
          canvas.width = vp.width; canvas.height = vp.height; canvas.style.width = w + "px";
          return page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
        });
      });
    }
  };

  function pickWorkbook(after) {
    var inp = h('<input type="file" accept="application/pdf" hidden>');
    document.body.appendChild(inp);
    inp.onchange = function () {
      var f = inp.files[0]; inp.remove(); if (!f) return;
      toast("Saving workbook on this device…");
      WB.put(f).then(function () { toast("Workbook saved! 📘"); if (after) after(); }).catch(function () { toast("Couldn't save. The browser may be out of space."); });
    };
    inp.click();
  }

  // Workbook page viewer panel for a lesson (or a specific page)
  function workbookPanel(startPage, minPage, maxPage) {
    var box = h('<div class="card wb-panel"><div class="wb-head"><b>📘 My workbook</b><span class="wb-nav"></span></div><div class="wb-body"></div></div>');
    var body = box.querySelector(".wb-body"), nav = box.querySelector(".wb-nav");
    var cur = startPage;
    function show() {
      nav.innerHTML = "";
      var prev = h('<button class="btn small ghost" aria-label="Previous page">◀</button>');
      var lab = h('<span class="wb-label">Page ' + cur + "</span>");
      var next = h('<button class="btn small ghost" aria-label="Next page">▶</button>');
      prev.disabled = cur <= minPage; next.disabled = cur >= maxPage;
      prev.onclick = function () { cur--; show(); }; next.onclick = function () { cur++; show(); };
      nav.append(prev, lab, next);
      body.innerHTML = '<div class="wb-loading">Loading page…</div>';
      var cv = document.createElement("canvas"); cv.className = "wb-canvas";
      var wrap = h('<div class="wb-canvas-wrap"></div>'); wrap.appendChild(cv);
      body.innerHTML = ""; body.appendChild(wrap);
      WB.render(cur, cv).catch(function () { body.innerHTML = '<p class="muted">Couldn\'t open the workbook. Try loading it again from the grown-ups page.</p>'; });
    }
    WB.has().then(function (yes) {
      if (yes) return show();
      body.innerHTML = '<p class="muted">Want to see the real workbook page here? A grown-up can load the PDF once on this device. It stays private on this device.</p>';
      var b = h('<button class="btn ghost">📂 Open my workbook PDF</button>');
      b.onclick = function () { pickWorkbook(show); };
      body.appendChild(b);
    });
    return box;
  }

  // ---------- views ----------
  function viewHome() {
    var name = CFG.kidName || "Writer";
    var nu = nextUp(), db = Tracker.db();
    var el = h('<div class="home"></div>');
    var hello = h('<section class="hero"><div><h1>Hi, ' + esc(name) + '! <span class="wave">👋</span></h1><p>Ready to become an even better writer?</p></div></section>');
    el.appendChild(hello);

    var finder = h('<form class="card finder" autocomplete="off"><label for="pg"><b>📖 What page are you on in your workbook?</b></label><div class="finder-row"><input id="pg" type="number" inputmode="numeric" min="1" max="148" placeholder="Page #" required><button class="btn" type="submit">Let\'s go!</button></div><p class="muted small">I\'ll find that lesson and give you new practice on the same skill.</p></form>');
    finder.onsubmit = function (e) { e.preventDefault(); var p = parseInt(finder.querySelector("input").value, 10); if (p > 0) location.hash = "#/page/" + p; };
    el.appendChild(finder);

    var nuCard = h('<a class="card next-up" href="#/l/' + nu.id + '" style="--c:' + nu.section.color + '"><span class="big-emoji">' + nu.emoji + '</span><div><div class="eyebrow">Up next · ' + esc(nu.section.title) + " · " + pagesLabel(nu) + '</div><div class="title">' + esc(nu.title) + '</div></div><span class="go">▶</span></a>');
    el.appendChild(nuCard);

    C.sections.forEach(function (s) {
      var done = s.lessons.filter(function (l) { return db.progress[l.id]; }).length;
      var sec = h('<section class="section" style="--c:' + s.color + '"><div class="sec-head"><span class="sec-emoji">' + s.emoji + '</span><div><h2>' + esc(s.title) + '</h2><p>' + esc(s.subtitle) + '</p></div><span class="sec-count">' + done + "/" + s.lessons.length + '</span></div><div class="bar"><i style="width:' + (100 * done / s.lessons.length) + '%"></i></div><div class="tiles"></div></section>');
      var tiles = sec.querySelector(".tiles");
      s.lessons.forEach(function (l, i) {
        var p = db.progress[l.id];
        var isTest = /test$/.test(l.id);
        tiles.appendChild(h('<a class="tile' + (p ? " done" : "") + (isTest ? " test" : "") + (l === nu ? " current" : "") + '" href="#/l/' + l.id + '"><span class="t-emoji">' + l.emoji + '</span><span class="t-title">' + esc(l.title) + '</span><span class="t-meta">' + pagesLabel(l) + '</span><span class="t-stars">' + (p ? starsStr(p.stars) : (isTest ? "Challenge" : "Lesson " + (i + 1))) + "</span></a>"));
      });
      el.appendChild(sec);
    });
    return el;
  }

  function viewPage(p) {
    var el = h('<div></div>');
    if (p >= 138) {
      el.appendChild(h('<div class="card center"><div class="big-emoji">🔑</div><h2>Page ' + p + ' is the answer key</h2><p>Nice try! 😄 Answer keys are for grown-ups. Pick the page you\'re working on instead.</p><a class="btn" href="#/">Back home</a></div>'));
      return el;
    }
    if (p >= 130) {
      Tracker.pageLookup(p, "Writer's Handbook");
      el.appendChild(h('<div class="card center"><div class="big-emoji">📒</div><h2>Page ' + p + " is in the Writer's Handbook</h2><p>Here's our own handbook with tips you can use any time.</p><a class=\"btn\" href=\"#/handbook\">Open the Handbook</a></div>"));
      el.appendChild(workbookPanel(p, 130, 137));
      return el;
    }
    var l = lessonForPage(p);
    Tracker.pageLookup(p, l.title);
    el.appendChild(h('<div class="card found" style="--c:' + l.section.color + '"><div class="eyebrow">Workbook page ' + p + " is part of…</div><div class=\"found-row\"><span class=\"big-emoji\">" + l.emoji + '</span><div><h2>' + esc(l.title) + '</h2><p class="muted">' + esc(l.section.title) + " · " + pagesLabel(l) + '</p></div></div><a class="btn big" href="#/l/' + l.id + '">Practice this skill ▶</a></div>'));
    el.appendChild(workbookPanel(p, l.page, l.endPage));
    return el;
  }

  function viewLesson(id) {
    var l = byId(id); if (!l) return viewHome();
    var el = h('<div class="lesson" style="--c:' + l.section.color + '"></div>');
    el.appendChild(h('<a class="back" href="#/">← All lessons</a>'));
    var head = h('<div class="lesson-head"><span class="big-emoji">' + l.emoji + '</span><div><div class="eyebrow">' + esc(l.section.title) + " · workbook " + pagesLabel(l) + "</div><h1>" + esc(l.title) + "</h1></div></div>");
    el.appendChild(head);

    var learn = h('<div class="card learn"><div class="learn-head"><b>💡 Learn it</b></div></div>');
    learn.querySelector(".learn-head").appendChild(speakBtn(l.learn.join(" ")));
    l.learn.forEach(function (p) { learn.appendChild(h("<p>" + p + "</p>")); });
    el.appendChild(learn);

    var start = h('<button class="btn big">Start practice ▶ <small>(' + l.activities.length + " activities)</small></button>");
    start.onclick = function () { runLesson(l); };
    el.appendChild(start);

    var wbToggle = h('<button class="btn ghost wb-toggle">📘 Show my workbook ' + pagesLabel(l) + "</button>");
    wbToggle.onclick = function () { wbToggle.replaceWith(workbookPanel(l.page, l.page, l.endPage)); };
    el.appendChild(wbToggle);
    return el;
  }

  // ---------- activity runner ----------
  function runLesson(l) {
    var i = 0, scores = [];
    var acts = l.activities;
    function step() {
      app.innerHTML = "";
      var wrap = h('<div class="lesson" style="--c:' + l.section.color + '"></div>');
      var top = h('<div class="run-top"><a class="back" href="#/l/' + l.id + '">✕</a><div class="bar thick"><i style="width:' + (100 * i / acts.length) + '%"></i></div><span class="muted small">' + (i + 1) + "/" + acts.length + "</span></div>");
      wrap.appendChild(top);
      var a = acts[i];
      var card = h('<div class="card activity"></div>');
      wrap.appendChild(card);
      app.appendChild(wrap);
      window.scrollTo(0, 0);
      var render = { mc: actMC, sort: actSort, order: actOrder, write: actWrite }[a.type];
      render(a, card, l, function (score) { scores.push(score); i++; if (i < acts.length) step(); else finish(); });
    }
    function finish() {
      var score = scores.reduce(function (x, y) { return x + y; }, 0) / scores.length;
      var stars = score >= 0.9 ? 3 : score >= 0.65 ? 2 : 1;
      Tracker.lessonDone(l.id, l.title, score, stars);
      updateHud();
      app.innerHTML = "";
      var msg = stars === 3 ? "Amazing work!" : stars === 2 ? "Great job!" : "Good effort! Practice makes progress.";
      var next = ALL[ALL.indexOf(l) + 1];
      var done = h('<div class="card center finish" style="--c:' + l.section.color + '"><div class="stars-big">' + starsStr(stars) + "</div><h1>" + msg + '</h1><p class="muted">You got ' + Math.round(score * 100) + '% on “' + esc(l.title) + '”.</p><div class="row"><button class="btn ghost again">↻ Try again</button>' + (next ? '<a class="btn" href="#/l/' + next.id + '">Next: ' + esc(next.title) + " ▶</a>" : '<a class="btn" href="#/">🏁 Home</a>') + '</div><a class="back" href="#/">← All lessons</a></div>');
      done.querySelector(".again").onclick = function () { runLesson(l); };
      app.appendChild(done);
      if (stars === 3) confetti();
    }
    step();
  }

  function qHead(card, q) {
    var head = h('<div class="q"><p class="q-text">' + q + "</p></div>");
    head.appendChild(speakBtn(q));
    card.appendChild(head);
  }
  function feedback(card, ok, why, next, label) {
    var fb = h('<div class="feedback ' + (ok ? "ok" : "no") + '"><b>' + (ok ? ["Yes! 🎉", "You got it! ⭐", "Nice! 🙌", "Correct! ✨"][Math.floor(Math.random() * 4)] : "Not quite. Let's learn from it! 💪") + "</b>" + (why ? "<p>" + why + "</p>" : "") + "</div>");
    var b = h('<button class="btn">' + (label || "Next ▶") + "</button>");
    b.onclick = next; fb.appendChild(b);
    card.appendChild(fb);
    setTimeout(function () { b.focus(); fb.scrollIntoView({ behavior: "smooth", block: "nearest" }); }, 50);
  }

  function actMC(a, card, l, done) {
    qHead(card, a.q);
    var list = h('<div class="choices"></div>');
    var idx = shuffle(a.choices.map(function (_, i) { return i; }));
    idx.forEach(function (ci) {
      var b = h('<button class="choice">' + esc(a.choices[ci]) + "</button>");
      b.onclick = function () {
        var ok = ci === a.a;
        list.querySelectorAll("button").forEach(function (x) { x.disabled = true; });
        b.classList.add(ok ? "right" : "wrong");
        if (!ok) list.children[idx.indexOf(a.a)].classList.add("right");
        feedback(card, ok, ok ? a.why : ("The answer is “" + esc(a.choices[a.a]) + "”. " + (a.why || "")), function () { done(ok ? 1 : 0); });
      };
      list.appendChild(b);
    });
    card.appendChild(list);
  }

  function actSort(a, card, l, done) {
    qHead(card, a.q);
    card.appendChild(h('<p class="muted small">Tap a box for each one.</p>'));
    var picks = {};
    var list = h('<div class="sort-list"></div>');
    var items = shuffle(a.items.map(function (it, i) { return { t: it[0], b: it[1], i: i }; }));
    var check = h('<button class="btn" disabled>Check ✓</button>');
    items.forEach(function (it) {
      var row = h('<div class="sort-row"><div class="sort-item">' + esc(it.t) + '</div><div class="buckets"></div></div>');
      var bk = row.querySelector(".buckets");
      a.buckets.forEach(function (name, bi) {
        var b = h('<button class="bucket">' + esc(name) + "</button>");
        b.onclick = function () {
          picks[it.i] = bi;
          bk.querySelectorAll(".bucket").forEach(function (x) { x.classList.remove("sel"); });
          b.classList.add("sel");
          check.disabled = Object.keys(picks).length < items.length;
        };
        bk.appendChild(b);
      });
      row._it = it; list.appendChild(row);
    });
    card.appendChild(list);
    card.appendChild(check);
    check.onclick = function () {
      var right = 0;
      list.querySelectorAll(".sort-row").forEach(function (row) {
        var it = row._it, ok = picks[it.i] === it.b;
        if (ok) right++;
        row.classList.add(ok ? "right" : "wrong");
        row.querySelectorAll(".bucket").forEach(function (x, bi) { x.disabled = true; if (bi === it.b) x.classList.add("answer"); });
      });
      check.remove();
      var score = right / items.length;
      feedback(card, score === 1, (score === 1 ? "" : "You got " + right + " of " + items.length + ". The green boxes show the right answers. ") + (a.why || ""), function () { done(score); });
    };
  }

  function actOrder(a, card, l, done) {
    qHead(card, a.q);
    card.appendChild(h('<p class="muted small">Tap them in the right order. Tap a numbered one to undo.</p>'));
    var answer = h('<ol class="order-answer"></ol>');
    var pool = h('<div class="order-pool"></div>');
    var check = h('<button class="btn" disabled>Check ✓</button>');
    var picked = [];
    var shuffled = shuffle(a.items.map(function (t, i) { return i; }));
    if (shuffled.every(function (v, i) { return v === i; }) && shuffled.length > 1) shuffled.reverse();
    function draw() {
      answer.innerHTML = ""; pool.innerHTML = "";
      picked.forEach(function (ix, n) {
        var li = h('<li><button class="order-chip placed"><span class="num">' + (n + 1) + "</span>" + esc(a.items[ix]) + "</button></li>");
        li.firstChild.onclick = function () { picked.splice(n, 1); draw(); };
        answer.appendChild(li);
      });
      shuffled.forEach(function (ix) {
        if (picked.indexOf(ix) >= 0) return;
        var b = h('<button class="order-chip">' + esc(a.items[ix]) + "</button>");
        b.onclick = function () { picked.push(ix); draw(); };
        pool.appendChild(b);
      });
      answer.style.display = picked.length ? "" : "none";
      check.disabled = picked.length < a.items.length;
    }
    card.append(answer, pool, check);
    draw();
    check.onclick = function () {
      var right = picked.filter(function (ix, n) { return ix === n; }).length;
      var ok = right === a.items.length;
      answer.querySelectorAll(".order-chip").forEach(function (b, n) { b.disabled = true; b.classList.add(picked[n] === n ? "right" : "wrong"); });
      check.remove();
      var why = ok ? (a.why || "") : "Here's the right order:<ol>" + a.items.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ol>" + (a.why || "");
      feedback(card, ok, why, function () { done(right / a.items.length); });
    };
  }

  function actWrite(a, card, l, done) {
    card.classList.add("write");
    qHead(card, "✏️ " + a.q);
    if (a.tips.length) card.appendChild(h('<ul class="tips">' + a.tips.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>"));
    var key = l.id + "|" + a.q.slice(0, 30);
    var ta = h('<textarea rows="8" spellcheck="true" placeholder="Start writing here…"></textarea>');
    ta.value = Tracker.draft(key) || a.starter;
    var meter = h('<div class="meter"><div class="bar"><i></i></div><span class="wc"></span></div>');
    var checks = h('<div class="checks"></div>');
    if (a.checks.length) {
      checks.appendChild(h('<p class="small"><b>Check your work:</b></p>'));
      a.checks.forEach(function (c) { checks.appendChild(h('<label class="check"><input type="checkbox"> <span>' + esc(c) + "</span></label>")); });
    }
    var submit = h('<button class="btn" disabled>I\'m done! ✓</button>');
    function words() { var s = ta.value.trim(); return s ? s.split(/\s+/).length : 0; }
    function upd() {
      var w = words();
      meter.querySelector("i").style.width = Math.min(100, (100 * w) / a.min) + "%";
      meter.querySelector(".wc").textContent = w >= a.min ? w + " words ✓" : w + " / " + a.min + " words";
      meter.classList.toggle("full", w >= a.min);
      var allChecked = Array.prototype.every.call(checks.querySelectorAll("input"), function (x) { return x.checked; });
      submit.disabled = !(w >= a.min && allChecked);
    }
    var saveT;
    ta.addEventListener("input", function () { upd(); clearTimeout(saveT); saveT = setTimeout(function () { Tracker.draft(key, ta.value); }, 600); });
    checks.addEventListener("change", upd);
    card.append(ta, meter, checks, submit);
    upd();
    submit.onclick = function () {
      Tracker.saveWriting(l.id, l.title, a.q, ta.value);
      ta.readOnly = true; submit.remove();
      checks.querySelectorAll("input").forEach(function (x) { x.disabled = true; });
      feedback(card, true, "Your writing is saved. A grown-up can read it later. 📝", function () { done(1); });
    };
  }

  function viewHandbook() {
    var el = h('<div><a class="back" href="#/">← Home</a><h1 class="page-title">📒 Writer\'s Handbook</h1><p class="muted">Quick tips to use any time you write.</p><div class="hb-grid"></div></div>');
    var g = el.querySelector(".hb-grid");
    window.HANDBOOK.entries.forEach(function (e) { g.appendChild(h('<div class="card hb"><h3>' + e.emoji + " " + esc(e.title) + "</h3>" + e.html + "</div>")); });
    return el;
  }

  // ---------- grown-ups ----------
  function pin() { return Tracker.db().settings.pin || CFG.defaultPin || "1234"; }
  function unlocked() { try { return sessionStorage.getItem("w4j.parent") === "1"; } catch (e) { return false; } }
  function viewParentGate() {
    var el = h('<form class="card center gate"><div class="big-emoji">🔒</div><h2>Grown-ups only</h2><p class="muted">Enter the PIN to see progress and usage.</p><input type="password" inputmode="numeric" maxlength="8" placeholder="PIN" autocomplete="off"><button class="btn" type="submit">Unlock</button><p class="err muted small"></p></form>');
    el.onsubmit = function (e) {
      e.preventDefault();
      if (el.querySelector("input").value === pin()) { try { sessionStorage.setItem("w4j.parent", "1"); } catch (x) {} route(); }
      else el.querySelector(".err").textContent = "That PIN isn't right.";
    };
    setTimeout(function () { el.querySelector("input").focus(); }, 50);
    return el;
  }
  function fmtMin(sec) { var m = Math.round(sec / 60); return m < 60 ? m + " min" : Math.floor(m / 60) + " h " + (m % 60) + " min"; }
  function fmtDate(iso) { var d = new Date(iso); return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" }) + ", " + d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" }); }

  function viewParent() {
    if (!unlocked()) return viewParentGate();
    var db = Tracker.db();
    var el = h('<div class="parent"><a class="back" href="#/">← Back to the app</a><h1 class="page-title">Grown-ups dashboard</h1></div>');

    // KPIs
    var days = db.days, keys = Object.keys(days).sort();
    var tk = Tracker.dayKey();
    var weekSec = 0, d = new Date();
    for (var i = 0; i < 7; i++) { var k = Tracker.dayKey(d); weekSec += (days[k] && days[k].sec) || 0; d.setDate(d.getDate() - 1); }
    var totalSec = keys.reduce(function (s, k) { return s + days[k].sec; }, 0);
    var activeDays = keys.filter(function (k) { return days[k].sec >= 60 || days[k].lessons.length; }).length;
    var doneCount = ALL.filter(function (l) { return db.progress[l.id]; }).length;
    var kpis = [
      ["Today", fmtMin((days[tk] && days[tk].sec) || 0)],
      ["Last 7 days", fmtMin(weekSec)],
      ["Day streak", Tracker.streak() + " 🔥"],
      ["Days used", activeDays],
      ["Total time", fmtMin(totalSec)],
      ["Lessons done", doneCount + " / " + ALL.length],
      ["Stars", totalStars() + " ⭐"],
      ["Writing pieces", db.writings.length]
    ];
    el.appendChild(h('<div class="kpis">' + kpis.map(function (k) { return '<div class="kpi"><span>' + k[0] + "</span><b>" + k[1] + "</b></div>"; }).join("") + "</div>"));

    // 14-day chart
    var chart = h('<div class="card"><h3>Minutes per day (last 14 days)</h3><div class="chart"></div><p class="muted small">Only counts time when she is actively tapping or typing. Time stops after 2 idle minutes or when the app is in the background.</p></div>');
    var data = [], dd = new Date(); dd.setDate(dd.getDate() - 13);
    for (var j = 0; j < 14; j++) { var kk = Tracker.dayKey(dd); data.push({ label: dd.toLocaleDateString(undefined, { weekday: "narrow" }), date: dd.toLocaleDateString(undefined, { month: "short", day: "numeric" }), m: Math.round(((days[kk] && days[kk].sec) || 0) / 60) }); dd.setDate(dd.getDate() + 1); }
    var max = Math.max(10, Math.max.apply(null, data.map(function (x) { return x.m; })));
    var bars = data.map(function (x, n) {
      var bh = (x.m / max) * 100;
      return '<div class="cbar" title="' + x.date + ": " + x.m + ' min"><span class="cval">' + (x.m || "") + '</span><i style="height:' + bh + '%"></i><span class="clab">' + x.label + "</span></div>";
    }).join("");
    chart.querySelector(".chart").innerHTML = bars;
    el.appendChild(chart);

    // Sessions
    var sess = db.sessions.filter(function (s) { return s.sec >= 10; }).slice(-15).reverse();
    el.appendChild(h('<div class="card"><h3>Recent sessions</h3>' + (sess.length ? '<table class="tbl"><thead><tr><th>Started</th><th>Active time</th></tr></thead><tbody>' + sess.map(function (s) { return "<tr><td>" + fmtDate(s.start) + "</td><td>" + fmtMin(s.sec) + "</td></tr>"; }).join("") + "</tbody></table>" : '<p class="muted">No sessions yet.</p>') + "</div>"));

    // Lessons
    var lessonsCard = h('<div class="card"><h3>Lesson progress</h3></div>');
    C.sections.forEach(function (s) {
      var rows = s.lessons.map(function (l) {
        var p = db.progress[l.id];
        return "<tr><td>" + l.emoji + " " + esc(l.title) + '<br><span class="muted small">' + pagesLabel(l) + "</span></td><td>" + (p ? starsStr(p.stars) : "–") + "</td><td>" + (p ? Math.round(p.best * 100) + "%" : "") + "</td><td>" + (p ? p.tries : "") + "</td><td>" + (p ? new Date(p.done).toLocaleDateString() : "") + "</td></tr>";
      }).join("");
      lessonsCard.appendChild(h('<details><summary><b>' + s.emoji + " " + esc(s.title) + "</b> (" + s.lessons.filter(function (l) { return db.progress[l.id]; }).length + "/" + s.lessons.length + ')</summary><table class="tbl"><thead><tr><th>Lesson</th><th>Stars</th><th>Best</th><th>Tries</th><th>Last</th></tr></thead><tbody>' + rows + "</tbody></table></details>"));
    });
    el.appendChild(lessonsCard);

    // Writings
    var w = db.writings.slice().reverse();
    var wc = h('<div class="card"><h3>Her writing (' + w.length + ")</h3></div>");
    if (!w.length) wc.appendChild(h('<p class="muted">Nothing written yet.</p>'));
    w.slice(0, 50).forEach(function (x) {
      wc.appendChild(h('<details class="writing"><summary><b>' + esc(x.title) + '</b> <span class="muted small">· ' + fmtDate(x.at) + " · " + x.text.trim().split(/\s+/).length + ' words</span></summary><p class="muted small">' + esc(x.q) + '</p><div class="wtext">' + esc(x.text).replace(/\n/g, "<br>") + "</div></details>"));
    });
    el.appendChild(wc);

    // Page lookups
    var pg = db.pages.slice(-10).reverse();
    el.appendChild(h('<div class="card"><h3>Workbook pages she looked up</h3>' + (pg.length ? "<ul>" + pg.map(function (x) { return "<li>Page " + x.page + " → " + esc(x.title) + ' <span class="muted small">(' + fmtDate(x.at) + ")</span></li>"; }).join("") + "</ul>" : '<p class="muted">None yet.</p>') + "</div>"));

    // Settings
    var st = h('<div class="card settings"><h3>Settings</h3>' +
      '<div class="set"><b>Cloud usage log</b><p class="muted small">' + (CFG.syncUrl ? "✅ On. Usage is also being sent to your Google Sheet." : "Off. Usage is saved on this device only. See README.md on GitHub to turn on the Google Sheet log so you can check from your own phone.") + "</p>" + (CFG.syncUrl ? '<button class="btn small ghost" data-a="test">Send a test row</button>' : "") + "</div>" +
      '<div class="set"><b>Workbook PDF on this device</b><p class="muted small wbstatus">Checking…</p><button class="btn small ghost" data-a="wbload">📂 Load / replace PDF</button> <button class="btn small ghost" data-a="wbdel">Remove</button></div>' +
      '<div class="set"><b>Change PIN</b><div class="row"><input type="password" inputmode="numeric" maxlength="8" placeholder="New PIN" class="newpin"><button class="btn small" data-a="pin">Save</button></div></div>' +
      '<div class="set"><b>Backup</b><p class="muted small">Download all progress and writing as a file.</p><button class="btn small ghost" data-a="export">⬇ Download backup</button></div>' +
      '<div class="set"><b>Reset progress</b><p class="muted small">Erases lessons, stars, writing, and usage on this device.</p><button class="btn small danger" data-a="reset">Reset…</button></div>' +
      '<div class="set"><button class="btn small ghost" data-a="lock">🔒 Lock dashboard</button></div></div>');
    WB.has().then(function (y) { st.querySelector(".wbstatus").textContent = y ? "✅ Loaded. Page numbers show the real workbook page." : "Not loaded. Load it once and she can see each workbook page next to the practice."; });
    st.addEventListener("click", function (e) {
      var a = e.target.getAttribute && e.target.getAttribute("data-a"); if (!a) return;
      if (a === "test") { Tracker.testSync(); toast("Test sent. Check your sheet in a few seconds."); }
      if (a === "wbload") pickWorkbook(function () { route(); });
      if (a === "wbdel") WB.remove().then(function () { toast("Removed"); route(); });
      if (a === "pin") { var v = st.querySelector(".newpin").value.trim(); if (v.length < 4) return toast("Use at least 4 digits"); db.settings.pin = v; Tracker.save(); toast("PIN saved"); st.querySelector(".newpin").value = ""; }
      if (a === "export") {
        var blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
        var link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "writing-quest-backup-" + Tracker.dayKey() + ".json"; link.click();
      }
      if (a === "reset") {
        if (e.target.dataset.sure) { Tracker.reset(); updateHud(); toast("Progress reset"); route(); }
        else { e.target.dataset.sure = "1"; e.target.textContent = "Tap again to erase everything"; }
      }
      if (a === "lock") { try { sessionStorage.removeItem("w4j.parent"); } catch (x) {} location.hash = "#/"; }
    });
    el.appendChild(st);
    return el;
  }

  // ---------- router ----------
  function route() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    var hsh = location.hash.replace(/^#\/?/, "");
    var parts = hsh.split("/");
    var v;
    if (parts[0] === "l") v = viewLesson(parts[1]);
    else if (parts[0] === "page") v = viewPage(parseInt(parts[1], 10) || 1);
    else if (parts[0] === "handbook") v = viewHandbook();
    else if (parts[0] === "parent") v = viewParent();
    else v = viewHome();
    app.innerHTML = ""; app.appendChild(v);
    document.body.classList.toggle("is-parent", parts[0] === "parent");
    window.scrollTo(0, 0);
    updateHud();
  }
  window.addEventListener("hashchange", route);
  route();
})();
