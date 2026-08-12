# 07 — Capabilities Page

**Route:** `/capabilities`
**Source:** Brief §6 "Capabilities Page" (p.8), §4 (p.5).
**Purpose (verbatim):** *"Show the categories of technology projects EWT can structure and deliver."*
`[BRIEF]` p.5

### The brief's governing instruction `[BRIEF]` p.8

> *"Capabilities should be described as **project areas** rather than a menu of cheap standalone
> development services. Each capability card can contain: **What it is / When it is useful / Typical
> project scope / Expected EWT involvement.**"*

This is the single most important framing rule on the site. A capability entry that reads like a
service listing ("Web Development — from RM X") is a hard fail.

---

## 1. Page skeleton

```
SiteHeader (solid white)
├─ A  Page intro                     tone: light
├─ B  Capability cards (×8)          tone: alt
├─ C  How an engagement is structured tone: light   [optional, recommended]
└─ D  CTA band                       tone: inverse
SiteFooter
WhatsAppFab
```

---

## 2. A — Page intro

| Element | Spec |
|---|---|
| Eyebrow | `CAPABILITIES` |
| H1 | **Capabilities** |
| Lead | *The categories of technology projects EWT structures and delivers. Each area describes what the work involves, when an organisation typically needs it, the usual scope of a project, and what EWT is responsible for.* `[NEEDS APPROVAL]` |
| Container | `--container-narrow` for the intro text |
| Padding | 96px top desktop / 64px mobile |

Optionally add a compact anchor index below the lead: the eight category names as text links to
their card anchors, in two columns, `--type-body-sm`. This helps a deep-linked visitor from Home
orient themselves. `[DERIVED]`, recommended at ≥768px only.

---

## 3. B — The eight capability categories `[BRIEF]` p.8

Titles and the summary line are **verbatim from the brief**. The four card fields are drafted and
require approval — every one is written in capability/method tense with no implied track record
(see `01-brand-and-positioning.md` §7).

### Anchor slugs

| # | Category (verbatim title) | Anchor | Icon |
|---|---|---|---|
| 01 | Technology Consultancy & Advisory | `technology-consultancy-advisory` | `clipboard-list` |
| 02 | Digital Transformation | `digital-transformation` | `arrow-right-left` |
| 03 | Enterprise & Custom Systems | `enterprise-custom-systems` | `building-2` |
| 04 | Systems Integration | `systems-integration` | `network` |
| 05 | Automation & Process Improvement | `automation-process-improvement` | `workflow` |
| 06 | Data & Management Dashboards | `data-management-dashboards` | `bar-chart-3` |
| 07 | Corporate Digital Platforms | `corporate-digital-platforms` | `globe` |
| 08 | Technology Implementation & Project Support | `technology-implementation-project-support` | `shield-check` |

---

### 01 — Technology Consultancy & Advisory

**Summary (verbatim):** requirement discovery, technology assessment, solution planning and project
scoping.

| Field | Drafted content `[NEEDS APPROVAL]` |
|---|---|
| **What it is** | Structured advisory work that turns an unclear technology need into a defined, scoped and implementable project. |
| **When it is useful** | When an organisation knows something needs to change but has not yet defined the requirement, the solution or the scope of work. |
| **Typical project scope** | Requirement discovery sessions, assessment of the current technology environment, options analysis, recommended solution direction, indicative delivery plan and project scope documentation. |
| **Expected EWT involvement** | EWT leads discovery and assessment, prepares the recommendation and scope, and remains available to structure the resulting implementation. |

---

### 02 — Digital Transformation

**Summary (verbatim):** modernising manual or fragmented processes through appropriate technology.

| Field | Drafted content `[NEEDS APPROVAL]` |
|---|---|
| **What it is** | Projects that move manual, paper-based or fragmented ways of working onto appropriate digital systems. |
| **When it is useful** | When work is spread across spreadsheets, forms, email and disconnected tools, and the organisation needs a single, reliable way of operating. |
| **Typical project scope** | Current-state process review, target process design, selection or design of supporting systems, phased rollout, user enablement and post-rollout review. |
| **Expected EWT involvement** | EWT structures the transformation into deliverable phases, defines the target state with the organisation, and coordinates delivery and adoption. |

---

### 03 — Enterprise & Custom Systems

