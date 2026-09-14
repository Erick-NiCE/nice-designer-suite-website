import { useId, useState } from 'react';
import type { CSSProperties } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';
import { IconEye, IconEyeOff } from '../../icons/icons.js';
import { Button } from '../Button/Button.js';

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
export function TextField(props: TextFieldProps) {
  const {
    label,
    type = 'text',
    value,
    onChange,
    error,
    accent = 'blue',
    id,
    className,
    style,
  } = props;

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

  return (
    <div className={classes} style={style}>
      <div className="lynn-textfield-shell">
        <input
          id={fieldId}
          className="lynn-textfield-input"
          type={isPassword && revealed ? 'text' : type}
          value={value}
          aria-invalid={error != null || undefined}
          aria-describedby={error != null ? errorId : undefined}
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        <label className="lynn-textfield-label" htmlFor={fieldId}>
          {label}
        </label>

        {isPassword ? (
          <Button
            variant="ghost"
            className="lynn-textfield-toggle"
            aria-label={revealed ? 'Hide password' : 'Show password'}
            onClick={() => setRevealed((shown) => !shown)}
          >
            {revealed ? <IconEyeOff size={18} /> : <IconEye size={18} />}
          </Button>
        ) : null}

        {/*
          Three full periods of a quadratic sine, baseline y=5, amplitude 3.
          `preserveAspectRatio="none"` stretches it to the field's width while
          the geometry stays in the viewBox's 240 user units - which is what
          lets TextField.css's one dash length be correct at every width.
        */}
        <svg
          className="lynn-textfield-wave"
          viewBox="0 0 240 10"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="lynn-textfield-wave-path"
            d="M0 5 Q20 2 40 5 T80 5 T120 5 T160 5 T200 5 T240 5"
          />
        </svg>
      </div>

      {error != null ? (
        <p className="lynn-textfield-error" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
