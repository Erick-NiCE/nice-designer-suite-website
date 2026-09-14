import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

/**
 * `lynn/motion/cursor-glow`
 *
 * Ported from index.html's `#nice-cursor-glow` handler: a document-level
 * mousemove writes the pointer position into the glow element's `left`/`top`
 * and fades it in; leaving the document fades it out. The 0.08s linear
 * left/top transition that produces the trailing lag lives in CursorGlow.css.
 */
export interface UseCursorGlowOptions {
  /** Set false to leave the element hidden and bind no listeners. */
  enabled?: boolean;
}

export function useCursorGlow<T extends HTMLElement = HTMLElement>(
  options: UseCursorGlowOptions = {}
): RefObject<T> {
  const { enabled = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (event: MouseEvent) => {
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
