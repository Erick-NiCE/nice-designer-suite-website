# Lynn - Design System Reference

Lynn is the name for **NiCE Designer Suite's own visual identity** - the dark,
gradient-driven, motion-rich language used across this product's website,
documentation, and app chrome. It is documented here, deliberately, in the
same token-shaped format used for SOL and Lyra in `src/tokens.ts` (color /
typography / spacing / radius), plus one category neither of those systems
has: **motion**.

Lynn is not one of the systems the Suite audits or converts *other* work
against - SOL and Lyra still are, and remain the only values accepted by the
`system: 'sol' | 'lyra'` field across `types.ts`, `tokens.ts`, and `code.ts`.
Lynn is the identity of the tool itself. (A "beta toggle" that lets Lynn be
selected as a real third audit/convert target is a plausible future - this
doc is written so that work has a ready-made source of truth - but it is not
implemented today.)

Companion files:
- [`DESIGN-SYSTEM.md`](../nice-designer-plugin/DESIGN-SYSTEM.md) (plugin repo
  root) - the full prompt-ready reference, with component HTML/CSS and the
  interactive-polish JS snippets in copy-paste form.
- [`lynn.html`](./lynn.html) (this repo) - a live page with a SOL / Lyra /
  Lynn toggle and a hands-on showcase of every motion effect below.
- `theme.css`, `base.css`, `nice-effects.css`, `nice-effects.js` - the actual
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
| `lynn/color/accent/lynn` | `#B98FFF` | Signature accent - Superpowers / skills badge, and the Lynn brand mark itself |

Rule: text opacity is always `rgba(255,255,255,N)`, never a gray hex like
`#888`. Never invent a 7th accent - reuse one of the six above.

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
heading. No em dashes anywhere in copy - hyphens or colons instead.

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
| `lynn/radius/none` | 0 | - |
| `lynn/radius/xs` | 4 | Tags |
| `lynn/radius/sm` | 8 | Small controls |
| `lynn/radius/md` | 12 | Cards, buttons |
| `lynn/radius/lg` | 16 | Large cards, hero panels |
| `lynn/radius/xl` | 24 | Glass panels, callouts |
| `lynn/radius/pill` | 100 | Badges, pills, nav-download |

## Motion tokens

This category has no SOL or Lyra equivalent - it's what makes Lynn Lynn.
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
`linear` or `ease`. Nothing animates on load without a `.reveal` gate -
elements that would otherwise pop in instantly always fade/slide in instead.
`prefers-reduced-motion: reduce` disables all of the above.

## Component patterns

Condensed here; full HTML+CSS for each lives in `DESIGN-SYSTEM.md`.

- **Nav** - 60px sticky, `rgba(33,33,43,0.92)` + `blur(16px)`, auto-hides on
  scroll-down, reappears on scroll-up; a `doc-rail` (left, 220px) provides
  per-page section links, generated from the `DOC_PAGES` array in
  `nice-effects.js` - that array is the single source of truth for site nav.
- **Hero** - full-viewport, animated gradient background + 3 drifting orbs +
  a shimmer-clipped headline word.
- **Card** - `lynn/color/card` surface, 1px border, `lynn/radius/lg`,
  hover lifts 1px with a soft shadow; optional 2px gradient top strip.
- **Buttons** - primary (solid `blue`, glow shadow, magnetic), secondary
  (translucent fill), ghost (text + expanding icon gap).
- **Badges/pills** - all-caps or sentence-case, `lynn/radius/pill`,
  tinted background at ~12–15% opacity of the accent color. Superpowers
  features are always badged with `<IconBolt />` in `lynn` (formerly called lyra-purple).
- **Footer** - three-column link grid under the top-level logo.

## Comparison at a glance

| | SOL | Lyra | Lynn |
|---|---|---|---|
| Font | Open Sans | Inter | Be Vietnam Pro |
| Theme | Light, enterprise | Light, enterprise | Dark, marketing/motion |
| Primary color | `#007AB8` | `#166CCA` | `#3694FC` |
| Radius scale | 0–20, pill 9999 | 0–16, round 999 | 0–24, pill 100 |
| Motion | None defined | None defined | Full library (this doc) |
| What it's for | Legacy interface layer being migrated away from | Current product design system - what the Suite converts *to* | This product's own identity - not an audit target |

See [`lynn.html`](./lynn.html) for a live, interactive version of this
table - toggle between the three systems and watch a sample card, heading,
and button re-skin in place.

## Do / Don't

