import type { CSSProperties, ReactNode } from 'react';
export interface SheenProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}
/**
 * `lynn/motion/sheen`
 *
 * A diagonal light sweep across its children, self-contained via a `::after`
 * layer - ported from `nice-effects.css`'s `.nice-sheen` (4.2s ease-in-out
 * infinite). The host element needs `position: relative` and clipped
 * overflow, both supplied by this wrapper.
 *
 * Usage: wrap the one surface you want to catch the light - a `Card`, a CTA
 * panel. There are no props beyond `className` / `style`: the sweep is a fixed
 * 45%-wide `lynn`-tinted band at a fixed 4.2s, so every sheen on the site is
 * the same sheen. Self-disables under `prefers-reduced-motion: reduce`.
 *
 * Don't: don't wrap something that relies on visible overflow - the wrapper
 * sets `overflow: hidden` to clip the band, which also clips an absolutely
 * positioned badge, a `Tooltip` bubble or a `Card`'s hover shadow. Don't wrap
 * something on a different corner radius than `Card`'s without overriding
 * `className` - the wrapper's own `border-radius` is what the `overflow`
 * clips to, fixed at `--lynn-radius-lg` to match its two documented targets,
 * so a pill button inside it shows the sweep's square corners poking past the
 * button's rounded ones. And don't reach for it as a hover affordance: the
 * animation is an unconditional infinite loop with no hover selector, so it
 * sweeps whether or not anyone is pointing at it.
 */
export declare function Sheen(props: SheenProps): import("react").JSX.Element;
