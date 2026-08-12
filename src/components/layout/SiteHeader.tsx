'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV, CTA } from '@/content/nav';
import { COMPANY, whatsAppHref } from '@/config/company';
import { Logo } from './Logo';
import { WhatsAppGlyph } from './WhatsAppGlyph';
import { cn } from '@/lib/cn';

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer on navigation.
  useEffect(() => setDrawerOpen(false), [pathname]);

  // Lock body scroll, trap focus, and return focus to the trigger on close.
  useEffect(() => {
    if (!drawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // The floating CTA is the same action as the drawer's own button; showing
    // both at once is noise, so the drawer suppresses it (docs/03 §4).
    document.body.classList.add('is-drawer-open');

    const panel = drawerRef.current;
    panel?.querySelector<HTMLElement>('a, button')?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab' || !panel) return;

      const focusables = panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove('is-drawer-open');
    };
  }, [drawerOpen]);

  // Transparent over the navy hero on Home only, and only at desktop widths —
  // on mobile the bar is always solid so the logo never sits on unknown pixels.
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        role="banner"
        className={cn('site-header', transparent ? 'is-transparent' : 'is-solid')}
      >
        <div className="container-shell w-wide site-header__inner">
          <Logo height={28} />

          <nav aria-label="Main" className="site-nav">
            <ul className="site-nav__list">
              {NAV.map((item) => {
                const current =
                  item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? 'page' : undefined}
                      className={cn('site-nav__link', current && 'is-current')}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="site-header__actions">
            {/* Conversion is never behind a menu — the CTA stays in the bar at
                every width, as an icon-only control below 768px. */}
            <a
              href={whatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'btn btn-sm site-header__cta',
                transparent ? 'btn-inverse-primary' : 'btn-primary',
              )}
            >
              {CTA.primary}
            </a>

            <a
              href={whatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={CTA.whatsAppAria}
              className="site-header__cta-compact"
            >
              <WhatsAppGlyph size={20} />
            </a>

            <button
              ref={hamburgerRef}
              type="button"
              className="site-header__burger"
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav"
              aria-label={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setDrawerOpen((open) => !open)}
            >
              {drawerOpen ? (
                <X size={22} strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MobileNavDrawer */}
      <div
        className={cn('drawer-scrim', drawerOpen && 'is-open')}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-nav"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className={cn('drawer', drawerOpen && 'is-open')}
        // Keeps the closed drawer out of the tab order without hiding it from
        // the transition.
        inert={!drawerOpen}
      >
        <div className="drawer__head">
          <Logo height={26} withWordmark={false} />
          <button
            type="button"
            className="site-header__burger"
            aria-label="Close navigation menu"
            onClick={() => {
              setDrawerOpen(false);
              hamburgerRef.current?.focus();
            }}
          >
            <X size={22} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <ul className="drawer__list">
          {NAV.map((item) => {
            const current = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? 'page' : undefined}
                  className={cn('drawer__link', current && 'is-current')}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="drawer__foot">
          <a
            href={whatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-md w-full"
          >
            {CTA.primary}
          </a>
          <p className="type-caption tabular muted-text" style={{ marginTop: 16 }}>
            Registration No. {COMPANY.registrationNo}
          </p>
        </div>
      </div>
    </>
  );
}
