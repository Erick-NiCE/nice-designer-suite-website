import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { useTiltSpotlight } from '../../hooks/useTiltSpotlight.js';
import { Button } from '../Button/Button.js';
const AUTOPLAY_INTERVAL_MS = 6000;
/** Pointer travel, in px, that commits to the next/previous slide. */
const SWIPE_THRESHOLD_PX = 56;
/** Past this much travel the gesture was a drag, so the click it ends with
 *  must not also activate the CTA it happens to finish over. */
const DRAG_CLICK_SLOP_PX = 6;
function SlideCard(props) {
    const { slide, active, label } = props;
    // The same pointer-tilt as `Card`, reusing its hook rather than a second
    // copy of the math - only gentler (4 degrees instead of 7) and with no
    // hover lift, since a translate here would fight the track's own
    // transform. The hook bails out under `prefers-reduced-motion` itself.
    const cardRef = useTiltSpotlight({
        enabled: active,
        maxTilt: 4,
        lift: 0,
    });
    // `inert` takes the off-screen slides out of both the tab order and the
    // accessibility tree. `aria-hidden` alone would be wrong - these cards
    // contain a real focusable CTA.
    const slideRef = useRef(null);
    useEffect(() => {
        const el = slideRef.current;
        if (!el)
            return;
        if (active)
            el.removeAttribute('inert');
        else
            el.setAttribute('inert', '');
    }, [active]);
    return (_jsx("div", { ref: slideRef, className: "lynn-carousel-slide", role: "group", "aria-roledescription": "slide", "aria-label": label, children: _jsxs("div", { ref: cardRef, className: "lynn-carousel-card", children: [_jsx("img", { className: "lynn-carousel-image", src: slide.image, alt: "", draggable: false }), _jsx("div", { className: "lynn-carousel-glass", "aria-hidden": "true" }), _jsx("div", { className: "lynn-carousel-spotlight", "aria-hidden": "true" }), _jsxs("div", { className: "lynn-carousel-body", children: [_jsx("h3", { className: "lynn-carousel-title", children: slide.title }), slide.tagline != null ? (_jsx("p", { className: "lynn-carousel-tagline", children: slide.tagline })) : null, slide.ctaLabel != null ? (_jsx(Button, { variant: "primary", className: "lynn-carousel-cta", href: slide.ctaHref, magnetic: false, children: slide.ctaLabel })) : null] })] }) }));
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
export function Carousel(props) {
    const { slides, autoPlay = false, className, style } = props;
    const [index, setIndex] = useState(0);
    const [drag, setDrag] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [hovered, setHovered] = useState(false);
    const startXRef = useRef(0);
    const travelRef = useRef(0);
    const count = slides.length;
    useEffect(() => {
        if (!autoPlay || count < 2 || hovered || dragging)
            return;
        const timer = window.setInterval(() => {
            setIndex((current) => (current + 1) % count);
        }, AUTOPLAY_INTERVAL_MS);
        return () => window.clearInterval(timer);
    }, [autoPlay, count, hovered, dragging]);
    if (count === 0)
        return null;
    const onPointerDown = (event) => {
        if (count < 2)
            return;
        startXRef.current = event.clientX;
        travelRef.current = 0;
        setDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
    };
    const onPointerMove = (event) => {
        if (!dragging)
            return;
        const dx = event.clientX - startXRef.current;
        travelRef.current = Math.max(travelRef.current, Math.abs(dx));
        setDrag(dx);
    };
    const release = (event) => {
        setDragging(false);
        setDrag(0);
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }
    };
    const onPointerUp = (event) => {
        if (!dragging)
            return;
        const dx = event.clientX - startXRef.current;
        release(event);
        // Clamped, not wrapping: a drag has a direction, and yanking the first
        // slide rightwards into the last one reads as a glitch.
        if (dx <= -SWIPE_THRESHOLD_PX) {
            setIndex((current) => Math.min(current + 1, count - 1));
        }
        else if (dx >= SWIPE_THRESHOLD_PX) {
            setIndex((current) => Math.max(current - 1, 0));
        }
    };
    // A cancelled pointer carries no meaningful coordinates - `clientX` is 0 -
    // so this has to snap back rather than measure a swipe out of it.
    const onPointerCancel = (event) => {
        if (!dragging)
            return;
        release(event);
    };
    const onClickCapture = (event) => {
        if (travelRef.current <= DRAG_CLICK_SLOP_PX)
            return;
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
    return (_jsxs("div", { className: classes, style: style, role: "group", "aria-roledescription": "carousel", children: [_jsx("div", { className: "lynn-carousel-viewport", onPointerDown: onPointerDown, onPointerMove: onPointerMove, onPointerUp: onPointerUp, onPointerCancel: onPointerCancel, onClickCapture: onClickCapture, 
                /* Without this, a drag that starts on the CTA link or on the
                   screenshot becomes a native drag-and-drop: the browser takes the
                   pointer, no `pointerup` ever arrives, and the carousel is left
                   stuck mid-gesture. */
                onDragStart: (event) => event.preventDefault(), onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: _jsx("div", { className: "lynn-carousel-track", style: {
                        transform: `translate3d(calc(${-index * 100}% + ${drag}px), 0, 0)`,
                        ...(dragging ? { transition: 'none' } : {}),
                    }, children: slides.map((slide, position) => (_jsx(SlideCard, { slide: slide, active: position === index, label: `${position + 1} of ${count}: ${slide.title}` }, `${position}-${slide.title}`))) }) }), count > 1 ? (_jsx("div", { className: "lynn-carousel-dots", "aria-label": "Choose a slide", children: slides.map((slide, position) => (_jsx("button", { type: "button", className: "lynn-carousel-dot", "aria-label": `Slide ${position + 1}: ${slide.title}`, "aria-current": position === index ? 'true' : undefined, onClick: () => setIndex(position), children: _jsx("span", { className: "lynn-carousel-dot-pellet", "aria-hidden": "true" }) }, `${position}-${slide.title}`))) })) : null] }));
}
