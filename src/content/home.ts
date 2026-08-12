/**
 * Home page content — docs/05-page-home.md, docs/11-copy-deck.md §2.
 * Tile labels and the six "Why EWT" headings are verbatim from the brief.
 */

export type HomeTile = { label: string; icon: string; href: string };

/** Ten items, in the brief's order. Labels are exact strings — do not shorten. */
export const HOME_TILES: HomeTile[] = [
  {
    label: 'Digital Transformation Projects',
    icon: 'arrow-right-left',
    href: '/capabilities#digital-transformation',
  },
  {
    label: 'Enterprise Technology Projects',
    icon: 'building-2',
    href: '/capabilities#enterprise-custom-systems',
  },
  { label: 'Systems Integration', icon: 'network', href: '/capabilities#systems-integration' },
  {
    label: 'Custom Business Systems',
    icon: 'blocks',
    href: '/capabilities#enterprise-custom-systems',
  },
  {
    label: 'Technology Consultancy & Advisory',
    icon: 'clipboard-list',
    href: '/capabilities#technology-consultancy-advisory',
  },
  {
    label: 'Data & Dashboard Solutions',
    icon: 'bar-chart-3',
    href: '/capabilities#data-management-dashboards',
  },
  {
    label: 'Process Automation',
    icon: 'workflow',
    href: '/capabilities#automation-process-improvement',
  },
  {
    label: 'Corporate Digital Platforms',
    icon: 'globe',
    href: '/capabilities#corporate-digital-platforms',
  },
  {
    label: 'Technology Implementation',
    icon: 'cpu',
    href: '/capabilities#technology-implementation-project-support',
  },
  {
    label: 'Managed Project Support',
    icon: 'shield-check',
    href: '/capabilities#technology-implementation-project-support',
  },
];

/** Six approved "Why EWT" points. Headings verbatim; support lines DRAFT. */
export const WHY_EWT = [
  {
    heading: 'Understanding of the Sarawak operating environment',
    support:
      'We work within the realities of how organisations in Sarawak plan, procure and operate.',
  },
  {
    heading: 'Structured project planning and delivery',
    support: 'Scope, sequence and responsibilities are defined before implementation begins.',
  },
  {
    heading: 'Solutions tailored to actual organisational requirements',
    support: 'We design around the requirement in front of us, not around a fixed product.',
  },
  {
    heading: 'Ability to coordinate the appropriate technology expertise',
    support:
      'We bring together the specific expertise a project needs, and manage it as one engagement.',
  },
  {
    heading: 'Implementation-minded approach, not consultancy-only',
    support: 'Our recommendations are made with implementation and operation in mind.',
  },
  {
    heading: 'Long-term support mindset',
    support: 'We plan for the system’s life after go-live, not just its delivery.',
  },
];

/** The five focus areas named in the brief for the Sarawak Focus section. */
export const SARAWAK_FOCUS_AREAS = [
  'Digital transformation',
  'Enterprise systems',
  'Automation',
  'Data',
  'Technology implementation',
];

export const SARAWAK_FOCUS_COPY = [
  'Eastern World Technology is focused on Sarawak. Our attention is on how organisations here actually operate — how requirements are defined, how decisions are made, and what it takes for a system to be adopted and supported once it is live.',
  'We are established to contribute to technology adoption and modernisation in Sarawak across digital transformation, enterprise systems, automation, data and technology implementation.',
];
