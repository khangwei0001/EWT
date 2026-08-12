import { Button } from '@/components/ui/Button';
import { whatsAppHref } from '@/config/company';
import { CTA } from '@/content/nav';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Page not found',
  description: 'The page you requested could not be found.',
  path: '/404',
});

/** Branded and minimal: heading, one line, three routes back in. No illustration. */
export default function NotFound() {
  return (
    <section className="section" aria-labelledby="notfound-heading">
      <div className="container-shell w-text" style={{ textAlign: 'center' }}>
        <span className="rule-accent" style={{ margin: '0 auto' }} aria-hidden="true" />
        <p className="eyebrow" style={{ marginTop: 24 }}>
          404
        </p>
        <h1 id="notfound-heading" className="type-h1">
          Page not found
        </h1>
        <p className="type-lead lead-text" style={{ marginTop: 16 }}>
          The page you requested could not be found. It may have been moved, or the link may be out
          of date.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 12,
            marginTop: 40,
          }}
        >
          <Button href="/" size="md">
            Return home
          </Button>
          <Button href="/capabilities" variant="secondary" size="md">
            {CTA.secondary}
          </Button>
          <Button href={whatsAppHref()} external variant="secondary" size="md">
            {CTA.primary}
          </Button>
        </div>
      </div>
    </section>
  );
}
