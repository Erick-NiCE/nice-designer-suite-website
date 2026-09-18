import { useEffect, useRef, useState } from 'react';
import type {
  CSSProperties,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
} from 'react';
import { useTiltSpotlight } from '../../hooks/useTiltSpotlight.js';
import { Button } from '../Button/Button.js';

export interface CarouselSlide {
  /** Image URL, drawn `object-fit: cover` behind the glass overlay. */
  image: string;
  title: string;
  tagline?: string;
  /** The pill CTA renders only when this is set. */
  ctaLabel?: string;
  ctaHref?: string;
}

export interface CarouselProps {
  /** The slides, in render order. One slide is visible at a time. */
  slides: CarouselSlide[];
  /**
   * Advance on a timer. Off by default - a carousel that moves on its own
   * while someone is reading it is the failure mode of the pattern. Pauses
   * while the pointer is over it or dragging it.
   */
  autoPlay?: boolean;
  className?: string;
  style?: CSSProperties;
}

const AUTOPLAY_INTERVAL_MS = 6000;

/** Pointer travel, in px, that commits to the next/previous slide. */
const SWIPE_THRESHOLD_PX = 56;

/** Past this much travel the gesture was a drag, so the click it ends with
 *  must not also activate the CTA it happens to finish over. */
const DRAG_CLICK_SLOP_PX = 6;

interface SlideCardProps {
  slide: CarouselSlide;
  /** Only the active card tilts, and only it is reachable by keyboard. */
  active: boolean;
  /** Accessible name for the slide group, e.g. `2 of 4: Install guide`. */
  label: string;
}

