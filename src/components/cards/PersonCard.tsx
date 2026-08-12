import type { Person } from '@/content/leadership';

/** Compact form used on the Home leadership preview. No photo — text only. */
export function PersonPreviewCard({ person }: { person: Person }) {
  return (
    <article className="person-preview">
      <p className="eyebrow person-preview__role">{person.role}</p>
      <h3 className="type-h3">{person.name}</h3>
      <p className="type-body-sm muted-text person-preview__descriptor">{person.descriptor}</p>
    </article>
  );
}

/** Full profile block used on the Leadership page. No photo — text only. */
export function PersonProfile({
  person,
  children,
}: {
  person: Person;
  children?: React.ReactNode;
}) {
  return (
    <article className="person-profile">
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
