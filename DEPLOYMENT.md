# Deployment & Local Viewing — EWT Website V1

Two things, in order of how often you will need them:

1. [**View the site on your own machine**](#1-view-the-site-locally) — nothing is published, no account needed.
2. [**Publish it to Cloudflare Pages**](#2-publish-to-cloudflare-pages) — the confirmed host (`docs/13-OPEN-QUESTIONS.md` Q-03).

The site is a **static export**: `npm run build` produces a folder of plain HTML, CSS,
JS, fonts and images with no server behind it. That is why deployment is little more than
handing that folder to a host.

---

## 1. View the site locally

### Prerequisites

- **Node.js 20 or newer** — check with `node -v`. Download from <https://nodejs.org> if needed.
- The project folder, with dependencies installed once:

```bash
cd C:\EWT-EASTERN-WORLD-TECHNOLOGIES
npm install
```

### Option A — development server (use this while editing)

```bash
npm run dev
```

Open **<http://localhost:3000>**. Edits to any file under `src/` appear in the browser
within a second or two. Stop the server with `Ctrl+C`.

This is the right mode for making changes. It is *not* representative of production
performance — the dev server compiles on demand, so first loads are slow and the
JavaScript is unminified.

### Option B — preview the real production build (use this before deploying)

```bash
npm run build     # writes the static site into ./out
npm run start     # serves ./out at http://localhost:3000
```

This is byte-for-byte what Cloudflare will serve. Check here before every deploy —
especially anything involving fonts, images or metadata, which behave differently in dev.

Stop with `Ctrl+C`.

> **Port 3000 already in use?** Something else is running (often a dev server you forgot to
> stop). On Windows PowerShell:
> ```powershell
> Get-NetTCPConnection -LocalPort 3000 -State Listen | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
> ```

### Option C — just open the files

Don't. Opening `out/index.html` directly gives you `file:///…`, where absolute asset paths
and the fonts do not resolve. Always view over `http://localhost`.

### Verify a build before you ship it

```bash
npm run typecheck                              # TypeScript, zero errors expected
cd tools/web-screenshot-tool && npm install    # once
node _qa.mjs                                   # against a running localhost:3000
```

`_qa.mjs` walks all seven pages and reports: heading structure, one `<h1>` per page,
canonical and OG tags, WhatsApp links, `rel="noopener noreferrer"` on new-tab links,
missing `alt`, touch targets under 40px, banned marketing phrases, and horizontal overflow
at 320 / 360 / 390 / 768 / 1024 / 1280 / 1440 / 1920px. It should print
`No problems found.`

Full-page screenshots:

```bash
cd tools/web-screenshot-tool
node screenshot.mjs http://localhost:3000/ home
node screenshot.mjs http://localhost:3000/capabilities/ capabilities
```

Images land in `tools/web-screenshot-tool/temporary screenshots/`.

---

## 2. Publish to Cloudflare Pages

Cloudflare Pages was confirmed as the host: strong edge presence in Malaysia, a generous
free tier, no bandwidth cap, and automatic SSL.

There are two routes. **Git integration** is the one to use for anything ongoing — every
push deploys, and every pull request gets its own preview URL. **Direct upload** exists for
a first look without setting up a repository.

### Before you start

| You need | Notes |
|---|---|
| A Cloudflare account | Free tier is sufficient — <https://dash.cloudflare.com/sign-up> |
| A GitHub or GitLab repository (route A only) | The developer owns the repo for now (Q-22) |
| The domain | `ewt.com.my` is a **placeholder**. Do not attach a custom domain until the real one is confirmed — see [Custom domain](#custom-domain) |

---

### Route A — Git integration (recommended)

#### A1. Push the project to GitHub

```bash
cd C:\EWT-EASTERN-WORLD-TECHNOLOGIES
git init
git add .
git commit -m "EWT website V1"
git branch -M main
git remote add origin https://github.com/<your-account>/ewt-website.git
git push -u origin main
```

`.gitignore` already excludes `node_modules/`, `.next/`, `out/` and the screenshot
scratch folder. Nothing in this repository is secret: the WhatsApp number is confirmed
public (Q-01), and the email, phone and address are approved placeholders.

#### A2. Create the Pages project

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**.
2. Authorise Cloudflare for your GitHub account and pick the repository.
3. On the build configuration screen, set:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | **None** |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | *(leave blank)* |

> **Do not choose the Next.js preset.** That preset targets server-rendered Next.js on the
> edge runtime. This project is a plain static export, so the generic static path is the
> correct one. Picking the Next.js preset will produce a broken or needlessly complex
> deployment.

4. Under **Environment variables**, add one variable for the **Production** environment:

| Variable | Value | Why |
|---|---|---|
| `NODE_VERSION` | `20` | Pins the build image. Without it, Cloudflare's default Node version can drift and break a future build |

Do **not** set `NEXT_PUBLIC_PREVIEW_EXTENDED_BIOS` or `NEXT_PUBLIC_PREVIEW_ANALYTICS_UI`
in production. Those are the development-only preview flags (`README.md`), and the
placeholder founder-bio blocks must never appear on the live site.

5. **Save and Deploy.** The first build takes roughly 2–4 minutes.

When it finishes you get a URL like `https://ewt-website.pages.dev`. Open it and check
the site end to end.

#### A3. Ongoing deploys

- Push to `main` → production rebuilds automatically.
- Open a pull request → Cloudflare builds a preview at its own URL, so the client can
  review a change before it goes live.
- **Workers & Pages → your project → Deployments** lists every build, and any past
  deployment can be promoted back to production with **Rollback**.

---

### Route B — direct upload (quick look, no repository)

```bash
npm run build
```

1. Dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Name the project, then drag the **`out`** folder in (the folder itself, not its contents).
3. **Deploy site.**

Fine for a one-off review link. Every update means repeating the upload by hand, and there
are no preview builds — switch to Route A once the site is live for real.

---

## Custom domain

**Do this only once the final domain is confirmed.** The site is currently built against
the placeholder `www.ewt.com.my`, which is baked into the canonical tags, the Open Graph
URLs, `sitemap.xml` and `robots.txt`.

### Step 1 — update the site's own URL first

Edit `siteUrl` in `src/config/company.ts`:

```ts
siteUrl: 'https://www.your-real-domain.com',
```

Commit and push. Every canonical, OG and sitemap URL regenerates from that constant. If
you attach a domain without doing this, the live pages will still declare the placeholder
domain as canonical — which quietly damages search indexing.

### Step 2 — attach the domain

1. Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter `www.ewt.com.my` (the `www` host is the confirmed canonical — Q-03).
3. If the domain's DNS is already on Cloudflare, the `CNAME` is created for you. If not,
   Cloudflare shows the record to add at your registrar.
4. Add the apex `ewt.com.my` as a second custom domain so Cloudflare redirects it to
   `www` — the redirect must run in that direction, not the reverse.
5. SSL is issued automatically. Allow a few minutes.

> ⚠️ **Check email before changing DNS.** If the domain already carries mail, moving DNS
> without copying the existing `MX`, `SPF`, `DKIM` and `DMARC` records will silently break
> email delivery. Export the current zone first.

---

## Security headers

Static hosts serve no headers by default. **`public/_headers`** is already in the repo —
Cloudflare Pages reads it from the build output and applies it automatically, so there is
nothing to configure in the dashboard. Its contents, per
`docs/12-technical-requirements.md` §9:

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; img-src 'self' data: https://maps.googleapis.com https://maps.gstatic.com; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self'; frame-src https://www.google.com; connect-src 'self' https://maps.googleapis.com; base-uri 'self'; form-action 'none'
```

Notes on that CSP:

- `frame-src https://www.google.com` is required by the Maps embed on Contact. It is the
  only third-party origin the site needs. Remove it if the map is ever removed.
- `script-src 'unsafe-inline'` covers the small inline script in `layout.tsx` that sets the
  scroll-reveal class before first paint. Tightening this to a nonce needs server-side
  rendering, which V1 deliberately does not have.
- `form-action 'none'` is accurate — there are no forms in V1.

Static assets are content-hashed by Next.js, so Cloudflare's default long cache for
`/_next/static/*` is already correct. No cache rules to configure.

---

## Pre-launch checklist

`docs/12-technical-requirements.md` §11 is the authoritative list. The deployment-specific
items:

- [ ] `siteUrl` in `src/config/company.ts` is the **real** domain, and the site has been
      rebuilt since that change
- [ ] `NEXT_PUBLIC_PREVIEW_EXTENDED_BIOS` and `NEXT_PUBLIC_PREVIEW_ANALYTICS_UI` are absent
      from the production environment variables
- [ ] Every `PLACEHOLDER` value in `src/config/company.ts` has been confirmed or replaced —
      business hours, email, office phone, address, map location
- [ ] The Selangor address question has been decided. The placeholder address sits outside
      Sarawak, which reads oddly against Sarawak-only positioning
      (`docs/03-component-specifications.md` §4)
- [ ] The deployed response actually carries the security headers
      (`curl -I https://your-domain/`)
- [ ] `https://your-domain/robots.txt` and `/sitemap.xml` load and reference the real domain
- [ ] The WhatsApp CTA opens a chat with the correct number and the pre-filled message,
      tested on Android, iOS, WhatsApp Web, and a desktop with no WhatsApp installed
- [ ] The URL has been pasted into WhatsApp and LinkedIn and the preview card renders —
      this link gets shared after meetings, so the card is a first-class deliverable
- [ ] A 404 is branded: visit `https://your-domain/does-not-exist`
- [ ] Lighthouse mobile ≥ 90 performance, ≥ 95 accessibility / best practices / SEO
- [ ] `node _qa.mjs` reports no problems against the production build

---

## Troubleshooting

| Symptom | Cause and fix |
|---|---|
| Build fails: *Page "/projects/[slug]" is missing "generateStaticParams()"* | The dormant case-study route was renamed to `page.tsx` while `PROJECTS` is still empty. Next.js cannot emit a dynamic route with zero entries under `output: 'export'`. Either add a project or rename the file back to `page.dormant.tsx` |
| Pages deployed, but every asset 404s | The build output directory is wrong. It must be `out`, not `.next` or `dist` |
| Site loads unstyled, or fonts fall back to Arial | Almost always the Next.js framework preset being selected instead of **None**. Rebuild with the preset cleared |
| Build succeeds locally, fails on Cloudflare | Node version drift. Set `NODE_VERSION=20` in the environment variables and redeploy |
| Map area is an empty panel on Contact | The Google Maps iframe is lazy-loaded and can take a moment. If it never loads, check that the CSP includes `frame-src https://www.google.com` |
| WhatsApp preview card does not appear | WhatsApp caches link previews aggressively and skips images over 300KB. The generated cards are ~240–255KB; if you regenerate them, keep them under 300KB |
| Changes pushed but the live site is unchanged | Check **Deployments** — the build may have failed. The log shows the exact command that broke |
