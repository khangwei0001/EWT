# 12 — Technical Requirements

**Source:** Brief §10 "Frontend Development Requirements" (p.12), §4 V1 scope rule (p.5),
§12 Developer Handover Checklist (p.14).

---

## 1. The brief's requirements, restated as build rules `[BRIEF]` p.12

| # | Requirement | Where it is satisfied |
|---|---|---|
| 1 | Responsive across current desktop, tablet and mobile breakpoints | §5 |
| 2 | Fast initial load; compress and appropriately size all imagery | §6 |
| 3 | Semantic HTML structure and clean heading hierarchy | §4, `04-…` §8 |
| 4 | Basic on-page SEO: unique title + meta description per page, Open Graph metadata, sensible URL structure | `04-…` §4–7 |
| 5 | Accessible colour contrast, keyboard-usable navigation, meaningful alt text | §7, `02-…` §2.6 |
| 6 | Sticky or clearly accessible navigation on mobile | `03-…` §2 |
| 7 | Floating WhatsApp CTA across primary pages | `03-…` §4 |
| 8 | Subtle scroll/hover transitions only; motion must not distract | `02-…` §8 |
| 9 | Projects page designed so static project cards can be added later without redesigning the site | `08-…` §1, §3 |
| 10 | No backend, CMS, authentication, payment flow or admin system in V1 | §2 |

---

## 2. Scope boundary — what must NOT be built `[BRIEF]` p.5, p.12

❌ CMS or content editor ❌ Admin dashboard ❌ Customer login / authentication
❌ Payment or checkout ❌ Database ❌ Server-side API routes ❌ Contact form with a backend
❌ Newsletter / mailing list integration ❌ Live chat widget (other than the WhatsApp link)
❌ Search ❌ Multi-language switcher ❌ Real cookie consent banner (no tracking is active — the
`AnalyticsNotice` in `03-…` §21 is an inert visual preview only, not a functioning consent flow)
❌ A/B testing tooling ❌ Blog or news system

If any of these appear desirable during the build, they are a **V2 conversation**, not a V1 addition.
Two items are explicitly flagged for a *future* V2 rather than ruled out entirely — see §14 "Future
considerations" (Q-23): a Bahasa Malaysia translation, and a lightweight CMS for the Projects page.
Nothing needs building for either now; just avoid decisions that would make them harder later (e.g.
keep copy in data files, not inline JSX — already the rule in `04-…` §9).

---

## 3. Stack `[RESOLVED]` — see `13-OPEN-QUESTIONS.md` Q-21, Q-03

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js (App Router) with static export** (`output: 'export'`) — confirmed | First-class metadata/OG API, file-based routing for the dormant `/projects/[slug]`, purely static output — satisfies "no backend" while keeping a clean upgrade path to V2 |
| Language | TypeScript (strict) | Typed content models (`04-…` §9) prevent malformed content later |
| Styling | Tailwind CSS with the design tokens mapped into `theme.extend`, **plus** a `tokens.css` custom-property layer | Tokens stay the single source of truth; utilities keep the build fast |
| Icons | `lucide-react`, tree-shaken | Consistent 1.5px line set |
| Fonts | Self-hosted `woff2` via `next/font/local` — **Archivo + Public Sans** (see `02-…` §3.1, resolved Q-06) | No third-party request; survives corporate proxies |
| Hosting | **Cloudflare Pages — confirmed** | Client decision, Q-03. Strong APAC/Malaysia edge presence, generous free tier, no bandwidth cap |
| Domain | **`www.ewt.com.my`** — working placeholder, final domain TBD (Q-03) | Regenerate canonical/OG/sitemap once confirmed |
| DNS control | Developer, for now (Q-03) | Revisit once a final domain owner is confirmed |
| Deployment | Git-based CI via Cloudflare Pages' native GitHub/GitLab integration, preview builds on PR | Cloudflare Pages builds directly from the repo — no separate CI config needed |

