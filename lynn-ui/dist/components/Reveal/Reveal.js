import { jsx as _jsx } from "react/jsx-runtime";
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll.js';
/**
 * `lynn/motion/scroll-reveal`
 *
 * Fades and slides its children up 22px as they enter the viewport. Lynn's
 * hard rule is that nothing pops in instantly - every card and section is
 * gated behind this.
 *
 * Under `prefers-reduced-motion: reduce` the content is rendered visible
 * immediately and no observer is created.
 *
 * Usage: wrap each card or section of a page, passing the map index as `index`
 * - the stagger is `(index % 6) * 55ms`, so it resets every six siblings
 * rather than growing without bound. `delay` overrides that outright when you
 * need an exact beat. Leave `once` on (the source behavior) for page content;
 * turn it off only for a demo you want to replay.
 *
 * Don't: don't wrap a table row, a list item or a direct grid/flex child - this
 * renders a plain `div`, so it breaks `<tbody>` / `<ul>` structure and inserts
 * an unexpected box into the track; wrap the container, or the cell's content
 * inside the cell. And don't nest `Reveal` inside `Reveal`: both observers fire
 * independently, so the two `translateY(22px)` offsets stack to 44px and the
 * inner stagger plays out while the outer wrapper is still transparent - the
 * reader sees one late jump instead of a sequence.
 */
export function Reveal(props) {
    const { children, index, delay, threshold, once, className, style } = props;
    const { ref, visible } = useRevealOnScroll({
        index,
        delay,
        threshold,
        once,
    });
    const classes = [
        'lynn-reveal',
        visible ? 'lynn-reveal-visible' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsx("div", { ref: ref, className: classes, style: style, children: children }));
}
