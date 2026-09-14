import { useEffect, useMemo, useRef, useState } from 'react';
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
export function useAnchorWarmth(ids, options = {}) {
    const { reference = 0.3, band = 0.12 } = options;
    // Depend on the contents, not the array identity: callers build this list
    // inline from their `groups` prop on every render.
    const key = ids.join(' ');
    const [activeId, setActiveId] = useState(null);
    const orderRef = useRef(ids);
    orderRef.current = ids;
    useEffect(() => {
        if (typeof window === 'undefined')
            return;
        if (typeof IntersectionObserver === 'undefined')
            return;
        const targets = orderRef.current
            .map((id) => document.getElementById(id))
            .filter((el) => el != null);
        if (targets.length === 0)
            return;
        const visible = new Set();
        const top = Math.round(reference * 100);
        const bottom = Math.max(0, Math.round((1 - reference - band) * 100));
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting)
                    visible.add(entry.target.id);
                else
                    visible.delete(entry.target.id);
            }
            const next = orderRef.current.find((id) => visible.has(id));
            if (next != null)
                setActiveId(next);
        }, { rootMargin: `-${top}% 0px -${bottom}% 0px`, threshold: 0 });
        targets.forEach((target) => observer.observe(target));
        return () => observer.disconnect();
    }, [key, reference, band]);
    return useMemo(() => {
        const warmth = {};
        for (const id of orderRef.current) {
            warmth[id] = id === activeId ? 1 : 0;
        }
        return warmth;
    }, [key, activeId]);
}
