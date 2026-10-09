---
name: lynn-ui-prototyping
description: Build or edit a project's UI out of the real Lynn components (the `lynn-ui` React package) and follow Lynn's design-system rules exactly, then audit the live page against Lynn tokens until it is clean. Use when the user wants something built "in Lynn", on the Suite's own look (dark, gradient, motion-driven), or asks to use lynn-ui, the Lynn design system, or the Lynn components for a project, site, tool or prototype. Not for CXone product screens (use lyra-ui-prototyping) and not for SOL/Lyra conversion.
---

# Lynn UI prototyping

Lynn is **NiCE Designer Suite's own design system**: a dark, gradient-driven, motion-rich language, shipped as a real typed React package, `lynn-ui` (about 70 exports). It is the same system the Suite's website, docs and app chrome are built from, and the live component site is `lynn.html` on the Suite website.

Which system for which job:

| The work is | Use |
|---|---|
| A CXone product screen, admin UI, agent workspace | `lyra-ui-prototyping` (Lyra) |
| A page, tool, site, dashboard or prototype that should look like the Suite itself | **this skill** (Lynn) |
| Converting an existing page or Figma file to SOL or Lyra | `lyra-visual-patterns` + the convert tools |

If it is unclear, ask which one, because the two are not interchangeable: Lynn is dark-first, uses Be Vietnam Pro, and has a motion vocabulary Lyra has none of.

## The one rule that matters most

**Never hand-roll anything the package already has.** Every clickable control in Lynn is a real `Button`; every segmented choice is `Tabs`; every callout is `Alert`; every pill is `Badge`; every toast goes through `ToastViewport`. Before writing a `<button>`, `<select>`, `<input>`, a card `div`, a spinner or a tooltip:

1. Check `references/component-index.md` for a component that does it.
2. Read that component's own file, `references/components/<Name>.md`, before the first use in a build. It carries the real `Usage:` and `Don't:` notes from the component's source, plus every prop with its documentation. Several props are silent no-ops without a partner prop, and only that file says which.
3. Use an existing prop or variant in preference to restyling. Only compose something new if no component covers it, and then compose it from Lynn components and tokens, not raw CSS.

Fetch them with `get_skill({ id: "lynn-ui-prototyping", file: "references/components/Button.md" })`, or read `skills/lynn-ui-prototyping/references/` directly in a checkout.

## Step 1: Get the package

The package is bundled with NiCE Designer, so there is nothing to clone or build. Look in this order and use the first that exists:

1. `vendor/lynn-ui/` in the plugin repo.
2. `lynn-ui/` next to the MCP server (`packages/mcp-server/lynn-ui` in a checkout, `mcp-server/lynn-ui` in the Chrome build folder).
3. The published copy, if neither is on disk: `https://erick-nice.github.io/nice-designer-suite-website/lynn-ui/dist/` (same files).

Install it into the project as a copied dependency. `--install-links` matters: without it npm symlinks the folder and installs `matter-js` into the vendored copy.

```bash
npm install --install-links <path-to>/lynn-ui react react-dom
```

React 18 or newer is a peer dependency. The package version is in its `package.json`; note it in the project README so a later build can tell if it drifted. If the package looks older than the docs you are reading, tell the user to run `npm run sync:lynn` in the plugin repo.

## Step 2: Wire the root once

```jsx
import 'lynn-ui/dist/lynn-ui.css';
import { ThemeProvider, ToastViewport } from 'lynn-ui';

export function App({ children }) {
  return (
    <ThemeProvider defaultTheme="lynn">
      {children}
      <ToastViewport />
    </ThemeProvider>
  );
}
```

- Import the stylesheet **once**, at the app root.
- `ThemeProvider` renders the `.lynn-root` element that every component's CSS resolves against. Do not add your own wrapper for background or font. Without it the neutrals do not resolve and `useLynnTheme` silently reports `lynn` and swallows writes.
- Three modes: `lynn` (default, dark), `light`, `dark`. The neutral tokens re-point themselves per mode, so never hardcode a neutral.
- Mount one `ToastViewport` if anything uses `CopyButton`, `CodeBlock` or `useToast()`. Without it a failed copy looks identical to a successful one.

## Step 3: Build by the rules

Read `references/design-system.md` in full once per project. It is the source of truth for tokens, motion and component constraints. The rules that get broken most:

