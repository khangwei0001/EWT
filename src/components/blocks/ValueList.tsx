import { WHY_EWT } from '@/content/home';

/**
 * "Why EWT" — six approved points (docs/03 §10).
 *
 * Set as a document, not a grid of boxes: hairline separators, no cards, no
 * shadows, no hover. Rows are non-interactive.
 *
 * Points 05 and 06 (implementation-minded, long-term support) are the sharpest
 * differentiators for a procurement reader, so they sit in the final row at
 * full contrast rather than trailing off in a low-contrast list.
 */
export function ValueList() {
  return (
    <ol className="value-grid">
      {WHY_EWT.map((item, i) => (
        <li key={item.heading} className="value-row">
          <span className="type-index value-row__index" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="type-h4 value-row__heading">{item.heading}</h3>
            <p className="type-body-sm muted-text value-row__support">{item.support}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
