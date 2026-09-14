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
export declare function useMagneticButton<T extends HTMLElement = HTMLElement>(options?: UseMagneticButtonOptions): RefObject<T>;
