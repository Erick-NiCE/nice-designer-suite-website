import type { CSSProperties, ReactNode } from 'react';
export type IconCardLayout = 'vertical' | 'horizontal';
export interface IconCardProps {
    /** Glyph or icon node. */
    icon: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    /**
     * `vertical` - icon above the text (index.html's `.pillar-card`, the
     * roomiest of the real copies).
     * `horizontal` - icon beside the text (the-suite.html's `.sp-card`).
     */
    layout?: IconCardLayout;
    /** Footer row, separated by a hairline rule. */
    footer?: ReactNode;
    /** Extra body content, rendered under the description. */
    children?: ReactNode;
    /** Anchor id, so a DocRail section link can jump to this card. */
    id?: string;
    className?: string;
    style?: CSSProperties;
}
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
export declare function IconCard(props: IconCardProps): import("react").JSX.Element;
