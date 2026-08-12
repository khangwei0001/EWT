import Link from 'next/link';
import { COMPANY, whatsAppHref } from '@/config/company';
import { NAV, CTA } from '@/content/nav';
import { Logo } from './Logo';

/**
 * Minimal by instruction (docs/03 §3): logo, descriptor, navigation,
 * registration number, business hours and the CEO WhatsApp CTA. No email,
 * phone, address, social icons, newsletter or "built by" line.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="site-footer on-inverse">
      <div className="container-shell w-wide">
        <span className="rule-accent" aria-hidden="true" />

        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Logo height={30} inverse withWordmark={false} />
            <p className="type-h4" style={{ color: 'var(--text-on-inverse)', marginTop: 20 }}>
              {COMPANY.tagline}
            </p>
            <p className="type-body-sm muted-text" style={{ maxWidth: '44ch', marginTop: 12 }}>
              A Sarawak-focused technology project and solutions company.
            </p>
          </div>

          <nav aria-label="Footer" className="site-footer__nav">
            <h2 className="eyebrow site-footer__heading">Navigate</h2>
            <ul className="site-footer__links">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__company">
            <h2 className="eyebrow site-footer__heading">Company</h2>

            <p className="type-caption muted-text">Registration No.</p>
            <p className="type-small tabular" style={{ color: 'var(--text-on-inverse)' }}>
              {COMPANY.registrationNo}
            </p>

            {COMPANY.businessHours ? (
              <>
                <p className="type-caption muted-text" style={{ marginTop: 20 }}>
                  Business Hours
                </p>
                <p className="type-small tabular" style={{ color: 'var(--text-on-inverse)' }}>
                  {COMPANY.businessHours}
                </p>
              </>
            ) : null}
          </div>

          <div className="site-footer__cta">
            <a
              href={whatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-inverse-primary btn-md"
            >
              {CTA.primary}
            </a>
          </div>
        </div>

        <div className="site-footer__base">
          <p className="type-caption muted-text">
            © {year} Eastern World Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
