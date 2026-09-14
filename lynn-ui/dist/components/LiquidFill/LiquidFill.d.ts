import type { CSSProperties, ReactNode } from 'react';
export interface LiquidFillProps {
    /** Fill color. Source default: `#3694FC` (the `blue` accent). */
    color?: string;
    /** Opacity of the fill layer while hovered. Source default: 0.5. */
    opacity?: number;
    /**
     * Particle count. Source default: `max(110, round(width * 0.6))`, computed
     * from the container's measured width at first hover.
     */
    count?: number;
    /** Content layered above the fill. */
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
/**
 * `lynn/motion/liquid-fill`
 *
 * A physics-driven particle pool that splashes up, fills the container and
 * sloshes toward the cursor on hover, then drains back on leave. Ported from
 * `liquidFill()` in nice-effects.js, with all of its real constants:
 * restitution 0.4, friction 0.02, frictionAir 0.008, density 0.001, particle
 * radius 1.75-2.5px, 1.6x horizontal gravity steering, and the splash
 * impulse of x +/-5.5 / y -6 to -15.
 *
 * Unlike the original this takes `matter-js` as a real npm dependency rather
 * than reading a global `window.Matter`, so the physics types resolve at
 * build time and consumers need no CDN script tag. The import is only paid
 * for by bundles that actually reference this component.
 *
 * Under `prefers-reduced-motion: reduce` no engine is created and the fill
 * layer stays hidden - the component renders as a plain container.
 *
 * Usage: one instance, as a hover-to-discover stage - the CSS floors it at
 * 240px and paints its own `#1b1b24` ground, and the matter.js world is only
 * built on the first `mouseenter`, so an instance nobody hovers costs nothing
 * but its markup. Leave `count` unset to get the width-derived default
 * (`max(110, width * 0.6)`), which is what keeps the pool looking the same
 * density at every size.
 *
 * Don't: don't put it anywhere a pointer will not reach - the engine starts on
 * `mouseenter` and only steers on `mousemove`, so on touch it is a flat dark
 * box forever. And don't drive `color`, `opacity` or `count` from a live
 * control: they are the effect's dependencies, so every change tears down the
 * whole world (`Matter.World.clear` + `Engine.clear`) and rebuilds it on the
 * next hover. Once running it is a 60fps physics step over 110+ bodies drawn
 * through an SVG blur filter, so one per page is the budget.
 */
export declare function LiquidFill(props: LiquidFillProps): import("react").JSX.Element;
