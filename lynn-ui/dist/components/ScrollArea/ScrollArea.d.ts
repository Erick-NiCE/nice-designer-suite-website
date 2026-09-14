import type { CSSProperties, ReactNode } from 'react';
import type { ScrollbarOrientation } from '../../hooks/useCustomScrollbar.js';
export type ScrollAreaOrientation = ScrollbarOrientation;
export interface ScrollAreaProps {
    /** The scrolling content. */
    children: ReactNode;
    /**
     * Corner radius the track curves through, as a CSS length. Set it to the
     * container's *own* `border-radius`: the track is traced concentrically
     * inside that curve, so this is the one value that decides whether the bar
     * follows the card's silhouette or cuts across it. Any CSS length works -
     * `px`, `rem`, a `calc()` - it is resolved through a real border-radius
     * before the path is built. Defaults to `var(--lynn-radius-lg)`.
     */
    radius?: string;
    /** Which axis scrolls. The other one is left to the page. */
    orientation?: ScrollAreaOrientation;
    /** ms of no scrolling and no hover before the bar fades out. */
    idleDelay?: number;
    /**
     * Accessible name for the scrollable region. Worth passing: the viewport
     * is a real tab stop (a region that scrolls has to be keyboard-reachable),
     * and without a name that stop announces nothing.
     */
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
}
/**
 * A scrollable region whose scrollbar is a curve, not a straight rule.
 *
 * The native bar is hidden (`scrollbar-width: none` plus the WebKit
 * pseudo-element) and replaced by an SVG overlay that traces the container's
 * own rounded-rect perimeter - the top-right corner, the right edge, the
 * bottom-right corner - so the bar genuinely wraps the card's curve rather
 * than stopping short of it with a rounded end-cap.
 *
 * The mechanism is the standard path-following progress indicator, the same
 * one `GaugeRing` and every arc timer uses, applied to a rounded-rect edge
 * instead of a circle. Three `<path>` elements share one `d` - a faint
 * groove, the visible thumb, and a wide transparent hit target for the drag -
 * and the thumb is a single `stroke-dasharray` dash the length of the thumb,
 * slid along the curve with a negative `stroke-dashoffset`. Both numbers are
 * px of real arc length, taken from `getTotalLength()`, so the thumb is as
 * long a fraction of the path as the viewport is of the content. The `d`
 * itself is rebuilt from the root's live box (a `ResizeObserver` on the root)
 * and the `radius` prop, with SVG arcs for the corners.
 *
 * Everything else is the ratio math the straight bar already used: thumb
 * length is `clientHeight / scrollHeight` of the track, thumb position is
 * `scrollTop / (scrollHeight - clientHeight)` of the leftover track, the
 * thumb is draggable, and the whole overlay fades out after ~900ms of no
 * scrolling and no hover.
 *
 * Usage: give the element a bounded size - a `max-height`, or `flex: 1` plus
 * `min-height: 0` inside a column - because the region can only scroll if
 * something stops it from growing to fit its content. Pass `radius` whenever
 * the surrounding surface is not on `--lynn-radius-lg`; that single value is
 * what the corner arcs are built from, so a wrong one is the one way to get
 * a curve that misses the container's. `DocRail` mounts one around its own
 * link list.
 *
 * Don't: don't nest one inside another on the same axis - the inner region
 * swallows the wheel and the outer thumb then only moves once the inner one
 * has bottomed out, which reads as a stuck bar. And don't reach for this to
 * style the *page's* scrollbar: it only ever governs its own viewport, and
 * the document's bar is the browser's to draw.
 */
export declare function ScrollArea(props: ScrollAreaProps): import("react").JSX.Element;