| Do | Don't |
|---|---|
| Use `rgba(255,255,255,N)` for text opacity | Use gray hex values like `#888` |
| Use the six named accent colors | Invent a new accent color |
| Gate every card/section with `.reveal` | Animate things that pop in instantly |
| Use `cubic-bezier(0.23,1,0.32,1)` for transitions | Use `linear` or plain `ease` |
| Badge Superpowers features with `<IconBolt />` in `lynn` (formerly called lyra-purple) | Describe an MCP-only feature without the badge |
| Keep every heading at weight 700+ | Use a heading weight below 700 |
| Write section labels ALL-CAPS with letter-spacing | Skip the label → heading hierarchy |

## The component library (`lynn-ui`)

The Do/Don't table above predates the component package. Everything the rest
of this document describes as a *pattern* now also exists as a real, typed,
themed React component in [`lynn-ui/`](./lynn-ui/), published as one ESM
bundle plus one stylesheet:

```jsx
import 'lynn-ui/dist/lynn-ui.css';
import { ThemeProvider, ThemeToggle, ToastViewport } from 'lynn-ui';
```

The authoritative export list is [`lynn-ui/src/index.ts`](./lynn-ui/src/index.ts),
and every component carries `Usage:` and `Don't:` notes in its own top-of-file
JSDoc. The tables below are the index: one line each, grouped by the same
categories the live playground uses (`GROUPS` in
`lynn-ui/playground/app.js`), so a conventions header can be generated from
this section rather than re-derived from source.

Live and interactive: [`lynn.html`](./lynn.html) (embedded) and
`lynn-ui/playground/index.html` (standalone). Both surface the same one-line
`usage` / `dont` guidance per component, out of
`lynn-ui/playground/registry.js`.

### Foundations

| Export | What it's for |
|---|---|
| `designTokens` | The token scales as a TS object, for the places CSS cannot reach: a canvas fill, a gradient stop, a generated swatch. Read accents, spacing, radius and easing from it - never the neutrals, which are frozen `lynn`-mode literals. |
| `ThemeProvider` | The required root wrapper. Renders the `.lynn-root` element every component's CSS resolves its neutrals against, stamps `data-lynn-theme`, and persists the mode to `localStorage`. Mount exactly one. |
| `useLynnTheme` | Reads and sets the active mode. Use it to pick a mode-dependent asset, not to branch styling - the tokens already re-point themselves. |
| `ThemeToggle` | The three-way light / dark / lynn switch, built on `Tabs` as a `radiogroup`. Needs a `ThemeProvider` above it or it renders inert. |
| Icon set (15) | `IconLock`, `IconBolt`, `IconSparkles`, `IconBulb`, `IconCheck`, `IconArrowRight`, `IconChevronUp`, `IconChevronDown`, `IconArrowsSort`, `IconClipboard`, `IconEye`, `IconEyeOff`, `IconSun`, `IconMoon`, `IconSpark`. All `currentColor`, all `aria-hidden`, one `size` prop. Icons, never emoji. |

### Actions

| Export | What it's for |
|---|---|
| `Button` | The one clickable primitive: `primary` / `secondary` / `ghost`, optional magnetic drift, a `loading` state, and `href` to render as an anchor. Every control in the system is built on it. |
| `Switch` | A real `role="switch"` boolean, keyboard-operable, with a clickable label that doubles as the accessible name. |
| `Tabs` | The segmented value picker behind every filter row, theme toggle and panel switcher. Controlled, arrow-key navigable, and deliberately ignorant of content. |

### Feedback

| Export | What it's for |
|---|---|
| `Alert` | The tinted callout, one component for the eight hand-rolled copies site-wide. Five variants named by intent (`info`, `success`, `warning`, `danger`, `purple`). Static page content, not a confirmation. |
| `Badge` | Accent-toned pills plus the thirteen real site status pills (roadmap phases, score grades, lifecycle). `status` overrides `tone`. |
| `ToastViewport` / `useToast` | The single fixed bottom toast slot and the module-level `show()` that fills it. One active toast at a time; mount one viewport at the root. |
| `Spinner` | The bordered-ring spinner, three sizes, two ground tones. `Button.loading` and `AccessGate` both embed it. |
| `ProgressBar` | The linear track, determinate or indeterminate, for work whose length you do or do not know. |
| `GaugeRing` | The radial score dial: an animated arc over a track ring on a raised plate. For a number being read, where `ProgressBar` is for progress being watched. |
| `Skeleton` | Shimmering placeholder rows that render immediately, so a slow load reads as working rather than broken. Never an empty state. |
| `Tooltip` | A CSS-only `::after` bubble fed by a data attribute. No portal, no positioning pass, and no escaping an `overflow: hidden` ancestor. |

### Layout

