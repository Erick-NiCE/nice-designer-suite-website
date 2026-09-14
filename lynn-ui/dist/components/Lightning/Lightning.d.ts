import type { CSSProperties, ReactNode } from 'react';
export interface LightningProps {
    /** Filament color. Source default: `#B98FFF` (the `lynn` accent). */
    color?: string;
    /** Outer glow color. Source default: `#6100FF` (`indigo`). */
    glow?: string;
    /** Canvas opacity. Source default: 0.5. */
    opacity?: number;
    /** Number of drifting light motes. Source default: 54. Use 0 for none. */
    motes?: number;
    /** Let the two leading filaments bend toward the cursor. */
    followPointer?: boolean;
    /** Content layered above the canvases. */
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
/**
 * `lynn/motion/plasma-lightning`
 *
 * A canvas plasma ball: seven filaments radiate from a central electrode,
 * flicker via midpoint displacement, and bend toward the cursor, with
 * drifting light motes tracing the container's edge.
 *
 * The algorithm, constants and draw order are reimplemented directly from
 * `nice-effects.js`'s `lightning()` - this component has no runtime
 * dependency on the site's script or on a global `window.NiceEffects`.
 *
 * Like the original it pauses whenever it scrolls off screen, and it renders
 * a single static frame under `prefers-reduced-motion: reduce`.
 *
 * The container is framed by a rotating conic-gradient ring tinted with the
 * same `glow`/`color` pair the filaments are drawn in, so the border reads as
 * the same electricity rather than as an unrelated line.
 *
 * Usage: one instance per page, as a feature stage - the CSS floors it at
 * 240px tall and paints its own deep `#1b1b24` ground, so give it real width
 * and let it be the hero of its section. Anything in `children` is layered
 * above both canvases. `motes={0}` skips the second canvas entirely, which is
 * the cheap way to keep the plasma without the edge sparkle.
 *
 * Don't: don't run several at once - each instance owns a
 * `requestAnimationFrame` loop that redraws seven midpoint-displaced bolts
 * (five subdivision passes, two strokes each) plus up to 54 shadowed motes
 * across two canvases every frame, so a grid of them is the most expensive
 * thing in this package. It does pause itself off-screen and falls back to one
 * static frame under `prefers-reduced-motion`. And don't pass anything but a
 * hex to `color` / `glow`: `hexToRgb` strips a `#` and `parseInt`s the rest,
 * so an `rgb()` string or a `var(--lynn-color-blue)` yields NaN channels and
 * the filaments disappear - pass `designTokens.color.accent.blue` instead.
 */
export declare function Lightning(props: LightningProps): import("react").JSX.Element;
