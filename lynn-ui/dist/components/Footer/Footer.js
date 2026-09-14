import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { usePointerGrid } from '../../hooks/usePointerGrid.js';
const DEFAULT_COLUMNS = [
    {
        title: 'Product',
        links: [
            { label: 'Overview', href: './index.html' },
            { label: 'Install Guide', href: './install-guide.html' },
            { label: 'Claude Skills', href: './claude-skills.html' },
            { label: 'The Suite', href: './the-suite.html' },
        ],
    },
    {
        title: 'Learn',
        links: [
            { label: 'Use Cases', href: './use-cases.html' },
            { label: 'Scoring', href: './scoring.html' },
            { label: 'Dashboard', href: './dashboard.html' },
            { label: 'Roadmap', href: './roadmap.html' },
        ],
    },
    {
        title: 'Reference',
        links: [
            { label: 'Release Notes', href: './release-notes.html' },
            { label: 'FAQ', href: './faq.html' },
            { label: 'Tools', href: './tools.html' },
            { label: 'Marketplace', href: './marketplace.html' },
            { label: 'Lynn', href: './lynn.html' },
        ],
    },
];
/**
 * The Lynn site footer: a top border, the wordmark, and a three-column link
 * grid. Ported directly from theme.css's already-centralized `.site-footer`.
 *
 * Behind the content sits a faint dot lattice that lights up under the
 * pointer (and under a finger): `usePointerGrid` writes the pointer position
 * as `--lynn-mx` / `--lynn-my`, and a masked second lattice brightens the
 * dots inside a 150px radius of it. Always on, no prop, and the pointer half
 * disables itself under `prefers-reduced-motion`.
 *
 * Usage: one per page, last in the tree. Column `title`s are real headings
 * rendered visually hidden - the source footer shows no headings, but a screen
 * reader still needs the grouping - so write them as labels ("Product",
 * "Reference"), not as decoration. Mark the current page's link `active` to
 * get the blue treatment and `aria-current="page"`.
 *
 * Don't: don't ship the default `columns` outside this site - they are the
 * marketing site's own relative `./*.html` paths, so in any other app every
 * link 404s. Pass your own `columns` and `logo` instead.
 */
export function Footer(props) {
    const { logo, columns = DEFAULT_COLUMNS, ariaLabel = 'Footer', className, style, } = props;
    const classes = ['lynn-footer', className].filter(Boolean).join(' ');
    // Always on, and deliberately prop-less: the grid is part of what the
    // footer *is*, not a variant of it. It sits at 14% opacity behind the
    // links, so there is nothing here a consumer would need to switch off -
    // and `prefers-reduced-motion` already drops the pointer half by itself.
    const footerRef = usePointerGrid();
    const brand = logo ?? (_jsxs(_Fragment, { children: [_jsx("span", { className: "lynn-footer-logo-nice", children: "NiCE" }), _jsx("span", { className: "lynn-footer-logo-designer", children: " Designer" })] }));
    return (_jsxs("footer", { ref: footerRef, className: classes, style: style, children: [_jsx("div", { className: "lynn-footer-grid", "aria-hidden": "true" }), _jsxs("div", { className: "lynn-footer-top", children: [_jsx("div", { className: "lynn-footer-brand", children: _jsx("div", { className: "lynn-footer-logo", children: brand }) }), _jsx("nav", { className: "lynn-footer-nav", "aria-label": ariaLabel, children: columns.map((column, columnIndex) => (_jsxs("div", { className: "lynn-footer-nav-col", children: [_jsx("h2", { className: "lynn-visually-hidden", children: column.title }), column.links.map((link, linkIndex) => (_jsx("a", { href: link.href, className: link.active ? 'lynn-footer-link-active' : undefined, "aria-current": link.active ? 'page' : undefined, children: link.label }, `${link.href}-${linkIndex}`)))] }, `${column.title}-${columnIndex}`))) })] })] }));
}
