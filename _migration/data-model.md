# Data model plan

This pass strengthens the site around structured data that can feed both the website and a future CV.

## Data files and website pages

| Data file | Website use | Future CV use |
| --- | --- | --- |
| `site.json` | Header, home, contact, identity links, language notes | Identity, affiliations, contact block |
| `navigation.json` | Site navigation | No direct CV use |
| `research.json` | Research page and homepage preview | Research interests |
| `publications.json` | Publications page and homepage preview | Publications section |
| `courses.json` | Teaching page and homepage preview | Teaching section |
| `notes.json` | Notes page | Selected notes/books/teaching materials |
| `students.json` | Students page | Supervision section |
| `talks.json` | Future talks page or selected research page entries | Talks and seminars |
| `software.json` | Curated Software page only | Selected projects if desired |
| `cv.json` | CV page outline and future generation config | Section order and inclusion rules |

## Record conventions

- Prefer stable `id` values for cross-references.
- Prefer `languages: ["en"]`, `languages: ["mn"]`, or `languages: ["en", "mn"]` for content records.
- Use `language: "en"` only for configuration files or single-language site-level metadata.
- Use `cvInclude` on records that may feed a future CV.
- Keep `source` or `oldSite` fields during migration so old material remains traceable.
- Replace old-site source pointers with public URLs only after deciding what will be published.

## Course model

Courses should eventually support both a teaching-history table and richer course pages. The current shape is:

- `id`
- `code`
- `title`
- `term` with `season`, `year`, and display `label`
- `institution`
- `role`
- `level`
- `languages`
- `topics`
- `cvInclude`
- `oldSite.path` and `oldSite.linkedFrom`
- `lectureLog` for future lecture-by-lecture notes

The old archive structure matters: `_old_site/McGill/` is the old main homepage, while sibling `Math...` folders are course pages linked from the old Teaching page.

## Publication model

Publication records should support both a readable website list and a CV bibliography:

- `id`
- `type`
- `status`
- `title`
- `authors`
- `year`
- `venue`
- `volume`, `issue`, `pages`, or `articleNumber`
- `doi` and `arxiv` when available
- `links`
- `languages`
- `cvInclude`
- `source`

## Avoiding double entry

When adding a new paper, add it only to `publications.json`. When adding a new course, add it only to `courses.json`. Pages and future CV output should render from the same record rather than copying prose into separate pages.
