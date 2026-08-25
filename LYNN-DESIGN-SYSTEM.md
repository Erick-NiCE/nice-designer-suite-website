# Lynn — Design System Reference

Lynn is the name for **NiCE Designer Suite's own visual identity** — the dark,
gradient-driven, motion-rich language used across this product's website,
documentation, and app chrome. It is documented here, deliberately, in the
same token-shaped format used for SOL and Lyra in `src/tokens.ts` (color /
typography / spacing / radius), plus one category neither of those systems
has: **motion**.

Lynn is not one of the systems the Suite audits or converts *other* work
against — SOL and Lyra still are, and remain the only values accepted by the
`system: 'sol' | 'lyra'` field across `types.ts`, `tokens.ts`, and `code.ts`.
Lynn is the identity of the tool itself. (A "beta toggle" that lets Lynn be
selected as a real third audit/convert target is a plausible future — this
doc is written so that work has a ready-made source of truth — but it is not
implemented today.)

Companion files:
- [`DESIGN-SYSTEM.md`](../nice-designer-plugin/DESIGN-SYSTEM.md) (plugin repo
  root) — the full prompt-ready reference, with component HTML/CSS and the
  interactive-polish JS snippets in copy-paste form.
- [`lynn.html`](./lynn.html) (this repo) — a live page with a SOL / Lyra /
  Lynn toggle and a hands-on showcase of every motion effect below.
- `theme.css`, `base.css`, `nice-effects.css`, `nice-effects.js` — the actual
  implementation these tokens describe.

---

## Color tokens

| Token | Value | Role |
|---|---|---|
| `lynn/color/bg` | `#21212B` | Page background |
| `lynn/color/surface` | `#2a2a36` | Raised surface, sidebars, doc rail |
| `lynn/color/card` | `#2f2f3d` | Cards, panels |
| `lynn/color/border` | `rgba(255,255,255,0.07)` | Default border |
| `lynn/color/border-hover` | `rgba(255,255,255,0.13)` | Hovered border |
| `lynn/color/border-glow` | `rgba(54,148,252,0.35)` | Focus / active border |
| `lynn/color/text` | `#ffffff` | Primary text |
| `lynn/color/text-secondary` | `rgba(255,255,255,0.58)` | Body / secondary text |
| `lynn/color/text-muted` | `rgba(255,255,255,0.30)` | Placeholder / metadata |
| `lynn/color/accent/blue` | `#3694FC` | Primary action, Figma target |
| `lynn/color/accent/electric-blue` | `#025AFB` | Deep blue gradient stop |
| `lynn/color/accent/indigo` | `#6100FF` | Gradient accent, conversion |
| `lynn/color/accent/emerald` | `#00E2A0` | Chrome target, success, CTAs |
| `lynn/color/accent/teal` | `#36EAD0` | Spec Mode, secondary actions |
| `lynn/color/accent/coral` | `#FF5B8A` | QA, warnings, alerts |
| `lynn/color/accent/lynn` | `#B98FFF` | Signature accent — Superpowers / skills badge, and the Lynn brand mark itself |

Rule: text opacity is always `rgba(255,255,255,N)`, never a gray hex like
`#888`. Never invent a 7th accent — reuse one of the six above.

## Typography tokens

Font: **Be Vietnam Pro** (weights 300–900), imported from Google Fonts.

| Token | Size | Weight | Letter-spacing | Category |
|---|---|---|---|---|
| `lynn/type/hero-title` | `clamp(52px, 8vw, 100px)` | 900 | `-2px` | display |
| `lynn/type/section-title` | `clamp(32px, 5vw, 56px)` | 800 | `-1px` | heading |
| `lynn/type/card-title` | `15–18px` | 700 | `-0.2px` | heading |
| `lynn/type/body` | `13–15px` | 400–500 | normal | body (line-height 1.65–1.7) |
| `lynn/type/section-label` | `10–12px` | 700 | `2–3px`, uppercase | label |
| `lynn/type/nav-link` | `13–14px` | 500 | normal | label |
| `lynn/type/metadata` | `11–12px` | 500–600 | normal | label |
| `lynn/type/code` | `11–13px` | 400 | normal | code (`SF Mono`, `Fira Code`) |

Rule: every heading is weight 700+; nothing lighter is ever used for a
heading. No em dashes anywhere in copy — hyphens or colons instead.

## Spacing tokens

| Token | Value |
|---|---|
| `lynn/spacing/none` | 0 |
| `lynn/spacing/xs` | 4 |
| `lynn/spacing/sm` | 8 |
| `lynn/spacing/md` | 12 |
| `lynn/spacing/lg` | 16 |
| `lynn/spacing/xl` | 24 |
| `lynn/spacing/2xl` | 32 |
| `lynn/spacing/3xl` | 48 |
| `lynn/spacing/4xl` | 64 |
| `lynn/spacing/5xl` | 80 |
| `lynn/spacing/6xl` | 96 |

Card padding sits at `lg`–`xl`, grid gaps at `md`–`lg`, section padding at
`4xl`–`5xl` vertical.

## Radius tokens

| Token | Value | Use |
|---|---|---|
| `lynn/radius/none` | 0 | — |
| `lynn/radius/xs` | 4 | Tags |
| `lynn/radius/sm` | 8 | Small controls |
| `lynn/radius/md` | 12 | Cards, buttons |
| `lynn/radius/lg` | 16 | Large cards, hero panels |
| `lynn/radius/xl` | 24 | Glass panels, callouts |
| `lynn/radius/pill` | 100 | Badges, pills, nav-download |

