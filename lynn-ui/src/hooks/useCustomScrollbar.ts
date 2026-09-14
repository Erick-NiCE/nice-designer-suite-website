import { useEffect, useRef } from 'react';
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

export interface CustomScrollbarRefs<
  R extends HTMLElement,
  V extends HTMLElement,
  T extends Element,
> {
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

/**
 * The overlay track's centerline: a run along the container's own rounded-rect
 * perimeter, cut down to just the edge the bar represents.
 *
 * `vertical` traces the top-right corner, the right edge and the bottom-right
 * corner; `horizontal` traces the bottom-left corner, the bottom edge and the
 * bottom-right corner. The corners are real SVG elliptical arcs
 * (`A rx ry rotation large-arc sweep x y`) rather than bezier approximations:
 * a `border-radius` corner *is* a quarter ellipse, so there is no kappa
 * constant to get slightly wrong, `d` stays readable when inspected, and
 * `getTotalLength()` measures an arc as happily as it measures a curve.
 *
 * `inset` is the *centerline* inset - the track's inset plus half the stroke -
 * so the painted stroke's outer edge lands exactly on the track inset. The
 * corner radius shrinks by the same amount, which is what keeps the path
 * concentric with the container's curve instead of merely parallel to it.
 */
function edgePath(
  width: number,
  height: number,
  radius: number,
  inset: number,
  vertical: boolean
): string {
  const x0 = inset;
  const y0 = inset;
  const x1 = width - inset;
  const y1 = height - inset;
  if (!(x1 > x0) || !(y1 > y0)) return '';
  // Clamped to half the run on each axis: two corner arcs that overlapped
  // would send the straight segment between them backwards, and the length
  // `getTotalLength()` reported for it would be meaningless.
  const r = Math.max(0, Math.min(radius - inset, (x1 - x0) / 2, (y1 - y0) / 2));
  const n = (value: number) => Math.round(value * 100) / 100;
  // Under half a pixel of corner there is nothing to curve, and an arc whose
  // radius rounds to 0 is the one case engines disagree about - so drop to
  // the straight line the old bar was.
  if (r < 0.5) {
    return vertical
      ? `M ${n(x1)} ${n(y0)} L ${n(x1)} ${n(y1)}`
      : `M ${n(x0)} ${n(y1)} L ${n(x1)} ${n(y1)}`;
  }
  // Sweep flag 1 is clockwise in SVG's y-down space. The vertical run goes
  // top edge -> right edge -> bottom edge, which is clockwise; the horizontal
  // one goes left edge -> bottom edge -> right edge, which is not.
  return vertical
    ? `M ${n(x1 - r)} ${n(y0)}` +
        ` A ${n(r)} ${n(r)} 0 0 1 ${n(x1)} ${n(y0 + r)}` +
        ` L ${n(x1)} ${n(y1 - r)}` +
        ` A ${n(r)} ${n(r)} 0 0 1 ${n(x1 - r)} ${n(y1)}`
    : `M ${n(x0)} ${n(y1 - r)}` +
        ` A ${n(r)} ${n(r)} 0 0 0 ${n(x0 + r)} ${n(y1)}` +
        ` L ${n(x1 - r)} ${n(y1)}` +
        ` A ${n(r)} ${n(r)} 0 0 0 ${n(x1)} ${n(y1 - r)}`;
}

export function useCustomScrollbar<
  R extends HTMLElement = HTMLDivElement,
  V extends HTMLElement = HTMLDivElement,
  T extends Element = HTMLDivElement,
>(options: UseCustomScrollbarOptions = {}): CustomScrollbarRefs<R, V, T> {
  const {
    orientation = 'vertical',
    geometry = 'rect',
    idleDelay = 900,
    minThumb = 28,
    enabled = true,
  } = options;

  const rootRef = useRef<R>(null);
  const viewportRef = useRef<V>(null);
  const thumbRef = useRef<T>(null);

  useEffect(() => {
    const root = rootRef.current;
    const viewport = viewportRef.current;
    const thumb = thumbRef.current;
    if (!root || !viewport || !thumb || !enabled) return;
    if (typeof window === 'undefined') return;

    const track = thumb.parentElement;
    if (!track) return;

    // The thumb is a `<div>` in `rect` geometry and an SVG `<path>` in
    // `path` geometry, so it is typed only as far up as `Element` - and
    // `Element.addEventListener` knows nothing about pointer events, because
    // those are declared on `HTMLElementEventMap` / `SVGElementEventMap`.
    // This is the one cast that buys back the typed handlers below. It is a
    // no-op at runtime, so the same function still compares equal when it is
    // handed back to `removeEventListener`.
    const pointer = (handler: (event: PointerEvent) => void) =>
      handler as EventListener;

    const vertical = orientation === 'vertical';
    const read = () =>
      vertical
        ? {
            pos: viewport.scrollTop,
            client: viewport.clientHeight,
            scroll: viewport.scrollHeight,
          }
        : {
            pos: viewport.scrollLeft,
            client: viewport.clientWidth,
            scroll: viewport.scrollWidth,
          };

    /* ---------- the curved track (geometry: 'path') ---------- */
    // Every path inside the track shares one `d`: the faint groove, the
    // visible thumb and the transparent wide hit target are the same curve
    // drawn three ways, which is what guarantees the thumb sits exactly on
    // the groove and the grab area exactly on the thumb.
    const curved = geometry === 'path';
    const paths = curved
      ? Array.from(track.querySelectorAll<SVGPathElement>('path'))
      : [];
    // The thumb doubles as the ruler: in path mode it carries the same `d`,
    // so its own `getTotalLength()` *is* the track length.
    const ruler =
      curved && typeof (thumb as unknown as SVGPathElement).getTotalLength ===
        'function'
        ? (thumb as unknown as SVGPathElement)
        : null;

    let drawn = '';
    const drawPath = () => {
      if (!ruler || paths.length === 0) return;
      const style = getComputedStyle(track);
      // The radius is read back off a real `border-top-right-radius` the CSS
      // sets from `--lynn-scroll-radius`, not off the custom property itself:
      // that is what makes `radius="1rem"` or a `calc()` resolve to px here.
      // Thickness comes off the resolved `stroke-width` for the same reason.
      // The inset is the component's own px knob, so parsing it is enough.
      const radius = parseFloat(style.borderTopRightRadius) || 0;
      const stroke = parseFloat(style.strokeWidth) || 0;
      const inset =
        parseFloat(style.getPropertyValue('--lynn-scroll-inset')) || 0;
      const next = edgePath(
        // The padding box, because that is what the absolutely positioned
        // overlay's `inset: 0` resolves against.
        root.clientWidth,
        root.clientHeight,
        radius,
        inset + stroke / 2,
        vertical
      );
      // A scroll changes nothing about the geometry, so the common case
      // costs one string compare and no DOM writes.
      if (!next || next === drawn) return;
      drawn = next;
      for (const path of paths) path.setAttribute('d', next);
    };

    // Read *after* the scrollable class is on, never before: the track is
    // `display: none` while the region does not overflow, so reading it
    // first would report 0 and the bar could never bootstrap itself.
    // `getTotalLength()` is geometry, not layout, so the path ruler answers
    // correctly even while the overlay is still hidden.
    const trackLength = () => {
      if (ruler) return ruler.getTotalLength();
      return vertical ? track.clientHeight : track.clientWidth;
    };

    let frame = 0;
    let idleTimer = 0;
    let hovered = false;
    let dragging = false;

    /* ---------- fade in / fade out ---------- */
    const show = () => {
      root.classList.add('lynn-scroll-area-active');
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        // Hover and an in-flight drag both outrank the idle timer.
        if (!hovered && !dragging) {
          root.classList.remove('lynn-scroll-area-active');
        }
      }, idleDelay);
    };

    /* ---------- thumb geometry ---------- */
    const measure = () => {
      frame = 0;
      const { pos, client, scroll } = read();
      // 1px of slop: a sub-pixel content height must not count as overflow.
      const slack = scroll - client;
      if (slack <= 1) {
        root.classList.remove('lynn-scroll-area-scrollable');
        return;
      }
      // Toggling the class before the read is deliberate - it is what makes
      // the track laid out, and the `clientHeight` read below flushes it.
      root.classList.add('lynn-scroll-area-scrollable');
      // Re-derive the curve first: the length measured on the next line has
      // to be the length of the path as it is about to be painted.
      drawPath();
      const trackLen = trackLength();
      if (trackLen <= 0) return;

      const size = Math.max(minThumb, (client / scroll) * trackLen);
      const offset = (pos / slack) * (trackLen - size);
      // The full track length, which the curved thumb's `stroke-dasharray`
      // uses as its gap: a gap that long guarantees the pattern never repeats,
      // so exactly one dash - the thumb - is ever on the path.
      root.style.setProperty('--lynn-track-length', `${trackLen.toFixed(2)}px`);
      root.style.setProperty('--lynn-thumb-size', `${size.toFixed(2)}px`);
      root.style.setProperty('--lynn-thumb-offset', `${offset.toFixed(2)}px`);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    const onScroll = () => {
      schedule();
      show();
    };

    /* ---------- dragging the thumb ---------- */
    // The thumb moves over `trackLen - size` px while the content moves over
    // `slack` px, so one pointer px is worth `slack / (trackLen - size)` px
    // of scroll. Anchoring to the pointer-down position (rather than
    // integrating deltas) keeps the grab point under the cursor exactly.
    //
    // On a curved track that mapping is pointer-axis px against *arc* length,
    // so the two disagree slightly while the thumb is inside a corner, where
    // the path runs sideways. Deliberate: the corners are a few px of a
    // track hundreds of px long, and the alternative - projecting the pointer
    // onto the path - would make the thumb crawl through the corners and jump
    // at the tangent, which reads far worse than being a pixel out.
    let startPointer = 0;
    let startPos = 0;

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      const { pos, client, scroll } = read();
      if (scroll - client <= 1 || trackLength() <= 0) return;
      dragging = true;
      startPointer = vertical ? event.clientY : event.clientX;
      startPos = pos;
      root.classList.add('lynn-scroll-area-dragging');
      show();
      // Capture keeps the moves coming once the cursor leaves the 5px thumb,
      // which it does immediately. It throws for a pointer id that is not
      // active (a synthetic event, an older engine), and the drag still works
      // without it while the pointer stays over the thumb.
      try {
        thumb.setPointerCapture(event.pointerId);
      } catch {
        /* no capture available - fall back to plain pointermove */
      }
      // Otherwise the drag also selects the text it passes over.
      event.preventDefault();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const { client, scroll } = read();
      const trackLen = trackLength();
      const slack = scroll - client;
      const size = Math.max(minThumb, (client / scroll) * trackLen);
      const travel = trackLen - size;
      if (travel <= 0 || slack <= 0) return;
      const moved = (vertical ? event.clientY : event.clientX) - startPointer;
      const next = startPos + (moved / travel) * slack;
      if (vertical) viewport.scrollTop = next;
      else viewport.scrollLeft = next;
    };

    const endDrag = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      root.classList.remove('lynn-scroll-area-dragging');
      try {
        if (thumb.hasPointerCapture(event.pointerId)) {
          thumb.releasePointerCapture(event.pointerId);
        }
      } catch {
        /* nothing was captured */
      }
      show();
    };

    const onEnter = () => {
      hovered = true;
      show();
    };
    const onLeave = () => {
      hovered = false;
      show();
    };

    viewport.addEventListener('scroll', onScroll, { passive: true });
    root.addEventListener('pointerenter', onEnter);
    root.addEventListener('pointerleave', onLeave);
    thumb.addEventListener('pointerdown', pointer(onPointerDown));
    thumb.addEventListener('pointermove', pointer(onPointerMove));
    thumb.addEventListener('pointerup', pointer(endDrag));
    thumb.addEventListener('pointercancel', pointer(endDrag));

    // Content that grows (a filter clearing, an image loading) changes the
    // ratio without ever firing a scroll event. The root is in there too
    // because in `path` geometry its box *is* the curve: a rail that gets
    // shorter has to be re-traced, not just re-proportioned. Everything
    // funnels into the same coalesced `measure()`, so a resize that changes
    // both at once still costs one frame.
    const observer =
      typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(schedule);
    if (observer) {
      observer.observe(root);
      observer.observe(viewport);
      const content = viewport.firstElementChild;
      if (content) observer.observe(content);
    }
    window.addEventListener('resize', schedule, { passive: true });

    measure();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.clearTimeout(idleTimer);
      viewport.removeEventListener('scroll', onScroll);
      root.removeEventListener('pointerenter', onEnter);
      root.removeEventListener('pointerleave', onLeave);
      thumb.removeEventListener('pointerdown', pointer(onPointerDown));
      thumb.removeEventListener('pointermove', pointer(onPointerMove));
      thumb.removeEventListener('pointerup', pointer(endDrag));
      thumb.removeEventListener('pointercancel', pointer(endDrag));
      observer?.disconnect();
      window.removeEventListener('resize', schedule);
      root.classList.remove(
        'lynn-scroll-area-active',
        'lynn-scroll-area-dragging'
      );
    };
  }, [orientation, geometry, idleDelay, minThumb, enabled]);

  return { rootRef, viewportRef, thumbRef };
}
