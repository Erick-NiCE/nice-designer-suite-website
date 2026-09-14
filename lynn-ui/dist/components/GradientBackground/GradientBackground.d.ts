import type { CSSProperties, ReactNode } from 'react';
/**
 * `slow` - 13s diagonal drift (`.nice-gradient-animated`).
 * `fast` - 8s multi-axis drift (`.nice-gradient-animated-fast`).
 * `false` - the same palette held still (`.nice-gradient-static`).
 */
export type GradientAnimation = 'slow' | 'fast' | false;
export interface GradientBackgroundProps {
    /** Which of the three real gradient variants to render. */
    animated?: GradientAnimation;
    /**
     * Content layered above the gradient. Leave empty to use this as a
     * `position: absolute; inset: 0` backdrop inside a positioned parent.
     */
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
/**
 * `lynn/motion/gradient-shift`
 *
 * The brand gradient, ported byte-for-byte from nice-effects.css. All three
 * variants share the same multi-stop palette; only the animation differs.
 *
 * The keyframes are intentionally `ease`, not `--lynn-ease` - they are a
 * continuous ambient loop, which the design system exempts from the
 * interaction-easing rule.
 *
 * Usage: two shapes. With `children` it is the positioned wrapper and they
 * layer above the gradient; with none it is a backdrop, and you give it
 * `position: absolute; inset: 0` inside a positioned parent - or explicit
 * width/height, as the playground does. `animated="fast"` is the 8s
 * multi-axis drift, `false` holds the same palette still.
 *
 * Don't: don't render an empty one and expect to see anything - the element is
 * only `position: relative` with no intrinsic size, so with no children and no
 * dimensions it collapses to zero height. And don't set body copy directly on
 * it: the palette runs through full-saturation blue, indigo and emerald with
 * no scrim, which is exactly what `Hero`'s `radialMask` exists to fix.
 */
export declare function GradientBackground(props: GradientBackgroundProps): import("react").JSX.Element;
