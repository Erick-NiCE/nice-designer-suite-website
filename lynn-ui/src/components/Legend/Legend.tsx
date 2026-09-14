import type { CSSProperties, ReactNode } from 'react';

export type LegendVariant = 'dot' | 'pill';

export interface LegendItem {
  /** Any CSS color. The dot's fill, or the pill's text and 15% background. */
  swatch: string;
  label: ReactNode;
  /** Trailing explanation. Only the `pill` variant renders one. */
  description?: ReactNode;
}

export interface LegendProps {
  items: LegendItem[];
  /**
   * `dot` - 8px colored disc before the label (roadmap.html's `.legend`).
   * `pill` - the label itself becomes a tinted uppercase pill, optionally
   * followed by a description (the-suite.html's `.legend-pill`).
   */
  variant?: LegendVariant;
  /** Small uppercase heading before the row, e.g. `Status`. */
  label?: string;
  className?: string;
  style?: CSSProperties;
}

interface SwatchCSSProperties extends CSSProperties {
  '--lynn-legend-swatch'?: string;
}

/**
 * A color-key row.
 *
 * `dot` is roadmap.html's `.legend` / `.legend-item` / `.legend-dot`; `pill`
 * is the-suite.html's `.legend-pill` + `.legend-desc` pairing, where the key
 * *is* the badge being explained rather than a swatch beside it.
 *
 * Usage: `variant="dot"` when the legend explains colors used elsewhere (a
 * `Timeline`'s phase dots, a chart), `pill` when the thing being explained is
 * a `Badge` the reader will meet on the page. `item.swatch` is any CSS color,
 * forwarded as `--lynn-legend-swatch`, so feed it the same
 * `designTokens.color.accent[...]` value the real element uses or the key
 * stops matching what it keys.
 *
 * Don't: don't set `item.description` on the `dot` variant - only `pill`
 * renders one, so the text disappears with no warning. And keep the row short:
 * it is a flex row with no wrapping strategy beyond the container's, so a
 * ten-item legend turns into a wall of chips.
 */
export function Legend(props: LegendProps) {
  const { items, variant = 'dot', label, className, style } = props;

  const classes = ['lynn-legend', `lynn-legend-variant-${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      {label != null ? (
        <span className="lynn-legend-label">{label}</span>
      ) : null}
      {items.map((item, index) => {
        const itemStyle: SwatchCSSProperties = {
          '--lynn-legend-swatch': item.swatch,
        };
        return (
          // A legend key is a color plus prose; neither is a stable id.
          <span className="lynn-legend-item" key={index} style={itemStyle}>
            {variant === 'dot' ? (
              <>
                <span className="lynn-legend-dot" aria-hidden="true" />
                {item.label}
              </>
            ) : (
              <>
                <span className="lynn-legend-pill">{item.label}</span>
                {item.description != null ? (
                  <span className="lynn-legend-desc">{item.description}</span>
                ) : null}
              </>
            )}
          </span>
        );
      })}
    </div>
  );
}