**Tokens, not values**
- Colors come from `--lynn-color-*` custom properties or a component prop (`tone`, `accent`, `status`). No hex where a neutral token belongs, or it goes stale when the theme switches.
- Text opacity is `rgba(255,255,255,N)`, never a gray hex like `#888`.
- Seven accents only: `blue`, `electric-blue`, `indigo`, `emerald`, `teal`, `coral`, `lynn`. Never invent another.
- Spacing is the `--lynn-space-*` scale (0, 4, 8, 12, 16, 24, 32, 48, 64, 80, 96) and radius the `--lynn-radius-*` scale (0, 4, 8, 12, 16, 24, pill 100). A raw `var()` is for glue between components, never for a size a prop already offers.
- Font is Be Vietnam Pro. Every heading is weight 700 or more. Section labels are all-caps with letter-spacing, above the heading.

**Motion**
- Every transition uses `cubic-bezier(0.23,1,0.32,1)`. Never `linear` or plain `ease`.
- Nothing pops in: every card and section goes through `Reveal` (`index` staggers siblings).
- `prefers-reduced-motion` is already handled by the components. Do not override it.
- Performance budget: **one** `Lightning` or `LiquidFill` per page. `CursorGlow` is a page-level singleton. Do not put `Card interactive` on cards packed edge to edge.

**Mount exactly one of:** `ThemeProvider`, `ToastViewport`, `CursorGlow`, `DocRail`, `Nav`, `Footer`, `Hero`. The last five are fixed, sticky or full-viewport, so a second lands on top of the first.

**Needs a specific parent:** `TabPanel` inside `TabPanels` (a stray one is hidden forever, with no error), `Phase` in `Timeline`, `RoadmapItemCard` in `Phase`, `AccordionItem` in `Accordion`, `ThemeToggle` under `ThemeProvider`.

**Silent no-ops:** `Card.liquid` needs `variant="glass"`; `Badge.tone` is ignored when `status` is set; `Button.type` is ignored with `href`; `ProgressBar.value` is ignored when `indeterminate`; `ChangelogEntry.defaultOpen` is ignored with `isLatest`. The component's own file lists the rest.

**State you own:** `Tabs`, `TabPanels`, `Switch`, `Dropdown`, `SearchInput`, `TextField` and `AccessGate` are presentational; the caller holds the value. `defaultSort`, `defaultOpen`, `defaultTheme` are seeded once, so changing them later needs a remount.

**Accessibility:** icons, `Sparkle`, `StepNumber` and `Skeleton` are `aria-hidden`, so the meaning must live in adjacent text or an `aria-label` on the control. Icons, never emoji.

**Copy:** no em dashes anywhere. Use a hyphen or a colon.

## Step 4: Audit and close the loop

Lynn is an audit target when **Enable beta features** is on (Settings in the extension), in Chrome only. There is no Figma library for Lynn, so Figma cannot audit against it.

1. `list_targets`, then open the running project in Chrome and `select_page`.
2. Ask the user to turn on Beta features if the LYNN button is not in the Audit tab's system toggle. The MCP tools accept `system: "lynn"` either way, but the extension needs the flag to show it.
3. `run_full_audit({ target: "chrome", system: "lynn" })`. Read the gauge and the issue list.
4. Fix in **source**, never with the plugin's `convert_*` / `apply_*` / `fix_*` tools: those patch the live DOM and a reload discards them. A color issue means swap a hex for a token or a prop. A spacing or radius issue means use the scale. A type issue means the wrong font or a light heading.
5. Re-audit. Stop at the user's target, or after three passes with no improvement. Report what is left instead of looping.

`design-system-agent` has the same loop with the cap and plateau rules written out; follow its loop mechanics and substitute Lynn for the system.

What the Lynn audit covers and does not:
- **Covers:** colors, type, spacing, radius, accessibility.
- **Colors** match the solid tokens in all three theme modes (`lynn/color/bg`, `lynn/color/light/bg`, `lynn/color/dark/bg`, and the seven accents). Translucent tokens (borders and secondary text in `lynn` mode) are skipped, because a computed color with alpha cannot be matched to a hex. A page that sets them via the tokens is fine; do not chase a false flag there.
- **Components:** not detected. Lynn components render ordinary elements with no custom tag, so the audit cannot tell a `Button` from a hand-rolled one. That check is you following the one rule above.

## Library is read-only

Do not edit `lynn-ui` source or the vendored copy. If a component's real API cannot do what is asked, say so plainly and either compose around it with Lynn parts or tell the user it needs a change in the design system (the `lynn-ui/` folder of the Suite website repo). Do not patch around it with hand-written CSS, forked markup or a restyled output.

## Reference files

- `references/design-system.md`: full tokens, motion, component index, constraints.
- `references/component-index.md`: every component, one line each, by group.
- `references/components/<Name>.md`: usage, don't and props for one component.

All generated from the package by `npm run sync:lynn`. Do not edit them; change the source and regenerate.
