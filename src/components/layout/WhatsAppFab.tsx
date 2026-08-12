'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { whatsAppHref } from '@/config/company';
import { CTA } from '@/content/nav';
import { WhatsAppGlyph } from './WhatsAppGlyph';
import { cn } from '@/lib/cn';

/**
 * Floating CEO WhatsApp CTA — present on every primary page (docs/03 §4).
 * On Home it appears once the visitor is past the hero; on inner pages it is
 * visible immediately, since the in-flow CTA sits further down the page.
 */
export function WhatsAppFab() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [visible, setVisible] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setVisible(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY >= 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  return (
    <a
      href={whatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={CTA.whatsAppAria}
      className={cn('fab', visible && 'is-visible')}
      tabIndex={visible ? undefined : -1}
    >
      <WhatsAppGlyph size={22} />
      <span className="fab__label">{CTA.primary}</span>
    </a>
  );
}
