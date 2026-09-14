import { jsx as _jsx } from "react/jsx-runtime";
/**
 * A numbered circle.
 *
 * The shared atom behind `Stepper`'s own badges and the five independent
 * numbered-circle lists elsewhere on the site, which are all this same disc at
 * a different diameter and fill.
 *
 * Decorative by default: the number is a visual index that the surrounding
 * ordered list or step title already conveys, so it is hidden from assistive
 * tech rather than read out twice.
 *
 * Usage: the defaults (`size="lg"`, `fill="gradient"`, `color="electric-blue"`)
 * reproduce install-guide's flagship badge exactly, which is also what
 * `Stepper` renders. Drop to `tint` at `xs`/`sm`/`md` for the lighter inline
 * numbered lists elsewhere on the site, or `solid` for marketplace's flat
 * disc. `n` is a node, so `'01'` and `<IconCheck />` work as well as `3`.
 *
 * Don't: don't let it be the only place the order lives - the span is
 * `aria-hidden`, so a bare row of these is an unordered list to a screen
 * reader; put the steps in an `<ol>` (which is what `Stepper` does) or say the
 * number in the title. And don't mix `fill` values within one list: the three
 * treatments read as three different kinds of step.
 */
export function StepNumber(props) {
    const { n, size = 'lg', color = 'electric-blue', fill = 'gradient', className, style, } = props;
    const classes = [
        'lynn-step-number',
        `lynn-step-number-${size}`,
        `lynn-step-number-${fill}`,
        `lynn-step-number-color-${color}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsx("span", { className: classes, style: style, "aria-hidden": "true", children: n }));
}
