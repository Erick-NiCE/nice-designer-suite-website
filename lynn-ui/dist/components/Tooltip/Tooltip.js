import { jsx as _jsx } from "react/jsx-runtime";
import { cloneElement, isValidElement } from 'react';
/**
 * A hover/focus tooltip.
 *
 * Attribute-driven on purpose: the bubble is a CSS `::after` fed by
 * `content: attr(data-lynn-tooltip)`, so there is no portal, no positioning
 * pass and no state - the same trade the plugin's `[data-tooltip]` makes. The
 * cost is that the bubble is a single line of text that cannot escape an
 * `overflow: hidden` ancestor.
 *
 * When `children` is a single element the attributes are cloned onto it, so
 * the tooltip adds no box to the layout and an already-focusable target
 * (a button, a link) reveals the bubble on keyboard focus too. Anything else
 * - text, a fragment, several children - gets an inline-flex wrapper, which
 * is given `tabIndex={0}` so the bubble stays keyboard-reachable.
 *
 * Usage: best on a single DOM element that is already focusable - a `<button>`,
 * an `<a>`, an `<input>`. There the two data attributes are cloned straight
 * onto it, so the tooltip adds no box to the layout and the bubble appears on
 * keyboard focus for free. Use `side="right"` for a target near a container's
 * right edge, where the centered bubble would overflow. `label` is plain text
 * because CSS reads it with `content: attr(...)`.
 *
 * Don't: don't wrap a lynn-ui component - `cloneElement` passes
 * `data-lynn-tooltip` in as a prop, and none of these components forward
 * unknown props to the DOM, so the attribute is silently dropped and no bubble
 * ever appears. Wrap the component in a `<span>`, or pass the attribute to a
 * real element yourself. And don't use it inside an `overflow: hidden`
 * ancestor (a `Sheen`, a scrolling `CodeBlock`): the bubble is a `::after` on
 * the target, so it cannot escape the clip.
 */
export function Tooltip(props) {
    const { label, side = 'bottom', children, className, style } = props;
    const attributes = {
        'data-lynn-tooltip': label,
        ...(side === 'right' ? { 'data-lynn-tooltip-side': 'right' } : null),
    };
    if (isValidElement(children)) {
        const child = children;
        const merged = [child.props.className, className].filter(Boolean).join(' ');
        return cloneElement(child, {
            ...attributes,
            className: merged.length > 0 ? merged : undefined,
            style: style != null ? { ...child.props.style, ...style } : child.props.style,
        });
    }
    const classes = ['lynn-tooltip-wrap', className].filter(Boolean).join(' ');
    return (_jsx("span", { className: classes, style: style, tabIndex: 0, ...attributes, children: children }));
}
