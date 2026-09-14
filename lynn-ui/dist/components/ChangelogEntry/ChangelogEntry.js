import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId, useState } from 'react';
import { Badge } from '../Badge/Badge.js';
import { Button } from '../Button/Button.js';
function ChangelogBody(props) {
    const { version, date, isLatest, groups } = props;
    return (_jsxs("div", { className: "lynn-changelog-main", children: [_jsxs("div", { className: "lynn-changelog-meta", children: [_jsxs("div", { className: "lynn-changelog-version", children: [version, isLatest ? _jsx(Badge, { tone: "emerald", bordered: true, children: "Latest" }) : null] }), _jsx("div", { className: "lynn-changelog-date", children: date })] }), _jsx("div", { className: "lynn-changelog-content", children: groups.map((group, groupIndex) => (_jsxs("div", { className: "lynn-changelog-group", children: [_jsx("div", { className: "lynn-changelog-group-label", children: group.label }), _jsx("ul", { className: `lynn-changelog-list lynn-changelog-list-${group.tone ?? 'blue'}`, children: group.items.map((item, itemIndex) => (_jsx("li", { children: item }, itemIndex))) })] }, groupIndex))) })] }));
}
/**
 * One release on a changelog.
 *
 * Ported from release-notes.html's `.changelog-card` family, which has two
 * real forms: the newest release renders expanded, as a version sidebar
 * beside its grouped bullet lists; every older one renders as a toggle row
 * that expands the identical body. Both share `ChangelogBody`, so the two
 * forms cannot drift.
 *
 * The toggle row is a real `Button` at `ghost`, laid out as a full-width row -
 * and its chevron uses the same rotate-on-open treatment as `Accordion`.
 *
 * Usage: exactly one entry in a list carries `isLatest`, and it renders the
 * expanded no-toggle form with the LATEST pill; every other entry is a
 * collapsed toggle row. Give each card an `id` (`release-v11-4`) so a
 * `DocRail` link and a deep link both land on it - without one the collapsible
 * body still gets a generated `aria-controls` target, but the card itself has
 * no anchor. Keep `group.tone` to the three the source uses: `blue` for new
 * features, `coral` for fixes, `emerald` for improvements.
 *
 * Don't: don't pass `isLatest` and `defaultOpen` together - the `isLatest`
 * branch returns before the toggle is ever built, so `defaultOpen` is dead
 * code there. And don't drive `defaultOpen` from state to open a card later:
 * it is read once into `useState`, so it only means anything on the first
 * render (the playground re-keys the whole preview for exactly this reason).
 */
export function ChangelogEntry(props) {
    const { version, date, isLatest = false, defaultOpen = false, groups, id, className, style, } = props;
    const [open, setOpen] = useState(defaultOpen);
    // The collapsible body needs an id the toggle can point `aria-controls` at,
    // whether or not the caller gave the card one of its own.
    const generatedId = useId();
    const classes = ['lynn-changelog-card', className].filter(Boolean).join(' ');
    if (isLatest) {
        return (_jsx("div", { className: classes, style: style, id: id, children: _jsx(ChangelogBody, { version: version, date: date, isLatest: true, groups: groups }) }));
    }
    const bodyId = `${id ?? generatedId}-body`;
    return (_jsxs("div", { className: classes, style: style, id: id, children: [_jsxs(Button, { variant: "ghost", className: "lynn-changelog-toggle", onClick: () => setOpen(!open), "aria-expanded": open, "aria-controls": bodyId, children: [_jsxs("span", { className: "lynn-changelog-toggle-left", children: [_jsx("span", { className: "lynn-changelog-toggle-version", children: version }), _jsx("span", { className: "lynn-changelog-toggle-date", children: date })] }), _jsx("span", { className: [
                            'lynn-changelog-toggle-arrow',
                            open ? 'lynn-changelog-toggle-arrow-open' : null,
                        ]
                            .filter(Boolean)
                            .join(' '), "aria-hidden": "true", children: "\u25BE" })] }), _jsx("div", { className: "lynn-changelog-collapsible", id: bodyId, hidden: !open, children: _jsx(ChangelogBody, { version: version, date: date, isLatest: false, groups: groups }) })] }));
}
