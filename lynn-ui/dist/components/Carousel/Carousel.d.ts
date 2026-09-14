import type { CSSProperties } from 'react';
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
export declare function Carousel(props: CarouselProps): import("react").JSX.Element | null;
