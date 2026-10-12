# June Kim — Photography

Personal photography portfolio, published at the standalone address set in `SITE_URL`.

Built from [rockem/astro-photography-portfolio](https://github.com/rockem/astro-photography-portfolio)
(Astro, TypeScript, Tailwind, Sharp). Images are optimised at build time.

## Develop

```bash
npm ci
npm run dev        # http://localhost:4321/
npm test
npm run build
```

Needs Node 18.17+ (CI uses 22).

## Add photos

1. Drop images into `src/gallery/<collection>/`.
2. `npm run generate` rewrites `src/gallery/gallery.yaml` from the files (EXIF is read automatically).
3. Edit titles, descriptions and `collections` in the YAML. Add `featured` to a photo to show it on the home page.

## Site settings

- `astro.config.mts`: `site` (override with the `SITE_URL` env var); `base` stays `/`.
- `site.config.mts`: title, owner, social links.
- `src/content/about.md`: About page. `public/images/profile.webp`: profile photo.

## Deploy

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`.
Repository Settings → Pages → Source must be "GitHub Actions".
