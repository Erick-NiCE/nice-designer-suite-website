import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
function groupOptions(options) {
    const groups = [];
    const index = new Map();
    let ungrouped = null;
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
export function Dropdown(props) {
    const { value, onChange, options, placeholder = 'Select...', searchable = false, sections = false, searchPlaceholder = 'Filter...', emptyText = 'No matches', disabled = false, ariaLabel, className, style, } = props;
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const rootRef = useRef(null);
    const searchRef = useRef(null);
    useEffect(() => {
        if (!open)
            return;
        const onPointerDown = (event) => {
            const root = rootRef.current;
            if (root && event.target instanceof Node && !root.contains(event.target)) {
                setOpen(false);
            }
        };
        const onKeyDown = (event) => {
            if (event.key === 'Escape')
                setOpen(false);
        };
        document.addEventListener('mousedown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('mousedown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);
    useEffect(() => {
        if (open && searchable)
            searchRef.current?.focus();
        if (!open)
            setQuery('');
    }, [open, searchable]);
    const needle = query.trim().toLowerCase();
    const matches = needle.length === 0
        ? options
        : options.filter((option) => `${option.label} ${option.hint ?? ''}`.toLowerCase().includes(needle));
    const selected = options.find((option) => option.value === value) ?? null;
    const groups = sections ? groupOptions(matches) : [{ section: null, options: matches }];
    const classes = [
        'lynn-dropdown',
        open ? 'lynn-dropdown-open' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const renderOption = (option) => (_jsxs("button", { type: "button", className: [
            'lynn-dropdown-item',
            option.value === value ? 'lynn-dropdown-item-active' : null,
        ]
            .filter(Boolean)
            .join(' '), role: "option", "aria-selected": option.value === value, disabled: option.disabled, onClick: () => {
            onChange(option.value);
            setOpen(false);
        }, children: [option.swatch != null ? (_jsx("span", { className: "lynn-dropdown-swatch", style: { background: option.swatch }, "aria-hidden": "true" })) : null, _jsx("span", { className: "lynn-dropdown-item-label", children: option.label }), option.hint != null ? (_jsx("span", { className: "lynn-dropdown-item-hint", children: option.hint })) : null] }, option.value));
    return (_jsxs("div", { className: classes, style: style, ref: rootRef, children: [_jsxs("button", { type: "button", className: "lynn-dropdown-trigger", disabled: disabled, "aria-haspopup": "listbox", "aria-expanded": open, "aria-label": ariaLabel, onClick: () => setOpen((wasOpen) => !wasOpen), children: [selected?.swatch != null ? (_jsx("span", { className: "lynn-dropdown-swatch", style: { background: selected.swatch }, "aria-hidden": "true" })) : null, _jsx("span", { className: [
                            'lynn-dropdown-label',
                            selected == null ? 'lynn-dropdown-label-placeholder' : null,
                        ]
                            .filter(Boolean)
                            .join(' '), children: selected?.label ?? placeholder }), _jsx("span", { className: "lynn-dropdown-arrow", "aria-hidden": "true", children: "\u25BE" })] }), open ? (_jsxs("div", { className: "lynn-dropdown-list", role: "listbox", "aria-label": ariaLabel, children: [searchable ? (_jsx("div", { className: "lynn-dropdown-search-wrap", children: _jsx("input", { ref: searchRef, className: "lynn-dropdown-search", type: "text", value: query, placeholder: searchPlaceholder, onChange: (event) => setQuery(event.target.value) }) })) : null, _jsx("div", { className: "lynn-dropdown-scroll", children: matches.length === 0 ? (_jsx("div", { className: "lynn-dropdown-empty", children: emptyText })) : (groups.map((group, groupIndex) => (_jsxs("div", { className: "lynn-dropdown-section", children: [group.section != null ? (_jsx("div", { className: "lynn-dropdown-section-header", children: group.section })) : null, group.options.map(renderOption)] }, group.section ?? `__ungrouped-${groupIndex}`)))) })] })) : null] }));
}
