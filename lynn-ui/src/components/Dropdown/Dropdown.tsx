import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

export interface DropdownOption {
  /** Value handed back to `onChange`. */
  value: string;
  /** Visible text. Also what the inline filter matches against. */
  label: string;
  /** Any CSS color - renders the small square before the label. */
  swatch?: string;
  /** Muted trailing detail, e.g. the hex behind a swatch. Also filterable. */
  hint?: string;
  /** Section this option belongs to. Only read when `sections` is on. */
  section?: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /** Selected `option.value`, or `null` for none. */
  value: string | null;
  onChange: (value: string) => void;
  options: DropdownOption[];
  /** Trigger text while nothing is selected. */
  placeholder?: string;
  /** Adds the inline filter input above the list. */
  searchable?: boolean;
  /**
   * Group the list by `option.section` under sticky headers, in the order the
   * sections first appear. Options with no `section` are grouped last.
   */
  sections?: boolean;
  searchPlaceholder?: string;
  /** Shown when the filter matches nothing. */
  emptyText?: string;
  disabled?: boolean;
  /** Accessible name for the trigger. */
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

interface OptionGroup {
  section: string | null;
  options: DropdownOption[];
}

function groupOptions(options: DropdownOption[]): OptionGroup[] {
  const groups: OptionGroup[] = [];
  const index = new Map<string, OptionGroup>();
  let ungrouped: OptionGroup | null = null;

  for (const option of options) {
    if (option.section == null) {
      if (ungrouped == null) {
        ungrouped = { section: null, options: [] };
      }
      ungrouped.options.push(option);
      continue;
    }
    let group = index.get(option.section);
    if (group == null) {
      group = { section: option.section, options: [] };
      index.set(option.section, group);
      groups.push(group);
    }
    group.options.push(option);
  }

  // Unsectioned options sit after every named section, so a sticky header is
  // never followed by rows that do not belong to it.
  return ungrouped == null ? groups : [...groups, ungrouped];
}

/**
 * A select-style dropdown, ported from the plugin's `.color-dropdown` family:
 * a trigger carrying the current swatch and label, and a popover list that
 * can filter inline and group under sticky section headers.
 *
 * Not a native `<select>`, because the swatch, the two-line rows and the
 * filter are all things a native option list cannot render.
 *
 * Usage: controlled - hold `value` yourself and pass `null` for "nothing
 * picked yet", which is when `placeholder` shows. Turn on `searchable` once
 * the list outgrows about eight rows (the filter matches `label` and `hint`
 * together), and `sections` to group under sticky headers in the order the
 * sections first appear. `swatch` takes any CSS color, which is what makes it
 * the right control for an accent picker.
 *
 * Don't: don't set `sections` without giving the options a `section` - they all
 * fall into one unlabeled group and you get the flat list back with extra
 * markup. And don't reach for it as a drop-in `<select>` replacement for a
 * long list: it is a `aria-haspopup="listbox"` button with no typeahead and no
 * arrow-key highlight, so on a long unsearchable list a keyboard user has to
 * tab through every option.
 */
export function Dropdown(props: DropdownProps) {
  const {
    value,
    onChange,
    options,
    placeholder = 'Select...',
    searchable = false,
    sections = false,
    searchPlaceholder = 'Filter...',
    emptyText = 'No matches',
    disabled = false,
    ariaLabel,
    className,
    style,
  } = props;

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      const root = rootRef.current;
      if (root && event.target instanceof Node && !root.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open && searchable) searchRef.current?.focus();
    if (!open) setQuery('');
  }, [open, searchable]);

  const needle = query.trim().toLowerCase();
  const matches =
    needle.length === 0
      ? options
      : options.filter((option) =>
          `${option.label} ${option.hint ?? ''}`.toLowerCase().includes(needle)
        );

  const selected = options.find((option) => option.value === value) ?? null;
  const groups = sections ? groupOptions(matches) : [{ section: null, options: matches }];

  const classes = [
    'lynn-dropdown',
    open ? 'lynn-dropdown-open' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderOption = (option: DropdownOption) => (
    <button
      key={option.value}
      type="button"
      className={[
        'lynn-dropdown-item',
        option.value === value ? 'lynn-dropdown-item-active' : null,
      ]
        .filter(Boolean)
        .join(' ')}
      role="option"
      aria-selected={option.value === value}
      disabled={option.disabled}
      onClick={() => {
        onChange(option.value);
        setOpen(false);
      }}
    >
      {option.swatch != null ? (
        <span
          className="lynn-dropdown-swatch"
          style={{ background: option.swatch }}
          aria-hidden="true"
        />
      ) : null}
      <span className="lynn-dropdown-item-label">{option.label}</span>
      {option.hint != null ? (
        <span className="lynn-dropdown-item-hint">{option.hint}</span>
      ) : null}
    </button>
  );

  return (
    <div className={classes} style={style} ref={rootRef}>
      <button
        type="button"
        className="lynn-dropdown-trigger"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((wasOpen) => !wasOpen)}
      >
        {selected?.swatch != null ? (
          <span
            className="lynn-dropdown-swatch"
            style={{ background: selected.swatch }}
            aria-hidden="true"
          />
        ) : null}
        <span
          className={[
            'lynn-dropdown-label',
            selected == null ? 'lynn-dropdown-label-placeholder' : null,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {selected?.label ?? placeholder}
        </span>
        <span className="lynn-dropdown-arrow" aria-hidden="true">
          ▾
        </span>
      </button>

      {open ? (
        <div className="lynn-dropdown-list" role="listbox" aria-label={ariaLabel}>
          {searchable ? (
            <div className="lynn-dropdown-search-wrap">
              <input
                ref={searchRef}
                className="lynn-dropdown-search"
                type="text"
                value={query}
                placeholder={searchPlaceholder}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          ) : null}

          <div className="lynn-dropdown-scroll">
            {matches.length === 0 ? (
              <div className="lynn-dropdown-empty">{emptyText}</div>
            ) : (
              groups.map((group, groupIndex) => (
                <div
                  className="lynn-dropdown-section"
                  key={group.section ?? `__ungrouped-${groupIndex}`}
                >
                  {group.section != null ? (
                    <div className="lynn-dropdown-section-header">
                      {group.section}
                    </div>
                  ) : null}
                  {group.options.map(renderOption)}
                </div>
              ))
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
