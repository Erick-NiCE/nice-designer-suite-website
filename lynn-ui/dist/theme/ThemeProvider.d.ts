import type { CSSProperties, ReactNode } from 'react';
/**
 * The three modes, matching the plugin's own `light` / `dark` / `site` trio -
 * renamed here because in this package the third one *is* Lynn.
 */
export type LynnTheme = 'lynn' | 'light' | 'dark';
export interface LynnThemeContextValue {
    theme: LynnTheme;
    setTheme: (theme: LynnTheme) => void;
}
export interface ThemeProviderProps {
    children: ReactNode;
    /**
     * Mode used when nothing is stored yet. Defaults to `lynn`.
     *
     * There is deliberately no `prefers-color-scheme` detection: Lynn's own
     * identity is the dark blue one, and the plugin this ports makes exactly
     * the same choice.
     */
    defaultTheme?: LynnTheme;
    className?: string;
    style?: CSSProperties;
}
/**
 * The recommended root wrapper: renders the `.lynn-root` element every
 * component's CSS expects and stamps `data-lynn-theme` onto it, which is what
 * re-points the `--lynn-color-*` neutrals at a different mode.
 *
 * The selected mode persists to `localStorage` under `lynn-ui-theme`.
 *
 * Usage: mount exactly one, as high in the tree as the stylesheet import -
 * every component's CSS resolves its `--lynn-color-*` neutrals off the
 * `.lynn-root` element this renders, so a subtree mounted outside it falls back
 * to whatever the ambient page defines. `defaultTheme` is a first-run value
 * only: once anything has written `lynn-ui-theme`, the stored mode wins on
 * every later mount.
 *
 * Don't: don't nest a second `ThemeProvider` to theme one subtree differently -
 * both write the same `lynn-ui-theme` key, so the inner one's choice leaks out
 * to the whole app on the next reload. And don't ship `defaultTheme` as a way
 * to force a mode back; it cannot override a stored value, and there is no
 * `prefers-color-scheme` fallback to lean on either.
 */
export declare function ThemeProvider(props: ThemeProviderProps): import("react").JSX.Element;
/**
 * Reads and sets the active theme. Safe to call outside a `ThemeProvider`.
 *
 * Usage: the one legitimate camelCase export alongside `useToast` - reading the
 * active mode has no component-prop equivalent. Use it to pick a
 * mode-dependent asset (a logo, an illustration), not to branch component
 * styling; the tokens already re-point themselves.
 *
 * Don't: don't treat a successful `setTheme` call as proof the mode changed -
 * outside a `ThemeProvider` the context default reports a fixed `lynn` and
 * silently swallows writes, so a control built on this renders live and does
 * nothing.
 */
export declare function useLynnTheme(): LynnThemeContextValue;
