# 10 — Contact / Discuss a Project Page

**Route:** `/contact`
**Source:** Brief §4 (p.5), §2 (p.3), §9 (p.11), §10 (p.12).
**Purpose (verbatim):** *"Simple conversion page centred on CEO WhatsApp."* `[BRIEF]` p.5

### The governing constraint

There is **no contact form** in V1. `[BRIEF]` p.12: *"No backend, CMS, authentication, payment flow
or admin system in V1."* A form would need a backend or a third-party endpoint — neither is in
scope. The page's single job is to move the visitor into a WhatsApp conversation with the CEO.

`[BRIEF]` p.11 also restricts what may be published: *"Do not add unnecessary contact information
unless later approved."* `[RESOLVED]` — Q-16: the client has approved including email, office phone,
address and a Google Maps embed, using **placeholder values** until real ones are confirmed. See §4.

---

## 1. Page skeleton — deliberately short

```
SiteHeader (solid white)
├─ A  Conversion block          tone: light
├─ B  What to include           tone: alt
├─ C  Company information       tone: light
├─ D  Location (map)            tone: light
SiteFooter
WhatsAppFab
```

No closing `CtaBand` — the whole page is the CTA. Adding a second CTA band would be redundant.

Total page length target: **one to one-and-a-half viewports on desktop.** This is a conversion page,
not a content page.

---

## 2. A — Conversion block

| Element | Copy |
|---|---|
| Eyebrow | `DISCUSS A PROJECT` |
| H1 | **Have a technology project or requirement?** `[BRIEF]`-verbatim (p.7) |
| Lead | **Speak directly with EWT to discuss the scope and next steps.** `[BRIEF]`-verbatim (p.7) |
| Supporting line | *Messages go directly to Wesley Chai, Founder & CEO.* `[NEEDS APPROVAL]` |
| Primary CTA | **Discuss a Project with Our CEO** `[BRIEF]`-verbatim label (p.7) → WhatsApp |

### Layout

| Property | Value |
|---|---|
| Container | `--container-text` (680px), centred |
| Padding | 120px top / 96px bottom desktop; 72 / 56 mobile |
| Alignment | Centred |
| Button | `Button` size `lg`, full-width <480px |
| Decorative | 3px × 96px `--gradient-accent-rule` above the eyebrow |

### Tone `[RESOLVED]` — Q-19

**`light`.** White background, navy heading, blue primary button. Keeps the page calm and lets the
navy footer close the page — the better fit for a procurement reader, and confirmed by the client
over the full-navy alternative.

### WhatsApp behaviour

- Links via `whatsAppHref()` (`03-component-specifications.md` §4).
- `target="_blank" rel="noopener noreferrer"`.
- Pre-filled message, verbatim `[BRIEF]` p.3:
  > Hi Wesley, I came across Eastern World Technology's website. I'd like to discuss a potential project with EWT.
- **Number confirmed** — Q-01: `+60 12-879 7003` (rendered from `COMPANY.ceoWhatsAppNumber`). The
  fallback-to-`/contact` behaviour in `whatsAppHref()` stays in the code as a safety net but should
  never trigger now that a real number is set.
- **Desktop consideration:** `wa.me` opens WhatsApp Web or the desktop app. A visitor on a locked-down
  government desktop with neither installed will land on WhatsApp's download page. `[RESOLVED]` —
  Q-20: show one small line beneath the button —
  *"Opens WhatsApp. If WhatsApp is not available on this device, the same number can be reached from
  a mobile phone."*

---

## 3. B — What to include in your message `[RESOLVED — include]` Q-12

Small, practical, and directly serves brief objective 2 (p.3) — making it obvious that organisations
can approach EWT with a requirement. It also improves the quality of inbound conversations.

| Element | Copy `[NEEDS APPROVAL]` |
|---|---|
| Eyebrow | `BEFORE YOU MESSAGE` |
| H2 | Helpful things to mention |
| Items | 1. Your organisation and the department involved · 2. The requirement, challenge or process you want to address · 3. Any existing systems involved · 4. Your intended timeline, if you have one |

### Layout

- 4 numbered items, 2 columns ≥768px / 1 column mobile.
- `--type-eyebrow` index in `--ewt-silver-400`, `--type-body-sm` text.
- Tone `alt`, `--container-narrow`.
- No icons — numerals only. Keep it light.

Frame these as *helpful*, never as *required*. There is no gate on contacting EWT.

---

## 4. C — Company information

Uses `InfoTable` (`03-component-specifications.md` §16), driven by `COMPANY` config.
`[BRIEF]` §9 p.11 lists the minimum approved set for V1; the client has since approved extending it
with placeholder contact details (Q-16). Fields tagged `PLACEHOLDER` are working values pending
confirmation — see `03-component-specifications.md` §4 for the single source of truth.

