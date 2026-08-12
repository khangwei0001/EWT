# 03 — Component Specifications

**Source:** Brief §10 (p.12), §9 (p.11), §12 (p.14), plus design system in `02-design-system.md`.

All components consume semantic tokens from `02-design-system.md` §2.5. No component defines its own
colour values.

---

## 1. Component inventory

| # | Component | Used on | Priority |
|---|---|---|---|
| 1 | `SiteHeader` (+ `MobileNavDrawer`) | All pages | P0 |
| 2 | `SiteFooter` | All pages | P0 |
| 3 | `WhatsAppFab` | All primary pages | P0 |
| 4 | `Button` (primary / secondary / tertiary / on-inverse) | All | P0 |
| 5 | `Section` shell (+ `SectionHeader`) | All | P0 |
| 6 | `Eyebrow` | All | P0 |
| 7 | `CapabilityTile` (compact) | Home §03 | P0 |
| 8 | `CapabilityCard` (detailed, 4-field) | Capabilities | P0 |
| 9 | `ValueRow` | Home §04 | P1 |
| 10 | `PersonCard` | Home §06, Leadership | P1 |
| 11 | `CtaBand` | Home §07, all page ends | P0 |
| 12 | `StatelessNotice` (Coming Soon panel) | Projects | P1 |
| 13 | `ProjectCard` (future-ready, dormant) | Projects | P1 |
| 14 | `CaseStudyLayout` (future-ready, dormant) | Projects | P2 |
| 15 | `InfoTable` (company info) | Contact, About | P1 |
| 16 | `ProcessStep` (numbered) | Home §02, About | P1 |
| 17 | `Breadcrumb` | Inner pages (optional) | P2 |
| 18 | `SkipLink` | All | P0 |
| 19 | `MapEmbed` (Google Maps, zoomable) | Contact | P1 |
| 20 | `AnalyticsNotice` (inert preview UI) | Footer area, all pages | P2 |
| 21 | `PlaceholderBioBlock` (dev-preview only) | Leadership | P2 — **must not ship to production** |

---

## 2. `SiteHeader`

