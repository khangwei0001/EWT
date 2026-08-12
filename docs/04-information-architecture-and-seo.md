# 04 — Information Architecture & SEO

**Source:** Brief §4 (p.5), §10 (p.12), §9 (p.11).

---

## 1. Sitemap `[BRIEF]` §4, p.5

Six pages. No more, no fewer, in V1.

| Page | Route | Purpose (verbatim from brief) |
|---|---|---|
| Home | `/` | Position EWT quickly, show project capabilities and drive project discussions. |
| About EWT | `/about` | Explain the company, Sarawak focus, philosophy and project-led approach. |
| Capabilities | `/capabilities` | Show the categories of technology projects EWT can structure and deliver. |
| Projects | `/projects` | Dedicated future portfolio/case-study area. **Do not invent completed projects.** |
| Leadership | `/leadership` | Founder profiles for Wesley Chai and Edwin Ting. |
| Contact / Discuss a Project | `/contact` | Simple conversion page centred on CEO WhatsApp. |

### Reserved future routes (build the route, ship empty)

| Route | State in V1 |
|---|---|
| `/projects/[slug]` | Component + route exist; project data array is empty, so no pages are generated |

### Routes that must **not** exist in V1

`/blog`, `/news`, `/careers`, `/services`, `/pricing`, `/portfolio`, `/clients`, `/testimonials`,
`/login`, `/admin`, `/dashboard`, `/quote`. `[BRIEF]` §4 V1 scope rule, p.5 and §10, p.12.

### Utility pages `[DERIVED]`

| Route | Notes |
|---|---|
| `/404` | Branded, minimal: heading, one line, links to Home + Capabilities + Discuss a Project. No illustration. |

Privacy policy / terms are **not** required in V1 — the site collects no data. Q-04 resolved to an
**inert analytics preview UI only** (`03-component-specifications.md` §21): the client wants to see
what a consent notice would look like, but no tracking script actually runs, so no privacy policy is
triggered yet. The moment a real analytics tool (Plausible/Fathom/GA4) is switched on, a privacy
notice becomes necessary — treat that as a separate decision, not a side-effect of enabling the
preview UI.

---

## 2. Navigation `[BRIEF]` §10, p.12

Suggested navigation, to be used as specified:

```
Home   About   Capabilities   Projects   Leadership   Contact   [Discuss a Project]
```

- Order is fixed as above (it mirrors the funnel: who → what → proof → who runs it → talk).
- "Discuss a Project" is a **button**, visually distinct from the six text links.
- "Home" appears as a text link on desktop even though the logo also links home — the brief lists it
  explicitly.
- Mobile: six links stacked in the drawer + a full-width "Discuss a Project" button pinned in the
  drawer footer, plus a compact WhatsApp control in the bar itself.

### Cross-page linking map

| From | Links to | Mechanism |
|---|---|---|
| Home §01 Hero | WhatsApp; `/capabilities` | Primary + secondary CTA |
| Home §03 Capability tiles | `/capabilities#<anchor>` | Deep link per tile |
| Home §03 footer of section | `/capabilities` | "Explore Capabilities" button |
| Home §06 Leadership preview | `/leadership` | "Meet the founders" link + card links |
| Home §07 Final CTA | WhatsApp | Primary button |
| Capabilities page end | WhatsApp; `/projects` | CtaBand |
| About page end | `/capabilities`; WhatsApp | CtaBand |
| Projects (coming soon) | `/capabilities`; WhatsApp | Panel CTAs |
| Leadership page end | WhatsApp | CtaBand |
| Contact | WhatsApp | Page-level primary action |
| Footer (all pages) | All six routes + WhatsApp | Footer nav |

**Every page must be within one click of the WhatsApp conversion.** The floating FAB guarantees this,
but each page also carries an in-flow CTA — the FAB is a safety net, not the plan.

---

## 3. URL conventions `[BRIEF]` "sensible URL structure", p.12

- Lowercase, hyphenated, no trailing slash inconsistency — pick **no trailing slash** and enforce
  with a redirect.
- No file extensions, no query strings, no IDs.
- Anchors on Capabilities use the slugified category name:
  `technology-consultancy-advisory`, `digital-transformation`, `enterprise-custom-systems`,
  `systems-integration`, `automation-process-improvement`, `data-management-dashboards`,
  `corporate-digital-platforms`, `technology-implementation-project-support`.
