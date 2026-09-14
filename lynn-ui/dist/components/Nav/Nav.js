import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useScrollHideNav } from '../../hooks/useScrollHideNav.js';
/**
 * The Lynn top navigation bar: 60px tall, sticky, `rgba(33,33,43,0.92)` with
 * a 16px backdrop blur, auto-hiding on scroll-down.
 *
 * Deliberately excludes the site's left `doc-rail`. That rail is generated
 * from `nice-effects.js`'s `DOC_PAGES` array - a hard-coded map of the
 * marketing site's own pages, with per-page section anchors, search, a
 * persisted collapse state and scroll-warmth highlighting. It is page
 * content, not a reusable design-system primitive, so it has no place in a
 * component package.
 *
 * Usage: one per page, first in the tree - it is `position: sticky; top: 0` at
 * `z-index: 100`, so it needs to be a direct child of the scrolling column
 * rather than nested inside a transformed or `overflow: hidden` ancestor. The
 * single `cta` slot is where a `Button`, a `ThemeToggle` or a `SearchInput`
 * goes. `logoHref={null}` renders the wordmark as plain text, for a page that
 * is already the home page. Turn `autoHide` off for a docs shell, where a nav
 * that slides away mid-scroll costs more than the space it frees.
 *
 * Don't: don't expect it to re-skin with the theme - it paints the site's
 * literal `rgba(33,33,43,0.92)` rather than reading the neutral tokens, so in
 * `light` mode it stays dark unless you override that one background in
 * `className` (which is exactly what the playground shell does). And don't try
 * to fit a link row into `cta`: the source nav has one action slot, so it is a
 * single node, not a list.
 */
export function Nav(props) {
    const { logo, logoHref = '#', cta, autoHide = true, ariaLabel = 'Main', className, style, } = props;
    const hidden = useScrollHideNav({ enabled: autoHide });
    const classes = [
        'lynn-nav',
        hidden ? 'lynn-nav-hidden' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const brand = logo ?? (_jsxs(_Fragment, { children: [_jsx("span", { className: "lynn-nav-logo-nice", children: "NiCE" }), _jsx("span", { className: "lynn-nav-logo-designer", children: " Designer" }), _jsx("span", { className: "lynn-nav-logo-suite", children: " Suite" })] }));
    return (_jsxs("nav", { className: classes, style: style, "aria-label": ariaLabel, children: [logoHref == null ? (_jsx("span", { className: "lynn-nav-logo", children: brand })) : (_jsx("a", { className: "lynn-nav-logo", href: logoHref, children: brand })), cta != null ? _jsx("div", { className: "lynn-nav-cta", children: cta }) : null] }));
}
