# Content map

## New site sections

| New page | Source material | First-pass treatment |
| --- | --- | --- |
| Home | `_old_site/McGill/index.html` | Draft overview, profile links, Mongolian welcome placeholder |
| Research | `_old_site/McGill/index.html`, `_old_site/McGill/research.html` | Research areas only |
| Publications | `_old_site/McGill/research.html` | Starter structured publication subset |
| Teaching | `_old_site/McGill/teaching.html`, sibling course folders under `_old_site/` | Representative structured course records |
| Notes | `_old_site/McGill/notes.html`, course folders | Topic-level placeholders |
| Students | `_old_site/McGill/students.html` | Small supervision subset |
| Software | `_old_site/McGill/index.html`, possible tool folders | Curated links only; no tool migration |
| CV | none identified in shallow pass | Placeholder page |
| Contact | `_old_site/McGill/contact.html` | Draft contact data marked for verification |

## Data files

- `src/_data/site.json`: site identity, draft welcome text, profile links.
- `src/_data/navigation.json`: primary navigation.
- `src/_data/research.json`: research areas.
- `src/_data/publications.json`: starter publications.
- `src/_data/courses.json`: representative courses and old folder pointers.
- `src/_data/notes.json`: note categories and language support.
- `src/_data/students.json`: starter supervision entries.
- `src/_data/talks.json`: starter talks and seminars structure.
- `src/_data/software.json`: curated software/tool link placeholders.
- `src/_data/cv.json`: ordering/configuration for future CV generation from the same source data.

## Language policy

- Main prose is English.
- Data records use `languages` arrays where possible, or `language` for single-language configuration records.
- Mongolian content is represented structurally, but the site is not fully bilingual.

## Archive relationship

- `_old_site/McGill/` is the old main homepage.
- Sibling folders such as `_old_site/Math567f21/`, `_old_site/Math581w22/`, and `_old_site/Math579w20/` are old course pages linked from `_old_site/McGill/teaching.html`.
- The new site should model these as teaching records first. Individual notes, reports, or labs inside those course folders can be promoted later into `notes.json`, `students.json`, or `software.json` only after classification.
