import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId, useState } from 'react';
import { IconEye, IconEyeOff } from '../../icons/icons.js';
import { Button } from '../Button/Button.js';
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
export function TextField(props) {
    const { label, type = 'text', value, onChange, error, accent = 'blue', id, className, style, } = props;
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const errorId = `${fieldId}-error`;
    const [focused, setFocused] = useState(false);
    const [revealed, setRevealed] = useState(false);
    const isPassword = type === 'password';
    const floated = focused || value !== '';
    const classes = [
        'lynn-textfield',
        `lynn-textfield-accent-${accent}`,
        focused ? 'lynn-textfield-focused' : null,
        floated ? 'lynn-textfield-floated' : null,
        error != null ? 'lynn-textfield-invalid' : null,
        isPassword ? 'lynn-textfield-with-toggle' : null,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { className: classes, style: style, children: [_jsxs("div", { className: "lynn-textfield-shell", children: [_jsx("input", { id: fieldId, className: "lynn-textfield-input", type: isPassword && revealed ? 'text' : type, value: value, "aria-invalid": error != null || undefined, "aria-describedby": error != null ? errorId : undefined, onChange: (event) => onChange(event.target.value), onFocus: () => setFocused(true), onBlur: () => setFocused(false) }), _jsx("label", { className: "lynn-textfield-label", htmlFor: fieldId, children: label }), isPassword ? (_jsx(Button, { variant: "ghost", className: "lynn-textfield-toggle", "aria-label": revealed ? 'Hide password' : 'Show password', onClick: () => setRevealed((shown) => !shown), children: revealed ? _jsx(IconEyeOff, { size: 18 }) : _jsx(IconEye, { size: 18 }) })) : null, _jsx("svg", { className: "lynn-textfield-wave", viewBox: "0 0 240 10", preserveAspectRatio: "none", "aria-hidden": "true", children: _jsx("path", { className: "lynn-textfield-wave-path", d: "M0 5 Q20 2 40 5 T80 5 T120 5 T160 5 T200 5 T240 5" }) })] }), error != null ? (_jsx("p", { className: "lynn-textfield-error", id: errorId, children: error })) : null] }));
}