### Cloudflare Pages — build settings

| Setting | Value |
|---|---|
| Build command | `next build` |
| Build output directory | `out` |
| Framework preset | None needed (static export) — do **not** use Cloudflare's Next.js adapter/preset, which targets SSR/edge-runtime Next.js. This is a plain static export; the generic static-site path is correct |
| Node version | Pin via `.nvmrc` or the Pages "Environment variables" setting to avoid drift |

### `next/image` caveat on static export

`next/image`'s built-in optimisation API requires a running Next.js server and **does not work**
with `output: 'export'`. Resolution: set `images: { unoptimized: true }` in `next.config.js` and
pre-generate AVIF/WebP sizes at build time (a small build script, or manual export via `sharp`).
This still meets the performance budget in §6 — it just means resizing happens once at build time
instead of on-demand at the edge. Do not wire a Cloudflare Images loader unless image count grows
enough to justify it — out of scope for a six-page site.

### Acceptable alternatives

- **Astro + Tailwind** — even lighter output, excellent for a mostly-static corporate site. Choose
  this if minimal JavaScript is the priority.
- **Vite + React + Tailwind + React Router** — fine, but you lose build-time metadata/routing
  conveniences and must hand-roll per-page `<head>` tags.

**Do not** use a page builder, a purchased template, or a WordPress theme. `[BRIEF]` p.2 requires an
independent identity; templates carry another company's visual language.

### Project structure

```
src/
  app/                     # routes: page.tsx per route + layout.tsx
    layout.tsx             # header, footer, FAB, fonts, base metadata
    page.tsx               # /
    about/page.tsx
    capabilities/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx   # dormant — generates 0 pages in V1
    leadership/page.tsx
    contact/page.tsx
    not-found.tsx
  components/
    layout/    SiteHeader, MobileNavDrawer, SiteFooter, WhatsAppFab, SkipLink
    ui/        Button, Section, SectionHeader, Eyebrow, InfoTable, Reveal
    cards/     CapabilityTile, CapabilityCard, PersonCard, ProjectCard, StatelessNotice
    blocks/    Hero, ProcessSteps, ValueList, CtaBand, CaseStudyLayout
  content/                 # typed data — see 04-… §9
  config/company.ts        # COMPANY + whatsAppHref()
  styles/tokens.css        # design tokens — the ONLY place hex values appear
  lib/                     # seo helpers, slugify, cn
public/
  fonts/  images/  og/  favicon files
```

---

## 4. Semantic HTML `[BRIEF]` p.12

- Landmarks on every page: `<header role="banner">`, `<nav aria-label="Main">`,
  `<main id="main">`, `<footer role="contentinfo">`.
- Content sections are `<section aria-labelledby="…">` with a real heading, not `<div>`.
- One `<h1>` per page; no skipped levels (`04-…` §8).
- Lists are `<ul>`/`<ol>`; definition pairs are `<dl>`.
- Navigating elements are `<a>`; state-changing elements are `<button>`. Never a clickable `<div>`.
- Decorative icons `aria-hidden="true"`; informative images get real alt text; purely decorative
  images get `alt=""`.
- No `<br>` for spacing, no heading tags chosen for their size.

---

## 5. Responsive `[BRIEF]` p.12 — "Desktop and mobile layouts must both feel polished" (p.4)

Breakpoints and containers are defined in `02-design-system.md` §5.

### Test matrix — all must be verified before handover

| Width | Device class | Checks |
|---|---|---|
| 320px | Small phone (floor) | No horizontal scroll; no clipped text; FAB does not obscure content |
| 360 / 390 | Common Android / iPhone | Hero legible without scroll; buttons full-width; drawer works |
| 768 | Tablet portrait | CTA visible in header bar alongside hamburger; 2-column grids |
| 1024 | Small laptop | 5-col Home capability grid or documented fallback; no ragged rows |
| 1280 | Standard desktop | Primary design target |
| 1440 / 1920 | Large desktop | Container caps at 1200/1280; navy bands extend full width; no stretched imagery |

