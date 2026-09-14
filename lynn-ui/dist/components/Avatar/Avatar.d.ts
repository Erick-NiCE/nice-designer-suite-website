import type { CSSProperties } from 'react';
/** The three real sizes on roadmap.html: 14px, 22px and 36px. */
export type AvatarSize = 'xs' | 'sm' | 'lg';
export interface AvatarProps {
    /** One or two letters, e.g. `EM`. */
    initials: string;
    /**
     * `xs` - 14px (`.gate-av`, inside a gate chip).
     * `sm` - 22px (`.avatar`, the assignee stack).
     * `lg` - 36px (`.avatar-lg`, the people list).
     */
    size?: AvatarSize;
    /**
     * Blue-to-indigo gradient fill with white initials instead of the flat
     * tinted disc. Defaults on at `lg` and off below it, which is exactly how
     * the source uses the two treatments.
     */
    gradient?: boolean;
    /**
     * Full name behind the initials. Set it and the avatar announces that name
     * instead of spelling the initials out.
     */
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
}
/**
 * A round initials disc.
 *
 * Usage: pass `ariaLabel` with the person's full name whenever the initials
 * stand for someone - it switches the span to `role="img"` and stops a screen
 * reader spelling out "E, M". Leave `gradient` unset and it follows the
 * source's own convention: filled at `lg`, flat below it. `Timeline`'s
 * `RoadmapItemCard` builds its assignee and gate stacks out of this at `sm`
 * and `xs`.
 *
 * Don't: don't pass more than two characters - all three sizes are fixed
 * 14/22/36px discs with no overflow handling, so a third letter clips. And
 * don't use it as a decorative shape with no name: without `ariaLabel` the
 * initials are read out literally, letter by letter.
 */
export declare function Avatar(props: AvatarProps): import("react").JSX.Element;
