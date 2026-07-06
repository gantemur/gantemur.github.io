# Migration inventory

This inventory is based on a shallow inspection of `_old_site/` on 2026-07-06. The old folder is reference material only and should remain unedited.

## Old main homepage material

- `_old_site/McGill/` contains the old main personal homepage pages:
  - `index.html`
  - `research.html`
  - `teaching.html`
  - `students.html`
  - `notes.html`
  - `contact.html`
  - `style.css`, `menu.js`, `sidebar.js`
- The old homepage navigation covers Home, Teaching, Students, Notes, Research, and Contact.
- The old home page links to Google Scholar, arXiv, Mathematics Genealogy, and older illustrative simulations.

## Course folders

The sibling `Math...` folders under `_old_site/` are course pages that belonged to the same old homepage. This is visible from `_old_site/McGill/teaching.html`, whose McGill courses list links to paths such as `math567f21/`, `math581w22/`, `math579w20/`, `math248f19/`, and many others.

Course folders include:

- `Math170c`, `Math20f`
- `Math222w15`
- `Math248`, `Math248f16`, `Math248f19`
- `Math249w15`
- `Math315`, `Math315w14`
- `Math319`, `Math319w11`, `Math319w12`, `Math319w16`
- `Math325`, `Math325w22`
- `Math381`, `Math381f12`
- `Math387`, `Math387w16`, `Math387w18`
- `Math480`, `Math480s19`
- `Math566`, `Math566f10`
- `Math567`, `Math567f21`
- `Math578`, `Math578f09`, `Math578f20`
- `Math579`, `Math579w10`, `Math579w20`
- `Math580`, `Math580f11`, `Math580f12`, `Math580f13`, `Math580f14`, `Math580f18`
- `Math581`, `Math581w12`, `Math581w13`, `Math581w14`, `Math581w19`, `Math581w20`, `Math581w21`, `Math581w22`
- `Math595`, `Math595f14`
- `Math597`
- `Math599`, `Math599w17`, `Math599w19`
- `Math765f13`

Representative titles found in `index.html` or `content.htm` include functional analysis, honours ODE, PDE 1 and 2, numerical analysis, numerical differential equations, mathematical general relativity, complex variables, and analysis of adaptive methods.

## Research and publications

- `_old_site/McGill/research.html` contains:
  - preprints
  - journal articles
  - in-preparation items
  - thesis links
  - talks
- The publication data in `src/_data/publications.json` is only a starter subset. A later pass should extract and normalize the full bibliography.
- The talks section in `research.html` is long enough to merit its own `src/_data/talks.json`.

## Students and supervision

- `_old_site/McGill/students.html` contains:
  - doctoral students
  - master's students
  - many undergraduate research and independent study projects
  - expository writings by students
- The first scaffold only records a small representative subset in `src/_data/students.json`.

## Notes and assets

- `_old_site/McGill/notes.html` organizes notes around calculus/analysis/ODE, complex analysis, and PDE.
- The notes page links into many sibling course folders, so course folders are both teaching archive pages and source locations for individual notes.
- Course folders may contain many linked PDFs, assignments, lecture schedules, labs, and student reports.
- Shallow file type count: mostly HTML, with some PHP/HTM legacy CMS files, a few CSS/JS files, two TeX files, text files, and a small number of JPG images under `Math319w12/images`.

## Likely external or separate-project material

- `mathapp`, `mathapp10`: CRM/McGill applied mathematics seminar material.
- `seminar`, `seminar12`, `seminar16`: working seminar pages.
- Simulations, animations, calendars, planets, and other interactive tools should not be migrated into this repository in this pass.
