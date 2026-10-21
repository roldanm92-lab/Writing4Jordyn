# ✏️ Jordyn's Writing Quest

A kid-friendly practice site for Grade 4 writing. It has 47 lessons and 3 chapter challenges, in the same order as her paper workbook (Getting Started → Writing a Story → Writing to Inform → Writing an Opinion).

- **Lesson notes during practice**: the "Learn it" notes stay at the top of every question (tap to hide). In chapter challenges she can open notes from any lesson in that chapter.
- **Activities**: quizzes, sorting games, put-in-order, and writing prompts with a word meter and self-check list. She earns stars and builds a daily streak. A 🔊 button reads text aloud.
- **My workbook (optional)**: a grown-up loads the PDF once on her device, and the real workbook page then shows next to the practice. The PDF is saved only in that browser and is never uploaded here (`*.pdf` is git-ignored).
- **🔒 Grown-ups dashboard** (bottom of the page, default PIN **1234**, change it inside): minutes per day, sessions, streak, lessons and scores, and everything she wrote.

## 1. Turn on the website (one time)
1. On GitHub, open this repo → **Settings** → **Pages**.
2. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**, then **Save**.
3. After about a minute the site is live at **https://roldanm92-lab.github.io/Writing4Jordyn/**. Bookmark it or add it to her home screen.

Every push to `main` updates the site automatically.

## 2. See her usage from your own phone (optional, about 5 minutes)
Without this step, usage is still tracked, but only on her device (open 🔒 Grown-ups there). To get a live log you can check anywhere:

1. Create a new Google Sheet (e.g. "Jordyn Writing Log").
2. **Extensions → Apps Script**. Delete what's there and paste in everything from [`google-sheet/Code.gs`](google-sheet/Code.gs). Save.
3. **Deploy → New deployment** → type **Web app** → *Execute as*: **Me**, *Who has access*: **Anyone** → **Deploy**, and approve the permissions.
4. Copy the **Web app URL** and paste it into `config.js` as `syncUrl: "https://script.google.com/macros/s/…/exec"`. Commit the change.
5. On the Grown-ups page, tap **Send a test row**. A row should appear in your sheet.

The sheet gets a **Log** tab (every open, active minute, finished lesson with score, and writing piece with its full text) and a **Daily** tab (minutes, opens, lessons, writings per day).

> Note: on a public repo, anyone who reads `config.js` could see the Apps Script URL and add junk rows to your sheet. They could not read it. Making the repo private avoids this. GitHub Pages from a private repo needs a GitHub Pro plan.

## Editing content
Lessons live in `data/*.js`. Each lesson has a workbook `page`, a short "Learn it" section, and activities built with `mc()`, `sort()`, `order()`, and `write()` (see `data/helpers.js`). Change the name, PIN default, or sync URL in `config.js`.