- Canonical URL on every page, absolute, `https://`, **`www`** (confirmed, Q-03). Placeholder domain
  for development: **`www.ewt.com.my`** — final domain to be confirmed (`13-OPEN-QUESTIONS.md` Q-03).
  All canonical/OG/sitemap URLs below use this placeholder and must be regenerated once the final
  domain is set.

---

## 4. Page metadata

`[BRIEF]` p.12: *"Basic on-page SEO: unique title and meta description per page, Open Graph metadata
and sensible URL structure."*

Title pattern: `<Page> | Eastern World Technology` — except Home, which leads with positioning.
Keep titles ≤60 characters and descriptions 140–158 characters where possible.

| Route | `<title>` | `<meta name="description">` |
|---|---|---|
| `/` | `Eastern World Technology — Technology, Structured for Business` | `A Sarawak-focused technology project and solutions company helping organisations turn requirements into structured, implementable technology projects.` |
| `/about` | `About EWT \| Eastern World Technology` | `Eastern World Technology is a Sarawak-focused technology company established to structure and deliver technology projects around real organisational requirements.` |
| `/capabilities` | `Capabilities \| Eastern World Technology` | `Project areas EWT structures and delivers: consultancy and advisory, digital transformation, enterprise and custom systems, integration, automation, dashboards and implementation support.` |
| `/projects` | `Projects \| Eastern World Technology` | `EWT's project portfolio and case-study area. Selected engagements will be published here, including anonymised case studies for confidential work.` |
| `/leadership` | `Leadership \| Eastern World Technology` | `Meet the founders of Eastern World Technology: Wesley Chai, Founder & CEO, and Edwin Ting, Founder & CTO.` |
| `/contact` | `Discuss a Project \| Eastern World Technology` | `Have a technology project or requirement? Speak directly with EWT to discuss the scope and next steps.` |
| `/404` | `Page not found \| Eastern World Technology` | `The page you requested could not be found.` |

**Metadata compliance check:** none of the descriptions above claims a delivered project, a client,
a partnership or a superlative. Keep it that way — meta descriptions are copy and are governed by
the credibility rules in `01-brand-and-positioning.md` §7.

Keyword posture: descriptive, not stuffed. Natural terms that a Sarawak procurement lead would
actually type — *technology company Sarawak*, *IT consultancy Kuching*, *systems integration
Sarawak*, *digital transformation Sarawak* — should appear in body copy naturally. Do not add a
keyword list, hidden text, or a footer keyword blob.

---

## 5. Open Graph & social preview

The brief highlights that the site will be **shared after meetings and introductions** (§2, p.3), so
the WhatsApp/LinkedIn preview card is a first-class deliverable, not an afterthought.

```html
<meta property="og:type"        content="website">
<meta property="og:site_name"   content="Eastern World Technology">
<meta property="og:locale"      content="en_MY">
<meta property="og:title"       content="<page title>">
<meta property="og:description" content="<page description>">
<meta property="og:url"         content="<canonical absolute URL>">
<meta property="og:image"       content="https://www.ewt.com.my/og/<page>.png">
<meta property="og:image:width"  content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt"   content="Eastern World Technology — Technology, Structured for Business.">
<meta name="twitter:card"       content="summary_large_image">
```

### OG image spec `[DERIVED]` — asset required, see `14-ASSET-REQUIREMENTS.md`

- 1200×630 PNG, `--gradient-hero` navy background, grid-line texture at 5% white.
- EWT logo (reversed) top-left, 96px tall.
- Headline in Archivo SemiExpanded 600, white, 64px, max two lines, left-aligned, 80px margins.
- 3px × 120px `--gradient-accent-rule` above the headline.
- No photography, no gold text, no strapline clutter.
- One image per page (7 total). A single shared image is acceptable for V1 if time is short — but
  Home and Contact should differ, since those are the two most-shared links.

**WhatsApp preview caveat:** WhatsApp caches aggressively and prefers images <300KB with a ≤1.91:1
ratio. Keep OG PNGs under 300KB.

---

## 6. Structured data `[DERIVED]` — recommended, low risk

