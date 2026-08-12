import Image from 'next/image';
import { SectionHeader } from '@/components/ui/Section';
import type { SiteImage } from '@/content/images';

/**
 * How every interior page opens: the h1 block on the left, one image on the
 * right, cut at the same shear the mark is built from (`--shear`). It replaces
 * the plain white opener the four pages shared, and gives each of them a face
 * without adding a second navy band — Home is still the only page carrying two
 * (docs/05).
 *
 * The image is decorative on every page that uses this, so it is announced to
 * nobody; the h1 and lead carry the meaning. Keep it that way — nothing but
 * the h1 and the lead may go in here. Anything else lands on top of the
 * picture at desktop widths, where the frame owns the right-hand half.
 *
 * Below 1024px the shear is dropped and the image becomes a straight
 * full-bleed band under the text. A parallelogram needs width to read as
 * anything other than a mistake.
 */
export function PageHeader({
  eyebrow,
  heading,
  headingId,
  lead,
  image,
}: {
  eyebrow: string;
  heading: string;
  headingId: string;
  lead?: string;
  image: SiteImage;
}) {
  return (
    <section className="section page-header" aria-labelledby={headingId}>
      <div className="container-shell w-default page-header__inner">
        <SectionHeader
          eyebrow={eyebrow}
          heading={heading}
          headingId={headingId}
          as="h1"
          lead={lead}
          accentRule
        />
      </div>

      <div className="page-header__media" aria-hidden="true">
        <Image
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
        />
      </div>
    </section>
  );
}
