import type { CSSProperties, ReactNode } from 'react';
export interface SearchInputProps {
    value: string;
    /** Called with the field's new text, not the event. */
    onChange: (value: string) => void;
    placeholder?: string;
    /** Leading glyph. Defaults to the `⌕` the real nav search uses. */
    icon?: ReactNode;
    /**
     * The 220px-to-280px widening on focus from tools.html's `.nav-search`, for
     * a field sitting in a nav row. Off by default, which is dashboard.html's
     * plain full-width bar.
     */
    expandOnFocus?: boolean;
    /** Accessible name. Needed whenever there is no visible label. */
    ariaLabel?: string;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
}
/**
 * The icon-prefixed search field.
 *
 * Consolidates tools.html's `.nav-search` (which grows on focus) and
 * dashboard.html's plain `.search-bar` (which fills its container) - the same
 * field at two widths, so the difference is the `expandOnFocus` flag rather
 * than two components.
 *
 * Usage: controlled, and `onChange` hands you the string rather than the
 * event, so `onChange={setQuery}` is the whole wiring. Leave `expandOnFocus`
 * off for a field that owns its row (a dashboard filter bar); turn it on only
 * for one sitting inside a nav, where the 220px-to-280px growth is the point.
 *
 * Don't: don't rely on the `ariaLabel` fallback - it defaults to
 * `placeholder`, so a decorative placeholder ("Search…") becomes the field's
 * whole accessible name; pass `ariaLabel` saying what is being searched. And
 * don't expect it to debounce or submit: it fires on every keystroke and has
 * no form, no Enter handling and no clear button.
 */
export declare function SearchInput(props: SearchInputProps): import("react").JSX.Element;
