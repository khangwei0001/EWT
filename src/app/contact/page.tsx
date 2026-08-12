import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { InfoTable } from '@/components/ui/InfoTable';
import { MapEmbed } from '@/components/ui/MapEmbed';
import { COMPANY, whatsAppHref } from '@/config/company';
import { CTA } from '@/content/nav';
import { CONTACT_SUPPORT_LINE, CONTACT_DEVICE_NOTE, HELPFUL_TO_MENTION } from '@/content/contact';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Discuss a Project',
  description:
    'Have a technology project or requirement? Speak directly with EWT to discuss the scope and next steps.',
  path: '/contact',
  ogImage: 'og-contact.png',
});

/**
 * A conversion page, not a content page — one to one-and-a-half viewports on
 * desktop, with no closing CTA band because the whole page is the CTA.
 *
 * There is no contact form: a form needs a backend or a third-party endpoint,
 * and neither is in V1 scope (docs/10). Email, phone, address and the map are
 * PLACEHOLDER values from src/config/company.ts — the single place to change
 * them. Empty values (LinkedIn) are omitted rather than invented.
 */
export default function ContactPage() {
  return (
    <>
      <Section width="text" labelledBy="contact-heading" className="contact-hero">
        <SectionHeader
          eyebrow="Discuss a project"
          heading="Have a technology project or requirement?"
          headingId="contact-heading"
          as="h1"
          lead="Speak directly with EWT to discuss the scope and next steps."
          centred
          accentRule
        />

        <p className="type-body-sm muted-text" style={{ marginTop: 24, textAlign: 'center' }}>
          {CONTACT_SUPPORT_LINE}
        </p>

        <div className="contact-cta">
          <Button
            href={whatsAppHref()}
            external
            size="lg"
            blockOnMobile
            ariaLabel={CTA.whatsAppAria}
          >
            {CTA.primaryLong}
          </Button>
          <p className="type-caption muted-text contact-cta__note">{CONTACT_DEVICE_NOTE}</p>
        </div>
      </Section>

      {/* Helpful, never required. There is no gate on contacting EWT. */}
      <Section tone="alt" labelledBy="mention-heading">
        <SectionHeader
          eyebrow="Before you message"
          headingId="mention-heading"
          heading="Helpful things to mention"
        />
        <div className="section-body">
          <ol className="mention-grid">
            {HELPFUL_TO_MENTION.map((item, i) => (
              <li key={item} className="mention-row">
                <span className="type-index mention-row__index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="type-body-sm">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section labelledBy="company-heading" className="contact-info">
        <SectionHeader
          eyebrow="Company"
          headingId="company-heading"
          heading="Company information"
        />
        <div className="section-body">
          <InfoTable
            rows={[
              { term: 'Company', value: COMPANY.name },
              { term: 'Registration No.', value: COMPANY.registrationNo, tabular: true },
              {
                term: 'CEO WhatsApp',
                value: (
                  <a href={whatsAppHref()} target="_blank" rel="noopener noreferrer">
                    {COMPANY.ceoWhatsAppDisplay}
                  </a>
                ),
                tabular: true,
              },
              {
                term: 'Business Hours',
                value: `${COMPANY.businessHours} ${COMPANY.publicHolidaysNote}`,
              },
              {
                term: 'Email',
                value: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>,
              },
              { term: 'Office Phone', value: COMPANY.officePhone, tabular: true },
              { term: 'Address', value: COMPANY.address },
              // Omitted, not invented: no LinkedIn URL exists yet.
              { term: 'LinkedIn', value: COMPANY.linkedInUrl },
            ]}
          />
        </div>
      </Section>

      {/* Placed last and kept small on purpose: the page's job is the WhatsApp
          conversation, and a map should support that, not compete with it. */}
      <Section labelledBy="location-heading" className="contact-location fab-clearance">
        <div className="section-header">
          <span className="rule-gold" aria-hidden="true" />
          <p className="eyebrow">Location</p>
          <h2 id="location-heading" className="sr-only">
            Location
          </h2>
        </div>
        <div className="contact-location__map">
          <MapEmbed />
          <p className="type-body-sm muted-text contact-location__caption">{COMPANY.address}</p>
        </div>
      </Section>
    </>
  );
}
