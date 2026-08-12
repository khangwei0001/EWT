/**
 * Founder profiles — docs/09-page-leadership.md.
 * Names, roles and descriptors are verbatim from the brief. Bios are concise
 * DRAFTs pending approved wording, and contain no employer history, no
 * qualification, no award, no client relationship. Do not add any.
 */
export type Person = {
  slug: string;
  name: string;
  monogram: string;
  role: string;
  descriptor: string;
  bio: string;
  photo?: { src: string; alt: string };
  /**
   * Extended bio detail — condensed from founder-supplied LinkedIn profiles.
   * Rendered only behind PREVIEW_EXTENDED_BIOS; not yet client-approved for
   * public launch copy. See docs/09-page-leadership.md §6a.
   */
  extended?: {
    background: string;
    experience: string;
    education: string;
  };
};

export const LEADERSHIP: Person[] = [
  {
    slug: 'wesley-chai',
    name: 'Wesley Chai',
    monogram: 'WC',
    role: 'Founder & CEO',
    descriptor: 'Public-facing business and project leadership.',
    bio: 'Wesley leads Eastern World Technology’s business and project engagement — working directly with organisations to understand a requirement, define its scope and set the direction of the engagement. He is the first point of contact for organisations bringing a technology project or requirement to EWT.',
    photo: {
      src: '/images/leadership/wesley-chai.jpg',
      alt: 'Wesley Chai, Founder & CEO of Eastern World Technology',
    },
    extended: {
      background:
        'Chief Executive Officer at ETD Digital (2025–present); previously Vice President at Petroxoil Sdn Bhd (2023–2025).',
      experience: 'Executive and business leadership across digital technology and oil & gas.',
      education: 'Logistics degree, UCSI University (in progress).',
    },
  },
  {
    slug: 'edwin-ting',
    name: 'Edwin Ting',
    monogram: 'ET',
    role: 'Founder & CTO',
    descriptor: 'Technology and technical-delivery leadership.',
    bio: 'Edwin leads Eastern World Technology’s technology direction and delivery — defining the technical approach for each project and overseeing implementation, testing and handover. He is responsible for ensuring that what EWT proposes can be built, operated and supported in practice.',
    photo: {
      src: '/images/leadership/edwin-ting.jpg',
      alt: 'Edwin Ting, Founder & CTO of Eastern World Technology',
    },
    extended: {
      background:
        'Digital Solutions Consultant at ETD Digital, architecting AI-powered ERPs, e-commerce platforms and custom AI solutions.',
      experience:
        'Full-stack and AI engineering across ETD Digital, MindHive and MHub, building cloud-native and agentic AI systems.',
      education: 'Computer Science, Monash University (in progress).',
    },
  },
];

/** Founder-level involvement block — docs/09 §6. */
export const FOUNDER_INVOLVEMENT = [
  {
    index: '01',
    title: 'Scope is set by a founder',
    body: 'A founder is directly involved in defining the scope of each engagement.',
  },
  {
    index: '02',
    title: 'Technical direction stays internal',
    body: 'Technical direction is owned internally, not delegated to a third party.',
  },
  {
    index: '03',
    title: 'The same people stay accountable',
    body: 'The people who scope the project remain accountable through delivery and support.',
  },
];
