import puppeteer from 'puppeteer';

const PAGES = ['/', '/about', '/capabilities', '/projects', '/leadership', '/contact', '/nope'];
const WIDTHS = [320, 360, 390, 768, 1024, 1280, 1440, 1920];
const BANNED = [
  'industry-leading', 'world-class', 'cutting-edge', 'award-winning', 'best-in-class',
  'trusted by', 'our clients include', 'government-appointed', 'certified partner',
  'revolutionary', 'web design', 'app development company', 'digital agency',
  'lorem ipsum', 'TBD', 'undefined', 'NaN',
];

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
const problems = [];

for (const p of PAGES) {
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto('http://localhost:3000' + p, { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 1600));

  const info = await page.evaluate(() => {
    const heads = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) => +h.tagName[1]);
    let skipped = false;
    let prev = 0;
    for (const l of heads) {
      if (prev && l > prev + 1) skipped = true;
      prev = l;
    }
    return {
      h1: document.querySelectorAll('h1').length,
      skipped,
      title: document.title,
      desc: document.querySelector('meta[name=description]')?.content?.length ?? 0,
      canonical: document.querySelector('link[rel=canonical]')?.href ?? '',
      og: document.querySelector('meta[property="og:image"]')?.content ?? '',
      waLinks: document.querySelectorAll('a[href*="wa.me"]').length,
      badRel: [...document.querySelectorAll('a[target=_blank]')].filter(
        (a) => !/noopener/.test(a.rel) || !/noreferrer/.test(a.rel),
      ).length,
      emptyLinks: [...document.querySelectorAll('a')].filter(
        (a) => !a.textContent.trim() && !a.getAttribute('aria-label'),
      ).length,
      imgNoAlt: [...document.querySelectorAll('img')].filter(
        (i) => i.getAttribute('alt') === null,
      ).length,
      smallTargets: [...document.querySelectorAll('a.btn, button, .site-header__burger')].filter(
        (e) => {
          const r = e.getBoundingClientRect();
          return r.height > 0 && (r.height < 40 || r.width < 40);
        },
      ).length,
      skipLink: !!document.querySelector('.skip-link'),
      main: !!document.querySelector('main#main'),
      hiddenReveals: [...document.querySelectorAll('.reveal')].filter(
        (e) => !e.classList.contains('is-visible'),
      ).length,
      text: document.body.innerText,
    };
  });

  if (info.h1 !== 1) problems.push(`${p}: ${info.h1} <h1>`);
  if (info.skipped) problems.push(`${p}: skipped heading level`);
  if (!info.canonical && p !== '/nope/') problems.push(`${p}: no canonical`);
  if (!info.og) problems.push(`${p}: no og:image`);
  if (info.badRel) problems.push(`${p}: ${info.badRel} target=_blank without rel`);
  if (info.emptyLinks) problems.push(`${p}: ${info.emptyLinks} links with no accessible name`);
  if (info.imgNoAlt) problems.push(`${p}: ${info.imgNoAlt} img without alt`);
  if (info.smallTargets) problems.push(`${p}: ${info.smallTargets} touch targets under 40px`);
  if (!info.skipLink) problems.push(`${p}: no skip link`);
  if (!info.main) problems.push(`${p}: no main#main`);
  if (info.hiddenReveals) problems.push(`${p}: ${info.hiddenReveals} reveals still hidden`);
  if (!info.waLinks && p !== '/nope/') problems.push(`${p}: no WhatsApp link`);

  for (const b of BANNED) {
    if (new RegExp(b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i').test(info.text)) {
      problems.push(`${p}: banned phrase "${b}"`);
    }
  }

  console.log(
    p.padEnd(16),
    `h1=${info.h1} wa=${info.waLinks} desc=${info.desc} title="${info.title.slice(0, 46)}"`,
  );

  for (const w of WIDTHS) {
    await page.setViewport({ width: w, height: 800 });
    await new Promise((r) => setTimeout(r, 250));
    const over = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    if (over > 0) problems.push(`${p} @${w}px: horizontal overflow +${over}px`);
  }
}

console.log('\n' + (problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'No problems found.'));
await browser.close();