function SlideCard(props: SlideCardProps) {
  const { slide, active, label } = props;

  // The same pointer-tilt as `Card`, reusing its hook rather than a second
  // copy of the math - only gentler (4 degrees instead of 7) and with no
  // hover lift, since a translate here would fight the track's own
  // transform. The hook bails out under `prefers-reduced-motion` itself.
  const cardRef = useTiltSpotlight<HTMLDivElement>({
    enabled: active,
    maxTilt: 4,
    lift: 0,
  });

  // `inert` takes the off-screen slides out of both the tab order and the
  // accessibility tree. `aria-hidden` alone would be wrong - these cards
  // contain a real focusable CTA.
  const slideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;
    if (active) el.removeAttribute('inert');
    else el.setAttribute('inert', '');
  }, [active]);

  return (
    <div
      ref={slideRef}
      className="lynn-carousel-slide"
      role="group"
      aria-roledescription="slide"
      aria-label={label}
    >
      <div ref={cardRef} className="lynn-carousel-card">
        {/* Decorative: the title next to it already names the destination. */}
        <img
          className="lynn-carousel-image"
          src={slide.image}
          alt=""
          draggable={false}
        />
        <div className="lynn-carousel-glass" aria-hidden="true" />
        <div className="lynn-carousel-spotlight" aria-hidden="true" />
        <div className="lynn-carousel-body">
          <h3 className="lynn-carousel-title">{slide.title}</h3>
          {slide.tagline != null ? (
            <p className="lynn-carousel-tagline">{slide.tagline}</p>
          ) : null}
          {slide.ctaLabel != null ? (
            <Button
              variant="primary"
              className="lynn-carousel-cta"
              href={slide.ctaHref}
              magnetic={false}
            >
              {slide.ctaLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/**
 * A one-at-a-time slide carousel for a "Featured pages" row.
 *
 * Each card is a screenshot under a bottom-weighted glass scrim - `Card`'s
 * `glass` blur, masked so it only clouds the half the text sits on and the
 * image stays sharp above it. The active card tilts toward the pointer and
 * its text block sits 28px forward in the same 3D space, so the tilt reads
 * as parallax rather than as a rotating rectangle.
 *
 * Drag past `SWIPE_THRESHOLD_PX` to move a slide; the dots move directly.
 *
 * Usage: a small set of slides - three to five - each carrying a screenshot
 * plus a `title`, since only the active card is tilted and only its CTA is in
 * the tab order (the rest are `inert`). Leave `autoPlay` off unless the row is
 * purely ambient; when it is on it pauses on hover and while dragging.
 *
 * Don't: don't rely on `image` to carry meaning - its `alt` is hard-coded
 * empty because the title beside it already names the destination, so anything
 * the screenshot alone says is lost. And don't treat the dots as the only
 * navigation you need to test: there is no keyboard arrow handling on the
 * track, so a keyboard reader moves slides through the dot buttons only.
 */
export function Carousel(props: CarouselProps) {
  const { slides, autoPlay = false, className, style } = props;

  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [hovered, setHovered] = useState(false);

  const startXRef = useRef(0);
  const travelRef = useRef(0);
  // Which pointer is currently down, independent of `dragging` - a plain
  // click is "down" without ever becoming a drag, so this is what
  // `onPointerMove`/`onPointerUp` key off instead of `dragging` alone.
  const pointerIdRef = useRef<number | null>(null);

  const count = slides.length;

  useEffect(() => {
    if (!autoPlay || count < 2 || hovered || dragging) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [autoPlay, count, hovered, dragging]);

  if (count === 0) return null;

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (count < 2) return;
    pointerIdRef.current = event.pointerId;
    startXRef.current = event.clientX;
    travelRef.current = 0;
    // `setPointerCapture` is deliberately NOT called here. Chromium
    // retargets the `click` that ends a captured-pointer gesture to the
    // capturing element, even after `releasePointerCapture` runs before that
    // `click` is dispatched - so a plain click that captured on `pointerdown`
    // still sees `click.target` become this viewport `div` instead of
    // whatever was actually under the cursor (the CTA `<a>`'s label span, on
    // the slide currently in view). `nice-effects.js`'s page-transition
    // handler reads `e.target.closest('a')`, finds nothing, and silently
    // does not navigate - which is exactly the bug this used to have: every
    // click on a slide's real link secretly failed. Capture is claimed below
    // in `onPointerMove`, only once real movement proves this is a drag.
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) return;
    const dx = event.clientX - startXRef.current;
    travelRef.current = Math.max(travelRef.current, Math.abs(dx));
    if (!dragging) {
      // Still within the click/drag slop - stay uncaptured so this can
      // still resolve as a plain click if the pointer lifts now.
      if (travelRef.current <= DRAG_CLICK_SLOP_PX) return;
      setDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    setDrag(dx);
  };

  const release = () => {
    pointerIdRef.current = null;
    setDragging(false);
    setDrag(0);
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) return;
    const dx = event.clientX - startXRef.current;
    const wasDragging = dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    release();
    // Never claimed a drag (capture never engaged) - this was a plain click,
    // so there is no swipe to resolve; let it become a real `click` on
    // whatever is under the cursor.
    if (!wasDragging) return;
    // Clamped, not wrapping: a drag has a direction, and yanking the first
    // slide rightwards into the last one reads as a glitch.
    if (dx <= -SWIPE_THRESHOLD_PX) {
      setIndex((current) => Math.min(current + 1, count - 1));
    } else if (dx >= SWIPE_THRESHOLD_PX) {
      setIndex((current) => Math.max(current - 1, 0));
    }
  };

  // A cancelled pointer carries no meaningful coordinates - `clientX` is 0 -
  // so this has to snap back rather than measure a swipe out of it.
  const onPointerCancel = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    release();
  };

  const onClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (travelRef.current <= DRAG_CLICK_SLOP_PX) return;
    event.preventDefault();
    event.stopPropagation();
    travelRef.current = 0;
  };

  const classes = [
    'lynn-carousel',
    dragging ? 'lynn-carousel-dragging' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      style={style}
      role="group"
      aria-roledescription="carousel"
    >
      <div
        className="lynn-carousel-viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onClickCapture={onClickCapture}
        /* Without this, a drag that starts on the CTA link or on the
           screenshot becomes a native drag-and-drop: the browser takes the
           pointer, no `pointerup` ever arrives, and the carousel is left
           stuck mid-gesture. */
        onDragStart={(event) => event.preventDefault()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="lynn-carousel-track"
          style={{
            transform: `translate3d(calc(${-index * 100}% + ${drag}px), 0, 0)`,
            ...(dragging ? { transition: 'none' } : {}),
          }}
        >
          {slides.map((slide, position) => (
            <SlideCard
              key={`${position}-${slide.title}`}
              slide={slide}
              active={position === index}
              label={`${position + 1} of ${count}: ${slide.title}`}
            />
          ))}
        </div>
      </div>

      {count > 1 ? (
        <div className="lynn-carousel-dots" aria-label="Choose a slide">
          {slides.map((slide, position) => (
            <button
              key={`${position}-${slide.title}`}
              type="button"
              className="lynn-carousel-dot"
              aria-label={`Slide ${position + 1}: ${slide.title}`}
              aria-current={position === index ? 'true' : undefined}
              onClick={() => setIndex(position)}
            >
              <span className="lynn-carousel-dot-pellet" aria-hidden="true" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
