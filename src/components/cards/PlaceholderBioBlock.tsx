import { PREVIEW_EXTENDED_BIOS } from '@/config/company';
import type { Person } from '@/content/leadership';

/**
 * DEVELOPMENT PREVIEW ONLY — MUST NOT SHIP (docs/03 §22, docs/09 §6a).
 *
 * Renders the founder-supplied extended bio (Background/Experience/Education)
 * beneath the standard profile bio. Content is real (condensed from the
 * founders' own LinkedIn profiles) but not yet client-approved for public
 * launch copy, so this stays gated behind NEXT_PUBLIC_PREVIEW_EXTENDED_BIOS
 * — absent from the production build.
 */
export function PlaceholderBioBlock({ person }: { person: Person }) {
  if (!PREVIEW_EXTENDED_BIOS || !person.extended) return null;

  const { background, experience, education } = person.extended;
  const fields = [
    { label: 'Background', value: background },
    { label: 'Experience', value: experience },
    { label: 'Education', value: education },
  ];

  return (
    <div className="bio-placeholder">
      <span className="bio-placeholder__tag type-caption">MORE INFORMATION</span>
      <dl className="bio-placeholder__fields">
        {fields.map((field) => (
          <div key={field.label}>
            <dt className="eyebrow bio-placeholder__label">{field.label}</dt>
            <dd className="type-body-sm muted-text">{field.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
