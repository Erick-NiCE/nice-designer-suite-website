
# Lyra Custom Component Builder

Build custom Figma layouts, views, or components using **only tokens and components from the "Lyra Foundations (V1)" library** — never hardcoded hex colors, raw pixel values, or ad-hoc styles. Every visual property must resolve to a bound Lyra variable, imported Lyra component instance, or applied Lyra style.

This skill is a specialization of the general Figma skills. It does not replace them — it adds a Lyra-only constraint and a token-tracking checklist on top of them.

## Where this fits in the chain

This is the **build step** at the end of a three-skill chain:

1. `ui-breakdown` — decomposes a screenshot/Figma link/HTML link/text description into a flat element list.
2. `lyra-component-classifier` — classifies each element as ✅ Lyra-ready or 🔧 Custom, producing a component inventory table.
3. **`lyra-custom-component-builder` (this skill)** — takes that inventory table and builds *only the 🔧 Custom rows* with Lyra tokens.

## Inputs this skill accepts

**Primary input: the classification table from `lyra-component-classifier`.** Don't re-derive a component list from scratch here — that's already been done upstream. Concretely:

- If the user hasn't already run `lyra-component-classifier` (and, before that, `ui-breakdown`) on this screen in the current conversation, run them first to get the inventory table (columns: #, Element, Location, Classification, Detail).
- **Filter the table to rows marked 🔧 Custom before doing anything else.** Rows marked ✅ Lyra-ready are out of scope for this skill — they should be imported as Lyra component instances (with the variant props the classifier already specified) rather than hand-built. If the user wants those imported too, that's plain component-instancing work, not what this skill is for; import them as plain component instances during assembly.
- Each 🔧 Custom row's **Detail** column should already list the token categories needed (e.g. `bg/surface/container`, `radius/lg`, `spacing/6` gap) — treat that as a head start for Step 2 below, not a replacement for it. Still verify via `search_design_system`, since the classifier's note is a plan, not a guarantee the exact token key still resolves in this file.
- Only fall back to identifying custom components yourself (no classifier table available) when the user explicitly wants a one-off build without running the full chain, or hasn't shared a screen to classify.

## Prerequisites — load these first

Before any `use_figma` call, load (in this order):
1. `figma-use` (or MCP resource `skill://figma/figma-use/SKILL.md`) — Plugin API rules, gotchas, error recovery.
2. `figma-generate-design` (or `skill://figma/figma-generate-design/SKILL.md`) — screen-building workflow (wrapper-first).
3. `lyra-tokens` — the canonical Lyra Foundations (V1) token/variable/style/component reference library. **This skill carries no token data of its own** — every token name, collection, scope, effect style, text style, and component set comes from `lyra-tokens`. Load it before Step 2 and treat it as the single source of truth for what exists in Lyra.

Pass `skillNames: "figma-use,figma-generate-design"` on every `use_figma` call.

## Hard constraint: Lyra Foundations (V1) only

1. Find the library key once per file with `get_libraries({ fileKey })`. Look for the entry named **"Lyra Foundations (V1)"** in `libraries_added_to_file` (add it via Figma if it's only in `libraries_available_to_add`). Store its `libraryKey` — every `search_design_system` call in this workflow MUST pass it via `includeLibraryKeys: [libraryKey]`.
2. Never bind a property to a variable/style from any other library (Material 3, iOS kits, org "Colors"/"Foundations"/"CEA XO"/"Templates", etc.) even if it resolves a search hit. If `search_design_system` scoped to the Lyra key returns nothing for a property, treat it as "no Lyra token exists for this" — fall back per the "No matching token" rule below, do not silently pull from another library.
3. Never hand-author a hex color, raw corner-radius number, raw padding/gap number, or manually-set font size/weight when a Lyra token exists for that purpose. If you catch yourself writing `{ r: 0.2, g: 0.2, b: 0.2 }` or `cornerRadius = 8` directly, stop and search for the token first.
4. Prefer existing Lyra **components** (Button, Input, Checkbox, Link text, Label, Modal Dialog, etc.) over hand-built primitives for anything that already exists in the library. Only build a primitive frame/vector when no Lyra component covers it (e.g. a custom card wrapper, a bespoke layout container). In practice, if the classifier already marked something ✅ Lyra-ready, you shouldn't be hand-building it at all under this skill — that's the signal something's off (either the row was miscategorized, or you're looking at the wrong row).

### No matching token