**Summary (verbatim):** tailored internal systems, portals, workflow platforms and operational tools.

| Field | Drafted content `[NEEDS APPROVAL]` |
|---|---|
| **What it is** | Systems built or configured specifically for how an organisation actually operates, where standard off-the-shelf software does not fit. |
| **When it is useful** | When existing processes are too specific for packaged software, or when several internal tools need to be replaced by one operational system. |
| **Typical project scope** | Functional requirements, system and data design, build or configuration, user access and roles, testing, migration from existing tools, and handover. |
| **Expected EWT involvement** | EWT defines the requirement with the organisation, structures the build, coordinates the technical expertise required, and manages delivery through to operation. |

---

### 04 — Systems Integration

**Summary (verbatim):** connecting existing platforms, data sources, APIs and operational systems.

| Field | Drafted content `[NEEDS APPROVAL]` |
|---|---|
| **What it is** | Work that makes existing systems operate together, so information moves between them reliably instead of being re-entered or reconciled manually. |
| **When it is useful** | When departments run separate systems, when the same data is maintained in more than one place, or when a new system must work alongside established platforms. |
| **Typical project scope** | Integration assessment, interface and data mapping, API or file-based integration design, build and testing, error handling, monitoring and documentation. |
| **Expected EWT involvement** | EWT assesses the integration points, designs the approach, coordinates implementation with the relevant system owners, and validates the result in operation. |

---

### 05 — Automation & Process Improvement

**Summary (verbatim):** reducing repetitive work and improving operational visibility.

| Field | Drafted content `[NEEDS APPROVAL]` |
|---|---|
| **What it is** | Projects that remove repetitive manual steps from a process and make its status visible to the people accountable for it. |
| **When it is useful** | When staff time is spent on routine data handling, approvals move slowly, or management cannot see where work currently stands. |
| **Typical project scope** | Process mapping, identification of automation opportunities, workflow and approval design, implementation of automated steps, exception handling and operational reporting. |
| **Expected EWT involvement** | EWT maps the process with the operational team, defines what should be automated and what should stay manual, and delivers and validates the change. |

---

### 06 — Data & Management Dashboards

**Summary (verbatim):** consolidating operational information into decision-support interfaces.

| Field | Drafted content `[NEEDS APPROVAL]` |
|---|---|
| **What it is** | Bringing operational data from multiple sources into consolidated views that management can use to make decisions. |
| **When it is useful** | When reporting is assembled manually each period, when figures differ between departments, or when leadership needs a current operational picture. |
| **Typical project scope** | Data source review, definition of measures and reporting logic, consolidation approach, dashboard design, access control, refresh arrangements and handover to the reporting owner. |
| **Expected EWT involvement** | EWT defines the reporting requirement with decision-makers, structures the data consolidation, and delivers dashboards designed around how the information is actually used. |

---

### 07 — Corporate Digital Platforms

**Summary (verbatim):** web-based platforms and digital touchpoints designed around organisational
requirements.

| Field | Drafted content `[NEEDS APPROVAL]` |
|---|---|
| **What it is** | Web-based platforms and digital touchpoints — corporate, internal or stakeholder-facing — designed around an organisation's requirements and standards. |
| **When it is useful** | When an organisation needs a professional, reliable and maintainable digital presence or platform that reflects how it is expected to operate. |
| **Typical project scope** | Requirement and audience definition, information architecture, interface design, build, content structure, accessibility and performance standards, deployment and handover. |
| **Expected EWT involvement** | EWT structures the platform around the organisational requirement, coordinates design and build, and delivers it to an agreed standard with a defined support arrangement. |

> **Copy warning for this card:** this is the category most likely to be misread as "web design".
> Keep the emphasis on *platform*, *organisational requirement*, *standards* and *maintainability*.
> Never use the words "website design", "landing page", "web design services", or any price framing.
> `[BRIEF]` p.13: avoid making the website feel like a low-cost website/app development shop.

---

### 08 — Technology Implementation & Project Support

**Summary (verbatim):** coordinating implementation, testing, deployment and ongoing support.

