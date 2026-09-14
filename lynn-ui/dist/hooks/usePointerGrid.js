import { useEffect, useRef } from 'react';
export function usePointerGrid(options = {}) {
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
        const write = (clientX, clientY) => {
            const rect = el.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0)
                return;
            const px = ((clientX - rect.left) / rect.width) * 100;
            const py = ((clientY - rect.top) / rect.height) * 100;
            el.style.setProperty('--lynn-mx', `${px.toFixed(2)}%`);
            el.style.setProperty('--lynn-my', `${py.toFixed(2)}%`);
            el.classList.add('lynn-grid-lit');
        };
        const onPointerMove = (event) => {
            write(event.clientX, event.clientY);
        };
        const onTouchMove = (event) => {
            const touch = event.touches[0];
            if (touch)
                write(touch.clientX, touch.clientY);
        };
        const onLeave = () => {
            el.classList.remove('lynn-grid-lit');
        };
        el.addEventListener('pointermove', onPointerMove, { passive: true });
        el.addEventListener('pointerleave', onLeave);
        // `touchmove` is not redundant with `pointermove`: a browser that
        // coalesces touch into pointer events fires both, and one that does not
        // fires only this.
        el.addEventListener('touchmove', onTouchMove, { passive: true });
        el.addEventListener('touchend', onLeave);
        el.addEventListener('touchcancel', onLeave);
        return () => {
            el.removeEventListener('pointermove', onPointerMove);
            el.removeEventListener('pointerleave', onLeave);
            el.removeEventListener('touchmove', onTouchMove);
            el.removeEventListener('touchend', onLeave);
            el.removeEventListener('touchcancel', onLeave);
            el.classList.remove('lynn-grid-lit');
        };
    }, [enabled]);
    return ref;
}
