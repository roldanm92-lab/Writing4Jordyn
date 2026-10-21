// Small helpers so the lesson files stay readable.
window.COURSE = { sections: [] };

// Multiple choice. a = index of the correct choice.
function mc(q, choices, a, why) { return { type: "mc", q, choices, a, why }; }

// Sorting game. items = [["text", bucketIndex], ...]
function sort(q, buckets, items, why) { return { type: "sort", q, buckets, items, why }; }

// Put in order. items listed in the CORRECT order; the app shuffles them.
function order(q, items, why) { return { type: "order", q, items, why }; }

// Writing task.
function write(q, opts) {
  opts = opts || {};
  return { type: "write", q, tips: opts.tips || [], min: opts.min || 15, checks: opts.checks || [], starter: opts.starter || "" };
}

// page = the workbook page this lesson starts on (lesson runs until the next lesson's page).
function lesson(id, page, title, emoji, learn, activities) {
  return { id, page, title, emoji, learn, activities };
}

function section(id, title, subtitle, color, emoji, lessons) {
  window.COURSE.sections.push({ id, title, subtitle, color, emoji, lessons });
}
