# FIXES
- This file tracks the incremental fixes to be made to the current iteration.
- Use this file for context purposes
- After a fix, mark it as complete (✅)

## 1. Pictures ✅
- CEO and CTO pictures added in C:\EWT-EASTERN-WORLD-TECHNOLOGIES\assets
- Your task is to add it to the website

**Done.** Both photos cropped to the site's 4:5 portrait format (head-and-shoulders,
face centred) and added:
- `public/images/leadership/wesley-chai.jpg`
- `public/images/leadership/edwin-ting.jpg`
- Wired into `src/content/leadership.ts` (`photo.src` / `photo.alt` per founder)
- Replace the navy `WC`/`ET` monogram placeholders on both the Home leadership
  preview and the Leadership page automatically — no other file needed a change
- Verified in the browser at `/leadership` and `/` — both crops read correctly,
  the site's standard 15% desaturation and rounded corners apply automatically

**Flag:** the supplied photos are casual outdoor shots (mall entrance, street/building
backdrop), not the plain studio background the design spec calls for
(`docs/09-page-leadership.md` §5). They work fine cropped tight, but if a "true"
professional headshot session happens later, swap the two files above — no code
changes needed. See `README.md` → Outstanding assets → A-03 for the full note.

## 1b. CEO/CTO photos swapped for stock ✅
- Replaced the real founder photos with stock images (`assets/CEO_stock.avif`,
  `assets/CTO.stock.avif`) per explicit request.

**Done.** Cropped both to the site's 4:5 portrait (880×1100, head-and-shoulders,
face centred) and overwrote:
- `public/images/leadership/wesley-chai.jpg`
- `public/images/leadership/edwin-ting.jpg`

No changes needed in `src/content/leadership.ts` (same filenames/alt text).
Also removed the "no stock photography" prohibition comment in
`src/components/cards/PersonCard.tsx` — it no longer reflects project policy.

## 2. Leadership page misalignment ✅
- Edwin ting description is not properly aligned

**Done.** Real bug, not a nitpick: on the reversed founder row (Edwin), the text block
was landing in a second implicit grid row below the photo instead of centered beside
it — his description block sat ~550px lower than it should have.

Root cause: `.person-profile__media` always precedes `.person-profile__body` in the
DOM (`src/components/cards/PersonCard.tsx`); only their `grid-column` swaps between
the normal and reversed row via CSS. With column-only placement, the browser's grid
auto-placement cursor advances past column 1 once the photo claims column 3 on the
reversed row, so the text block got pushed to a new row instead of sharing the
photo's row — which silently broke `align-items: center` for every reversed row.

Fix: pinned `grid-row: 1` explicitly on both `.person-profile__media` and
`.person-profile__body` in `src/styles/globals.css` (inside the `≥1024px` rule
block only — the mobile/tablet stacked layout was never affected). Verified: both
founder rows now centre identically (confirmed via computed `getBoundingClientRect`,
not just by eye), and re-checked at 390px / 768px / 1024px+ plus the full
`_qa.mjs` sweep — no regressions. 

## 3. Home Page ✅

### Hero
- Use C:\EWT-EASTERN-WORLD-TECHNOLOGIES\assets\Hero-1.png, C:\EWT-EASTERN-WORLD-TECHNOLOGIES\assets\Hero-2.png and C:\EWT-EASTERN-WORLD-TECHNOLOGIES\assets\Hero-3.png.
- Display to the right of "Technology, Structured for Business".
- When page is initially loaded, the image should fade in after 2 seconds
- The image should persist for 4 seconds then fade out
- After the image has faded out completely, wait 1.5 seconds before fading in another image
- Repeat this forever

**Done.** `src/components/blocks/HeroStage.tsx` + `.hero-stage` in `globals.css`.

