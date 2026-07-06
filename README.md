# Academic homepage

This repository is the source for the new independent academic homepage of Gantumur Tsogtgerel. It is intended to become the GitHub Pages site for a repository named `gantemur.github.io`.

The `_old_site/` directory is copied reference material from the older McGill homepage and related course folders. It is intentionally ignored by Git and should not be edited, deleted, moved, or committed.

## Stack

The site uses Eleventy, a lightweight static site generator. It produces plain HTML and CSS suitable for GitHub Pages, while keeping reusable lists such as publications, courses, notes, students, and software links in structured data files.

## Install

```sh
npm install
```

## Run locally

```sh
npm run dev
```

Eleventy reads the `.njk` files under `src/` as templates and generates normal browser-facing HTML in `_site/`. Do not open or edit `.njk` files as if they were final pages; use the local Eleventy server.

Eleventy will print a local preview URL, usually `http://localhost:8080/`. Open that URL in a browser to preview the site.

## Build

```sh
npm run build
```

The generated static site is written to `_site/`.

Do not edit `_site/` manually. It is generated build output and can be deleted and rebuilt at any time.

## Clean and check

```sh
npm run clean
npm run check
```

`npm run clean` removes `_site/`. `npm run check` performs a lightweight local sanity check of the JSON data files and expected pages.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` installs dependencies, builds the Eleventy site, and publishes `_site/` through GitHub Pages. After pushing to the eventual `gantemur.github.io` repository, enable GitHub Pages with GitHub Actions as the source.

## Migration notes

Migration reports live in `_migration/`. Scratch files under `_migration/scratch/` are ignored, but the durable reports are meant to be tracked so future migration passes can be reviewed.
