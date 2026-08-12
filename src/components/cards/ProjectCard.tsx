import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/content/projects';

/**
 * Built, styled and verified against fixtures — then shipped dormant, because
 * PROJECTS is empty in V1 (docs/03 §14, docs/08 §1). Adding a project later is
 * a data-file edit, not a redesign.
 *
 * clientOrSector is never rendered empty: where a client cannot be named, the
 * sector stands in its place.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card-hover project-card">
      <Link href={`/projects/${project.slug}`} className="project-card__link">
        <div className="project-card__thumb">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail.src}
              alt={project.thumbnail.alt}
              width={480}
              height={300}
              loading="lazy"
            />
          ) : (
            /* Navy geometric fallback, cut at the mark's shear angle. */
            <div className="project-card__thumb-fallback grid-texture" aria-hidden="true" />
          )}
        </div>

        <div className="project-card__body">
          <p className="eyebrow project-card__sector">{project.clientOrSector}</p>
          <h3 className="type-h3">{project.name}</h3>
          <p className="type-body-sm muted-text project-card__summary">{project.summary}</p>

          <div className="project-card__tags">
            <span className="chip type-caption">{project.status}</span>
            {project.isAnonymised ? (
              <span className="chip chip--neutral type-caption">Anonymised case study</span>
            ) : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
