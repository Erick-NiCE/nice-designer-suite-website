import type { CSSProperties } from 'react';

export type SpinnerSize = 'sm' | 'md' | 'lg';

/** Which ground the spinner sits on, not which theme is active. */
export type SpinnerTone = 'light' | 'dark';

export interface SpinnerProps {
  /** 11px / 16px / 24px. `sm` is the plugin's inline in-button size. */
  size?: SpinnerSize;
  /**
   * `light` (default) - white ring on a 35%-white track, for dark surfaces
   * and inside filled buttons.
   * `dark` - blue ring on a 15%-black track, for light surfaces.
   */
  tone?: SpinnerTone;
  /** Accessible label. Set `null` for a purely decorative spinner. */
  ariaLabel?: string | null;
  className?: string;
  style?: CSSProperties;
}

/**
 * The bordered-ring loading spinner, ported from the plugin's `.spinner`.
 *
 * Usage: `tone` describes the ground the spinner sits on, not the active theme
 * - `light` (the default) for Lynn's dark surfaces and inside a filled
 * `Button`, `dark` for a light panel, so the choice does not change when the
 * `ThemeToggle` moves. `size="sm"` is the 11px in-button size `Button.loading`
 * uses; `md` and `lg` are for a standalone loading state.
 *
 * Don't: don't leave the default `ariaLabel` on a spinner that already sits
 * inside a labeled loading region or a busy `Button` - you get "Loading"
 * announced twice; pass `ariaLabel={null}` to make it decorative, which is
 * exactly what `Button` and `AccessGate` do. And don't use it for work with a
 * known length: `ProgressBar` or `GaugeRing` tell the reader how much is left.
 */
export function Spinner(props: SpinnerProps) {
  const {
    size = 'sm',
    tone = 'light',
    ariaLabel = 'Loading',
    className,
    style,
  } = props;

  const classes = [
    'lynn-spinner',
    `lynn-spinner-${size}`,
    `lynn-spinner-${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={classes}
      style={style}
      role={ariaLabel == null ? undefined : 'status'}
      aria-label={ariaLabel ?? undefined}
      aria-hidden={ariaLabel == null ? true : undefined}
    />
  );
}
