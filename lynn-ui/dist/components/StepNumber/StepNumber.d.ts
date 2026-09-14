import type { CSSProperties, ReactNode } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';
/**
 * The four real numbered-circle diameters found site-wide: 18px
 * (use-cases.html `.step-num`), 28px (wings-2026.html `.step-list li::before`),
 * 32px (scoring.html `.tip-number`) and 52px (install-guide.html
 * `.step-number-badge`). marketplace.html's 30px `.step-num` is the same shape
 * as the 28px one and renders at `sm`.
 */
export type StepNumberSize = 'xs' | 'sm' | 'md' | 'lg';
/**
 * The three fill treatments the sources actually use, all at every size.
 *
 *   - `gradient` - install-guide's two-stop disc with the 4px glow ring.
 *   - `tint` - a 15%-accent disc with a 25%-accent hairline and accent
 *     numerals (wings-2026, scoring, use-cases).
 *   - `solid` - a flat accent disc with white numerals (marketplace).
 */
export type StepNumberFill = 'gradient' | 'tint' | 'solid';
export interface StepNumberProps {
    /** The step's number. Any node, so `1`, `'01'` or `<IconCheck />` all work. */
    n: ReactNode;
    /**
     * `xs` - 18px, `sm` - 28px, `md` - 32px, `lg` - 52px. Defaults to `lg`,
     * install-guide's flagship stepper badge, which is also what `Stepper`
     * renders.
     */
    size?: StepNumberSize;
    /**
     * Accent the disc is built from. Defaults to `electric-blue`, so
     * `fill="gradient"` reproduces install-guide's real
     * `electric-blue -> indigo` badge exactly.
     */
    color?: AccentColor;
    /** Fill treatment. Defaults to `gradient`. */
    fill?: StepNumberFill;
    className?: string;
    style?: CSSProperties;
}
/**
 * A numbered circle.
 *
 * The shared atom behind `Stepper`'s own badges and the five independent
 * numbered-circle lists elsewhere on the site, which are all this same disc at
 * a different diameter and fill.
 *
 * Decorative by default: the number is a visual index that the surrounding
 * ordered list or step title already conveys, so it is hidden from assistive
 * tech rather than read out twice.
 *
 * Usage: the defaults (`size="lg"`, `fill="gradient"`, `color="electric-blue"`)
 * reproduce install-guide's flagship badge exactly, which is also what
 * `Stepper` renders. Drop to `tint` at `xs`/`sm`/`md` for the lighter inline
 * numbered lists elsewhere on the site, or `solid` for marketplace's flat
 * disc. `n` is a node, so `'01'` and `<IconCheck />` work as well as `3`.
 *
 * Don't: don't let it be the only place the order lives - the span is
 * `aria-hidden`, so a bare row of these is an unordered list to a screen
 * reader; put the steps in an `<ol>` (which is what `Stepper` does) or say the
 * number in the title. And don't mix `fill` values within one list: the three
 * treatments read as three different kinds of step.
 */
export declare function StepNumber(props: StepNumberProps): import("react").JSX.Element;
