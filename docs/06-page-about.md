# 06 — About EWT Page

**Route:** `/about`
**Source:** Brief §4 (p.5), §8 "About & Leadership" (p.10), §1 (p.2).
**Purpose (verbatim):** *"Explain the company, Sarawak focus, philosophy and project-led approach."*
`[BRIEF]` p.5

### The brief's definition of this page `[BRIEF]` p.10

> *"The About page should communicate that EWT is a Sarawak-focused technology company established
> to structure and deliver technology projects around real organisational requirements. The tone
> should emphasise disciplined execution, practical technology adoption and long-term value."*

Three tone pillars to hit explicitly: **disciplined execution**, **practical technology adoption**,
**long-term value**.

---

## Page skeleton

```
SiteHeader (solid white)
├─ A  Page intro                 tone: light
├─ B  Who we are                 tone: light
├─ C  How we work (philosophy)   tone: alt
├─ D  Sarawak focus              tone: light
├─ E  Registered scope           tone: alt
└─ F  CTA band                   tone: inverse
SiteFooter
WhatsAppFab
```

Container: `--container-narrow` (880px) for prose sections; `--container` (1200px) for C and E.

---

## A — Page intro

| Element | Spec |
|---|---|
| Eyebrow | `ABOUT EWT` |
| H1 | **About Eastern World Technology** |
| Lead | One paragraph, `--type-lead`, max `58ch`: EWT is a Sarawak-focused technology company established to structure and deliver technology projects around real organisational requirements. `[BRIEF]`-derived — near-verbatim, safe |
| Layout | Left-aligned, padding-top 96px desktop / 64px mobile (header is solid, no hero) |
| Background | `--surface-page` white. **No navy hero on inner pages** — the navy band on this page is the closing CTA (F) |

A quiet variant is permitted: a 4px-tall `--gradient-accent-rule` above the eyebrow.

---

## B — Who we are

| Element | Spec |
|---|---|
| H2 | *A technology project company, not a development shop.* `[NEEDS APPROVAL]` |
| Body | 2–3 paragraphs, `--type-body`, max `62ch` |

Content requirements (all drawn from `[BRIEF]` §1 p.2 and §8 p.10):

1. EWT is a Sarawak-focused technology project, consultancy and solutions company.
2. EWT is capable of **receiving a client requirement, structuring the project, coordinating the
   necessary expertise, and delivering an appropriate technology solution** — the four-verb spine.
3. EWT is project-led rather than product-led: the client brings a requirement or challenge; EWT
   structures and delivers the technology engagement.
4. EWT works with government-related organisations, GLCs, established enterprises and larger
   organisations in Sarawak, and with selected private-sector organisations that have suitable
   technology projects.

Point 4 must be phrased as **who EWT is built to serve**, not as who EWT has served. Correct
phrasing: *"EWT is structured to work with…"*. Incorrect: *"EWT works with Sarawak GLCs and
government agencies"* (reads as a client claim).

Drafted copy is in `11-copy-deck.md` §3.

---

## C — How we work (philosophy)

The page's "philosophy and project-led approach" requirement `[BRIEF]` p.5.

### Option 1 (recommended) — the four-step engagement model

Reuse `ProcessStep` with the same four steps as Home §02, expanded to 2–3 sentences each. This
reinforces rather than duplicates, and it is the clearest possible statement of "structured".

| # | Step | Expansion focus |
|---|---|---|
| 01 | Understand the requirement | Discovery in operational context; talking to the people who will use the system |
| 02 | Define the appropriate solution | Fit to constraints, existing environment, and what the organisation can realistically operate |
| 03 | Plan the engagement | Scope, sequence, responsibilities, delivery approach — agreed before build |
| 04 | Coordinate implementation | Implementation, testing, deployment, handover and ongoing support |

### Option 2 — three principles

If the client prefers a philosophy statement over a process diagram, use the three tone pillars from
the brief as three principles:

