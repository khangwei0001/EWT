import { Reveal } from '@/components/ui/Reveal';
import { PROCESS } from '@/content/process';

/**
 * The engagement model, numbered 01–04 (docs/03 §17).
 *
 * The numerals are load-bearing here, not decoration: these four steps are an
 * actual sequence taken from the brief's own sentence — understand, define,
 * plan, coordinate — and the order is the point. A quiet 1px spine connects
 * them at ≥1024px; no arrows, no chevrons.
 */
export function ProcessSteps({ variant = 'compact' }: { variant?: 'compact' | 'expanded' }) {
  return (
    <ol className="process-grid">
      {PROCESS.map((step, i) => (
        <Reveal as="li" key={step.index} index={i} className="process-step">
          <span className="type-index process-step__index" aria-hidden="true">
            {step.index}
          </span>
          <h3 className="type-h4 process-step__title">{step.title}</h3>
          <p className="type-body-sm muted-text process-step__body">
            {variant === 'expanded' ? step.expanded : step.support}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
