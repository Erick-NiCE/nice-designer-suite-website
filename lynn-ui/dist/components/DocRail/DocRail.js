import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useAnchorWarmth } from '../../hooks/useAnchorWarmth.js';
import { ScrollArea } from '../ScrollArea/ScrollArea.js';
function matches(label, needle) {
    return needle.length === 0 || label.toLowerCase().includes(needle);
}
/**
 * The rail's own toggle glyph: three bars that cross into an X.
 *
 * `open` describes what the button DOES, not the rail's current state: the
 * collapse button (visible while the rail is open) passes `open={isCollapsed}`
 * so it reads as an X - "click to close" - and the expand tab (visible while
 * collapsed) passes the same `open={isCollapsed}` so it reads as three bars -
 * "click to open." Both controls key off the same boolean on purpose, so the
 * glyph always matches the action the visible button performs.
 * The whole animation is two CSS transforms and one opacity in DocRail.css;
 * the bars are `<rect>`s rather than `<line>`s because a zero-height line
 * has no fill box for `transform-origin: center` to resolve against. The
 * 5-unit gap between the three bars is load-bearing: it is the exact travel
 * that puts both crossed arms' centers on the viewBox's own center, so the
 * X is symmetric without any nudge. The arms are also scaled up in the
 * crossed state - see the comment on `.lynn-doc-rail-icon-crossed` for why a
 * 45-degree bar has to be longer to read the same size.
 */
function DocRailToggleIcon({ open }) {
    return (_jsxs("svg", { className: [
            'lynn-doc-rail-icon',
            open ? null : 'lynn-doc-rail-icon-crossed',
        ]
            .filter(Boolean)
            .join(' '), viewBox: "0 0 16 16", width: "14", height: "14", "aria-hidden": "true", focusable: "false", children: [_jsx("rect", { className: "lynn-doc-rail-icon-bar lynn-doc-rail-icon-top", x: "2.5", y: "2.25", width: "11", height: "1.5", rx: "0.75" }), _jsx("rect", { className: "lynn-doc-rail-icon-bar lynn-doc-rail-icon-mid", x: "2.5", y: "7.25", width: "11", height: "1.5", rx: "0.75" }), _jsx("rect", { className: "lynn-doc-rail-icon-bar lynn-doc-rail-icon-bot", x: "2.5", y: "12.25", width: "11", height: "1.5", rx: "0.75" })] }));
}
/**
 * The documentation sidebar: a fixed 220px glass panel that collapses to a
 * slim edge tab.
 *
 * Ported from theme.css's `.doc-rail*` block and nice-effects.js's
 * `buildDocRail()`. The original decided between its two shapes from the
 * current pathname and a `standalone` flag in its own page table; here that
 * is the `mode` prop, so the same rail also works for a hash-routed docs app
 * that has no page table at all.
 *
 * Usage: `mode="sections"` for one page's own anchors, `mode="pages"` for the
 * cross-document switcher - in which case set `activeHref`, because sub-items
 * only render nested under the page you are on. Either pass `collapsed` plus
 * `onToggle` to control it from outside (which is how the playground lets a
 * card drive the page's real rail) or pass neither and let it track its own.
 * `searchable` filters whichever list is showing, so it is never inert.
 *
 * Don't: don't mount two on one page - the rail is `position: fixed` at 220px
 * wide, pinned under the nav and 24px from the left edge, so a second one
 * lands exactly on top of the first; override the position in `className` if
 * you need it somewhere else. And don't list a section whose `id` has no
 * element on the page: the anchor goes nowhere and `useAnchorWarmth` can never
 * highlight it, so the row reads as permanently inactive.
 */
