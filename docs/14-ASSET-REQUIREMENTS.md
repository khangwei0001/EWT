# 14 — Asset Requirements & Missing Resources

**Action required.** This is the list of files and information needed from the client, and what
exists today.

Priority: 🔴 **Blocker** · 🟠 **Important** · 🟡 **Nice to have**

---

## 1. What we currently have

| Asset | Location | Notes |
|---|---|---|
| Website brief | `Eastern_World_Technology_Website_Brief (1).pdf` | 14 pages — complete, and the source of truth for this documentation set |
| EWT logo mark (PNG) | `assets/company-logo.png` | Raster, ~1000px wide, transparent background. The **mark only** — navy-to-blue gradient `EWT` with a gold accent on the `T`. Usable for development, **not sufficient for production** (see A-01) |
| Full lockup (image in PDF, p.1) | inside the brief PDF | Shows the mark + `EASTERN WORLD TECHNOLOGY` + `TECHNOLOGY • SOLUTIONS • TRANSFORMATION` + `EMPOWERING SARAWAK. BUILDING TOMORROW.` — but only as a low-resolution embedded image. Not usable as a production asset |
| CEO WhatsApp number | `13-OPEN-QUESTIONS.md` Q-01 | ✅ **Confirmed:** +60 12-879 7003 (published publicly, approved) |
| Business hours | `13-OPEN-QUESTIONS.md` Q-02 | 🟣 Placeholder confirmed: Monday – Friday, 9:00am – 6:00pm (MYT) |
| Domain & hosting | `13-OPEN-QUESTIONS.md` Q-03 | 🟣 Placeholder confirmed: `www.ewt.com.my` on **Cloudflare Pages**; final domain and DNS ownership still open |
| Contact details (email, phone, address, map) | `13-OPEN-QUESTIONS.md` Q-16 | 🟣 Placeholder values confirmed — see `03-component-specifications.md` §4 |

**Remaining gaps** are the assets below — mainly the final logo files and founder photography/bios,
which is why they're still tracked as blockers.

---

## 2. Missing assets

### 🔴 A-01 — Final approved logo files

The brief lists *"Final approved logo file/variants"* as TBD before launch (p.14). We currently have
one raster PNG of the mark.

**Required:**

| File | Format | Purpose |
|---|---|---|
| `logo-mark.svg` | SVG, outlined paths | The `EWT` mark alone — used in the mobile header |
| `logo-lockup-horizontal.svg` | SVG | Mark + "EASTERN WORLD TECHNOLOGY" — desktop header |
| `logo-lockup-reversed.svg` | SVG, white/light | For the navy footer and dark bands |
| `logo-mono-dark.svg` | SVG, single colour navy | Fallback, print, watermark uses |
| `logo-mono-light.svg` | SVG, single colour white | Fallback on imagery |
| Source file | `.ai` / `.eps` / `.fig` | For generating future variants |

**Specification notes:**
- **SVG is required.** The header logo must be crisp at every density and must not add weight. A
  PNG mark scaled to 32px height will look soft on a 2x/3x display — unacceptable for a site whose
  stated goal is "premium".
- Provide with **transparent background** and no embedded raster.
- Confirm **minimum clear space** and **minimum size** rules if a brand guideline exists.
- Confirm whether the straplines are part of the approved lockup (see `13-OPEN-QUESTIONS.md` Q-07).

**Interim workaround:** the supplied PNG can be used during development at 2x (mark at ~64px tall,
displayed at 32px). This is acceptable for review builds only.

---

### 🔴 A-02 — Favicon & app icon set

Not mentioned in the brief, but required for a professional launch. Generate from the final logo
mark.

| File | Size | Notes |
|---|---|---|
| `favicon.ico` | 16 / 32 / 48 multi-res | Legacy support |
| `favicon.svg` | vector | Modern browsers |
| `apple-touch-icon.png` | 180×180 | iOS home screen; needs a solid navy background (transparency renders black) |
| `icon-192.png`, `icon-512.png` | PNG | `site.webmanifest` |
| `site.webmanifest` | JSON | `name: "Eastern World Technology"`, `short_name: "EWT"`, `theme_color: "#0A1628"`, `background_color: "#FFFFFF"` |

