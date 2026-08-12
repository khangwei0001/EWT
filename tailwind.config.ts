import type { Config } from 'tailwindcss';

/**
 * Every colour below points at a custom property declared in
 * src/styles/tokens.css. That file is the only place a hex value may appear —
 * see docs/12-technical-requirements.md §10.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    // The scale from docs/02-design-system.md §5.3. Mobile-first: no query below `sm`.
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        navy: {
          900: 'var(--ewt-navy-900)',
          800: 'var(--ewt-navy-800)',
          700: 'var(--ewt-navy-700)',
          600: 'var(--ewt-navy-600)',
          500: 'var(--ewt-navy-500)',
        },
        blue: {
          600: 'var(--ewt-blue-600)',
          500: 'var(--ewt-blue-500)',
          400: 'var(--ewt-blue-400)',
          300: 'var(--ewt-blue-300)',
          100: 'var(--ewt-blue-100)',
          50: 'var(--ewt-blue-050)',
        },
        grey: {
          50: 'var(--ewt-grey-050)',
          100: 'var(--ewt-grey-100)',
          200: 'var(--ewt-grey-200)',
          500: 'var(--ewt-grey-500)',
          700: 'var(--ewt-grey-700)',
        },
        silver: 'var(--ewt-silver-400)',
        gold: {
          500: 'var(--ewt-gold-500)',
          400: 'var(--ewt-gold-400)',
        },
        ink: 'var(--ewt-ink)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      // 4px base unit — only these steps exist (docs/02 §4).
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
        20: '80px',
        24: '96px',
        30: '120px',
        40: '160px',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        none: 'none',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        fab: 'var(--shadow-fab)',
      },
      maxWidth: {
        wide: 'var(--container-wide)',
        container: 'var(--container)',
        narrow: 'var(--container-narrow)',
        text: 'var(--container-text)',
      },
      transitionTimingFunction: {
        standard: 'var(--ease-standard)',
        out: 'var(--ease-out)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
        reveal: '500ms',
      },
    },
  },
  plugins: [],
};

export default config;
