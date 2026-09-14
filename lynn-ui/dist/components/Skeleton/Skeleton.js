import { jsx as _jsx } from "react/jsx-runtime";
/**
 * The loading placeholder: a column of shimmering rows, shown while a list's
 * real content is still being computed.
 *
 * Ported from the plugin's `.skeleton-list` / `.skeleton-row`, which exists
 * for exactly one reason worth repeating here - it renders *immediately*, so
 * a slow scan reads as "working" rather than "broken".
 *
 * Usage: render it in place of the list while the real rows are still coming,
 * and set `rows` to the count you expect so the layout does not jump when they
 * arrive. `compact` drops 52px rows to 32px for a dense list. Pair it with a
 * `Spinner` or `ProgressBar` only if the wait is long enough to need a second
 * signal.
 *
 * Don't: don't use it as an empty state - the whole block is `aria-hidden`, so
 * a screen reader hears nothing at all and a permanent skeleton is
 * indistinguishable from a hang. "Nothing here" needs real text, e.g.
 * `DataTable`'s `emptyText`. And don't pass a negative `rows` expecting to
 * hide it: the count is floored at 0, which renders an empty container rather
 * than nothing.
 */
export function Skeleton(props) {
    const { rows = 6, compact = false, className, style } = props;
    const classes = ['lynn-skeleton', className].filter(Boolean).join(' ');
    const rowClasses = ['lynn-skeleton-row', compact ? 'lynn-skeleton-row-compact' : null]
        .filter(Boolean)
        .join(' ');
    return (_jsx("div", { className: classes, style: style, "aria-hidden": "true", children: Array.from({ length: Math.max(0, rows) }, (_unused, index) => (_jsx("div", { className: rowClasses }, index))) }));
}
