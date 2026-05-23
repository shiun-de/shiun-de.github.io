# shiun — homepage

The marketing site for [shiun](https://github.com/shiun-de/shiun), a bedside
CO₂ monitor.

Static-exported Next.js. Deployed to GitHub Pages on every push to `main`.

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
the static export and publishes it to GitHub Pages.

Live URL: https://shiun-de.github.io/homepage/

When `shiun.de` is registered, point a CNAME to `shiun-de.github.io` and
set `NEXT_PUBLIC_BASE_PATH=""` to drop the `/homepage` URL prefix.

## Stack

- Next.js 14 (static export)
- Tailwind for utilities (most styling is hand-written CSS in `app/globals.css`)
- No JavaScript at runtime beyond Next's default hydration. No 3D, no
  client-side state, no API routes. By design.
