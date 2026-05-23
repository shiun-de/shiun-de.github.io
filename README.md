# shiun.de — homepage

The marketing site for [shiun](https://github.com/shiun-de/shiun), a bedside
CO₂ monitor.

Static-exported Next.js. Deployed to GitHub Pages on every push to `main`.

Live URL: **https://shiun-de.github.io/**

## Local

```bash
npm install
npm run dev   # http://localhost:3000
```

## Build

```bash
npm run build   # produces ./out/ as a static site
```

## Deploy

Pushed to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds
the static export and publishes it to GitHub Pages. The Actions
`configure-pages` step sets `NEXT_PUBLIC_BASE_PATH` automatically; for
this org-site repo it's empty (served at the apex), so all asset URLs are
root-relative.

When `shiun.de` is registered, add a `CNAME` file containing `shiun.de`
to this repo's root and point a CNAME DNS record at `shiun-de.github.io`.
No code changes needed.

## Stack

- Next.js 14 (static export)
- Tailwind for utilities (most styling is hand-written CSS in `app/globals.css`)
- Dark mode via `prefers-color-scheme` + a manual toggle (auto / light / dark)
- No JavaScript at runtime beyond Next's default hydration and the small
  theme-toggle component. No 3D, no API routes. By design.