Also verify: landscape phone (≤500px height — sticky header must not eat the viewport), 200% browser
zoom, and Windows display scaling at 125%/150% (very common on Malaysian corporate machines).

### Rules

- Mobile-first CSS. No `min-width` media query below `sm`.
- No fixed heights on text containers.
- Tables/wide content scroll inside their own container, never the page body.
- `overflow-x: hidden` on `<body>` is a **last resort**, not a layout strategy — find the offender.

---

## 6. Performance `[BRIEF]` "Fast initial load; compress and appropriately size all imagery" (p.12)

### Budgets (enforced, measured on a mid-tier Android over 4G)

| Metric | Target |
|---|---|
| LCP | **< 2.0s** |
| CLS | **< 0.05** |
| INP | < 200ms |
| Total JS (gzipped, initial route) | **< 120KB** |
| Total CSS (gzipped) | < 40KB |
| Home page weight (initial, incl. hero image) | **< 600KB** |
| Fonts | ≤ 4 files, ≤ 120KB total, subset `latin` |
| Lighthouse (mobile) | Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95 |

### Techniques

- Static generation for all routes; no client-side data fetching.
- Ship near-zero JavaScript: the only interactive pieces are the mobile drawer, the header scroll
  state, and the scroll-reveal observer. Everything else is CSS.
- `next/image` (or `<picture>` with AVIF + WebP), explicit `width`/`height` or `aspect-ratio` on every
  image to prevent CLS.
- `loading="lazy" decoding="async"` below the fold; hero `fetchpriority="high"`.
- Preload the two primary font weights; `font-display: swap`; set fallback metric overrides
  (`size-adjust`) to avoid layout shift on font swap.
- No icon font, no jQuery, no animation library (CSS transitions + IntersectionObserver suffice), no
  carousel library, no Google Fonts CDN, no third-party embeds.
- Long-cache hashed static assets; `Cache-Control: public, max-age=31536000, immutable`.

---

## 7. Accessibility `[BRIEF]` p.12 — target WCAG 2.1 AA

| Area | Requirement |
|---|---|
| Contrast | All text ≥4.5:1 (≥3:1 for ≥24px or ≥19px bold). Verified table in `02-…` §2.6. Gold and silver are never text colours on light backgrounds |
| Keyboard | Every interactive element reachable and operable; logical DOM order; no keyboard traps; drawer traps focus intentionally and returns it on close |
| Focus | Visible `:focus-visible` ring on every control, 2px + 3px offset, contrast ≥3:1 against its background |
| Skip link | First focusable element on every page |
| Touch targets | ≥44×44px |
| Alt text | Meaningful for content images; empty for decorative; never keyword-stuffed; never claims |
| Motion | `prefers-reduced-motion: reduce` honoured; revealed content renders at final state |
| Zoom | Usable at 200% zoom and 320px width without horizontal scroll |
| Language | `<html lang="en-MY">` |
| Link text | Descriptive — no bare "click here" / "read more" without context |
| New tab | External/WhatsApp links carry `rel="noopener noreferrer"`; announce with `aria-label` where the label alone is ambiguous |
| Headings | Correct hierarchy; headings describe the section |

### Testing

- Automated: axe DevTools / Lighthouse on every page — **zero** violations.
- Manual: full keyboard traverse of every page; VoiceOver or NVDA pass on Home and Contact;
  Windows High Contrast mode sanity check (borders must not vanish).

---

## 8. Browser support

| Browser | Versions |
|---|---|
| Chrome / Edge | Last 2 major |
| Safari (macOS & iOS) | Last 2 major |
| Firefox | Last 2 major |
| Samsung Internet | Last 2 major |

