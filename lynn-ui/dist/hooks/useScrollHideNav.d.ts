/**
 * Ports `initScrollHide()` from nice-effects.js: the nav slides away while
 * scrolling down (only once past 80px) and reappears the moment you scroll
 * up, rAF-throttled.
 *
 * The scroll-position read is deliberately the source's three-way fallback.
 * theme.css sets `body { overflow-x: hidden }`, which per spec forces
 * `overflow-y` to compute as `auto` too - so on the source site `body`, not
 * the viewport, is the real scroll container. Reading whichever one moved
 * keeps this working inside a host page that scrolls either way.
 */
export interface UseScrollHideNavOptions {
    /** Scroll depth in px before hiding can start. Source value: 80. */
    threshold?: number;
    /** Set false to keep the nav pinned. */
    enabled?: boolean;
}
export declare function useScrollHideNav(options?: UseScrollHideNavOptions): boolean;
