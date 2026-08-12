# 05 — Home Page

**Route:** `/`
**Source:** Brief §5 "Home Page — Section-by-Section" (p.6–7), §4 (p.5).
**Purpose (verbatim):** *"Position EWT quickly, show project capabilities and drive project
discussions."* `[BRIEF]` p.5

The brief defines seven numbered sections. **The order, count and content of these sections is
fixed.** Do not add sections (no testimonials, no logo wall, no statistics, no blog teaser, no
newsletter, no FAQ) and do not remove any.

---

## Page skeleton

```
SiteHeader (transparent over hero → solid on scroll)
├─ 01  Hero                     tone: inverse (navy)
├─ 02  What EWT Does            tone: light
├─ 03  Project Capabilities     tone: alt (light grey)
├─ 04  Why EWT                  tone: light
├─ 05  Sarawak Focus            tone: light  (image band optional)
├─ 06  Leadership Preview       tone: alt
└─ 07  Final CTA                tone: inverse (navy)
SiteFooter (navy)
WhatsAppFab
```

Background alternation: `inverse → light → alt → light → light → alt → inverse`.
Sections 04 and 05 are both `light`; separate them with a full-width 1px `--border-default` rule at
the container width, or give 05 the optional imagery band so the two do not read as one block.

Two navy bands appear on this page (hero and final CTA). This is the only page permitted two, because
they bookend the page — see `02-design-system.md` §11.

---

## 01 — Hero `[BRIEF]` p.6

### Content (verbatim from the brief)

| Element | Copy | Style |
|---|---|---|
| Brand line | **Eastern World Technology** | `--type-eyebrow` (uppercase, 0.14em) or 16px/600 white — see note |
| Headline | **Technology, Structured for Business.** | `--type-display`, white |
| Sub-headline | *A Sarawak-focused technology project and solutions company helping organisations turn requirements into structured, implementable technology projects.* | `--type-lead`, `--text-on-inverse-mut`, max `58ch` |
| Primary CTA | **Discuss a Project** | `Button` `on-inverse-primary`, size `lg` → WhatsApp |
| Secondary CTA | **Explore Capabilities** | `Button` `on-inverse-secondary`, size `lg` → `/capabilities` |

**H1 decision:** the `<h1>` is **"Technology, Structured for Business."** and "Eastern World
Technology" sits above it as a brand eyebrow (`<p class="eyebrow">`). Rationale: the company name is
already carried by the logo, the `<title>`, and the Organization schema; the tagline is the
positioning statement the brief wants read first. `[DERIVED]` — see Q-10 if the client prefers the
company name as H1.

### Layout

| Breakpoint | Spec |
|---|---|
| ≥1280px | Min-height `clamp(620px, 78vh, 760px)`. Content in the left 7 of 12 columns; right 5 columns hold the decorative device (see below). Padding-top 160px (clears the 80px transparent header), padding-bottom 120px |
| 1024–1279 | Same, min-height 600px, padding-top 140px |
| 768–1023 | Single column, left-aligned, min-height 540px, padding 120px 32px 80px |
| <768 | Single column, min-height auto, padding 96px 24px 64px. Buttons full-width, stacked, 12px gap. Headline `--type-display` mobile size (34/42) |

### Background

- `--gradient-hero` (`135deg`, `#0A1628 → #16294A → #1D3660`).
- Grid-line texture overlay: 1px `rgba(255,255,255,0.05)` vertical lines every 80px, masked to fade
  out at 60% height.
- **Optional** Sarawak/corporate photograph at 12–18% opacity, multiplied under the gradient, only
  if a suitable approved image exists (`02-design-system.md` §9). Ship without it otherwise — the
  gradient hero is complete on its own.
- Bottom edge: flat. No wave, no diagonal, no SVG divider.

### Right-hand decorative device (≥1024px only) `[DERIVED]`

