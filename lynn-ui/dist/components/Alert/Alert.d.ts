import type { CSSProperties, ReactNode } from 'react';
/**
 * The five real callout colors found site-wide, named by intent rather than
 * by hue so a caller never has to know that "warning" is teal in Lynn.
 */
export type AlertVariant = 'info' | 'success' | 'warning' | 'danger' | 'purple';
export interface AlertProps {
    /** Callout body. */
    children: ReactNode;
    /**
     * `info` - blue (install-guide.html's `.note-box`, roadmap's `.callout.blue`).
     * `success` - emerald (`.tip-box`, `.callout.green`).
     * `warning` - teal. install-guide's `.warn-box` is amber, which Lynn does
     * not have; roadmap's own `.callout.amber` is already teal, so that is the
     * mapping this variant follows.
     * `danger` - coral (`.callout.orange`).
     * `purple` - indigo (`.callout.purple`).
     */
    variant?: AlertVariant;
    /** Leading glyph or icon node, e.g. `<IconBulb />` for an info tip. */
    icon?: ReactNode;
    /** Bold accent-colored first line. */
    title?: ReactNode;
    /**
     * The tighter roadmap `.callout` scale (6px radius, 11px text) instead of
     * install-guide's roomier `.note-box` one.
     */
    compact?: boolean;
    className?: string;
    style?: CSSProperties;
}
/**
 * A tinted callout box.
 *
 * One component for the eight independent re-implementations of the same
 * shape site-wide (`.note-box`, `.tip-box`, `.warn-box`, `.callout`, ...):
 * icon on the left, text on the right, accent-tinted background with a
 * matching border.
 *
 * Usage: pick the `variant` by intent, never by hue - `warning` is teal here
 * because Lynn has no amber, and a caller who reasons in colors will pick the
 * wrong one. `title` is the bold accent-colored first clause; `compact` drops
 * to the roadmap's tighter 6px/11px scale for a callout living inside another
 * card.
 *
 * Don't: don't use it for a transient confirmation - it has no dismiss, no
 * timer and no live-region role, so it is static page content; `useToast()` is
 * the component for "that worked". And don't put meaning only in `icon`: the
 * icon span is `aria-hidden`, so the sentence has to stand on its own.
 */
export declare function Alert(props: AlertProps): import("react").JSX.Element;
