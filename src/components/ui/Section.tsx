import { cn } from '@/lib/cn';

type Tone = 'light' | 'alt' | 'inverse';
type Width = 'wide' | 'default' | 'narrow' | 'text';

const TONE: Record<Tone, string> = {
  light: '',
  alt: 'section-alt',
  inverse: 'section-inverse on-inverse',
};

const WIDTH: Record<Width, string> = {
  wide: 'w-wide',
  default: 'w-default',
  narrow: 'w-narrow',
  text: 'w-text',
};

export function Section({
  children,
  tone = 'light',
  width = 'default',
  id,
  labelledBy,
  className,
  topRule = false,
}: {
  children: React.ReactNode;
  tone?: Tone;
  width?: Width;
  id?: string;
  labelledBy?: string;
  className?: string;
  /** Hairline above the section — separates two consecutive light sections. */
  topRule?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('section', TONE[tone], className)}
      style={topRule ? { borderTop: '1px solid var(--border-default)' } : undefined}
    >
      <div className={cn('container-shell', WIDTH[width])}>{children}</div>
    </section>
  );
}

/**
 * Every major section opens with the same three-part header: a sheared gold
 * rule, an eyebrow, then the heading. One gold rule per section, maximum.
 */
export function SectionHeader({
  eyebrow,
  heading,
  headingId,
  lead,
  centred = false,
  as: Heading = 'h2',
  accentRule = false,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  headingId?: string;
  lead?: React.ReactNode;
  centred?: boolean;
  as?: 'h1' | 'h2';
  accentRule?: boolean;
}) {
  return (
    <div className={cn('section-header', centred && 'is-centred')}>
      <span className={accentRule ? 'rule-accent' : 'rule-gold'} aria-hidden="true" />
      <p className={cn('eyebrow', accentRule && 'mt-4')}>{eyebrow}</p>
      <Heading id={headingId} className={Heading === 'h1' ? 'type-h1' : 'type-h2'}>
        {heading}
      </Heading>
      {lead ? <p className="type-lead lead-text">{lead}</p> : null}
    </div>
  );
}
