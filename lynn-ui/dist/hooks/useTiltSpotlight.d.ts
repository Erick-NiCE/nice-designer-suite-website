import type { RefObject } from 'react';
/**
 * `lynn/motion/card-tilt-spotlight`
 *
 * Combines the two real handlers on the source site:
 *   - wings-2026.html's `.contact-card` tilt: max 7 degrees, 900px
 *     perspective, and an early `prefers-reduced-motion` bail-out.
 *   - index.html's spotlight: `--mx` / `--my` percentages that a `::after`
 *     radial-gradient reads (see Card.css), reset to 50% on leave.
 */
export interface UseTiltSpotlightOptions {
    /** Maximum rotation in degrees on either axis. Source value: 7. */
    maxTilt?: number;
    /** CSS perspective depth in px. Source value: 900. */
    perspective?: number;
    /** Lift applied while hovered, in px. Source value: -1. */
    lift?: number;
    /** Set false to leave the element alone. */
    enabled?: boolean;
}
export declare function useTiltSpotlight<T extends HTMLElement = HTMLElement>(options?: UseTiltSpotlightOptions): RefObject<T>;
