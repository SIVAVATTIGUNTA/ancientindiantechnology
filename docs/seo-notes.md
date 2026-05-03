# SEO Notes (Tasks From Audit Screenshot)

This project is a React + Vite single-page application (SPA). Many SEO audit tools crawl the **raw HTML** without executing JavaScript. In that mode, a SPA can look like an empty page (`<div id="root"></div>`), which triggers:

- Missing H1 / headings
- Few internal links
- Thin/empty content

To reduce these false positives (and to help non-JS crawlers), the site now includes a **non-JS fallback** in `index.html` that contains a real `<h1>`, a clean heading structure, and internal links. When JavaScript runs, that fallback is hidden and React renders normally.

## Completed Frontend Fixes
- Added a real default `<title>` in `index.html`.
- Added a real default `<meta name="description">` in `index.html`.
- Added an H1 + heading hierarchy + internal links fallback in `index.html` for non-JS crawlers.

## Server/Hosting Fixes (Not Frontend Code)

### 1) 301 redirect: `www` vs non-`www`
Your audit is asking for a single canonical host. This must be done in your hosting/DNS layer.

Common approaches:

- Cloudflare Pages/Cloudflare DNS: use Bulk Redirects for `www -> apex` or `apex -> www`.
- Vercel: configure in the Domains dashboard (domain redirects).
- Netlify: use `_redirects` or `netlify.toml`.

Netlify `_redirects` example (edit the domain as needed):
```txt
https://www.ancientindiantechnology.com/*  https://ancientindiantechnology.com/:splat  301!
http://www.ancientindiantechnology.com/*   https://ancientindiantechnology.com/:splat  301!
```

### 2) Enable gzip / Brotli compression
This is also server-side.

- Netlify/Vercel/Cloudflare typically enable Brotli/gzip automatically.
- If self-hosting with Nginx, enable gzip (HTML is compressed by default when gzip is on).

Nginx baseline example:
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript application/xml image/svg+xml;
```

## Recommended Next Step (If You Want “Perfect” SEO Per URL)
Because this is an SPA, **all routes share the same `index.html`** on first response. If you want each URL to return its own HTML (unique title/description/OG tags + unique H1 content for every route), you’ll need one of:

- Static pre-rendering (SSG) for important routes, or
- Server-side rendering (SSR)

This is a bigger change and should be planned based on your hosting.