Raw literals are **never** an acceptable outcome — every property must resolve to a Lyra token, no exceptions. If a first search doesn't surface an exact token:
- For colors: fall back to the closest semantic token by description (e.g. no "card border" token → use `lyra/color/border/subtle`) rather than a hex value. Note the substitution in your final token report.
- For spacing/radius/border weight: pick the nearest defined step in the Lyra scale (spacing/radius/border variables are enumerated, not continuous) rather than an arbitrary pixel value.
- Consult `lyra-tokens` for the full enumerated set — a value that seems to have no token almost always maps to a nearby semantic or scale token listed there. If you catch yourself about to write a raw literal, go back to `lyra-tokens` and pick the nearest token instead.

## The six token categories to track

For every node you create or modify, bind and log a token in each applicable category. Not every node needs every category (e.g. a text node has no Fill-as-background), but check all six against each node before moving on:

| Category | Figma properties covered |
|---|---|
| **Alignment** | Gap (item spacing), padding (all four sides) |
| **Appearance** | Corner radius; opacity (no Lyra variable today — set numerically only if non-default, and flag it) |
| **Fill** | Background/shape fill color; text color on TEXT nodes (via `fg/*` tokens) |
| **Stroke** | Border color and border weight |
| **Effects** | Shadows/blurs — prefer Lyra effect **styles** over hand-built effect objects |
| **Typography** | Text style (family/size/weight/line-height) — always a Lyra text style, never manual overrides |

The token names for each category, their scopes, and the exact Plugin API binding call (`setBoundVariable`, `setBoundVariableForPaint`, `textStyleId`/`effectStyleId` via `importStyleByKeyAsync`, etc.) all live in **`lyra-tokens`** — look them up there, don't reconstruct from memory.

## Lyra token reference — use the `lyra-tokens` skill

This skill deliberately carries **no embedded token data**. The full enumerated reference — spacing/radius/border scales, all semantic color tokens (`bg/*`, `fg/*`, `border/*`, `status/*`, `accent/*`), effect styles, text styles, component sets, and the exact Plugin API binding call for each — lives in the **`lyra-tokens`** skill. Load it (see Prerequisites) and use it as:

- The starting hypothesis for every `search_design_system` query in Step 2.
- The lookup for nearest-token fallbacks under the "No matching token" rule.
- The authority on which scope (`GAP`, `CORNER_RADIUS`, `FRAME_FILL`, `STROKE`, `STROKE_FLOAT`, etc.) each token binds to.

Token/component **keys** are still per-file/per-library-version — always re-resolve keys via `search_design_system` scoped to the Lyra `libraryKey`; `lyra-tokens` tells you what to search for, not the literal key to bind.

## Required workflow

### Step 1 — Scope to Lyra
```js
// One-time per file
get_libraries({ fileKey })
// → find entry named "Lyra Foundations (V1)" in libraries_added_to_file, store libraryKey
```
If it only appears in `libraries_available_to_add`, tell the user it needs to be added to the file before you can bind its tokens, and stop.

### Step 2 — Discover tokens once, as a deduped batch

Take the filtered list of 🔧 Custom rows from `lyra-component-classifier`'s inventory table. **Do not search per-property or per-component** — that's the biggest time/token waste in this workflow. Instead:

1. Walk all Custom rows and collect the **union of token needs** across the six categories, using the classifier's Detail column and `lyra-tokens` as the hypothesis. Dedupe — most components share the same handful of tokens (`bg/surface/container`, `radius/md`, `spacing/4`, `fg/default`, ...). A typical screen needs ~12–15 distinct tokens, not 40 searches.
2. Resolve the whole deduped set via `search_design_system` scoped to `includeLibraryKeys: [lyraLibraryKey]`, batching independent searches in parallel.
3. Store results in a **session token map** (`token name → resolved key + scope`). This map is the single source for all Step 3 builds — once a key is in the map, never search for it again this session. If a build surfaces a token you missed, resolve just that one and add it to the map.

Shortcut: prefer inspecting an existing Lyra-built screen in the file (per `figma-generate-design` 2a-ii / 2b) when one exists — one `get_design_context` call can yield an authoritative, already-correct token map and replace most of this step.

If a row's Location/Detail is too vague to search confidently (e.g. "Card container" with no further detail), ask the user or glance at the original screenshot/link rather than guessing at structure.

### Step 3 — Build one component at a time, on a dedicated Components page

**Build each Custom component individually — one component per `use_figma` call.** Never batch multiple components into a single script; a failure mid-script should never leave several half-built components behind, and per-component calls make the token report trivially auditable.

**All parent (custom) components are built on a separate page, not inline in the screen.** Set up once, before the first build:

1. Create (or reuse, if it already exists from a prior run) a page named **`🧩 Lyra Custom Components`**.
2. On that page, create three labeled section frames, in order: **`Atoms`**, **`Molecules`**, **`Organisms`** (auto-layout, generous spacing, `Heading-md` section titles).
3. Classify each Custom row by atomic level — using the `ui-breakdown` output if it's in the conversation, otherwise by judgment (single indivisible element → Atom; small group of atoms functioning together → Molecule; distinct standalone UI section → Organism) — and build it inside the matching section.

