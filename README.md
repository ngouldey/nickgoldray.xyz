# nickgouldey.com

Photography portfolio, built with [Astro](https://astro.build). Deploys automatically to GitHub Pages on every push to `main` (see `.github/workflows/deploy.yml`).

The site is a single page (`src/pages/index.astro`): a hero photo (the newest entry marked `featured`) followed by the rest of the gallery in a grid. Clicking a thumbnail floats it into a draggable, resizable panel rather than linking anywhere — there's no visible caption text and no separate gallery page in the nav.

## Adding a photo

1. Drop the image file into `src/assets/photos/` (jpg/png/webp all work — Astro optimizes it at build time).
2. Add a markdown entry in `src/content/photos/`, e.g. `007-my-photo.md`:

   ```md
   ---
   title: "My Photo"
   image: "../../assets/photos/my-photo.jpg"
   date: 2026-08-01
   location: "Somewhere"
   tags: ["landscape"]
   featured: false
   ---

   Optional caption text (not currently displayed anywhere, but kept for possible future use).
   ```

3. Set `featured: true` on whichever photo should be the homepage's lead image — the newest featured entry wins.
4. Commit and push — the site rebuilds and redeploys automatically.

The six `placeholder-*` entries in `src/content/photos/` are stand-ins so the layout has something to render — delete them once you've added real photos.

## Project structure

```text
/
├── public/
│   ├── CNAME              # custom domain for GitHub Pages
│   └── favicon.svg
├── src/
│   ├── assets/photos/     # source image files
│   ├── content/photos/    # one .md entry per photo (frontmatter + caption)
│   ├── content.config.ts  # schema for the photos collection
│   ├── components/        # Header, Footer, Gallery (grid + float/drag/resize), PhotoCard
│   ├── layouts/           # BaseLayout (head, view transitions)
│   ├── pages/
│   │   ├── index.astro    # the site — hero + gallery grid
│   │   ├── gallery.astro  # same grid, unlinked (kept in case a separate page comes back)
│   │   └── photos/[slug].astro  # per-photo detail page, also unlinked
│   └── styles/global.css
└── .github/workflows/deploy.yml
```

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Installs dependencies                         |
| `npm run dev`       | Starts local dev server at `localhost:4321`   |
| `npm run build`     | Build the production site to `./dist/`        |
| `npm run preview`   | Preview the build locally before deploying    |
