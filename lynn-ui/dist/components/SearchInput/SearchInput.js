import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export function SearchInput(props) {
    const { value, onChange, placeholder = 'Search…', icon = '⌕', expandOnFocus = false, ariaLabel, disabled = false, className, style, } = props;
    const classes = [
        'lynn-search-input',
        expandOnFocus ? 'lynn-search-input-expanding' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { className: classes, style: style, children: [_jsx("span", { className: "lynn-search-input-icon", "aria-hidden": "true", children: icon }), _jsx("input", { className: "lynn-search-input-field", type: "search", value: value, placeholder: placeholder, "aria-label": ariaLabel ?? placeholder, disabled: disabled, onChange: (event) => onChange(event.target.value) })] }));
}
