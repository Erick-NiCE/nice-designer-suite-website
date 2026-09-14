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
export declare function useCursorGlow<T extends HTMLElement = HTMLElement>(options?: UseCursorGlowOptions): RefObject<T>;
