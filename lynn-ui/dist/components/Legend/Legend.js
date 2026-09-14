import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A color-key row.
 *
 * `dot` is roadmap.html's `.legend` / `.legend-item` / `.legend-dot`; `pill`
 * is the-suite.html's `.legend-pill` + `.legend-desc` pairing, where the key
 * *is* the badge being explained rather than a swatch beside it.
 *
 * Usage: `variant="dot"` when the legend explains colors used elsewhere (a
 * `Timeline`'s phase dots, a chart), `pill` when the thing being explained is
 * a `Badge` the reader will meet on the page. `item.swatch` is any CSS color,
 * forwarded as `--lynn-legend-swatch`, so feed it the same
 * `designTokens.color.accent[...]` value the real element uses or the key
 * stops matching what it keys.
 *
 * Don't: don't set `item.description` on the `dot` variant - only `pill`
 * renders one, so the text disappears with no warning. And keep the row short:
 * it is a flex row with no wrapping strategy beyond the container's, so a
 * ten-item legend turns into a wall of chips.
 */
export function Legend(props) {
    const { items, variant = 'dot', label, className, style } = props;
    const classes = ['lynn-legend', `lynn-legend-variant-${variant}`, className]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { className: classes, style: style, children: [label != null ? (_jsx("span", { className: "lynn-legend-label", children: label })) : null, items.map((item, index) => {
                const itemStyle = {
                    '--lynn-legend-swatch': item.swatch,
                };
                return (
                // A legend key is a color plus prose; neither is a stable id.
                _jsx("span", { className: "lynn-legend-item", style: itemStyle, children: variant === 'dot' ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "lynn-legend-dot", "aria-hidden": "true" }), item.label] })) : (_jsxs(_Fragment, { children: [_jsx("span", { className: "lynn-legend-pill", children: item.label }), item.description != null ? (_jsx("span", { className: "lynn-legend-desc", children: item.description })) : null] })) }, index));
            })] }));
}
