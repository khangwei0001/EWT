import { Icon } from '@/components/ui/Icon';
import {
  CAPABILITY_FIELD_LABELS,
  type CapabilityCategory,
} from '@/content/capabilities';

/**
 * The detailed four-field card (docs/03 §9). Cards are not links — there are
 * no per-capability pages in V1 — so hover is a quiet affordance only.
 *
 * The heading level is passed in so the page can keep a clean hierarchy.
 */
export function CapabilityCard({
  capability,
  index,
}: {
  capability: CapabilityCategory;
  index: number;
}) {
  const fields = [
    { label: CAPABILITY_FIELD_LABELS.whatItIs, value: capability.whatItIs },
    { label: CAPABILITY_FIELD_LABELS.whenUseful, value: capability.whenUseful },
    { label: CAPABILITY_FIELD_LABELS.typicalScope, value: capability.typicalScope },
    { label: CAPABILITY_FIELD_LABELS.ewtInvolvement, value: capability.ewtInvolvement },
  ];

  return (
    <article id={capability.slug} className="card card-hover cap-card anchor-offset">
      <div className="cap-card__head">
        <span className="icon-chip" aria-hidden="true">
          <Icon name={capability.icon} size={22} />
        </span>
        <span className="type-index cap-card__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h2 className="type-h3 cap-card__title">{capability.title}</h2>
      <p className="type-body-sm muted-text cap-card__summary">{capability.summary}</p>

      <dl className="cap-card__fields">
        {fields.map((field) => (
          <div key={field.label} className="cap-card__field">
            <dt className="eyebrow cap-card__field-label font-black">{field.label}</dt>
            <dd className="type-body-sm">{field.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
