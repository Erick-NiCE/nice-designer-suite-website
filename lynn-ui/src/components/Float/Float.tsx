import type { CSSProperties, ReactNode } from 'react';

export interface FloatProps {
  /** The icon, badge or small element to bob. */
  children: ReactNode;
  /** Peak vertical travel in px. Source value: 6. */
  distance?: number;
  /** Loop duration in seconds. */
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

interface FloatCSSProperties extends CSSProperties {
  '--lynn-float-distance'?: string;
  '--lynn-float-duration'?: string;
}

/**
 * `lynn/motion/float`
 *
 * A gentle 6px vertical bob for icons and badges, ported from roadmap.html's
 * `@keyframes float`.
 *
 * Usage: for one small decorative thing - a hero glyph, a `Badge`, an icon
 * tile. `distance` is normalized with `-Math.abs()`, so the sign you pass does
 * not matter, and the default 6px / 6s pairing is the source's. Self-disables
 * under `prefers-reduced-motion: reduce`.
 *
 * Don't: don't wrap anything the reader has to click or read precisely - a
 * permanently drifting target is harder to hit and harder to scan, and the
 * loop never settles. And note it renders a `div`, so wrapping an inline
 * element forces a block box into the line.
 */
export function Float(props: FloatProps) {
  const { children, distance = 6, duration = 6, className, style } = props;

  const classes = ['lynn-float', className].filter(Boolean).join(' ');

  const mergedStyle: FloatCSSProperties = {
    ...style,
    '--lynn-float-distance': `${-Math.abs(distance)}px`,
    '--lynn-float-duration': `${duration}s`,
  };

  return (
    <div className={classes} style={mergedStyle}>
      {children}
    </div>
  );
}
