import Image from 'next/image';
import { HERO_RENDERS } from '@/content/images';

/**
 * The Home hero's right-hand stage: three interface renders, one visible at a
 * time, looping for as long as the page is open.
 *
 * The timing is fixed by the client's spec — 2s before the first render fades
 * in, 4s held, then 1.5s of empty stage before the next one starts. It is one
 * CSS animation per frame, offset by a whole slot each, so nothing here needs
 * JavaScript, a hydration boundary, or a timer that can drift. The arithmetic
 * behind the keyframe percentages is written out in globals.css.
 *
 * Hidden from assistive technology: the renders are generic mockups that
 * illustrate the headline, and reading three of them out adds nothing. They are
 * not EWT project work and nothing here may suggest otherwise (docs/01 §7).
 */
export function HeroStage() {
  return (
    <div className="hero-stage" aria-hidden="true">
      {HERO_RENDERS.map((render, i) => (
        <Image
          key={render.src}
          src={render.src}
          alt=""
          width={render.width}
          height={render.height}
          priority={i === 0}
          className="hero-stage__frame"
        />
      ))}
    </div>
  );
}
