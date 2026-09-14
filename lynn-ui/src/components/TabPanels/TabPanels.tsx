import { createContext, useContext } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';
import { Tabs } from '../Tabs/Tabs.js';
import type { TabsVariant } from '../Tabs/Tabs.js';

export interface TabPanelsTab {
  /** Matches the `id` of the `TabPanel` this tab reveals. */
  id: string;
  /** Visible label. Pass `ariaLabel` too when the label is an icon only. */
  label?: ReactNode;
  /** Leading glyph or icon node. */
  icon?: ReactNode;
  /** Accessible name, required when the tab renders as an icon alone. */
  ariaLabel?: string;
  disabled?: boolean;
}

export interface TabPanelsProps {
  /** The tabs, in render order. */
  tabs: TabPanelsTab[];
  /** `tab.id` of the visible panel. */
  activeId: string;
  onChange: (id: string) => void;
  /** The `Tabs` variant the button row renders. */
  variant?: TabsVariant;
  /** Accent the active tab takes. */
  tone?: AccentColor;
  /** Divide the full available width evenly between tabs. */
  stretch?: boolean;
  /**
   * Wraps the tab row in dashboard.html's `.section-nav` chrome: a `surface`
   * strip with a bottom hairline and 10px/20px padding, with the panel
   * indented to match. Defaults on, which is what the source does. Turn it
   * off to sit the row directly on the page background.
   */
  bar?: boolean;
  /** Accessible name for the tab row. */
  ariaLabel?: string;
  /** The `TabPanel`s. */
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/* The active id, so a `TabPanel` needs no prop threading and the caller can
   nest panels inside whatever layout the page already has. */
const ActivePanelContext = createContext<string | null>(null);

/**
 * A tab row wired to sibling panels.
 *
 * Ported from dashboard.html's `.section-nav` / `.nav-btn` / `.section-panel`
 * trio (and the click handler at the bottom of that file). The button row is
 * the `Tabs` primitive - this pair only adds the switching, so there is one
 * segmented control in the system rather than two.
 *
 * Controlled, like `Tabs` itself: hold `activeId` in the caller so a deep
 * link, a "next" button or a keyboard shortcut can all drive the same state.
 *
 * Usage: every `tab.id` needs a `TabPanel` with the matching `id`, and the
 * active id reaches the panels through context so they can sit anywhere inside
 * the tree. `bar` is on by default and wraps the row in dashboard.html's
 * `.section-nav` chrome; turn it off to sit the tabs directly on the page
 * background. The row is a real `Tabs` in `tablist` semantics, so arrow keys
 * already walk it.
 *
 * Don't: don't pass an `activeId` that matches no tab - `Tabs` then has no
 * active segment, which drops `tabIndex` to `-1` on all of them and takes the
 * whole group out of the tab order, and every panel stays hidden. And use this
 * rather than a bare `Tabs` whenever the control reveals content: `Tabs`
 * alone defaults to `radiogroup`, which announces a value picker, not tabs.
 */
export function TabPanels(props: TabPanelsProps) {
  const {
    tabs,
    activeId,
    onChange,
    variant = 'pill',
    tone = 'blue',
    stretch = false,
    bar = true,
    ariaLabel,
    children,
    className,
    style,
  } = props;

  const classes = [
    'lynn-tab-panels',
    bar ? 'lynn-tab-panels-bar' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const options = tabs.map((tab) => ({
    value: tab.id,
    ...(tab.label != null ? { label: tab.label } : {}),
    ...(tab.icon != null ? { icon: tab.icon } : {}),
    ...(tab.ariaLabel != null ? { ariaLabel: tab.ariaLabel } : {}),
    ...(tab.disabled != null ? { disabled: tab.disabled } : {}),
  }));

  return (
    <div className={classes} style={style}>
      <div className="lynn-tab-panels-nav">
        <Tabs
          options={options}
          value={activeId}
          onChange={onChange}
          variant={variant}
          tone={tone}
          stretch={stretch}
          semantics="tablist"
          {...(ariaLabel != null ? { ariaLabel } : {})}
        />
      </div>
      <ActivePanelContext.Provider value={activeId}>
        {children}
      </ActivePanelContext.Provider>
    </div>
  );
}

export interface TabPanelProps {
  /** Matches the `id` of the tab that reveals this panel. */
  id: string;
  /** Panel contents. */
  children: ReactNode;
  /** Accessible name for the panel, usually its tab's label. */
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * One panel of a `TabPanels` group.
 *
 * Inactive panels stay mounted and hidden, matching `.section-panel`'s
 * `display: none` - a half-filled form or a scrolled table in a background
 * panel survives a trip through the other tabs.
 *
 * Usage: `id` has to match its tab's `id`, and it is written straight onto the
 * DOM element, so it also has to be unique across the whole page. Pass
 * `ariaLabel` (usually the tab's own label) so the `role="tabpanel"` has a
 * name.
 *
 * Don't: don't render one outside a `TabPanels` - the active id comes from
 * context, which defaults to `null`, so a stray panel is hidden forever with
 * no error. And don't put an expensive subtree (a live chart, a `Lightning`, a
 * polling query) in a background panel expecting it to unmount when you switch
 * away: inactive panels stay mounted by design and keep running.
 */
export function TabPanel(props: TabPanelProps) {
  const { id, children, ariaLabel, className, style } = props;

  const activeId = useContext(ActivePanelContext);
  const active = activeId === id;

  const classes = [
    'lynn-tab-panel',
    active ? 'lynn-tab-panel-active' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      style={style}
      id={id}
      role="tabpanel"
      aria-label={ariaLabel}
      hidden={!active}
    >
      {children}
    </div>
  );
}
