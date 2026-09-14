import { useId, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';
import { Badge } from '../Badge/Badge.js';
import { Button } from '../Button/Button.js';

export interface ChangelogGroup {
  /** Uppercase group heading, e.g. `New features`. */
  label: ReactNode;
  /**
   * Bullet-dot accent. The three the source really uses are `blue` for new
   * features (the default), `coral` for fixes and `emerald` for improvements.
   */
  tone?: AccentColor;
  /** The bullets. Pass markup to keep a leading bold clause. */
  items: ReactNode[];
}

export interface ChangelogEntryProps {
  /** Version string, e.g. `v11.4`. */
  version: ReactNode;
  /** Release date, e.g. `September 2026`. */
  date: ReactNode;
  /**
   * Renders the always-expanded form with the `LATEST` pill: a version
   * sidebar beside the grouped lists, with no toggle at all. Exactly one
   * entry in a list should carry it.
   */
  isLatest?: boolean;
  /**
   * Open state of a non-latest entry on first render. Defaults closed, which
   * is what the source ships - a release page opens on the newest release,
   * not on every release at once.
   */
  defaultOpen?: boolean;
  /** The change groups, in reading order. */
  groups: ChangelogGroup[];
  /** Anchor id, e.g. `release-v11-4`. */
  id?: string;
  className?: string;
  style?: CSSProperties;
}

function ChangelogBody(props: {
  version: ReactNode;
  date: ReactNode;
  isLatest: boolean;
  groups: ChangelogGroup[];
}) {
  const { version, date, isLatest, groups } = props;

  return (
    <div className="lynn-changelog-main">
      <div className="lynn-changelog-meta">
        <div className="lynn-changelog-version">
          {version}
          {isLatest ? <Badge tone="emerald" bordered>Latest</Badge> : null}
        </div>
        <div className="lynn-changelog-date">{date}</div>
      </div>

      <div className="lynn-changelog-content">
        {groups.map((group, groupIndex) => (
          <div
            className="lynn-changelog-group"
            // Group labels are prose and may repeat between releases.
            key={groupIndex}
          >
            <div className="lynn-changelog-group-label">{group.label}</div>
            <ul
              className={`lynn-changelog-list lynn-changelog-list-${group.tone ?? 'blue'}`}
            >
              {group.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * One release on a changelog.
 *
 * Ported from release-notes.html's `.changelog-card` family, which has two
 * real forms: the newest release renders expanded, as a version sidebar
 * beside its grouped bullet lists; every older one renders as a toggle row
 * that expands the identical body. Both share `ChangelogBody`, so the two
 * forms cannot drift.
 *
 * The toggle row is a real `Button` at `ghost`, laid out as a full-width row -
 * and its chevron uses the same rotate-on-open treatment as `Accordion`.
 *
 * Usage: exactly one entry in a list carries `isLatest`, and it renders the
 * expanded no-toggle form with the LATEST pill; every other entry is a
 * collapsed toggle row. Give each card an `id` (`release-v11-4`) so a
 * `DocRail` link and a deep link both land on it - without one the collapsible
 * body still gets a generated `aria-controls` target, but the card itself has
 * no anchor. Keep `group.tone` to the three the source uses: `blue` for new
 * features, `coral` for fixes, `emerald` for improvements.
 *
 * Don't: don't pass `isLatest` and `defaultOpen` together - the `isLatest`
 * branch returns before the toggle is ever built, so `defaultOpen` is dead
 * code there. And don't drive `defaultOpen` from state to open a card later:
 * it is read once into `useState`, so it only means anything on the first
 * render (the playground re-keys the whole preview for exactly this reason).
 */
export function ChangelogEntry(props: ChangelogEntryProps) {
  const {
    version,
    date,
    isLatest = false,
    defaultOpen = false,
    groups,
    id,
    className,
    style,
  } = props;

  const [open, setOpen] = useState(defaultOpen);
  // The collapsible body needs an id the toggle can point `aria-controls` at,
  // whether or not the caller gave the card one of its own.
  const generatedId = useId();

  const classes = ['lynn-changelog-card', className].filter(Boolean).join(' ');

  if (isLatest) {
    return (
      <div className={classes} style={style} id={id}>
        <ChangelogBody
          version={version}
          date={date}
          isLatest
          groups={groups}
        />
      </div>
    );
  }

  const bodyId = `${id ?? generatedId}-body`;

  return (
    <div className={classes} style={style} id={id}>
      <Button
        variant="ghost"
        className="lynn-changelog-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={bodyId}
      >
        <span className="lynn-changelog-toggle-left">
          <span className="lynn-changelog-toggle-version">{version}</span>
          <span className="lynn-changelog-toggle-date">{date}</span>
        </span>
        <span
          className={[
            'lynn-changelog-toggle-arrow',
            open ? 'lynn-changelog-toggle-arrow-open' : null,
          ]
            .filter(Boolean)
            .join(' ')}
          aria-hidden="true"
        >
          &#9662;
        </span>
      </Button>
      <div className="lynn-changelog-collapsible" id={bodyId} hidden={!open}>
        <ChangelogBody
          version={version}
          date={date}
          isLatest={false}
          groups={groups}
        />
      </div>
    </div>
  );
}
