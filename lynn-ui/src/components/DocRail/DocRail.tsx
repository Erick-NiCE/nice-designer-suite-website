import { useState } from 'react';
import type { CSSProperties } from 'react';
import { useAnchorWarmth } from '../../hooks/useAnchorWarmth.js';
import { ScrollArea } from '../ScrollArea/ScrollArea.js';

/** Which list the rail renders: sibling documents, or one page's sections. */
export type DocRailMode = 'pages' | 'sections';

export interface DocRailPage {
  /** Link target, e.g. `./install-guide.html` or `#/components/button`. */
  href: string;
  label: string;
}

export interface DocRailItem {
  /** Id of the element on this page the link jumps to. */
  id: string;
  label: string;
}

export interface DocRailGroup {
  /** Small uppercase heading above the group's links. */
  label: string;
  items: DocRailItem[];
}

export interface DocRailProps {
  /**
   * `pages` - the cross-document switcher, one link per sibling page, with
   * `groups` (if any) nested under the active one.
   * `sections` - only the indented in-page section list. This is what
   * nice-effects.js calls a `standalone` rail.
   */
  mode?: DocRailMode;
  /** In-page section groups. In `pages` mode they belong to `activeHref`. */
  groups?: DocRailGroup[];
  /** Page links, read in `pages` mode. */
  pages?: DocRailPage[];
  /** `page.href` to mark as the current document. */
  activeHref?: string;
  /**
   * Collapsed state. Pass it to control the rail from outside (and handle
   * `onToggle`); leave it off to let the rail track its own.
   */
  collapsed?: boolean;
  /** Called with the state the rail is moving to. */
  onToggle?: (collapsed: boolean) => void;
  /** Adds the filter box above the list. */
  searchable?: boolean;
  /** Header text. Defaults per mode, matching the two real rails. */
  label?: string;
  searchPlaceholder?: string;
  /** Shown when the filter matches nothing. */
  emptyText?: string;
  /** Accessible name for the rail. Defaults per mode. */
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

interface WarmthCSSProperties extends CSSProperties {
  '--lynn-warmth'?: number;
}

function matches(label: string, needle: string) {
  return needle.length === 0 || label.toLowerCase().includes(needle);
}

/**
 * The rail's own toggle glyph: three bars that cross into an X.
 *
 * `open` describes what the button DOES, not the rail's current state: the
 * collapse button (visible while the rail is open) passes `open={isCollapsed}`
 * so it reads as an X - "click to close" - and the expand tab (visible while
 * collapsed) passes the same `open={isCollapsed}` so it reads as three bars -
 * "click to open." Both controls key off the same boolean on purpose, so the
 * glyph always matches the action the visible button performs.
 * The whole animation is two CSS transforms and one opacity in DocRail.css;
 * the bars are `<rect>`s rather than `<line>`s because a zero-height line
 * has no fill box for `transform-origin: center` to resolve against. The
 * 5-unit gap between the three bars is load-bearing: it is the exact travel
 * that puts both crossed arms' centers on the viewBox's own center, so the
 * X is symmetric without any nudge. The arms are also scaled up in the
 * crossed state - see the comment on `.lynn-doc-rail-icon-crossed` for why a
 * 45-degree bar has to be longer to read the same size.
 */
function DocRailToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={[
        'lynn-doc-rail-icon',
        open ? null : 'lynn-doc-rail-icon-crossed',
      ]
        .filter(Boolean)
        .join(' ')}
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        className="lynn-doc-rail-icon-bar lynn-doc-rail-icon-top"
        x="2.5"
        y="2.25"
        width="11"
        height="1.5"
        rx="0.75"
      />
      <rect
        className="lynn-doc-rail-icon-bar lynn-doc-rail-icon-mid"
        x="2.5"
        y="7.25"
        width="11"
        height="1.5"
        rx="0.75"
      />
      <rect
        className="lynn-doc-rail-icon-bar lynn-doc-rail-icon-bot"
        x="2.5"
        y="12.25"
        width="11"
        height="1.5"
        rx="0.75"
      />
    </svg>
  );
}

/**
 * The documentation sidebar: a fixed 220px glass panel that collapses to a
 * slim edge tab.
 *
 * Ported from theme.css's `.doc-rail*` block and nice-effects.js's
 * `buildDocRail()`. The original decided between its two shapes from the
 * current pathname and a `standalone` flag in its own page table; here that
 * is the `mode` prop, so the same rail also works for a hash-routed docs app
 * that has no page table at all.
 *
 * Usage: `mode="sections"` for one page's own anchors, `mode="pages"` for the
 * cross-document switcher - in which case set `activeHref`, because sub-items
 * only render nested under the page you are on. Either pass `collapsed` plus
 * `onToggle` to control it from outside (which is how the playground lets a
 * card drive the page's real rail) or pass neither and let it track its own.
 * `searchable` filters whichever list is showing, so it is never inert.
 *
 * Don't: don't mount two on one page - the rail is `position: fixed` at 220px
 * wide, pinned under the nav and 24px from the left edge, so a second one
 * lands exactly on top of the first; override the position in `className` if
 * you need it somewhere else. And don't list a section whose `id` has no
 * element on the page: the anchor goes nowhere and `useAnchorWarmth` can never
 * highlight it, so the row reads as permanently inactive.
 */
