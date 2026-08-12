/**
 * Projects — docs/08-page-projects.md.
 *
 * THIS ARRAY IS INTENTIONALLY EMPTY IN V1. The brief is explicit: do not
 * fabricate projects or reuse another company's portfolio (p.9). The page
 * renders its "Coming Soon" state whenever `PROJECTS.length === 0`.
 *
 * To publish a project later: add an entry here and drop its thumbnail into
 * public/images/projects/. No layout work is required.
 */
export type Project = {
  slug: string;
  name: string;
  /** Never empty. If the client cannot be named, give the sector. */
  clientOrSector: string;
  isAnonymised: boolean;
  summary: string;
  thumbnail?: { src: string; alt: string };
  status: 'In progress' | 'Delivered' | 'Ongoing support';
  tags?: string[];
  /** Renders only when disclosure is approved — omission is the default. */
  technologies?: string[];
  context?: string;
  challenge?: string;
  scope?: string[];
  solution?: string;
  implementation?: string;
  outcome?: string;
};

export const PROJECTS: Project[] = [];

/** The brief's ten-field case-study template, shown as the published standard. */
export const CASE_STUDY_FIELDS = [
  'Project Name',
  'Client / Sector',
  'Project Context',
  'Challenge / Requirement',
  'EWT Scope',
  'Proposed / Delivered Solution',
  'Implementation',
  'Technology / Partners (where disclosure is approved)',
  'Outcome / Measurable Impact',
  'Project Status',
];
