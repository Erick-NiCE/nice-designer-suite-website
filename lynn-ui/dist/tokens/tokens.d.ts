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
export type AccentColor = 'blue' | 'electric-blue' | 'indigo' | 'emerald' | 'teal' | 'coral' | 'lynn';
export declare const designTokens: {
    readonly color: {
        readonly bg: "#21212B";
        readonly surface: "#2a2a36";
        readonly card: "#2f2f3d";
        readonly border: "rgba(255,255,255,0.08)";
        readonly borderHover: "rgba(255,255,255,0.13)";
        readonly borderGlow: "rgba(54,148,252,0.35)";
        readonly text: "#ffffff";
        readonly textSecondary: "rgba(255,255,255,0.58)";
        readonly textMuted: "rgba(255,255,255,0.30)";
        readonly accent: {
            readonly blue: "#3694FC";
            readonly 'electric-blue': "#025AFB";
            readonly indigo: "#6100FF";
            readonly emerald: "#00E2A0";
            readonly teal: "#36EAD0";
            readonly coral: "#FF5B8A";
            readonly lynn: "#B98FFF";
        };
    };
    readonly typography: {
        readonly fontFamily: "'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
        readonly fontFamilyMono: "'SF Mono', 'Fira Code', ui-monospace, monospace";
        readonly size: {
            readonly heroTitle: "clamp(52px, 8vw, 100px)";
            readonly sectionTitle: "clamp(32px, 5vw, 56px)";
            readonly cardTitle: "17px";
            readonly body: "14px";
            readonly sectionLabel: "12px";
            readonly navLink: "14px";
            readonly metadata: "12px";
            readonly code: "12px";
        };
        readonly weight: {
            readonly regular: 400;
            readonly medium: 500;
            readonly semibold: 600;
            readonly bold: 700;
            readonly extrabold: 800;
            readonly black: 900;
        };
        readonly letterSpacing: {
            readonly heroTitle: "-2px";
            readonly sectionTitle: "-1px";
            readonly cardTitle: "-0.2px";
            readonly sectionLabel: "2px";
        };
        readonly lineHeight: {
            readonly body: 1.65;
            readonly tight: 1;
        };
    };
    readonly spacing: {
        readonly none: 0;
        readonly xs: 4;
        readonly sm: 8;
        readonly md: 12;
        readonly lg: 16;
        readonly xl: 24;
        readonly '2xl': 32;
        readonly '3xl': 48;
        readonly '4xl': 64;
        readonly '5xl': 80;
        readonly '6xl': 96;
    };
    readonly radius: {
        readonly none: 0;
        readonly xs: 4;
        readonly sm: 8;
        readonly md: 12;
        readonly lg: 16;
        readonly xl: 24;
        readonly pill: 100;
    };
    readonly shadow: {
        /**
         * The neumorphic extruded pair. Mirrors the `lynn` mode's values only -
         * `light` and `dark` redefine both in `tokens.css`, so read the custom
         * property, not this string, when the surface has to follow the active
         * theme.
         */
        readonly raised: "6px 6px 16px rgba(20,20,27,0.72), -6px -6px 16px rgba(66,66,85,0.34)";
        readonly pressed: "inset 6px 6px 14px rgba(20,20,27,0.72), inset -6px -6px 14px rgba(66,66,85,0.34)";
    };
    readonly motion: {
        /** Every interaction transition in Lynn uses this easing curve. */
        readonly ease: "cubic-bezier(0.23,1,0.32,1)";
    };
    readonly layout: {
        readonly navHeight: 60;
    };
};
export type DesignTokens = typeof designTokens;
