# 11 — Copy Deck

Every user-facing string on the site, in one place. **Do not write copy in components.** Pull it from
here (or from the content data files this deck defines).

## Legend

| Tag | Meaning | Can the developer change it? |
|---|---|---|
| ✅ **BRIEF** | Verbatim from the client brief | **No.** Only the client may change it. |
| 🟡 **DRAFT** | Written to fill a gap, compliant with the brief's rules | Yes, but it must stay within the credibility rules and be approved before launch |
| 🟣 **PLACEHOLDER** | A working value the client explicitly approved rendering live for review, pending the real value | Renders on the site now; must be confirmed or replaced before production launch — tracked in `12-technical-requirements.md` §11 |
| 🔴 **TBD** | No value exists yet, approved or otherwise | Must not be invented — the field/row is omitted, never shown as literal "TBD" |

Spelling convention: **British/Malaysian English** (`organisation`, `modernising`, `prioritise`).
Punctuation: em dash `—` for parenthetical breaks, en dash `–` for ranges. Straight apostrophes are
fine in code; typographic apostrophes `’` in rendered copy.

---

## 1. Global strings

| Key | Copy | Tag |
|---|---|---|
| `company.name` | Eastern World Technology | ✅ BRIEF |
| `company.short` | EWT | ✅ BRIEF |
| `company.tagline` | Technology, Structured for Business. | ✅ BRIEF |
| `company.positioning` | Sarawak-focused Technology Project & Solutions Company | ✅ BRIEF |
| `company.registrationNo` | 202501010006 (1611420-T) | ✅ BRIEF |
| `company.descriptor` | A Sarawak-focused technology project and solutions company helping organisations turn requirements into structured, implementable technology projects. | ✅ BRIEF (hero sub-headline; reused as the footer descriptor) |
| `company.businessHours` | Monday – Friday, 9:00am – 6:00pm (MYT). Closed on Malaysian public holidays. | 🟣 PLACEHOLDER — Q-02 |
| `company.ceoWhatsAppNumber` | +60 12-879 7003 | ✅ confirmed — Q-01 |
| `company.email` | info@ewt.com.my | 🟣 PLACEHOLDER — Q-16 |
| `company.officePhone` | +60 3-1234 5678 | 🟣 PLACEHOLDER — Q-16 |
| `company.address` | Ara Damansara, Petaling Jaya, Selangor, Malaysia | 🟣 PLACEHOLDER — Q-16 |
| `cta.primary` | Discuss a Project | ✅ BRIEF |
| `cta.primaryLong` | Discuss a Project with Our CEO | ✅ BRIEF |
| `cta.secondary` | Explore Capabilities | ✅ BRIEF |
| `whatsapp.message` | Hi Wesley, I came across Eastern World Technology's website. I'd like to discuss a potential project with EWT. | ✅ BRIEF — **verbatim, do not edit** |
| `whatsapp.aria` | Discuss a project with our CEO on WhatsApp | 🟡 DRAFT |
| `skipLink` | Skip to main content | 🟡 DRAFT |
| `copyright` | © {year} Eastern World Technology. All rights reserved. | 🟡 DRAFT |

### Navigation `[BRIEF]` p.12

| Order | Label | Route |
|---|---|---|
| 1 | Home | `/` |
| 2 | About | `/about` |
| 3 | Capabilities | `/capabilities` |
| 4 | Projects | `/projects` |
| 5 | Leadership | `/leadership` |
| 6 | Contact | `/contact` |
| — | Discuss a Project *(button)* | WhatsApp |

### Footer

| Key | Copy | Tag |
|---|---|---|
| `footer.descriptor` | A Sarawak-focused technology project and solutions company. | 🟡 DRAFT (condensed from the brief's descriptor for the footer's narrower column) |
| `footer.navHeading` | Navigate | 🟡 DRAFT |
| `footer.companyHeading` | Company | 🟡 DRAFT |
| `footer.regLabel` | Registration No. | ✅ BRIEF (p.11 table label) |
| `footer.hoursLabel` | Business Hours | ✅ BRIEF (p.11 table label) |

---

## 2. Home `/`

### 01 — Hero ✅ BRIEF

