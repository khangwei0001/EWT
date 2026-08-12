import type { MetadataRoute } from 'next';
import { COMPANY } from '@/config/company';
import { PROJECTS } from '@/content/projects';

export const dynamic = 'force-static';

/** The six routes, plus any case studies once PROJECTS is populated. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{ path: string; priority: number }> = [
    { path: '/', priority: 1 },
    { path: '/about', priority: 0.8 },
    { path: '/capabilities', priority: 0.8 },
    { path: '/projects', priority: 0.6 },
    { path: '/leadership', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
  ];

  return [
    ...routes.map((route) => ({
      url: `${COMPANY.siteUrl}${route.path}`,
      changeFrequency: 'monthly' as const,
      priority: route.priority,
    })),
    ...PROJECTS.map((project) => ({
      url: `${COMPANY.siteUrl}/projects/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
