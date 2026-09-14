/*!
 * A small, self-contained icon set - no emoji anywhere in lynn-ui, per the
 * house rule. `IconClipboard` is ported verbatim from the sibling
 * `nice-designer-plugin` repo's own icon file (`src/ui/icons.tsx`, 20x20,
 * stroke-width baked per-path). Everything else here is real Tabler Icons
 * source (outline set, 24x24 viewBox, `stroke="currentColor"`,
 * `stroke-width="2"`, round caps) - that repo's icon set turned out to be a
 * small hand-drawn one, not actually Tabler-based, and was missing every
 * other icon this package needs (lock, bolt, sparkles, bulb, check, arrows,
 * chevrons), so those are sourced from the real thing instead of guessed.
 *
 * Usage: every icon takes only `size` (px, both axes) and paints with
 * `stroke="currentColor"` / `fill="currentColor"`, so tint one by setting
 * `color` on whatever wraps it - a `Badge tone`, a `Button` variant, a
 * `--lynn-color-*` on a parent - and pass it into the `icon` slot of `Button`,
 * `Badge`, `Alert`, `Tabs` or `TabPanels` rather than positioning it yourself.
 * The house rule is icons, never emoji.
 *
 * Don't: don't pass a large `size` and expect the line weight to scale with it
 * - `stroke-width` is baked per icon (2 on the Tabler set, 1.3-1.5 on
 * `IconClipboard`), so a 48px icon renders hairline-thin next to a 16px one.
 * And don't let an icon be a control's only label: every icon here is
 * `aria-hidden`, so an icon-only `Button`, `Tabs` segment or `TabPanels` tab
 * still needs its own `aria-label` / `ariaLabel`.
 */
import type { SVGProps } from 'react';
export interface IconProps {
    /** Icon box size in px (both width and height). Default 16. */
    size?: number;
    className?: string;
    style?: SVGProps<SVGSVGElement>['style'];
}
/** Tabler `lock` - used by `AccessGate`'s default lock tile. */
export declare function IconLock(props: IconProps): import("react").JSX.Element;
/** Tabler `bolt` - the Superpowers/MCP-only badge convention. */
export declare function IconBolt(props: IconProps): import("react").JSX.Element;
/** Tabler `sparkles` - `Sparkle`'s default glyph. */
export declare function IconSparkles(props: IconProps): import("react").JSX.Element;
/** Tabler `bulb` - the info/tip callout convention. */
export declare function IconBulb(props: IconProps): import("react").JSX.Element;
/** Tabler `check`. */
export declare function IconCheck(props: IconProps): import("react").JSX.Element;
/** Tabler `arrow-right` - the ghost `Button`'s "continue" convention. */
export declare function IconArrowRight(props: IconProps): import("react").JSX.Element;
/** Tabler `chevron-up` - `DataTable`'s ascending-sort indicator. */
export declare function IconChevronUp(props: IconProps): import("react").JSX.Element;
/** Tabler `chevron-down` - `DataTable`'s descending-sort indicator. */
export declare function IconChevronDown(props: IconProps): import("react").JSX.Element;
/** Tabler `arrows-sort` - `DataTable`'s unsorted-column indicator. */
export declare function IconArrowsSort(props: IconProps): import("react").JSX.Element;
/** Tabler `eye` - `TextField`'s "reveal the password" toggle. */
export declare function IconEye(props: IconProps): import("react").JSX.Element;
/** Tabler `eye-off` - `TextField`'s "hide the password again" toggle. */
export declare function IconEyeOff(props: IconProps): import("react").JSX.Element;
/**
 * Ported verbatim from `nice-designer-plugin/src/ui/icons.tsx`'s
 * `IconClipboard` (20x20, per-element stroke-width) - used by `CopyButton`.
 */
export declare function IconClipboard(props: IconProps): import("react").JSX.Element;
/** `ThemeToggle`'s `light` segment. */
export declare function IconSun(props: IconProps): import("react").JSX.Element;
/** `ThemeToggle`'s `dark` segment. */
export declare function IconMoon(props: IconProps): import("react").JSX.Element;
/**
 * Ported verbatim from `nice-designer-plugin/src/ui/icons.tsx`'s
 * `IconNiceSmile` (80x80, fill-based) - the suite's own mark, used by
 * `ThemeToggle`'s `lynn` segment (matching the plugin's own theme toggle,
 * where this exact icon marks its equivalent "site" mode).
 */
export declare function IconNiceSmile(props: IconProps): import("react").JSX.Element;
/** The suite's own four-point spark mark - a decorative sparkle glyph. */
export declare function IconSpark(props: IconProps): import("react").JSX.Element;
