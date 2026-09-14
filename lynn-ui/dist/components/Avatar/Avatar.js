import { jsx as _jsx } from "react/jsx-runtime";
/**
 * A round initials disc.
 *
 * Usage: pass `ariaLabel` with the person's full name whenever the initials
 * stand for someone - it switches the span to `role="img"` and stops a screen
 * reader spelling out "E, M". Leave `gradient` unset and it follows the
 * source's own convention: filled at `lg`, flat below it. `Timeline`'s
 * `RoadmapItemCard` builds its assignee and gate stacks out of this at `sm`
 * and `xs`.
 *
 * Don't: don't pass more than two characters - all three sizes are fixed
 * 14/22/36px discs with no overflow handling, so a third letter clips. And
 * don't use it as a decorative shape with no name: without `ariaLabel` the
 * initials are read out literally, letter by letter.
 */
export function Avatar(props) {
    const { initials, size = 'sm', gradient, ariaLabel, className, style } = props;
    const filled = gradient ?? size === 'lg';
    const classes = [
        'lynn-avatar',
        `lynn-avatar-${size}`,
        filled ? 'lynn-avatar-gradient' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsx("span", { className: classes, style: style, role: ariaLabel != null ? 'img' : undefined, "aria-label": ariaLabel, children: ariaLabel != null ? (_jsx("span", { "aria-hidden": "true", children: initials })) : (initials) }));
}
