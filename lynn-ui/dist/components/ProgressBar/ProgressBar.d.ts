import type { CSSProperties, ReactNode } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';
export interface ProgressBarProps {
    /** Progress so far, clamped to `0..max`. Ignored when `indeterminate`. */
    value?: number;
    /** The value that counts as complete. */
    max?: number;
    /** Accent used by the filled bar. */
    tone?: AccentColor;
    /**
     * Unknown-duration loading: a 40%-wide bar slides across the track instead
     * of filling it (the plugin's `.tab-progress-bar` treatment).
     */
    indeterminate?: boolean;
    /** Caption under the track. */
    label?: ReactNode;
    /** Accessible name, needed when there is no visible `label`. */
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
}
/**
 * The linear progress track, ported from the plugin's `.progress-bar-bg` /
 * `.progress-bar-fill`, plus its separate indeterminate top-of-tab bar.
 *
 * Usage: determinate by default - pass `value` (clamped to `0..max`) and set
 * `max` for any scale that is not a percentage. Switch to `indeterminate` for
 * work whose length you genuinely cannot know, and pass `ariaLabel` whenever
 * there is no visible `label`, since the `role="progressbar"` is on the track
 * rather than on the labeled wrapper. Use `GaugeRing` instead when the number
 * is a score being read rather than progress being watched.
 *
 * Don't: don't pass `value` alongside `indeterminate` - the width is dropped
 * and so are all three `aria-value*` attributes, so the number is invisible to
 * everyone, sighted or not. And don't leave it indeterminate as a permanent
 * decoration: a bar that sweeps forever reads as a hung process.
 */
export declare function ProgressBar(props: ProgressBarProps): import("react").JSX.Element;
