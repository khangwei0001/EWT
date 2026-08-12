# 02 — Design System

**Source:** Brief §3 "Visual Direction" (p.4), §10 (p.12), plus the supplied logo artwork
(`assets/company-logo.png`).

> "The site should look like a premium corporate technology consultancy suitable for enterprise and
> government-facing discussions — not a flashy startup landing page." `[BRIEF]` p.4

---

## 1. Design language — the brief's rules `[BRIEF]` p.4

| # | Rule | How it is honoured in this system |
|---|---|---|
| 1 | Primary palette: deep navy / corporate blue | §2 — navy and blue ramps are the only chromatic families |
| 2 | Backgrounds: white and very light grey | §2.3 — only `#FFFFFF` and `#F6F8FB` are page backgrounds; navy is used for hero/footer bands only |
| 3 | Accent: subtle silver; restrained gold only if consistent with the final logo | §2.4 — silver = borders/dividers/muted; gold = hairline accents only. The supplied logo **does** contain gold, so gold is permitted, at ≤1% of surface area |
| 4 | Generous whitespace, strong grid, clean typography, restrained motion | §4 spacing, §5 grid, §3 type, §8 motion |
| 5 | High-quality Sarawak/corporate imagery, used sparingly; no tourism treatment | §9 imagery |
| 6 | No excessive neon, gaming-style effects, noisy gradients or generic 'hacker/code' visuals | §10 prohibited list |
| 7 | Desktop and mobile layouts must both feel polished | §5 responsive grid; `12-technical-requirements.md` |

---

## 2. Colour

### 2.1 Derivation

The palette is sampled from the supplied EWT logo mark and constrained to the brief's stated
families. The logo reads: deep navy `E` → corporate blue gradient across `W`/`T` → single gold
parallelogram accent on the `T`. That is exactly the hierarchy the site uses:
**navy dominates, blue activates, gold accents once.**

`[RESOLVED]` — Q-05: there is no existing brand guideline (this is a ground-up new brand); the client
has approved shipping this derived palette as documented, with review/adjustment after seeing the
built site rather than before. Treat every hex value below as **confirmed for build**, not
provisional — but expect a possible revision pass once the client sees it live.

### 2.2 Brand ramp — Navy

| Token | Hex | Use |
|---|---|---|
| `--ewt-navy-900` | `#0A1628` | Footer background, deepest hero base, overlay base |
| `--ewt-navy-800` | `#0F2038` | Dark section bands, hero gradient stop |
| `--ewt-navy-700` | `#16294A` | **Primary brand navy.** Headings, logo-matching surfaces |
| `--ewt-navy-600` | `#1D3660` | Dark-surface borders, hover on navy surfaces |
| `--ewt-navy-500` | `#274A80` | Navy/blue transition, chart-free accents |

### 2.3 Brand ramp — Corporate blue

| Token | Hex | Use |
|---|---|---|
| `--ewt-blue-600` | `#164A8C` | Pressed state of primary button |
| `--ewt-blue-500` | `#1E5AA8` | **Primary action colour.** Buttons, links, active nav, eyebrow text |
| `--ewt-blue-400` | `#2D6CB8` | Hover state, logo gradient mid-tone |
| `--ewt-blue-300` | `#4A8AD4` | Accents on dark surfaces, links on navy |
| `--ewt-blue-100` | `#E3ECF8` | Tint fills — icon chips, quiet callouts |
| `--ewt-blue-050` | `#F1F6FC` | Very light tinted band (use sparingly) |

### 2.4 Neutrals, silver and gold

