import { useEffect, useState } from 'react';
function currentScrollY() {
    if (typeof document === 'undefined')
        return 0;
    return (document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.scrollY ||
        0);
}
export function useScrollHideNav(options = {}) {
    const { threshold = 80, enabled = true } = options;
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        if (!enabled) {
            setHidden(false);
            return;
        }
        if (typeof window === 'undefined')
            return;
        let lastY = currentScrollY();
        let ticking = false;
        const onScroll = () => {
            const y = currentScrollY();
            setHidden(y > lastY && y > threshold);
            lastY = y;
            ticking = false;
        };
        const schedule = () => {
            if (!ticking) {
                window.requestAnimationFrame(onScroll);
                ticking = true;
            }
        };
        const listenerOptions = {
            passive: true,
            capture: true,
        };
        window.addEventListener('scroll', schedule, listenerOptions);
        document.addEventListener('scroll', schedule, listenerOptions);
        return () => {
            window.removeEventListener('scroll', schedule, listenerOptions);
            document.removeEventListener('scroll', schedule, listenerOptions);
        };
    }, [threshold, enabled]);
    return hidden;
}
