import type { CSSProperties, ReactNode } from 'react';
import type { BadgeStatus } from '../Badge/Badge.js';
/** `full` is the-suite.html's `.tool-card`; `compact` is tools.html's grid. */
export type FeatureCardDensity = 'full' | 'compact';
export interface FeatureCardProps {
    /** Glyph or icon node for the tile. */
    icon: ReactNode;
    /**
     * Any CSS gradient. Fills the icon tile and the top glow stripe, e.g.
     * `linear-gradient(135deg,#3694FC,#025AFB)` - the real value the-suite.html
     * passes as `--t-gradient`.
     */
    iconGradient: string;
    name: ReactNode;
    tagline?: ReactNode;
    /**
     * The accent-quote body block. Pass markup to keep the source's leading
     * bold clause: `<><strong>Why use it:</strong> ...</>`.
     */
    whyText?: ReactNode;
    /** Small uppercase heading above the bullet list. */
    bulletsLabel?: string;
    /** The "what it handles" list, each bullet dotted in `accentColor`. */
    bullets?: ReactNode[];
    /** Neutral outlined pills in the footer, e.g. `['Figma', 'Chrome']`. */
    tags?: string[];
    /** Footer status pill label, e.g. `Live`. */
    status?: ReactNode;
    /** Which status pair the footer badge renders. */
    statusVariant?: BadgeStatus;
    /**
     * Any CSS color. Tints the bullet dots, the quote rule, the bullets label
     * and the hover ring - the real `--t-color` the site passes per card.
     */
    accentColor?: string;
    /**
     * `full` - the-suite.html's `.tool-card`: 52px gradient tile, 22px name,
     * 28px padding, 3px glow stripe.
     * `compact` - tools.html's `.suite-card`/`.mcp-card`/`.skill-card` scale:
     * bare 22px glyph, 15px name, 20px padding, 2px stripe.
     */
    density?: FeatureCardDensity;
    /** Anchor id, so a DocRail section link can jump to this card. */
    id?: string;
    /** Extra body content, rendered after the bullet list. */
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
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
export declare function FeatureCard(props: FeatureCardProps): import("react").JSX.Element;
