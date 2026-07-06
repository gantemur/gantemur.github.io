# Next steps

1. Verify current public facts before launch:
   - affiliation and title
   - email and office address
   - CV source
   - preferred spelling for the GitHub Pages repository name

2. Extract the full bibliography from `_old_site/McGill/research.html` into `src/_data/publications.json`.
   - Keep one publication entry per paper.
   - Preserve old-site source paths during migration.
   - Add DOI, arXiv id, venue, volume, issue, pages, and public URL fields where available.

3. Decide the teaching archive policy:
   - list all courses only
   - migrate selected course pages
   - keep old course pages as external/historical links
   - create new NUM-ready course templates
   - remember that the sibling `Math...` folders under `_old_site/` are old course pages linked from `_old_site/McGill/teaching.html`

4. Classify notes:
   - polished notes worth surfacing
   - course handouts that belong under Teaching
   - student reports requiring permission or review
   - Mongolian notes to add later

5. Normalize supervision data:
   - current students
   - completed graduate students
   - undergraduate projects
   - expository student writings

6. Decide what belongs on Software:
   - curated external links only in this repo
   - separate interactive projects in `sol`
   - archival links to old simulations if still useful

7. Replace draft prose with final homepage text and add the current CV PDF if desired.

8. Expand `src/_data/talks.json` from the old research page talks section.

9. Keep the one-source rule while migrating:
   - add a paper only to `publications.json`
   - add a course only to `courses.json`
   - add a supervision item only to `students.json`
   - let website pages and the future CV read from those records
