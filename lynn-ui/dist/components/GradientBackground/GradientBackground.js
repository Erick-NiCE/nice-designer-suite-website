import { jsx as _jsx } from "react/jsx-runtime";
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
export function GradientBackground(props) {
    const { animated = 'slow', children, className, style } = props;
    const variantClass = animated === 'slow'
        ? 'lynn-gradient-animated'
        : animated === 'fast'
            ? 'lynn-gradient-animated-fast'
            : 'lynn-gradient-static';
    const classes = ['lynn-gradient', variantClass, className]
        .filter(Boolean)
        .join(' ');
    return (_jsx("div", { className: classes, style: style, children: children }));
}
