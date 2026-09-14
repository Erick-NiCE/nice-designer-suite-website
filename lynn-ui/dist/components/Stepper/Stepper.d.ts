import type { CSSProperties, ReactNode } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';
export type StepperOrientation = 'vertical' | 'horizontal';
export interface StepperStep {
    /**
     * Overrides the auto-numbering. Only worth setting when the list does not
     * start at 1 or when a step is labelled something else (`'0'`,
     * `<IconCheck />`).
     */
    number?: ReactNode;
    title: ReactNode;
    /** The step's card body. */
    children: ReactNode;
    /** Anchor id, so a DocRail section link can jump to this step. */
    id?: string;
}
export interface StepperProps {
    /** The steps, in order. */
    steps: StepperStep[];
    /**
     * `vertical` (default) is install-guide.html's real layout: an 80px badge
     * gutter with the connecting line running down it, and the step card in the
     * second column. It collapses to a single stacked column under 600px, as
     * the source does.
     * `horizontal` lays the same badge / title / card stack out in a row with
     * the connector running between badges.
     */
    orientation?: StepperOrientation;
    /**
     * Accent for the badges and the connecting line. Defaults to
     * `electric-blue`, install-guide's real value.
     */
    color?: AccentColor;
    className?: string;
    style?: CSSProperties;
}
/**
 * A numbered walkthrough.
 *
 * Ported from install-guide.html's `.steps-list` / `.step-number-badge` /
 * `.step-line` / `.step-card`. The badge is the shared `StepNumber` atom, so a
 * stepper and a bare numbered list can never drift apart.
 *
 * Renders as an ordered list, so the count and the ordering reach assistive
 * tech from the markup rather than from the (decorative) badges.
 *
 * Usage: `steps` is data, and each step's `children` is its card body - a
 * paragraph, a `CodeBlock`, an `Alert`. Give a step an `id` when a `DocRail`
 * link should jump to it. `vertical` is install-guide's real layout with the
 * 80px badge gutter (it collapses to one column under 600px on its own);
 * `horizontal` lays the same stack out in a row. `color` re-tints both the
 * badges and the connecting line together.
 *
 * Don't: don't set `step.number` just to number from 1 - the auto-numbering
 * already does that, and an explicit value is only for a list that starts
 * elsewhere or labels a step `'0'` / `<IconCheck />`. And don't expect a size
 * lever: the badge is hard-coded to `StepNumber size="lg"` (52px), so for a
 * tighter numbered list use `StepNumber` directly rather than shrinking this.
 */
export declare function Stepper(props: StepperProps): import("react").JSX.Element;
