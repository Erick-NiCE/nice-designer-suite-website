import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A Lynn segmented control.
 *
 * Deliberately knows nothing about panels or content - it is a controlled
 * value picker, so a panel switcher, a theme toggle and a filter row can all
 * be the same primitive.
 *
 * Usage: use it directly for a filter row or a segmented setting, and reach for
 * `TabPanels` when the choice reveals content - that wrapper sets
 * `semantics="tablist"` and the ARIA wiring for you. Keep it to about five
 * segments; past that a `Dropdown` reads better (which is the rule the
 * playground's own `Control` applies). `stretch` divides the available width
 * evenly. An icon-only segment needs `option.ariaLabel`. `onChange`'s second
 * argument is the element the change came from, for handlers that need a
 * screen position to animate out of; ignore it otherwise.
 *
 * Don't: don't pass a `value` that matches no `option.value` - nothing is
 * active, so `tabIndex` is `-1` on every segment, the group drops out of the
 * tab order entirely, and the arrow-key handler bails before moving anything.
 * A "nothing selected yet" state needs its own option, not an unmatched value.
 * And don't set `semantics="tablist"` on a group that drives no panels: it
 * promises tabs that are not there.
 */
export function Tabs(props) {
    const { options, value, onChange, variant = 'pill', tone = 'blue', stretch = false, semantics = 'radiogroup', ariaLabel, className, style, } = props;
    const classes = [
        'lynn-tabs',
        `lynn-tabs-${variant}`,
        `lynn-tabs-tone-${tone}`,
        stretch ? 'lynn-tabs-stretch' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    // Arrow keys walk the group, skipping disabled segments and wrapping -
    // the behavior both `radiogroup` and `tablist` are expected to have.
    const onKeyDown = (event) => {
        const step = event.key === 'ArrowRight' || event.key === 'ArrowDown'
            ? 1
            : event.key === 'ArrowLeft' || event.key === 'ArrowUp'
                ? -1
                : 0;
        if (step === 0)
            return;
        const from = options.findIndex((option) => option.value === value);
        if (from < 0)
            return;
        for (let hop = 1; hop <= options.length; hop += 1) {
            const count = options.length;
            const index = (((from + step * hop) % count) + count) % count;
            const candidate = options[index];
            if (candidate && !candidate.disabled) {
                event.preventDefault();
                // The group, not a segment: a keystroke did not land on any one of
                // them, and the group's own box is the honest answer to "where did
                // this change come from".
                onChange(candidate.value, event.currentTarget);
                return;
            }
        }
    };
    return (_jsx("div", { className: classes, style: style, role: semantics, "aria-label": ariaLabel, onKeyDown: onKeyDown, children: options.map((option) => {
            const active = option.value === value;
            return (_jsxs("button", { type: "button", className: [
                    'lynn-tabs-segment',
                    active ? 'lynn-tabs-segment-active' : null,
                ]
                    .filter(Boolean)
                    .join(' '), role: semantics === 'tablist' ? 'tab' : 'radio', "aria-selected": semantics === 'tablist' ? active : undefined, "aria-checked": semantics === 'radiogroup' ? active : undefined, "aria-label": option.ariaLabel, disabled: option.disabled, tabIndex: active ? 0 : -1, onClick: (event) => onChange(option.value, event.currentTarget), children: [option.icon != null ? (_jsx("span", { className: "lynn-tabs-segment-icon", "aria-hidden": "true", children: option.icon })) : null, option.label != null ? (_jsx("span", { className: "lynn-tabs-segment-label", children: option.label })) : null] }, option.value));
        }) }));
}