One of, in order of preference:
1. **Nothing** — let the whitespace carry the premium feel, content stays in 7 columns.
2. A large, low-contrast EWT monogram: the logo mark at 420px wide, `opacity: 0.06`, white, bleeding
   off the right edge, `aria-hidden`.
3. An abstract angular composition of 3 parallelograms echoing the logo's `T` accent, in
   `rgba(255,255,255,0.04)` with one 2px `--ewt-gold-400` edge.

Do not use: a device mockup, a dashboard screenshot, a stock photo of people, an illustration, a
3D render, or an animated canvas.

### Motion

Hero content reveals on load: eyebrow → headline → sub → buttons, `opacity`+`translateY(16px)`,
500ms `--ease-out`, 60ms stagger. **Once, on mount.** No looping, no parallax. Disabled under
`prefers-reduced-motion`.

### Performance

The hero is the LCP element. The headline must render with the fallback font immediately
(`font-display: swap`) and the webfont must be preloaded. If a hero image is used it must be
`fetchpriority="high"`, sized, and AVIF.

---

## 02 — What EWT Does `[BRIEF]` p.6

> *"Short explanation that EWT works with organisations to understand technology requirements, define
> the appropriate solution, plan the engagement and coordinate implementation."*

That sentence contains **four steps**. Render them as four numbered `ProcessStep` items — this is the
clearest possible expression of "structured" and it is drawn directly from the brief's own wording,
not invented.

### Content

| Eyebrow | `WHAT EWT DOES` |
|---|---|
| H2 | *We work with organisations to turn technology requirements into structured projects.* `[NEEDS APPROVAL]` — drafted from the brief sentence |
| Lead | Optional single sentence, ≤2 lines |

| # | Step title | Support line (drafted, `[NEEDS APPROVAL]`) |
|---|---|---|
| 01 | Understand the requirement | We work with your team to understand the operational and technology requirement in its actual context. |
| 02 | Define the appropriate solution | We define a solution that fits the organisation's needs, constraints and existing environment. |
| 03 | Plan the engagement | We structure the project — scope, sequence, responsibilities and delivery approach. |
| 04 | Coordinate implementation | We coordinate the expertise required to implement, test and put the solution into operation. |

Every support line is a **method** statement. None claims a past project. Keep it that way.

### Layout

- 4 columns ≥1024px, 2 columns 768–1023px, 1 column <768px, gap 32px.
- Quiet 1px connector line between steps at ≥1024px (see `ProcessStep` in `03-`).
- Section tone `light`, padding per the rhythm table.
- No icons on this section — the numerals are the visual device. (Icons appear in §03; using both
  would be noisy.)

---

## 03 — Project Capabilities `[BRIEF]` p.6

The brief lists **ten** items here (a shorter, punchier set than the eight detailed categories on
the Capabilities page). Both lists are in the brief and both are used as written.

### Content — the ten tiles, in the brief's order

| # | Label (verbatim) | Icon (`lucide`) | Deep link |
|---|---|---|---|
| 1 | Digital Transformation Projects | `arrow-right-left` | `/capabilities#digital-transformation` |
| 2 | Enterprise Technology Projects | `building-2` | `/capabilities#enterprise-custom-systems` |
| 3 | Systems Integration | `network` | `/capabilities#systems-integration` |
| 4 | Custom Business Systems | `blocks` | `/capabilities#enterprise-custom-systems` |
| 5 | Technology Consultancy & Advisory | `clipboard-list` | `/capabilities#technology-consultancy-advisory` |
| 6 | Data & Dashboard Solutions | `bar-chart-3` | `/capabilities#data-management-dashboards` |
| 7 | Process Automation | `workflow` | `/capabilities#automation-process-improvement` |
| 8 | Corporate Digital Platforms | `globe` | `/capabilities#corporate-digital-platforms` |
| 9 | Technology Implementation | `cpu` | `/capabilities#technology-implementation-project-support` |
| 10 | Managed Project Support | `shield-check` | `/capabilities#technology-implementation-project-support` |

