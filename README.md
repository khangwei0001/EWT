# Eastern World Technology — Website (Frontend V1)

Six-page static corporate site for Eastern World Technology (EWT), built to the
specification in [`docs/`](docs/). The brief is
`Eastern_World_Technology_Website_Brief (1).pdf`; `docs/00-START-HERE.md` is the index.

**Deploying or just want to look at it?** See [`DEPLOYMENT.md`](DEPLOYMENT.md) — it covers
running the site locally and publishing it to Cloudflare Pages.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router), `output: 'export'` — a purely static build, no server |
| Language | TypeScript, strict |
| Styling | Tailwind CSS mapped onto a CSS custom-property token layer |
| Fonts | Archivo (display) + Public Sans (body), self-hosted via `next/font` |
| Icons | `lucide-react`, tree-shaken |
| Hosting | Cloudflare Pages |

No backend, CMS, authentication, payment flow, admin system, database, contact form or
analytics — all out of scope for V1 by the brief (`docs/12-technical-requirements.md` §2).

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
npm run start      # serve the built ./out on :3000
npm run typecheck  # tsc --noEmit
```

## Project structure

```
src/
  app/                     one folder per route + layout.tsx, robots.ts, sitemap.ts
    projects/[slug]/page.dormant.tsx   case-study route — parked, see below
  components/
    layout/   SiteHeader (+ drawer), SiteFooter, WhatsAppFab, Logo, AnalyticsNotice
    ui/       Button, Section, Icon, InfoTable, MapEmbed, Reveal
    cards/    CapabilityTile, CapabilityCard, PersonCard, ProjectCard, StatelessNotice,
              PlaceholderBioBlock
    blocks/   Hero, ProcessSteps, ValueList, CtaBand, CaseStudyLayout
  config/company.ts        every company detail + whatsAppHref()
  content/                 typed content data — all user-facing copy lives here
  styles/tokens.css        design tokens — the only file with literal hex values
  lib/                     seo helpers, cn
scripts/generate-assets.mjs  regenerates the OG cards and PNG app icons
scripts/prepare-images.mjs   turns assets/ into the web-ready public/images/
public/                    logo, favicon, og cards, icons, manifest
```

### Changing a photograph

Source files live in `assets/`. Replace one there, then:

```bash
node scripts/prepare-images.mjs   # writes public/images/**.webp
```

Every crop, resize and quality setting is a constant in that script, so the output
is reproducible. Alt text and intrinsic dimensions live in `src/content/images.ts`
— that is the only file to edit if an image is swapped for one of a different shape.

## The two things you will most likely need to change

### Change a company detail

Everything — the WhatsApp number, business hours, email, phone, address, map location,
domain — lives in **`src/config/company.ts`** and nowhere else. Edit that one file and
redeploy. No component contains a phone number, an address or a `wa.me` URL.

Fields marked `PLACEHOLDER` in that file are working values the client approved seeing
live for review. They are **not final** — the pre-launch list is in
`docs/12-technical-requirements.md` §11.

### Add a project to the Projects page

1. Add an entry to the `PROJECTS` array in **`src/content/projects.ts`**.
2. Put any thumbnail in `public/images/projects/`.
3. Redeploy.

The page switches itself from the "Coming Soon" state to the card grid as soon as the
array is non-empty. No layout work is needed.

**One-time step for the first project:** rename
`src/app/projects/[slug]/page.dormant.tsx` to `page.tsx`. Next.js refuses to build a
dynamic route under `output: 'export'` when there are zero entries for it, and shipping a
placeholder URL that leads nowhere would breach `docs/08-page-projects.md` §6. After that
rename, every further project really is a data-file edit only.

## Content rules you must not break

These are compliance requirements from the brief, not style preferences. A violation is a
build defect — the full list is in `docs/01-brand-and-positioning.md` §7.

- No completed project, named client, client logo, testimonial or statistic anywhere.
- No government/GLC partnership, appointment, panel membership or accreditation.
- No superlatives ("industry-leading", "world-class", "award-winning", …).
- EWT is never described as a web-design, app-development or digital agency.
- Sarawak is a stated market focus, never illustrated as a tourism destination.
- Founder bios stay within the brief's role descriptors until approved wording arrives.
- No photograph of a person who is not the named founder appears on Leadership — no stock,
  no AI-generated portraits, no silhouettes. The navy monogram is the approved fallback
  whenever a real photo isn't available for a founder.
  **⚠ Currently breached:** the Leadership page header image is a group of silhouetted
  figures, added on client instruction. See `FIXES.md` → "Flags on tasks 3–5".

`tools/web-screenshot-tool/_qa.mjs` checks the mechanical half of this (banned phrases,
heading structure, link hygiene, overflow at eight widths) across every page.

## Development-only flags

Both default to off and must stay off in production
(`docs/12-technical-requirements.md` §11):

| Flag | Effect |
|---|---|
| `NEXT_PUBLIC_PREVIEW_EXTENDED_BIOS=true` | Shows the dashed Background/Experience/Education placeholder blocks on Leadership, so the client can judge a fuller layout before real bio copy exists |
| `NEXT_PUBLIC_PREVIEW_ANALYTICS_UI=true` | Shows the inert analytics-notice banner. It tracks nothing and sets no cookie — it exists only to preview placement and tone |

`src/content/*.fixtures.ts` files are development fixtures. They must never be imported by
a production route.

## Outstanding assets

The site is complete and the WhatsApp conversion works end to end. What is still open,
from `docs/14-ASSET-REQUIREMENTS.md`:

| ID | Asset | Effect today |
|---|---|---|
| A-01 | Final logo SVG + variants | The header, footer and share cards use the supplied raster PNG at 4x. Legible, but it will not be crisp at every density until the SVG lands |
| A-02 | Favicon / app icon set | Generated from an interim simplified `E` glyph; regenerate with `scripts/generate-assets.mjs` once A-01 arrives |
| A-03 | Founder photographs | ✅ Resolved — real portraits are live on Leadership and the Home preview (see note below) |
| A-04 | Final founder bio wording | Concise drafts are live |
| A-05 | Open Graph share images | Generated from the interim mark; regenerate with A-01 |

**A-03 note:** the supplied photos (`assets/Wesley Chai (CEO) photo.png`, `assets/Edwin ting (CTO) photo.png`) are casual outdoor shots, not the plain-studio-background portraits specified in `docs/09-page-leadership.md` §5 — one has mall signage and shoppers behind the subject, the other a building facade. They were cropped to a tight 4:5 head-and-shoulders frame (`scripts/` has no crop tool; the crop boxes are hand-picked constants, see git history on `src/content/leadership.ts` if they ever need redoing) and saved to `public/images/leadership/`. They read fine at the sizes used on site, but neither meets the "consistent session, same lens, same background" bar the spec sets for a procurement-facing page — flag before treating this as the final asset.

Regenerating the raster assets:

```bash
npm run dev                              # or npm run start
npm i -D puppeteer                       # build-time only
node scripts/generate-assets.mjs
npm uninstall puppeteer
```

## Deliberate deviations from `docs/`

Two places where the specification contradicts itself or the platform, and what was done:

1. **Index numerals are `--text-muted`, not `--ewt-silver-400`.** `docs/02` §11.5 assigns
   silver to the `01 / 02 / 03` markers, but §2.6 states as a hard rule that silver is
   never a text colour — it measures 1.9:1 on white. The hard rule wins; the numerals use
   grey-500 (5.56:1) and are actually readable.
2. **`/projects/[slug]` ships parked rather than live.** See the note above.

Both are flagged here rather than buried, so the client can overrule either one.
