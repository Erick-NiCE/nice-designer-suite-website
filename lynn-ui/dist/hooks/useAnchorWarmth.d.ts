export interface UseAnchorWarmthOptions {
    /**
     * Where the "current section" reading line sits, as a fraction of the
     * viewport height. Source value: 0.3 (30% down).
     */
    reference?: number;
    /**
     * Height of the band around the reading line, as a fraction of the
     * viewport. A section counts as current while it overlaps that band.
     */
    band?: number;
}
/**
 * `lynn/nav/anchor-warmth`
 *
 * Scroll-spy for in-page anchors, expressed as a 0-1 "warmth" per id so a
 * rail can render intensity rather than a binary active class.
 *
 * Simplified from nice-effects.js's `initAnchorWarmth`, which recomputed a
 * continuous distance-based falloff for every anchor on every animation
 * frame. Here one IntersectionObserver watches a thin band across the
 * viewport and only the topmost section overlapping it is warm - same
 * variable, same CSS, no per-frame layout reads. When nothing overlaps the
 * band (mid-gap between sections) the last warm id keeps its warmth, so the
 * rail never blanks out while scrolling.
 */
export declare function useAnchorWarmth(ids: string[], options?: UseAnchorWarmthOptions): Record<string, number>;
