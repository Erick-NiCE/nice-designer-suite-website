import type { CSSProperties, ReactNode } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';

export interface ProgressBarProps {
  /** Progress so far, clamped to `0..max`. Ignored when `indeterminate`. */
  value?: number;
  /** The value that counts as complete. */
  max?: number;
  /** Accent used by the filled bar. */
  tone?: AccentColor;
  /**
   * Unknown-duration loading: a 40%-wide bar slides across the track instead
   * of filling it (the plugin's `.tab-progress-bar` treatment).
   */
  indeterminate?: boolean;
  /** Caption under the track. */
  label?: ReactNode;
  /** Accessible name, needed when there is no visible `label`. */
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * The linear progress track, ported from the plugin's `.progress-bar-bg` /
 * `.progress-bar-fill`, plus its separate indeterminate top-of-tab bar.
 *
 * Usage: determinate by default - pass `value` (clamped to `0..max`) and set
 * `max` for any scale that is not a percentage. Switch to `indeterminate` for
 * work whose length you genuinely cannot know, and pass `ariaLabel` whenever
 * there is no visible `label`, since the `role="progressbar"` is on the track
 * rather than on the labeled wrapper. Use `GaugeRing` instead when the number
 * is a score being read rather than progress being watched.
 *
 * Don't: don't pass `value` alongside `indeterminate` - the width is dropped
 * and so are all three `aria-value*` attributes, so the number is invisible to
 * everyone, sighted or not. And don't leave it indeterminate as a permanent
 * decoration: a bar that sweeps forever reads as a hung process.
 */
export function ProgressBar(props: ProgressBarProps) {
  const {
    value = 0,
    max = 100,
    tone = 'blue',
    indeterminate = false,
    label,
    ariaLabel,
    className,
    style,
  } = props;

  const span = max > 0 ? max : 100;
  const clamped = Math.min(Math.max(value, 0), span);
  const percent = (clamped / span) * 100;

  const classes = [
    'lynn-progress',
    `lynn-progress-tone-${tone}`,
    indeterminate ? 'lynn-progress-indeterminate' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      <div
        className="lynn-progress-track"
        role="progressbar"
        aria-label={ariaLabel}
        aria-valuemin={indeterminate ? undefined : 0}
        aria-valuemax={indeterminate ? undefined : span}
        aria-valuenow={indeterminate ? undefined : clamped}
      >
        <div
          className="lynn-progress-fill"
          style={indeterminate ? undefined : { width: `${percent}%` }}
        />
      </div>
      {label != null ? (
        <div className="lynn-progress-label">{label}</div>
      ) : null}
    </div>
  );
}
