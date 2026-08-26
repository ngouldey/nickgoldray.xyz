# nickgoldray.xyz

Photography portfolio, built with [Astro](https://astro.build). Deploys automatically to GitHub Pages on every push to `main` (see `.github/workflows/deploy.yml`).

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

   Optional caption text shown on the photo's detail page.
   ```

3. Set `featured: true` to have it appear in the "Selected work" preview on the homepage.
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
│   ├── components/        # Header, Footer, Gallery, PhotoCard
│   ├── layouts/            # BaseLayout (nav, footer, view transitions)
│   ├── pages/
│   │   ├── index.astro     # home / bio
│   │   ├── gallery.astro   # full grid
│   │   └── photos/[slug].astro  # per-photo detail page
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
