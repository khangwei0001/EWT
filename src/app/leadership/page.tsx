import { Section, SectionHeader } from '@/components/ui/Section';
import { PageHeader } from '@/components/blocks/PageHeader';
import { PersonProfile } from '@/components/cards/PersonCard';
import { PlaceholderBioBlock } from '@/components/cards/PlaceholderBioBlock';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Reveal } from '@/components/ui/Reveal';
import { LEADERSHIP, FOUNDER_INVOLVEMENT } from '@/content/leadership';
import { PAGE_HEADER_IMAGES } from '@/content/images';
import { CTA } from '@/content/nav';
import { whatsAppHref } from '@/config/company';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Leadership',
  description:
    'Meet the founders of Eastern World Technology: Wesley Chai, Founder & CEO, and Edwin Ting, Founder & CTO.',
  path: '/leadership',
});

/**
 * The highest-risk page on the site for over-claiming (docs/09 §8).
 *
 * Nothing here names an employer, a university, a qualification, a certification,
 * an award, a partnership, a client, or any figure implying experience. Bios stay
 * within the brief's own role descriptors until approved wording is supplied.
 */
export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        heading="Leadership"
        headingId="leadership-heading"
        lead="Eastern World Technology is led by its two founders, who are directly involved in how projects are structured and delivered."
        image={PAGE_HEADER_IMAGES.leadership}
      />

      <Section labelledBy="founders-heading" width="narrow" topRule>
        <h2 id="founders-heading" className="sr-only">
          Founders
        </h2>
        {LEADERSHIP.map((person) => (
          <PersonProfile key={person.slug} person={person}>
            <PlaceholderBioBlock person={person} />
          </PersonProfile>
        ))}
      </Section>

      <Section tone="alt" labelledBy="involvement-heading">
        <SectionHeader
          eyebrow="How we work"
          headingId="involvement-heading"
          heading="Founder-level involvement in every engagement."
        />
        <div className="section-body">
          <ul className="pillar-grid">
            {FOUNDER_INVOLVEMENT.map((point, i) => (
              <Reveal as="li" key={point.index} index={i}>
                <div className="pillar">
                  <span className="type-index pillar__index" aria-hidden="true">
                    {point.index}
                  </span>
                  <h3 className="type-h4 pillar__title">{point.title}</h3>
                  <p className="type-body-sm muted-text pillar__body">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand
        heading="Speak directly with our CEO."
        sub="Have a technology project or requirement? Speak directly with EWT to discuss the scope and next steps."
        primary={{ label: CTA.primaryLong, href: whatsAppHref(), external: true }}
      />
    </>
  );
}
