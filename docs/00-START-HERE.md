# EWT Website V1 — Design Documentation Index

**Project:** Eastern World Technology (EWT) — Corporate Website, Frontend V1
**Source of truth:** `Eastern_World_Technology_Website_Brief (1).pdf` (14 pages)
**Status:** Design specification complete — pending client answers in `13-OPEN-QUESTIONS.md`
**Intended reader:** The AI/human developer who will build the frontend.

---

## 1. What this documentation set is

This is a build-ready specification derived **entirely** from the client brief. Every structural,
content and visual instruction in the PDF has been carried into these documents. Nothing in the
brief has been dropped, softened or reinterpreted.

Where the brief did not specify something (e.g. exact hex values, typeface, framework), a
**derived decision** has been made that is consistent with the brief's stated direction, and it is
explicitly labelled as such so the client can override it. All derived decisions are also collected
in `13-OPEN-QUESTIONS.md`.

---

## 2. Document map

| # | Document | What it covers | Read when |
|---|---|---|---|
| 00 | `00-START-HERE.md` | This index, build order, non-negotiables | First |
| 01 | `01-brand-and-positioning.md` | Who EWT is, audience, tone, hard credibility rules | Before writing any copy |
| 02 | `02-design-system.md` | Colour, type, spacing, grid, elevation, motion, icons | Before writing any CSS |
| 03 | `03-component-specifications.md` | Header, footer, buttons, cards, WhatsApp FAB, etc. | Before building components |
| 04 | `04-information-architecture-and-seo.md` | Sitemap, routes, nav, metadata, OG tags | Before scaffolding routes |
| 05 | `05-page-home.md` | Home page, section by section (7 sections) | Building Home |
| 06 | `06-page-about.md` | About EWT page | Building About |
| 07 | `07-page-capabilities.md` | Capabilities page, 8 capability cards | Building Capabilities |
| 08 | `08-page-projects.md` | Projects page — launch state + future case-study system | Building Projects |
| 09 | `09-page-leadership.md` | Leadership page, 2 founder profiles | Building Leadership |
| 10 | `10-page-contact.md` | Contact / Discuss a Project conversion page | Building Contact |
| 11 | `11-copy-deck.md` | Every user-facing string, marked approved vs. draft | Populating content |
| 12 | `12-technical-requirements.md` | Stack, performance, a11y, responsive, QA checklist | Setup + pre-launch |
| 13 | `13-OPEN-QUESTIONS.md` | **Questions for the client — needs answers** | Now |
| 14 | `14-ASSET-REQUIREMENTS.md` | **Missing assets — needs delivery** | Now |

---

## 3. The five non-negotiables

These come directly from the brief and override any design instinct:

1. **EWT is not a web-development agency.** It is a Sarawak-focused technology *project,
   consultancy and solutions* company. The site must never read like a website/app shop.
   *(Brief §1, p.2 and §11, p.13)*

2. **Do not fabricate anything.** No invented projects, clients, case studies, awards, partnerships,
   government appointments, statistics or credentials. The Projects page ships in a "Coming Soon"
   state. *(Brief §7 p.9, §8 p.10, §11 p.13)*

3. **The identity must remain independent.** Do not copy another company's wording, portfolio,
   visual language or service structure. *(Brief §1, p.2)*

4. **One primary conversion: "Discuss a Project" → CEO's WhatsApp.** A floating WhatsApp button is
   present across the site. *(Brief §2, p.3)*

5. **Frontend only.** No CMS, admin dashboard, customer login, payment system, authentication or
   complex backend in V1. *(Brief §4 p.5, §10 p.12)*

---

## 4. Recommended build order

1. Read `01`, `02`, `04` end-to-end.
2. Scaffold the project per `12-technical-requirements.md` (stack, tokens, folder structure).
3. Implement the design tokens from `02-design-system.md` **first** — do not hand-write hex values
   anywhere in page code.
4. Build shared components from `03-component-specifications.md`:
   Header → Footer → WhatsApp FAB → Button → Section shell → Card primitives.
5. Build pages in this order: Home → Capabilities → About → Leadership → Projects → Contact.
6. Populate copy strictly from `11-copy-deck.md`. Do not improvise copy.
7. Run the QA + launch checklist in `12-technical-requirements.md`.

---

## 5. Blockers before launch `[UPDATED — most resolved]`

The client has answered `13-OPEN-QUESTIONS.md` in full. Most items below are now resolved with
either a confirmed value or an explicitly approved placeholder (🟣) that renders on the site for
review but must be confirmed/replaced before the site goes fully live. Full detail in `12`, `13` and
`14`.

| Item | Status | Detail |
|---|---|---|
| CEO WhatsApp number | ✅ **Confirmed** | +60 12-879 7003, approved public |
| Business hours | 🟣 Placeholder confirmed | Mon–Fri, 9am–6pm (MYT) |
| Domain + hosting | 🟣 Placeholder confirmed | `www.ewt.com.my` on Cloudflare Pages; final domain still open |
| Email / phone / address / map | 🟣 Placeholder confirmed | See `03-component-specifications.md` §4 |
| Founder photographs | ✅ Resolved | Launch with navy monogram placeholders, swap later |
| Final founder biography wording | ✅ Resolved | Launch with concise drafts; a dev-only extended-bio preview exists for layout review |
| **Final approved logo file(s) + variants** | 🔴 **Still open — the one real blocker** | Only a raster PNG mark exists; no vector lockup, no reversed/mono variant, no favicon source |

**Practically:** the site can now be built end-to-end with a working WhatsApp conversion. The only
asset genuinely holding up a polished launch is **A-01, the final logo files** — see
`14-ASSET-REQUIREMENTS.md`. One flag worth the client's attention regardless of blocking status: the
placeholder address (Ara Damansara, Petaling Jaya, **Selangor**) sits outside Sarawak, which is in
tension with the brief's Sarawak-only positioning — see `03-component-specifications.md` §4.

*(Brief §12 "TBD before final launch", p.14)*

---

## 6. Traceability convention

Throughout these documents:

- **`[BRIEF]`** — taken directly from the PDF. Do not change without client approval.
- **`[DERIVED]`** — a design decision made to fill a gap the brief left open. Consistent with the
  brief's direction, but overridable by the client.
- **`[NEEDS APPROVAL]`** — drafted content or a decision that must be signed off before launch.
  Every one of these is listed in `13-OPEN-QUESTIONS.md`.

---

## 7. Final direction (verbatim from the brief, p.14)

> The finished site should make a Sarawak enterprise or government-related decision-maker feel that
> EWT is a serious, structured technology project company worth speaking to about an upcoming
> requirement. Keep Version 1 simple, fast and premium.

If a design choice does not serve that sentence, remove it.
