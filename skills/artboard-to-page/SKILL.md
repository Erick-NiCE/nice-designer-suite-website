---
name: artboard-to-page
description: Apply the design from a selected Figma artboard onto the currently-loaded Chrome page via injected CSS overrides. Invoke when the user asks "use this artboard to edit this page", "make the page look like this Figma", "apply this design to the live page", or similar. Requires both Figma and Chrome clients connected. Produces a selector-to-declaration mapping that the user confirms before it mutates the page.
disable-model-invocation: false
---

# Artboard → live page

Take a Figma artboard the user has selected and push its visual styling onto the Chrome page they're looking at. This is token-level retheming (colors, typography, spacing, radius, shadows), **not** layout rewiring — if the DOM structure doesn't roughly match the artboard, this skill won't force it to.

## When to invoke

Any of:

- "Use this Figma artboard to edit the page"
- "Make the live page look like this design"
- "Apply this artboard to the current tab"
- "Push this Figma design to Chrome"

## Preflight — both clients required

1. Call `list_targets`. Require both `figma` and `chrome` in the list. If either is missing: tell the user which one to enable, and stop.
2. Figma selection: call `get_selection_info` with `target: "figma"`. Require `hasSelection === true` and a frame/artboard-typed node. If the selection is a leaf layer (text, shape), ask the user to select a frame, then stop.
3. Chrome scope: call `get_selection_info` with `target: "chrome"`. If the user has inspected a specific element, scope the override to that subtree (we'll prefix every selector with its CSS path). Otherwise apply at page scope.

State both sides in the opening line: *"Applying '<figma node>' (Figma) → '<chrome selection>' (Chrome)"*.

## Extract the Figma design

1. `extract_dev_details` with `target: "figma"` — structured child layer tree with computed styles.
2. `export_design_tokens` with `target: "figma"`, `system: "lyra"`, `mode: "light"` (and `"dark"` if the artboard uses dark surfaces). Used to rewrite raw Figma values as `var(--lyra-*)` when possible so the override survives theme switches on the Chrome side.

## Map Figma layers → Chrome selectors

This is the heuristic step. For each Figma layer that has styling we care about (background, color, font, border, radius, shadow, padding, gap):

1. **Match by explicit name**. If the Figma layer's name looks like a CSS selector (`.card-header`, `#submit`, `button[type=primary]`), use it verbatim.
2. **Match by semantic name**. If the layer's name is a semantic word (`Header`, `Card`, `Button`, `Primary CTA`), map via a small convention table:
   - `Header` / `Top bar` → `header, [role="banner"]`
   - `Nav` / `Sidebar` → `nav, [role="navigation"]`
   - `Footer` → `footer, [role="contentinfo"]`
   - `Card` → `.card, [data-testid*="card"]`
   - `Button` → `button, [role="button"]`
   - `Primary CTA` / `Main button` → `button[type="submit"], .btn-primary, [data-variant="primary"]`
   - Otherwise ask the user for a selector instead of guessing.
3. **Scope to the Chrome selection** if one was picked. Prefix each emitted selector with the Chrome selection's CSS path (e.g. `main.content > section:nth-of-type(2) button.btn-primary`) so the override never leaks out of the subtree the user cares about.

If fewer than half the Figma layers map to a selector, **stop and ask the user** to clarify the mapping for the remainder instead of silently dropping them.

## Build the override rules

For each mapped (selector, Figma layer) pair, emit one `CssOverrideRule` with a declarations object. Prefer tokenized values:

- `background` from layer fill → `background: var(--lyra-color-...)` if exact/nearest token, else raw hex.
- `color` from layer text fill → same rule.
- `font-family`, `font-size`, `font-weight`, `line-height` → tokenized when possible.
- `padding`, `gap` → tokenized from spacing palette.
- `border-radius` → tokenized from radius palette.
- `box-shadow` — raw value (no token palette for shadows yet).

Skip declarations whose source value is missing or obviously zero-unless-set (e.g. `padding: 0` on a node that clearly had non-zero padding in the artboard — probably an extraction gap).

## Confirm before applying

Output a preview table:

| Figma layer | Chrome selector | Changes |
|---|---|---|
| Primary CTA | `.btn-primary` | bg → `var(--lyra-color-brand-primary)`, color → `var(--lyra-color-text-on-brand)` |
| … | … | … |

Then **AskUserQuestion**: *"Apply these N rules to the page? (Reply 'apply' to inject, 'cancel' to stop, or tell me which rows to remove.)"*

Wait for the answer. Do not apply until the user says so.

## Apply

Call `apply_css_overrides` with `target: "chrome"`, `rules: [...]`, and `clear: true` (so re-runs replace the previous override set instead of stacking).

After success, tell the user: *"Applied. Run `clear_css_overrides` to revert, or rerun this skill on a different artboard to replace."*

## What NOT to do

- Don't call `convert_page_to_lyra` or any fixer — this skill is additive styling, not an audit.
- Don't apply rules without the preview + confirmation step.
- Don't match selectors by DOM structure alone — always require a name signal from the Figma side.
- Don't keep old overrides around across re-runs. Always pass `clear: true` on the final `apply_css_overrides`.
- Don't attempt layout rewrites (changing flex direction, repositioning absolute elements) — this skill is cosmetic retheming only.
