import type { CSSProperties, ReactNode } from 'react';
import type { ButtonVariant } from '../Button/Button.js';
/**
 * `gradient` - marketplace.html's `.mk-cta`: an indigo-to-blue gradient panel
 * with an indigo border and a solid blue pill CTA.
 * `tinted` - the-suite.html / index.html's `.sp-marketplace-cta`: a flat
 * `lynn`-tinted panel at a tighter scale with a translucent CTA.
 */
export type CtaBannerVariant = 'gradient' | 'tinted';
export interface CtaBannerProps {
    /** The pitch. Pass markup to keep the source's bold clause. */
    text: ReactNode;
    ctaLabel: ReactNode;
    ctaHref: string;
    variant?: CtaBannerVariant;
    /**
     * Overrides the CTA's `Button` variant. Defaults to `primary` for
     * `gradient` and `secondary` for `tinted`, which is what the two sources
     * really render.
     */
    ctaVariant?: ButtonVariant;
    /** Leading glyph on the CTA. */
    ctaIcon?: ReactNode;
    /** Anchor target, e.g. `_blank` for the Teams deep links. */
    ctaTarget?: string;
    /** Anchor rel. Defaults to `noopener` whenever `ctaTarget` is set. */
    ctaRel?: string;
    className?: string;
    style?: CSSProperties;
}
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
export declare function CtaBanner(props: CtaBannerProps): import("react").JSX.Element;
