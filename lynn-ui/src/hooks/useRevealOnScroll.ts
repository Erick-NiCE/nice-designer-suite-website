import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

/**
 * `lynn/motion/scroll-reveal`
 *
 * Ports the *improved* observer from index.html's polish layer (the one that
 * staggers siblings), not the plainer non-staggered copy also present on the
 * site: `threshold: 0.05`, `rootMargin: '0px 0px -24px 0px'`, and a per-item
 * delay of `(index % 6) * 55ms`. Unobserves after the first reveal.
 */
export interface UseRevealOnScrollOptions {
  /** Position among siblings; drives the staggered delay. */
  index?: number;
  /** Per-step stagger in ms. Source value: 55. */
  staggerStep?: number;
  /** Number of steps before the stagger wraps. Source value: 6. */
  staggerCycle?: number;
  /** Explicit delay in ms; overrides the computed stagger when set. */
  delay?: number;
  /** IntersectionObserver threshold. Source value: 0.05. */
  threshold?: number;
  /** IntersectionObserver rootMargin. Source value: '0px 0px -24px 0px'. */
  rootMargin?: string;
  /** Reveal once and stop observing. Source behavior: true. */
  once?: boolean;
}

export interface UseRevealOnScrollResult<T extends HTMLElement> {
  ref: RefObject<T>;
  visible: boolean;
}

export function useRevealOnScroll<T extends HTMLElement = HTMLElement>(
  options: UseRevealOnScrollOptions = {}
): UseRevealOnScrollResult<T> {
  const {
    index = 0,
    staggerStep = 55,
    staggerCycle = 6,
    delay,
    threshold = 0.05,
    rootMargin = '0px 0px -24px 0px',
    once = true,
  } = options;

  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === 'undefined') return;

    // Reduced motion: show immediately, never animate, never observe.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const revealDelay =
      delay ?? (index % staggerCycle) * staggerStep;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            timer = setTimeout(() => setVisible(true), revealDelay);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => {
      if (timer !== undefined) clearTimeout(timer);
      observer.disconnect();
    };
  }, [index, staggerStep, staggerCycle, delay, threshold, rootMargin, once]);

  return { ref, visible };
}
