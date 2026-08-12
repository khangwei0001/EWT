import type { Metadata } from 'next';
import { COMPANY } from '@/config/company';

type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Filename under /og. Falls back to the default share card. */
  ogImage?: string;
};

/**
 * Builds per-page metadata. Every URL derives from COMPANY.siteUrl so the whole
 * set regenerates when the final domain is confirmed (docs/04 §3).
 */
export function pageMetadata({ title, description, path, ogImage }: PageSeo): Metadata {
  const url = `${COMPANY.siteUrl}${path}`;
  const image = `${COMPANY.siteUrl}/og/${ogImage ?? 'og-default.png'}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: COMPANY.name,
      locale: 'en_MY',
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Eastern World Technology — Technology, Structured for Business.',
        },
      ],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

/**
 * Organization schema. Only claims that are verifiable from the brief — no
 * rating, review, award, credential or client reference. Emitted on Home only.
 */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: `${COMPANY.siteUrl}/`,
    logo: `${COMPANY.siteUrl}/logo/logo-mark.png`,
    slogan: COMPANY.tagline,
    description:
      'A Sarawak-focused technology project and solutions company helping organisations turn requirements into structured, implementable technology projects.',
    identifier: COMPANY.registrationNo,
    areaServed: { '@type': 'AdministrativeArea', name: 'Sarawak, Malaysia' },
    // PLACEHOLDER values — keep in sync with src/config/company.ts
    telephone: COMPANY.officePhone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Petaling Jaya',
      addressRegion: 'Selangor',
      addressCountry: 'MY',
    },
    founder: [
      { '@type': 'Person', name: 'Wesley Chai', jobTitle: 'Founder & CEO' },
      { '@type': 'Person', name: 'Edwin Ting', jobTitle: 'Founder & CTO' },
    ],
  };
}
