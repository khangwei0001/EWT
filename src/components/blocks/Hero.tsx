import { Button } from '@/components/ui/Button';
import { HeroStage } from '@/components/blocks/HeroStage';
import { whatsAppHref } from '@/config/company';
import { CTA } from '@/content/nav';

/**
 * Home hero — copy is verbatim from the brief (docs/05 §01).
 *
 * The <h1> is the tagline, not the company name: the name is already carried by
 * the logo, the <title> and the Organization schema, so the positioning
 * statement is what should be read first (Q-10, approved).
 *
 * The right-hand composition is two layers. Behind: three parallelograms cut at
 * the same shear as the logo's gold accent, one of them carrying that accent.
 * In front: the looping render stage. The planes are the backdrop the renders
 * stand on, which is why they share a column rather than competing for one.
 */
export function Hero() {
  return (
    <section className="hero on-inverse" aria-labelledby="hero-heading">
      <div className="hero__texture grid-texture" aria-hidden="true" />
      <div className="hero__planes" aria-hidden="true">
        <span className="hero__plane hero__plane--1" />
        <span className="hero__plane hero__plane--2">
          {/* The site's one gold accent, carried on a plane edge so it stays
              welded to the composition rather than floating beside it. */}
          <span className="hero__edge" />
        </span>
        <span className="hero__plane hero__plane--3" />
      </div>

      <div className="container-shell w-wide hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero__brand">Eastern World Technology</p>
          <h1 id="hero-heading" className="type-display hero__headline">
            Technology, Structured for Business.
          </h1>
          <p className="type-lead lead-text hero__sub">
            A Sarawak-focused technology project and solutions company helping organisations turn
            requirements into structured, implementable technology projects.
          </p>
          <div className="hero__actions">
            <Button href={whatsAppHref()} external variant="inverse-primary" size="lg" blockOnMobile>
              {CTA.primary}
            </Button>
            <Button href="/capabilities" variant="inverse-secondary" size="lg" blockOnMobile>
              {CTA.secondary}
            </Button>
          </div>
        </div>

        <HeroStage />
      </div>
    </section>
  );
}
