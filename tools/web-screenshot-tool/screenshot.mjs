import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotsDir = path.join(__dirname, 'temporary screenshots');

// Create screenshots directory if it doesn't exist
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function takeScreenshot(url, label = '', { width, height, fullPage, delay } = {}) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
    });
    const page = await browser.newPage();

    // Set viewport for consistent screenshots
    await page.setViewport({ width, height });

    await page.goto(url, { waitUntil: 'networkidle2' });

    // Scroll through the page so scroll-triggered reveals fire, then return
    // to the top — mirrors what a real visitor sees.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
    });

    // Find next screenshot number
    const files = fs.readdirSync(screenshotsDir);
    const numbers = files
      .map(f => parseInt(f.match(/\d+/)?.[0] || 0))
      .filter(n => n > 0);
    const nextNum = Math.max(...numbers, 0) + 1;

    const filename = label
      ? `screenshot-${nextNum}-${label}.png`
      : `screenshot-${nextNum}.png`;

    if (delay) await new Promise((r) => setTimeout(r, delay));

    const filepath = path.join(screenshotsDir, filename);
    await page.screenshot({ path: filepath, fullPage });

    console.log(`Screenshot saved: ${filename} (${width}×${height}${fullPage ? ', full page' : ''})`);
  } catch (error) {
    console.error('Screenshot failed:', error.message);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

/**
 * node screenshot.mjs <url> [label] [--width=390] [--height=844] [--viewport]
 *                           [--delay=2500]
 *
 * Defaults to the full page at 1920×1080. `--width` is what you want for
 * checking a layout on a phone; `--viewport` captures one screen instead of
 * the whole scroll, which is the only way to judge anything that fills the
 * fold — a hero, a page header. `--delay` waits before the shutter, which is
 * the only way to catch a timed animation mid-cycle.
 */
const args = process.argv.slice(2);
const flags = Object.fromEntries(
  args
    .filter((a) => a.startsWith('--'))
    .map((a) => {
      const [key, value] = a.replace(/^--/, '').split('=');
      return [key, value ?? true];
    }),
);
const positional = args.filter((a) => !a.startsWith('--'));

takeScreenshot(positional[0] || 'http://localhost:3000', positional[1] || '', {
  width: Number(flags.width) || 1920,
  height: Number(flags.height) || 1080,
  fullPage: !flags.viewport,
  delay: Number(flags.delay) || 0,
});
