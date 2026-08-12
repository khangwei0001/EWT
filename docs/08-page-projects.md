# 08 — Projects Page

**Route:** `/projects` (+ dormant `/projects/[slug]`)
**Source:** Brief §7 "Projects Page" (p.9), §4 (p.5), §10 (p.12).
**Purpose (verbatim):** *"Dedicated future portfolio/case-study area. **Do not invent completed
projects.**"* `[BRIEF]` p.5

### The brief's governing instructions `[BRIEF]` p.9

> *"Projects should eventually become one of EWT's strongest credibility assets. At launch, **do not
> fabricate projects or reuse another company's portfolio**."*
>
> *"Use a polished project page with a simple message such as **Project Portfolio - Coming Soon**,
> while keeping the full case-study layout ready for future content."*
>
> *"For enterprise or government-related work, the design should allow projects to be shown as
> **anonymised case studies** when client names or sensitive details cannot be disclosed."*

And `[BRIEF]` p.12: *"Projects page designed so static project cards can be added easily later
without redesigning the site."*

---

## 1. The two-state design

This page ships in **State A** and must be able to become **State B** by editing a data file only.

| | State A — V1 launch | State B — future |
|---|---|---|
| Data | `projects: Project[] = []` | Populated array |
| Renders | Intro + `StatelessNotice` panel + "what a case study will include" + CTA | Intro + filter/index + `ProjectCard` grid + CTA |
| Detail routes | None generated | One per project at `/projects/<slug>` |

**Build both.** State B components must exist, be styled, and be verified against seed/fixture data
during development — then shipped with an empty array. This is the brief's explicit requirement:
adding a project later must not require redesigning the site.

Recommended: keep a `projects.fixtures.ts` file with 3 sample entries used **only** in a local
development flag or a Storybook/preview route. It must not be importable from the production page
and must never be deployed as visible content — fabricated projects on a live page would violate
`[BRIEF]` p.9.

---

## 2. Page skeleton — State A (V1)

```
SiteHeader (solid white)
├─ A  Page intro                          tone: light
├─ B  Coming Soon panel                   tone: light  (panel is --surface-alt)
├─ C  What a published case study includes tone: alt
└─ D  CTA band                            tone: inverse
SiteFooter
WhatsAppFab
```

### A — Page intro

| Element | Spec |
|---|---|
| Eyebrow | `PROJECTS` |
| H1 | **Projects** |
| Lead | *Selected EWT engagements will be published here. Where client names or details cannot be disclosed, projects will be presented as anonymised case studies.* `[NEEDS APPROVAL]` |
| Container | `--container-narrow` |

This lead does two jobs: it explains the empty state without apology, and it pre-announces the
anonymisation policy — which a government/GLC reader will read as discretion, not as a gap.

### B — Coming Soon panel

Use `StatelessNotice` (`03-component-specifications.md` §13).

| Element | Copy |
|---|---|
| Icon | `folder-open`, 40px, `--ewt-blue-500` in a `--ewt-blue-100` chip |
| Heading | **Project Portfolio — Coming Soon** `[BRIEF]` p.9 — use this exact phrase |
| Body | *EWT is an early-stage company and publishes only work that is genuinely its own and approved for release. Project entries and case studies will be added here as engagements are completed and disclosure is agreed.* `[NEEDS APPROVAL]` |
| Primary CTA | **Discuss a Project** → WhatsApp |
| Secondary CTA | **Explore Capabilities** → `/capabilities` |

Note the em dash in the heading: the brief writes "Project Portfolio - Coming Soon" with a hyphen;
render it as **"Project Portfolio — Coming Soon"** (em dash) for typographic quality —
`[RESOLVED]` Q-13, confirmed by the client.

**The panel must read as deliberate.** Requirements:
- No "404", "under construction", "oops", spinner, or construction/cone iconography.
- No apology ("sorry", "unfortunately", "please check back").
- Honest framing is a credibility asset here — the brief itself treats fabrication as the risk, not
  emptiness.

### C — What a published case study includes

This section turns the empty state into a demonstration of rigour. It renders the brief's ten-field
case-study template as a preview of the standard EWT will publish to.

| Element | Spec |
|---|---|
| Eyebrow | `CASE STUDY STANDARD` |
| H2 | *What a published EWT case study will include.* `[NEEDS APPROVAL]` |
| Content | The ten fields from `[BRIEF]` p.9, as a numbered two-column list |
| Tone | `alt` |

