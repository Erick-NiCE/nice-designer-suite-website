import type { CSSProperties, ReactNode } from 'react';
export type DataTableAlign = 'left' | 'center' | 'right';
export type SortDirection = 'asc' | 'desc';
export interface DataTableColumn {
    /** Key read out of each row, and the sort key. */
    key: string;
    label: ReactNode;
    /** Adds the sort affordance to this header. */
    sortable?: boolean;
    align?: DataTableAlign;
}
/** One row. Values may be anything `renderCell` knows how to draw. */
export type DataTableRow = Record<string, unknown>;
export interface DataTableSort {
    key: string;
    direction: SortDirection;
}
export interface DataTableProps {
    columns: DataTableColumn[];
    rows: DataTableRow[];
    /**
     * Draws one cell. Return `undefined` to fall back to the default rendering
     * (the raw value, or an em dash when it is null). This is where a `Badge`
     * pill or an inline `ProgressBar` goes.
     */
    renderCell?: (row: DataTableRow, column: DataTableColumn) => ReactNode;
    /** Sort to apply on mount. */
    defaultSort?: DataTableSort;
    /**
     * Stable key per row. Defaults to the row's index, which is fine while the
     * table owns its own ordering but not if the caller also reorders `rows`.
     */
    rowKey?: (row: DataTableRow, index: number) => string;
    /** Accessible name for the table. */
    ariaLabel?: string;
    /** Shown in place of the body when `rows` is empty. */
    emptyText?: ReactNode;
    className?: string;
    style?: CSSProperties;
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
export declare function DataTable(props: DataTableProps): import("react").JSX.Element;
