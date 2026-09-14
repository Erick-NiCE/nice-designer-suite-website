import { jsx as _jsx } from "react/jsx-runtime";
/**
 * `lynn/motion/glow-pulse`
 *
 * A breathing purple/blue box-shadow halo around its children, ported from
 * `nice-effects.css`'s `.nice-glow-pulse` (3s ease-in-out infinite).
 *
 * Usage: one instance per screen, around the single element you want the eye
 * pulled to - a live `Badge`, a primary CTA, the one card that changed. There
 * are no props beyond `className` / `style` on purpose: the halo is a fixed
 * lynn-and-blue pair so it always reads as the same signal.
 *
 * Don't: don't apply it to several siblings at once - the halo is a 34px and
 * 60px box-shadow pair, so adjacent glows overlap into a single lit region
 * and the "look here" meaning is gone. And it renders a `div`, so wrapping an
 * inline `Badge` puts a block box in the line; wrap the row, or give it
 * `display: inline-block` through `className`.
 */
export function GlowPulse(props) {
    const { children, className, style } = props;
    const classes = ['lynn-glow-pulse', className].filter(Boolean).join(' ');
    return (_jsx("div", { className: classes, style: style, children: children }));
}