Labels are **exact strings from the brief** — do not shorten "Digital Transformation Projects" to
"Digital Transformation" here, even though the Capabilities page uses the shorter form. They are two
deliberately different lists.

### Section header

| Eyebrow | `PROJECT CAPABILITIES` |
|---|---|
| H2 | *The categories of technology projects we structure and deliver.* `[NEEDS APPROVAL]` |
| Lead | Optional: one line pointing to the Capabilities page for detail |

### Layout — designed so ten items sit symmetrically

| Breakpoint | Grid | Rationale |
|---|---|---|
| ≥1280px | **5 columns × 2 rows** | 10 divides evenly — no orphan tile |
| 1024–1279 | 5 columns × 2 rows (tiles narrower) **or** 2 columns × 5 rows if labels wrap to 3 lines | Test with real strings; never allow a ragged final row |
| 768–1023 | 2 columns × 5 rows | Even |
| <768 | 1 column × 10 rows, tiles in compact horizontal form (icon left, label right, 72px tall) | Avoids an extremely long page of tall cards |

Gap 24px. All tiles equal height (`min-height: 148px` on grid layouts).

Below the grid, centred: `Button` `secondary`, size `md` — **"Explore Capabilities"** → `/capabilities`.

### Tile

Use `CapabilityTile` from `03-component-specifications.md` §8. Section tone `alt` so the white tiles
read as cards.

---

## 04 — Why EWT `[BRIEF]` p.6

### Content — six items, verbatim

| # | Value (verbatim) | Support line (drafted, `[NEEDS APPROVAL]`) |
|---|---|---|
| 1 | Understanding of the Sarawak operating environment | We work within the realities of how organisations in Sarawak plan, procure and operate. |
| 2 | Structured project planning and delivery | Scope, sequence and responsibilities are defined before implementation begins. |
| 3 | Solutions tailored to actual organisational requirements | We design around the requirement in front of us, not around a fixed product. |
| 4 | Ability to coordinate the appropriate technology expertise | We bring together the specific expertise a project needs, and manage it as one engagement. |
| 5 | Implementation-minded approach, not consultancy-only | Our recommendations are made with implementation and operation in mind. |
| 6 | Long-term support mindset | We plan for the system's life after go-live, not just its delivery. |

Support lines are optional. If the client prefers the brief's list bare, render the six headings
alone — that is also fully compliant and arguably more confident. **Recommendation: include the
support lines**, because a procurement reader needs the "so what".

### Layout

- `ValueRow` component, 2 columns × 3 rows ≥1024px; 1 column below.
- Numbered index `01`–`06` in `--ewt-silver-400`, or a 20px line icon in `--ewt-blue-500` — **choose
  one, not both.** Recommendation: numerals here (icons are already used in §03).
- 1px `--border-default` between rows; no cards, no shadows. This section should feel like a
  well-set document, not a grid of boxes.
- Section tone `light`.

---

## 05 — Sarawak Focus `[BRIEF]` p.6

> *"Position EWT as contributing to technology adoption and modernisation in Sarawak across digital
> transformation, enterprise systems, automation, data and technology implementation. **Do not claim
> government appointments, partnerships or completed work unless approved.**"*

### Content

| Eyebrow | `SARAWAK FOCUS` |
|---|---|
| H2 | *Built for the Sarawak operating environment.* `[NEEDS APPROVAL]` |
| Body | 2–3 short paragraphs, ≤`62ch`. Must state EWT's contribution to technology adoption and modernisation in Sarawak across the five named areas: digital transformation, enterprise systems, automation, data, technology implementation. See `11-copy-deck.md` for the drafted paragraphs. |
| Supporting element | The five focus areas as a horizontal chip/pill row or a 5-item inline list, `--type-body-sm`, `--ewt-blue-100` chips with `--ewt-blue-600` text |

**Compliance guardrail for this section specifically:** it is the highest-risk section on the site.
Before shipping, re-read the copy and confirm it contains no phrase implying:
appointment, panel membership, partnership, endorsement, contract, participation in a state
programme, or any completed work.

