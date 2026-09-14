import { useEffect, useRef } from 'react';
export function useCursorGlow(options = {}) {
    const { enabled = true } = options;
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
            el.style.left = `${event.clientX}px`;
            el.style.top = `${event.clientY}px`;
            el.style.opacity = '1';
        };
        const onLeave = () => {
            el.style.opacity = '0';
        };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseleave', onLeave);
        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
        };
    }, [enabled]);
    return ref;
}
