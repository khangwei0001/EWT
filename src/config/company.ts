/**
 * Single source of truth for every company detail on the site.
 *
 * Values tagged PLACEHOLDER are working values the client explicitly approved
 * rendering live for review (docs/13-OPEN-QUESTIONS.md Q-02, Q-16). They are NOT
 * final and are tracked for pre-launch confirmation in
 * docs/12-technical-requirements.md §11.
 *
 * Placeholder discipline: no PLACEHOLDER value may be duplicated into a
 * component. Changing one is a single edit to this file.
 */
export const COMPANY = {
  name: 'Eastern World Technology',
  shortName: 'EWT',
  registrationNo: '202501010006 (1611420-T)',
  tagline: 'Technology, Structured for Business.',
  positioning: 'Sarawak-focused Technology Project & Solutions Company',

  // Confirmed — Q-01. Wesley Chai (CEO) and Edwin Ting (CTO) were both given as
  // +60 12-879 7003. The brief's single conversion targets the CEO (the message
  // opens "Hi Wesley…"), so one number is wired site-wide.
  ceoWhatsAppNumber: '60128797003',
  ceoWhatsAppDisplay: '+60 12-879 7003',

  whatsAppMessage:
    "Hi Wesley, I came across Eastern World Technology's website. I'd like to discuss a potential project with EWT.",

  // PLACEHOLDER — Q-02
  businessHours: 'Monday – Friday, 9:00am – 6:00pm (MYT)',
  publicHolidaysNote: 'Closed on Malaysian public holidays.',

  // PLACEHOLDER — Q-16
  email: 'info@ewt.com.my',
  officePhone: '+60 3-1234 5678',
  address: 'Ara Damansara, Petaling Jaya, Selangor, Malaysia',
  linkedInUrl: '', // none supplied — rows with an empty value are omitted, never shown as "TBD"
  googleMapsQuery: 'Ara Damansara, Petaling Jaya, Selangor',

  // PLACEHOLDER — Q-03. Final domain still open; regenerate canonical/OG/sitemap
  // URLs from this constant once it is confirmed.
  siteUrl: 'https://www.ewt.com.my',
} as const;

/** Every "Discuss a Project" control on the site must call this. */
export const whatsAppHref = (): string =>
  COMPANY.ceoWhatsAppNumber
    ? `https://wa.me/${COMPANY.ceoWhatsAppNumber}?text=${encodeURIComponent(COMPANY.whatsAppMessage)}`
    : '/contact';

/**
 * Development-only preview flags. Both must be false in the production build —
 * docs/12-technical-requirements.md §11.
 */
export const PREVIEW_EXTENDED_BIOS =
  process.env.NEXT_PUBLIC_PREVIEW_EXTENDED_BIOS === 'true';

export const PREVIEW_ANALYTICS_UI =
  process.env.NEXT_PUBLIC_PREVIEW_ANALYTICS_UI === 'true';
