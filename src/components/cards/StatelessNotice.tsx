import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { whatsAppHref } from '@/config/company';
import { CTA } from '@/content/nav';

/**
 * The Projects "Coming Soon" panel (docs/03 §13).
 *
 * It must read as deliberate, not broken: no 404 framing, no construction
 * iconography, no spinner, no apology. The honest empty state is a credibility
 * asset here — the brief treats fabrication as the risk, not emptiness.
 */
export function StatelessNotice() {
  return (
    <div className="notice-panel">
      <span className="icon-chip notice-panel__chip" aria-hidden="true">
        <Icon name="folder-open" size={22} />
      </span>

      <h2 className="type-h2 notice-panel__heading">Project Portfolio — Coming Soon</h2>

      <p className="type-body notice-panel__body">
        EWT is an early-stage company and publishes only work that is genuinely its own and
        approved for release. Project entries and case studies will be added here as engagements
        are completed and disclosure is agreed.
      </p>

      <div className="notice-panel__actions">
        <Button href={whatsAppHref()} external size="md" blockOnMobile>
          {CTA.primary}
        </Button>
        <Button href="/capabilities" variant="secondary" size="md" blockOnMobile>
          {CTA.secondary}
        </Button>
      </div>
    </div>
  );
}
