---
name: browser-element-specs
description: Produce a design spec sheet for the currently-inspected browser element. Invoke when the user asks "tell me the design specs of this element", "what are the dimensions / colors / typography of this", "spec out this component from the page", or similar. Uses the Chrome extension to pull computed CSS plus the plugin's token audits so every raw value is annotated with its nearest Lyra token.
disable-model-invocation: false
---

# Browser element → design spec sheet

Turn whatever element the user is inspecting in Chrome into a clean spec a designer or developer can read at a glance. Raw CSS values are paired with the closest design-token match so the spec is actionable, not just descriptive.

## When to invoke

Any of:

- "Design specs of this element"
- "What's the padding / color / typography of this"
- "Spec out this button / card / modal"
- "Tell me the dimensions and colors of the selected element"

If the user says "specs for this layer" without specifying Chrome, check `list_targets`. If only Figma is connected, load `figma-element-css` instead.

## Preflight

1. Call `list_targets`. If no `chrome` session: tell the user to open the Chrome extension and enable "Connect to Claude MCP", then stop.
2. Call `get_selection_info` with `target: "chrome"`.
   - If `hasSelection` is false or `nodeId === "body"`, ask the user to click **🔍 Inspect** in the extension and pick an element, then stop. (Don't start inspect automatically — the user should be in control of which element they pick.)
   - Record `nodeName` for the spec heading.

## Extract

Run these in parallel, all with `target: "chrome"`:

- `extract_dev_details` — structured computed styles for the selection.
- `audit_colors` with `system: "lyra"` — every fill/stroke on the selection with nearest-token suggestions.
- `audit_text_styles` with `system: "lyra"` — typography values with nearest text-token.
- `audit_spacing` with `system: "lyra"` — padding/margin/gap with nearest spacing-token.
- `audit_radius` with `system: "lyra"` — border-radius with nearest radius-token.

Each audit is scoped to the current selection automatically because the content script uses `selectedElement` as its scan root.

## Format

Emit these sections in order. Each section is a compact markdown table; omit any section whose extraction returned no data (e.g. text table for a shape).

1. **Header** — `## Specs — <nodeName>` and a one-line summary: tag, class list (first 3), computed dimensions (`W × H`).
2. **Layout** — `display`, `position`, `width`, `height`, `padding`, `margin`, `gap`, flex/grid if present.
3. **Typography** — `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, `color`, `text-align`. One column for computed value, one for nearest Lyra token.
4. **Fill & border** — `background`, `border-{top,right,bottom,left}`, `border-radius`, `box-shadow`. Same two-column format.
5. **Tokenization summary** — single-line count: "X of Y values map to a Lyra token" so the reader can judge how close the element already is to Lyra.

Values that have an **exact** token match render as `#056A9F` → `var(--lyra-color-...)`. Values within 1 ΔE / 0.5px render with a `/* nearest */` annotation. Unmatched values render raw.

## What NOT to do

- Don't start or stop inspect mode — the user drives that.
- Don't call any mutation tool (`convert_*`, `fix_*`, `apply_*`, `polish_page`, `a11y_overlay`).
- Don't expand scope beyond the selected element. If the user wants the whole page, tell them to press the page-selector (`SELECT_PAGE`) first.
- Don't suggest "you should use token X" — this skill describes what exists, not what to change. Save prescriptive advice for `convert_page_to_lyra`.
