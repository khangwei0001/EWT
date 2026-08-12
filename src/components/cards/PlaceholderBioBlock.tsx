import { EXTENDED_BIO_FIELDS, PLACEHOLDER_TAG } from '@/content/leadership.fixtures';
import { PREVIEW_EXTENDED_BIOS } from '@/config/company';

/**
 * DEVELOPMENT PREVIEW ONLY — MUST NOT SHIP (docs/03 §22, docs/09 §6a).
 *
 * Lets the client judge the layout of a fuller founder profile before any real
 * background copy is approved. Every value is bracketed and obviously not
 * factual, the block is dashed rather than solid so it can never be mistaken
 * for published content, and it renders only when
 * NEXT_PUBLIC_PREVIEW_EXTENDED_BIOS=true — absent from the production build.
 */
export function PlaceholderBioBlock() {
  if (!PREVIEW_EXTENDED_BIOS) return null;

  return (
    <div className="bio-placeholder">
      <span className="bio-placeholder__tag type-caption">{PLACEHOLDER_TAG}</span>
      <dl className="bio-placeholder__fields">
        {EXTENDED_BIO_FIELDS.map((field) => (
          <div key={field.label}>
            <dt className="eyebrow bio-placeholder__label">{field.label}</dt>
            <dd className="type-body-sm muted-text">{field.placeholder}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
