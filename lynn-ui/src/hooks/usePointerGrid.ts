import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

/**
 * `lynn/motion/pointer-grid`
 *
 * The proximity half of Footer's dot grid: the pointer's position inside the
 * element, written out as the same `--lynn-mx` / `--lynn-my` percentages
 * `useTiltSpotlight` already uses, plus a `lynn-grid-lit` class while the
 * pointer is actually over the element.
 *
 * Deliberately the same shape as `useCursorGlow`: a ref, plain listeners,
 * CSS custom properties. There is no per-frame loop and no per-cell math -
 * a radial-gradient mask reading those two properties is what brightens the
 * cells near the cursor (see Footer.css), so the JS only ever sets two
 * numbers. `touchmove` is bound alongside `pointermove` so the effect is not
 * mouse-only; on a touch screen the grid lights under the finger.
 *
 * Under `prefers-reduced-motion: reduce` it binds nothing at all, which
 * leaves the static grid pattern and drops the brightening - exactly the
 * fallback the design system asks for.
 */
export interface UsePointerGridOptions {
  /** Set false to leave the element alone and bind no listeners. */
  enabled?: boolean;
}

export function usePointerGrid<T extends HTMLElement = HTMLElement>(
  options: UsePointerGridOptions = {}
): RefObject<T> {
  const { enabled = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const write = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const px = ((clientX - rect.left) / rect.width) * 100;
      const py = ((clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--lynn-mx', `${px.toFixed(2)}%`);
      el.style.setProperty('--lynn-my', `${py.toFixed(2)}%`);
      el.classList.add('lynn-grid-lit');
    };

    const onPointerMove = (event: PointerEvent) => {
      write(event.clientX, event.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) write(touch.clientX, touch.clientY);
    };

    const onLeave = () => {
      el.classList.remove('lynn-grid-lit');
    };

    el.addEventListener('pointermove', onPointerMove, { passive: true });
    el.addEventListener('pointerleave', onLeave);
    // `touchmove` is not redundant with `pointermove`: a browser that
    // coalesces touch into pointer events fires both, and one that does not
    // fires only this.
    el.addEventListener('touchmove', onTouchMove, { passive: true });
    el.addEventListener('touchend', onLeave);
    el.addEventListener('touchcancel', onLeave);

    return () => {
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', onLeave);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onLeave);
      el.removeEventListener('touchcancel', onLeave);
      el.classList.remove('lynn-grid-lit');
    };
  }, [enabled]);

  return ref;
}