| Element | Copy |
|---|---|
| Brand eyebrow | Eastern World Technology |
| H1 | Technology, Structured for Business. |
| Sub | A Sarawak-focused technology project and solutions company helping organisations turn requirements into structured, implementable technology projects. |
| Primary CTA | Discuss a Project |
| Secondary CTA | Explore Capabilities |

### 02 — What EWT Does

| Element | Copy | Tag |
|---|---|---|
| Eyebrow | WHAT EWT DOES | ✅ BRIEF (section name) |
| H2 | We work with organisations to turn technology requirements into structured projects. | 🟡 DRAFT |
| Steps | *(from the brief's sentence: understand requirements → define the appropriate solution → plan the engagement → coordinate implementation)* | ✅ BRIEF (source) |

| # | Title | Support line | Tag |
|---|---|---|---|
| 01 | Understand the requirement | We work with your team to understand the operational and technology requirement in its actual context. | 🟡 DRAFT |
| 02 | Define the appropriate solution | We define a solution that fits the organisation's needs, constraints and existing environment. | 🟡 DRAFT |
| 03 | Plan the engagement | We structure the project — scope, sequence, responsibilities and delivery approach. | 🟡 DRAFT |
| 04 | Coordinate implementation | We coordinate the expertise required to implement, test and put the solution into operation. | 🟡 DRAFT |

### 03 — Project Capabilities

| Element | Copy | Tag |
|---|---|---|
| Eyebrow | PROJECT CAPABILITIES | ✅ BRIEF |
| H2 | The categories of technology projects we structure and deliver. | 🟡 DRAFT |
| Button | Explore Capabilities | ✅ BRIEF |

Tile labels — **all ✅ BRIEF, verbatim, in this order:**

1. Digital Transformation Projects
2. Enterprise Technology Projects
3. Systems Integration
4. Custom Business Systems
5. Technology Consultancy & Advisory
6. Data & Dashboard Solutions
7. Process Automation
8. Corporate Digital Platforms
9. Technology Implementation
10. Managed Project Support

### 04 — Why EWT

| Element | Copy | Tag |
|---|---|---|
| Eyebrow | WHY EWT | ✅ BRIEF |
| H2 | Why organisations bring projects to EWT. | 🟡 DRAFT |

| # | Heading (✅ BRIEF, verbatim) | Support line (🟡 DRAFT) |
|---|---|---|
| 01 | Understanding of the Sarawak operating environment | We work within the realities of how organisations in Sarawak plan, procure and operate. |
| 02 | Structured project planning and delivery | Scope, sequence and responsibilities are defined before implementation begins. |
| 03 | Solutions tailored to actual organisational requirements | We design around the requirement in front of us, not around a fixed product. |
| 04 | Ability to coordinate the appropriate technology expertise | We bring together the specific expertise a project needs, and manage it as one engagement. |
| 05 | Implementation-minded approach, not consultancy-only | Our recommendations are made with implementation and operation in mind. |
| 06 | Long-term support mindset | We plan for the system's life after go-live, not just its delivery. |

### 05 — Sarawak Focus

| Element | Copy | Tag |
|---|---|---|
| Eyebrow | SARAWAK FOCUS | ✅ BRIEF |
| H2 | Built for the Sarawak operating environment. | 🟡 DRAFT |
| Para 1 | Eastern World Technology is focused on Sarawak. Our attention is on how organisations here actually operate — how requirements are defined, how decisions are made, and what it takes for a system to be adopted and supported once it is live. | 🟡 DRAFT |
| Para 2 | We are established to contribute to technology adoption and modernisation in Sarawak across digital transformation, enterprise systems, automation, data and technology implementation. | 🟡 DRAFT — closely follows `[BRIEF]` p.6 wording |
| Chips | Digital transformation · Enterprise systems · Automation · Data · Technology implementation | ✅ BRIEF (the five areas named on p.6) |

> ⚠️ **Compliance note:** these paragraphs deliberately use *focused on*, *established to contribute*
> — never *partnered with*, *appointed by*, *working with the State*. Do not strengthen this wording.
> `[BRIEF]` p.6, p.13.

### 06 — Leadership Preview

| Element | Copy | Tag |
|---|---|---|
| Eyebrow | LEADERSHIP | ✅ BRIEF |
| H2 | The people behind EWT. | 🟡 DRAFT |
| Person 1 | Wesley Chai — Founder & CEO — Public-facing business and project leadership. | ✅ BRIEF |
| Person 2 | Edwin Ting — Founder & CTO — Technology and technical-delivery leadership. | ✅ BRIEF |
| Link | View leadership | 🟡 DRAFT |

### 07 — Final CTA ✅ BRIEF — verbatim, all three strings

| Element | Copy |
|---|---|
| H2 | Have a technology project or requirement? |
| Sub | Speak directly with EWT to discuss the scope and next steps. |
| Button | Discuss a Project with Our CEO |

---

## 3. About `/about`

| Element | Copy | Tag |
|---|---|---|
| Eyebrow | ABOUT EWT | ✅ BRIEF |
| H1 | About Eastern World Technology | 🟡 DRAFT |
| Lead | Eastern World Technology is a Sarawak-focused technology company established to structure and deliver technology projects around real organisational requirements. | ✅ BRIEF (near-verbatim, p.10) |

### B — Who we are

| Element | Copy | Tag |
|---|---|---|
| H2 | A technology project company, not a development shop. | 🟡 DRAFT |
| Para 1 | EWT is a technology project, consultancy and solutions company. Organisations bring us a requirement or a challenge; we structure it into a project, coordinate the expertise it needs, and deliver an appropriate technology solution. | 🟡 DRAFT — the brief's four-verb spine, p.2 |
| Para 2 | We are project-led rather than product-led. There is no fixed platform we are trying to sell. Each engagement starts from what the organisation actually needs and what it can realistically adopt, operate and support. | 🟡 DRAFT |
| Para 3 | EWT is structured to work with government-related organisations, GLCs, established enterprises and larger organisations in Sarawak, and with selected private-sector organisations that have suitable technology projects. | 🟡 DRAFT — phrased as *who EWT is built to serve*, never as clients served. `[BRIEF]` p.2 |

### C — How we work

| Element | Copy | Tag |
|---|---|---|
| Eyebrow | HOW WE WORK | 🟡 DRAFT |
| H2 | Structure before build. | 🟡 DRAFT |
| Pillar 1 | **Disciplined execution** — scope, sequence and responsibilities are agreed before implementation starts. | 🟡 DRAFT — `[BRIEF]` p.10 tone pillar |
| Pillar 2 | **Practical technology adoption** — we recommend technology the organisation can realistically operate and maintain. | 🟡 DRAFT — `[BRIEF]` p.10 tone pillar |
| Pillar 3 | **Long-term value** — systems are planned for their operational life, not just for handover. | 🟡 DRAFT — `[BRIEF]` p.10 tone pillar |

Four expanded steps reuse the Home §02 titles with 2–3 sentence bodies. 🟡 DRAFT.

### D — Sarawak focus

| Element | Copy | Tag |
|---|---|---|
| H2 | Why Sarawak. | 🟡 DRAFT |
| Para 1 | Our market positioning for this phase is Sarawak only. That is a deliberate choice: understanding how organisations here plan, procure and operate is more useful to a client than claiming reach we do not have. | 🟡 DRAFT |
| Para 2 | EWT is established to contribute to technology adoption and modernisation in Sarawak — across digital transformation, enterprise systems, automation, data and technology implementation. | 🟡 DRAFT — `[BRIEF]` p.6 |

### E — Registered scope

| Element | Copy | Tag |
|---|---|---|
| Eyebrow | REGISTERED SCOPE | 🟡 DRAFT |
| H2 | Company information | 🟡 DRAFT |
| Rows | Company / Registration No. / Positioning / Registered activities (MSIC) | ✅ BRIEF (values) |
| MSIC 62010 | Computer programming activities | ✅ BRIEF |
| MSIC 62021 | Computer consultancy | ✅ BRIEF |
| MSIC 62099 | Other information technology service activities | ✅ BRIEF |

### F — CTA

| Element | Copy | Tag |
|---|---|---|
| H2 | Have a requirement you would like structured? | 🟡 DRAFT |
| Sub | Speak directly with EWT to discuss the scope and next steps. | ✅ BRIEF |
| Buttons | Discuss a Project · Explore Capabilities | ✅ BRIEF |

---

## 4. Capabilities `/capabilities`

| Element | Copy | Tag |
|---|---|---|
| Eyebrow | CAPABILITIES | ✅ BRIEF |
| H1 | Capabilities | ✅ BRIEF |
| Lead | The categories of technology projects EWT structures and delivers. Each area describes what the work involves, when an organisation typically needs it, the usual scope of a project, and what EWT is responsible for. | 🟡 DRAFT |

The eight category titles and their summary lines are **✅ BRIEF, verbatim**; the four fields per card
are **🟡 DRAFT**. Full text is in `07-page-capabilities.md` §3 — it is the authoritative source for
this content and is not duplicated here.

Field labels (✅ BRIEF, p.8): `What it is` · `When it is useful` · `Typical project scope` ·
`Expected EWT involvement`.

### CTA

| Element | Copy | Tag |
|---|---|---|
| H2 | Not sure which area your requirement falls under? | 🟡 DRAFT |
| Sub | Speak directly with EWT to discuss the scope and next steps. | ✅ BRIEF |
| Buttons | Discuss a Project · View Projects | 🟡 DRAFT (second) |

---

## 5. Projects `/projects`

| Element | Copy | Tag |
|---|---|---|
| Eyebrow | PROJECTS | ✅ BRIEF |
| H1 | Projects | ✅ BRIEF |
| Lead | Selected EWT engagements will be published here. Where client names or details cannot be disclosed, projects will be presented as anonymised case studies. | 🟡 DRAFT — `[BRIEF]` p.9 confidentiality clause |
| Panel heading | Project Portfolio — Coming Soon | ✅ BRIEF (p.9) |
| Panel body | EWT is an early-stage company and publishes only work that is genuinely its own and approved for release. Project entries and case studies will be added here as engagements are completed and disclosure is agreed. | 🟡 DRAFT |
| Panel CTAs | Discuss a Project · Explore Capabilities | ✅ BRIEF |
| Section H2 | What a published EWT case study will include. | 🟡 DRAFT |
| Confidentiality line | For enterprise or government-related work, case studies may be published in anonymised form where client names or sensitive details cannot be disclosed. | 🟡 DRAFT — `[BRIEF]` p.9 |
| CTA H2 | Have a technology project or requirement? | ✅ BRIEF |
| CTA sub | Speak directly with EWT to discuss the scope and next steps. | ✅ BRIEF |

Case-study field labels — **all ✅ BRIEF, verbatim (p.9):**
Project Name · Client / Sector · Project Context · Challenge / Requirement · EWT Scope ·
Proposed / Delivered Solution · Implementation · Technology / Partners (where disclosure is
approved) · Outcome / Measurable Impact · Project Status

---

## 6. Leadership `/leadership`

| Element | Copy | Tag |
|---|---|---|
| Eyebrow | LEADERSHIP | ✅ BRIEF |
| H1 | Leadership | ✅ BRIEF |
| Lead | Eastern World Technology is led by its two founders, who are directly involved in how projects are structured and delivered. | 🟡 DRAFT |

### Wesley Chai

| Element | Copy | Tag |
|---|---|---|
| Name | Wesley Chai | ✅ BRIEF |
| Role | Founder & CEO | ✅ BRIEF |
| Descriptor | Public-facing business and project leadership. | ✅ BRIEF |
| Bio | Wesley leads Eastern World Technology's business and project engagement — working directly with organisations to understand a requirement, define its scope and set the direction of the engagement. He is the first point of contact for organisations bringing a technology project or requirement to EWT. | 🟡 DRAFT — **concise pending approved wording** `[BRIEF]` p.10 |
| Photo alt | Wesley Chai, Founder & CEO of Eastern World Technology | 🟡 DRAFT |

### Edwin Ting

| Element | Copy | Tag |
|---|---|---|
| Name | Edwin Ting | ✅ BRIEF |
| Role | Founder & CTO | ✅ BRIEF |
| Descriptor | Technology and technical-delivery leadership. | ✅ BRIEF |
| Bio | Edwin leads Eastern World Technology's technology direction and delivery — defining the technical approach for each project and overseeing implementation, testing and handover. He is responsible for ensuring that what EWT proposes can be built, operated and supported in practice. | 🟡 DRAFT — **concise pending approved wording** |
| Photo alt | Edwin Ting, Founder & CTO of Eastern World Technology | 🟡 DRAFT |

### Optional section + CTA

| Element | Copy | Tag |
|---|---|---|
| H2 | Founder-level involvement in every engagement. | 🟡 DRAFT |
| Point 1 | A founder is directly involved in defining the scope of each engagement. | 🟡 DRAFT |
| Point 2 | Technical direction is owned internally, not delegated to a third party. | 🟡 DRAFT |
| Point 3 | The people who scope the project remain accountable through delivery and support. | 🟡 DRAFT |
| CTA H2 | Speak directly with our CEO. | 🟡 DRAFT |
| CTA button | Discuss a Project with Our CEO | ✅ BRIEF |

---

## 7. Contact `/contact`

| Element | Copy | Tag |
|---|---|---|
| Eyebrow | DISCUSS A PROJECT | ✅ BRIEF |
| H1 | Have a technology project or requirement? | ✅ BRIEF |
| Lead | Speak directly with EWT to discuss the scope and next steps. | ✅ BRIEF |
| Support | Messages go directly to Wesley Chai, Founder & CEO. | 🟡 DRAFT |
| Button | Discuss a Project with Our CEO | ✅ BRIEF |
| Device note | Opens WhatsApp. If WhatsApp is not available on this device, the same number can be reached from a mobile phone. | 🟡 DRAFT |
| H2 | Helpful things to mention | 🟡 DRAFT |
| Item 1 | Your organisation and the department involved | 🟡 DRAFT |
| Item 2 | The requirement, challenge or process you want to address | 🟡 DRAFT |
| Item 3 | Any existing systems involved | 🟡 DRAFT |
| Item 4 | Your intended timeline, if you have one | 🟡 DRAFT |
| H2 | Company information | 🟡 DRAFT |
| Rows | Company · Registration No. · CEO WhatsApp ✅ · Business Hours 🟣 · Email 🟣 · Office Phone 🟣 · Address 🟣 | ✅ BRIEF (p.11, base set); extended rows approved Q-16 |
| Location eyebrow | LOCATION | 🟡 DRAFT |
| Location caption | Ara Damansara, Petaling Jaya, Selangor, Malaysia | 🟣 PLACEHOLDER — Q-16 |

---

## 8. 404

| Element | Copy | Tag |
|---|---|---|
| H1 | Page not found | 🟡 DRAFT |
| Body | The page you requested could not be found. It may have been moved, or the link may be out of date. | 🟡 DRAFT |
| Links | Return home · Explore Capabilities · Discuss a Project | 🟡 DRAFT |

---

## 9. Metadata strings

All titles and descriptions live in `04-information-architecture-and-seo.md` §4. They are 🟡 DRAFT
and are governed by the same credibility rules as body copy.

---

## 10. Copy QA checklist

- [ ] Every ✅ BRIEF string matches the PDF character-for-character (apart from typographic dashes
      and apostrophes)
- [ ] Every 🟡 DRAFT string has been reviewed against `01-brand-and-positioning.md` §7
- [ ] No 🔴 TBD value has been invented, guessed, or replaced by the literal text "TBD" on the page
- [ ] Every 🟣 PLACEHOLDER value is tracked in `12-technical-requirements.md` §11 for pre-launch
      confirmation and is not mistaken for a final, approved value
- [ ] No sentence claims a delivered project, named client, partnership, appointment or award
- [ ] No superlatives, rankings, or unevidenced numbers
- [ ] No "web design", "app development" or agency framing
- [ ] British/Malaysian spelling throughout, including metadata and alt text
- [ ] Every capability field is one sentence, ≤28 words
- [ ] Sentence case for headings and buttons; UPPERCASE only for eyebrows
- [ ] Alt text is factual and claims nothing
