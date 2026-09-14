import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';
import { useTiltSpotlight } from '../../hooks/useTiltSpotlight.js';

export type CardVariant = 'solid' | 'glass';

export interface CardProps {
  /** Card contents. */
  children: ReactNode;
  /**
   * `solid` - `card` surface with a 1px border (wings-2026.html's
   * `.contact-card`).
   * `glass` - translucent + blurred panel (theme.css's `.doc-rail`, the
   * site's only real glass surface).
   */
  variant?: CardVariant;
  /**
   * Draws the 2px accent strip across the card's top edge. Blue, indigo and
   * teal render the real two-stop gradients from tools.html's
   * `.suite-card-accent`; the other accents render a solid strip, matching
   * wings-2026.html's `.contact-card::before`.
   */
  accent?: AccentColor;
  /**
   * 3D tilt (max 7 degrees, 900px perspective) plus a cursor-following
   * radial spotlight. Defaults on, matching the live site, and self-disables
   * under `prefers-reduced-motion: reduce`.
   */
  interactive?: boolean;
  /**
   * Liquid glass: a soft highlight that drifts slowly across the pane, layered
   * over the translucent tint and under the card's own content. Only means
   * anything alongside `variant="glass"` - a solid card has no pane for the
   * light to sit in - and is off by default so today's static glass surfaces
   * (`DocRail`, `Carousel`) are not forced to animate.
   */
  liquid?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

/**
 * A Lynn surface card.
 *
 * `<Card>...</Card>` alone is a complete card: `card` background, 1px
 * border, `lg` radius, hover lift, tilt and spotlight.
 *
 * Usage: pass `interactive` only where the card has mouse-move room - the
 * 7-degree tilt and the 220px spotlight need travel to read as depth, and look
 * wrong on cards packed edge-to-edge in a dense grid or nested inside another
 * interactive surface. Turn it off (`interactive={false}`) for a static
 * container, which is what every card on the playground page does. `accent`
 * draws the 2px top strip; `blue`, `indigo` and `teal` render two-stop
 * gradients and the other four render solid.
 *
 * Don't: don't set `liquid` on a `solid` card - the drifting highlight is
 * layered into the translucent pane, so the class is only applied when
 * `variant="glass"` and otherwise does nothing at all. And don't treat
 * `onClick` as making the card a button: this renders a plain `div` with no
 * role, no `tabIndex` and no key handling, so a clickable card is unreachable
 * by keyboard - put a real `Button` or link inside it instead.
 */
export function Card(props: CardProps) {
  const {
    children,
    variant = 'solid',
    accent,
    interactive = true,
    liquid = false,
    className,
    style,
    onClick,
  } = props;

  const ref = useTiltSpotlight<HTMLDivElement>({ enabled: interactive });

  const classes = [
    'lynn-card',
    `lynn-card-${variant}`,
    accent ? `lynn-card-accent lynn-card-accent-${accent}` : null,
    interactive ? 'lynn-card-interactive' : null,
    liquid && variant === 'glass' ? 'lynn-card-liquid' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes} style={style} onClick={onClick}>
      {children}
    </div>
  );
}
