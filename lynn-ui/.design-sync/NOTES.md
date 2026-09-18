# design-sync notes for lynn-ui

## Repo-specific setup
- No Storybook — package shape. Entry is `./dist/index.js` (already built via `npm run build` before syncing).
- `cfg.provider` is `ThemeProvider` with `defaultTheme: "lynn"` — every preview (including the floor cards) renders inside this wrapper.
- Real usage examples for almost every component already exist in `playground/registry.js` and `playground/app.js` — always check there before inventing composition from scratch.

## Known render warns (triaged, not new)
- None outstanding as of the first full sync.

## `overrides.<Name>.viewport` requires a central re-stamp
Adding any `overrides.<Name>` key other than `cardMode`/`primaryStory` (notably `viewport`) changes that component's graded-config hash relative to what's stamped in the last full build's manifest. `preview-rebuild.mjs` (the per-component tool subagents use) refuses to build a component whose override contract has drifted, with `[CONFIG_STALE]`. Only a full `package-build.mjs` run re-stamps the manifest and clears this.

Practical effect during a large fan-out: agents that only have `preview-rebuild.mjs`/`package-capture.mjs` (by design — they must never run the shared-bundle-rewriting `package-build.mjs`/`package-validate.mjs` in parallel) cannot land a `viewport` override themselves. Batch all such config overrides, then have the orchestrator run one full `package-build.mjs` + `package-validate.mjs` pass afterward to unblock them.

This is what happened on the first sync: `Nav`, `DocRail`, `AccessGate` needed `viewport` overrides (they're `position: fixed` in real usage and escape a normal card) and were blocked until the orchestrator ran a full rebuild. `Hero` avoided this by dropping `viewport` from its override (kept only `cardMode: "single"`, which doesn't trip the guard) and sizing itself via the preview's own inline style instead.

## ScrollArea preview gotcha
`ScrollArea`'s own root is `display:flex` with no set height — it does not inherit a height from an outer wrapping `<div>`. Pass `style={{ height: '100%' }}` directly to `<ScrollArea>` itself (inside a height-constrained parent), or it grows to fit its content instead of clipping/scrolling.

## Icon preview gotcha
Icons use `currentColor` and inherit whatever `color` their wrapper sets. The floor-card/preview surface is dark (`lynn` theme default), so a preview that hardcodes a dark wrapper `color` (assuming a light background) makes the icon nearly invisible — this reads to the render checker as "likely blank," which is misleading; it's a contrast bug, not a sizing bug. Fix: size the icon generously (28–48px) and set the wrapper's `color` to `var(--lynn-color-text, #fff)`.

## Cosmetic, not a bug
`ThemeProvider`'s `.lynn-root` always paints a full-row dark background (`background: var(--lynn-color-bg)`) regardless of a narrow child's own width — genuine product behavior (the real page is dark end-to-end), not a preview-authoring mistake. Don't "fix" the dark band around a narrow/fixed-width composition (e.g. a sidebar-shaped demo) by fighting this.

## Real component bugs found and fixed during this sync (not preview-only)
- `GaugeRing`: numeral/caption font sizes are fixed regardless of the `size` prop, so small `size` + long `format` text can overflow past the ring. Preview authoring worked around it by picking sizes/labels that fit; the component itself may want a responsive font-size formula in a future pass.
- `ToastViewport`: overriding its `style` with a custom `inset` doesn't clear the inherited `transform: translateX(-50%)` from its real fixed/centered CSS, so a well-intentioned "pin it inside this demo box" override renders the toast shifted half-off-screen. Previews now render it at its natural fixed/centered position instead of fighting the CSS.
- `Carousel`: fixed separately in `src/` (not a preview-only issue) — clicking a real link inside a slide silently failed to navigate because `setPointerCapture` was claimed on every `pointerdown`, and Chromium retargets the ending `click` to the capturing element even after release. Fixed to only capture once real drag movement is detected.

## Re-sync risks
- `overrides` in `.design-sync/config.json` currently holds `Nav`, `DocRail`, `AccessGate` (`cardMode: "single"` + a `viewport`), `Footer` (`cardMode: "column"`), and `Hero` (`cardMode: "single"`, no `viewport` — see above). Keep these when editing the file further; they're load-bearing for those components' cards to render sanely instead of escaping/collapsing.
- All ~71 components were authored fresh in one large parallel fan-out (6 agents, disjoint component sets) rather than incrementally — a future re-sync's diff should be small unless the package's real API surface changes.
- Font families (`Be Vietnam Pro`, `Fira Code`) are loaded via a remote `@import` (`[FONT_REMOTE]`), not shipped — this is intentional (the fonts are served by Google Fonts at runtime), not a gap to fix.
