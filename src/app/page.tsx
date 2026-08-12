import Image from 'next/image';
import { Hero } from '@/components/blocks/Hero';
import { ProcessSteps } from '@/components/blocks/ProcessSteps';
import { ValueList } from '@/components/blocks/ValueList';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { CapabilityTile } from '@/components/cards/CapabilityTile';
import { PersonPreviewCard } from '@/components/cards/PersonCard';
import { HOME_TILES, SARAWAK_FOCUS_AREAS, SARAWAK_FOCUS_COPY } from '@/content/home';
import { SARAWAK_MAP } from '@/content/images';
import { LEADERSHIP } from '@/content/leadership';
import { CTA } from '@/content/nav';
import { whatsAppHref } from '@/config/company';
import { pageMetadata, organizationJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Eastern World Technology — Technology, Structured for Business',
  description:
    'A Sarawak-focused technology project and solutions company helping organisations turn requirements into structured, implementable technology projects.',
  path: '/',
  ogImage: 'og-home.png',
});

/**
 * Seven sections, in the brief's order (docs/05). The count, order and names
 * are fixed: no testimonials, logo wall, statistics, blog teaser, newsletter or
 * FAQ may be added, and none may be removed.
 *
 * Two navy bands appear here — the hero and the final CTA. This is the only
 * page permitted two, because they bookend it.
 */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />

      {/* 01 — Hero */}
      <Hero />

      {/* 02 — What EWT Does */}
      <Section labelledBy="what-heading">
        <SectionHeader
          eyebrow="What EWT does"
          headingId="what-heading"
          heading="We work with organisations to turn technology requirements into structured projects."
        />
        <div className="section-body">
          <ProcessSteps />
        </div>
      </Section>

      {/* 03 — Project Capabilities */}
      <Section tone="alt" labelledBy="capabilities-heading">
        <SectionHeader
          eyebrow="Project capabilities"
          headingId="capabilities-heading"
          heading="The categories of technology projects we structure and deliver."
          lead="Each area is described in full on the Capabilities page — what the work involves, when an organisation needs it, and what EWT is responsible for."
        />
        <div className="section-body">
          <ul className="cap-tile-grid">
            {HOME_TILES.map((tile, i) => (
              <Reveal as="li" key={tile.label} index={i}>
                <CapabilityTile tile={tile} />
              </Reveal>
            ))}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
            <Button href="/capabilities" variant="secondary" size="md">
              {CTA.secondary}
            </Button>
          </div>
        </div>
      </Section>

      {/* 04 — Why EWT */}
      <Section labelledBy="why-heading">
        <SectionHeader
          eyebrow="Why EWT"
          headingId="why-heading"
          heading="Why organisations bring projects to EWT."
        />
        <div className="section-body">
          <ValueList />
        </div>
      </Section>

      {/* 05 — Sarawak Focus.
          Compliance guardrail: this is the highest-risk section on the site.
          The verbs stay at "focused on" and "established to contribute" —
          never partnered with, appointed by, or working with the State. */}
      <Section labelledBy="sarawak-heading" topRule>
        <SectionHeader
          eyebrow="Sarawak focus"
          headingId="sarawak-heading"
          heading="Built for the Sarawak operating environment."
        />
        <div className="section-body sarawak-focus">
          <div className="prose-measure">
            {SARAWAK_FOCUS_COPY.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="type-body">
                {paragraph}
              </p>
            ))}
            <ul className="chip-row">
              {SARAWAK_FOCUS_AREAS.map((area) => (
                <li key={area} className="chip">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* A locator, not a claim: the shape of the market EWT works in. */}
          <figure className="sarawak-focus__map">
            <Image
              src={SARAWAK_MAP.src}
              alt={SARAWAK_MAP.alt}
              width={SARAWAK_MAP.width}
              height={SARAWAK_MAP.height}
              sizes="(min-width: 900px) 360px, 80vw"
            />
          </figure>
        </div>
      </Section>

      {/* 06 — Leadership preview */}
      <Section tone="alt" labelledBy="leadership-heading">
        <SectionHeader
          eyebrow="Leadership"
          headingId="leadership-heading"
          heading="The people behind EWT."
        />
        <div className="section-body">
          <div className="person-preview-grid">
            {LEADERSHIP.map((person) => (
              <PersonPreviewCard key={person.slug} person={person} />
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <a href="/leadership" className="btn-tertiary">
              View leadership
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Section>

      {/* 07 — Final CTA. All three strings are verbatim from the brief; note the
          longer button label, which the brief specifies for this band only. */}
      <CtaBand
        heading="Have a technology project or requirement?"
        sub="Speak directly with EWT to discuss the scope and next steps."
        primary={{ label: CTA.primaryLong, href: whatsAppHref(), external: true }}
      />
    </>
  );
}
