import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export interface ButtonProps {
    /** Button label. */
    children: ReactNode;
    /**
     * `primary` - solid blue pill with a glow shadow and magnetic drift
     * (index.html's `.btn-primary`).
     * `secondary` - translucent 12px-radius fill (wings-2026.html's
     * `.btn-secondary`, the only real precedent for this variant).
     * `ghost` - bare text whose icon gap expands 6px to 10px on hover
     * (the-suite.html's `.roadmap-link`).
     */
    variant?: ButtonVariant;
    /** Leading glyph or icon node, rendered before the label. */
    icon?: ReactNode;
    /** Render as an anchor instead of a button. */
    href?: string;
    /** Anchor target, only meaningful alongside `href`. */
    target?: string;
    /** Anchor rel, only meaningful alongside `href`. */
    rel?: string;
    /** Native button type. Ignored when `href` is set. */
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    /**
     * In-flight state for an action button: the leading slot becomes a
     * `Spinner`, the button is disabled for the duration (on top of whatever
     * `disabled` says), and an accent-tinted highlight band sweeps across the
     * surface on a loop. Everything reverts the moment this goes back to
     * `false`.
     */
    loading?: boolean;
    /**
     * Upgrades the resting glow into a neon one: the outer halo breathes
     * between two intensities of the button's own accent on a 2.6s loop, and a
     * 1px inset highlight along the top edge reads as light refracting through
     * the pill's upper lip. Off by default - it is for the one action on a
     * page that should pull the eye, not for a toolbar of them.
     */
    glow?: boolean;
    /**
     * Pointer-following drift. Defaults on for `primary` (matching the live
     * site, where only primary actions are magnetic) and off for the others.
     */
    magnetic?: boolean;
    /** Native hover tooltip. */
    title?: string;
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLElement>;
    'aria-label'?: string;
    /**
     * Set when the button is a disclosure trigger - an accordion header, a
     * changelog row. Without it a collapsed section is invisible to a screen
     * reader, and Lynn's house rule is that every control is a real `Button`,
     * so the attribute has to be reachable from here.
     */
    'aria-expanded'?: boolean;
    /** Id of the region an `aria-expanded` trigger controls. */
    'aria-controls'?: string;
}
/**
 * A Lynn action button.
 *
 * `<Button>Get started</Button>` alone is a complete primary button: solid
 * `blue`, pill radius, glow shadow, and magnetic hover drift.
 *
 * Usage: set `magnetic` only to override the per-variant default (on for
 * `primary`, off for `secondary` and `ghost`) - the drift wants a little empty
 * space around the button, so turn it off inside a dense toolbar. `href`
 * swaps the element for an `<a>`, which makes `type` inert and `target` /
 * `rel` meaningful. When the button is a disclosure trigger, pass both
 * `aria-expanded` and `aria-controls`; `Accordion` and `ChangelogEntry` both
 * do, and the props exist here because Lynn's house rule is that every
 * clickable control is a real `Button`.
 *
 * `glow` is the loud version of the resting halo - one per page at most. It
 * composes with `loading` (the sweep still reads on top of it) and is
 * ignored on a `disabled` button, which has no accent left to glow with.
 *
 * Don't: don't treat `loading` and `disabled` as independent - `loading`
 * disables on top of `disabled`, so code that gates a second click on
 * `disabled` alone will find the button already inert. And don't pass `icon`
 * together with `loading` expecting to see it: the `Spinner` takes the same
 * leading slot and the icon is not rendered at all.
 */
export declare function Button(props: ButtonProps): import("react").JSX.Element;
