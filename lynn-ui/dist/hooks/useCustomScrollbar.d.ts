import type { RefObject } from 'react';
/**
 * `lynn/motion/custom-scrollbar`
 *
 * Drives `ScrollArea`: the native scrollbar is hidden in CSS and this hook
 * positions the overlay thumb from the viewport's own scroll metrics.
 *
 * Same shape as the other pointer-driven hooks in this folder - a ref per
 * element, plain listeners, and everything written out as `--lynn-*` custom
 * properties and classes rather than through React state. Nothing here
 * re-renders on scroll, and there is no per-frame loop: the scroll event is
 * the only clock, coalesced through one `requestAnimationFrame`.
 *
 * The two numbers are the whole technique:
 *   thumb length = clientSize / scrollSize   (of the track)
 *   thumb offset = scrollPos / (scrollSize - clientSize)  (of the slack)
 *
 * Both are written out in px of *track length*, and `geometry` decides what
 * a track length is: the thumb's parent box (`rect`), or the arc length of an
 * SVG path the hook builds and measures itself (`path`). Every other piece -
 * the fade, the drag, the ratio math - is identical between the two.
 */
export type ScrollbarOrientation = 'vertical' | 'horizontal';
/**
 * `rect` - the thumb is a block element translated down/along its track box.
 * `path` - the thumb is an SVG path stroked with a dash the length of the
 * thumb, so the bar can follow a curve. In this mode the hook owns the
 * geometry: it derives a rounded-rect edge path from the root's live size and
 * writes it to every `<path>` inside the track, then takes the track's length
 * from `getTotalLength()` rather than from a box.
 */
export type ScrollbarGeometry = 'rect' | 'path';
export interface UseCustomScrollbarOptions {
    /** Which axis the overlay bar represents. */
    orientation?: ScrollbarOrientation;
    /** Whether the bar is a translated box or a stroked SVG path. */
    geometry?: ScrollbarGeometry;
    /** ms of no scrolling and no hover before the bar fades out. */
    idleDelay?: number;
    /** Floor for the thumb's length in px, so a very long list stays grabbable. */
    minThumb?: number;
    /** Set false to leave the elements alone and bind no listeners. */
    enabled?: boolean;
}
export interface CustomScrollbarRefs<R extends HTMLElement, V extends HTMLElement, T extends Element> {
    /** The outer element that carries the state classes and the thumb metrics. */
    rootRef: RefObject<R>;
    /** The element that actually scrolls. */
    viewportRef: RefObject<V>;
    /**
     * The element the drag is bound to, and in `path` geometry the element the
     * track's length is measured off. Its parent is treated as the track.
     */
    thumbRef: RefObject<T>;
}
export declare function useCustomScrollbar<R extends HTMLElement = HTMLDivElement, V extends HTMLElement = HTMLDivElement, T extends Element = HTMLDivElement>(options?: UseCustomScrollbarOptions): CustomScrollbarRefs<R, V, T>;
