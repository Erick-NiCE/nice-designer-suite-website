
# Lyra Tokens — Design System Reference Library

Single source of truth for **Lyra Foundations (V1)** tokens, styles, and components. This skill holds *data*, not a build workflow. Other skills call it, read what they need, and go build.

## How to use this skill

1. **Read the six-category table below** — it maps every Figma property to its Lyra token family and the exact Plugin API call to bind it. That table alone answers most questions.
2. **Open the relevant reference file** only when you need actual token names:

| Need | Read |
|---|---|
| Spacing, radius, border weight, semantic color names | `references/tokens-variables.md` |
| Effect styles (shadows) and text styles | `references/tokens-styles.md` |
| Existing Lyra components + their variant props | `references/tokens-components.md` |
| Copy-paste `use_figma` binding snippets | `references/tokens-binding-recipes.md` |

3. **Re-resolve keys per file.** Everything here is a *starting point for `search_design_system` queries*, never a hardcoded key. Token names were verified against file `qyCq4jUOrpYcpHhpNCdgA5` in Aug 2026; values can drift. Component/variable/style keys are per-library-version and should be treated as potentially stale. Always scope searches with `includeLibraryKeys: [lyraLibraryKey]`.

## Serving this data to other skills

When the build, assemble or classify stage runs, treat this skill as its token dictionary:

- The calling skill owns the **workflow** (what to build, in what order, what to report).
- This skill owns the **vocabulary** (which tokens exist, what they're called, how to bind them).
- Pass `skillNames: "figma-use,figma-generate-design"` on `use_figma` calls.
- If the calling skill has an older inline copy of the token list that conflicts with this one, **this skill wins** — but verify against `search_design_system` before binding either way.

If someone just asks "what Lyra tokens are there for X", answer directly from the reference files. No Figma calls needed.

## Scoping to Lyra (do this once per file)

```js
get_libraries({ fileKey })
// → find "Lyra Foundations (V1)" in libraries_added_to_file, store its libraryKey
```

If it appears only in `libraries_available_to_add`, it must be added to the file before any token can be bound — say so and stop.

Never bind to a variable or style from another library (Material 3, iOS kits, org "Colors"/"Foundations"/"CEA XO"/"Templates") even if a search returns it. A Lyra-scoped search returning nothing means "no Lyra token exists for this" — fall back per the rule below.

## The six token categories

For every node created or modified, check all six categories before moving on. Not every node needs every one (a text node has no background Fill), but check.

| Category | Figma property | Lyra token pattern | Plugin API call |
|---|---|---|---|
| **Alignment** | Gap (item spacing), Padding (top/right/bottom/left) | `lyra/spacing/*` (Semantic Sizes, scope `GAP`) | `node.setBoundVariable("itemSpacing", var)`, `node.setBoundVariable("paddingLeft"/"paddingRight"/"paddingTop"/"paddingBottom", var)` |
| **Appearance** | Opacity, Corner radius | `lyra/radius/*` (scope `CORNER_RADIUS`); opacity has **no** Lyra variable today — set numerically and flag as untokenized if non-default | `node.setBoundVariable("topLeftRadius"/"topRightRadius"/"bottomLeftRadius"/"bottomRightRadius", var)` — bind each corner individually for full binding, even when uniform |
| **Fill** | Background / shape fill color | `lyra/color/bg/*` (scope `FRAME_FILL`/`SHAPE_FILL`) | `figma.variables.setBoundVariableForPaint(paint, "color", var)` then reassign `node.fills = [paint]` |
| **Stroke** | Border color, border weight | Color: `lyra/color/border/*` (scope `STROKE`); Weight: `lyra/border/*` (scope `STROKE_FLOAT`) | Color: `setBoundVariableForPaint(paint, "color", var)` → `node.strokes = [paint]`; weight: `node.setBoundVariable("strokeWeight", var)` (or per-side `strokeTopWeight` etc.) |
| **Effects** | Shadows / blurs | **Shadow none/sm/md/lg/xl** effect styles. (`lyra/shadow/*` are STRING variables holding CSS values for code export — not bindable in Figma.) | `node.effectStyleId = (await figma.importStyleByKeyAsync(key)).id` |
| **Typography** | Font family/size/weight/line-height/letter-spacing | **Heading XS/SM/MD/LG/XL** (no 2xl), **Body SM/MD/LG** (+ emphasis variants), **Label** | `textNode.textStyleId = (await figma.importStyleByKeyAsync(key)).id` — always after `figma.loadFontAsync` for that style's font, per the canonical text-edit recipe in `figma-use` |

### Seventh property: width & height

The six categories have no slot for size. Lyra has three `WIDTH_HEIGHT`-scoped families — `lyra/icon-size/*`, `lyra/control-height/*`, `lyra/row-height/*` — bound via `node.setBoundVariable("width"/"height", var)`. Check these too before hardcoding a control or icon dimension.

**Text color is a Fill on a TEXT node**, using `lyra/color/fg/*` tokens (`fg/default`, `fg/secondary`, `fg/action`, `fg/link`, `fg/inverse`, `fg/disabled`, status colors) — same binding mechanism as Fill, scoped `ALL_FILLS`/`STROKE` on text.

## When no token matches

- **Colors** — fall back to the nearest semantic token by intent (no "card border" token → `lyra/color/border/subtle`), never a hex value.
- **Spacing / radius / border weight** — pick the nearest defined step in the scale. These are enumerated, not continuous; don't invent a pixel value between steps.
- **Last resort only** — a raw literal, explicitly flagged in the token report as *"not tokenized — no Lyra equivalent found."*

Prefer an existing Lyra **component** (see `references/tokens-components.md`) over hand-building a primitive whenever one covers the need.

## Fastest way to get an authoritative token map

If the file already contains a screen built with Lyra, inspect it (`get_design_context` / `get_variable_defs` on that node) before searching. An already-correct neighbour beats a guess from this list every time.
