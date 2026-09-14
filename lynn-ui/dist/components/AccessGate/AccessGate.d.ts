import type { CSSProperties, ReactNode } from 'react';
export interface AccessGateProps {
    /** Heading, e.g. `NiCE Designer Site Login`. */
    title: string;
    /** Explanatory line under the heading. */
    subtitle: ReactNode;
    /**
     * Called with the trimmed, lower-cased code, matching what the real gate
     * compares (`input.value.trim().toLowerCase()`).
     */
    onSubmit: (code: string) => void;
    /**
     * Rejection message. Every time this arrives the input shakes and clears,
     * which is the gate's whole error affordance.
     */
    error?: string;
    /** The "don't have the code" paragraph above the link button. */
    ctaText?: ReactNode;
    /** Link target for the pill button, e.g. a Teams deep link. */
    ctaHref?: string;
    /** Pill button label. */
    ctaLinkLabel?: string;
    /** Pill button glyph. Defaults to the Teams mark the real gate uses. */
    ctaIcon?: ReactNode;
    /**
     * Fades the overlay out and takes it out of the layout once the fade
     * finishes - the two-step `unlocked` -> `display: none` the real gate does
     * with a 420ms timer.
     */
    unlocked?: boolean;
    /** Swaps the submit label for a spinner and blocks further submits. */
    submitting?: boolean;
    /** Submit button label. */
    submitLabel?: string;
    /** Password field placeholder. */
    inputPlaceholder?: string;
    /** Lock tile glyph. */
    lockIcon?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
/**
 * The site-wide login modal.
 *
 * One component for what the site currently ships twice - `site-gate.css` /
 * `site-gate.js` (canonical, used on nearly every page) and roadmap.html's
 * hand-rolled `.gate-*` copy, which had drifted on the divider color, the
 * input padding and three text alphas. This is the canonical version.
 *
 * Deliberately does no password checking of its own: the real gate's
 * comparison is client-side and readable in source, so the code lives with
 * the caller and this component only reports what was typed.
 *
 * Usage: fully caller-driven. Compare inside `onSubmit` (it hands you the code
 * already `.trim().toLowerCase()`d), set `error` to a message to reject, and
 * flip `unlocked` to true to accept - the overlay then fades for 420ms before
 * unmounting itself, so it can stay rendered while the page behind it
 * hydrates. `submitting` is for a gate that checks against a server.
 *
 * Don't: don't clear `error` by hand to reset the field - the component already
 * empties the input and shakes it on every rejection, including a second
 * rejection carrying the identical message (the effect keys on an attempt
 * counter too). And don't assume it behaves like a modal beyond the markup: it
 * sets `role="dialog"` and `aria-modal`, but owns no focus trap and no Escape
 * handler, so dismissing it on Escape is the caller's job.
 */
export declare function AccessGate(props: AccessGateProps): import("react").JSX.Element | null;
