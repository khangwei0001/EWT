import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';

/**
 * INTERIM LOGO — asset A-01 is still open (docs/14 §2).
 *
 * The only supplied artwork is a raster PNG of the mark. It is used here at
 * roughly 4x its displayed size, which docs/14 permits for review builds. Once
 * the final SVG lockup arrives, swap the <Image> source for
 * /logo/logo-mark.svg (and logo-lockup-reversed.svg on navy) — nothing else in
 * this file changes.
 *
 * The wordmark beside the mark is set in the site's own display face rather
 * than traced from the logo: re-typesetting a lockup we have not been given
 * would be inventing brand artwork.
 *
 * Light/dark treatment is a CSS concern, not a prop, because the header is
 * transparent over the hero only from 768px up — a JavaScript flag would put a
 * white logo on the white mobile header.
 */
export function Logo({
  height = 32,
  inverse = false,
  withWordmark = true,
  className,
}: {
  height?: number;
  /** Force the reversed treatment (used on the navy footer). */
  inverse?: boolean;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Eastern World Technology — home"
      className={cn('logo', inverse && 'logo--inverse', className)}
    >
      <Image
        src="/logo/logo-mark.png"
        alt=""
        width={Math.round(height * 3.9)}
        height={height}
        priority
        className="logo__mark"
        style={{ height, width: 'auto' }}
      />
      {withWordmark ? <span className="logo__word">Eastern World Technology</span> : null}
    </Link>
  );
}
