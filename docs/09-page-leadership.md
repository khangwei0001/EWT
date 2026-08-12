# 09 — Leadership Page

**Route:** `/leadership`
**Source:** Brief §8 "About & Leadership" (p.10), §4 (p.5), §5.06 (p.6), §12 (p.14).
**Purpose (verbatim):** *"Founder profiles for Wesley Chai and Edwin Ting."* `[BRIEF]` p.5

### The brief's governing instructions `[BRIEF]` p.10

> **Wesley Chai - Founder & CEO** — *Public-facing business and project leadership. Bio copy can
> remain concise until final background wording is approved.*
>
> **Edwin Ting - Founder & CTO** — *Technology and technical-delivery leadership. Bio copy can
> remain concise until final background wording is approved.*
>
> ***Do not overstate credentials, project history, awards, partnerships or client relationships.
> Use only verified/approved information.***

And `[BRIEF]` p.6: leadership should be shown *"with professional photography"*.

---

## 1. Page skeleton

```
SiteHeader (solid white)
├─ A  Page intro          tone: light
├─ B  Founder profiles ×2 tone: light
├─ C  How we lead delivery tone: alt   [optional]
└─ D  CTA band            tone: inverse
SiteFooter
WhatsAppFab
```

---

## 2. A — Page intro

| Element | Spec |
|---|---|
| Eyebrow | `LEADERSHIP` |
| H1 | **Leadership** |
| Lead | *Eastern World Technology is led by its two founders, who are directly involved in how projects are structured and delivered.* `[NEEDS APPROVAL]` |
| Container | `--container-narrow` |
| Padding | 96px top desktop / 64px mobile |

The lead is a genuine differentiator for a small firm facing enterprise buyers — **founder-level
involvement** — and it claims nothing unverifiable.

---

## 3. B — Founder profiles

Two `PersonCard` profiles, in this order (CEO first, matching the brief).

### Wesley Chai — Founder & CEO

| Field | Value |
|---|---|
| Name | **Wesley Chai** |
| Role | **Founder & CEO** (`--type-eyebrow`, uppercase: `FOUNDER & CEO`) |
| Role descriptor (verbatim) | Public-facing business and project leadership. |
| Photo | Professional portrait, 4:5 — **asset required**, see `14-ASSET-REQUIREMENTS.md` A-03 |
| Bio | `[NEEDS APPROVAL]` — see draft below. Keep concise until final wording is approved `[BRIEF]` p.10 |
| Contact | **None.** No email, phone or social links unless approved `[BRIEF]` p.11 |

**Concise bio draft (2 sentences, zero unverifiable claims):**
> Wesley leads Eastern World Technology's business and project engagement — working directly with
> organisations to understand a requirement, define its scope and set the direction of the
> engagement. He is the first point of contact for organisations bringing a technology project or
> requirement to EWT.

The second sentence is functionally important: it explains *why* the site's primary conversion goes
to Wesley's WhatsApp `[BRIEF]` p.3.

### Edwin Ting — Founder & CTO

| Field | Value |
|---|---|
| Name | **Edwin Ting** |
| Role | **Founder & CTO** (`FOUNDER & CTO`) |
| Role descriptor (verbatim) | Technology and technical-delivery leadership. |
| Photo | Professional portrait, 4:5 — **asset required** |
| Bio | `[NEEDS APPROVAL]` — see draft below |
| Contact | **None** |

**Concise bio draft:**
> Edwin leads Eastern World Technology's technology direction and delivery — defining the technical
> approach for each project and overseeing implementation, testing and handover. He is responsible
> for ensuring that what EWT proposes can be built, operated and supported in practice.

Both drafts stay strictly within the brief's descriptors and add no background, history, employer,
qualification, certification or achievement. **Any addition of biographical background requires
client-supplied, verified wording** `[BRIEF]` p.10, p.14.

---

## 4. Profile layout

### Desktop ≥1024px

Alternating two-column rows (photo left / text right, then photo right / text left) at
`--container` width:

```
┌──────────────┐   FOUNDER & CEO
│              │   Wesley Chai
│    photo     │   Public-facing business and project leadership.
│     4:5      │
│              │   [bio paragraph, max 52ch]
└──────────────┘
                                                    FOUNDER & CTO
                          ┌──────────────┐          Edwin Ting
                          │              │          Technology and technical-delivery leadership.
                          │    photo     │
                          │     4:5      │          [bio paragraph]
                          └──────────────┘
```

| Property | Value |
|---|---|
| Photo column | 5 of 12 columns, max 440px wide |
| Text column | 6 of 12 columns, vertically centred |
| Row gap | 96px between founders |
| Photo | `--radius-lg`, `object-fit: cover`, desaturated 15%, `--shadow-none` |
| Name | `--type-h1` (44px) — this page can afford large names; it is the page's subject |
| Role | `--type-eyebrow`, `--text-eyebrow`, above the name |
| Descriptor | `--type-lead`, `--text-body` |
| Bio | `--type-body`, `--text-muted`, max `52ch` |

**Alternative (simpler, equally acceptable):** a two-up card grid identical to the Home preview but
with bios. Use this if the alternating layout feels heavy with only two people. `[DERIVED]`

### Tablet / mobile

Stacked: photo (full width of container, max 420px, centred or left-aligned) → role → name →
descriptor → bio. 56px gap between founders. Name drops to `--type-h2`.

---

## 5. Photography requirements `[BRIEF]` p.6 "professional photography", p.14 "Founder photographs"

Specification for the client's photographer (also in `14-ASSET-REQUIREMENTS.md`):