Timing is exactly the spec: 2s before the first render appears, 4s held, 1.5s of
empty stage between renders, with an 800ms crossfade. That makes one slot 7.1s
and a full turn of three 21.3s; each render runs the same keyframe animation
offset by one whole slot (`animation-delay: 2s / 9.1s / 16.2s`). No JavaScript,
no timer, no hydration boundary — so it cannot drift and costs nothing at load.
`prefers-reduced-motion` leaves the first render up and never cycles.

The hero is now two columns from 1024px: the copy, and the stage standing on the
three sheared planes that were already there — the planes became the backdrop
rather than a competing device. Below 1024px the stage sits under the CTAs,
left-aligned with the copy, capped at 420px (mobile) / 520px (tablet).

The three PNGs already had their backgrounds cut out, so they composite straight
onto the navy with a cast shadow under them; no masking was needed.

### Built for Sarawak
- Use C:\EWT-EASTERN-WORLD-TECHNOLOGIES\assets\sarawak state shaped flag.png
- Display to the right of "Built for the Sarawak operating environment."

**Done.** The section is now copy + focus-area chips on the left, map on the
right (`.sarawak-focus`). It stacks below 900px with the map centred at 300px.

## 4. About, Capabilities, Project, Leadership heros ✅
- use C:\EWT-EASTERN-WORLD-TECHNOLOGIES\assets\Hero-about.avif, C:\EWT-EASTERN-WORLD-TECHNOLOGIES\assets\Hero-capabilities.avif, C:\EWT-EASTERN-WORLD-TECHNOLOGIES\assets\hero-projects.png and C:\EWT-EASTERN-WORLD-TECHNOLOGIES\assets\hero-leadership.jpg

**Done.** New shared block: `src/components/blocks/PageHeader.tsx`, replacing the
plain white opener all four pages shared.

The h1 sits on the left; the image fills the right-hand 46% of the band and is
cut at `--shear` (-20°) — the same angle the EWT mark is built from and the same
angle the Home hero planes use. So every image on the site now enters through
one piece of geometry instead of four different frames.

Deliberately **not** a navy image band: Home is the only page allowed two navy
bands (`docs/05`), and a navy header plus the closing CTA band would have given
all four interior pages two.

Two things moved to make room:
- The Capabilities anchor index now sits above the capability cards it indexes,
  instead of in the page header where the image owns the right-hand half. It was
  landing on top of the photograph and was unreadable.
- The Leadership photo is cropped at `50% 22%` — its subject is in the upper
  third, and centred the frame filled with unlit slope and nothing else.

## 5. About Page ✅

### How we work
- Refer to the section "How we work Structure before build" under the about page
- The points with the descriptions are displayed in a very matter of fact way. Use a border/box UI to display them, with slight hover transition used similarly in other sections

**Done.** `.pillar` is now a bordered card on the site's standard card surface,
with the same hover the capability cards use (2px lift, `--shadow-md`, border
darkens to `--border-strong`), dropped under `prefers-reduced-motion`.

Applied to **both** places that render `.pillar`: About → "Structure before
build" and Leadership → "Founder-level involvement". They are the same component
with the same markup, so styling only one would have left two treatments for
identical content.

One structural change was needed: `.pillar` used to be the `Reveal` element
itself, and `Reveal` animates `transform`, so a hover lift on the same element
would have fought the scroll reveal. The pillar is now a `div` inside the
`Reveal` instead.

### Why sarawak
- Use C:\EWT-EASTERN-WORLD-TECHNOLOGIES\assets\why sarawak 1.avif, C:\EWT-EASTERN-WORLD-TECHNOLOGIES\assets\why sarawak 2.avif,C:\EWT-EASTERN-WORLD-TECHNOLOGIES\assets\why sarawak 3.avif
- Display to the right of "Why Sarawak."
- Arrange inside a nice invisible square frame (This describes the view only)
- Why sarawak 1 is taller, display as is, the other 2 (horizontal), display to the right of why sarawak 1, and one above/below the other.

**Done.** `.sarawak-frame` — a 2×2 grid where the tall image spans both rows and
the two wide ones stack beside it, flush on every outer edge so the three read
as one block.

