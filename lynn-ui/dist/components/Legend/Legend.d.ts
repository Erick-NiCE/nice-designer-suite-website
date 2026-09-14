import type { CSSProperties, ReactNode } from 'react';
export type LegendVariant = 'dot' | 'pill';
export interface LegendItem {
    /** Any CSS color. The dot's fill, or the pill's text and 15% background. */
    swatch: string;
    label: ReactNode;
    /** Trailing explanation. Only the `pill` variant renders one. */
    description?: ReactNode;
}
export interface LegendProps {
    items: LegendItem[];
    /**
     * `dot` - 8px colored disc before the label (roadmap.html's `.legend`).
     * `pill` - the label itself becomes a tinted uppercase pill, optionally
     * followed by a description (the-suite.html's `.legend-pill`).
     */
    variant?: LegendVariant;
    /** Small uppercase heading before the row, e.g. `Status`. */
    label?: string;
    className?: string;
    style?: CSSProperties;
}
/**
 * A color-key row.
 *
 * `dot` is roadmap.html's `.legend` / `.legend-item` / `.legend-dot`; `pill`
 * is the-suite.html's `.legend-pill` + `.legend-desc` pairing, where the key
 * *is* the badge being explained rather than a swatch beside it.
 *
 * Usage: `variant="dot"` when the legend explains colors used elsewhere (a
 * `Timeline`'s phase dots, a chart), `pill` when the thing being explained is
 * a `Badge` the reader will meet on the page. `item.swatch` is any CSS color,
 * forwarded as `--lynn-legend-swatch`, so feed it the same
 * `designTokens.color.accent[...]` value the real element uses or the key
 * stops matching what it keys.
 *
 * Don't: don't set `item.description` on the `dot` variant - only `pill`
 * renders one, so the text disappears with no warning. And keep the row short:
 * it is a flex row with no wrapping strategy beyond the container's, so a
 * ten-item legend turns into a wall of chips.
 */
export declare function Legend(props: LegendProps): import("react").JSX.Element;