| Token | Hex | Use |
|---|---|---|
| `--ewt-white` | `#FFFFFF` | Primary page background |
| `--ewt-grey-050` | `#F6F8FB` | **The "very light grey" background band** — alternating sections |
| `--ewt-grey-100` | `#EDF1F7` | Card fill on white, table header fill |
| `--ewt-grey-200` | `#DDE3EC` | **Default border / divider** |
| `--ewt-silver-400` | `#B8C2D0` | Subtle silver accent: hairlines on dark, decorative rules, disabled |
| `--ewt-grey-500` | `#5A6981` | **Muted / secondary text** (AA-verified, see §2.6) |
| `--ewt-grey-700` | `#2E3A4D` | **Body text** |
| `--ewt-ink` | `#16294A` | Headings (= `--ewt-navy-700`) |
| `--ewt-gold-500` | `#C9973B` | **Restrained gold accent** — logo-matched |
| `--ewt-gold-400` | `#D8AC55` | Gold on dark surfaces only |

### 2.5 Semantic tokens (use these in components, not raw ramp values)

```css
:root {
  /* Surfaces */
  --surface-page:        var(--ewt-white);
  --surface-alt:         var(--ewt-grey-050);
  --surface-card:        var(--ewt-white);
  --surface-card-alt:    var(--ewt-grey-100);
  --surface-inverse:     var(--ewt-navy-900);
  --surface-inverse-alt: var(--ewt-navy-800);

  /* Text */
  --text-heading:        var(--ewt-ink);
  --text-body:           var(--ewt-grey-700);
  --text-muted:          var(--ewt-grey-500);
  --text-on-inverse:     var(--ewt-white);
  --text-on-inverse-mut: #C3CEDE;          /* 10.4:1 on navy-900 */
  --text-link:           var(--ewt-blue-500);
  --text-link-hover:     var(--ewt-blue-600);
  --text-eyebrow:        var(--ewt-blue-500);

  /* Lines */
  --border-default:      var(--ewt-grey-200);
  --border-strong:       #C9D2DF;
  --border-inverse:      rgba(255,255,255,0.14);
  --rule-accent-gold:    var(--ewt-gold-500);

  /* Actions */
  --action-primary:      var(--ewt-blue-500);
  --action-primary-hov:  var(--ewt-blue-400);
  --action-primary-act:  var(--ewt-blue-600);
  --action-dark:         var(--ewt-navy-700);
  --action-dark-hov:     var(--ewt-navy-600);
  --focus-ring:          var(--ewt-blue-500);
  --focus-ring-inverse:  var(--ewt-blue-300);
}
```

### 2.6 Contrast verification (WCAG 2.1)

Computed, not estimated. All body/UI text combinations meet **AA (≥4.5:1)**.

| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| `--ewt-grey-700` `#2E3A4D` | white | **11.5:1** | AAA |
| `--ewt-grey-500` `#5A6981` | white | **5.56:1** | AA |
| `--ewt-blue-500` `#1E5AA8` | white | **6.81:1** | AA |
| `--ewt-ink` `#16294A` | white | **13.9:1** | AAA |
| `--ewt-grey-700` `#2E3A4D` | grey-050 `#F6F8FB` | 10.9:1 | AAA |
| white | `--ewt-navy-900` `#0A1628` | **18.1:1** | AAA |
| white | `--ewt-blue-500` `#1E5AA8` | **6.81:1** | AA |
| `#C3CEDE` | navy-900 | 10.4:1 | AAA |
| `--ewt-gold-500` `#C9973B` | navy-900 | **6.89:1** | AA |
| `--ewt-gold-500` `#C9973B` | white | **2.63:1** | ❌ **FAILS** |
| `--ewt-silver-400` `#B8C2D0` | white | 1.90:1 | ❌ **FAILS** |

**Two hard rules follow from this table:**

- **Gold is never used for text or icons on a light background.** On light surfaces gold may appear
  only as a non-informational graphic element ≥3px thick (a rule, an underline, a corner accent).
  Gold text is permitted **only** on `--surface-inverse`.
- **Silver is never used for text.** It is a border/divider/decorative colour only.

### 2.7 Colour usage budget

To keep the "premium corporate, not startup" register, per viewport:

| Colour | Max surface share | Where |
|---|---|---|
| White / grey-050 | 75–90% | Page background |
| Navy family | 10–20% | Hero band, footer, one dark section per page max |
| Blue-500 | ~2–5% | Buttons, links, eyebrows, icons, active states |
| Gold | **≤1%** | One accent per section at most: a hairline rule, a bullet, an underline |
| Silver | ~1% | Dividers on dark surfaces |

**Never:** a full gold button, a gold heading on white, a gold-filled card, more than one gold
element in a single viewport.

### 2.8 Gradients

`[BRIEF]` bans "noisy gradients". Permitted gradients — two only:

```css
/* Hero band: navy depth, matches logo left→right darkness shift */
--gradient-hero: linear-gradient(135deg, #0A1628 0%, #16294A 55%, #1D3660 100%);

/* Logo-echo accent rule (decorative hairlines, 2–3px tall, ≤120px wide) */
--gradient-accent-rule: linear-gradient(90deg, #16294A 0%, #2D6CB8 70%, #C9973B 100%);
```

No radial glows, no mesh gradients, no animated gradients, no gradient text.

---

## 3. Typography

### 3.1 Typefaces `[RESOLVED]` — see `13-OPEN-QUESTIONS.md` Q-06

The brief specifies "clean typography" but names no typeface. The initial recommendation (Inter /
Inter Tight) was rejected by the client as **too generic** — fair: Inter is now the de facto default
of every SaaS/startup site, which directly undercuts the brief's "not a flashy startup landing page"
requirement (p.4). Revised recommendation, chosen specifically for distinctiveness:

| Role | Typeface | Why |
|---|---|---|
| Headings & UI (display) | **Archivo** — SemiExpanded/Expanded widths, weights 600/700 | A structural grotesque with real engineered presence at large sizes. Its expanded width echoes the wide, angular geometry of the EWT wordmark without imitating it. Far less saturated in the market than Inter/Poppins/Montserrat — reads as considered, not templated |
| Body & UI (text) | **Public Sans** (400/500/600) | Originally developed for U.S. federal government digital services (USWDS) — genuinely institutional, trustworthy character, excellent screen legibility at 16–18px. The provenance is a good fit for a firm positioning itself for government/GLC audiences, and it is not a typeface most visitors will have seen on a corporate site before |
| Fallback stack | `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | Works if webfonts are blocked by a corporate proxy |

**Why not a single family:** Archivo's expanded widths only exist as display cuts — they are not
intended for body text — so the two-family pairing (structural display + institutional body) is
correct here, not a compromise. Both are open-source (OFL), self-hostable, and have no licensing
cost or constraint.

Self-host both as `woff2` (subset: `latin`) — do **not** load from Google Fonts CDN. Government
networks frequently block third-party font hosts, and self-hosting removes a render-blocking
third-party request. Preload one Archivo display weight + one Public Sans text weight only.

The logo wordmark uses a wide, heavily letterspaced geometric sans. Archivo Expanded is the closest
open-source echo of that geometry available for headings; body copy stays in Public Sans and does
not attempt to match the logo.

**If this pairing doesn't land once it's on screen:** the fallback options considered and rejected
were IBM Plex Sans (too strongly associated with IBM specifically), Space Grotesk (reads as
startup/trendy, contradicts the brief directly), and General Sans (closer to generic than Archivo).
Flag it for another pass rather than reverting to Inter by default.

### 3.2 Type scale

Base 16px. Desktop values; mobile values in the last column.

| Token | Role | Size / Line-height | Weight | Tracking | Mobile |
|---|---|---|---|---|---|
| `--type-display` | Hero H1 | 56 / 64 | 700 | −0.025em | 34 / 42 |
| `--type-h1` | Page H1 | 44 / 52 | 700 | −0.02em | 30 / 38 |
| `--type-h2` | Section heading | 34 / 42 | 600 | −0.015em | 26 / 34 |
| `--type-h3` | Card / sub heading | 24 / 32 | 600 | −0.01em | 21 / 29 |
| `--type-h4` | Small heading, field label | 18 / 26 | 600 | 0 | 17 / 25 |
| `--type-lead` | Intro paragraph | 19 / 32 | 400 | 0 | 17 / 28 |
| `--type-body` | Body copy | 16 / 28 | 400 | 0 | 16 / 27 |
| `--type-body-sm` | Dense body, card text | 15 / 25 | 400 | 0 | 15 / 25 |
| `--type-small` | Meta, captions, footer | 14 / 22 | 400 | 0 | 14 / 22 |
| `--type-caption` | Legal, reg. no. | 13 / 20 | 400 | 0 | 13 / 20 |
| `--type-eyebrow` | Section kicker | 12 / 16 | 600 | **0.14em**, UPPERCASE | 12 / 16 |
| `--type-button` | Button label | 15 / 20 | 600 | 0.01em | 15 / 20 |

**Family assignment:** `--type-display` through `--type-h4`, plus `--type-eyebrow` and
`--type-button`, use `var(--font-heading)` (Archivo). Everything else — `--type-lead`,
`--type-body`, `--type-body-sm`, `--type-small`, `--type-caption` — uses `var(--font-body)`
(Public Sans).

Scale between mobile and desktop with `clamp()`, e.g.
`font-size: clamp(2.125rem, 1.2rem + 3.2vw, 3.5rem);` for `--type-display`.

### 3.3 Typographic rules

- **Measure:** body copy max **68 characters** (`max-width: 62ch` for `--type-body`,
  `58ch` for `--type-lead`). Never full-bleed paragraphs.
- **Headings are navy (`--text-heading`), never blue.** Blue is reserved for actions and eyebrows so
  that "blue = something happens here" stays true.
- **Eyebrow pattern** — every major section opens with one:
  ```
  ┌ 24px gold or blue hairline (2px)
  │ SECTION EYEBROW           ← --type-eyebrow, --text-eyebrow
  │ The section heading       ← --type-h2, --text-heading
  └ Optional lead paragraph   ← --type-lead, --text-body
  ```
- **No text over busy imagery** without a ≥60% navy scrim.
- **No italics** except for a genuine citation. **No all-caps** except eyebrows and button labels
  are sentence case (not caps).
- **Numerals:** tabular figures (`font-variant-numeric: tabular-nums`) for the registration number
  and business hours.
- **Hyphenation off**, `text-wrap: balance` on H1/H2, `text-wrap: pretty` on paragraphs.

---

## 4. Spacing

4px base unit. Use only these steps.

| Token | px | Typical use |
|---|---|---|
| `--space-1` | 4 | Icon–label gap |
| `--space-2` | 8 | Tight inline gaps |
| `--space-3` | 12 | Button padding-y, chip padding |
| `--space-4` | 16 | Default small gap, card inner tight |
| `--space-5` | 20 | Paragraph spacing |
| `--space-6` | 24 | Grid gutter (mobile), card padding (mobile) |
| `--space-8` | 32 | Card padding (desktop), grid gutter (desktop) |
| `--space-10` | 40 | Heading → content |
| `--space-12` | 48 | Sub-block separation |
| `--space-16` | 64 | Small section padding |
| `--space-20` | 80 | Section padding (tablet) |
| `--space-24` | 96 | Section padding (desktop, standard) |
| `--space-30` | 120 | Section padding (desktop, generous / hero) |
| `--space-40` | 160 | Hero top padding on large screens |

### Section rhythm — "generous whitespace" quantified

| Breakpoint | Section padding (top/bottom) | Heading → body | Body → grid |
|---|---|---|---|
| ≥1280px | **120px** | 24px | 56px |
| 1024–1279px | 96px | 24px | 48px |
| 768–1023px | 80px | 20px | 40px |
| <768px | **64px** | 16px | 32px |

Two consecutive sections on the same background colour keep full padding — do not halve it.

---

## 5. Layout & grid

### 5.1 Containers

| Token | Max width | Use |
|---|---|---|
| `--container-wide` | 1280px | Header, footer, full-bleed section inner |
| `--container` | **1200px** | Default content container |
| `--container-narrow` | 880px | Long-form text (About, case study body) |
| `--container-text` | 680px | Centred single-column intro copy |

Horizontal gutter: 24px (<768px), 32px (768–1023px), 48px (≥1024px).

### 5.2 Grid

12 columns, gutter = `--space-8` (32px) desktop / `--space-6` (24px) mobile.
"Strong grid" `[BRIEF]` means: **content edges must align across sections.** The left edge of a
section eyebrow, its heading, and the first card of its grid all share one vertical line.

### 5.3 Breakpoints

| Name | Range | Notes |
|---|---|---|
| `xs` | 320–479 | Minimum supported width **320px** |
| `sm` | 480–767 | Mobile |
| `md` | 768–1023 | Tablet / small laptop |
| `lg` | 1024–1279 | Desktop |
| `xl` | 1280–1439 | Standard desktop target |
| `2xl` | ≥1440 | Container caps; background bands extend |

Mobile-first CSS. Test explicitly at **360, 390, 768, 1024, 1280, 1440, 1920**.

---

## 6. Radii, borders & elevation

Corporate register = **small radii, hairline borders, shadows barely present.**

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Inputs, chips, small tags |
| `--radius-md` | 6px | Buttons |
| `--radius-lg` | 8px | Cards, image containers |
| `--radius-xl` | 12px | Large feature panels only |
| `--radius-full` | 999px | The floating WhatsApp pill only |

Never use radii >12px on rectangular content blocks. No fully-rounded "bubble" cards.

```css
--shadow-none: none;
--shadow-sm:   0 1px 2px rgba(10, 22, 40, 0.06);
--shadow-md:   0 4px 16px rgba(10, 22, 40, 0.08);
--shadow-lg:   0 12px 32px rgba(10, 22, 40, 0.10);
--shadow-fab:  0 8px 24px rgba(10, 22, 40, 0.22);
```

**Default card = 1px `--border-default` + `--shadow-none`.** Elevation appears on hover only
(`--shadow-md`). Shadows are always neutral-navy tinted, never pure black, never coloured.

---

## 7. Iconography `[DERIVED]` — see Q-08

- **Library:** Lucide (ISC licence) or an equivalent open, consistent line set.
- **Style:** line icons, **1.5px stroke**, 24×24 default (20px inline, 32px in feature cards),
  square caps off, no fills, no duotone, no gradients.
- **Colour:** `--ewt-blue-500` on light surfaces; `--ewt-blue-300` on navy. Never gold. Never
  multicolour.
- **Icon chip** (capability cards): 48×48 rounded-`--radius-lg` container, fill `--ewt-blue-100`,
  icon `--ewt-blue-500`. On navy: fill `rgba(255,255,255,0.08)`, icon `--ewt-blue-300`.
- Icons are decorative — `aria-hidden="true"` — because the adjacent label always carries the
  meaning.
- **No 3D icons, no isometric illustrations, no emoji, no flat-illustration people.**

Assigned icons are listed per section in `05-page-home.md` and `07-page-capabilities.md`.

---

## 8. Motion `[BRIEF]` "restrained motion", "subtle scroll/hover transitions only; motion must not distract from the corporate tone" (p.4, p.12)

### Durations & easing

```css
--motion-fast:   150ms;   /* colour, opacity, border */
--motion-base:   250ms;   /* hover lift, nav */
--motion-slow:   400ms;   /* mobile drawer, accordion */
--motion-reveal: 500ms;   /* scroll-in reveal */
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-out:      cubic-bezier(0.0, 0.0, 0.2, 1);
```

### The only permitted animations

| Effect | Spec |
|---|---|
| Scroll reveal | `opacity 0→1` + `translateY(16px→0)`, 500ms `--ease-out`, **once only**, triggered at 15% visibility (IntersectionObserver) |
| Stagger | max **60ms** between siblings, max 6 items staggered, then reveal the rest together |
| Card hover | `translateY(-2px)` + `--shadow-none → --shadow-md` + border → `--border-strong`, 250ms |
| Button hover | background colour shift only, 150ms |
| Link hover | underline thickness/offset, 150ms |
| Nav on scroll | background transparent→white + `--shadow-sm` appears, 250ms |
| Mobile drawer | slide-in from right, 400ms `--ease-standard` |

### Explicitly banned

Parallax, counters/odometers, typewriter effects, marquee/ticker, auto-playing carousels, animated
gradients or blobs, particle/network canvas backgrounds, 3D tilt, cursor followers, page-load
splash/preloader animation, letter-by-letter text animation, scroll-jacking, `scroll-behavior`
hijacking, autoplaying video.

### Reduced motion — mandatory

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
Reveal elements must render at final state (opacity 1, no transform) when reduced motion is on —
never leave content invisible.

---

## 9. Imagery

### Sourcing `[RESOLVED]` — Q-25

EWT has no owned/licensed photography today. The client has approved sourcing **licensed stock**
imagery as an interim measure, to be replaced with owned photography later when available. This does
**not** relax the subject-matter rules below — licensed stock must still pass the same tourism-style
and subject-matter filter as if it were commissioned. A stock photo of a rainforest is exactly as
prohibited as a commissioned one.

Practically: source from a reputable licensed library (e.g. Getty, Adobe Stock, Unsplash+ for
extended licence), keep the licence/receipt on file, and apply the same desaturation/overlay
treatment below so stock imagery doesn't look "stock." Founder portraits are the one image type that
must **never** be stock — see `09-page-leadership.md` §5.

### Rules `[BRIEF]` p.4

- High-quality **Sarawak/corporate** imagery, used **sparingly**.
- **Avoid tourism-style treatment** (see `01-brand-and-positioning.md` §8 for the prohibited list).
- Compress and appropriately size all imagery `[BRIEF]` p.12.

### Treatment

| Property | Spec |
|---|---|
| Format | AVIF with WebP fallback; JPEG last resort. Logo/marks: SVG. |
| Colour grade | Desaturate to **60–75%**, slight cool shift toward navy |
| Overlay (text on image) | `linear-gradient(180deg, rgba(10,22,40,0.78), rgba(10,22,40,0.62))` — minimum, to guarantee AA on white text |
| Overlay (decorative band) | flat `rgba(10,22,40,0.55)` |
| Crop | Wide/architectural. People-in-office shots only if genuinely EWT's — no stock "diverse team high-fiving" |
| Radius | `--radius-lg` (8px), except full-bleed bands |
| Density | Serve 1x and 2x; `sizes` attribute always set |
| Loading | `loading="lazy"` + `decoding="async"` on everything below the fold; hero image eager + `fetchpriority="high"` |
| Aspect ratios | Hero band 16:9 / 21:9; card thumb 16:10; portrait 4:5 |
| Alt text | Meaningful and factual. Never keyword-stuffed, never claims (e.g. not "EWT team delivering a government project") |

### Subject matter shortlist (safe)

Corporate/architectural exteriors in Kuching, modern office interiors, infrastructure and civic
buildings, abstract structural geometry (façades, grids, steel), desks/meeting rooms shot
neutrally, screens showing generic dashboards **only if not implying a real EWT deliverable**.

**If in doubt, ship the section without an image.** The brief's tolerance for missing imagery is far
higher than its tolerance for the wrong image. Abstract navy geometry (see §11) is always a safe
substitute.

---

## 10. Prohibited visual patterns (hard fails)

From `[BRIEF]` p.4 plus their common implementations:

- Neon colours, glow/bloom effects, `box-shadow` with saturated colour
- Gaming-style visuals, RGB accents, dark "cyber" theme
- Noisy/mesh/animated gradients, gradient text, iridescent surfaces
- Generic "hacker/code" visuals: terminal windows, matrix rain, binary streams, floating code
  snippets, circuit-board patterns, glowing network globes, blue-wireframe brains, robot/AI mascots
- Stock "startup" tropes: rocket ships, lightbulbs, puzzle pieces, handshake clip-art, upward arrows
  over a city
- Emoji in UI copy
- Glassmorphism/heavy blur panels, neumorphism
- Full-width autoplaying video hero
- Exit-intent modals, chat widgets other than the sanctioned WhatsApp FAB. (The `AnalyticsNotice`
  preview banner, `03-component-specifications.md` §21, is a deliberate, narrow exception — an
  inert, dev-flagged UI mock, not a live pop-up.)
- Testimonial sliders, client logo walls, statistics counters — **all forbidden because EWT has no
  approved clients, projects or figures to display**

---

## 11. Approved decorative devices

When a section needs visual interest without imagery, use only these:

1. **Gold hairline rule** — 2px × 40px, `--ewt-gold-500`, above an eyebrow. Once per section.
2. **Gradient accent rule** — 3px × 96px using `--gradient-accent-rule`. Hero and final CTA only.
3. **Navy angular band** — a full-width `--surface-inverse` section with a 4° clipped top edge,
   echoing the logo's parallelogram geometry. Max **one per page**.
4. **Grid line texture** — 1px `rgba(255,255,255,0.05)` lines at 80px intervals on navy surfaces.
   Subtle enough to read as paper texture at arm's length.
5. **Numbered index** — `01 / 02 / 03` in `--type-eyebrow`, `--ewt-silver-400`, beside step or
   capability headings. Reinforces "structured" positioning.
6. **Angular corner accent** — a 24px right-angled bracket in `--border-strong` on the top-left of
   a feature card. Max one card per section.

Nothing else. No blobs, no dots, no waves, no illustrations.

---

## 12. Focus & interaction states (accessibility-critical)

```css
:where(a, button, [role="button"], input, [tabindex]):focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}
.on-inverse :focus-visible { outline-color: var(--focus-ring-inverse); }
```

- Focus is **never** removed without an equivalent replacement.
- Hit targets ≥ **44×44px** on touch.
- Hover effects must not be the only indicator of interactivity — always pair with a persistent
  affordance (underline, chevron, border).
- `:active` = the `-act` colour token + no transform delay.
- Disabled = `--ewt-silver-400` text on `--ewt-grey-100`, `cursor: not-allowed`, `aria-disabled`.

---

## 13. Token starter file

Deliver tokens as a single CSS custom-property sheet (or Tailwind theme extension) imported before
any component styles. **No hard-coded hex values anywhere else in the codebase** — this is a review
gate, see `12-technical-requirements.md`.

```css
:root {
  /* Navy */
  --ewt-navy-900:#0A1628; --ewt-navy-800:#0F2038; --ewt-navy-700:#16294A;
  --ewt-navy-600:#1D3660; --ewt-navy-500:#274A80;
  /* Blue */
  --ewt-blue-600:#164A8C; --ewt-blue-500:#1E5AA8; --ewt-blue-400:#2D6CB8;
  --ewt-blue-300:#4A8AD4; --ewt-blue-100:#E3ECF8; --ewt-blue-050:#F1F6FC;
  /* Neutral */
  --ewt-white:#FFFFFF; --ewt-grey-050:#F6F8FB; --ewt-grey-100:#EDF1F7;
  --ewt-grey-200:#DDE3EC; --ewt-grey-500:#5A6981; --ewt-grey-700:#2E3A4D;
  --ewt-silver-400:#B8C2D0; --ewt-ink:#16294A;
  /* Gold */
  --ewt-gold-500:#C9973B; --ewt-gold-400:#D8AC55;

  /* Fonts — resolved Q-06: Archivo (display) + Public Sans (body) */
  --font-heading: "Archivo", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-body:    "Public Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
```

**Dark mode is out of scope for V1.** The brief specifies white/light-grey backgrounds. Do not
implement a theme toggle. Set `color-scheme: light` to prevent browser auto-inversion.