| Export | What it's for |
|---|---|
| `Card` | The base surface: `card` fill, 1px border, `lg` radius, optional 2px accent strip, and the pointer-tracking tilt plus spotlight. `glass` adds the blurred pane, `liquid` the drifting highlight inside it. |
| `FeatureCard` | The rich icon-tile card (gradient tile, why-quote, bullets, tags, status pill) from the-suite / roadmap / index, at two densities. |
| `IconCard` | The plain "icon + title + description" tile behind six near-duplicates, vertical or horizontal. |
| `CtaBanner` | The repeated promo strip: one sentence, one pill CTA, `gradient` or `tinted`. |
| `FeaturePanel` | The large narrative walkthrough panel, with its action row taken as data so every action is a real `Button`. |
| `Carousel` | A one-at-a-time slide row of screenshots under a bottom-weighted glass scrim, drag-to-advance, with only the active card tilting and focusable. (No playground entry yet.) |

### Navigation

| Export | What it's for |
|---|---|
| `Nav` | The 60px sticky bar with one `cta` slot and optional auto-hide on scroll-down. Paints the site's literal dark fill rather than the neutral tokens. |
| `Footer` | The three-column link grid that closes every page, with visually hidden column headings. |
| `DocRail` | The fixed 220px glass sidebar with scroll-warmth highlighting, in `pages` or `sections` mode, collapsible to an edge tab. |
| `AccessGate` | The site-wide login overlay: lock tile, password field, shake-on-reject, and a 420ms fade on unlock. Checks nothing itself. |

### Data

| Export | What it's for |
|---|---|
| `DataTable` | The sortable table, with a three-state header cycle (unsorted → asc → desc → unsorted) and a `renderCell` hook for pills and inline bars. |
| `Legend` | The color-key row, as swatch dots or as the tinted pills being explained. |
| `Avatar` | A round initials disc at the three real sizes, flat or gradient-filled. |
| `Timeline` / `Phase` / `RoadmapItemCard` | The roadmap's vertical phase timeline: a self-drawing connector, per-phase pulsing dots, and item cards with accent stripes, tags, assignee stacks and approval gates. |
| `Stepper` / `StepNumber` | The numbered walkthrough as a real `<ol>`, and the numbered-circle atom it shares with five other list patterns (four sizes, three fills). |
| `ChangelogEntry` | One release on a changelog: expanded with a `LATEST` pill, or a collapsed toggle row over the identical body. |
| `Accordion` / `AccordionItem` | Independently collapsible sections with a header hint, an `actions` slot outside the toggle, and a remembered open state. |

### Forms

| Export | What it's for |
|---|---|
| `SearchInput` | The icon-prefixed filter field, full-width or widening on focus for a nav row. |
| `Dropdown` | The searchable select with swatches, two-line rows and sticky section headers - everything a native `<select>` cannot draw. |
| `TextField` | A single-line field whose label starts as the placeholder and floats on focus or content, over an SVG sine underline that draws itself in. Adds a reveal toggle at `type="password"`. (No playground entry yet.) |

### Motion and effects

Each of these implements one of the motion tokens above, and every one of
them self-disables or falls back to a static frame under
`prefers-reduced-motion: reduce`.

| Export | Motion token | What it's for |
|---|---|---|
| `Hero` | `gradient-shift`, `orb` | The full-viewport page opener: animated gradient, three drifting orbs, radial vignette, and eyebrow / heading / subtitle / actions slots. |
| `GradientBackground` | `gradient-shift`, `gradient-shift-fast` | The brand gradient on its own, drifting at two speeds or held still, as a wrapper or an `inset: 0` backdrop. |
| `Reveal` | `scroll-reveal` | The entrance gate. Lynn's rule is that nothing pops in, so every card and section goes through this; `index` staggers siblings. |
| `ShimmerText` | `shimmer` | The gradient text-clip sweep, on one or two words of a heading. |
| `Float` | `float` | A gentle infinite bob for one small glyph or badge. |
| `PulseDot` | `pulse` | The live-status dot: a solid core with an expanding ring, its loop duration distinguishing two live states. |
| `CursorGlow` | `cursor-glow` | The screen-blended glow trailing the pointer. Page-level singleton. |
| `Lightning` | `plasma-lightning` | The canvas plasma ball: seven filaments radiating from an electrode, bending toward the cursor, inside a rotating conic ring. |
| `LiquidFill` | `liquid-fill` | A matter.js particle pool that splashes, fills and sloshes toward the cursor on hover, through a metaball blur filter. |
| `Sheen` | `sheen` | A diagonal light band sweeping across one surface on a continuous loop. |
| `Sparkle` | `sparkle` | A small glyph that pulses and quarter-rotates, in the signature `lynn` purple. |
| `GlowPulse` | `glow-pulse` | A breathing accent halo around the single element the eye should be pulled to. |

