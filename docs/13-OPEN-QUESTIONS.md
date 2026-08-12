# 13 — Open Questions & Clarifications

> **Status: answered.** All questions below have been answered by the client and incorporated into
> the relevant spec documents (see the `[RESOLVED]` tags now added throughout `00`–`12` and `14`).
> This file remains the historical record of the answers. Genuinely open items: **A-01 final logo
> files** (blocking), the final real domain, and confirmation of the placeholder contact details
> before go-live — tracked in `12-technical-requirements.md` §11.

**Action required.** Answer inline under each question. Anything left unanswered will be built using
the stated **Default** so the project is never blocked.

Priority key: 🔴 **Blocker** (cannot launch without it) · 🟠 **Important** (affects design or copy
before build) · 🟡 **Nice to have** (can be decided late or post-launch).

---

## A. Blockers — launch cannot happen without these

### 🔴 Q-01 — CEO WhatsApp number
The brief marks this **TBD before launch** (p.3, p.11, p.14). It is the site's only conversion.

- What is the number, in international format (e.g. `+60 12-345 6789`)?

Ans:
Wesley Chai (CEO) - +60 12-879 7003
Edwin Ting (CTO) - +60 12-879 7003

- Confirm it may be **published publicly** in the site's HTML.

Ans: Yes

- Should the number also be shown as visible text on the Contact page, or only used as the button target?

Ans: Both for now

> **Default if unanswered:** the WhatsApp CTA falls back to linking to `/contact`, and the Contact
> page displays no number. Site is functionally incomplete.


---

### 🔴 Q-02 — Business hours
Marked TBD in the brief (p.11, p.14). Appears in the footer and on Contact.

- Exact wording, e.g. "Monday – Friday, 8:30am – 5:30pm (MYT)"?

Ans: This one can be placeholder for now. Monday-Friday : 9 to 6

- Should public holidays be mentioned?

Ans: Mention placeholder information for now

> **Default:** the Business Hours row is **omitted entirely** — the live site will never display the
> literal word "TBD".

---

### 🔴 Q-03 — Domain and hosting
Needed for canonical URLs, OG image URLs, `sitemap.xml` and `robots.txt` (brief p.14).