export function DocRail(props: DocRailProps) {
  const {
    mode = 'pages',
    groups = [],
    pages = [],
    activeHref,
    collapsed,
    onToggle,
    searchable = false,
    label,
    searchPlaceholder = 'Search pages…',
    emptyText = 'No matching pages',
    ariaLabel,
    className,
    style,
  } = props;

  const [selfCollapsed, setSelfCollapsed] = useState(false);
  const [query, setQuery] = useState('');

  const isCollapsed = collapsed ?? selfCollapsed;
  const needle = query.trim().toLowerCase();

  const warmth = useAnchorWarmth(
    groups.flatMap((group) => group.items.map((item) => item.id))
  );

  const setCollapsed = (next: boolean) => {
    if (collapsed == null) setSelfCollapsed(next);
    onToggle?.(next);
  };

  const headerLabel =
    label ?? (mode === 'sections' ? 'On This Page' : 'Documentation');

  // The original only ever filtered the flat page links. Filtering whichever
  // list the rail is actually showing means the search box is never inert.
  const visiblePages = pages.filter((page) => matches(page.label, needle));
  const visibleGroups = groups
    .map((group) => ({
      label: group.label,
      items: group.items.filter((item) => matches(item.label, needle)),
    }))
    .filter((group) => group.items.length > 0);

  const empty =
    mode === 'sections' ? visibleGroups.length === 0 : visiblePages.length === 0;

  // A section link can point at a collapsed <details> (an FAQ question, an
  // older changelog entry). Open it before the jump, or the anchor lands on
  // a closed summary - the same fixup buildDocRail() applies.
  const openTargetDetails = (id: string) => {
    const target = document.getElementById(id);
    if (target instanceof HTMLDetailsElement) target.open = true;
  };

  const renderGroups = (list: DocRailGroup[]) =>
    list.map((group) => (
      <div className="lynn-doc-rail-group" key={group.label}>
        <div className="lynn-doc-rail-group-label">{group.label}</div>
        {group.items.map((item) => {
          const heat = warmth[item.id] ?? 0;
          const itemStyle: WarmthCSSProperties = { '--lynn-warmth': heat };
          return (
            <a
              key={item.id}
              className="lynn-doc-rail-sublink"
              href={`#${item.id}`}
              style={itemStyle}
              aria-current={heat > 0 ? 'true' : undefined}
              onClick={() => openTargetDetails(item.id)}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    ));

  return (
    <>
      <nav
        className={[
          'lynn-doc-rail',
          isCollapsed ? 'lynn-doc-rail-collapsed' : null,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={style}
        aria-label={
          ariaLabel ??
          (mode === 'sections' ? 'Page navigation' : 'Documentation pages')
        }
      >
        <div className="lynn-doc-rail-header">
          <div className="lynn-doc-rail-label">{headerLabel}</div>
          <button
            type="button"
            className="lynn-doc-rail-collapse"
            aria-label="Collapse navigation menu"
            aria-expanded={!isCollapsed}
            onClick={() => setCollapsed(true)}
          >
            <DocRailToggleIcon open={isCollapsed} />
          </button>
        </div>

        {searchable ? (
          <div className="lynn-doc-rail-search-wrap">
            <input
              className="lynn-doc-rail-search"
              type="text"
              value={query}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        ) : null}

        {/*
          Only the list scrolls. The rail used to be the scroll container
          itself, which meant its header and search box scrolled away with
          the links *and* that a native bar cut straight across its 14px
          corners; `ScrollArea` on the list alone pins both and draws the bar
          on the rail's own radius.
        */}
        <ScrollArea
          className="lynn-doc-rail-scroll"
          radius="14px"
          ariaLabel={headerLabel}
        >
          <div className="lynn-doc-rail-links">
            {mode === 'sections'
              ? renderGroups(visibleGroups)
              : visiblePages.map((page) => {
                  const active = page.href === activeHref;
                  return (
                    <div className="lynn-doc-rail-page" key={page.href}>
                      <a
                        className={[
                          'lynn-doc-rail-link',
                          active ? 'lynn-doc-rail-link-active' : null,
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        href={page.href}
                        aria-current={active ? 'page' : undefined}
                      >
                        {page.label}
                      </a>
                      {/* Sub-items only render for the page you are on. */}
                      {active ? renderGroups(visibleGroups) : null}
                    </div>
                  );
                })}
          </div>
        </ScrollArea>

        {empty ? <div className="lynn-doc-rail-empty">{emptyText}</div> : null}
      </nav>

      <button
        type="button"
        className={[
          'lynn-doc-rail-expand',
          isCollapsed ? 'lynn-doc-rail-expand-visible' : null,
        ]
          .filter(Boolean)
          .join(' ')}
        aria-label="Expand navigation menu"
        aria-expanded={!isCollapsed}
        onClick={() => setCollapsed(false)}
      >
        <DocRailToggleIcon open={isCollapsed} />
      </button>
    </>
  );
}
