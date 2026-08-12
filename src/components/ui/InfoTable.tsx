import { cn } from '@/lib/cn';

export type InfoRow = {
  term: string;
  value: React.ReactNode;
  /** Registration and phone numbers use tabular figures. */
  tabular?: boolean;
};

/**
 * A definition list, not a table — this is company information, not tabular
 * data (docs/03 §16). Rows with an empty value are skipped entirely: the live
 * site never renders the literal string "TBD".
 */
export function InfoTable({ rows }: { rows: InfoRow[] }) {
  const present = rows.filter((row) => row.value !== '' && row.value != null);

  return (
    <dl className="info-table">
      {present.map((row) => (
        <div key={row.term} className="info-table__row">
          <dt className="info-table__term type-body-sm">{row.term}</dt>
          <dd className={cn('info-table__value type-body-sm', row.tabular && 'tabular')}>
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