Government/corporate reality check: older Edge and locked-down Chrome builds are common. Avoid
bleeding-edge CSS without a fallback — in particular `:has()`, container queries, `@scope`,
`text-wrap: balance` (progressive enhancement only), and `subgrid`. Nothing essential to layout or
legibility may depend on them.

No IE11 support. No polyfill bundle.

---

## 9. Security & privacy

- No forms, no data collection, no cookies in V1. **Do not add a real cookie banner** — there is
  nothing to consent to. The `AnalyticsNotice` preview (`03-…` §21) is a static visual mock, not a
  functioning consent flow, so it does not change this.
- All external links: `rel="noopener noreferrer"`, including the Google Maps embed's implicit
  outbound link.
- Security headers at the host: `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`,
  `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, and a CSP permitting
  self-hosted assets **plus `frame-src https://www.google.com`** for the Maps embed (the one
  third-party origin the site now needs).
- HTTPS enforced; HTTP → HTTPS redirect; canonical host confirmed as **`www`** (Q-03) —
  `ewt.com.my` → `www.ewt.com.my` redirect, not the reverse.
- The WhatsApp number **is confirmed public** (Q-01) — no concern there. The office phone, email and
  address are `PLACEHOLDER` values (`03-…` §4) and are expected to be visible in the built HTML like
  any other public contact detail; nothing in this project stores a genuine secret in the repo.

---

## 10. Quality gates (code review must reject on any failure)

- [ ] No literal hex colour outside `styles/tokens.css`
- [ ] No spacing value outside the scale in `02-…` §4
- [ ] No copy string hard-coded in a component — all copy comes from `content/` or `copy` modules
- [ ] No `wa.me` URL outside `config/company.ts`
- [ ] No `console.log`, no commented-out blocks, no TODOs left in shipped code
- [ ] No unused dependency; no dependency added without a stated reason
- [ ] TypeScript `strict` passes with zero errors; no `any` in content models
- [ ] ESLint + Prettier clean
- [ ] No image over 300KB in `public/`
- [ ] No fabricated project, client, statistic or logo anywhere in the repo, including fixtures that
      could be deployed

---

## 11. Pre-launch checklist

Derived from `[BRIEF]` §12 "Build now" (p.14) plus standard launch hygiene.

### Build now — from the brief

- [ ] 6-page frontend structure
- [ ] Responsive header/navigation
- [ ] Corporate hero and section layouts
- [ ] Capabilities cards/sections
- [ ] Static Projects page with future-ready card/case-study layout
- [ ] Leadership profiles
- [ ] Contact / Discuss a Project page
- [ ] Floating CEO WhatsApp button
- [ ] Footer with company registration details
- [ ] Basic SEO/meta setup
- [ ] Mobile optimisation and performance pass

### Resolved via `13-OPEN-QUESTIONS.md` — build with these now

- [x] CEO WhatsApp number — `+60 12-879 7003` (Q-01)
- [x] Business hours — placeholder value set, confirm exact wording later (Q-02)
- [x] Domain — placeholder `www.ewt.com.my`, hosting confirmed Cloudflare Pages (Q-03)
- [x] Email / office phone / address / map — placeholder values set (Q-16)

### Still TBD before final launch — from the brief (client-supplied) `[BLOCKING]`

- [ ] **Final approved logo file/variants** (`14-…` A-01) — highest-priority remaining blocker
- [ ] **Founder photographs** (`14-…` A-03) — launching with monogram placeholders otherwise
- [ ] **Final founder biography wording** (`14-…` A-04) — launching with concise drafts otherwise
- [ ] **Final domain confirmation** — currently building against the `ewt.com.my` placeholder
- [ ] Any first approved EWT project/case study (not blocking — Projects ships "Coming Soon")
- [ ] Confirmation of the real business hours, email, phone and address (placeholders are launch-safe
      only if the client explicitly signs off on shipping them as-is)

### Placeholder values to confirm before go-live