| Property | Requirement |
|---|---|
| Framing | Head-and-shoulders to mid-chest, eye level, subject slightly off-centre |
| Ratio | Shoot 4:5 portrait; deliver a 1:1 crop as well for future use |
| Resolution | ≥2000px on the short edge, uncompressed source |
| Background | Plain, neutral — light grey/white studio, or a clean out-of-focus office wall. **Not** an outdoor/tourism setting, not a busy office, not a virtual background |
| Lighting | Soft, even, no heavy shadow, no coloured gel |
| Attire | Business attire, consistent between both founders |
| Treatment on site | Desaturate 15%, no vignette, no duotone, no heavy grading |
| Consistency | Both portraits shot in the same session, same lens, same lighting, same background |

### Interim state — until photographs arrive

Use the monogram placeholder from `03-component-specifications.md` §11: navy `--surface-inverse-alt`
panel at 4:5, centred `WC` / `ET` in `--ewt-silver-400`, 48px/600, 0.08em tracking.

**Absolutely prohibited as interim:** stock photography of any person, AI-generated portraits, grey
silhouette avatars, initial-circle avatars in bright colours, cartoon/illustrated avatars, LinkedIn
profile photo scraping. Using someone else's face — real or synthetic — on a leadership page is a
credibility failure a procurement audience will not forgive.

The monogram placeholder is deliberate and reads as a design choice. It is fine to launch with it if
photographs are delayed, but it should be listed as a launch caveat.

---

## 6. C — How we lead delivery (optional)

A short block reinforcing founder-level involvement without adding personal claims.

| Element | Copy `[NEEDS APPROVAL]` |
|---|---|
| Eyebrow | `HOW WE WORK` |
| H2 | Founder-level involvement in every engagement. |
| Body | Three short points: (1) a founder is directly involved in defining scope; (2) technical direction is owned internally, not delegated to a third party; (3) the same people who scope the project remain accountable through delivery and support. |

Format: 3 columns ≥768px, numbered `01–03`, 1px `--border-default` top rule on each, `--type-h4`
heading + `--type-body-sm` support. Tone `alt`.

`[RESOLVED — include]` Q-12.

---

## 6a. Extended bio preview blocks `[DEVELOPMENT PREVIEW ONLY — see Q-24]`

The client wants to see what a **fuller** founder profile would look like — with Background,
Experience and Education fields present — purely to judge layout and density before any real
biographical copy exists. `[BRIEF]` p.10 is explicit that credentials, project history, awards,
partnerships and client relationships must not be overstated; nothing here changes that rule. What
it adds is a **development-only preview mechanism**, not published content.

Use `PlaceholderBioBlock` (`03-component-specifications.md` §22), inserted directly beneath each
founder's existing bio paragraph in §4:

```
FOUNDER & CEO
Wesley Chai
Public-facing business and project leadership.
[bio paragraph — as in §3]

┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐  PLACEHOLDER — REPLACE BEFORE LAUNCH
  BACKGROUND
  [Placeholder — prior role / organisation, to be confirmed]

  EXPERIENCE
  [Placeholder — relevant experience summary, to be confirmed]

  EDUCATION
  [Placeholder — qualification, to be confirmed]
└ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
```

| Property | Value |
|---|---|
| Visibility | Only when `PREVIEW_EXTENDED_BIOS=true` — off by default, excluded from production config |
| Border | Dashed 1px `--border-strong` — visually distinct from every other card on the site, which uses solid borders only |
| Corner tag | `PLACEHOLDER — REPLACE BEFORE LAUNCH`, `--type-caption`, on a `--ewt-grey-100` chip |
| Field text | Square-bracketed placeholder strings, never phrased as if factual |
| Content source | `src/content/leadership.fixtures.ts` — never the real `leadership.ts` file |

**This block must never reach production.** It exists so the client can evaluate the fuller layout
now; the launch checklist (`12-technical-requirements.md` §11) includes an explicit gate confirming
the flag is off before deployment.

---

## 7. D — CTA band

`CtaBand`, tone `inverse`, centred.

| Element | Copy |
|---|---|
| H2 | Speak directly with our CEO. `[NEEDS APPROVAL]` |
| Sub | Have a technology project or requirement? Speak directly with EWT to discuss the scope and next steps. `[BRIEF]`-derived |
| Primary | **Discuss a Project with Our CEO** → WhatsApp `[BRIEF]`-verbatim label |

This page is the right place for the longer, more personal CTA label — the visitor has just read who
Wesley is.

---

## 8. Compliance checklist — Leadership (the highest-risk page for over-claiming)

Before shipping, verify **every** statement on this page against `[BRIEF]` p.10:

- [ ] No employer history, previous company, or role at another organisation is named
- [ ] No university, degree, qualification or certification is claimed
- [ ] No years of experience, project counts, or team size figures appear
- [ ] No award, recognition, ranking or media mention appears
- [ ] No partnership, panel, appointment or vendor accreditation appears
- [ ] No client relationship — current or past — is named or implied
- [ ] No photograph of a person who is not the named founder appears anywhere
- [ ] Names and role titles exactly match the brief: **Wesley Chai — Founder & CEO**,
      **Edwin Ting — Founder & CTO**
- [ ] Bios are concise and drawn only from the brief's own descriptors, pending approved wording
- [ ] No personal contact details (email, phone, LinkedIn) unless explicitly approved
- [ ] Page has a single `<h1>` ("Leadership"); founder names are `<h2>`
- [ ] Portrait images have meaningful, factual alt text: `"Wesley Chai, Founder & CEO of Eastern World Technology"`
- [ ] Closing CTA present; floating WhatsApp button present
- [ ] `PREVIEW_EXTENDED_BIOS` is confirmed `false`/absent in production — the §6a placeholder blocks
      (Background/Experience/Education) must not be visible on the live site under any circumstances