| Principle | Statement focus |
|---|---|
| Disciplined execution | Structure before build; defined scope and responsibilities |
| Practical technology adoption | Technology the organisation can actually adopt, operate and maintain |
| Long-term value | Systems planned for their operational life, not just handover |

**Recommendation:** ship Option 1 as the main block and use the three pillars as a compact
three-column summary above it. Both are brief-derived. `[NEEDS APPROVAL]` on which.

### Layout

- Tone `alt`, `--container` (1200px).
- Option 1: 4 columns ≥1024px / 2 columns tablet / 1 column mobile.
- Option 2: 3 columns ≥768px / 1 column mobile, each with a numbered index and a 1px top rule.

---

## D — Sarawak focus

Distinct from Home §05: Home states the *position*; About explains the *reason*.

| Element | Spec |
|---|---|
| H2 | *Why Sarawak.* `[NEEDS APPROVAL]` |
| Body | 2 paragraphs, max `62ch` |
| Optional imagery | One restrained Sarawak corporate/architectural photograph, `--radius-lg`, 16:10, desaturated 60–70%, navy tint. Only if approved imagery exists |

Content must cover: Sarawak-only market positioning for the current phase; understanding of the
Sarawak operating environment; EWT's intended contribution to technology adoption and modernisation
in Sarawak across digital transformation, enterprise systems, automation, data and technology
implementation.

**Same compliance guardrail as Home §05:** no appointments, no partnerships, no completed work, no
state-programme participation. See `01-brand-and-positioning.md` §7.

Tourism rule applies to imagery here more strongly than anywhere else on the site — see
`01-brand-and-positioning.md` §8.

---

## E — Registered scope

A quiet credibility block using only verifiable, registered facts `[BRIEF]` p.1–2.

| Element | Spec |
|---|---|
| Eyebrow | `REGISTERED SCOPE` |
| H2 | *Company information* `[NEEDS APPROVAL]` |
| Content | `InfoTable` (`03-component-specifications.md` §16) |

| Term | Value |
|---|---|
| Company | Eastern World Technology |
| Registration No. | 202501010006 (1611420-T) |
| Positioning | Sarawak-focused Technology Project & Solutions Company |
| Registered activities (MSIC) | 62010 — Computer programming activities · 62021 — Computer consultancy · 62099 — Other information technology service activities |

- Render MSIC codes as a three-row nested list or a small bordered table, `--type-body-sm`, tabular
  numerals on the codes.
- Tone `alt`, `--container-narrow`.
- **Do not** add a "certifications", "memberships", "accreditations" or "partners" row. None are
  approved.
- Business hours and WhatsApp are **not** shown here — they belong on Contact and in the footer.

`[RESOLVED — include]` Q-12. High-value for a procurement audience: it is checkable and costs
nothing in credibility risk.

---

## F — CTA band

`CtaBand`, tone `inverse`, centred.

| Element | Copy `[NEEDS APPROVAL]` |
|---|---|
| H2 | Have a requirement you would like structured? |
| Sub | Speak directly with EWT to discuss the scope and next steps. `[BRIEF]`-verbatim sub-line |
| Primary | **Discuss a Project** → WhatsApp |
| Secondary | **Explore Capabilities** → `/capabilities` (`on-inverse-secondary`) |

---

## Acceptance criteria — About

- [ ] Page communicates all three tone pillars: disciplined execution, practical technology adoption, long-term value
- [ ] The four-verb spine (receive → structure → coordinate → deliver) is present and legible
- [ ] Project-led (not product-led) positioning is stated explicitly
- [ ] Audience is described as who EWT is built to serve, never as who EWT has served
- [ ] Sarawak-only positioning stated; no appointment/partnership/completed-work claims
- [ ] Registration number and MSIC codes are accurate to the brief
- [ ] No client names, logos, statistics or project references anywhere on the page
- [ ] Single `<h1>`, clean heading hierarchy, prose measure ≤`62ch`
- [ ] Closing CTA present; floating WhatsApp button present
