import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * The generic "icon + title + description" card.
 *
 * One component for the six independent near-duplicates of this shape
 * (`.pillar-card`, `.sp-card`, `.score-card`, `.tip-card`, ...). The two
 * layouts are the only real structural difference between them; the rest was
 * per-page drift in padding and type scale, resolved here toward the
 * homepage's `.pillar-card` (vertical) and the-suite's `.sp-card`
 * (horizontal).
 *
 * Usage: `vertical` for a pillar grid of three or four equal tiles,
 * `horizontal` for a list of rows where the icon is a marker beside the text.
 * `footer` gets its own hairline rule, so put a `Badge` or a small link there
 * rather than at the end of `description`. Give it an `id` when a `DocRail`
 * link should jump to it. Reach for `FeatureCard` instead once a tile needs a
 * gradient tile, bullets, tags and a status pill.
 *
 * Don't: don't let the `icon` carry meaning on its own - that span is
 * `aria-hidden`, so whatever it says has to also be in `title` or
 * `description`. And don't switch between the two layouts inside one grid: the
 * padding and type scale differ, so a mixed row stops lining up.
 */
export function IconCard(props) {
    const { icon, title, description, layout = 'vertical', footer, children, id, className, style, } = props;
    const classes = ['lynn-icon-card', `lynn-icon-card-${layout}`, className]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { className: classes, style: style, id: id, children: [_jsx("span", { className: "lynn-icon-card-icon", "aria-hidden": "true", children: icon }), _jsxs("div", { className: "lynn-icon-card-main", children: [_jsx("div", { className: "lynn-icon-card-title", children: title }), description != null ? (_jsx("div", { className: "lynn-icon-card-desc", children: description })) : null, children, footer != null ? (_jsx("div", { className: "lynn-icon-card-footer", children: footer })) : null] })] }));
}
