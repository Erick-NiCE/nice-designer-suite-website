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

function tablerProps(size = 16, className?: string, style?: SVGProps<SVGSVGElement>['style']) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    style,
    'aria-hidden': true as const,
  };
}

/** Tabler `lock` - used by `AccessGate`'s default lock tile. */
export function IconLock(props: IconProps) {
  return (
    <svg {...tablerProps(props.size, props.className, props.style)}>
      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6" />
      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
    </svg>
  );
}

/** Tabler `bolt` - the Superpowers/MCP-only badge convention. */
export function IconBolt(props: IconProps) {
  return (
    <svg {...tablerProps(props.size, props.className, props.style)}>
      <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
    </svg>
  );
}

/** Tabler `sparkles` - `Sparkle`'s default glyph. */
export function IconSparkles(props: IconProps) {
  return (
    <svg {...tablerProps(props.size, props.className, props.style)}>
      <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" />
    </svg>
  );
}

/** Tabler `bulb` - the info/tip callout convention. */
export function IconBulb(props: IconProps) {
  return (
    <svg {...tablerProps(props.size, props.className, props.style)}>
      <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
      <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
      <path d="M9.7 17l4.6 0" />
    </svg>
  );
}

/** Tabler `check`. */
export function IconCheck(props: IconProps) {
  return (
    <svg {...tablerProps(props.size, props.className, props.style)}>
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}

/** Tabler `arrow-right` - the ghost `Button`'s "continue" convention. */
export function IconArrowRight(props: IconProps) {
  return (
    <svg {...tablerProps(props.size, props.className, props.style)}>
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  );
}

/** Tabler `chevron-up` - `DataTable`'s ascending-sort indicator. */
export function IconChevronUp(props: IconProps) {
  return (
    <svg {...tablerProps(props.size, props.className, props.style)}>
      <path d="M6 15l6 -6l6 6" />
    </svg>
  );
}

/** Tabler `chevron-down` - `DataTable`'s descending-sort indicator. */
export function IconChevronDown(props: IconProps) {
  return (
    <svg {...tablerProps(props.size, props.className, props.style)}>
      <path d="M6 9l6 6l6 -6" />
    </svg>
  );
}

/** Tabler `arrows-sort` - `DataTable`'s unsorted-column indicator. */
export function IconArrowsSort(props: IconProps) {
  return (
    <svg {...tablerProps(props.size, props.className, props.style)}>
      <path d="M3 9l4 -4l4 4m-4 -4v14" />
      <path d="M21 15l-4 4l-4 -4m4 4v-14" />
    </svg>
  );
}

/** Tabler `eye` - `TextField`'s "reveal the password" toggle. */
export function IconEye(props: IconProps) {
  return (
    <svg {...tablerProps(props.size, props.className, props.style)}>
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
    </svg>
  );
}

/** Tabler `eye-off` - `TextField`'s "hide the password again" toggle. */
export function IconEyeOff(props: IconProps) {
  return (
    <svg {...tablerProps(props.size, props.className, props.style)}>
      <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
      <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
      <path d="M3 3l18 18" />
    </svg>
  );
}

/**
 * Ported verbatim from `nice-designer-plugin/src/ui/icons.tsx`'s
 * `IconClipboard` (20x20, per-element stroke-width) - used by `CopyButton`.
 */
export function IconClipboard(props: IconProps) {
  const size = props.size ?? 16;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      style={props.style}
      aria-hidden="true"
    >
      <rect x="4" y="3.5" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <rect x="7" y="2" width="6" height="3" rx="0.8" stroke="currentColor" strokeWidth={1.5} fill="none" />
      <line x1="7" y1="9" x2="13" y2="9" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
      <line x1="7" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
      <line x1="7" y1="15" x2="11" y2="15" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" />
    </svg>
  );
}

/** `ThemeToggle`'s `light` segment. */
export function IconSun(props: IconProps) {
  const size = props.size ?? 14;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={props.className} style={props.style} aria-hidden="true">
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth={2} />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** `ThemeToggle`'s `dark` segment. */
export function IconMoon(props: IconProps) {
  const size = props.size ?? 14;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={props.className} style={props.style} aria-hidden="true">
      <path
        d="M20 14.4A8.5 8.5 0 1 1 9.6 4a6.8 6.8 0 0 0 10.4 10.4Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Ported verbatim from `nice-designer-plugin/src/ui/icons.tsx`'s
 * `IconNiceSmile` (80x80, fill-based) - the suite's own mark, used by
 * `ThemeToggle`'s `lynn` segment (matching the plugin's own theme toggle,
 * where this exact icon marks its equivalent "site" mode).
 */
export function IconNiceSmile(props: IconProps) {
  const size = props.size ?? 14;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      style={props.style}
      aria-hidden="true"
    >
      <path
        d="M67.6895 24.8975C68.0396 24.8975 68.3206 25.1594 68.3545 25.4961C68.3702 25.5539 68.3815 25.6138 68.3809 25.6768C68.0209 48.9153 49.0635 67.7523 25.6768 68.1084C25.3274 68.112 25.0395 67.8455 25.0059 67.5049C24.991 67.4496 24.9814 67.3919 24.9814 67.332V57.1504C24.9817 56.7867 25.2788 56.4932 25.6465 56.4854C42.6552 56.137 56.4241 42.4542 56.7764 25.5547C56.7842 25.187 57.0776 24.8937 57.4453 24.8936L67.6895 24.8975ZM17.9922 11C21.8539 11.0002 24.9844 14.1109 24.9844 17.9453C24.9844 21.7798 21.8539 24.8904 17.9922 24.8906C14.1303 24.8906 11 21.7799 11 17.9453C11 14.1107 14.1303 11 17.9922 11ZM40.292 11C44.1539 11 47.2842 14.1107 47.2842 17.9453C47.2842 21.7799 44.1539 24.8906 40.292 24.8906C36.4302 24.8905 33.2998 21.7798 33.2998 17.9453C33.2998 14.1108 36.4302 11.0001 40.292 11Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** The suite's own four-point spark mark - a decorative sparkle glyph. */
export function IconSpark(props: IconProps) {
  const size = props.size ?? 14;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={props.className} style={props.style} aria-hidden="true">
      <path
        d="M12 2.8c.9 4.6 1.8 5.5 6.4 6.4-4.6.9-5.5 1.8-6.4 6.4-.9-4.6-1.8-5.5-6.4-6.4 4.6-.9 5.5-1.8 6.4-6.4Z"
        fill="currentColor"
      />
      <path
        d="M18.4 15.2c.4 2.1.8 2.5 2.9 2.9-2.1.4-2.5.8-2.9 2.9-.4-2.1-.8-2.5-2.9-2.9 2.1-.4 2.5-.8 2.9-2.9Z"
        fill="currentColor"
      />
    </svg>
  );
}
