import { Section, SectionHeader } from '@/components/ui/Section';
import { PageHeader } from '@/components/blocks/PageHeader';
import { StatelessNotice } from '@/components/cards/StatelessNotice';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { CtaBand } from '@/components/blocks/CtaBand';
import { PROJECTS, CASE_STUDY_FIELDS } from '@/content/projects';
import { PAGE_HEADER_IMAGES } from '@/content/images';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Projects',
  description:
    "EWT's project portfolio and case-study area. Selected engagements will be published here, including anonymised case studies for confidential work.",
  path: '/projects',
});

/**
 * Two states, one page. V1 ships State A because PROJECTS is empty — the brief
 * is explicit that fabricating projects or reusing another company's portfolio
 * is prohibited (docs/08).
 *
 * State B (the card grid) is built and styled below and switches on the moment
 * a real project is added to src/content/projects.ts. No layout work required.
 */
export default function ProjectsPage() {
  const hasProjects = PROJECTS.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        heading="Projects"
        headingId="projects-heading"
        lead="Selected EWT engagements will be published here. Where client names or details cannot be disclosed, projects will be presented as anonymised case studies."
        image={PAGE_HEADER_IMAGES.projects}
      />

      {hasProjects ? (
        <Section tone="alt" labelledBy="project-index-heading">
          <h2 id="project-index-heading" className="type-h2">
            Selected engagements
          </h2>
          <div className="section-body project-grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      ) : (
        <>
          <Section>
            <StatelessNotice />
          </Section>

          {/* Turns the empty state into a demonstration of rigour: the standard
              EWT will publish to, with zero claims attached. */}
          <Section tone="alt" labelledBy="standard-heading">
            <SectionHeader
              eyebrow="Case study standard"
              headingId="standard-heading"
              heading="What a published EWT case study will include."
            />
            <div className="section-body">
              <ol className="case-standard-grid">
                {CASE_STUDY_FIELDS.map((field, i) => (
                  <li key={field} className="case-standard-row">
                    <span className="type-index case-standard-row__index" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="type-body-sm">{field}</span>
                  </li>
                ))}
              </ol>
              <p className="type-body-sm muted-text" style={{ marginTop: 32, maxWidth: '62ch' }}>
                For enterprise or government-related work, case studies may be published in
                anonymised form where client names or sensitive details cannot be disclosed.
              </p>
            </div>
          </Section>
        </>
      )}

      <CtaBand
        heading="Have a technology project or requirement?"
        sub="Speak directly with EWT to discuss the scope and next steps."
      />
    </>
  );
}
