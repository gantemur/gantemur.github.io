# Ignored or external material

## Ignored by Git

- `_old_site/`: copied reference material; do not commit.
- `node_modules/`: installed dependencies.
- `_site/` and `dist/`: generated build output.
- `.DS_Store`, logs, temporary files, and local environment files.
- `_migration/scratch/`: local working notes that should not become durable migration reports.

The durable migration reports in `_migration/` are intended to be tracked. They document decisions and make future migration passes easier to review.

## External or separate-project candidates

- `mathapp`, `mathapp10`: seminar pages that may be better represented as external/historical links.
- `seminar`, `seminar12`, `seminar16`: working seminar pages; classify before migration.
- Old simulations and animations: should be curated as links or moved to a separate project such as `sol`.
- Course labs involving code or interactive computation: classify under Teaching or separate software only after a closer pass.

## Do not migrate automatically

- Legacy analytics scripts.
- Legacy menu/sidebar JavaScript.
- Legacy course CMS scaffolding and PHP config files.
- Old visual themes and template assets unless a specific page needs archival preservation.
