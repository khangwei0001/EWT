import { PREVIEW_ANALYTICS_UI } from '@/config/company';

/**
 * INERT PREVIEW UI — docs/03 §21.
 *
 * The client wanted to see what a consent notice would look like before
 * choosing a tool. Nothing here tracks anything: no script loads, no cookie is
 * set, and the "Preferences" control is deliberately non-functional. Because no
 * tracking is active, no privacy policy is required yet — the moment a real
 * analytics script is wired in, that changes, and this component should be
 * deleted rather than adapted.
 *
 * Renders only when NEXT_PUBLIC_PREVIEW_ANALYTICS_UI=true, which is absent from
 * the production build.
 */
export function AnalyticsNotice() {
  if (!PREVIEW_ANALYTICS_UI) return null;

  return (
    <div className="analytics-notice" role="note" aria-label="Analytics preview notice">
      <p className="type-body-sm">This site does not currently collect analytics.</p>
      <span className="analytics-notice__button type-body-sm" aria-disabled="true">
        Preferences
      </span>
    </div>
  );
}
