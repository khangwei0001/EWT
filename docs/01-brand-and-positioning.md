# 01 — Brand & Positioning

**Source:** Brief §1 (p.2), §2 (p.3), §11 (p.13)

This document governs *what the site says and how it says it*. Read it before writing any copy or
choosing any image.

---

## 1. Company facts

| Field | Value | Source |
|---|---|---|
| Company name (full) | Eastern World Technology | `[BRIEF]` p.1 |
| Short mark / abbreviation | EWT | `[BRIEF]` p.1 |
| Registration number | 202501010006 (1611420-T) | `[BRIEF]` p.1, p.11 |
| Positioning | Sarawak-focused Technology Project & Solutions Company | `[BRIEF]` p.1 |
| Working tagline / brand line | **Technology, Structured for Business.** | `[BRIEF]` p.1, p.2 |
| Market | Sarawak only (current phase) | `[BRIEF]` p.2 |
| Founder & CEO | Wesley Chai | `[BRIEF]` p.6, p.10 |
| Founder & CTO | Edwin Ting | `[BRIEF]` p.6, p.10 |

### Logo lockup strapline (from supplied logo artwork)

The supplied brand reference contains the following strapline elements beneath the wordmark:

- `TECHNOLOGY • SOLUTIONS • TRANSFORMATION`
- `EMPOWERING SARAWAK. BUILDING TOMORROW.`

`[NEEDS APPROVAL]` — Confirm whether these lines are part of the final approved logo lockup and
whether they may be used as on-page copy (e.g. in the footer or hero). Until confirmed, treat them
as **logo artwork only** — do not re-typeset them as HTML text. See `13-OPEN-QUESTIONS.md` Q-07.

### MSIC scope `[BRIEF]` p.2

| Code | Scope |
|---|---|
| 62010 | Computer programming activities |
| 62021 | Computer consultancy |
| 62099 | Other information technology service activities |

These are registered activity codes. They may be shown on the About page as a factual credibility
element (they are verifiable and non-boastful). They must **not** be dressed up as "services".

---

## 2. Core positioning `[BRIEF]` p.2

> **Eastern World Technology is not to be presented as a generic web-development agency.**

The website positions EWT as a Sarawak-focused technology project, consultancy and solutions company
**capable of receiving a client requirement, structuring the project, coordinating the necessary
expertise and delivering an appropriate technology solution.**

That sentence is the spine of the entire site. Every page should reinforce one or more of its four
verbs: **receive → structure → coordinate → deliver.**

### Positioning rules

- **Sarawak-only market positioning** for the current phase. Do not imply national or regional
  (ASEAN/global) operations.
- **Primary audience:** Sarawak government-related organisations, GLCs, established enterprises and
  larger organisations.
- **Secondary audience:** selected private-sector organisations with suitable technology projects.
- **Tone:** enterprise/government-friendly — structured, credible, conservative, procurement-ready.
- **Project-led, not product-led.** The client brings a requirement or challenge; EWT structures and
  delivers the technology engagement. There is no product to sign up for, no pricing page, no plans.
- **The identity must remain independent.** Do not copy another company's wording, project
  portfolio, visual language or service structure.

### What "procurement-ready" means for the build

The site will be opened by people who evaluate vendors. Practically:

- Company registration number is visible (footer + Contact page).
- Claims are specific and checkable, never superlative.
- Capabilities are described as **project areas with scope and involvement**, not as a price list.
- Nothing on the page requires the visitor to trust an unverifiable assertion.
- The site loads fast and works on a locked-down government/corporate browser and on mobile.

---

## 3. Audience profile

| | Primary | Secondary |
|---|---|---|
| Who | Sarawak government-related organisations, GLCs, established enterprises, larger organisations | Selected private-sector organisations with suitable technology projects |
| Reading the site | To assess whether EWT is a credible party to bring a requirement to | To assess capability fit for a specific project |
| What they need to see | Structure, seriousness, clear scope, real people, a way to talk | Relevant capability areas, realistic engagement model |
| What loses them | Startup hype, neon/gaming visuals, unverifiable claims, agency price-list framing | Vagueness, no clear next step |

**Write for decision-makers: focus on requirements, outcomes, implementation and reliability.**
`[BRIEF]` p.13

---

## 4. Website objectives `[BRIEF]` §2, p.3

1. Establish EWT as a credible Sarawak technology project company.
2. Make it immediately clear that organisations can approach EWT with a project, requirement or
   technology challenge.
3. Present EWT's capabilities at an enterprise level **without over-claiming experience**.
4. Create a professional destination that can be shared after meetings, introductions and project
   discussions.
5. Generate direct project conversations through the CEO's WhatsApp.
6. Provide a structure that can later showcase genuine EWT projects and case studies.

Objective 4 is a design constraint people forget: **this link gets pasted into a chat right after a
meeting.** The first screen must therefore explain who EWT is without scrolling, and the Open Graph
preview card must look correct in WhatsApp and LinkedIn (see `04-information-architecture-and-seo.md`).

Objective 3 is the sharpest constraint on copy: capabilities must read at enterprise level while
containing **zero** implied track record.

---

## 5. Primary conversion `[BRIEF]` §2, p.3

- The main action across the website is **"Discuss a Project"**.
- It directs visitors to the **CEO's WhatsApp**.
- A **floating WhatsApp button remains available across the site**.

### Pre-filled WhatsApp message `[BRIEF]` — use verbatim

```
Hi Wesley, I came across Eastern World Technology's website. I'd like to discuss a potential project with EWT.
```

### CEO WhatsApp number

**`TBD before launch`** `[BRIEF]` p.3, p.11, p.14.
Implementation must read this from a single config constant so it can be swapped in one place.
See `03-component-specifications.md` §7 and `13-OPEN-QUESTIONS.md` Q-01.

