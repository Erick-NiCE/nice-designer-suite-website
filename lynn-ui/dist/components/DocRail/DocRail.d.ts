import type { CSSProperties } from 'react';
/** Which list the rail renders: sibling documents, or one page's sections. */
export type DocRailMode = 'pages' | 'sections';
export interface DocRailPage {
    /** Link target, e.g. `./install-guide.html` or `#/components/button`. */
    href: string;
    label: string;
}
export interface DocRailItem {
    /** Id of the element on this page the link jumps to. */
    id: string;
    label: string;
}
export interface DocRailGroup {
    /** Small uppercase heading above the group's links. */
    label: string;
    items: DocRailItem[];
}
export interface DocRailProps {
    /**
     * `pages` - the cross-document switcher, one link per sibling page, with
     * `groups` (if any) nested under the active one.
     * `sections` - only the indented in-page section list. This is what
     * nice-effects.js calls a `standalone` rail.
     */
    mode?: DocRailMode;
    /** In-page section groups. In `pages` mode they belong to `activeHref`. */
    groups?: DocRailGroup[];
    /** Page links, read in `pages` mode. */
    pages?: DocRailPage[];
    /** `page.href` to mark as the current document. */
    activeHref?: string;
    /**
     * Collapsed state. Pass it to control the rail from outside (and handle
     * `onToggle`); leave it off to let the rail track its own.
     */
    collapsed?: boolean;
    /** Called with the state the rail is moving to. */
    onToggle?: (collapsed: boolean) => void;
    /** Adds the filter box above the list. */
    searchable?: boolean;
    /** Header text. Defaults per mode, matching the two real rails. */
    label?: string;
    searchPlaceholder?: string;
    /** Shown when the filter matches nothing. */
    emptyText?: string;
    /** Accessible name for the rail. Defaults per mode. */
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
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
export declare function DocRail(props: DocRailProps): import("react").JSX.Element;
