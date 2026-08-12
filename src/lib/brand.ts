/**
 * The two places a brand colour has to exist as a literal outside
 * src/styles/tokens.css, because neither can read a CSS custom property:
 *
 *   1. the <meta name="theme-color"> value, set from app/layout.tsx
 *   2. public/site.webmanifest, which is static JSON
 *
 * Both mirror --ewt-navy-900. If that token changes, change it here and in the
 * manifest — those are the only three files involved.
 */
export const THEME_COLOR = '#0A1628';