`[BRIEF]`: "Responsive header/navigation" (p.14); "Sticky or clearly accessible navigation on
mobile" (p.12); suggested navigation: `Home  About  Capabilities  Projects  Leadership  Contact
[Discuss a Project]` (p.12).

### Structure

```
[ EWT logo lockup ]            Home  About  Capabilities  Projects  Leadership  Contact   [ Discuss a Project ]
```

### Desktop (≥1024px)

| Property | Value |
|---|---|
| Height | 80px (top of page) → **68px** when scrolled >24px |
| Container | `--container-wide` (1280px), gutter 48px |
| Background (at top, Home only) | transparent over the navy hero; logo + links use inverse colours |
| Background (scrolled, and all inner pages) | `--ewt-white` + `--shadow-sm` + 1px bottom `--border-default` |
| Position | `position: sticky; top: 0; z-index: 100` |
| Logo height | 32px (28px when condensed) |
| Nav link | `--type-body-sm` 15px, weight 500, `--text-body`; gap 32px |
| Nav link hover | colour → `--text-link`; 2px underline appears 6px below baseline, 150ms |
| Nav link active (current page) | colour → `--ewt-navy-700`, weight 600, persistent 2px `--action-primary` underline; `aria-current="page"` |
| CTA button | `Button` variant `primary`, size `sm` (see §5), label **"Discuss a Project"**, opens WhatsApp |
| Transition | background/height 250ms `--ease-standard` |

**Header CTA target:** the header "Discuss a Project" button opens the CEO WhatsApp link directly
(same as the FAB) — not the Contact page. The Contact page is reachable from the `Contact` nav item.

### Tablet (768–1023px)

Collapse the link list into the drawer at ≤1023px, but **keep the "Discuss a Project" button
visible** in the bar alongside the hamburger. Conversion must never be behind a menu.

### Mobile (<768px)

| Property | Value |
|---|---|
| Height | 64px, sticky |
| Left | Logo, 26px tall |
| Right | Compact CTA (icon-only WhatsApp round button, 44×44, `aria-label="Discuss a project on WhatsApp"`) + hamburger (44×44) |
| Background | Always solid `--ewt-white` + `--shadow-sm` (do not use transparent-over-hero on mobile — legibility risk) |

### `MobileNavDrawer`

| Property | Value |
|---|---|
| Trigger | Hamburger, `aria-expanded`, `aria-controls` |
| Panel | Slides in from right, width `min(88vw, 380px)`, full height, `--surface-page` |
| Scrim | `rgba(10,22,40,0.55)`, click closes |
| Items | Stacked, `--type-h4` 18px, 56px row height, 1px `--border-default` between |
| Footer of drawer | Full-width primary `Discuss a Project` button + small registration number line |
| A11y | Focus trapped inside; `Esc` closes; focus returns to hamburger; `body` scroll locked; `role="dialog" aria-modal="true" aria-label="Main navigation"` |
| Motion | 400ms `--ease-standard`; scrim fades 250ms |

### Header a11y

- Wrap in `<header role="banner">`; nav in `<nav aria-label="Main">`.
- `SkipLink` ("Skip to main content") is the first focusable element — visually hidden until focused,
  then pinned top-left with `--action-primary` background and white text.
- Logo links to `/` with `aria-label="Eastern World Technology — home"`.

---

## 3. `SiteFooter`

`[BRIEF]` §9 (p.11): *"Keep the footer minimal: logo, short company descriptor, navigation,
registration number, business hours and CEO WhatsApp CTA. Do not add unnecessary contact information
unless later approved."*

**Do not add:** email address, phone number, office address, social media icons, newsletter signup,
"back to top" marquee, sitemap sprawl, credits/"built by" line.

### Structure — desktop 4-column, `--surface-inverse` (`--ewt-navy-900`)

```
────────────────────────────────────────────────────────────────────────
 [ EWT logo — reversed/white ]        Navigate            Company
 Technology, Structured for            Home                Registration No.
 Business.                             About               202501010006 (1611420-T)
                                       Capabilities
 A Sarawak-focused technology          Projects            Business Hours
 project and solutions company.        Leadership          [TBD]
                                       Contact
                                                           [ Discuss a Project ]  ← button
────────────────────────────────────────────────────────────────────────
 © 2026 Eastern World Technology. All rights reserved.
────────────────────────────────────────────────────────────────────────
```

| Property | Value |
|---|---|
| Background | `--surface-inverse` `#0A1628` |
| Top accent | Optional 2px gradient rule (`--gradient-accent-rule`) spanning 120px at container left |
| Padding | 80px top / 48px bottom (desktop); 56 / 40 (mobile) |
| Columns | 4 cols desktop (`4 / 3 / 3 / 2` of 12), 2 cols tablet, 1 col stacked mobile |
| Logo | Reversed (white) EWT lockup, 34px tall |
| Descriptor | `--type-body-sm`, `--text-on-inverse-mut`, max `44ch` |
| Column headings | `--type-eyebrow`, `--ewt-silver-400` |
| Links | `--type-body-sm`, `--text-on-inverse-mut`; hover → `--ewt-white` + underline |
| Registration number | `--type-small`, tabular numerals, `--text-on-inverse-mut` |
| Divider above copyright | 1px `--border-inverse` |
| Copyright | `--type-caption`, `--text-on-inverse-mut`. Year rendered from build date, not hard-coded |
| CTA button | `Button` variant `on-inverse-primary` |

`<footer role="contentinfo">`; footer nav in `<nav aria-label="Footer">`.

### Placeholder handling

Business hours are `TBD` `[BRIEF]` p.11. Until supplied, **omit the Business Hours row entirely** —
do not render the literal string "TBD" on the live site. Keep the markup in place, commented, with a
single config flag `COMPANY.businessHours` that renders the row when non-empty.

---

## 4. `WhatsAppFab` — floating CEO WhatsApp button