- Final domain?
- `www` or non-`www` as canonical?
- Hosting preference (Vercel / Netlify / Cloudflare Pages / client's own hosting)?
- Who controls DNS?

> **Default:** build with a placeholder origin; canonical/OG/sitemap must be regenerated before
> launch.

**Answer:**
- Domain is to be decided, but for now just use ewt.com.my
- for now use www
- Cloudflare
- TBD, but me for now (developer)

---

### 🔴 Q-04 — Analytics
Not mentioned in the brief. Adding analytics introduces data collection and would require a privacy
notice — which is otherwise unnecessary in V1.

- Any analytics wanted? (Options: none · privacy-friendly server-side e.g. Plausible/Fathom ·
  Google Analytics 4)

> **Default: none.** No cookies, no consent banner, no privacy policy needed.

**Answer:** Include those, but as UI for now

---

## B. Brand & visual — needed before the visual build is finalised

### 🟠 Q-05 — Colour values
The brief specifies colour *families* ("deep navy / corporate blue", "subtle silver", "restrained
gold") but no hex values. We have sampled the supplied logo and derived a full, contrast-verified
palette (`02-design-system.md` §2).

- Does EWT have an existing brand guideline with exact hex/Pantone values? If so, please supply it
  and we will replace the derived palette.
- Please confirm or correct these primaries:
  - Deep navy `#0A1628` / brand navy `#16294A`
  - Corporate blue `#1E5AA8`
  - Gold accent `#C9973B`
  - Light grey background `#F6F8FB`

> **Default:** ship the derived palette as documented.
> **Note:** gold fails contrast on white (2.63:1), so gold will only be used as a decorative rule or
> on navy surfaces — never as text on a light background.

**Answer:**
- There is no existing brand guideline. This is a new website from ground up
- Use whatever you have documented first. Changed will apply after reviewing the website

---

### 🟠 Q-06 — Typeface
The brief says "clean typography" but names no typeface.

- Any existing brand typeface (including one used in the logo lockup)?
- Any licensing constraint (must be free/open, or is a commercial licence available)?
- Approve the recommendation: **Inter Tight** (headings) + **Inter** (body), self-hosted?

> **Default:** Inter Tight + Inter, self-hosted, `latin` subset.

**Answer:**
- Something more professional and corporate but at the same time, MUST BE NON GENERIC

---

### 🟠 Q-07 — Logo strapline usage
The supplied logo artwork includes two straplines:
`TECHNOLOGY • SOLUTIONS • TRANSFORMATION` and `EMPOWERING SARAWAK. BUILDING TOMORROW.`

- Are these part of the final approved lockup?
- May they be used as on-page copy (e.g. footer, hero), or are they logo artwork only?
- Note: the brief's stated working brand line is **"Technology, Structured for Business."** — which
  of these leads on the website?

> **Default:** treat the straplines as **logo artwork only**; the website uses "Technology,
> Structured for Business." as the headline brand line, per the brief.

**Answer:**
- They can be used in the way you mentioned

---

### 🟡 Q-08 — Icon style
The brief does not specify iconography.

- Approve line icons (Lucide, 1.5px stroke, blue) as specified in `02-design-system.md` §7?
- Or does EWT have a custom icon set?

> **Default:** Lucide line icons, `--ewt-blue-500`.

**Answer:**
- There is no custom icon.
- Just make sure any icons used is clean

---

### 🟠 Q-09 — Language and locale
- Confirm the site is **English only** in V1 (no Bahasa Malaysia or Chinese version).
- Confirm British/Malaysian spelling (`organisation`, not `organization`) — the brief itself uses it.
- `<html lang>` value: `en-MY` or `en`?

> **Default:** English only, British/Malaysian spelling, `lang="en-MY"`.

**Answer:**
- English only for now (but may add malay translation later)

---

## C. Content & structure decisions

### 🟠 Q-10 — Home `<h1>`
Currently specified as: brand eyebrow "Eastern World Technology" above an `<h1>` of
**"Technology, Structured for Business."**

- Approve, or would you prefer "Eastern World Technology" as the `<h1>` with the tagline beneath?

> **Default:** tagline as `<h1>`, company name as the eyebrow above it.

**Answer:**
- Approve the first one. Brand eyebrow above (Technology, structured for business)

---

### 🟠 Q-11 — All 🟡 DRAFT copy
`11-copy-deck.md` marks every string that was written (not taken from the brief) as 🟡 DRAFT. This
includes all section headings, the four "What EWT Does" step descriptions, the six "Why EWT" support
lines, the Sarawak Focus paragraphs, the About page paragraphs, all 32 capability card fields
(8 cards × 4 fields), the founder bios, and all meta descriptions.

- Please review `11-copy-deck.md` and `07-page-capabilities.md` §3 and mark each item
  **approve / edit / remove**.
- Every draft has been written to contain **no claim of delivered projects, clients, partnerships,
  appointments, awards or experience**, per the brief's credibility rules.

> **Default:** ship the drafts as written and flag them to you for post-launch review.

**Answer:** The business hours and phone number has been answered in this md file

---

### 🟡 Q-12 — Optional sections — include or omit?
Each is compliant and adds substance without claims. Please tick.

| Section | Page | Recommendation |
|---|---|---|
| "Registered scope" MSIC block | About §E | Include — verifiable, procurement-friendly |
| "How an engagement is structured" recap | Capabilities §C | Include |
| "What a published case study includes" | Projects §C | Include — makes the empty state substantive |
| "Founder-level involvement" block | Leadership §C | Include |
| "Helpful things to mention" | Contact §B | Include |
| Anchor index under the Capabilities intro | Capabilities §A | Include (desktop only) |
| Breadcrumbs on inner pages | All inner | Omit (6-page site, low value) |

> **Default:** include all rows marked "Include"; omit breadcrumbs.

**Answer:** Include all rows. Just include any feature as of now. Remove later if I deem unnecessary

---

### 🟡 Q-13 — "Project Portfolio — Coming Soon" punctuation
The brief writes it with a hyphen: `Project Portfolio - Coming Soon`. We propose an em dash for
typographic quality: **Project Portfolio — Coming Soon**.

> **Default:** em dash.

**Answer:** Sure

---

### 🟡 Q-14 — Case-study standard on the Projects page
Should the ten-field case-study template be shown publicly as "what a published EWT case study will
include"? It fills the empty page credibly and demonstrates rigour — but it also publicises your
internal template.

> **Default:** show it.

**Answer:** show it

---

### 🟡 Q-15 — Founder photography timing
Founder photographs are marked TBD (brief p.14). Until they arrive we will use a navy monogram
placeholder (`WC` / `ET`). We will **not** use stock, AI-generated or silhouette portraits under any
circumstances.

- Are photographs expected before launch, or should we plan to launch with monograms and swap later?

> **Default:** launch with monograms if photographs are not supplied; swap post-launch.

**Answer:** launch with monograms if photographs are not supplied; swap post-launch.

---

## D. Conversion & contact

### 🟠 Q-16 — Additional contact information
The brief restricts this: *"Do not add unnecessary contact information unless later approved."*
(p.11). Currently the site shows **no** email, phone, address or social links.

Please approve or decline each:

| Item | Include? | Value |
|---|---|---|
| General email address | ☐ | |
| Office phone | ☐ | |
| Registered/office address | ☐ | |
| Google Maps embed | ☐ | |
| LinkedIn company page | ☐ | |
| Any other social profile | ☐ | |

> **Default:** none of the above; WhatsApp only.

**Answer:** Placeholder for all other information for now. In terms of the google maps, add a small map view at Ara Damansara, Petaling Jaya, Selangor (Google maps). Can zoom in and out

---

### 🟠 Q-17 — Floating WhatsApp button appearance
The brief requires a floating WhatsApp CTA but does not specify its look. WhatsApp's brand green
(`#25D366`) conflicts with the restrained corporate palette.

Options:
- **A (recommended):** navy pill, white WhatsApp glyph, label "Discuss a Project" on desktop;
  navy circle on mobile.
- **B:** navy container with the glyph rendered in WhatsApp green (maximum recognisability).
- **C:** standard WhatsApp-green button.

> **Default: A.**

**Answer:** A

---

### 🟡 Q-18 — Header CTA destination
Should the header's "Discuss a Project" button open WhatsApp directly, or navigate to `/contact`?

> **Default:** opens WhatsApp directly. The `Contact` nav link covers the page.

**Answer:** open directly

---

### 🟡 Q-19 — Contact page tone
- **A (recommended):** white/light conversion block, blue button.
- **B:** full navy conversion block, white button.

> **Default: A.**

**Answer:** A

---

### 🟡 Q-20 — Desktop WhatsApp fallback note
On a desktop without WhatsApp installed, `wa.me` links lead to a download page. Should we show a
small line beneath the button — *"Opens WhatsApp. If WhatsApp is not available on this device, the
same number can be reached from a mobile phone."*?

> **Default:** show it. It prevents a dead-end for exactly the audience the site targets
> (government/corporate desktops).

**Answer:** show it

---

## E. Technical

### 🟠 Q-21 — Framework
Recommendation: **Next.js (App Router) with static export**, TypeScript, Tailwind.
Alternatives: Astro (lightest), or Vite + React.

- Any client-side constraint — existing hosting, an internal team who will maintain it, a preferred
  stack?

> **Default:** Next.js static export.

**Answer:** Go with the default for now

---

### 🟡 Q-22 — Repository & maintenance
- Who owns the repository (EWT or the developer)?
- Will EWT maintain the site, or will content updates be requested from the developer?
- If EWT will self-maintain, the "how to add a project" note in `12-technical-requirements.md` §12
  becomes the key deliverable.

**Answer:** Developer (me) owns the repository for now. I will be working on the frontend for now but likely in the future it might be handed off to someone else to manage the EWT website

---

### 🟡 Q-23 — V2 expectations
Not required now, but it affects how much structure we leave in place:
- Is a CMS anticipated later (so projects/case studies can be added without a developer)?
- Is a Bahasa Malaysia version anticipated?
- Any plan for a careers or news section?

> **Default:** no forward-provisioning beyond the future-ready Projects layout the brief already
> requires.

**Answer:** This one flag for future reference

---

## F. Compliance confirmations (please confirm explicitly)

### 🔴 Q-24 — Claims audit
Please confirm, in writing, that **none** of the following may appear on the V1 site — so the
developer has a clear instruction on record:

| Item | Confirmed prohibited? |
|---|---|
| Any completed project or case study | ☐ |
| Any named client or client logo | ☐ |
| Any government/GLC partnership, appointment or panel membership | ☐ |
| Any award, certification, accreditation or vendor partner status | ☐ |
| Any statistic (projects delivered, years, team size, uptime) | ☐ |
| Any testimonial or endorsement | ☐ |
| Founder background beyond the brief's role descriptors | ☐ |

If **any** of these is actually available and verified, please supply the exact approved wording and
evidence, and we will include it — the brief permits verified information.

**Answer:**. Yes, they are all not available for now. For the founder background, include placeholder boxes, areas and placeholder information so that I can review and see what the final, production-ready page would look like when the resources are provided. For the others, do not include anything yet. But make sure when the resources are ready, they can be added easily and gracefully.

---

### 🟡 Q-25 — Sarawak imagery
The brief permits "high-quality Sarawak/corporate imagery… used sparingly", with tourism-style
treatment prohibited.

- Does EWT have licensed photography we may use?
- If not, may we license stock architectural/corporate imagery of Kuching/Sarawak — or should V1
  ship with **no photography at all** except the founder portraits (which is fully compliant and
  arguably cleaner)?

> **Default:** ship V1 with no photography other than founder portraits; use the navy gradient +
> geometry system instead. Zero risk, zero licensing cost.

**Answer:** No licensed photography. Use licensed stock first

---

## Summary — resolution status

| Item | Status |
|---|---|
| Q-01 CEO WhatsApp number | ✅ Resolved — confirmed, public |
| Q-02 Business hours | 🟣 Resolved with placeholder — confirm exact wording before launch |
| Q-03 Domain & hosting | 🟣 Resolved with placeholder domain (`ewt.com.my`) + confirmed host (Cloudflare Pages) — final domain still open |
| Q-04 Analytics | 🟣 Resolved as an inert preview UI only — no tracking active |
| Q-05 Colour values | ✅ Resolved — no guideline exists, ship the derived palette |
| Q-06 Typeface | ✅ Resolved — Inter rejected as generic; **Archivo + Public Sans** adopted |
| Q-16 Contact info | 🟣 Resolved with placeholder email/phone/address/map |
| Q-24 Claims audit | ✅ Resolved — all prohibited items confirmed absent; founder background handled via a dev-only placeholder preview, not published content |
| Q-25 Sarawak imagery | ✅ Resolved — licensed stock approved as interim sourcing |

**Genuinely still open:** the final logo files (A-01 in `14-ASSET-REQUIREMENTS.md`) — this is now the
only real launch blocker. The final domain and confirmation of the placeholder contact details are
open but not build-blocking.