| # | Field (verbatim from brief) |
|---|---|
| 01 | Project Name |
| 02 | Client / Sector |
| 03 | Project Context |
| 04 | Challenge / Requirement |
| 05 | EWT Scope |
| 06 | Proposed / Delivered Solution |
| 07 | Implementation |
| 08 | Technology / Partners (where disclosure is approved) |
| 09 | Outcome / Measurable Impact |
| 10 | Project Status |

Below the list, one line on confidentiality `[BRIEF]` p.9:
*"For enterprise or government-related work, case studies may be published in anonymised form where
client names or sensitive details cannot be disclosed."* `[NEEDS APPROVAL]`

`[RESOLVED — include]` Q-14. It fills the page credibly, shows structure, and requires zero claims.

### D — CTA band

`CtaBand`, tone `inverse`, centred.

| Element | Copy |
|---|---|
| H2 | Have a technology project or requirement? `[BRIEF]`-verbatim |
| Sub | Speak directly with EWT to discuss the scope and next steps. `[BRIEF]`-verbatim |
| Primary | **Discuss a Project** → WhatsApp |

---

## 3. Page skeleton — State B (future, built but dormant)

```
├─ A  Page intro                tone: light
├─ B' Project index             tone: alt
│     └─ ProjectCard grid (3 / 2 / 1 columns)
│        optional sector filter chips (only if ≥6 projects exist)
└─ D  CTA band                  tone: inverse
```

Switching rule: `projects.length === 0 ? renderStateA() : renderStateB()`. State C (`C`, the case
study standard section) is dropped once real projects exist, or moved to the bottom of the page.

### `ProjectCard`

Spec in `03-component-specifications.md` §14. Grid: 3 columns ≥1024px, 2 columns 768–1023, 1 column
below; gap 32px; equal height; thumbnails 16:10 with a navy geometric fallback.

### Anonymisation support (mandatory in the data model) `[BRIEF]` p.9

```ts
// Anonymised entry — must render correctly with no client name anywhere
{
  slug: 'operational-reporting-consolidation',
  name: 'Operational reporting consolidation',
  clientOrSector: 'State-linked organisation (Sarawak)',   // sector, never a name
  isAnonymised: true,
  summary: 'Consolidation of departmental reporting into a single management view.',
  status: 'Delivered',
}
```

Rules:
- `clientOrSector` is **never empty** — if the client cannot be named, the sector is shown.
- When `isAnonymised` is true, render an "Anonymised case study" tag on both the card and the detail
  page, and suppress any logo/imagery that could identify the client.
- Field 08 (Technology / Partners) renders **only** when explicitly approved — the data model should
  make omission the default (`technologies?: string[]`).

---

## 4. `/projects/[slug]` — case study detail (dormant)

Spec in `03-component-specifications.md` §15. Build the route and layout now; it generates zero
pages while the array is empty.

Layout at ≥1024px: `--container-narrow` body column (680–720px measure) with a sticky right meta
rail showing Sector, Status and Technologies (when approved). Stacked below 1024px. Ends with the
standard `CtaBand`.

Detail page metadata (future): title `<Project Name> | Projects | Eastern World Technology`,
description from `summary`, OG image from `thumbnail` or the default project OG image.

---

## 5. Hard prohibitions on this page

Every one of these is a direct violation of `[BRIEF]` p.9 / p.13:

- ❌ Invented, illustrative, hypothetical, or "example" projects presented as EWT work
- ❌ Any project, screenshot, portfolio item or case study taken from another company
- ❌ Client logos, client names, testimonials, or "trusted by" rows
- ❌ Statistics ("50+ projects", "10 years", "99.9% uptime")
- ❌ Stock dashboard/app mockups implying an EWT deliverable
- ❌ A "featured project" placeholder card containing lorem ipsum on the live site
- ❌ Framing the empty state as a temporary error

---

## 6. Acceptance criteria — Projects

- [ ] Page ships with **zero** project entries and no fabricated content
- [ ] The exact phrase "Project Portfolio — Coming Soon" is present
- [ ] The page looks deliberate and polished — not broken, not apologetic
- [ ] `ProjectCard` and `CaseStudyLayout` components exist, are styled, and are verified against
      fixture data in development only
- [ ] `/projects/[slug]` route compiles and generates zero pages with an empty array
- [ ] Data model supports anonymised case studies (`isAnonymised`, sector-only attribution) and
      optional technology/partner disclosure
- [ ] Adding a project later requires editing `src/content/projects.ts` only — no layout changes
- [ ] No fixture/sample project is reachable in the production build
- [ ] Closing CTA present; floating WhatsApp button present
