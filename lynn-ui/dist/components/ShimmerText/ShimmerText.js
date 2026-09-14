import { createElement } from 'react';
/**
 * `lynn/motion/shimmer`
 *
 * A gradient text-clip sweep across white -> blue -> lynn -> emerald,
 * ported verbatim from lynn.html's `.gradient-word`.
 *
 * The keyframe is intentionally `linear`, not `--lynn-ease`: this is a
 * continuous ambient loop, which the design system explicitly exempts from
 * the interaction-easing rule (an eased loop would visibly stutter at the
 * wrap point).
 *
 * Used on one or two key words per heading, never a whole paragraph.
 *
 * Usage: nest it inside the heading you already have and give it the word that
 * matters - `as` defaults to `span` for exactly that. Use `as="h2"` / `"h3"`
 * only when the shimmer *is* the whole heading, and remember Lynn's rule that
 * every heading is weight 700+, which this component does not set for you.
 * `duration` slows or quickens the sweep; 4s is the source value.
 *
 * Don't: don't run it over a paragraph or a long heading - it is a
 * `background-clip: text` gradient sweeping on a loop, so every glyph is
 * repainted continuously and a long line reads as flicker rather than shine.
 * And don't set a `color` on it: the text is painted by the gradient through
 * `-webkit-text-fill-color: transparent`, so your color is simply not visible.
 */
export function ShimmerText(props) {
    const { children, as = 'span', duration = 4, className, style, } = props;
    const classes = ['lynn-shimmer', className].filter(Boolean).join(' ');
    const mergedStyle = {
        ...style,
        '--lynn-shimmer-duration': `${duration}s`,
    };
    return createElement(as, { className: classes, style: mergedStyle }, children);
}