| Term | Value | Status |
|---|---|---|
| Company | Eastern World Technology | ✅ confirmed |
| Registration No. | 202501010006 (1611420-T) | ✅ confirmed |
| CEO WhatsApp | +60 12-879 7003 (shown as text **and** as the button target — Q-01) | ✅ confirmed |
| Business Hours | Monday – Friday, 9:00am – 6:00pm (MYT). Closed on Malaysian public holidays. | 🟣 PLACEHOLDER — Q-02 |
| Email | info@ewt.com.my | 🟣 PLACEHOLDER — Q-16 |
| Office Phone | +60 3-1234 5678 | 🟣 PLACEHOLDER — Q-16 |
| Address | Ara Damansara, Petaling Jaya, Selangor, Malaysia | 🟣 PLACEHOLDER — Q-16, exact street TBD |

### Rendering rules

- Rows with an empty config value are **omitted entirely** — the live site never displays the literal
  string "TBD". `PLACEHOLDER` values, by contrast, **do** render — they are working values the client
  has explicitly approved to see in place, not gaps.
- The registration number and phone numbers use tabular numerals.
- The CEO WhatsApp row renders as a `wa.me` link with the formatted number as the visible label
  (`COMPANY.ceoWhatsAppDisplay`), matching the button elsewhere on the page.
- LinkedIn / other social links stay **omitted** — none were provided (Q-16 covered them as
  "placeholder for all other information," but no specific URL exists yet to place; omit rather than
  invent one).

> ⚠️ **Flag for the client:** the placeholder address sits in Petaling Jaya, Selangor — outside
> Sarawak. The brief's brand positioning is explicitly Sarawak-only for this phase
> (`01-brand-and-positioning.md` §2). Worth a conscious decision before this placeholder becomes the
> real published address; see the same flag in `03-component-specifications.md` §4.

### Still not on this page (unless later approved) `[BRIEF]` p.11

❌ Social media links (LinkedIn etc. — none supplied yet) ❌ Contact form ❌ Live chat widget
❌ Newsletter signup ❌ "Request a quote" / "Book a demo" / "Get a free consultation" framing

The last one matters: quote/demo language would reframe EWT as a vendor selling a product, which
contradicts the project-led positioning in `[BRIEF]` §1 p.2.

### Layout

- `--container-narrow`, tone `light`.
- Padding 80px / 56px bottom (mobile: 56px / 40px).

---

## 4a. D — Location (map) `[RESOLVED — include]` Q-16

A small, zoomable Google Maps embed showing the placeholder office location, using `MapEmbed`
(`03-component-specifications.md` §20).

| Element | Spec |
|---|---|
| Eyebrow | `LOCATION` |
| Caption | Ara Damansara, Petaling Jaya, Selangor, Malaysia 🟣 PLACEHOLDER |
| Map | Centred on the `COMPANY.googleMapsQuery` placeholder, standard pan/zoom enabled |
| Layout | `--container-narrow`, tone `light`, placed **last** on the page — after Company Information, before the footer |
| Padding | 56px top, 96px bottom (mobile: 40px / 64px) — extra bottom clearance so the floating WhatsApp FAB never overlaps the map |

Kept deliberately low-key and placed last: the page's job is the WhatsApp conversion, not the map —
this section supports that job without competing with it for attention.

---

## 5. Accessibility & technical notes

- The primary CTA is an `<a>`, not a `<button>` — it navigates.
- Include `aria-label="Discuss a project with our CEO on WhatsApp"` if the visible label alone lacks
  context out of flow.
- The floating WhatsApp FAB **remains visible** on this page (it is the same action; suppressing it
  creates an inconsistency across pages). Ensure it does not overlap section C/D content on mobile.
- Company information is a `<dl>`, not a `<table>`.
- `ContactPoint` structured data may now be added alongside the `Organization` schema
  (`04-information-architecture-and-seo.md` §6) using the same placeholder values — keep both in
  sync with `COMPANY` config.

---

## 6. Acceptance criteria — Contact

- [ ] The page's single primary action is the CEO WhatsApp link
- [ ] Heading, lead and button labels match the brief's verbatim strings
- [ ] Pre-filled WhatsApp message is exactly as specified in the brief
- [ ] No contact form, no backend call, no third-party form endpoint
- [ ] Email, phone, address and map render from `COMPANY` config, all currently `PLACEHOLDER` values
- [ ] No social/LinkedIn link renders (none supplied — omitted, not invented)
- [ ] The literal string "TBD" appears nowhere on the rendered page
- [ ] Empty config values (e.g. `linkedInUrl`) cause rows to be omitted, not rendered blank
- [ ] Registration number is displayed and correct
- [ ] WhatsApp link opens in a new tab with `rel="noopener noreferrer"`
- [ ] Map embed is `loading="lazy"` and does not shift layout on load
- [ ] Every `PLACEHOLDER` value on this page is listed in `14-ASSET-REQUIREMENTS.md` for pre-launch
      confirmation
