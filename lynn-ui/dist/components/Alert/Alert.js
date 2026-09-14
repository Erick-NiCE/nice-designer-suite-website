import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A tinted callout box.
 *
 * One component for the eight independent re-implementations of the same
 * shape site-wide (`.note-box`, `.tip-box`, `.warn-box`, `.callout`, ...):
 * icon on the left, text on the right, accent-tinted background with a
 * matching border.
 *
 * Usage: pick the `variant` by intent, never by hue - `warning` is teal here
 * because Lynn has no amber, and a caller who reasons in colors will pick the
 * wrong one. `title` is the bold accent-colored first clause; `compact` drops
 * to the roadmap's tighter 6px/11px scale for a callout living inside another
 * card.
 *
 * Don't: don't use it for a transient confirmation - it has no dismiss, no
 * timer and no live-region role, so it is static page content; `useToast()` is
 * the component for "that worked". And don't put meaning only in `icon`: the
 * icon span is `aria-hidden`, so the sentence has to stand on its own.
 */
export function Alert(props) {
    const { children, variant = 'info', icon, title, compact = false, className, style, } = props;
    const classes = [
        'lynn-alert',
        `lynn-alert-${variant}`,
        compact ? 'lynn-alert-compact' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { className: classes, style: style, children: [icon != null ? (_jsx("span", { className: "lynn-alert-icon", "aria-hidden": "true", children: icon })) : null, _jsxs("div", { className: "lynn-alert-body", children: [title != null ? _jsx("strong", { className: "lynn-alert-title", children: title }) : null, children] })] }));
}
