import { useEffect, useRef } from 'react';
const DRIFT_TRANSITION = 'transform 0.12s ease';
/** Source spring curve - the one deliberate non-`--lynn-ease` transition. */
const SPRING_TRANSITION = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
export function useMagneticButton(options = {}) {
    const { strength = 0.28, scale = 1.04, enabled = true } = options;
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el || !enabled)
            return;
        if (typeof window === 'undefined')
            return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
            return;
        const onMove = (event) => {
            const rect = el.getBoundingClientRect();
            const dx = (event.clientX - rect.left - rect.width / 2) * strength;
            const dy = (event.clientY - rect.top - rect.height / 2) * strength;
            el.style.transition = DRIFT_TRANSITION;
            el.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
        };
        const onLeave = () => {
            el.style.transition = SPRING_TRANSITION;
            el.style.transform = '';
        };
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        return () => {
            el.removeEventListener('mousemove', onMove);
            el.removeEventListener('mouseleave', onLeave);
            el.style.transition = '';
            el.style.transform = '';
        };
    }, [strength, scale, enabled]);
    return ref;
}
