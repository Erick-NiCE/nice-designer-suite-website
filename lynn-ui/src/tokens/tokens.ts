/**
 * A 1:1 TypeScript mirror of `tokens.css`.
 *
 * Same provenance and same resolutions as the stylesheet: `surface` is the
 * documented `#2a2a36` (not theme.css's global alias to `--card`), `border`
 * is theme.css's real `rgba(255,255,255,0.08)` (the doc's `0.07` is stale),
 * and theme.css's undocumented `--amber: #f59e0b` is deliberately absent -
 * Lynn has exactly seven accents.
 *
 * Exported as `designTokens` for programmatic use (preview authoring,
 * canvas/inline styles, docs generation). Not a component, so it is skipped
 * by PascalCase component discovery.
 *
 * Usage: reach for this object only where CSS cannot reach - a canvas fill, a
 * `Lightning`/`LiquidFill` `color`, a `FeatureCard.iconGradient` stop, a
 * generated swatch. Anywhere a stylesheet can see the value, use the
 * `--lynn-*` custom property instead, because those are what the three theme
 * modes re-point.
 *
 * Don't: don't read `designTokens.color.bg` / `.surface` / `.card` / `.text*`
 * and paint with them - those are the `lynn`-mode literals frozen at build
 * time, so a component styled from them stays dark in `light` mode while
 * everything around it re-skins. The seven `color.accent` entries, the spacing
 * and radius scales and the easing curve are mode-invariant and safe to read.
 * And don't add an eighth accent here to get a new color - seven is the whole
 * system.
 */

/** The seven - and only seven - Lynn accent colors. */
export type AccentColor =
  | 'blue'
  | 'electric-blue'
  | 'indigo'
  | 'emerald'
  | 'teal'
  | 'coral'
  | 'lynn';

export const designTokens = {
  color: {
    bg: '#21212B',
    surface: '#2a2a36',
    card: '#2f2f3d',
    border: 'rgba(255,255,255,0.08)',
    borderHover: 'rgba(255,255,255,0.13)',
    borderGlow: 'rgba(54,148,252,0.35)',
    text: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.58)',
    textMuted: 'rgba(255,255,255,0.30)',
    accent: {
      blue: '#3694FC',
      'electric-blue': '#025AFB',
      indigo: '#6100FF',
      emerald: '#00E2A0',
      teal: '#36EAD0',
      coral: '#FF5B8A',
      lynn: '#B98FFF',
    },
  },
  typography: {
    fontFamily:
      "'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontFamilyMono: "'SF Mono', 'Fira Code', ui-monospace, monospace",
    size: {
      heroTitle: 'clamp(52px, 8vw, 100px)',
      sectionTitle: 'clamp(32px, 5vw, 56px)',
      cardTitle: '17px',
      body: '14px',
      sectionLabel: '12px',
      navLink: '14px',
      metadata: '12px',
      code: '12px',
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    letterSpacing: {
      heroTitle: '-2px',
      sectionTitle: '-1px',
      cardTitle: '-0.2px',
      sectionLabel: '2px',
    },
    lineHeight: {
      body: 1.65,
      tight: 1,
    },
  },
  spacing: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    '2xl': 32,
    '3xl': 48,
    '4xl': 64,
    '5xl': 80,
    '6xl': 96,
  },
  radius: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    pill: 100,
  },
  shadow: {
    /**
     * The neumorphic extruded pair. Mirrors the `lynn` mode's values only -
     * `light` and `dark` redefine both in `tokens.css`, so read the custom
     * property, not this string, when the surface has to follow the active
     * theme.
     */
    raised:
      '6px 6px 16px rgba(20,20,27,0.72), -6px -6px 16px rgba(66,66,85,0.34)',
    pressed:
      'inset 6px 6px 14px rgba(20,20,27,0.72), inset -6px -6px 14px rgba(66,66,85,0.34)',
  },
  motion: {
    /** Every interaction transition in Lynn uses this easing curve. */
    ease: 'cubic-bezier(0.23,1,0.32,1)',
  },
  layout: {
    navHeight: 60,
  },
} as const;

export type DesignTokens = typeof designTokens;
