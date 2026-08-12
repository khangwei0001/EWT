'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

/** Nothing stays hidden longer than this after the component mounts. */
const BACKSTOP_MS = 1200;

/**
 * Scroll reveal: opacity 0→1 plus a 16px rise, 500ms, once only (docs/02 §8).
 * Stagger is capped at 60ms and 6 items — the seventh sibling onward arrives
 * with the sixth.
 *
 * Three triggers, in descending order of how much they matter:
 *
 *  1. IntersectionObserver — the normal path.
 *  2. The pre-hydration scroll depth recorded in layout.tsx — anything the
 *     visitor already scrolled past while the bundle was still loading has had
 *     its moment, so it appears outright rather than animating in behind them.
 *  3. A 1200ms backstop — after that, everything reveals regardless of
 *     position.
 *
 * The backstop exists because a reveal that depends on the rendering lifecycle
 * can silently stop firing (headless Chrome stops dispatching scroll events and
 * rAF callbacks after the first programmatic scroll, and throttled or
 * backgrounded tabs behave similarly). Content left at opacity 0 is a defect;
 * a missed animation on content nobody is looking at yet is not. It costs
 * nothing visible: anything past the first screen is off-screen when it flips.
 */
export function Reveal({
  children,
  index = 0,
  as: Tag = 'div',
  className,
}: {
  children: React.ReactNode;
  index?: number;
  as?: 'div' | 'li' | 'section' | 'article';
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const documentTop = node.getBoundingClientRect().top + window.scrollY;
    const maxScroll = (window as { __ewtMaxScroll?: number }).__ewtMaxScroll ?? 0;
    if (documentTop < maxScroll + window.innerHeight * 0.92) {
      setVisible(true);
      return;
    }

    let observer: IntersectionObserver | null = null;

    const reveal = () => {
      setVisible(true);
      observer?.disconnect();
      window.clearTimeout(backstop);
    };

    const backstop = window.setTimeout(reveal, BACKSTOP_MS);

    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) reveal();
        },
        { rootMargin: '0px 0px -8% 0px' },
      );
      observer.observe(node);
    }

    return () => {
      observer?.disconnect();
      window.clearTimeout(backstop);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ transitionDelay: `${Math.min(index, 5) * 60}ms` }}
    >
      {children}
    </Tag>
  );
}
