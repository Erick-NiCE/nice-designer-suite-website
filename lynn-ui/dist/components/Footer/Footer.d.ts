import type { CSSProperties, ReactNode } from 'react';
export interface FooterLink {
    label: ReactNode;
    href: string;
    /** Marks the current page; renders in `blue`. */
    active?: boolean;
}
export interface FooterColumn {
    /**
     * Column heading. The real footer markup has no visible headings, so this
     * renders visually hidden - present for screen readers and as a grouping
     * label, invisible on screen.
     */
    title: string;
    links: FooterLink[];
}
export interface FooterProps {
    /** Brand mark. Defaults to the real two-part footer wordmark. */
    logo?: ReactNode;
    /** Link columns. Defaults to the site's real three-column grid. */
    columns?: FooterColumn[];
    /** Accessible name for the link grid. */
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
}
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
export declare function Footer(props: FooterProps): import("react").JSX.Element;
