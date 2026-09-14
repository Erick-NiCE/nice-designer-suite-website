import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../Button/Button.js';
/**
 * The site's repeated promo panel: a sentence on the left, one pill CTA on
 * the right, stacking under 720px.
 *
 * Ported from the two real copies of this shape - marketplace.html's
 * `.mk-cta` and the-suite/index's `.sp-marketplace-cta` - which differ only
 * in fill, scale and CTA weight, so they are one component with two
 * variants rather than two components.
 *
 * Usage: one per section, at the end of it - `gradient` for the loud
 * marketplace strip and `tinted` for the quieter in-page one. `variant` also
 * picks the CTA's default weight (`primary` for gradient, `secondary` for
 * tinted), so only reach for `ctaVariant` when you want to break that
 * pairing. `text` takes markup, which is how the source keeps its bold
 * leading clause.
 *
 * Don't: don't set `ctaTarget="_blank"` and also pass a `ctaRel` that omits
 * `noopener` - the safe default is only applied when `ctaRel` is left unset,
 * so specifying `ctaRel` opts you out of it. And don't pass a second action:
 * there is one CTA slot by design, and a banner with two competing buttons is
 * the pattern this component exists to prevent.
 */
export function CtaBanner(props) {
    const { text, ctaLabel, ctaHref, variant = 'gradient', ctaVariant, ctaIcon, ctaTarget, ctaRel, className, style, } = props;
    const classes = [
        'lynn-cta-banner',
        `lynn-cta-banner-${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const resolvedCtaVariant = ctaVariant ?? (variant === 'gradient' ? 'primary' : 'secondary');
    return (_jsxs("div", { className: classes, style: style, children: [_jsx("div", { className: "lynn-cta-banner-text", children: text }), _jsx(Button, { variant: resolvedCtaVariant, className: "lynn-cta-banner-btn", href: ctaHref, ...(ctaIcon != null ? { icon: ctaIcon } : {}), ...(ctaTarget != null ? { target: ctaTarget } : {}), ...(ctaTarget != null ? { rel: ctaRel ?? 'noopener' } : ctaRel != null ? { rel: ctaRel } : {}), children: ctaLabel })] }));
}
