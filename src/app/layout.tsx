import type { Metadata } from 'next';
import { Archivo, Public_Sans } from 'next/font/google';
import '@/styles/globals.css';

import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';
import { AnalyticsNotice } from '@/components/layout/AnalyticsNotice';
import { COMPANY } from '@/config/company';
import { THEME_COLOR } from '@/lib/brand';

/**
 * Archivo (display) + Public Sans (body) — resolved Q-06 after Inter was
 * rejected as too generic. next/font emits the woff2 files into the static
 * build and inlines the @font-face rules, so nothing is fetched from a
 * third-party host at runtime: government and corporate networks frequently
 * block font CDNs.
 *
 * The wdth axis is loaded because the display scale uses Archivo's expanded
 * widths, which echo the wide geometry of the EWT wordmark.
 */
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-public-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title: {
    default: 'Eastern World Technology — Technology, Structured for Business',
    template: '%s | Eastern World Technology',
  },
  description:
    'A Sarawak-focused technology project and solutions company helping organisations turn requirements into structured, implementable technology projects.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: THEME_COLOR,
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script below adds a class to <html>
    // before React hydrates, which is an expected difference, not a bug.
    <html
      lang="en-MY"
      className={`${archivo.variable} ${publicSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before first paint, so scroll-reveal never causes a flash and
            the page still shows all of its content if scripts are blocked.
            It also records how far the visitor has scrolled before React
            hydrates: on a slow connection someone can scroll past a section
            while the bundle is still arriving, and that section must not be
            left sitting at opacity 0 once it finally mounts. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js-reveal');window.__ewtMaxScroll=0;addEventListener('scroll',function(){window.__ewtMaxScroll=Math.max(window.__ewtMaxScroll,window.scrollY)},{passive:true})",
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFab />
        <AnalyticsNotice />
      </body>
    </html>
  );
}