Two notes on the brief:
- The third file is `why sarawak 3.jpg`, not `.avif`. Same picture, used as-is.
- A literal 1:1 frame cannot hold a 3:4 portrait beside two 3:2 landscapes
  without cropping one of them hard. Holding image 1 at its own proportions
  makes the block 3:2, which is what shipped — "square" is read as "one tidy
  rectangle with flush edges", which is what it is.

The section header moved inside the grid's left column here (the only section on
the site where it does). Left above the grid at full width it opened a hole
between the heading and the copy, because the frame is much taller than the two
paragraphs beside it.

**Mobile:** the frame keeps all three images and switches to 4:3 below 560px.
That crops ~14% off the sides of the tall image and ~10% off the wide ones,
which is invisible, and keeps the whole block to about 260px on a 390px screen.
Stacking the three full-width instead would have cost ~950px of scroll for
decoration, and dropping one would have lost content — so neither was done.

---

## Flags on tasks 3–5

These are all *supplied-asset* concerns, not implementation problems. Everything
above is built and verified. Each one is a documented content rule in
`docs/01-brand-and-positioning.md` §7 (mirrored in `README.md` → "Content rules
you must not break"), so they need a decision before launch.

1. **Leadership header photo contradicts a hard rule.** The rule reads: "No
   photograph of a person who is not the named founder appears on Leadership —
   no stock, no AI-generated portraits, **no silhouettes**." `hero-leadership.jpg`
   is a group of silhouetted figures. Nobody is identifiable and the image is
   marked decorative, but the rule is written without an exception. Either the
   rule gets amended or the image gets swapped — swapping is one line in
   `src/content/images.ts`.

2. **Home hero renders read as a portfolio.** The three mockups carry invented
   brands ("NexaERP", "Discover Sarawak", "NovaCore") and invented figures
   ("RM 35A,450", "99.99% Uptime"). Against "no completed project, named client,
   client logo, testimonial or statistic anywhere", generic mockups in a hero
   read as *our work* — particularly while `/projects` says "Coming Soon". They
   are hidden from assistive technology and nothing in the copy claims them, but
   a visitor sees pictures, not alt text.

3. **`hero-projects.png` has the same problem, harder.** It is a grid of nine
   finished website designs, sitting at the top of the page that states EWT has
   no published projects yet.

4. **Two of the three Why Sarawak photos, and the About header, feature the
   State Legislative Assembly building.** Against "no government/GLC
   partnership, appointment, panel membership or accreditation" and "Sarawak is
   a stated market focus, never illustrated as a tourism destination", the
   state legislature at golden hour is the riskiest available image on both
   counts. Alt text describes them as places on the river and never names the
   building, which is as far as the code can go.

5. **The Sarawak state flag** on Home is a map fill, and its alt text says so.
   Worth a second opinion on whether a state flag on a corporate site reads as
   affiliation rather than geography.

## How this was verified

- `npm run typecheck` and `npm run build` (static export) both clean.
- `tools/web-screenshot-tool/_qa.mjs` — banned phrases, heading structure, link
  hygiene, alt attributes, touch targets, and horizontal overflow at 320 / 360 /
  390 / 768 / 1024 / 1280 / 1440 / 1920 — run against the **production build**
  in `out/`, not just the dev server. No problems found.
- Screenshots at 360, 390, 768, 1024 and 1440 on every page changed, plus the
  hero captured at three points in its cycle to confirm all three renders show.

`tools/web-screenshot-tool/screenshot.mjs` gained `--width`, `--height`,
`--viewport` and `--delay` for this; it was fixed at 1920 full-page before,
which cannot check a phone layout or catch a timed animation.

`scripts/prepare-images.mjs` is new: it turns everything in `assets/` into the
web-ready WebP files under `public/images/`. Re-run it whenever a source file is
replaced — the crops and sizes are constants in the script, so nothing here is
hand-made the way the founder portraits were.

