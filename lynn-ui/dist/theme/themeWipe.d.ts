import type { LynnTheme } from './ThemeProvider.js';
export interface ThemeWipeOptions {
    /** The mode being revealed. Picks which fill the overlay wears. */
    theme: LynnTheme;
    /**
     * The element the circle grows out of - the segment that was clicked. Its
     * center is the circle's center. Without one there is nothing to originate
     * from, so the theme flips instantly.
     */
    origin?: Element | null;
    /**
     * Flips the theme. Called exactly once, at the moment the circle has the
     * viewport covered - or immediately, when the wipe is skipped.
     */
    apply: () => void;
}
/**
 * Plays the reveal and flips the theme underneath it.
 *
 * Every bail-out path still calls `apply()`, so the theme change is never
 * lost to a missing origin, a reduced-motion preference, an engine without
 * `Element.animate`, or a second click arriving mid-sweep. The wipe is
 * decoration on top of a state change, never the thing that performs it.
 */
export declare function runThemeWipe(options: ThemeWipeOptions): void;
