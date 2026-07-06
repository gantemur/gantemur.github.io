# CV integration plan

The eventual goal is one source for the website and CV where reasonable. This pass does not build a CV generator, but the data now anticipates one.

## Proposed CV source flow

1. Maintain canonical records in `src/_data/`.
2. Use `src/_data/cv.json` to decide CV section order and inclusion rules.
3. Render the website pages from the same data.
4. Later, add either:
   - an Eleventy-generated HTML CV page;
   - a print stylesheet for that page;
   - a PDF export step if needed.

## CV sections and sources

- Identity and affiliation: `site.json`
- Research interests: `research.json`
- Publications: `publications.json`
- Talks and seminars: `talks.json`
- Teaching: `courses.json`
- Supervision: `students.json`
- Notes/books/teaching materials: selected records from `notes.json`
- Software/projects: selected records from `software.json`

## Current verification needs

Before publishing a CV-like page, verify:

- current title and affiliation
- current email and office/contact details
- preferred GitHub Pages repository spelling
- current CV source or existing PDF
- which talks should be selected versus fully listed
- which notes and student writings can be public

## Migration still needed

- Extract the full bibliography from `_old_site/McGill/research.html`.
- Extract the talks list from `_old_site/McGill/research.html` into `talks.json`.
- Extract the old McGill teaching list from `_old_site/McGill/teaching.html` into `courses.json`, with sibling course folders recorded as `oldSite.path`.
- Extract the notes index from `_old_site/McGill/notes.html` into `notes.json`.
- Extract supervision from `_old_site/McGill/students.html` into `students.json`, separating graduate supervision, undergraduate projects, and expository writings.

## Practical rule

The website and CV should disagree only by selection and formatting, not by maintaining separate facts.
