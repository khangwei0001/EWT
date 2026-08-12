import { notFound } from 'next/navigation';
import { CaseStudyLayout } from '@/components/blocks/CaseStudyLayout';
import { PROJECTS } from '@/content/projects';
import { pageMetadata } from '@/lib/seo';

/**
 * DORMANT CASE-STUDY ROUTE — docs/08 §4.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * TO ACTIVATE: rename this file to `page.tsx`. That is the whole step, and it
 * is only ever needed once.
 * ────────────────────────────────────────────────────────────────────────────
 *
 * Why it is parked rather than live: Next.js refuses to build a dynamic route
 * under `output: 'export'` when generateStaticParams() returns an empty array —
 * it reports the function as missing. V1 ships with PROJECTS empty by design,
 * so the choices were to park the file or to emit a placeholder URL that leads
 * nowhere. A junk route in the production export would breach docs/08 §6 ("no
 * fixture/sample project is reachable in the production build"), so the file is
 * parked instead.
 *
 * It is still type-checked by `npm run typecheck` (tsconfig includes every
 * .tsx), and CaseStudyLayout is styled and verified against
 * src/content/projects.fixtures.ts — so nothing here is unproven code.
 *
 * Once one real project exists, rename this file and every subsequent project
 * is a src/content/projects.ts edit only, exactly as the brief requires.
 */
export const dynamicParams = false;

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((entry) => entry.slug === slug);
  if (!project) return {};

  return pageMetadata({
    title: `${project.name} | Projects`,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return <CaseStudyLayout project={project} />;
}