### Code

| Export | What it's for |
|---|---|
| `CodeBlock` | The scrolling code panel with a language chip and a real `CopyButton`. Takes a `string`, so the clipboard gets exactly what is on screen. |
| `InlineCode` | A monospace chip for one identifier inside running prose. |
| `CopyButton` | Writes to the clipboard and reports both the success and the failure path through the toast. |

### Composition

| Export | What it's for |
|---|---|
| `TabPanels` / `TabPanel` | A `Tabs` row wired to sibling panels with the right `tablist` ARIA. Inactive panels stay mounted and hidden, so their scroll and form state survive. |

### Constraints worth knowing before you compose

These are the notes that bite hardest in practice, collected out of the
per-component JSDoc. Every one of them is a real property of the code, not a
style preference.

**Needs a specific parent:**

- Everything needs a `ThemeProvider` above it for its neutrals to resolve, and
  the stylesheet imported once at the app root.
- `ThemeToggle` and `useLynnTheme` are inert without `ThemeProvider` - the
  context default reports a fixed `lynn` and swallows writes.
- `CopyButton`, and therefore `CodeBlock`, report *only* through `useToast()`.
  With no `ToastViewport` mounted, a failed copy is indistinguishable from a
  successful one.
- `TabPanel` reads its active id from `TabPanels` context, which defaults to
  `null` - a stray panel is hidden forever, with no error.
- `Phase` belongs in a `Timeline`, `RoadmapItemCard` in a `Phase`,
  `AccordionItem` in an `Accordion`.

**Mount exactly one:**

`ThemeProvider`, `ToastViewport`, `CursorGlow`, `DocRail`, `Nav`, `Footer`,
`Hero`. The last five are `fixed`, `sticky` or full-viewport, so a second
instance lands on top of the first; `ToastViewport` has a single
module-level slot; `CursorGlow` composites with itself through
`mix-blend-mode: screen`.

**Costs real work per frame:**

- `Lightning` - a `requestAnimationFrame` loop over seven midpoint-displaced
  bolts plus up to 54 shadowed motes, on two canvases. Pauses itself
  off-screen.
- `LiquidFill` - a 60fps matter.js step over 110+ bodies through an SVG blur
  filter. Built lazily on first `mouseenter`, and torn down and rebuilt
  whenever `color`, `opacity` or `count` changes.
- `CursorGlow` - one pointer listener per instance, on every mouse move.
- `Card interactive`, `Carousel` - a pointer-tracking tilt per hovered card.

One `Lightning` or `LiquidFill` per page is the budget.

**Seeded once, not controlled:** `DataTable.defaultSort`,
`ChangelogEntry.defaultOpen`, `AccordionItem.defaultOpen`,
`ThemeProvider.defaultTheme`, `GaugeRing`'s fill-from-empty. Changing any of
them later needs a remount, which is why the playground re-keys a whole
preview on every picker change.

**Props that are silently a no-op without a partner:**

| Prop | Only means anything when |
|---|---|
| `Card.liquid` | `variant="glass"` |
| `FeatureCard.statusVariant`, `RoadmapItemCard.statusVariant` | `status` is also set |
| `Legend`'s `item.description` | `variant="pill"` |
| `ChangelogEntry.defaultOpen` | `isLatest` is **not** set |
| `ProgressBar.value` | `indeterminate` is **not** set |
| `Button.type` | `href` is **not** set |
| `Badge.tone`, `Badge.bordered` | `status` is **not** set |
| `Button.target` / `rel`, `CtaBanner.ctaRel` | `href` / `ctaTarget` is set |

**Decorative, so the meaning has to live elsewhere:** every icon, plus
`StepNumber`, `Sparkle`, `Skeleton` (the whole block), and the `icon` slot of
`Button`, `Badge`, `Alert` and `IconCard`. All are `aria-hidden`.

**Presentational only, caller owns the state:** `Tabs`, `TabPanels`,
`Switch`, `Dropdown`, `SearchInput`, `TextField`, `AccessGate` (which
deliberately does no password checking of its own), and `DocRail` when you
pass `collapsed`.

## Status

As of 2026-09-11, Lynn is a real, built React package (`lynn-ui/`, 72
exports) with a live interactive playground mounted on `lynn.html`, not just
reference documentation - see "The component library (lynn-ui)" above for
the full catalog. No changes were made to `types.ts`, `tokens.ts`, or
`code.ts` in the plugin repo - `'sol' | 'lyra'` remains the only accepted
`system` value across the plugin's ~30 message types. Wiring Lynn in as a
real third audit/convert target there is a separate, larger follow-up.
