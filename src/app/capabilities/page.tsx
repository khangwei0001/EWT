import { Section, SectionHeader } from '@/components/ui/Section';
import { PageHeader } from '@/components/blocks/PageHeader';
import { CapabilityCard } from '@/components/cards/CapabilityCard';
import { ProcessSteps } from '@/components/blocks/ProcessSteps';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Reveal } from '@/components/ui/Reveal';
import { CAPABILITIES } from '@/content/capabilities';
import { PAGE_HEADER_IMAGES } from '@/content/images';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Capabilities',
  description:
    'Project areas EWT structures and delivers: consultancy and advisory, digital transformation, enterprise and custom systems, integration, automation, dashboards and implementation support.',
  path: '/capabilities',
  ogImage: 'og-capabilities.png',
});

/**
 * Capabilities are described as project areas, never as a menu of standalone
 * development services (docs/07). No pricing, packages, tiers, rates or
 * turnaround times may appear on this page — a service-listing reading is a
 * hard fail against the brief.
 */
export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        heading="Capabilities"
        headingId="cap-heading"
        lead="The categories of technology projects EWT structures and delivers. Each area describes what the work involves, when an organisation typically needs it, the usual scope of a project, and what EWT is responsible for."
        image={PAGE_HEADER_IMAGES.capabilities}
      />

      <Section tone="alt" labelledBy="cap-list-heading">
        <h2 id="cap-list-heading" className="sr-only">
          Capability areas
        </h2>

        {/* Anchor index — helps a visitor arriving from a Home tile deep link
            orient themselves. It sits with the cards it indexes rather than in
            the page header, where the header image owns the right-hand half.
            Desktop only; it adds nothing on a phone. */}
        <nav aria-label="Capability areas" className="cap-index">
          <ul className="cap-index-list type-body-sm">
            {CAPABILITIES.map((capability) => (
              <li key={capability.slug}>
                <a href={`#${capability.slug}`}>{capability.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="cap-card-grid">
          {CAPABILITIES.map((capability, i) => (
            <Reveal key={capability.slug} index={i}>
              <CapabilityCard capability={capability} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section labelledBy="engagement-heading">
        <SectionHeader
          eyebrow="How an engagement is structured"
          headingId="engagement-heading"
          heading="What working with EWT looks like."
          lead="Many organisations arrive with a problem rather than a category. The sequence below is the same on every engagement."
        />
        <div className="section-body">
          <ProcessSteps />
        </div>
      </Section>

      <CtaBand
        heading="Not sure which area your requirement falls under?"
        sub="Speak directly with EWT to discuss the scope and next steps."
        secondary={{ label: 'View Projects', href: '/projects' }}
      />
    </>
  );
}
