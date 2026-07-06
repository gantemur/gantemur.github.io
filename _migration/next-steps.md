# Next steps

1. Homepage polish and fact verification:
   - verify current title and affiliation
   - verify email and contact details
   - confirm public name order and Mongolian name form
   - confirm GitHub username and repository spelling

2. Publication verification:
   - verify the 2026 JHEP metadata for the dynamical lattice regulators paper
   - verify author names and metadata for arXiv:2605.01655
   - add DOI, issue, page/article numbers, and links only after verification
   - continue extracting the older bibliography from `_old_site/McGill/research.html`

3. Teaching and notes migration:
   - extract the full old teaching list from `_old_site/McGill/teaching.html`
   - remember that sibling `Math...` folders under `_old_site/` are old course pages linked from the old Teaching page
   - classify course handouts, polished notes, student reports, labs, and Mongolian/NUM future material
   - migrate only selected public-facing material, not the whole old course archive by default

4. CV generation:
   - keep publications, courses, talks, supervision, notes, and software in `src/_data/`
   - expand `talks.json` from the old research page
   - add a print-ready CV page or PDF export only after the data is cleaner

5. Deployment:
   - run `npm run check` and `npm run build`
   - decide the final remote and GitHub Pages URL
   - push to the GitHub Pages repository once launch facts are verified

6. External links:
   - link Sol when the separate tools project exists
   - link blog projects only once their scope and URLs are stable
   - keep animations, calendars, planets, and interactive tools outside this homepage
