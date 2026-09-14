import type { CSSProperties, ReactNode } from 'react';

export interface SparkleProps {
  /**
   * Custom content to animate instead of the default layered sparkle glyph.
   * Gets a plain scale+opacity pulse (no rotation) rather than the default's
   * independently-twinkling layers, since an arbitrary shape has no
   * predictable sub-parts to stagger.
   */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * `lynn/motion/sparkle`
 *
 * The default (no `children`) renders Tabler's `sparkles` glyph as three
 * separate diamonds - the same shapes the combined icon is built from, split
 * back into their own `<path>`s - each twinkling (scale + opacity, no
 * rotation) on its own staggered delay. A single rigid shape doesn't have
 * 4-fold symmetry, so rotating the whole glyph the way `nice-sparkle` did
 * read as a lopsided half-spin rather than a twinkle; three independently
 * pulsing layers is what actually looks like the glyph transforming.
 *
 * Usage: pass no children for the built-in three-layer glyph in the `lynn`
 * accent - use it beside a Superpowers label or a new-feature heading. It
 * renders `display: inline-flex`, so it sits in a line of text without
 * disturbing it. Self-disables under `prefers-reduced-motion: reduce`.
 *
 * Don't: don't wrap a button or any other control in it - it's `aria-hidden`
 * and built for a decorative inline glyph, not an interactive element; a
 * control inside would animate along with it and lose its own hover/focus
 * affordance. Site copy that wraps a real button's icon in this treatment is
 * a misuse of the component, not a supported pattern.
 */
export function Sparkle(props: SparkleProps) {
  const { children, className, style } = props;

  if (children != null) {
    const classes = ['lynn-sparkle', 'lynn-sparkle-custom', className]
      .filter(Boolean)
      .join(' ');
    return (
      <span className={classes} style={style} aria-hidden="true">
        {children}
      </span>
    );
  }

  const classes = ['lynn-sparkle', className].filter(Boolean).join(' ');

  return (
    <svg
      className={classes}
      style={style}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        className="lynn-sparkle-layer lynn-sparkle-layer-a"
        d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2Z"
      />
      <path
        className="lynn-sparkle-layer lynn-sparkle-layer-b"
        d="M16 6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2Z"
      />
      <path
        className="lynn-sparkle-layer lynn-sparkle-layer-c"
        d="M9 18a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6Z"
      />
    </svg>
  );
}
