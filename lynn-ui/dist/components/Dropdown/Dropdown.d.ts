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
export declare function Dropdown(props: DropdownProps): import("react").JSX.Element;
