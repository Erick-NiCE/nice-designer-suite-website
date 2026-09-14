import type { CSSProperties, ReactNode } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';

export interface PulseDotProps {
  /**
   * Accent color. Defaults to `emerald`, matching the real "Live" status
   * usage on the site.
   */
  tone?: AccentColor;
  /**
   * `glow` (default) - the expanding box-shadow ring from roadmap.html.
   * `neumorphic` - the dot sits on a small raised circular plate
   * (`--lynn-shadow-raised`) and breathes in place instead of throwing a
   * ring, for a tactile hardware-indicator look.
   */
  variant?: 'glow' | 'neumorphic';
  /** Diameter in px. Source value: 12. */
  size?: number;
  /** Loop duration in seconds. Source values: 2 (active), 2.5 (next). */
  duration?: number;
  /** Optional text rendered beside the dot. */
  label?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface PulseDotCSSProperties extends CSSProperties {
  '--lynn-pulse-size'?: string;
  '--lynn-pulse-duration'?: string;
}

/**
 * `lynn/motion/pulse`
 *
 * A status dot with an expanding-ring pulse, ported from roadmap.html's
 * `.phase-dot.active` / `@keyframes pulse`.
 *
 * Usage: for a genuinely live indicator, and pass `label` so the state has
 * words - with a label the dot and text are wrapped together and your `style`
 * lands on the wrapper, without one it lands on the dot itself. `duration`
 * is the lever that distinguishes two simultaneous live states: `Timeline`'s
 * `Phase` runs `active` at 2s and `next` at 2.5s for exactly that reason.
 * `variant="neumorphic"` swaps the expanding ring for a dot breathing on a
 * raised plate, for a hardware-indicator look.
 *
 * Don't: don't scatter it through a list as a decorative bullet - the ring is
 * an infinite expanding box-shadow with no `aria` of its own, so a column of
 * them is pure motion noise; `Legend`'s `dot` variant is the static swatch.
 * And don't rely on `tone` alone to carry the state: nothing about the color
 * reaches assistive tech, so the meaning has to be in `label`.
 */
export function PulseDot(props: PulseDotProps) {
  const {
    tone = 'emerald',
    variant = 'glow',
    size = 12,
    duration = 2,
    label,
    className,
    style,
  } = props;

  const plated = variant === 'neumorphic';

  const classes = [
    'lynn-pulse-dot',
    `lynn-pulse-dot-${tone}`,
    plated ? 'lynn-pulse-dot-plated' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const dotVars: PulseDotCSSProperties = {
    '--lynn-pulse-size': `${size}px`,
    '--lynn-pulse-duration': `${duration}s`,
  };

  // With no label the outermost element carries the caller's `style`, so the
  // default (unplated) markup stays exactly what it always was.
  const core = plated ? (
    <span
      className="lynn-pulse-dot-plate"
      style={label == null ? style : undefined}
    >
      <span className={classes} style={dotVars} />
    </span>
  ) : (
    <span
      className={classes}
      style={label == null ? { ...style, ...dotVars } : dotVars}
    />
  );

  if (label == null) return core;

  return (
    <span className="lynn-pulse-dot-wrap" style={style}>
      {core}
      <span className="lynn-pulse-dot-label">{label}</span>
    </span>
  );
}