---

## 6. Tone of voice

### The calibration example `[BRIEF]` p.13

| | Example |
|---|---|
| **Preferred** | "We structure technology around the needs of the organisation." |
| **Avoid** | "We build awesome apps and websites for everyone." |

### Voice attributes

- **Confident but factual.** State what EWT does. Do not qualify it into mush, and do not inflate it.
- **Structured.** Short declarative sentences. Parallel construction in lists. Nouns like
  *requirement, scope, engagement, implementation, delivery, support*.
- **Conservative.** No exclamation marks. No rhetorical questions except the one sanctioned CTA
  heading ("Have a technology project or requirement?").
- **Plain English, British/Malaysian spelling.** `organisation`, `modernising`, `prioritise`,
  `programme`. The brief itself uses this convention — match it.
- **First person plural** ("we") for EWT's actions; **third person** ("EWT") where a formal
  register is needed, e.g. the About page opening.

### Banned constructions

Do not write, in any copy, alt text or metadata:

- "industry-leading", "No.1", "best-in-class", "world-class", "cutting-edge", "revolutionary"
- "we've helped hundreds of…", "trusted by…", "our clients include…" — no client claims at all
- "award-winning", "certified partner", "government-appointed", "official partner"
- "awesome", "amazing", "supercharge", "unleash", "game-changing", "10x"
- Any number that implies track record (years in business, projects delivered, clients served,
  team size) unless the client supplies and approves it.
- "digital agency", "web design", "app development company"

---

## 7. Content & credibility rules `[BRIEF]` §11, p.13 — hard rules

These are compliance rules, not style preferences. Treat a violation as a build defect.

1. Keep language confident but factual.
2. **Do not claim EWT has delivered projects that have not been delivered by EWT.**
3. **Do not claim government/GLC partnerships, approvals, panels or appointments unless verified.**
4. Avoid generic claims such as "industry-leading" or "No.1" without evidence.
5. Write for decision-makers: focus on requirements, outcomes, implementation and reliability.
6. Avoid making the website feel like a low-cost website/app development shop.
7. Keep Sarawak identity visible but sophisticated — **EWT is a technology company, not a tourism
   brand.**

Additional rules from other sections of the brief that belong to this set:

8. Do not invent completed projects on the Projects page. `[BRIEF]` p.5, p.9
9. Do not overstate credentials, project history, awards, partnerships or client relationships on
   Leadership. Use only verified/approved information. `[BRIEF]` p.10
10. On the Sarawak Focus section: do not claim government appointments, partnerships or completed
    work unless approved. `[BRIEF]` p.6
11. Do not add contact information beyond what is approved. `[BRIEF]` p.11

### The safe-phrasing pattern

Because EWT cannot claim delivery history, capability copy must be written in **capability and
method** tense, not **track-record** tense.

| Do not write | Write instead |
|---|---|
| "We have modernised legacy systems for GLCs." | "We structure modernisation projects for organisations running manual or fragmented processes." |
| "Our dashboards are used across Sarawak." | "We consolidate operational information into decision-support interfaces." |
| "Proven integration expertise." | "We connect existing platforms, data sources, APIs and operational systems." |

Pattern: **what the project area is → when an organisation needs it → what EWT does in it.**
This is exactly the four-field capability card structure in `07-page-capabilities.md`.

---

## 8. Sarawak identity — how to express it without tourism cues

`[BRIEF]`: "High-quality Sarawak/corporate imagery may be used sparingly; avoid tourism-style
treatment." (p.4) and "Keep Sarawak identity visible but sophisticated." (p.13)

**Permitted expressions of Sarawak identity:**

- Explicit, plain statements: "Sarawak-focused", "the Sarawak operating environment", "technology
  adoption and modernisation in Sarawak".
- Restrained architectural/urban/infrastructure photography of Sarawak, desaturated and used as a
  supporting band — not as a hero centrepiece. Treated with a navy overlay so it reads as texture.
- A dedicated "Sarawak Focus" section on Home (§05) stating EWT's contribution to technology
  adoption in Sarawak.

**Prohibited:**

- Rainforest, wildlife, hornbills, longhouses, cultural motifs, batik/pua kumbu patterning, festival
  imagery, sunsets over the Sarawak River, drone tourism footage.
- Any treatment resembling a tourism board, state promotion, or heritage campaign.
- Ethnic/cultural pattern used as a decorative border or section divider.

**Test:** if the image or motif would fit on a "Visit Sarawak" poster, it fails.

---

## 9. Competitive differentiation to communicate `[BRIEF]` §5.04, p.6

These six points are the approved "Why EWT" set. They are capability/approach statements — none of
them asserts a track record, which is why they are safe to use as written.

1. Understanding of the Sarawak operating environment
2. Structured project planning and delivery
3. Solutions tailored to actual organisational requirements
4. Ability to coordinate the appropriate technology expertise
5. Implementation-minded approach, not consultancy-only
6. Long-term support mindset

Point 5 and point 6 are the sharpest differentiators for a procurement audience — give them equal
visual weight, do not bury them last in a low-contrast list.

---

## 10. Brand consistency checklist (run before handing the site back)

- [ ] No sentence on the site claims a completed project, client, or partnership.
- [ ] No superlative or unevidenced ranking claim appears anywhere, including alt text and meta tags.
- [ ] The phrase "web development", "web design" or "app development" does not describe EWT.
- [ ] Sarawak is named as a market focus, never illustrated as a tourism destination.
- [ ] Every page offers a route to "Discuss a Project".
- [ ] The registration number appears in the footer.
- [ ] Nothing on the site is copied from another company's website.
- [ ] Copy uses British/Malaysian spelling consistently.
