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
/** Tabler `accessible`. */
export declare function IconAccessible(props: IconProps): import("react").JSX.Element;
/** Tabler `adjustments`. */
export declare function IconAdjustments(props: IconProps): import("react").JSX.Element;
/** Tabler `arrow-back-up`. */
export declare function IconArrowBackUp(props: IconProps): import("react").JSX.Element;
/** Tabler `arrows-exchange`. */
export declare function IconArrowsExchange(props: IconProps): import("react").JSX.Element;
/** Tabler `brand-chrome`. */
export declare function IconBrandChrome(props: IconProps): import("react").JSX.Element;
/** Tabler `brand-figma`. */
export declare function IconBrandFigma(props: IconProps): import("react").JSX.Element;
/** Tabler `brush`. */
export declare function IconBrush(props: IconProps): import("react").JSX.Element;
/** Tabler `checklist`. */
export declare function IconChecklist(props: IconProps): import("react").JSX.Element;
/** Tabler `file-code`. */
export declare function IconFileCode(props: IconProps): import("react").JSX.Element;
/** Tabler `git-compare`. */
export declare function IconGitCompare(props: IconProps): import("react").JSX.Element;
/** Tabler `layers-intersect`. */
export declare function IconLayersIntersect(props: IconProps): import("react").JSX.Element;
/** Tabler `layout-board`. */
export declare function IconLayoutBoard(props: IconProps): import("react").JSX.Element;
/** Tabler `link`. */
export declare function IconLink(props: IconProps): import("react").JSX.Element;
/** Tabler `message-circle`. */
export declare function IconMessageCircle(props: IconProps): import("react").JSX.Element;
/** Tabler `notes`. */
export declare function IconNotes(props: IconProps): import("react").JSX.Element;
/** Tabler `package-export`. */
export declare function IconPackageExport(props: IconProps): import("react").JSX.Element;
/** Tabler `palette`. */
export declare function IconPalette(props: IconProps): import("react").JSX.Element;
/** Tabler `rocket`. */
export declare function IconRocket(props: IconProps): import("react").JSX.Element;
/** Tabler `ruler-measure`. */
export declare function IconRulerMeasure(props: IconProps): import("react").JSX.Element;
/** Tabler `scan`. */
export declare function IconScan(props: IconProps): import("react").JSX.Element;
/** Tabler `tags`. */
export declare function IconTags(props: IconProps): import("react").JSX.Element;
/** Tabler `target`. */
export declare function IconTarget(props: IconProps): import("react").JSX.Element;
/** Tabler `users-group`. */
export declare function IconUsersGroup(props: IconProps): import("react").JSX.Element;
/** Tabler `users`. */
export declare function IconUsers(props: IconProps): import("react").JSX.Element;
/** Tabler `wand`. */
export declare function IconWand(props: IconProps): import("react").JSX.Element;
/** Tabler `world`. */
export declare function IconWorld(props: IconProps): import("react").JSX.Element;
/** The suite's own four-point spark mark - a decorative sparkle glyph. */
export declare function IconSpark(props: IconProps): import("react").JSX.Element;
