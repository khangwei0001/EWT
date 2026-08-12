import { Button } from '@/components/ui/Button';
import { whatsAppHref } from '@/config/company';

type Cta = { label: string; href: string; external?: boolean };

/**
 * The recurring "Discuss a Project" band that closes Home and every inner page
 * (docs/03 §12). Every page is one click from the WhatsApp conversion; the
 * floating button is the safety net, this is the plan.
 */
export function CtaBand({
  eyebrow,
  heading,
  sub,
  primary,
  secondary,
  tone = 'inverse',
}: {
  eyebrow?: string;
  heading: string;
  sub: string;
  primary?: Cta;
  secondary?: Cta;
  tone?: 'inverse' | 'alt';
}) {
  const primaryCta = primary ?? {
    label: 'Discuss a Project',
    href: whatsAppHref(),
    external: true,
  };
  const inverse = tone === 'inverse';

  return (
    <section
      className={inverse ? 'cta-band on-inverse' : 'cta-band cta-band--alt'}
      aria-labelledby="cta-heading"
      style={inverse ? { background: 'var(--gradient-hero)' } : undefined}
    >
      <div className="container-shell w-text cta-band__inner">
        <span className="rule-accent" aria-hidden="true" />
        {eyebrow ? <p className="eyebrow cta-band__eyebrow">{eyebrow}</p> : null}
        <h2 id="cta-heading" className="type-h1 cta-band__heading">
          {heading}
        </h2>
        <p className="type-lead lead-text cta-band__sub">{sub}</p>

        <div className="cta-band__actions">
          <Button
            href={primaryCta.href}
            external={primaryCta.external}
            variant={inverse ? 'inverse-primary' : 'primary'}
            size="lg"
            blockOnMobile
          >
            {primaryCta.label}
          </Button>
          {secondary ? (
            <Button
              href={secondary.href}
              external={secondary.external}
              variant={inverse ? 'inverse-secondary' : 'secondary'}
              size="lg"
              blockOnMobile
            >
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
