import type { CSSProperties } from 'react';
import type { AccentColor } from '../tokens/tokens.js';
import { Tabs } from '../components/Tabs/Tabs.js';
import type { TabOption, TabsVariant } from '../components/Tabs/Tabs.js';
import { IconSun, IconMoon, IconNiceSmile } from '../icons/icons.js';
import { useLynnTheme } from './ThemeProvider.js';
import type { LynnTheme } from './ThemeProvider.js';
import { runThemeWipe } from './themeWipe.js';

export interface ThemeToggleProps {
  /**
   * Show the mode names next to the icons. Turn off for an icon-only toggle
   * (each segment keeps its accessible name either way).
   */
  showLabels?: boolean;
  /** Passed straight to `Tabs`. Defaults to the solid-accent `pill`. */
  variant?: TabsVariant;
  /** Accent for the active segment. */
  tone?: AccentColor;
  /** Accessible name for the group. */
  ariaLabel?: string;
  /**
   * Set false to swap the tokens with no screen wipe, the way the control
   * behaved before the wipe existed. It is an escape hatch, not a taste
   * setting: reach for it where the toggle drives a small embedded preview
   * rather than the page, so a full-viewport sweep would be a lie about what
   * changed. `prefers-reduced-motion` already skips the wipe on its own.
   */
  animated?: boolean;
  className?: string;
  style?: CSSProperties;
}

const LABELS: Record<LynnTheme, string> = {
  light: 'Light',
  dark: 'Dark',
  lynn: 'Lynn',
};

/**
 * The three-way light / dark / lynn switch, modeled on the plugin's own
 * `role="radiogroup"` theme toggle and built on `Tabs` so it inherits the
 * segmented-control styling rather than restating it.
 *
 * Changing the mode plays the plugin's own reveal: a circle grows out of the
 * segment you clicked until it covers the viewport, the tokens swap behind
 * it, and it fades off onto the new theme. The overlay it sweeps with is
 * appended to `document.body`, not rendered here - the whole page has to
 * wipe, including chrome portalled outside `ThemeProvider`'s own wrapper
 * div. See `themeWipe.ts` for the mechanism.
 *
 * Requires a `ThemeProvider` above it - without one there is no mode to
 * change, and the control renders inert on `lynn`.
 *
 * Usage: drop it in the `cta` slot of `Nav`, or in a page's own header, and
 * pass nothing else - it reads and writes the theme itself, so there is no
 * value or handler to wire. `showLabels={false}` gives the icon-only form;
 * each segment keeps its accessible name either way. Because it is a `Tabs`
 * with `semantics="radiogroup"`, arrow keys walk the three modes - and the
 * wipe then starts from the control's own center, since no one segment was
 * clicked. `animated={false}` drops the wipe for a toggle that only themes
 * an embedded preview.
 *
 * Don't: don't render it outside a `ThemeProvider` - `useLynnTheme`'s context
 * default reports `lynn` and drops every write, so the toggle looks
 * operational and changes nothing. And don't mount two of them expecting
 * independent scopes; both drive the same single provider, and the wipe is
 * document-level, so whichever one you click sweeps the same single page.
 */
export function ThemeToggle(props: ThemeToggleProps) {
  const {
    showLabels = true,
    variant = 'pill',
    tone = 'blue',
    ariaLabel = 'Theme',
    animated = true,
    className,
    style,
  } = props;

  const { theme, setTheme } = useLynnTheme();

  const options: TabOption[] = (['light', 'dark', 'lynn'] as LynnTheme[]).map(
    (mode) => ({
      value: mode,
      label: showLabels ? LABELS[mode] : undefined,
      icon:
        mode === 'light' ? (
          <IconSun />
        ) : mode === 'dark' ? (
          <IconMoon />
        ) : (
          <IconNiceSmile />
        ),
      ariaLabel: LABELS[mode],
    })
  );

  const classes = ['lynn-theme-toggle', className].filter(Boolean).join(' ');

  return (
    <Tabs
      options={options}
      value={theme}
      onChange={(value, origin) => {
        const next = value as LynnTheme;
        // Re-picking the active mode is not a change, and sweeping the
        // screen to reveal the theme already showing reads as a glitch.
        if (next === theme) return;
        if (!animated) {
          setTheme(next);
          return;
        }
        // `setTheme` is handed over rather than called: the wipe decides
        // *when* the tokens flip, which is the whole trick - under a circle
        // that already covers the viewport, so the "before" state is on
        // screen for the entire sweep.
        runThemeWipe({ theme: next, origin, apply: () => setTheme(next) });
      }}
      variant={variant}
      tone={tone}
      semantics="radiogroup"
      ariaLabel={ariaLabel}
      className={classes}
      style={style}
    />
  );
}
