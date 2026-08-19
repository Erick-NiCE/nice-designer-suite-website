---
name: figma-chrome-parity
description: Diff a Figma artboard against the live Chrome page that's meant to implement it, then report where they drift. Invoke when the user asks "does this page match my Figma", "compare the build to the design", "what's different between Figma and the live site", or similar. Requires both Figma and Chrome clients connected. Produces a per-layer drift table grouped by property family (colors, typography, spacing, radius, shadows).
disable-model-invocation: false
---

# Figma ↔ Chrome parity check

Answer the canonical design-to-build QA question: *"does the live site match the Figma?"* — by extracting computed styles from both sides, aligning them by semantic layer name, and listing the mismatches.

## When to invoke

Any of:

- "Does this page match the Figma"
- "Compare the build to the design"
- "What's different between Figma and the live site"
- "Parity check" / "design-build diff"
- "QA this implementation against the design"

## Preflight — both clients required

1. Call `list_targets`. Require BOTH `figma` AND `chrome`. If either is missing, tell the user which to start, then stop.
2. Figma selection: `get_selection_info` with `target: "figma"`. Require a frame/artboard-typed node. Leaf layers aren't enough — we need a tree to diff.
3. Chrome scope: `get_selection_info` with `target: "chrome"`. If the user has an element selected, scope the Chrome side to that subtree; otherwise full page.

State both sides in the opening line: *"Comparing '<figma node>' (Figma) against '<chrome selection>' (Chrome)"*.

## Extract both sides

Run in parallel:

- `extract_dev_details` with `target: "figma"` — structured layer tree.
- `extract_dev_details` with `target: "chrome"` — computed-style tree for the Chrome scope.

## Align by name

For every Figma layer with a non-default name, try to find a matching Chrome element:

1. **Exact name → selector**: if the Figma layer name is a valid CSS selector (`.card-header`), match directly.
2. **Name → class/data-attribute**: kebab-case the name and look for `.<kebab>`, `[data-testid*="<name>"]`, `[aria-label="<name>"]`.
3. **Semantic convention**: use the same table as the `artboard-to-page` skill (`Header` → `header, [role="banner"]`, etc.).
4. **Unmatched on either side** — collect separately and surface as "in Figma but not in Chrome" / "in Chrome but not in Figma" lists at the end.

If fewer than ~40% of Figma layers align to a Chrome element, stop and tell the user the two trees don't look like the same page. Ask whether they selected the right artboard/scope pair.

## Diff each aligned pair

For each (Figma layer, Chrome element) pair, compare these property families. Only record a drift if the two sides disagree *meaningfully* — ignore rounding noise under 0.5px and color differences under 1 ΔE.

- **Colors**: `background`, `color`, `border-color`. Report both raw values and nearest Lyra token on each side, so the drift line reads: *Figma `#056A9F` (brand-primary) → Chrome `#0570A8` (no token)*.
- **Typography**: `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.
- **Spacing**: `padding`, `margin`, `gap`.
- **Radius**: `border-radius`.
- **Shadow**: `box-shadow` — report as "present in one, missing in other" only (full shadow-string diff is too noisy to surface by default).

## Output

Heading: `## Parity — <figma node> vs <chrome selection>`

Then a one-line summary: *"N layers matched. M drift issues across P aligned pairs."*

Then grouped sections (omit empties):

### Color drift (N)
Table: `Layer | Property | Figma | Chrome`. Values formatted with tokens in parens.

### Typography drift (N)
Same shape.

### Spacing drift (N)
Same shape, values in px.

### Radius drift (N)

### Shadow drift (N)

### In Figma, missing in Chrome (N)
List of layer names plus their primary fill/text so the reader can spot the gap.

### In Chrome, missing in Figma (N)
List of Chrome elements with class/tag that had no Figma counterpart.

### Match summary
Single line: *"P of Q Figma layers have a Chrome counterpart (X%)."* This gives the user a confidence signal for the whole report.

## Follow-up offer

End with: *"Want me to apply the Figma styling to Chrome to close these gaps? (See the `artboard-to-page` flow.)"* — only if color/typography/spacing drift counts are non-zero. Don't offer if the drift is mostly structural (missing elements) since retheming can't fix that.

## What NOT to do

- Don't mutate anything. No `convert_*`, `fix_*`, `apply_*`, `polish_page`. This is a read-only audit.
- Don't diff layout positions (x/y, width/height). Those rarely survive responsive layouts and generate noise. Stick to cosmetic properties.
- Don't invent matches. If a layer's name doesn't match anything, list it in the unmatched section — never guess.
- Don't score "parity %". The match-summary line is enough; a single percentage oversimplifies.
