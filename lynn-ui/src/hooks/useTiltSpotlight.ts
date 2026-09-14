import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

/**
 * `lynn/motion/card-tilt-spotlight`
 *
 * Combines the two real handlers on the source site:
 *   - wings-2026.html's `.contact-card` tilt: max 7 degrees, 900px
 *     perspective, and an early `prefers-reduced-motion` bail-out.
 *   - index.html's spotlight: `--mx` / `--my` percentages that a `::after`
 *     radial-gradient reads (see Card.css), reset to 50% on leave.
 */
export interface UseTiltSpotlightOptions {
  /** Maximum rotation in degrees on either axis. Source value: 7. */
  maxTilt?: number;
  /** CSS perspective depth in px. Source value: 900. */
  perspective?: number;
  /** Lift applied while hovered, in px. Source value: -1. */
  lift?: number;
  /** Set false to leave the element alone. */
  enabled?: boolean;
}

export function useTiltSpotlight<T extends HTMLElement = HTMLElement>(
  options: UseTiltSpotlightOptions = {}
): RefObject<T> {
  const { maxTilt = 7, perspective = 900, lift = -1, enabled = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      el.style.setProperty('--lynn-mx', `${(px * 100).toFixed(2)}%`);
      el.style.setProperty('--lynn-my', `${(py * 100).toFixed(2)}%`);

      const rotateX = ((0.5 - py) * maxTilt).toFixed(2);
      const rotateY = ((px - 0.5) * maxTilt).toFixed(2);
      el.style.transition = 'transform 0.07s ease';
      el.style.transform =
        `perspective(${perspective}px) rotateX(${rotateX}deg) ` +
        `rotateY(${rotateY}deg) translateY(${lift}px)`;
    };

    const onLeave = () => {
      el.style.transition = 'transform 0.45s cubic-bezier(0.23,1,0.32,1)';
      el.style.transform = '';
      el.style.setProperty('--lynn-mx', '50%');
      el.style.setProperty('--lynn-my', '50%');
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.style.transition = '';
      el.style.transform = '';
    };
  }, [maxTilt, perspective, lift, enabled]);

  return ref;
}