Every `PLACEHOLDER`-tagged value in `03-component-specifications.md` §4 renders live on the site
today by design (the client asked to review them in place). Before production launch, each one needs
an explicit "confirmed real" or "confirmed OK to keep" from the client:

- [ ] `businessHours` / `publicHolidaysNote`
- [ ] `email`
- [ ] `officePhone`
- [ ] `address` / `googleMapsQuery` — **and** a decision on the Sarawak-positioning flag raised in
      `03-…` §4 and `10-…` §4
- [ ] Domain (`ewt.com.my` → final) and all URLs regenerated from it

### Development-only flags — confirm OFF before deploying to production

- [ ] `PREVIEW_EXTENDED_BIOS` (`03-…` §22, `09-…` §6a) — must be `false`/absent
- [ ] `PREVIEW_ANALYTICS_UI` (`03-…` §21) — must be `false`/absent, unless a real analytics decision
      has since replaced it with a real integration
- [ ] `projects.fixtures.ts` / `leadership.fixtures.ts` are not imported from any production route

### Launch hygiene

- [ ] Every page: unique title, description, canonical, OG image — verified in a live link preview
      (paste the URL into WhatsApp and LinkedIn and inspect the card)
- [ ] `robots.txt` + `sitemap.xml` correct and reachable
- [ ] Staging environment is `noindex` and/or access-restricted
- [ ] Favicon + `apple-touch-icon` + `site.webmanifest` present
- [ ] 404 page reachable and branded
- [ ] All internal links resolve; zero broken links
- [ ] WhatsApp link tested on: Android, iOS, WhatsApp Web, and a desktop with no WhatsApp installed
- [ ] Google Maps embed loads correctly and does not shift layout (Contact page)
- [ ] Lighthouse mobile scores meet §6 targets on every page
- [ ] axe: zero violations on every page
- [ ] Full keyboard traverse of every page
- [ ] Verified at all widths in the §5 test matrix
- [ ] Credibility audit: run the checklist in `01-brand-and-positioning.md` §10 against the live site
- [ ] No literal "TBD" renders anywhere. `PLACEHOLDER` values are permitted to render (by design) but
      every one is confirmed against the two checklists above before this box is ticked

---

## 12. Handover deliverables

1. Source repository with README covering install, dev, build, deploy.
2. A short "how to add a project" note: edit `src/content/projects.ts`, add images to
   `public/images/projects/`, redeploy. No layout work required.
3. A short "how to change company details" note pointing at `src/config/company.ts`.
4. Production build output + deployment access.
5. Lighthouse and axe reports for all six pages.
6. A list of every 🟡 DRAFT string that shipped without client approval, so the client can review
   post-launch.
7. A list of every 🟣 PLACEHOLDER value currently live on the site, cross-referenced with the
   checklist in §11 — this is the "must confirm before real launch" list.

### Repository ownership `[RESOLVED]` — Q-22

The developer owns the repository for now. EWT may hand maintenance to someone else in future, so
the README and the two "how to" notes above (points 2–3) are the load-bearing handover artefacts —
write them assuming the next reader has no prior context on this project, not just as a personal
note-to-self.

---

## 13. Future considerations (not built now) — Q-23

Flagged for reference only. None of these require any decision or scaffolding today beyond the
general rule already in place: keep content in typed data files (`04-…` §9), not inline in
components, so extending the site later doesn't require re-layout.

| Consideration | Status |
|---|---|
| CMS for Projects/case studies | Not anticipated to be *required* immediately, but plausible later if EWT starts publishing case studies frequently. No action now. |
| Bahasa Malaysia translation | Possible later (Q-09). No i18n library or routing added now — just avoid hard-coding English strings where a translation layer would later need to intercept them (already the rule via `content/` + `copy` modules). |
| Careers / news section | Not anticipated. No action now. |

Do not pre-build for any of these — that would be scope creep against the brief's explicit V1
frontend-only mandate (§4, p.5). This section exists so a future V2 conversation starts from a
written note, not a cold memory.
