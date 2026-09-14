import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { Badge } from '../Badge/Badge.js';
import { Button } from '../Button/Button.js';
import type { ButtonVariant } from '../Button/Button.js';

export interface FeaturePanelAction {
  label: ReactNode;
  /** Render as a link instead of a button. */
  href?: string;
  /** Anchor target, e.g. `_blank`. */
  target?: string;
  /** Anchor rel. Defaults to `noopener` whenever `target` is set. */
  rel?: string;
  /** Defaults to `primary` for the first action and `secondary` after it. */
  variant?: ButtonVariant;
  /** Leading glyph. */
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

export interface FeaturePanelProps {
  /** Uppercase pill above the heading. */
  badge?: ReactNode;
  heading: ReactNode;
  /** Narrative body. Pass markup to keep the source's bold clauses. */
  body?: ReactNode;
  /**
   * The action row. Taken as data rather than as nodes so every action is
   * guaranteed to be a real `Button` - the panel's whole job is to be the
   * place a walkthrough hands the reader off from.
   */
  actions?: FeaturePanelAction[];
  /**
   * Any CSS gradient for the 2px top stripe. Defaults to the source's real
   * `blue -> indigo -> emerald` sweep.
   */
  accentGradient?: string;
  /** Anchor id, so a DocRail section link can jump to this panel. */
  id?: string;
  /** Extra content below the actions - a step list, a note, a figure. */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

interface FeaturePanelCSSProperties extends CSSProperties {
  '--lynn-panel-stripe'?: string;
}

/**
 * The large narrative walkthrough panel.
 *
 * Ported from wings-2026.html's `.walk-panel` family: a 24px-radius panel lit
 * by two opposite-corner radial glows over the `card` fill, a gradient stripe
 * along its top edge, then an uppercase pill, a heading, a body capped at
 * 620px, and a row of actions.
 *
 * Usage: one panel per step of a walkthrough, and let the `actions` row be the
 * hand-off - the first action defaults to `primary` and the rest to
 * `secondary`, so a two-action panel needs no `variant` at all. `body` takes
 * markup for the source's bold clauses, and anything richer (a step list, a
 * figure, a nested `CodeBlock`) goes in `children`, which renders below the
 * actions. `accentGradient` re-tints only the 2px top stripe.
 *
 * Don't: don't try to put a custom control in `actions` - it is typed as
 * `FeaturePanelAction` data, not nodes, precisely so every action is
 * guaranteed to be a real `Button`; put anything else in `children`. And
 * `badge` is always rendered `tone="lynn"`, so don't pass a `Badge` of your
 * own expecting the tone to survive - pass the label text.
 */
export function FeaturePanel(props: FeaturePanelProps) {
  const {
    badge,
    heading,
    body,
    actions = [],
    accentGradient,
    id,
    children,
    className,
    style,
  } = props;

  const classes = ['lynn-feature-panel', className].filter(Boolean).join(' ');

  const mergedStyle: FeaturePanelCSSProperties = {
    ...style,
    ...(accentGradient != null ? { '--lynn-panel-stripe': accentGradient } : {}),
  };

  return (
    <div className={classes} style={mergedStyle} id={id}>
      {badge != null ? (
        <Badge tone="lynn" className="lynn-feature-panel-badge">
          {badge}
        </Badge>
      ) : null}

      <h3 className="lynn-feature-panel-heading">{heading}</h3>

      {body != null ? <p className="lynn-feature-panel-body">{body}</p> : null}

      {actions.length > 0 ? (
        <div className="lynn-feature-panel-actions">
          {actions.map((action, index) => (
            <Button
              // Action labels are prose, with no id of their own to key on.
              key={index}
              variant={action.variant ?? (index === 0 ? 'primary' : 'secondary')}
              {...(action.href != null ? { href: action.href } : {})}
              {...(action.target != null ? { target: action.target } : {})}
              {...(action.target != null
                ? { rel: action.rel ?? 'noopener' }
                : action.rel != null
                  ? { rel: action.rel }
                  : {})}
              {...(action.icon != null ? { icon: action.icon } : {})}
              {...(action.disabled != null ? { disabled: action.disabled } : {})}
              {...(action.onClick != null ? { onClick: action.onClick } : {})}
            >
              {action.label}
            </Button>
          ))}
        </div>
      ) : null}

      {children}
    </div>
  );
}
