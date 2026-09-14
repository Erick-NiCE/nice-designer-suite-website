import { useEffect, useState } from 'react';

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

function currentScrollY(): number {
  if (typeof document === 'undefined') return 0;
  return (
    document.body.scrollTop ||
    document.documentElement.scrollTop ||
    window.scrollY ||
    0
  );
}

export function useScrollHideNav(
  options: UseScrollHideNavOptions = {}
): boolean {
  const { threshold = 80, enabled = true } = options;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setHidden(false);
      return;
    }
    if (typeof window === 'undefined') return;

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

    const listenerOptions: AddEventListenerOptions = {
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