Build order is bottom-up: **Atoms first, then Molecules (composed from atom instances), then Organisms (composed from molecule/atom instances)**. For each component:

- Walk the six-category table above and bind every applicable property to a Lyra token from the Step 2 session token map — no raw literals, ever.
- Where the component contains ✅ Lyra-ready elements (e.g. a custom card containing a Lyra Button), import those as Lyra component instances in place — don't hand-draw them.
- **Immediately convert the finished frame into a Figma component** via `figma.createComponentFromNode(frame)` (check typings; fall back to manual `createComponent()` + re-parenting only if unavailable). This happens automatically for every parent build — no user confirmation needed. This is what makes the page a reusable mini-library.
- Have every build script `console.log` the created component's ID and name — so no follow-up `get_metadata` call is needed just to learn IDs.

**Validate visually per section, not per component.** Screenshots are the most token-expensive operation in this workflow — take **one screenshot after each section completes** (all Atoms done → screenshot Atoms section; same for Molecules, then Organisms), not one per component. Only screenshot an individual component mid-section if its build script errored or its result is genuinely in doubt.

When the target is a full screen (not just loose components), assemble it afterwards per `figma-generate-design` Steps 3–4 on the screen's own page, **using instances of the components you just created** — never duplicated raw frames.

### Step 4 — Produce the token report
After all components are built and section screenshots confirm them (`get_metadata` only if something looks off or an ID is missing), compile a table for the user listing, **per component**, which token was bound in each of the six categories (or "n/a" where a category doesn't apply). Every applicable cell must name a Lyra token — "untokenized" is not a valid entry. Flag any nearest-token substitutions made under the "No matching token" rule so the user can review them. This is what lets the user visually confirm binding in Figma (colored dots in the properties panel) and lets you sanity-check nothing was hardcoded.

Format: one row per component, one column per category — don't expand to per-node rows; a component's internal children share its story. Component instances inherit their own internal token bindings — you don't rebind or report those, just confirm you used the Lyra component rather than redrawing it.

### Step 5 — Confirm the component library

Componentization is **automatic and requires no user confirmation** — every parent build was already converted to a Figma component in Step 3 as part of the build loop. In this step, just close the loop:

- List each component created, with its atomic section (Atom/Molecule/Organism), name, and node ID (captured from the build scripts' logs — no extra reads needed), so the user can find and instance them from the `🧩 Lyra Custom Components` page.
- Show the Components page with all three sections populated — reuse the final Organisms-section screenshot if it already captures the whole page; only take a fresh full-page screenshot if it doesn't.

If a component has clear variant potential (e.g. a card built in "with icon" / "without icon" versions), mention `combineAsVariants` as a follow-up rather than doing it automatically — that's a bigger structural change the user should opt into explicitly. See `figma-use`'s `component-patterns.md` for the pattern.

## Validation checklist (run before declaring done)

- [ ] Confirmed the build list was filtered to `lyra-component-classifier`'s 🔧 Custom rows only (no Lyra-ready rows were hand-built).
- [ ] `lyra-tokens` was loaded and used as the token data source (no token data assumed from memory).
- [ ] Every `search_design_system` call in this session passed `includeLibraryKeys` scoped to the Lyra key.
- [ ] Zero raw literals anywhere — every hex color, gap, padding, radius, and stroke weight is bound to a Lyra token (nearest-token substitutions flagged in the report).
- [ ] Every TEXT node has a Lyra text style (`textStyleId`) applied, not manual font-size/weight overrides.
- [ ] Any shadow uses a Lyra effect style, not a manually constructed `DROP_SHADOW` effect object.
- [ ] Token discovery was done as one deduped batch into a session token map — no per-property/per-component re-searching.
- [ ] Screenshots were taken per section, not per component.
- [ ] Each component was built in its own `use_figma` call, bottom-up (Atoms → Molecules → Organisms).
- [ ] All parent components live on the `🧩 Lyra Custom Components` page in their correct Atom/Molecule/Organism section, and each was converted to a Figma component automatically.
- [ ] Screens (if any) are assembled from instances of those components, not duplicated frames.
- [ ] Token report (Step 4) and component list (Step 5) delivered to the user.

## Error recovery

Same as `figma-use` §7: on any `use_figma` error, stop, read the message, fix, retry — scripts are atomic so nothing partial is left behind. If a `setBoundVariable`/`setBoundVariableForPaint` call throws because the scope doesn't match (e.g. binding a `GAP`-scoped variable to `cornerRadius`), re-check the variable's `scopes` entry in your Step 2 session token map before retrying.

