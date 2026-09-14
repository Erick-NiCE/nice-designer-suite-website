import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { IconArrowsSort, IconChevronDown, IconChevronUp } from '../../icons/icons.js';
/**
 * Ports dashboard.html's comparator exactly: null and undefined sink to the
 * bottom whichever way the column is pointing, strings compare with
 * `localeCompare`, everything else numerically.
 */
function compare(a, b, direction) {
    if (a === null || a === undefined)
        return 1;
    if (b === null || b === undefined)
        return -1;
    const sign = direction === 'asc' ? 1 : -1;
    if (typeof a === 'string' && typeof b === 'string') {
        return sign * a.localeCompare(b);
    }
    return sign * (Number(a) - Number(b));
}
/**
 * The dashboard's sortable table.
 *
 * Ported from dashboard.html's `.table-wrap` CSS and its `sortTable()`, with
 * one deliberate change: the header cycles through three states
 * (unsorted -> ascending -> descending -> unsorted) rather than the source's
 * two. The source could never return to its original order once a column had
 * been clicked, and the `⇅` glyph it renders for an unsorted column only ever
 * appeared before the first click - the third state is what that glyph was
 * already promising.
 *
 * Usage: mark `sortable` only on the columns that are actually worth sorting,
 * since each one turns its header into a button. `renderCell` is the hook for
 * a `Badge` pill or an inline `ProgressBar`, and returning `undefined` from it
 * falls through to the default rendering for that one cell. Pass `ariaLabel`
 * (the `<table>` has no caption) and `emptyText` for the zero-row case; pass
 * `rowKey` as soon as the caller reorders or filters `rows`, because the
 * default key is the index.
 *
 * Don't: don't treat `defaultSort` as a controlled prop - it seeds the sort
 * state once on mount, so changing it later does nothing without remounting
 * the table. And don't return `null` from `renderCell` meaning "use the
 * default": only `undefined` falls through, `null` renders a genuinely empty
 * cell.
 */
export function DataTable(props) {
    const { columns, rows, renderCell, defaultSort, rowKey, ariaLabel, emptyText = 'Nothing to show', className, style, } = props;
    const [sort, setSort] = useState(defaultSort ?? null);
    const sorted = useMemo(() => {
        if (sort == null)
            return rows;
        // Array.prototype.sort is stable, so rows that tie keep their input
        // order - the same guarantee the source relied on implicitly.
        return [...rows].sort((a, b) => compare(a[sort.key], b[sort.key], sort.direction));
    }, [rows, sort]);
    const cycle = (key) => {
        setSort((current) => {
            if (current == null || current.key !== key) {
                return { key, direction: 'asc' };
            }
            if (current.direction === 'asc')
                return { key, direction: 'desc' };
            return null;
        });
    };
    const classes = ['lynn-data-table', className].filter(Boolean).join(' ');
    return (_jsx("div", { className: classes, style: style, children: _jsxs("table", { className: "lynn-data-table-table", "aria-label": ariaLabel, children: [_jsx("thead", { children: _jsx("tr", { children: columns.map((column) => {
                            const active = sort?.key === column.key;
                            const direction = active ? sort.direction : null;
                            return (_jsx("th", { className: [
                                    column.align ? `lynn-data-table-${column.align}` : null,
                                    column.sortable ? 'lynn-data-table-sortable' : null,
                                    direction === 'asc' ? 'lynn-data-table-asc' : null,
                                    direction === 'desc' ? 'lynn-data-table-desc' : null,
                                ]
                                    .filter(Boolean)
                                    .join(' '), "aria-sort": direction === 'asc'
                                    ? 'ascending'
                                    : direction === 'desc'
                                        ? 'descending'
                                        : column.sortable
                                            ? 'none'
                                            : undefined, scope: "col", children: column.sortable ? (_jsxs("button", { type: "button", className: "lynn-data-table-sort-button", onClick: () => cycle(column.key), children: [column.label, _jsx("span", { className: "lynn-data-table-sort-icon", "aria-hidden": "true", children: direction === 'asc' ? (_jsx(IconChevronUp, { size: 12 })) : direction === 'desc' ? (_jsx(IconChevronDown, { size: 12 })) : (_jsx(IconArrowsSort, { size: 12 })) })] })) : (column.label) }, column.key));
                        }) }) }), _jsx("tbody", { children: sorted.length === 0 ? (_jsx("tr", { children: _jsx("td", { className: "lynn-data-table-empty", colSpan: columns.length, children: emptyText }) })) : (sorted.map((row, index) => (_jsx("tr", { children: columns.map((column) => {
                            const custom = renderCell?.(row, column);
                            const value = row[column.key];
                            return (_jsx("td", { className: column.align
                                    ? `lynn-data-table-${column.align}`
                                    : undefined, children: custom !== undefined
                                    ? custom
                                    : value === null || value === undefined
                                        ? '-'
                                        : String(value) }, column.key));
                        }) }, rowKey ? rowKey(row, index) : index)))) })] }) }));
}
