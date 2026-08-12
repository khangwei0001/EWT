/**
 * Turns the raw client-supplied files in `assets/` into the web-ready images
 * under `public/images/`. Run it again whenever a source file is replaced —
 * every crop, resize and format choice below is a constant, so the output is
 * reproducible instead of hand-made (README → Outstanding assets).
 *
 *   node scripts/prepare-images.mjs
 *
 * `sharp` is not a direct dependency; it arrives with Next.js. If it ever stops
 * resolving, `npm i -D sharp`, run this, then uninstall — same pattern as
 * scripts/generate-assets.mjs and puppeteer.
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'assets';
const OUT = 'public/images';

/**
 * The three Home-hero device renders and the Sarawak map arrive as PNGs whose
 * backgrounds are already cut out. Alpha has to survive at full precision or
 * the cut-out edges fringe against the navy, but the pixels themselves compress
 * like any photograph — hence lossy colour, lossless alpha.
 */
const TRANSPARENT = [
  { from: 'Hero-1.png', to: 'hero/hero-1.webp' },
  { from: 'Hero-2.png', to: 'hero/hero-2.webp' },
  { from: 'Hero-3.png', to: 'hero/hero-3.webp', width: 1224 },
  { from: 'sarawak state shaped flag.png', to: 'home/sarawak-map.webp' },
];

/**
 * Photographs. `width` is the widest the image is ever displayed at times two,
 * capped at the source resolution — nothing here is ever upscaled.
 */
const PHOTOS = [
  { from: 'Hero-about.avif', to: 'pages/about.webp', width: 1075 },
  { from: 'Hero-capabilities.avif', to: 'pages/capabilities.webp', width: 1170 },
  { from: 'hero-projects.png', to: 'pages/projects.webp', width: 1400 },
  { from: 'hero-leadership.jpg', to: 'pages/leadership.webp', width: 1080 },
  { from: 'why sarawak 1.avif', to: 'about/sarawak-1.webp', width: 600 },
  { from: 'why sarawak 2.avif', to: 'about/sarawak-2.webp', width: 1170 },
  { from: 'why sarawak 3.jpg', to: 'about/sarawak-3.webp', width: 1200 },
];

async function write(job, options) {
  const target = path.join(OUT, job.to);
  await mkdir(path.dirname(target), { recursive: true });

  const pipeline = sharp(path.join(SRC, job.from));
  if (job.width) pipeline.resize({ width: job.width, withoutEnlargement: true });

  const info = await pipeline.webp(options).toFile(target);
  console.log(
    `${job.from.padEnd(30)} → ${job.to.padEnd(28)} ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)} kB`,
  );
}

for (const job of TRANSPARENT) await write(job, { quality: 90, alphaQuality: 100, effort: 6 });
for (const job of PHOTOS) await write(job, { quality: 82, effort: 6 });