**Design note:** at 16px, the full `EWT` mark will be illegible. Use a simplified icon — the `E`
glyph alone, or the `E` with the gold accent — on a solid navy tile. Needs client sign-off.

---

### 🔴 A-03 — Founder photographs

Listed as TBD before launch in the brief (p.14); the brief also requires "professional photography"
on the Home leadership preview (p.6).

**Required:** professional portraits of **Wesley Chai** and **Edwin Ting**.

| Property | Requirement |
|---|---|
| Framing | Head-and-shoulders to mid-chest, eye level |
| Ratio | Shoot 4:5 portrait; also deliver a 1:1 crop |
| Resolution | ≥2000px short edge, minimally compressed source (we handle web optimisation) |
| Background | Plain neutral — light grey/white studio or a clean out-of-focus office wall. **Not** outdoors, not a busy office, not a virtual background |
| Lighting | Soft, even, no harsh shadow, no coloured gel |
| Attire | Business attire, consistent between both founders |
| Consistency | **Both portraits from the same session** — same lens, lighting and background. Two mismatched photos will look worse than none |

**Interim:** navy monogram placeholders (`WC` / `ET`) as specified in
`03-component-specifications.md` §11 and `09-page-leadership.md` §5. `[RESOLVED]` — Q-15: confirmed
to launch this way if photographs aren't ready, and swap post-launch.

**Never acceptable as a substitute:** stock photography of any person, AI-generated portraits, grey
silhouette avatars, coloured initial-circle avatars, illustrated avatars, or photographs sourced
from social media.

---

### 🔴 A-04 — Final founder biography wording

Listed as TBD in the brief (p.14). The brief permits concise bios until final wording is approved
(p.10), and prohibits overstating credentials, project history, awards, partnerships or client
relationships.

**Needed:** approved 2–4 sentence bio for each founder. Draft versions are in `11-copy-deck.md` §6
and use only the brief's own role descriptors.

If any background (previous roles, qualifications, sector experience) is to be included, please
supply the **exact approved wording** — the developer must not write it, and unverified background
cannot be inferred.

`[RESOLVED]` — Q-24: per the client's request, extended **Background / Experience / Education**
preview blocks have been added to the Leadership page as a **development-only, clearly flagged
placeholder** (dashed border, "PLACEHOLDER — REPLACE BEFORE LAUNCH" tag), gated behind a
`PREVIEW_EXTENDED_BIOS` flag that is off by default. This lets the client review a fuller page layout
now without any fabricated content risking production. See `09-page-leadership.md` §6a and
`03-component-specifications.md` §22. **This flag must be confirmed off before launch** — tracked in
`12-technical-requirements.md` §11.

---

### 🟠 A-05 — Open Graph share images

Not mentioned in the brief, but the brief states the site will be *"shared after meetings,
introductions and project discussions"* (p.3) — which makes the link-preview card a primary asset.

| File | Size | Content |
|---|---|---|
| `og-default.png` | 1200×630 | Navy gradient, reversed EWT logo, "Technology, Structured for Business." |
| `og-home.png` | 1200×630 | Same as default |
| `og-capabilities.png` | 1200×630 | "Capabilities" + a one-line descriptor |
| `og-contact.png` | 1200×630 | "Discuss a Project" |
| (optional) per-page variants | 1200×630 | About, Projects, Leadership |

**These can be produced by the developer** from the design system once the final logo SVG exists —
no client input needed beyond logo approval. Each file must be **under 300KB** (WhatsApp preview
constraint) and contain no photography.

---

### ✅ A-06 — Company information values `[RESOLVED]`

