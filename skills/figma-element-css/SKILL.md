---
name: figma-element-css
description: Convert a selected Figma node into production-ready CSS. Invoke when the user asks "give me the CSS for this Figma element", "what's the CSS of this artboard", "export this to code", "copy this component's CSS", or similar. Uses the Figma plugin (via the nice-designer MCP bridge) to read the selected node's styling and returns CSS grouped by property family, with Lyra tokens substituted where they match.
disable-model-invocation: false
---

# Figma element → CSS

Turn whatever the user has selected in Figma into CSS they can paste into a codebase. Substitutes Lyra design tokens (`var(--lyra-…)`) for raw values when a match is close enough, so the output survives theme changes instead of hard-coding hex/px.

## When to invoke

Any of:

- "CSS for this Figma element / frame / artboard / component"
- "Export this to code"
- "What does this look like in CSS"
- "Copy the styles for this layer"
- "Give me the Tailwind / styled-components / plain CSS for this"

If the user says "CSS for the page I'm looking at" without specifying Figma, check `list_targets`. If only Chrome is connected, load `browser-element-specs` instead. If only Figma, this skill is correct. If both, ask which they meant.

## Preflight

1. Call `list_targets`. If no `figma` session: tell the user to open the plugin in Figma and enable "Connect to Claude MCP", then stop.
2. Call `get_selection_info` with `target: "figma"`.
   - If `hasSelection` is false or `nodeName` is empty → ask the user to select a layer in Figma, then stop.
   - Record the `nodeName` so the output header can say *CSS for "<name>"*.

## Extract

Call `extract_all_css` with `target: "figma"`. This returns the node's styling as either:

- A structured object (preferred — lets us do token substitution precisely), or
- A pre-formatted CSS string (fall back to light post-processing only).

If the response shape is ambiguous, also call `extract_dev_details` with `target: "figma"` as a cross-check — that tool always returns structured data.

## Token substitution

Before returning raw values, try to replace them with Lyra tokens:

1. Call `export_design_tokens` with `target: "figma"`, `system: "lyra"`, `mode: "light"` (and `"dark"` if the Figma node uses dark surfaces).
2. For every color / font-size / font-weight / spacing / radius in the extracted CSS:
   - If the value matches a token exactly → substitute `var(--lyra-<token-name>)`.
   - If within 1 ΔE (color) / 0.5px (size) → substitute but annotate inline as `/* nearest token */`.
   - Otherwise leave the raw value and append a trailing comment `/* no token match */`.
3. Never invent a token that wasn't in the palette response.

## Format

Output in this order, each as a fenced `css` block:

1. **Selector** — suggest a class name derived from `nodeName`, kebab-cased, e.g. `.button-primary`.
2. **Layout & sizing** — `display`, `width`/`height`, `padding`, `margin`, `gap`, flex/grid.
3. **Typography** — `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, `color`.
4. **Surface** — `background`, `border`, `border-radius`, `box-shadow`.
5. **State variants** (only if the node has named variants like `:hover`, `:disabled`) — one block per state.

After the CSS blocks, list any properties that couldn't be tokenized under a short **"Review manually"** bullet list so the user knows where a designer decision is still needed.

## What NOT to do

- Don't call `convert_colors`, `fix_spacing`, or any mutation tool — this skill is read-only.
- Don't scan the whole file — only the current selection.
- Don't emit Tailwind / styled-components / emotion by default. Only switch formats when the user explicitly asks.
- Don't guess at interaction behavior (hover, focus) the Figma node doesn't declare.
