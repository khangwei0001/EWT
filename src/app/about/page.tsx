import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/Section';
import { PageHeader } from '@/components/blocks/PageHeader';
import { ProcessSteps } from '@/components/blocks/ProcessSteps';
import { CtaBand } from '@/components/blocks/CtaBand';
import { InfoTable } from '@/components/ui/InfoTable';
import { Reveal } from '@/components/ui/Reveal';
import { ABOUT_LEAD, WHO_WE_ARE, PILLARS, WHY_SARAWAK, MSIC } from '@/content/about';
import { PAGE_HEADER_IMAGES, SARAWAK_VIEWS } from '@/content/images';
import { COMPANY } from '@/config/company';
import { CTA } from '@/content/nav';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About EWT',
  description:
    'Eastern World Technology is a Sarawak-focused technology company established to structure and deliver technology projects around real organisational requirements.',
  path: '/about',
});

/**
 * Three tone pillars must land explicitly: disciplined execution, practical
 * technology adoption, long-term value (docs/06).
 *
 * The audience paragraph is phrased as who EWT is *built to serve* — never as
 * who EWT has served, which would read as a client claim.
 */
export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About EWT"
        heading="About Eastern World Technology"
        headingId="about-heading"
        lead={ABOUT_LEAD}
        image={PAGE_HEADER_IMAGES.about}
      />

      <Section labelledBy="who-heading" topRule>
        <SectionHeader
          eyebrow="Who we are"
          headingId="who-heading"
          heading="A technology project company, not a development shop."
        />
        <div className="section-body prose-measure">
          {WHO_WE_ARE.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="type-body">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section tone="alt" labelledBy="how-heading">
        <SectionHeader
          eyebrow="How we work"
          headingId="how-heading"
          heading="Structure before build."
        />

        <div className="section-body">
          <ul className="pillar-grid">
            {PILLARS.map((pillar, i) => (
              <Reveal as="li" key={pillar.index} index={i}>
                <div className="pillar">
                  <span className="type-index pillar__index" aria-hidden="true">
                    {pillar.index}
                  </span>
                  <h3 className="type-h4 pillar__title">{pillar.title}</h3>
                  <p className="type-body-sm muted-text pillar__body">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div style={{ marginTop: 56 }}>
            <h3 className="type-h3" style={{ marginBottom: 32 }}>
              The four-step engagement model
            </h3>
            <ProcessSteps variant="expanded" />
          </div>
        </div>
      </Section>

      {/* The only section on the site where the header sits inside the grid
          rather than above it: the frame is tall enough that a full-width
          heading above it leaves a hole where the copy should be. */}
      <Section labelledBy="sarawak-heading">
        <div className="why-sarawak">
          <div>
            <SectionHeader
              eyebrow="Sarawak focus"
              headingId="sarawak-heading"
              heading="Why Sarawak."
            />
            <div className="prose-measure why-sarawak__copy">
              {WHY_SARAWAK.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="type-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* One tall frame beside two wide ones, flush on every outer edge. */}
          <div className="sarawak-frame">
            {SARAWAK_VIEWS.map((view) => (
              <figure key={view.src}>
                <Image
                  src={view.src}
                  alt={view.alt}
                  width={view.width}
                  height={view.height}
                  sizes="(min-width: 1024px) 30vw, 50vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* Registered scope: verifiable facts only. No certifications, memberships,
          accreditations or partners row — none are approved. */}
      <Section tone="alt" labelledBy="scope-heading">
        <SectionHeader
          eyebrow="Registered scope"
          headingId="scope-heading"
          heading="Company information"
        />
        <div className="section-body">
          <InfoTable
            rows={[
              { term: 'Company', value: COMPANY.name },
              { term: 'Registration No.', value: COMPANY.registrationNo, tabular: true },
              { term: 'Positioning', value: COMPANY.positioning },
              {
                term: 'Registered activities (MSIC)',
                value: (
                  <ul className="msic-list">
                    {MSIC.map((item) => (
                      <li key={item.code}>
                        <span className="tabular msic-list__code">{item.code}</span>
                        <span>{item.scope}</span>
                      </li>
                    ))}
                  </ul>
                ),
              },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        heading="Have a requirement you would like structured?"
        sub="Speak directly with EWT to discuss the scope and next steps."
        secondary={{ label: CTA.secondary, href: '/capabilities' }}
      />
    </>
  );
}
