/**
 * Every photograph and render used on the site, with its alt text.
 *
 * Alt text is user-facing copy, so it lives here with the rest of it. Two rules
 * it has to obey (docs/01 §7):
 *
 *  - Nothing here names a client, a project, an institution or a government
 *    body. The Sarawak photographs are described as places, not as landmarks
 *    or attractions — Sarawak is a stated market, never a destination.
 *  - The Home hero renders are decorative. They are generic interface mockups,
 *    not EWT work, so they carry an empty alt and the stage is hidden from
 *    assistive technology entirely. Nothing about them may imply a portfolio.
 *
 * Source files live in `assets/`; `scripts/prepare-images.mjs` produces these.
 */

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Where the crop should hold when the frame is a different shape. */
  objectPosition?: string;
};

/** Home hero — one at a time, on a loop. Decorative: see the note above. */
export const HERO_RENDERS: SiteImage[] = [
  { src: '/images/hero/hero-1.webp', alt: '', width: 612, height: 408 },
  { src: '/images/hero/hero-2.webp', alt: '', width: 612, height: 408 },
  { src: '/images/hero/hero-3.webp', alt: '', width: 1224, height: 816 },
];

export const SARAWAK_MAP: SiteImage = {
  src: '/images/home/sarawak-map.webp',
  alt: 'The outline of Sarawak, filled with the state flag.',
  width: 599,
  height: 416,
};

/** Interior page headers. Illustrative, so each one is decorative. */
export const PAGE_HEADER_IMAGES = {
  about: {
    src: '/images/pages/about.webp',
    alt: '',
    width: 1075,
    height: 805,
  },
  capabilities: {
    src: '/images/pages/capabilities.webp',
    alt: '',
    width: 1170,
    height: 780,
  },
  projects: {
    src: '/images/pages/projects.webp',
    alt: '',
    width: 1400,
    height: 933,
  },
  leadership: {
    src: '/images/pages/leadership.webp',
    alt: '',
    width: 1080,
    height: 1568,
    // Tall source, and its whole subject sits in the upper third. Centred, the
    // frame fills with the unlit slope and nothing else.
    objectPosition: '50% 22%',
  },
} satisfies Record<string, SiteImage>;

/** About → Why Sarawak. One tall frame beside two wide ones. */
export const SARAWAK_VIEWS: SiteImage[] = [
  {
    src: '/images/about/sarawak-1.webp',
    alt: 'Boats moored on the Sarawak River at Kuching.',
    width: 600,
    height: 800,
  },
  {
    src: '/images/about/sarawak-2.webp',
    alt: 'The Kuching waterfront on a working afternoon.',
    width: 1170,
    height: 780,
  },
  {
    src: '/images/about/sarawak-3.webp',
    alt: 'The Kuching skyline at dusk, seen across the river.',
    width: 1200,
    height: 800,
  },
];
