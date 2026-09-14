import { useMemo, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { IconArrowsSort, IconChevronDown, IconChevronUp } from '../../icons/icons.js';

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
 * Ports dashboard.html's comparator exactly: null and undefined sink to the
 * bottom whichever way the column is pointing, strings compare with
 * `localeCompare`, everything else numerically.
 */
function compare(a: unknown, b: unknown, direction: SortDirection): number {
  if (a === null || a === undefined) return 1;
  if (b === null || b === undefined) return -1;
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
export function DataTable(props: DataTableProps) {
  const {
    columns,
    rows,
    renderCell,
    defaultSort,
    rowKey,
    ariaLabel,
    emptyText = 'Nothing to show',
    className,
    style,
  } = props;

  const [sort, setSort] = useState<DataTableSort | null>(defaultSort ?? null);

  const sorted = useMemo(() => {
    if (sort == null) return rows;
    // Array.prototype.sort is stable, so rows that tie keep their input
    // order - the same guarantee the source relied on implicitly.
    return [...rows].sort((a, b) =>
      compare(a[sort.key], b[sort.key], sort.direction)
    );
  }, [rows, sort]);

  const cycle = (key: string) => {
    setSort((current) => {
      if (current == null || current.key !== key) {
        return { key, direction: 'asc' };
      }
      if (current.direction === 'asc') return { key, direction: 'desc' };
      return null;
    });
  };

  const classes = ['lynn-data-table', className].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style}>
      <table className="lynn-data-table-table" aria-label={ariaLabel}>
        <thead>
          <tr>
            {columns.map((column) => {
              const active = sort?.key === column.key;
              const direction = active ? sort.direction : null;
              return (
                <th
                  key={column.key}
                  className={[
                    column.align ? `lynn-data-table-${column.align}` : null,
                    column.sortable ? 'lynn-data-table-sortable' : null,
                    direction === 'asc' ? 'lynn-data-table-asc' : null,
                    direction === 'desc' ? 'lynn-data-table-desc' : null,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-sort={
                    direction === 'asc'
                      ? 'ascending'
                      : direction === 'desc'
                        ? 'descending'
                        : column.sortable
                          ? 'none'
                          : undefined
                  }
                  scope="col"
                >
                  {column.sortable ? (
                    <button
                      type="button"
                      className="lynn-data-table-sort-button"
                      onClick={() => cycle(column.key)}
                    >
                      {column.label}
                      <span className="lynn-data-table-sort-icon" aria-hidden="true">
                        {direction === 'asc' ? (
                          <IconChevronUp size={12} />
                        ) : direction === 'desc' ? (
                          <IconChevronDown size={12} />
                        ) : (
                          <IconArrowsSort size={12} />
                        )}
                      </span>
                    </button>
                  ) : (
                    column.label
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.length === 0 ? (
            <tr>
              <td className="lynn-data-table-empty" colSpan={columns.length}>
                {emptyText}
              </td>
            </tr>
          ) : (
            sorted.map((row, index) => (
              <tr key={rowKey ? rowKey(row, index) : index}>
                {columns.map((column) => {
                  const custom = renderCell?.(row, column);
                  const value = row[column.key];
                  return (
                    <td
                      key={column.key}
                      className={
                        column.align
                          ? `lynn-data-table-${column.align}`
                          : undefined
                      }
                    >
                      {custom !== undefined
                        ? custom
                        : value === null || value === undefined
                          ? '-'
                          : String(value)}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