Safe verbs: *contribute to, support, focus on, work within, is established to*.
Unsafe verbs: *partner with, appointed by, selected for, delivering for, working with the State*.

### Layout

- Two-column ≥1024px: text in 6 columns left, imagery/device in 5 columns right (1 column gutter).
- Optional image: a restrained Sarawak corporate/architectural photograph, `--radius-lg`, 4:3 or
  3:4, desaturated 60–70%, with a subtle navy tint. **Only if an approved image exists.**
  See `14-ASSET-REQUIREMENTS.md`.
- If no image: run the section full-width single column at `--container-narrow`, with the five focus
  chips centred beneath. Do not insert a placeholder image box.
- Section tone `light`. If the previous section is also `light`, add a top hairline rule.

---

## 06 — Leadership Preview `[BRIEF]` p.6

> *"Show Founder & CEO Wesley Chai and Founder & CTO Edwin Ting with professional photography and
> links to the Leadership page."*

### Content

| Eyebrow | `LEADERSHIP` |
|---|---|
| H2 | *The people behind EWT.* `[NEEDS APPROVAL]` |
| Cards | Two `PersonCard`s |
| Link | **"View leadership"** → `/leadership` (tertiary button with `arrow-right`) |

| Person | Role (verbatim) | Preview line |
|---|---|---|
| Wesley Chai | Founder & CEO | Public-facing business and project leadership. |
| Edwin Ting | Founder & CTO | Technology and technical-delivery leadership. |

The preview lines are the brief's own descriptors (p.10) and are safe to use verbatim. Do not add
biography detail on Home — full bios live on `/leadership` and are `[NEEDS APPROVAL]` anyway.

### Layout

- 2 cards side by side ≥768px (each 5 of 12 columns, centred with a 2-column gutter), stacked below.
- Photo 4:5 portrait, professional photography **required** — see `14-ASSET-REQUIREMENTS.md` A-03.
- **Until photographs are supplied:** use the navy monogram placeholder defined in
  `03-component-specifications.md` §11. Do **not** use stock portraits, silhouettes, or AI-generated
  faces under any circumstances.
- Section tone `alt`.

---

## 07 — Final CTA `[BRIEF]` p.6–7

### Content — verbatim, do not rewrite

| Element | Copy |
|---|---|
| Heading | **Have a technology project or requirement?** |
| Sub | **Speak directly with EWT to discuss the scope and next steps.** |
| Button | **Discuss a Project with Our CEO** |

Note the button label here is longer than the site-wide "Discuss a Project" — the brief specifies
this exact string for the Home final CTA. Use it as written.

### Layout

- `CtaBand`, tone `inverse`, centred, `--container-text` (680px).
- Optional 3px × 96px `--gradient-accent-rule` above the heading.
- Heading `--type-h1` (44px desktop / 30px mobile), white.
- Sub `--type-lead`, `--text-on-inverse-mut`.
- Button `on-inverse-primary`, size `lg`, full-width <480px.
- Padding 120px desktop / 72px mobile.
- Links to WhatsApp via `whatsAppHref()`.

---

## Acceptance criteria — Home

- [ ] Exactly seven sections, in the brief's order, with the brief's names
- [ ] Hero headline, sub-headline and both CTA labels match the brief verbatim
- [ ] All ten capability labels match the brief verbatim, and each deep-links to the right anchor
- [ ] All six "Why EWT" headings match the brief verbatim
- [ ] Sarawak Focus contains no appointment/partnership/completed-work claim
- [ ] Both founders appear with correct names and roles
- [ ] Final CTA uses the three exact strings from the brief
- [ ] Two navy bands maximum (hero + final CTA); footer is separate
- [ ] Page contains no testimonials, client logos, statistics, pricing, blog or newsletter
- [ ] LCP element is the hero headline or hero image; no layout shift on font load
- [ ] Floating WhatsApp button present and functional
