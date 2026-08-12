import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'inverse-primary' | 'inverse-secondary';
type Size = 'sm' | 'md' | 'lg';

const VARIANT: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  'inverse-primary': 'btn-inverse-primary',
  'inverse-secondary': 'btn-inverse-secondary',
};

const SIZE: Record<Size, string> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  /** Full width below 480px — used for hero and CTA-band buttons. */
  blockOnMobile?: boolean;
  external?: boolean;
  ariaLabel?: string;
  className?: string;
};

/**
 * Anything that navigates is an <a> — including WhatsApp. There are no forms
 * in V1, so the only real <button>s on the site are the drawer controls.
 */
export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  blockOnMobile = false,
  external = false,
  ariaLabel,
  className,
}: Props) {
  const classes = cn(
    'btn',
    VARIANT[variant],
    SIZE[size],
    blockOnMobile && 'btn-block-xs',
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
