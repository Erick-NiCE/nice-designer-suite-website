import type { CSSProperties } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';
export interface TextFieldProps {
    /** Doubles as the resting placeholder and, once floated, the field's label. */
    label: string;
    type?: 'text' | 'password' | 'email';
    value: string;
    /** Called with the field's new text, not the event. */
    onChange: (value: string) => void;
    /** Validation message. Its presence also recolors the wave and the label. */
    error?: string;
    /** Accent the floated label and the focused wave take. */
    accent?: AccentColor;
    /** Own id for the input. One is generated when omitted. */
    id?: string;
    className?: string;
    style?: CSSProperties;
}
/**
 * A single-line text field whose label starts life as the placeholder.
 *
 * The underline is not a border: it is an inline SVG sine path that draws
 * itself in (`stroke-dashoffset`) and un-flattens (`scaleY`) on focus, so the
 * field's "active" signal is a ripple rather than a color swap. At rest the
 * same path renders squashed almost flat in the border color, which is what
 * gives the field a resting baseline without a second element.
 *
 * The label floats whenever the field is focused *or* non-empty, so a filled
 * field keeps its label after blur instead of hiding the answer's meaning.
 *
 * Usage: controlled, and `onChange` hands you the string rather than the
 * event. `label` is required because it is both the resting placeholder and
 * the floated `<label htmlFor>`, so there is no unlabeled configuration to get
 * wrong. `type="password"` adds the eye/eye-off reveal toggle (a real
 * `Button`), and `error` does three things at once: renders the message, wires
 * it up through `aria-describedby`, and recolors the wave and label.
 *
 * Don't: don't pass `error=""` to mean "valid" - the check is `error != null`,
 * so an empty string still flags `aria-invalid`, recolors the field and
 * renders an empty error paragraph; pass `undefined`. And don't use it for the
 * site's access code: `AccessGate` already owns that flow, including the
 * shake, the clear and the fade-out.
 */
export declare function TextField(props: TextFieldProps): import("react").JSX.Element;
