import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Badge } from '../Badge/Badge.js';
/**
 * The rich icon-tile feature card.
 *
 * Ported from the-suite.html's `.tool-card` family, which is the fullest of
 * the three verbatim copies (the-suite / roadmap / index) - it is the only
 * one carrying the `.tool-why` accent-quote block.
 *
 * `density="compact"` covers tools.html's smaller `.suite-card` /
 * `.mcp-card` / `.skill-card` grid, which is the same card at a tighter
 * scale with the icon tile dropped, rather than a separate component.
 *
 * Usage: `iconGradient` and `accentColor` are raw CSS values forwarded as
 * `--lynn-t-gradient` / `--lynn-t-color`, so build them out of
 * `designTokens.color.accent[...]` rather than a fresh hex, and keep the two
 * in the same accent family - the gradient fills the tile and the flat color
 * tints the bullet dots, the quote rule and the hover ring. `whyText` takes
 * markup so the source's "Why use it:" bold clause survives. Give the card an
 * `id` when a `DocRail` section link should jump to it.
 *
 * Don't: don't pass `statusVariant` without `status` - the footer badge only
 * renders when there is a `status` label, so the variant alone is a silent
 * no-op. And don't use `density="compact"` with a rich `icon` node: that
 * density drops the 52px gradient tile down to a bare 22px glyph, so anything
 * detailed becomes unreadable.
 */
export function FeatureCard(props) {
    const { icon, iconGradient, name, tagline, whyText, bulletsLabel = 'What it handles', bullets = [], tags = [], status, statusVariant = 'active', accentColor = 'var(--lynn-color-blue)', density = 'full', id, children, className, style, } = props;
    const classes = [
        'lynn-feature-card',
        `lynn-feature-card-${density}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const mergedStyle = {
        ...style,
        '--lynn-t-color': accentColor,
        '--lynn-t-gradient': iconGradient,
    };
    const hasFooter = tags.length > 0 || status != null;
    return (_jsxs("div", { className: classes, style: mergedStyle, id: id, children: [_jsx("div", { className: "lynn-feature-card-glow", "aria-hidden": "true" }), _jsxs("div", { className: "lynn-feature-card-header", children: [_jsx("div", { className: "lynn-feature-card-icon", "aria-hidden": "true", children: icon }), _jsxs("div", { className: "lynn-feature-card-name-wrap", children: [_jsx("div", { className: "lynn-feature-card-name", children: name }), tagline != null ? (_jsx("div", { className: "lynn-feature-card-tagline", children: tagline })) : null] })] }), _jsxs("div", { className: "lynn-feature-card-body", children: [whyText != null ? (_jsx("p", { className: "lynn-feature-card-why", children: whyText })) : null, bullets.length > 0 ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "lynn-feature-card-bullets-label", children: bulletsLabel }), _jsx("ul", { className: "lynn-feature-card-bullets", children: bullets.map((bullet, index) => (
                                // Bullets are prose, with no id of their own to key on.
                                _jsx("li", { children: bullet }, index))) })] })) : null, children, hasFooter ? (_jsxs("div", { className: "lynn-feature-card-footer", children: [_jsx("div", { className: "lynn-feature-card-tags", children: tags.map((tag) => (_jsx("span", { className: "lynn-feature-card-tag", children: tag }, tag))) }), status != null ? (_jsx(Badge, { status: statusVariant, children: status })) : null] })) : null] })] }));
}