export function DocRail(props) {
    const { mode = 'pages', groups = [], pages = [], activeHref, collapsed, onToggle, searchable = false, label, searchPlaceholder = 'Search pages…', emptyText = 'No matching pages', ariaLabel, className, style, } = props;
    const [selfCollapsed, setSelfCollapsed] = useState(false);
    const [query, setQuery] = useState('');
    const isCollapsed = collapsed ?? selfCollapsed;
    const needle = query.trim().toLowerCase();
    const warmth = useAnchorWarmth(groups.flatMap((group) => group.items.map((item) => item.id)));
    const setCollapsed = (next) => {
        if (collapsed == null)
            setSelfCollapsed(next);
        onToggle?.(next);
    };
    const headerLabel = label ?? (mode === 'sections' ? 'On This Page' : 'Documentation');
    // The original only ever filtered the flat page links. Filtering whichever
    // list the rail is actually showing means the search box is never inert.
    const visiblePages = pages.filter((page) => matches(page.label, needle));
    const visibleGroups = groups
        .map((group) => ({
        label: group.label,
        items: group.items.filter((item) => matches(item.label, needle)),
    }))
        .filter((group) => group.items.length > 0);
    const empty = mode === 'sections' ? visibleGroups.length === 0 : visiblePages.length === 0;
    // A section link can point at a collapsed <details> (an FAQ question, an
    // older changelog entry). Open it before the jump, or the anchor lands on
    // a closed summary - the same fixup buildDocRail() applies.
    const openTargetDetails = (id) => {
        const target = document.getElementById(id);
        if (target instanceof HTMLDetailsElement)
            target.open = true;
    };
    const renderGroups = (list) => list.map((group) => (_jsxs("div", { className: "lynn-doc-rail-group", children: [_jsx("div", { className: "lynn-doc-rail-group-label", children: group.label }), group.items.map((item) => {
                const heat = warmth[item.id] ?? 0;
                const itemStyle = { '--lynn-warmth': heat };
                return (_jsx("a", { className: "lynn-doc-rail-sublink", href: `#${item.id}`, style: itemStyle, "aria-current": heat > 0 ? 'true' : undefined, onClick: () => openTargetDetails(item.id), children: item.label }, item.id));
            })] }, group.label)));
    return (_jsxs(_Fragment, { children: [_jsxs("nav", { className: [
                    'lynn-doc-rail',
                    isCollapsed ? 'lynn-doc-rail-collapsed' : null,
                    className,
                ]
                    .filter(Boolean)
                    .join(' '), style: style, "aria-label": ariaLabel ??
                    (mode === 'sections' ? 'Page navigation' : 'Documentation pages'), children: [_jsxs("div", { className: "lynn-doc-rail-header", children: [_jsx("div", { className: "lynn-doc-rail-label", children: headerLabel }), _jsx("button", { type: "button", className: "lynn-doc-rail-collapse", "aria-label": "Collapse navigation menu", "aria-expanded": !isCollapsed, onClick: () => setCollapsed(true), children: _jsx(DocRailToggleIcon, { open: isCollapsed }) })] }), searchable ? (_jsx("div", { className: "lynn-doc-rail-search-wrap", children: _jsx("input", { className: "lynn-doc-rail-search", type: "text", value: query, placeholder: searchPlaceholder, "aria-label": searchPlaceholder, onChange: (event) => setQuery(event.target.value) }) })) : null, _jsx(ScrollArea, { className: "lynn-doc-rail-scroll", radius: "14px", ariaLabel: headerLabel, children: _jsx("div", { className: "lynn-doc-rail-links", children: mode === 'sections'
                                ? renderGroups(visibleGroups)
                                : visiblePages.map((page) => {
                                    const active = page.href === activeHref;
                                    return (_jsxs("div", { className: "lynn-doc-rail-page", children: [_jsx("a", { className: [
                                                    'lynn-doc-rail-link',
                                                    active ? 'lynn-doc-rail-link-active' : null,
                                                ]
                                                    .filter(Boolean)
                                                    .join(' '), href: page.href, "aria-current": active ? 'page' : undefined, children: page.label }), active ? renderGroups(visibleGroups) : null] }, page.href));
                                }) }) }), empty ? _jsx("div", { className: "lynn-doc-rail-empty", children: emptyText }) : null] }), _jsx("button", { type: "button", className: [
                    'lynn-doc-rail-expand',
                    isCollapsed ? 'lynn-doc-rail-expand-visible' : null,
                ]
                    .filter(Boolean)
                    .join(' '), "aria-label": "Expand navigation menu", "aria-expanded": !isCollapsed, onClick: () => setCollapsed(false), children: _jsx(DocRailToggleIcon, { open: isCollapsed }) })] }));
}
