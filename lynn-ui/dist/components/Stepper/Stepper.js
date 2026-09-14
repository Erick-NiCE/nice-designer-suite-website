import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StepNumber } from '../StepNumber/StepNumber.js';
/**
 * A numbered walkthrough.
 *
 * Ported from install-guide.html's `.steps-list` / `.step-number-badge` /
 * `.step-line` / `.step-card`. The badge is the shared `StepNumber` atom, so a
 * stepper and a bare numbered list can never drift apart.
 *
 * Renders as an ordered list, so the count and the ordering reach assistive
 * tech from the markup rather than from the (decorative) badges.
 *
 * Usage: `steps` is data, and each step's `children` is its card body - a
 * paragraph, a `CodeBlock`, an `Alert`. Give a step an `id` when a `DocRail`
 * link should jump to it. `vertical` is install-guide's real layout with the
 * 80px badge gutter (it collapses to one column under 600px on its own);
 * `horizontal` lays the same stack out in a row. `color` re-tints both the
 * badges and the connecting line together.
 *
 * Don't: don't set `step.number` just to number from 1 - the auto-numbering
 * already does that, and an explicit value is only for a list that starts
 * elsewhere or labels a step `'0'` / `<IconCheck />`. And don't expect a size
 * lever: the badge is hard-coded to `StepNumber size="lg"` (52px), so for a
 * tighter numbered list use `StepNumber` directly rather than shrinking this.
 */
export function Stepper(props) {
    const { steps, orientation = 'vertical', color = 'electric-blue', className, style, } = props;
    const classes = [
        'lynn-stepper',
        `lynn-stepper-${orientation}`,
        `lynn-stepper-color-${color}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsx("ol", { className: classes, style: style, children: steps.map((step, index) => (_jsxs("li", { className: "lynn-stepper-step", id: step.id, children: [_jsxs("div", { className: "lynn-stepper-sidebar", children: [_jsx(StepNumber, { n: step.number ?? index + 1, size: "lg", color: color }), _jsx("span", { className: "lynn-stepper-line", "aria-hidden": "true" })] }), _jsxs("div", { className: "lynn-stepper-body", children: [_jsx("div", { className: "lynn-stepper-header", children: _jsx("h3", { className: "lynn-stepper-title", children: step.title }) }), _jsx("div", { className: "lynn-stepper-card", children: step.children })] })] }, step.id ?? index))) }));
}
