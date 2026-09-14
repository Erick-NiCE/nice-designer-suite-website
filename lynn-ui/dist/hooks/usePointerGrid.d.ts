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
export declare function usePointerGrid<T extends HTMLElement = HTMLElement>(options?: UsePointerGridOptions): RefObject<T>;