## Motion tokens

This category has no SOL or Lyra equivalent — it's what makes Lynn Lynn.
Every entry below is implemented in `nice-effects.css` / `nice-effects.js`
and demoed live on [`lynn.html`](./lynn.html).

| Token | What it does | Implementation |
|---|---|---|
| `lynn/motion/gradient-shift` | Slow diagonal drift across a multi-stop hero gradient, 13s ease infinite | `.nice-gradient-animated`, `@keyframes gradientShift` |
| `lynn/motion/gradient-shift-fast` | Same idea, quicker multi-axis drift, 8s | `.nice-gradient-animated-fast` |
| `lynn/motion/shimmer` | Gradient text-clip sweep, 4s linear infinite, used on one or two key words per heading | `@keyframes shimmer` |
| `lynn/motion/fade-up` | Section/hero entrance: opacity 0→1 + translateY 32px→0 | `@keyframes fadeUp` |
| `lynn/motion/float` | Gentle 6px vertical bob, for icons/badges | `@keyframes float` |
| `lynn/motion/orb` | Large blurred color blobs drifting behind hero content | `@keyframes orb`, `.hero-orb` |
| `lynn/motion/pulse` | Expanding-ring pulse on a live/status dot | `@keyframes pulse` |
| `lynn/motion/scroll-reveal` | translateY(22px)+opacity, `cubic-bezier(0.23,1,0.32,1)`, triggered by IntersectionObserver | `.reveal` / `.reveal.visible` |
| `lynn/motion/cursor-glow` | 480px radial glow that follows the pointer, `mix-blend-mode: screen` | inline glow div, page-level |
| `lynn/motion/card-tilt-spotlight` | 3D tilt (≤7°, perspective 800–900px) + a radial spotlight following the cursor | mousemove handler + `.card::after` |
| `lynn/motion/magnetic-button` | Primary buttons drift 28% toward the cursor, then spring back on leave | mousemove/mouseleave on `.btn-primary` |
| `lynn/motion/plasma-lightning` | Canvas plasma-ball: filaments radiate from a center and bend toward the cursor, with drifting light motes | `NiceEffects.lightning(container, opts)` |
| `lynn/motion/liquid-fill` | Physics-driven particle pool that sloshes and fills a container on hover (Matter.js) | `NiceEffects.liquidFill(container, opts)` |

Easing rule: every transition uses `cubic-bezier(0.23,1,0.32,1)`. Never plain
`linear` or `ease`. Nothing animates on load without a `.reveal` gate —
elements that would otherwise pop in instantly always fade/slide in instead.
`prefers-reduced-motion: reduce` disables all of the above.

## Component patterns

Condensed here; full HTML+CSS for each lives in `DESIGN-SYSTEM.md`.

- **Nav** — 60px sticky, `rgba(33,33,43,0.92)` + `blur(16px)`, auto-hides on
  scroll-down, reappears on scroll-up; a `doc-rail` (left, 220px) provides
  per-page section links, generated from the `DOC_PAGES` array in
  `nice-effects.js` — that array is the single source of truth for site nav.
- **Hero** — full-viewport, animated gradient background + 3 drifting orbs +
  a shimmer-clipped headline word.
- **Card** — `lynn/color/card` surface, 1px border, `lynn/radius/lg`,
  hover lifts 1px with a soft shadow; optional 2px gradient top strip.
- **Buttons** — primary (solid `blue`, glow shadow, magnetic), secondary
  (translucent fill), ghost (text + expanding icon gap).
- **Badges/pills** — all-caps or sentence-case, `lynn/radius/pill`,
  tinted background at ~12–15% opacity of the accent color. Superpowers
  features are always badged with ⚡ in `lynn` (formerly called lyra-purple).
- **Footer** — three-column link grid under the top-level logo.

## Comparison at a glance

| | SOL | Lyra | Lynn |
|---|---|---|---|
| Font | Open Sans | Inter | Be Vietnam Pro |
| Theme | Light, enterprise | Light, enterprise | Dark, marketing/motion |
| Primary color | `#007AB8` | `#166CCA` | `#3694FC` |
| Radius scale | 0–20, pill 9999 | 0–16, round 999 | 0–24, pill 100 |
| Motion | None defined | None defined | Full library (this doc) |
| What it's for | Legacy interface layer being migrated away from | Current product design system — what the Suite converts *to* | This product's own identity — not an audit target |

See [`lynn.html`](./lynn.html) for a live, interactive version of this
table — toggle between the three systems and watch a sample card, heading,
and button re-skin in place.

## Do / Don't

| Do | Don't |
|---|---|
| Use `rgba(255,255,255,N)` for text opacity | Use gray hex values like `#888` |
| Use the six named accent colors | Invent a new accent color |
| Gate every card/section with `.reveal` | Animate things that pop in instantly |
| Use `cubic-bezier(0.23,1,0.32,1)` for transitions | Use `linear` or plain `ease` |
| Badge Superpowers features with ⚡ in `lynn` (formerly called lyra-purple) | Describe an MCP-only feature without the badge |
| Keep every heading at weight 700+ | Use a heading weight below 700 |
| Write section labels ALL-CAPS with letter-spacing | Skip the label → heading hierarchy |

## Status

Reference documentation + a live demo page only, as of 2026-08-25. No
changes were made to `types.ts`, `tokens.ts`, or `code.ts` — `'sol' | 'lyra'`
remains the only accepted `system` value across the plugin's ~30 message
types. Wiring Lynn in as a real third audit/convert target is a separate,
larger follow-up.
