import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientBackground, } from '../GradientBackground/GradientBackground.js';
/**
 * The Lynn hero: full-viewport, animated brand gradient, radial vignette and
 * three drifting orbs behind centered eyebrow / heading / subtitle / CTA
 * slots.
 *
 * Ports index.html's richer three-orb hero (blue top-left, indigo
 * bottom-right, emerald mid-right) rather than lynn.html's two-orb demo.
 *
 * Usage: one per page, as the opener, and put the signature sweep on one or
 * two words by nesting `ShimmerText` inside `heading` rather than wrapping the
 * whole line. `actions` is the CTA row - one or two `Button`s - and `children`
 * layers anything else below them. The eyebrow / heading / subtitle / actions
 * order is the system's label-then-heading hierarchy, so skipping `eyebrow`
 * costs the section its label.
 *
 * Don't: don't turn `radialMask` off while `animated` and `orbs` are on - the
 * vignette is what fades the full-saturation gradient back into `bg` behind
 * the text, and without it the headline sits on a drifting mid-tone with no
 * guaranteed contrast. And don't stack two heroes on one page: it ports a
 * full-viewport section, so the second one just pushes the real content
 * another screen down.
 */
export function Hero(props) {
    const { heading, eyebrow, subtitle, actions, children, animated = 'slow', orbs = true, radialMask = true, className, style, } = props;
    const classes = ['lynn-hero', className].filter(Boolean).join(' ');
    return (_jsxs("section", { className: classes, style: style, children: [_jsx(GradientBackground, { className: "lynn-hero-bg", animated: animated }), radialMask ? _jsx("div", { className: "lynn-hero-radial" }) : null, orbs ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "lynn-hero-orb lynn-hero-orb-1" }), _jsx("div", { className: "lynn-hero-orb lynn-hero-orb-2" }), _jsx("div", { className: "lynn-hero-orb lynn-hero-orb-3" })] })) : null, _jsxs("div", { className: "lynn-hero-content", children: [eyebrow != null ? (_jsx("div", { className: "lynn-hero-eyebrow", children: eyebrow })) : null, _jsx("h1", { className: "lynn-hero-title", children: heading }), subtitle != null ? (_jsx("p", { className: "lynn-hero-subtitle", children: subtitle })) : null, actions != null ? (_jsx("div", { className: "lynn-hero-actions", children: actions })) : null, children] })] }));
}
