import type { CSSProperties, ReactNode } from 'react';
export type TooltipSide = 'bottom' | 'right';
export interface TooltipProps {
    /**
     * The bubble's text. Long text wraps (the bubble is capped at 220px) and a
     * `\n` starts a new line.
     */
    label: string;
    /**
     * Where the bubble sits when there is room. `bottom` (default) centers it
     * under the target; `right` right-aligns it to the target's right edge. In
     * both cases it is clamped to the viewport, and it flips above the target
     * when there is no room below.
     */
    side?: TooltipSide;
    /** The element the tooltip describes. */
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}
/**
 * A hover/focus tooltip.
 *
 * One bubble is portaled to `document.body` and placed from the target's real
 * `getBoundingClientRect()`, measured before paint. That is what lets it do
 * three things a CSS-only bubble cannot: it sizes to its text (wrapping past
 * 220px), it can never be clipped by an `overflow: hidden` or scrolling
 * ancestor, and it stays inside the viewport, flipping above the target when
 * there is no room below.
 *
 * When `children` is a single DOM element (`<button>`, `<a>`, `<input>`, ...)
 * the hover/focus handlers are cloned onto it, so the tooltip adds no box to
 * the layout and a focusable target reveals the bubble on keyboard focus.
 * Anything else - text, a fragment, several children, or a lynn-ui component,
 * none of which forward handlers to the DOM - gets an inline-flex wrapper,
 * which is given `tabIndex={0}` so the bubble stays keyboard-reachable.
 *
 * Usage: best on a single focusable DOM element. Use `side="right"` for a
 * target near a container's right edge. Keep the label short: it explains a
 * control, it is not a place for content people must read.
 *
 * Don't: don't put anything interactive in the label (it is plain text and
 * ignores the pointer), and don't rely on it for information a touch user
 * needs - there is no hover on touch, so the same text must be reachable some
 * other way.
 */
export declare function Tooltip(props: TooltipProps): import("react").JSX.Element;
