/**
 * DEVELOPMENT FIXTURES — docs/08 §1.
 *
 * Used only to verify that ProjectCard and CaseStudyLayout render correctly
 * before real projects exist. These are NOT EWT projects and must never be
 * imported by a production route or deployed as visible content.
 *
 * Every entry is written as an obvious sample, not as a plausible claim.
 */
import type { Project } from './projects';

export const PROJECT_FIXTURES: Project[] = [
  {
    slug: 'sample-operational-reporting',
    name: '[Sample] Operational reporting consolidation',
    clientOrSector: 'Sample sector entry (not a real engagement)',
    isAnonymised: true,
    summary:
      '[Sample fixture] Consolidation of departmental reporting into a single management view.',
    status: 'Delivered',
  },
  {
    slug: 'sample-workflow-platform',
    name: '[Sample] Internal workflow platform',
    clientOrSector: 'Sample sector entry (not a real engagement)',
    isAnonymised: false,
    summary: '[Sample fixture] Replacement of three internal tools with one operational system.',
    status: 'In progress',
    tags: ['Enterprise systems', 'Integration'],
  },
  {
    slug: 'sample-integration-programme',
    name: '[Sample] Systems integration programme',
    clientOrSector: 'Sample sector entry (not a real engagement)',
    isAnonymised: true,
    summary: '[Sample fixture] Interfaces between an established platform and a new system.',
    status: 'Ongoing support',
  },
];
