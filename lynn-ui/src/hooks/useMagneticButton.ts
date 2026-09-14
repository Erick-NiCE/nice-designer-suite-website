import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

/**
 * `lynn/motion/magnetic-button`
 *
 * Ported from index.html's primary-action handler: while the pointer is over
 * the element it drifts 28% of the way toward the cursor (measured from the
 * element's own center) and scales to 1.04, then springs back on leave with
 * an overshoot curve.
 */
export interface UseMagneticButtonOptions {
  /** Fraction of the cursor offset the element drifts. Source value: 0.28. */
  strength?: number;
  /** Scale applied while hovered. Source value: 1.04. */
  scale?: number;
  /** Set false to leave the element alone. */
  enabled?: boolean;
}

const DRIFT_TRANSITION = 'transform 0.12s ease';
/** Source spring curve - the one deliberate non-`--lynn-ease` transition. */
const SPRING_TRANSITION = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';

export function useMagneticButton<T extends HTMLElement = HTMLElement>(
  options: UseMagneticButtonOptions = {}
): RefObject<T> {
  const { strength = 0.28, scale = 1.04, enabled = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = (event.clientX - rect.left - rect.width / 2) * strength;
      const dy = (event.clientY - rect.top - rect.height / 2) * strength;
      el.style.transition = DRIFT_TRANSITION;
      el.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
    };

    const onLeave = () => {
      el.style.transition = SPRING_TRANSITION;
      el.style.transform = '';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.style.transition = '';
      el.style.transform = '';
    };
  }, [strength, scale, enabled]);

  return ref;
}