| Field | Drafted content `[NEEDS APPROVAL]` |
|---|---|
| **What it is** | Coordination of the implementation itself — putting a defined solution into operation and keeping it supported afterwards. |
| **When it is useful** | When a solution has been decided but the organisation needs a single party to coordinate implementation, testing, deployment and the transition into operation. |
| **Typical project scope** | Implementation planning, coordination of technical and vendor resources, testing and acceptance, deployment, user handover, documentation and an agreed support arrangement. |
| **Expected EWT involvement** | EWT acts as the coordinating party through implementation and handover, and continues under an agreed support arrangement after go-live. |

---

## 4. Card layout

Use `CapabilityCard` from `03-component-specifications.md` §9.

| Breakpoint | Grid |
|---|---|
| ≥1024px | 2 columns × 4 rows, gap 32px, equal height |
| 768–1023px | 2 columns × 4 rows, gap 24px |
| <768px | 1 column, gap 20px |

- Section tone `alt` so white cards read as cards.
- Each card carries `id="<anchor>"` and `scroll-margin-top: 96px` (header clearance).
- Cards are **not** links — there are no per-capability pages in V1.
- Index numerals `01`–`08` in `--ewt-silver-400` reinforce the "structured" positioning.
- Field labels use `--type-eyebrow` in `--text-muted`; values `--type-body-sm`.

### Density note

Four fields × eight cards is a lot of text. Mitigations, in order of preference:

1. Keep every field to **one sentence**, ≤ 28 words. (The drafts above comply.)
2. On <768px, collapse "Typical project scope" and "Expected EWT involvement" into a `<details>`
   disclosure, leaving "What it is" and "When it is useful" always visible. Text stays in the DOM.
3. Do **not** solve density by deleting fields — the brief names all four.

---

## 5. C — How an engagement is structured (optional, recommended)

A short closing block that answers the procurement reader's next question: *what does working with
EWT actually look like?*

- Reuse the four `ProcessStep` items (Understand → Define → Plan → Coordinate).
- One line each; this is a recap, not a repeat of About §C.
- Tone `light`, 4 columns desktop / 1 column mobile.
- If the About page already carries the expanded version, keep this compact.

`[RESOLVED — include]` Q-12.

---

## 6. D — CTA band

`CtaBand`, tone `inverse`, centred.

| Element | Copy `[NEEDS APPROVAL]` |
|---|---|
| H2 | Not sure which area your requirement falls under? |
| Sub | Speak directly with EWT to discuss the scope and next steps. |
| Primary | **Discuss a Project** → WhatsApp |
| Secondary | **View Projects** → `/projects` (`on-inverse-secondary`) |

The H2 is deliberately useful rather than promotional: many organisations arrive with a problem, not
a category. This directly serves brief objective 2 (p.3) — *make it immediately clear that
organisations can approach EWT with a project, requirement or technology challenge*.

---

## 7. Mapping: Home tiles → Capability cards

For reference when wiring deep links. Home lists 10 punchier items; this page has 8 categories.
Both lists are the brief's own and both are used as written `[BRIEF]` p.6 and p.8.

| Home tile (10) | Capability card (8) |
|---|---|
| Digital Transformation Projects | 02 Digital Transformation |
| Enterprise Technology Projects | 03 Enterprise & Custom Systems |
| Custom Business Systems | 03 Enterprise & Custom Systems |
| Systems Integration | 04 Systems Integration |
| Technology Consultancy & Advisory | 01 Technology Consultancy & Advisory |
| Data & Dashboard Solutions | 06 Data & Management Dashboards |
| Process Automation | 05 Automation & Process Improvement |
| Corporate Digital Platforms | 07 Corporate Digital Platforms |
| Technology Implementation | 08 Technology Implementation & Project Support |
| Managed Project Support | 08 Technology Implementation & Project Support |

---

## 8. Acceptance criteria — Capabilities

- [ ] Exactly eight categories, titles verbatim from the brief, in the brief's order
- [ ] Every card contains all four fields: What it is / When it is useful / Typical project scope / Expected EWT involvement
- [ ] No pricing, packages, tiers, hourly rates, turnaround times or "starting from" language
- [ ] No card claims a delivered project, named client, sector experience or partnership
- [ ] "Corporate Digital Platforms" contains no web-design/agency framing
- [ ] Every card has a working anchor matching the Home tile deep links, with correct scroll offset
- [ ] Cards are equal height within a row; no ragged final row at any breakpoint
- [ ] Page reads as project areas, not a service menu — the stated framing test in `[BRIEF]` p.8
- [ ] Closing CTA present; floating WhatsApp button present
