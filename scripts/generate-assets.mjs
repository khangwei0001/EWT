/**
 * Generates the raster assets the site references but cannot express in CSS:
 * the Open Graph share card and the PNG app icons.
 *
 *   1. npm run dev            (or serve the built export on :3000)
 *   2. npm i -D puppeteer     — build-time only, uninstall afterwards
 *   3. node scripts/generate-assets.mjs [http://localhost:3000]
 *
 * It renders inside the running site, so the cards use the real design tokens
 * and the real self-hosted Archivo/Public Sans — nothing is re-specified here
 * and nothing is fetched from a third party.
 *
 * INTERIM: these are built from the raster logo mark, which is all we have
 * (asset A-01 in docs/14 is still open). Re-run this script once the final
 * logo SVG lands — that is the whole of asset A-02 and A-05.
 */
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const origin = process.argv[2] || 'http://localhost:3000';
const outDir = path.join(process.cwd(), 'public');
fs.mkdirSync(path.join(outDir, 'og'), { recursive: true });

/** 1200×630 share card. Navy gradient, grid texture, reversed mark, accent rule. */
const ogCard = (headline, kicker) => `
  <div style="position:fixed;inset:0;background:var(--gradient-hero);overflow:hidden;
              display:flex;flex-direction:column;justify-content:space-between;padding:80px">
    <!-- The hero's 1px grid texture is deliberately omitted: as a PNG it costs
         ~120KB in fine detail, and WhatsApp declines to preview cards over
         300KB. The gradient and the sheared plane carry the identity. -->
    <div style="position:absolute;inset:0;background-image:repeating-linear-gradient(
                90deg, rgba(255,255,255,.05) 0 1px, transparent 1px 240px)"></div>
    <div style="position:absolute;top:-8%;right:80px;width:210px;height:116%;
                transform:skewX(-20deg);background:rgba(255,255,255,.04)"></div>
    <img src="/logo/logo-mark.png" alt="" style="position:relative;height:64px;width:250px;
         align-self:flex-start;filter:brightness(0) invert(1)">
    <div style="position:relative">
      <div style="width:120px;height:3px;transform:skewX(-20deg);
                  background:var(--gradient-accent-rule);margin-bottom:28px"></div>
      ${
        kicker
          ? `<p style="margin:0 0 14px;font-family:var(--font-heading);font-size:20px;font-weight:600;
                letter-spacing:.14em;text-transform:uppercase;color:#4A8AD4">${kicker}</p>`
          : ''
      }
      <h1 style="margin:0;font-family:var(--font-heading);font-size:64px;line-height:1.1;
                 font-weight:700;letter-spacing:-.025em;font-stretch:110%;color:#fff;
                 max-width:16ch">${headline}</h1>
    </div>
  </div>`;

/** Solid navy tile with the sheared E — legible where the full mark is not. */
const iconTile = (size) => `
  <div style="position:fixed;inset:0;display:grid;place-items:center;background:#0A1628">
    <svg viewBox="0 0 64 64" width="${size}" height="${size}">
      <g fill="#FFFFFF" transform="matrix(1 0 -0.36397 1 24 0)">
        <rect x="0" y="15" width="30" height="7"/>
        <rect x="0" y="28.5" width="21" height="7"/>
        <rect x="0" y="42" width="30" height="7"/>
        <rect x="0" y="15" width="7" height="34"/>
      </g>
      <rect x="46" y="13" width="9" height="6" fill="#C9973B"
            transform="matrix(1 0 -0.36397 1 5 0)"/>
    </svg>
  </div>`;

// The mark already says who this is, so the two brand cards carry no kicker.
const OG = [
  ['og-default.png', 'Technology, Structured for Business.', ''],
  ['og-home.png', 'Technology, Structured for Business.', ''],
  ['og-capabilities.png', 'The project areas we structure and deliver.', 'Capabilities'],
  ['og-contact.png', 'Speak directly with EWT about your requirement.', 'Discuss a Project'],
];

const ICONS = [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
];

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.goto(origin, { waitUntil: 'networkidle2' });
await page.evaluate(() => document.fonts.ready);

for (const [file, headline, kicker] of OG) {
  await page.setViewport({ width: 1200, height: 630 });
  await page.evaluate((html) => {
    document.body.innerHTML = html;
  }, ogCard(headline, kicker));
  await new Promise((r) => setTimeout(r, 400));
  const target = path.join(outDir, 'og', file);
  await page.screenshot({ path: target });
  console.log(file, (fs.statSync(target).size / 1024).toFixed(0) + 'KB');
}

for (const [file, size] of ICONS) {
  await page.setViewport({ width: size, height: size });
  await page.evaluate((html) => {
    document.body.innerHTML = html;
  }, iconTile(Math.round(size * 0.68)));
  await new Promise((r) => setTimeout(r, 200));
  await page.screenshot({ path: path.join(outDir, file) });
  console.log(file);
}

await browser.close();
