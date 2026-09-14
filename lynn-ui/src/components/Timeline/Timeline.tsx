import type { CSSProperties, ReactNode } from 'react';
import { Avatar } from '../Avatar/Avatar.js';
import { Badge } from '../Badge/Badge.js';
import type { BadgeStatus } from '../Badge/Badge.js';
import { PulseDot } from '../PulseDot/PulseDot.js';

/**
 * The four real phase states on roadmap.html, in the order the roadmap reads
 * top-down: shipped work, the phase in flight, the one queued behind it, and
 * everything still unscheduled.
 */
export type PhaseStatus = 'shipped' | 'active' | 'next' | 'future';

export interface TimelineProps {
  /** The `Phase`s, in order. */
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * The roadmap's vertical phase timeline.
 *
 * Ported from roadmap.html's `.timeline` / `.phase` / `.card` family - the
 * site's single richest pattern. The connecting rule is the container's own
 * gradient pseudo-element, so phases can be added and removed without any
 * per-phase line bookkeeping.
 *
 * Usage: a container only - put `Phase` children in it, in reading order, and
 * the vertical rule draws itself down the dot gutter however many there are.
 *
 * Don't: don't put anything but `Phase` directly inside it - the gradient rule
 * is positioned against the phases' dot gutter, so a stray card sits beside a
 * line that has nothing to connect to. Wrap extra content in a `Phase`, or put
 * it outside the timeline.
 */
export function Timeline(props: TimelineProps) {
  const { children, className, style } = props;

  const classes = ['lynn-timeline', className].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}

export interface PhaseProps {
  /**
   * `active` - blue dot, pulsing at 2s.
   * `next` - emerald dot, pulsing slower at 2.5s so two live phases are
   * distinguishable at a glance.
   * `shipped` - solid emerald dot, no motion.
   * `future` - faint neutral dot.
   */
  status?: PhaseStatus;
  title: ReactNode;
  /** The phase's window, e.g. `Q3 2026`. */
  period?: ReactNode;
  description?: ReactNode;
  /**
   * What has to land first. Renders as the source's `Requires:`-prefixed
   * chip, so callers pass only the dependency itself.
   */
  dependency?: ReactNode;
  /** The phase's `RoadmapItemCard`s, laid out in a responsive grid. */
  children?: ReactNode;
  /** Anchor id, so a DocRail section link can jump to this phase. */
  id?: string;
  className?: string;
  style?: CSSProperties;
}

/** How long each pulsing state's loop runs, in seconds. Source values. */
const PULSE_DURATION: Record<'active' | 'next', number> = {
  active: 2,
  next: 2.5,
};

/**
 * One phase of a `Timeline`: dot, header, description, optional dependency
 * chip, then a grid of items.
 *
 * Usage: `status` drives both the dot's color and whether it moves at all -
 * `active` is a blue `PulseDot` at 2s, `next` an emerald one at 2.5s (two
 * speeds so two live phases are tellable apart), while `shipped` and `future`
 * are static. Children are `RoadmapItemCard`s, laid out in a responsive grid.
 * Give it an `id` so a `DocRail` section link can jump to it.
 *
 * Don't: don't write "Requires: X" into `dependency` - the component already
 * renders the `Requires:` prefix, so you get it twice; pass only the
 * dependency itself. And don't mark more than one phase `active`: the pulse is
 * the roadmap's "here is where we are", and two of them say nothing.
 */
export function Phase(props: PhaseProps) {
  const {
    status = 'future',
    title,
    period,
    description,
    dependency,
    children,
    id,
    className,
    style,
  } = props;

  const classes = [
    'lynn-phase',
    `lynn-phase-${status}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style} id={id}>
      <div className="lynn-phase-dot-slot">
        {status === 'active' || status === 'next' ? (
          <PulseDot
            tone={status === 'active' ? 'blue' : 'emerald'}
            size={12}
            duration={PULSE_DURATION[status]}
            className="lynn-phase-dot"
          />
        ) : (
          <span className="lynn-phase-dot" aria-hidden="true" />
        )}
      </div>

      <div className="lynn-phase-body">
        <div className="lynn-phase-header">
          <span className="lynn-phase-title">{title}</span>
          {period != null ? (
            <span className="lynn-phase-period">{period}</span>
          ) : null}
        </div>

        {description != null ? (
          <p className="lynn-phase-desc">{description}</p>
        ) : null}

        {dependency != null ? (
          <div className="lynn-phase-dep">
            <span className="lynn-phase-dep-label">Requires:</span>
            {dependency}
          </div>
        ) : null}

        {children != null ? (
          <div className="lynn-phase-cards">{children}</div>
        ) : null}
      </div>
    </div>
  );
}

export interface RoadmapGate {
  /** The approval's name, e.g. `Design review`. */
  label: ReactNode;
  /** Leading glyph. */
  icon?: ReactNode;
  /** Initials of whoever signs it off, rendered as an `xs` avatar stack. */
  people?: string[];
}

export interface RoadmapItemCardProps {
  name: ReactNode;
  description?: ReactNode;
  /** Footer badge label, e.g. `Live`. */
  status?: ReactNode;
  /** Which status pair the footer badge renders. Defaults to `active`. */
  statusVariant?: BadgeStatus;
  /** Neutral outlined pills in the footer, e.g. `['Figma', 'Chrome']`. */
  tags?: string[];
  /** Initials of the people on it, rendered as an `sm` avatar stack. */
  people?: string[];
  /** Named approvals the item still has to clear. */
  gates?: RoadmapGate[];
  /** Heading above the gate chips. The source's copy is the default. */
  gatesLabel?: ReactNode;
  /**
   * Any CSS color for the 3px left stripe - the real `--card-color` the
   * roadmap sets per tool (`#3694FC` audit, `#00E2A0` convert, `#B98FFF`
   * handoff, `#36EAD0` parity).
   */
  accentColor?: string;
  /** The source's `.card.highlight`: a blue-tinted fill and ring. */
  highlight?: boolean;
  /** Extra body content - a callout, a nested list - after the description. */
  children?: ReactNode;
  /** Anchor id, so a DocRail section link can jump to this item. */
  id?: string;
  className?: string;
  style?: CSSProperties;
}

interface RoadmapItemCardCSSProperties extends CSSProperties {
  '--lynn-item-accent'?: string;
}

/**
 * One item inside a `Phase`: a small card with a left accent stripe, a name,
 * a description, and any of a status badge, tag chips, an assignee stack and
 * a footer of named approval gates.
 *
 * Usage: `accentColor` is any CSS color for the 3px left stripe and is how the
 * roadmap codes items by tool (blue audit, emerald convert, lynn handoff, teal
 * parity) - feed it `designTokens.color.accent[...]`. `people` and each
 * `gates[].people` take initials and render as `sm` / `xs` `Avatar` stacks.
 * `highlight` is the blue-tinted "this one" treatment; use it on at most one
 * card per phase.
 *
 * Don't: don't pass duplicate initials in `people` or `gates[].people` - the
 * avatars are keyed by the initials string, so two people who share initials
 * collide on one React key and only one disc renders. And don't pass
 * `statusVariant` without `status`: the footer badge only renders when there is
 * a label, so the variant alone does nothing.
 */
export function RoadmapItemCard(props: RoadmapItemCardProps) {
  const {
    name,
    description,
    status,
    statusVariant = 'active',
    tags = [],
    people = [],
    gates = [],
    gatesLabel = 'Required before ship',
    accentColor = 'rgba(255,255,255,0.15)',
    highlight = false,
    children,
    id,
    className,
    style,
  } = props;

  const classes = [
    'lynn-roadmap-item',
    highlight ? 'lynn-roadmap-item-highlight' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const mergedStyle: RoadmapItemCardCSSProperties = {
    ...style,
    '--lynn-item-accent': accentColor,
  };

  const hasFooter = tags.length > 0 || people.length > 0;

  return (
    <div className={classes} style={mergedStyle} id={id}>
      <div className="lynn-roadmap-item-body">
        <div className="lynn-roadmap-item-top">
          <span className="lynn-roadmap-item-name">{name}</span>
          {status != null ? (
            <Badge status={statusVariant}>{status}</Badge>
          ) : null}
        </div>

        {description != null ? (
          <p className="lynn-roadmap-item-desc">{description}</p>
        ) : null}

        {children}

        {hasFooter ? (
          <div className="lynn-roadmap-item-footer">
            <div className="lynn-roadmap-item-tags">
              {tags.map((tag) => (
                <span className="lynn-roadmap-item-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            {people.length > 0 ? (
              <div className="lynn-roadmap-item-people">
                {people.map((initials) => (
                  <Avatar initials={initials} size="sm" key={initials} />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      {gates.length > 0 ? (
        <div className="lynn-roadmap-item-gates">
          <div className="lynn-roadmap-item-gates-label">{gatesLabel}</div>
          <div className="lynn-roadmap-item-gates-rows">
            {gates.map((gate, index) => (
              <span
                className="lynn-roadmap-item-gate"
                // Gate labels are prose and can repeat across a card.
                key={index}
              >
                {gate.icon != null ? (
                  <span
                    className="lynn-roadmap-item-gate-icon"
                    aria-hidden="true"
                  >
                    {gate.icon}
                  </span>
                ) : null}
                {gate.label}
                {gate.people != null && gate.people.length > 0 ? (
                  <span className="lynn-roadmap-item-gate-avatars">
                    {gate.people.map((initials) => (
                      <Avatar initials={initials} size="xs" key={initials} />
                    ))}
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
