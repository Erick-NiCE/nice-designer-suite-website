import type { CSSProperties, ReactNode } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';
export type TabsVariant = 'pill' | 'elevated' | 'underline';
/** Whether the group announces itself as a value picker or as page tabs. */
export type TabsSemantics = 'radiogroup' | 'tablist';
export interface TabOption {
    /** Value handed back to `onChange`. */
    value: string;
    /** Visible label. Pass `ariaLabel` too when the label is an icon only. */
    label?: ReactNode;
    /** Leading glyph or icon node. */
    icon?: ReactNode;
    /** Accessible name, required when the segment renders as an icon alone. */
    ariaLabel?: string;
    disabled?: boolean;
}
export interface TabsProps {
    /** The segments, in render order. */
    options: TabOption[];
    /** Currently selected `option.value`. */
    value: string;
    /**
     * `origin` is the element the change came from: the clicked segment, or
     * the group itself when the change came from an arrow key (there is no one
     * segment a keystroke happened on). It is there for effects that have to
     * start somewhere on screen - `ThemeToggle` grows its screen wipe out of
     * it - and is safe to ignore, which is what every other caller does.
     */
    onChange: (value: string, origin?: HTMLElement) => void;
    /**
     * `pill` - solid-accent active segment on an elevated shell (the plugin's
     * `.cbf-segmented`). The default, and what `ThemeToggle` renders.
     * `elevated` - active segment lifts to the `card` surface with a soft
     * shadow instead of taking the accent (the plugin's `.var-section-tabs`).
     * `underline` - flat row with a 2px accent rule under the active segment
     * (the plugin's `.tabs`/`.tab`), for full-width page-level switching.
     */
    variant?: TabsVariant;
    /** Accent used by the `pill` fill and the `underline` rule. */
    tone?: AccentColor;
    /** Divide the full available width evenly between segments. */
    stretch?: boolean;
    /**
     * `radiogroup` (default) matches what this control actually is - a
     * segmented value picker, and the role the plugin's own theme toggle uses.
     * Switch to `tablist` when the group drives sibling panels.
     */
    semantics?: TabsSemantics;
    /** Accessible name for the group. */
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
}
/**
 * A Lynn segmented control.
 *
 * Deliberately knows nothing about panels or content - it is a controlled
 * value picker, so a panel switcher, a theme toggle and a filter row can all
 * be the same primitive.
 *
 * Usage: use it directly for a filter row or a segmented setting, and reach for
 * `TabPanels` when the choice reveals content - that wrapper sets
 * `semantics="tablist"` and the ARIA wiring for you. Keep it to about five
 * segments; past that a `Dropdown` reads better (which is the rule the
 * playground's own `Control` applies). `stretch` divides the available width
 * evenly. An icon-only segment needs `option.ariaLabel`. `onChange`'s second
 * argument is the element the change came from, for handlers that need a
 * screen position to animate out of; ignore it otherwise.
 *
 * Don't: don't pass a `value` that matches no `option.value` - nothing is
 * active, so `tabIndex` is `-1` on every segment, the group drops out of the
 * tab order entirely, and the arrow-key handler bails before moving anything.
 * A "nothing selected yet" state needs its own option, not an unmatched value.
 * And don't set `semantics="tablist"` on a group that drives no panels: it
 * promises tabs that are not there.
 */
export declare function Tabs(props: TabsProps): import("react").JSX.Element;
