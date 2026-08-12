import { CtaBand } from './CtaBand';
import type { Project } from '@/content/projects';

/**
 * Case-study detail layout — built and styled now, dormant in V1 (docs/03 §15).
 * It generates zero pages while PROJECTS is empty.
 *
 * Field 08 (Technology / Partners) renders only where disclosure is approved,
 * so omission is the default. When isAnonymised is set, the sector stands in
 * for the client everywhere and no identifying imagery is shown.
 */
export function CaseStudyLayout({ project }: { project: Project }) {
  return (
    <>
      <section className="section" aria-labelledby="case-heading">
        <div className="container-shell w-default case-study">
          <div className="case-study__body">
            <p className="eyebrow">{project.clientOrSector}</p>
            <h1 id="case-heading" className="type-h1">
              {project.name}
            </h1>
            {project.context ? (
              <p className="type-lead lead-text" style={{ marginTop: 24 }}>
                {project.context}
              </p>
            ) : null}

            <div className="prose-measure" style={{ marginTop: 48 }}>
              {project.challenge ? (
                <section>
                  <h2 className="type-h3">Challenge / Requirement</h2>
                  <p className="type-body">{project.challenge}</p>
                </section>
              ) : null}

              {project.scope?.length ? (
                <section>
                  <h2 className="type-h3">EWT Scope</h2>
                  <ul className="case-study__list type-body">
                    {project.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.solution ? (
                <section>
                  <h2 className="type-h3">Proposed / Delivered Solution</h2>
                  <p className="type-body">{project.solution}</p>
                </section>
              ) : null}

              {project.implementation ? (
                <section>
                  <h2 className="type-h3">Implementation</h2>
                  <p className="type-body">{project.implementation}</p>
                </section>
              ) : null}

              {project.outcome ? (
                <section className="case-study__outcome">
                  <h2 className="type-h3">Outcome / Measurable Impact</h2>
                  <p className="type-body">{project.outcome}</p>
                </section>
              ) : null}
            </div>
          </div>

          <aside className="case-study__rail" aria-label="Project details">
            <dl className="info-table">
              <div className="info-table__row">
                <dt className="info-table__term type-body-sm">Sector</dt>
                <dd className="info-table__value type-body-sm">{project.clientOrSector}</dd>
              </div>
              <div className="info-table__row">
                <dt className="info-table__term type-body-sm">Status</dt>
                <dd className="info-table__value type-body-sm">{project.status}</dd>
              </div>
              {project.technologies?.length ? (
                <div className="info-table__row">
                  <dt className="info-table__term type-body-sm">Technology</dt>
                  <dd className="info-table__value type-body-sm">
                    {project.technologies.join(', ')}
                  </dd>
                </div>
              ) : null}
            </dl>
            {project.isAnonymised ? (
              <p className="chip chip--neutral type-caption" style={{ marginTop: 16 }}>
                Anonymised case study
              </p>
            ) : null}
          </aside>
        </div>
      </section>

      <CtaBand
        heading="Have a technology project or requirement?"
        sub="Speak directly with EWT to discuss the scope and next steps."
      />
    </>
  );
}
