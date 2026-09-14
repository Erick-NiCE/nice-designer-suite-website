import { useEffect, useRef, useState } from 'react';
export function useRevealOnScroll(options = {}) {
    const { index = 0, staggerStep = 55, staggerCycle = 6, delay, threshold = 0.05, rootMargin = '0px 0px -24px 0px', once = true, } = options;
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        if (typeof window === 'undefined')
            return;
        // Reduced motion: show immediately, never animate, never observe.
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setVisible(true);
            return;
        }
        if (typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }
        const revealDelay = delay ?? (index % staggerCycle) * staggerStep;
        let timer;
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    timer = setTimeout(() => setVisible(true), revealDelay);
                    if (once)
                        observer.unobserve(entry.target);
                }
                else if (!once) {
                    setVisible(false);
                }
            }
        }, { threshold, rootMargin });
        observer.observe(el);
        return () => {
            if (timer !== undefined)
                clearTimeout(timer);
            observer.disconnect();
        };
    }, [index, staggerStep, staggerCycle, delay, threshold, rootMargin, once]);
    return { ref, visible };
}