| Item | Status | Needed for |
|---|---|---|
| CEO WhatsApp number | ✅ **Confirmed** — +60 12-879 7003, public | Every CTA on the site |
| Business hours | 🟣 **Placeholder confirmed** — Mon–Fri, 9:00am–6:00pm (MYT) | Contact page (footer row omitted per brief's minimal-footer rule) |
| Email | 🟣 **Placeholder confirmed** — info@ewt.com.my | Contact page |
| Office phone | 🟣 **Placeholder confirmed** — +60 3-1234 5678 | Contact page |
| Address | 🟣 **Placeholder confirmed** — Ara Damansara, Petaling Jaya, Selangor | Contact page, Google Maps embed |
| Company name | ✅ Have | — |
| Registration number | ✅ Have — `202501010006 (1611420-T)` | Footer, About, Contact |

See `13-OPEN-QUESTIONS.md` Q-01, Q-02, Q-16. All 🟣 placeholder rows are real values that render on
the site now (by client request, for review) and are tracked in `12-technical-requirements.md` §11
for confirmation before the site goes fully live.

> ⚠️ Repeated from `03-component-specifications.md` §4: the placeholder address is in Selangor, not
> Sarawak, which sits oddly against the brief's Sarawak-only positioning. Flagging again here since
> this is the asset-tracking document — worth a final decision before the real address replaces it.

---

### 🟡 A-07 — Sarawak / corporate photography `[RESOLVED — use licensed stock]`

The brief permits *"high-quality Sarawak/corporate imagery… used sparingly"* and prohibits
tourism-style treatment (p.4). Q-25: EWT has no owned photography; the client approved sourcing
**licensed stock** as an interim measure, to be replaced with owned photography later.

**Action for the developer:** source from a reputable licensed library (Getty, Adobe Stock, or
Unsplash+ for an extended licence), retain the licence/receipt, and apply the same
desaturation/overlay treatment as commissioned photography would get
(`02-design-system.md` §9) — the goal is that it does not look like stock.

| Slot | Suggested subject | Ratio |
|---|---|---|
| Home hero background (optional, 12–18% opacity) | Abstract architectural/structural detail | 21:9 |
| Home §05 Sarawak Focus | Modern Kuching corporate/civic architecture, or a neutral modern office interior | 4:3 or 3:4 |
| About §D | Similar, different subject | 16:10 |

**Prohibited subjects (hard rule) — applies equally to stock:** rainforest, wildlife, hornbills,
longhouses, cultural motifs, batik/pua kumbu patterning, festivals, river sunsets, drone tourism
footage, "diverse team high-fiving" stock, handshake stock, server-room/hacker stock,
glowing-network-globe stock.

**Still never acceptable, even as stock:** any photograph used to represent Wesley Chai or Edwin
Ting on the Leadership page — see A-03. Stock/AI portraits are prohibited there specifically.

---

### 🟠 A-08 — Domain, hosting & DNS access `[PARTIALLY RESOLVED]`

| Item | Status |
|---|---|
| Final domain | 🟣 Placeholder confirmed: **`ewt.com.my`** — real domain TBD (Q-03) |
| Canonical host | ✅ Confirmed: **`www`** |
| Registrar access / DNS delegation | 🟣 Developer holds this for now (Q-03) — revisit once a final owner is confirmed |
| Hosting account | ✅ Confirmed: **Cloudflare Pages** |
| SSL | Automatic on Cloudflare Pages |
| Email on domain | Not yet confirmed — check before any DNS change if/when a real domain is set, so MX records aren't broken |

Canonical URLs, OG images, `sitemap.xml` and `robots.txt` are being built against the
`www.ewt.com.my` placeholder now (`04-information-architecture-and-seo.md`) and must be regenerated
once the final domain is confirmed.

---

### ✅ A-09 — Brand guideline document `[RESOLVED — none exists]`

Confirmed: there is no existing brand guideline — this is a ground-up new brand. Q-05 (colour) ships
as documented, to be reviewed once the client sees the built site. Q-06 (typeface) was revised after
client feedback that Inter/Inter Tight read as too generic — the resolved pairing is
**Archivo (display) + Public Sans (body)**, documented in `02-design-system.md` §3.1. No further
input needed here unless the client wants another pass after seeing it live.

---

### 🟡 A-10 — First approved project / case study

Listed as TBD in the brief (p.14). Not required for launch — the Projects page ships in its
"Coming Soon" state by design.

When available, provide against the brief's ten-field template (p.9):
Project Name · Client / Sector · Project Context · Challenge / Requirement · EWT Scope ·
Proposed / Delivered Solution · Implementation · Technology / Partners (where disclosure is
approved) · Outcome / Measurable Impact · Project Status

Plus: whether the client may be named or the entry must be anonymised, and any images (with the
client's permission to publish).

---

## 3. Summary table

| ID | Asset | Priority | Owner | Blocks launch? |
|---|---|---|---|---|
| A-01 | Final logo SVG + variants | 🔴 | Client | **Yes — still open** |
| A-02 | Favicon / app icon set | 🔴 | Developer (needs A-01) | **Yes — blocked on A-01** |
| A-03 | Founder photographs | 🔴 | Client | No — resolved to launch with monograms, swap later |
| A-04 | Final founder bio wording | 🔴 | Client | No — resolved to launch with concise drafts |
| A-05 | Open Graph images | 🟠 | Developer (needs A-01) | Yes (quality) — blocked on A-01 |
| A-06 | WhatsApp number + business hours + contact details | ✅ | Client | **No — resolved with confirmed/placeholder values** |
| A-07 | Sarawak / corporate photography | 🟡 | Developer (licensed stock approved) | No |
| A-08 | Domain, hosting, DNS | 🟠 | Client / Developer | No — placeholder domain + Cloudflare Pages confirmed; final domain still open |
| A-09 | Brand guideline document | ✅ | — | No — resolved, none exists |
| A-10 | First approved project | 🟡 | Client | No |

### What's genuinely still blocking, after this round of answers

Only **A-01 (final logo files)** and its dependents (A-02 favicon set, A-05 OG images) remain hard
blockers. Everything else now has either a confirmed value or an explicitly approved placeholder.

---

## 4. What the developer can produce without any further input

To be clear about what is *not* blocked — the following can be built and completed today, and now
includes a **working WhatsApp conversion**, since the number is confirmed:

- The full design token system and component library
- All six pages, fully laid out, responsive, and **functionally complete** — the primary conversion
  (WhatsApp) now works end to end
- All navigation, the footer, and the floating WhatsApp button (real number, no fallback needed)
- All capability content, About content, Projects "Coming Soon" state, Leadership layout (with
  monogram placeholders and the dev-only extended-bio preview)
- Contact page fully built: company info, placeholder email/phone/address, Google Maps embed
- The dormant `ProjectCard` / `CaseStudyLayout` system and `/projects/[slug]` route
- SEO structure, `robots.txt`, `sitemap.xml`, structured data (now including placeholder address/
  phone/email in `ContactPoint`), 404 page
- Deployment to Cloudflare Pages against the placeholder domain
- Accessibility and performance passes

The site can reach roughly **95% completion** on the current asset set — up from before, since the
WhatsApp number, business hours, domain/hosting and contact details are all now resolved (confirmed
or explicitly approved placeholders). The remaining ~5% is **A-01, the final logo files**, and its
two dependents (A-02 favicon set, A-05 OG images) — the one genuine hard blocker left.

---

## 5. File placement convention

Once assets arrive, place them as follows:

```
public/
  logo/     logo-mark.svg  logo-lockup-horizontal.svg  logo-lockup-reversed.svg
            logo-mono-dark.svg  logo-mono-light.svg
  images/
    leadership/   wesley-chai.jpg  edwin-ting.jpg          (+ AVIF/WebP derivatives)
    sarawak/      (optional)
    projects/     (future)
  og/       og-default.png  og-home.png  og-capabilities.png  og-contact.png
  favicon.ico  favicon.svg  apple-touch-icon.png  icon-192.png  icon-512.png
  site.webmanifest  robots.txt
```

All raster images: deliver the **source** file. The build produces AVIF/WebP derivatives at the
required sizes. No image in `public/` may exceed 300KB in its shipped form.