`[BRIEF]`: "A floating WhatsApp button should remain available across the site" (p.3);
"Floating WhatsApp CTA across primary pages" (p.12); "Floating CEO WhatsApp button" (p.14).

### Behaviour

| Property | Value |
|---|---|
| Present on | All primary pages (Home, About, Capabilities, Projects, Leadership, Contact) |
| Position | `position: fixed; right: 24px; bottom: 24px; z-index: 90` (desktop) / `right:16px; bottom:16px` (mobile) |
| Appearance timing | Appears after the user scrolls past the hero (≥400px) with a 250ms fade+rise; always visible on inner pages |
| Suppression | Hidden while the mobile drawer is open; on the Contact page it may remain (the page's own CTA is primary) |
| Link | `https://wa.me/<NUMBER>?text=<URL-ENCODED MESSAGE>` |
| Attributes | `target="_blank" rel="noopener noreferrer"` |
| Safe area | Respect `env(safe-area-inset-bottom)` on iOS |

### Appearance `[DERIVED]` — see `13-OPEN-QUESTIONS.md` Q-02

Two forms, both on-brand (WhatsApp green is deliberately **not** used as a fill, because a saturated
green pill conflicts with the brief's restrained corporate palette):

- **Desktop — extended pill:** height 52px, `--radius-full`, background `--ewt-navy-700`,
  white WhatsApp glyph 22px + label "Discuss a Project" (`--type-button`, white),
  padding `0 24px 0 18px`, `--shadow-fab`. Hover: background `--ewt-navy-600`, `translateY(-2px)`.
- **Mobile — circular:** 56×56, `--radius-full`, same background, glyph only, `--shadow-fab`.

Fallback if the client prefers maximum recognisability: keep the navy container and render the
WhatsApp glyph in `#25D366`. Do **not** make the whole button green.

### A11y

- `aria-label="Discuss a project with our CEO on WhatsApp"`.
- Focus ring uses `--focus-ring` with 3px offset (visible against navy).
- Must not overlap footer CTA content — add `padding-bottom: 96px` to the last section on mobile.
- Must not obscure any text at 320px width.

### Config

Values below are confirmed answers from `13-OPEN-QUESTIONS.md` (Q-01, Q-02, Q-16). Fields marked
`PLACEHOLDER` are provisional working values the client has explicitly approved for development and
review — they are **not final** and must be confirmed before production launch (tracked in
`14-ASSET-REQUIREMENTS.md` and the pre-launch checklist in `12-technical-requirements.md`).

```js
// src/config/company.ts  — single source of truth
export const COMPANY = {
  name: 'Eastern World Technology',
  shortName: 'EWT',
  registrationNo: '202501010006 (1611420-T)',
  tagline: 'Technology, Structured for Business.',

  // Confirmed — Q-01. Wesley Chai (CEO) and Edwin Ting (CTO) were both given as
  // +60 12-879 7003 (identical). The brief's single primary conversion targets the
  // CEO specifically (message opens "Hi Wesley…"), so only one number is wired site-wide.
  ceoWhatsAppNumber: '60128797003',       // international format, digits only
  ceoWhatsAppDisplay: '+60 12-879 7003',  // shown as visible text on Contact — Q-01 "both"

  whatsAppMessage:
    "Hi Wesley, I came across Eastern World Technology's website. I'd like to discuss a potential project with EWT.",

  // PLACEHOLDER — Q-02. Working value approved for now; confirm exact wording before launch.
  businessHours: 'Monday – Friday, 9:00am – 6:00pm (MYT)',
  publicHolidaysNote: 'Closed on Malaysian public holidays.',   // PLACEHOLDER — Q-02

  // PLACEHOLDER — Q-16. All approved as placeholders pending real values.
  email: 'info@ewt.com.my',                                     // PLACEHOLDER
  officePhone: '+60 3-1234 5678',                                // PLACEHOLDER
  address: 'Ara Damansara, Petaling Jaya, Selangor, Malaysia',   // PLACEHOLDER — exact street TBD
  linkedInUrl: '',                                               // PLACEHOLDER — not yet created; omit when empty
  googleMapsQuery: 'Ara Damansara, Petaling Jaya, Selangor',     // PLACEHOLDER — drives MapEmbed (§20)
};

export const whatsAppHref = () =>
  COMPANY.ceoWhatsAppNumber
    ? `https://wa.me/${COMPANY.ceoWhatsAppNumber}?text=${encodeURIComponent(COMPANY.whatsAppMessage)}`
    : '/contact';                       // graceful fallback if the number is ever unset
```

**Build rule:** every "Discuss a Project" control in the site must call `whatsAppHref()`. There must
be zero hard-coded `wa.me` strings in components.

**Placeholder discipline:** every field tagged `PLACEHOLDER` above must be swappable by editing this
one file only — no placeholder value may be duplicated into a component. This is what makes the
pre-launch swap safe: one file, one review pass, done. See `11-copy-deck.md` §1 for the copy-deck
equivalent tagging (🟣 PLACEHOLDER vs 🔴 TBD vs 🟡 DRAFT).

> ⚠️ **Flag for the client:** the placeholder address (Ara Damansara, Petaling Jaya, **Selangor**) is
> in West Malaysia, not Sarawak. The brief's positioning is explicitly Sarawak-only for this phase
> (`01-brand-and-positioning.md` §2). A visible office address outside Sarawak may read as
> inconsistent to a Sarawak government/GLC audience doing due diligence. This is not a build
> blocker — it renders exactly as given — but worth a conscious decision before the real address
> replaces the placeholder. See `13-OPEN-QUESTIONS.md` Q-16 follow-up.

---

## 5. `Button`

| Variant | Background | Text | Border | Hover | Use |
|---|---|---|---|---|---|
| `primary` | `--action-primary` `#1E5AA8` | white | none | bg `--action-primary-hov` | Main CTA (Discuss a Project) |
| `secondary` | transparent | `--ewt-navy-700` | 1px `--border-strong` | bg `--ewt-grey-050`, border `--ewt-navy-700` | Explore Capabilities, View page |
| `tertiary` | none | `--text-link` | none | underline 2px, offset 4px | Inline "Read more →" |
| `on-inverse-primary` | `--ewt-white` | `--ewt-navy-900` | none | bg `#E9EEF6` | CTA on navy bands |
| `on-inverse-secondary` | transparent | white | 1px `rgba(255,255,255,0.35)` | border white, bg `rgba(255,255,255,0.08)` | Secondary CTA on navy |

### Sizes

| Size | Height | Padding-x | Font | Use |
|---|---|---|---|---|
| `sm` | 40px | 18px | 14px/600 | Header |
| `md` | 48px | 24px | 15px/600 | Default |
| `lg` | 56px | 32px | 16px/600 | Hero, final CTA |

Radius `--radius-md` (6px). Transition: `background-color 150ms`, `border-color 150ms`. No scale
transforms on buttons. Icon (optional): 18px, 8px gap, right side, `aria-hidden`.

Full-width (`width:100%`) below 480px for hero and CTA-band buttons.

**Link vs button semantics:** anything that navigates (including WhatsApp) is an `<a>`. Only the
hamburger and drawer close are `<button>`. There are no forms in V1.

---

## 6. `Section` shell & `SectionHeader`

```html
<section class="section section--alt" aria-labelledby="cap-heading">
  <div class="container">
    <div class="section__header">
      <span class="rule-gold" aria-hidden="true"></span>
      <p class="eyebrow">Project Capabilities</p>
      <h2 id="cap-heading">…</h2>
      <p class="lead">…</p>
    </div>
    <div class="section__body">…</div>
  </div>
</section>
```

| Prop | Values |
|---|---|
| `tone` | `light` (white) · `alt` (`--surface-alt`) · `inverse` (`--surface-inverse`) |
| `align` | `start` (default) · `center` (used for CTA bands and short intros only) |
| `width` | `default` (1200) · `narrow` (880) · `wide` (1280) |

**Background alternation rule:** never place two `inverse` sections adjacently; never exceed one
`inverse` section per page (excluding the footer). Alternate `light` / `alt` to create rhythm.

`SectionHeader` max width: `--container-text` (680px) when `align="center"`, `58ch` when
`align="start"`.

---

## 7. `Eyebrow` + `rule-gold`

```css
.rule-gold { display:block; width:40px; height:2px; background:var(--ewt-gold-500); margin-bottom:16px; }
.eyebrow   { font:600 12px/16px var(--font-heading); letter-spacing:.14em;
             text-transform:uppercase; color:var(--text-eyebrow); margin:0 0 12px; }
.on-inverse .eyebrow    { color: var(--ewt-blue-300); }
.on-inverse .rule-gold  { background: var(--ewt-gold-400); }
```
One gold rule per section maximum (see colour budget, `02-design-system.md` §2.7).

---

## 8. `CapabilityTile` (compact — Home §03)

Used for the 10 Home capability items.

| Property | Value |
|---|---|
| Layout | Icon chip (48×48) on top, label below — vertical, left-aligned |
| Padding | 24px |
| Background | `--surface-card` (white) on an `alt` section |
| Border | 1px `--border-default`, `--radius-lg` |
| Label | `--type-h4` 18px/600, `--text-heading`, max 2 lines |
| Hover | `translateY(-2px)`, `--shadow-md`, border `--border-strong`, icon chip fill → `#D8E4F5` |
| Whole tile clickable | Yes → `/capabilities#<anchor>` |
| Min height | 148px so all tiles match regardless of label length |

**Not a link-out to individual pages** — there are no per-capability pages in V1.

---

## 9. `CapabilityCard` (detailed — Capabilities page)

`[BRIEF]` p.8: *"Each capability card can contain: What it is / When it is useful / Typical project
scope / Expected EWT involvement."*

### Structure

```
┌──────────────────────────────────────────────┐
│ [icon 40]   01                               │  ← index in silver, --type-eyebrow
│                                              │
│ Technology Consultancy & Advisory            │  ← --type-h3
│ Requirement discovery, technology            │  ← --type-body-sm, --text-muted
│ assessment, solution planning…               │
│ ──────────────────────────────────────────── │  ← 1px --border-default
│ WHAT IT IS                                   │  ← --type-eyebrow, --text-muted
│ …                                            │  ← --type-body-sm
│ WHEN IT IS USEFUL                            │
│ …                                            │
│ TYPICAL PROJECT SCOPE                        │
│ …                                            │
│ EXPECTED EWT INVOLVEMENT                     │
│ …                                            │
└──────────────────────────────────────────────┘
```

| Property | Value |
|---|---|
| Padding | 32px desktop / 24px mobile |
| Background | `--surface-card` |
| Border | 1px `--border-default`, `--radius-lg`, `--shadow-none` |
| Hover | border `--border-strong` + `--shadow-md` (cards are not links; hover is a subtle affordance only) |
| Field label | `--type-eyebrow`, `--text-muted`, margin-bottom 6px |
| Field value | `--type-body-sm`, `--text-body`, margin-bottom 20px |
| Anchor | `id` on the card so Home tiles can deep-link (`/capabilities#systems-integration`); `scroll-margin-top: 96px` |
| Equal height | Grid `align-items: stretch` |

**Optional density control:** on mobile the four fields may collapse into a `<details>` disclosure
with "What it is" always visible. If used, the `<summary>` must be a real toggle with
`aria-expanded` handled natively, and text must remain in the DOM (SEO).

---

## 10. `ValueRow` (Home §04 "Why EWT")

| Property | Value |
|---|---|
| Layout | Icon or numbered index (left, 40px column) + heading + one-line support text |
| Heading | `--type-h4` |
| Support text | `--type-body-sm`, `--text-muted` |
| Separator | 1px `--border-default` between rows (no cards) |
| Grid | 2 columns × 3 rows desktop; 1 column mobile |

Rows are non-interactive. No hover state.

---

## 11. `PersonCard`

| Property | Value |
|---|---|
| Photo | 4:5 portrait, `--radius-lg`, `object-fit: cover`, greyscale-to-colour on hover **is not permitted** (motion restraint) — static colour, desaturated 15% |
| Name | `--type-h3`, `--text-heading` |
| Role | `--type-eyebrow`, `--text-eyebrow` (e.g. `FOUNDER & CEO`) |
| Bio | `--type-body-sm`, `--text-body`, max `52ch` |
| Border | none on Home preview; 1px `--border-default` card on Leadership page |
| Placeholder (no photo yet) | Navy `--surface-inverse-alt` panel, same 4:5 ratio, centred monogram (`WC` / `ET`) in `--ewt-silver-400` at 48px/600, 0.08em tracking. **Never** a grey silhouette avatar or stock photo |

No social links, no email links, no "connect" buttons (contact information is restricted `[BRIEF]`
p.11).

---

## 12. `CtaBand`

The recurring "Discuss a Project" band that closes Home and every inner page.

| Property | Value |
|---|---|
| Tone | `inverse` (`--ewt-navy-900`) with `--gradient-hero`, OR `alt` on pages that already use a navy band |
| Align | centre |
| Content | Optional eyebrow → H2 → one supporting line → primary button (+ optional tertiary link) |
| Padding | 96px desktop / 64px mobile |
| Decorative | Optional 3px × 96px `--gradient-accent-rule` above the heading |
| Button | `on-inverse-primary`, size `lg` |

Home §07 copy is fixed by the brief — see `05-page-home.md` §7.

---

## 13. `StatelessNotice` (Projects "Coming Soon" panel)

`[BRIEF]` p.9: *"Use a polished project page with a simple message such as **Project Portfolio -
Coming Soon**, while keeping the full case-study layout ready for future content."*

| Property | Value |
|---|---|
| Container | `--container-narrow` (880px), centred |
| Panel | `--surface-alt` background, 1px `--border-default`, `--radius-lg`, padding 64px 48px (40px 24px mobile) |
| Icon | Optional 40px line icon (`folder-open` or `layout-grid`), `--ewt-blue-500`, in a `--ewt-blue-100` chip |
| Heading | "Project Portfolio — Coming Soon" `--type-h2` |
| Body | 2–3 sentences explaining why (confidentiality / early stage), factual, no apology |
| CTA | `Button` secondary → Capabilities; `Button` primary → Discuss a Project |

Must look **deliberate**, not broken. No "404", no "under construction" iconography, no animated
spinner.

---

## 14. `ProjectCard` (future-ready — dormant in V1)

Built and styled but rendered from an **empty** data array in V1, so cards can be added later
without redesigning the page `[BRIEF]` p.12: *"Projects page designed so static project cards can be
added easily later without redesigning the site."*

```ts
type Project = {
  slug: string;
  name: string;                 // Project Name
  clientOrSector: string;       // "Client / Sector" — may be anonymised, e.g. "State agency (Sarawak)"
  isAnonymised: boolean;        // drives the "Anonymised case study" tag
  summary: string;              // 1–2 lines shown on the card
  thumbnail?: { src: string; alt: string };
  status: 'In progress' | 'Delivered' | 'Ongoing support';
  tags?: string[];
};
```

| Property | Value |
|---|---|
| Thumbnail | 16:10, `--radius-lg` top corners; falls back to a navy geometric placeholder |
| Sector line | `--type-eyebrow`, `--text-muted` |
| Name | `--type-h3` |
| Summary | `--type-body-sm`, 2-line clamp |
| Status chip | `--type-caption`, `--ewt-blue-100` fill, `--ewt-blue-600` text, `--radius-sm`, 4px/10px padding |
| Anonymised tag | `--ewt-grey-100` fill, `--text-muted` text, label "Anonymised case study" |
| Grid | 3-col desktop / 2-col tablet / 1-col mobile, gap 32px |

`[BRIEF]` p.9 confidentiality: the card and detail layout must both work with `clientOrSector`
anonymised. Never render an empty client field — render the sector.

---

## 15. `CaseStudyLayout` (future-ready — dormant in V1)

Implements the brief's case-study template (p.9) as an ordered section list. Build the component and
route (`/projects/[slug]`), but ship with no entries.

| Order | Field | Rendering |
|---|---|---|
| 1 | Project Name | H1 |
| 2 | Client / Sector | Eyebrow under H1, anonymisable |
| 3 | Project Context | Lead paragraph |
| 4 | Challenge / Requirement | Section |
| 5 | EWT Scope | Section, bulleted |
| 6 | Proposed / Delivered Solution | Section |
| 7 | Implementation | Section |
| 8 | Technology / Partners (where disclosure is approved) | Chip list — **omit entirely if not approved** |
| 9 | Outcome / Measurable Impact | Highlight panel (`--surface-alt`) |
| 10 | Project Status | Status chip in the header meta row |

Layout: `--container-narrow` body column with a sticky right meta rail (sector, status, technologies)
at ≥1024px; stacked below. Ends with a `CtaBand`.

---

## 16. `InfoTable`

Two-column definition table for company information (used on Contact, optionally About).

| Property | Value |
|---|---|
| Markup | `<dl>` with `<div>` rows — not `<table>` (it is a definition list, not tabular data) |
| Row | 1px `--border-default` bottom; padding 16px 0 |
| Term | `--type-body-sm`/600, `--text-heading`, 200px fixed column desktop |
| Value | `--type-body-sm`, `--text-body`, tabular numerals for the registration number |
| Mobile | Stacked; term above value with 4px gap |

Rows are driven by `COMPANY` config; empty values are **skipped**, never rendered as "TBD".

---

## 17. `ProcessStep`

Numbered steps for "What EWT Does" (Home §02) and About.

| Property | Value |
|---|---|
| Index | `01`–`04`, `--type-eyebrow`, `--ewt-silver-400`, above the heading |
| Heading | `--type-h4` |
| Body | `--type-body-sm`, `--text-muted`, max `44ch` |
| Connector | 1px `--border-default` horizontal line between steps at ≥1024px (a quiet spine, no arrows/chevrons) |
| Grid | 4-col desktop / 2-col tablet / 1-col mobile |

---

## 18. `Breadcrumb` (optional, P2)

Inner pages only, below the header: `Home / Capabilities`. `--type-small`, `--text-muted`, current
page not linked, `aria-label="Breadcrumb"`, `<ol>` markup. Omit on Home. Include
`BreadcrumbList` JSON-LD if used.

---

## 19. `SkipLink`

```html
<a class="skip-link" href="#main">Skip to main content</a>
```
Visually hidden until `:focus`, then: fixed 12px/12px, `--action-primary` background, white text,
padding 12px 20px, `--radius-md`, `z-index: 200`. Every page has `<main id="main" tabindex="-1">`.

---

## 20. `MapEmbed`

Added per Q-16: a small, zoomable Google Maps embed on the Contact page showing the placeholder
office location.

| Property | Value |
|---|---|
| Source | Google Maps embed iframe, driven by `COMPANY.googleMapsQuery` |
| Size | 100% width × 320px height desktop, 240px mobile, `--radius-lg`, 1px `--border-default` |
| Interaction | Standard Google Maps pan/zoom controls enabled (no custom controls needed) |
| Loading | `loading="lazy"`, placed low enough on Contact that it never competes with the WhatsApp CTA for attention |
| Fallback | If `googleMapsQuery` / an embed URL is not set, render nothing — no broken iframe, no grey box |
| A11y | `title="Map showing Eastern World Technology's location"` on the iframe |
| Caption below map | Plain text address line, driven by `COMPANY.address` |

**Note:** this is additive to the brief, not in it — the brief's footer/contact guidance (p.11) says
"do not add unnecessary contact information unless later approved." The client approved this
addition in `13-OPEN-QUESTIONS.md` Q-16. Keep it visually quiet (a small embed low on the page, not
a full-width map hero) so the page still centres on the WhatsApp conversion.

---

## 21. `AnalyticsNotice` (inert preview UI)

Per Q-04: the client wants to **see** what an analytics/consent notice would look like before
committing to a specific tool, without any actual tracking script running yet. This component is
therefore a **visual preview only** — it renders the UI, it fires nothing.

| Property | Value |
|---|---|
| Trigger | None automatic. Render behind a build-time flag `PREVIEW_ANALYTICS_UI=true` so it never appears in a real deployment by accident |
| Appearance | Slim banner, bottom of viewport, `--surface-inverse-alt` background, `--type-body-sm` text, one line: *"This site does not currently collect analytics."* + a disabled-looking "Preferences" button |
| Behaviour | The banner and its button are **non-functional** — no cookie is set, no script loads, clicking "Preferences" does nothing (or opens a static explanatory tooltip) |
| Purpose | Lets the client visually evaluate placement/tone of a future consent UI before a tool (Plausible/Fathom/GA4) is chosen |
| Removal | Delete this component and its flag entirely once a real analytics decision is made — do not leave an inert banner live on the production site indefinitely |

**Hard rule:** because no tracking is active, **no privacy policy or cookie consent is legally
required yet** (`12-technical-requirements.md` §9). The moment a real analytics script is wired in,
that changes — revisit this component and the privacy-notice requirement together, not separately.

---

## 22. `PlaceholderBioBlock` (development preview only — must not ship)

Per Q-24: the client wants to preview a *fuller* Leadership page — with background/experience/
education fields present — purely to evaluate layout and density, before any real founder
background copy is approved. See `09-page-leadership.md` §6 for full context and the compliance
reasoning.

| Property | Value |
|---|---|
| Visual treatment | Dashed 1px `--border-strong` outline (not the normal solid card border), a small corner tag reading **"PLACEHOLDER — REPLACE BEFORE LAUNCH"** in `--type-caption`, `--ewt-gold-500` on a `--ewt-grey-100` chip |
| Fields shown | Background, Experience, Education — each with bracketed placeholder text, e.g. `[Placeholder — prior role / organisation, to be confirmed]` |
| Build flag | Rendered only when `PREVIEW_EXTENDED_BIOS=true`. **This flag must default to `false`** and must be excluded from the production build config, not merely turned off |
| Content source | Lives in `src/content/leadership.fixtures.ts`, never in `leadership.ts` (the real content file) — mirrors the `projects.fixtures.ts` pattern in `08-page-projects.md` §1 |
| Launch gate | This component's flag is added to the pre-launch checklist (`12-technical-requirements.md` §11) as an explicit "confirm OFF" item |

**Why this is safe despite the brief's "do not overstate credentials" rule (p.10):** the placeholder
content is never real — it is bracketed, visually flagged, gated behind a development-only flag, and
exists solely so the client can judge layout before supplying approved wording. It is a development
tool, not published content. The compliance risk is entirely in the *shipping* step, which is why the
launch-gate check exists.

---

## 23. Component acceptance criteria

Every component ships only when all are true:

- [ ] Renders correctly at 320px, 768px, 1024px, 1440px
- [ ] Uses only semantic tokens — no literal hex, no magic px outside the spacing scale
- [ ] Keyboard reachable and operable; visible focus ring; logical tab order
- [ ] Meets AA contrast in every state (default, hover, active, disabled, focus)
- [ ] Respects `prefers-reduced-motion`
- [ ] Text content comes from `11-copy-deck.md`, not invented in the component
- [ ] No layout shift when fonts/images load (`aspect-ratio` or explicit `width`/`height` set)
- [ ] Touch targets ≥44×44px
- [ ] `PREVIEW_EXTENDED_BIOS` and `PREVIEW_ANALYTICS_UI` flags are confirmed `false`/absent in the
      production build config before launch