Only claims that are verifiable from the brief. **No `aggregateRating`, no `review`, no `award`, no
`hasCredential`, no client references.**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eastern World Technology",
  "alternateName": "EWT",
  "url": "https://www.ewt.com.my/",
  "logo": "https://www.ewt.com.my/logo.svg",
  "slogan": "Technology, Structured for Business.",
  "description": "A Sarawak-focused technology project and solutions company helping organisations turn requirements into structured, implementable technology projects.",
  "identifier": "202501010006 (1611420-T)",
  "areaServed": { "@type": "AdministrativeArea", "name": "Sarawak, Malaysia" },
  "founder": [
    { "@type": "Person", "name": "Wesley Chai", "jobTitle": "Founder & CEO" },
    { "@type": "Person", "name": "Edwin Ting", "jobTitle": "Founder & CTO" }
  ]
}
```

`"address"` / `"telephone"` / `"email"` may now be added — the client approved publishing placeholder
contact details in `13-OPEN-QUESTIONS.md` Q-16. Use the same `COMPANY` config values as the Contact
page (`03-component-specifications.md` §4) so there is exactly one source of truth:

```json
"telephone": "+60 3-1234 5678",
"email": "info@ewt.com.my",
"address": {
  "@type": "PostalAddress",
  "addressLocality": "Petaling Jaya",
  "addressRegion": "Selangor",
  "addressCountry": "MY"
}
```

These remain `PLACEHOLDER` values (see `03-…` §4) — regenerate this block when real contact details
are confirmed. Emit on Home only, as `<script type="application/ld+json">`.

---

## 7. Crawl & indexing

`robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://www.ewt.com.my/sitemap.xml
```

`sitemap.xml` — the six routes, `changefreq: monthly`, Home `priority 1.0`, others `0.8`
(`/projects` `0.6` while empty). Generate at build time.

Other requirements:
- `<html lang="en-MY">` (or `en`; see Q-09).
- One `<h1>` per page.
- Canonical link on every page.
- No `noindex` on production. Ensure staging is `noindex` and password-protected or excluded — a
  staging URL indexed before launch is a credibility problem for a procurement audience.
- Favicon set + `site.webmanifest` (see `14-ASSET-REQUIREMENTS.md`).

---

## 8. Heading hierarchy per page

`[BRIEF]` p.12: *"Semantic HTML structure and clean heading hierarchy."*

| Page | H1 | H2s |
|---|---|---|
| `/` | "Technology, Structured for Business." (with "Eastern World Technology" as the eyebrow/brand line above) | What EWT Does · Project Capabilities · Why EWT · Sarawak Focus · Leadership · Final CTA heading |
| `/about` | "About Eastern World Technology" | Who we are · How we work · Sarawak focus · Registered scope · CTA |
| `/capabilities` | "Capabilities" | (one H2 per capability card ×8, or H2 per group + H3 per card — pick one and be consistent) |
| `/projects` | "Projects" | Project Portfolio — Coming Soon · What a published case study will include · CTA |
| `/leadership` | "Leadership" | Wesley Chai · Edwin Ting · CTA |
| `/contact` | "Discuss a Project" | How to reach us · Company information |

Never skip a level (no H2 → H4). Never use a heading tag purely for size — use a class.

---

## 9. Content model (for the future-ready parts)

Even though V1 is static, keep content in typed data files, not inline JSX, so it can be extended
without touching layout `[BRIEF]` p.12.

```
src/content/
  capabilities.ts     // 8 CapabilityCategory objects (Capabilities page)
  homeCapabilities.ts // 10 compact tile labels (Home §03)
  whyEwt.ts           // 6 ValueRow items
  leadership.ts       // 2 Person objects
  projects.ts         // Project[] — EMPTY ARRAY in V1
  process.ts          // 4 ProcessStep items
```

```ts
type CapabilityCategory = {
  slug: string;
  title: string;
  summary: string;            // the brief's one-line descriptor
  whatItIs: string;
  whenUseful: string;
  typicalScope: string;
  ewtInvolvement: string;
  icon: string;
};
```

**Rule:** if a page needs new content later, it should be a data-file edit only. Any change that
would require re-laying-out the page is a design defect in V1.

---

## 10. IA acceptance criteria

- [ ] Exactly six pages exist and are reachable from header and footer
- [ ] `/projects/[slug]` route compiles with an empty dataset and produces no pages
- [ ] Every page has a unique title, description, canonical and OG image
- [ ] Every page has exactly one `<h1>` and no skipped heading levels
- [ ] Capability anchors resolve from Home tiles with correct scroll offset
- [ ] `sitemap.xml` and `robots.txt` are generated and correct
- [ ] 404 page is branded and links back into the site
- [ ] No route, link or metadata references a page or claim outside the approved set
