import Image from 'next/image';
import { cn } from '@/lib/cn';
import type { Person } from '@/content/leadership';

/**
 * Founder portrait — docs/03 §11, docs/09 §5.
 *
 * Falls back to a navy panel with the founder's monogram when no photo is set.
 */
function Portrait({ person }: { person: Person }) {
  if (person.photo) {
    return (
      <Image
        src={person.photo.src}
        alt={person.photo.alt}
        width={440}
        height={550}
        className="person-portrait"
      />
    );
  }

  return (
    <div className="person-portrait person-portrait--monogram" role="img" aria-label={`${person.name} — portrait to follow`}>
      <span aria-hidden="true">{person.monogram}</span>
    </div>
  );
}

/** Compact form used on the Home leadership preview. */
export function PersonPreviewCard({ person }: { person: Person }) {
  return (
    <article className="person-preview">
      <Portrait person={person} />
      <p className="eyebrow person-preview__role">{person.role}</p>
      <h3 className="type-h3">{person.name}</h3>
      <p className="type-body-sm muted-text person-preview__descriptor">{person.descriptor}</p>
    </article>
  );
}

/** Full profile row used on the Leadership page. */
export function PersonProfile({
  person,
  reversed = false,
  children,
}: {
  person: Person;
  reversed?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <article className={cn('person-profile', reversed && 'is-reversed')}>
      <div className="person-profile__media">
        <Portrait person={person} />
      </div>
      <div className="person-profile__body">
        <p className="eyebrow">{person.role}</p>
        <h2 className="type-h1">{person.name}</h2>
        <p className="type-lead lead-text person-profile__descriptor">{person.descriptor}</p>
        <p className="type-body muted-text person-profile__bio">{person.bio}</p>
        {children}
      </div>
    </article>
  );
}
