/**
 * DEVELOPMENT PREVIEW ONLY — docs/09 §6a, docs/03 §22.
 *
 * Bracketed placeholder strings so the client can judge the layout and density
 * of a fuller founder profile before any real biographical copy exists. Nothing
 * here is factual, and nothing here may reach production: it renders only when
 * PREVIEW_EXTENDED_BIOS is true, which defaults to false.
 *
 * Never import this from leadership.ts.
 */
export type BioField = { label: string; placeholder: string };

export const EXTENDED_BIO_FIELDS: BioField[] = [
  {
    label: 'Background',
    placeholder: '[Placeholder — prior role / organisation, to be confirmed]',
  },
  {
    label: 'Experience',
    placeholder: '[Placeholder — relevant experience summary, to be confirmed]',
  },
  {
    label: 'Education',
    placeholder: '[Placeholder — qualification, to be confirmed]',
  },
];

export const PLACEHOLDER_TAG = 'PLACEHOLDER — REPLACE BEFORE LAUNCH';
