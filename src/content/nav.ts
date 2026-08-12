/** Navigation — order is fixed by the brief (docs/04 §2). */
export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Projects', href: '/projects' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Contact', href: '/contact' },
];

export const CTA = {
  primary: 'Discuss a Project',
  primaryLong: 'Discuss a Project with Our CEO',
  secondary: 'Explore Capabilities',
  whatsAppAria: 'Discuss a project with our CEO on WhatsApp',
} as const;
