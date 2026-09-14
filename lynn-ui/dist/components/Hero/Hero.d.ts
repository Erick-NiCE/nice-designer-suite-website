import type { CSSProperties, ReactNode } from 'react';
import { type GradientAnimation } from '../GradientBackground/GradientBackground.js';
export interface HeroProps {
    /** The headline. Wrap a word in `<ShimmerText>` for the signature sweep. */
    heading: ReactNode;
    /** ALL-CAPS label above the headline. */
    eyebrow?: ReactNode;
    /** Supporting paragraph below the headline. */
    subtitle?: ReactNode;
    /** Call-to-action row, typically one or two `<Button>`s. */
    actions?: ReactNode;
    /** Anything else layered inside the hero, below the actions. */
    children?: ReactNode;
    /** Which gradient backdrop variant to run. */
    animated?: GradientAnimation;
    /** The three drifting blurred orbs. Defaults on. */
    orbs?: boolean;
    /**
     * The radial vignette that fades the gradient back into `bg` at the edges.
     * Defaults on.
     */
    radialMask?: boolean;
    className?: string;
    style?: CSSProperties;
}
/**
 * The Lynn hero: full-viewport, animated brand gradient, radial vignette and
 * three drifting orbs behind centered eyebrow / heading / subtitle / CTA
 * slots.
 *
 * Ports index.html's richer three-orb hero (blue top-left, indigo
 * bottom-right, emerald mid-right) rather than lynn.html's two-orb demo.
 *
 * Usage: one per page, as the opener, and put the signature sweep on one or
 * two words by nesting `ShimmerText` inside `heading` rather than wrapping the
 * whole line. `actions` is the CTA row - one or two `Button`s - and `children`
 * layers anything else below them. The eyebrow / heading / subtitle / actions
 * order is the system's label-then-heading hierarchy, so skipping `eyebrow`
 * costs the section its label.
 *
 * Don't: don't turn `radialMask` off while `animated` and `orbs` are on - the
 * vignette is what fades the full-saturation gradient back into `bg` behind
 * the text, and without it the headline sits on a drifting mid-tone with no
 * guaranteed contrast. And don't stack two heroes on one page: it ports a
 * full-viewport section, so the second one just pushes the real content
 * another screen down.
 */
export declare function Hero(props: HeroProps): import("react").JSX.Element;
