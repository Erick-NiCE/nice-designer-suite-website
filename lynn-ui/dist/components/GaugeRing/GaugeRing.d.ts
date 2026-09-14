import type { CSSProperties, ReactNode } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';
export interface GaugeRingProps {
    /** Filled amount, clamped to `0..max`. */
    value: number;
    /** The value that reads as a full ring. */
    max?: number;
    /** Outer square size in px. 110 is the plugin's audit-score ring. */
    size?: number;
    /** Ring width in px. Defaults to `size / 11`, the source's 10-at-110 ratio. */
    thickness?: number;
    /** Accent used by the filled arc. */
    tone?: AccentColor;
    /** Small caption under the number, e.g. `Compliance`. */
    label?: ReactNode;
    /**
     * Overrides the centered readout. Defaults to the share of `max` as a whole
     * percentage, which is what a ring communicates well; pass a formatter when
     * the raw count matters more (`(value) => value`).
     */
    format?: (value: number, max: number) => ReactNode;
    /** Accessible name. Defaults to the visible `label` when it is a string. */
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
}
/**
 * The radial gauge, ported from the plugin's `.score-ring`: a dim track
 * circle plus a `stroke-dasharray`-clipped arc, with the SVG rotated -90deg
 * so the arc starts at 12 o'clock.
 *
 * The arc animates from empty to `value` once on mount - the fill is the
 * whole point of the ring, and a gauge that is simply *there* at its final
 * length reads as a static graphic.
 *
 * The ring sits on a raised neumorphic plate (`--lynn-shadow-raised`) that
 * takes a quick 180ms imprint (`--lynn-shadow-pressed`) while the pointer is
 * over it, so a dial that is only ever read still answers to being touched.
 *
 * Usage: `size` is the only dimension you normally set - `thickness` derives
 * from it (`size / 11`, the source's 10-at-110 ratio) and so does the radius,
 * so one number rescales the whole dial. Use `format` when the raw count
 * matters more than the percentage the ring communicates by shape
 * (`format={(value) => value}`), and set `max` for any scale that is not 0-100.
 *
 * Don't: don't drive `value` from a ticking counter and expect the arc to
 * animate along with it - the fill-from-empty transition runs once on mount,
 * and every later change just re-points the dash offset. And don't leave both
 * `label` and `ariaLabel` off: the wrapper is a `role="progressbar"`, so with
 * no name it announces a bare number with nothing to attach it to.
 */
export declare function GaugeRing(props: GaugeRingProps): import("react").JSX.Element;
