
# Lyra Screen Assembler

Take the two half-finished pieces of a Lyra screen build — the ✅ Lyra-ready rows from `lyra-component-classifier` (which should be imported as component instances, not built) and the 🔧 Custom frames already constructed by `lyra-custom-component-builder` (bound to Lyra tokens) — and combine them into a single, correctly laid-out, production-ready screen. Neither upstream skill does this composition step on its own: the classifier only plans, and the custom builder deliberately skips Lyra-ready rows. This skill is what turns "a plan plus some custom pieces" into an actual finished screen.

## Where this fits in the chain

1. `ui-breakdown` — decomposes the design into a flat element list.
2. `lyra-component-classifier` — classifies each element ✅ Lyra-ready or 🔧 Custom.
3. `lyra-custom-component-builder` — builds only the 🔧 Custom rows, bound to Lyra tokens.
4. **`lyra-screen-assembler` (this skill)** — imports the ✅ Lyra-ready rows as component instances, places them alongside the 🔧 Custom frames from step 3 in the right structure, and validates the whole thing reads as one coherent screen.

If any earlier step hasn't run, do it (or ask the user to point you at its output) before assembling — this skill composes, it doesn't re-plan or re-classify from scratch.

## Prerequisites — load these first

Before any `use_figma` call, load (in this order):
1. `figma-use` — Plugin API rules, gotchas, error recovery.
2. `figma-generate-design` — screen-building workflow (wrapper-first, section-by-section).
3. `lyra-tokens` — the canonical Lyra token/variable/style reference. This skill resolves `lyra/spacing/6` and matches neighbor spacing to Lyra tokens (Steps 2 and 4, Frame specifications); `lyra-tokens` is the data source for all of that — never work from memory of the token list.

Pass `skillNames: "figma-use,figma-generate-design"` on every `use_figma` call.

## Inputs this skill needs

- The **component inventory table** from `lyra-component-classifier` (columns: #, Element, Location, Classification, Detail) — this is your map of what goes where and in what order.
- The **already-built custom frames/nodes** from `lyra-custom-component-builder`, identified by node ID or name in the Figma file (ask for these if not already known from the current conversation — a quick `get_metadata` on the working frame will surface them by name).
- The Lyra library key (`get_libraries`) if not already resolved earlier in the conversation.
- **`baseMode`** — an explicit parameter passed in by `edith` (or set by the user directly when this skill is invoked standalone). One of:
  - `"template"` — duplicate the starting frame at `https://www.figma.com/design/qyCq4jUOrpYcpHhpNCdgA5/Lyra-Foundations--V1-?node-id=17702-8061` (fileKey `qyCq4jUOrpYcpHhpNCdgA5`, nodeId `17702-8061`) into the target file and build into that duplicate. **This skill is the single source of truth for the template's location** — callers (including `edith`) pass only `baseMode`, never a node ID. If the template frame ever moves, update the reference here and nowhere else.
  - `"blank"` — create a fresh 1920 × 1080 frame from scratch (the original default behavior of this skill).

  If `baseMode` isn't supplied by the caller, do not guess — ask the user which mode to use before proceeding to Step 2.

If the custom pieces haven't actually been built yet, tell the user and offer to hand off to `lyra-custom-component-builder` first — assembling around placeholders defeats the point.

### Handling `baseMode: "template"`

When `baseMode` is `"template"`:

1. Resolve the template node via `get_design_context` or `get_metadata` on fileKey `qyCq4jUOrpYcpHhpNCdgA5`, nodeId `17702-8061`. Confirm the node type and dimensions before duplicating.
2. Duplicate/copy that node into the **target file** (the file established during EDITH's Stage 0 intake, or the file the user is working in if this skill is run standalone) — never build directly inside the Lyra Foundations library file itself.
3. Treat the duplicated frame as the top-level screen frame for Step 2 onward. Verify it resizes/conforms to the 1920 × 1080 requirement below — if the template node isn't already 1920 × 1080, resize it and reassert FIXED sizing per the Frame specifications section; do not skip this check just because it came from a template.
4. Any existing chrome/content already present in the template (shell, top bar, sidebar, placeholder slots) becomes the structure you place Lyra-ready and custom components into — reconcile it against the inventory table in Step 1 rather than discarding it and starting over.
5. If the duplication fails (node not found, wrong file, permissions), stop and tell the user — do not silently fall back to `"blank"` mode.

When `baseMode` is `"blank"`, proceed exactly as documented in Step 2 below (create a fresh frame, no template duplication).

## Frame specifications — MANDATORY

These two rules are not negotiable and not defaults to be overridden by what the source design happens to measure. Apply them on every screen you assemble.

### Scope: desktop web only

This skill assembles **desktop web screens only**. If the source design is a mobile or tablet layout (portrait aspect ratio, phone-width viewport ~320–480px, tablet ~768–1024px portrait, native mobile UI chrome like status bars or bottom tab bars), **stop before Step 2 and ask the user** how they want to proceed. Do not scale a mobile layout to fit 1920 × 1080 — a stretched mobile design is not a desktop screen, and silently producing one wastes the whole build. Offer the user the honest options: provide a desktop version of the design, or acknowledge this screen is out of scope for the assembler as it stands. Only continue once the user has explicitly chosen.

### 1. The top-level screen frame is 1920 × 1080

Every screen frame this skill creates is exactly **1920 wide × 1080 tall**.

- Set explicit dimensions: `frame.resize(1920, 1080)`. Do not let auto-layout hug determine the top-level size.
- If the frame has auto-layout, set both `layoutSizingHorizontal` and `layoutSizingVertical` to `"FIXED"` after resizing — auto-layout will otherwise silently re-hug the frame and undo it.
- If the source design is a **desktop layout** captured at a different width (1440, 1512, an arbitrary browser crop), still build at 1920 × 1080 and **scale the layout to fit** rather than resizing the frame to the source. Say so in your Step 6 report: *"Source was 1440 wide; built at 1920 × 1080 per the standard, content re-proportioned to fit."* (Mobile/tablet sources are not re-proportioned — they hit the desktop-only stop above.)
- If content genuinely exceeds 1080 tall (a long scrolling page), keep the frame at 1920 × 1080 and set `frame.clipsContent = true`, with the overflow handled as scroll content — do not stretch the frame taller. Mention the overflow in the report.
- Verify with `get_metadata` before declaring done. A frame that reports anything other than 1920 × 1080 is a failure, not a rounding detail.

### 2. The Shell content frame gets 24px padding on all four sides

Inside the shell (the Lyra `Content - shell` region, or whatever container holds the page content inside `Shell Top Bar` / `Shell Sidebar`), the content frame carries **24px padding on all four sides**. No exceptions, no asymmetric variants, no zero-padding "because the card already has its own padding."

**24px is `lyra/spacing/6`.** Use that token — it is the correct one, don't go hunting for another.

- Resolve `lyra/spacing/6` via `search_design_system` scoped to the Lyra `libraryKey`, in the `Semantic Sizes` collection, then bind all four sides:

  ```js
  // spacing6Var = the resolved `lyra/spacing/6` variable (24px)
  for (const side of ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]) {
    contentFrame.setBoundVariable(side, spacing6Var);
  }
  ```

- **Do not hardcode `paddingTop = 24`.** A raw literal here violates the Lyra token rule that governs this whole chain — even though the number is right, an unbound value won't follow the design system if the scale changes.
- Resolve the token fresh per file. Variable keys are per-library-version; never reuse a key from a previous session or paste one from this doc.
- If `lyra/spacing/6` doesn't resolve in the target file, stop and tell the user — the Lyra library probably isn't properly added. Don't fall back to a literal or substitute a neighbouring token.
- This padding lives on the content frame *inside* the shell, not on the 1920 × 1080 screen frame itself. The shell chrome (top bar, sidebar) sits flush to the screen frame edges; only the content region is inset.
- **Template mode:** if the duplicated template's content frame already carries padding — bound to a different token, or as raw literals — rebind all four sides to `lyra/spacing/6` anyway. The template's existing values do not override this rule; verify the binding in Step 5 the same as for a blank build.
- Applies whether the content region is a single custom frame, an auto-layout stack of sections, or a Lyra `Content - shell` instance you've parented children into.

## Why composition is its own step

Importing a Lyra component instance and hand-building a token-bound custom frame use different Plugin API calls and different validation concerns (instance overrides vs. bound variables). Doing both kinds of work interleaved, node by node, in the middle of a single build script is how rows get missed or duplicated. It's more reliable to treat "get every Lyra-ready row imported and positioned" as its own pass, "get every custom row placed" as an already-done pass, and this skill's job as making the two passes agree on one shared layout — same coordinate space, same auto-layout structure, same reading order top-to-bottom as the original design.

## Required workflow

### Step 1 — Reconcile the two inputs against the inventory table

Walk the full inventory table from the classifier, row by row, and mark each row as one of:
- **Lyra-ready, not yet placed** — needs importing this session.
- **Custom, already built** — locate its node ID from the custom-builder's output/file, note its position.
- **Missing** — neither imported nor built yet; flag it, don't silently skip it.

This reconciliation pass is what catches the most common failure mode: a row the classifier called Lyra-ready quietly never got imported because everyone assumed "someone else" would place it.

### Step 2 — Create the screen frame and determine the target structure

Branch on `baseMode`:
- **`"template"`** — duplicate the template frame (fileKey `qyCq4jUOrpYcpHhpNCdgA5`, nodeId `17702-8061`) into the target file per "Handling `baseMode: 'template'`" above, then verify/enforce 1920 × 1080 on the duplicate.
- **`"blank"`** — create a fresh top-level screen frame at **1920 × 1080** per the Frame specifications above.

Do this first, before placing anything, so every subsequent node is parented into a correctly-sized container rather than repositioned later.

Then decide the frame hierarchy the finished screen needs (screen frame → shell chrome → content frame (`lyra/spacing/6` padding all sides) → section containers → rows/groups → individual components), using the original design's layout as the reference — a screenshot or the `ui-breakdown` output is useful here if the arrangement isn't obvious from the inventory table alone. Where a custom frame from step 3 of the previous skill already represents a whole section (e.g. a card container), treat it as a slot to place Lyra-ready components *into*, not something to rebuild around.

### Step 3 — Import Lyra-ready components into place

For each "Lyra-ready, not yet placed" row:
1. Resolve the component key via `search_design_system` scoped to the Lyra `libraryKey` (from `get_libraries`), matching on the component name and variant props already recorded in the classifier's Detail column.
2. Import an instance (`figma.importComponentByKeyAsync` or the plugin API's create-instance call surfaced in `figma-use`) and set the variant properties called out in Detail.
3. Parent it into the correct location in the structure from Step 2 — inside the relevant custom container if one exists, or directly into the section frame otherwise.
4. Set instance-level content overrides (button label text, input placeholder, etc.) from the original design content, using the canonical text-edit recipe from `figma-use` for any text layers inside the instance.

Batch independent imports in parallel searches, but place nodes into the tree one section at a time (per `figma-generate-design`'s incremental-build guidance) so a mistake in one section doesn't corrupt sibling sections.

### Step 4 — Merge with the custom frames

Move or re-parent the already-built custom nodes into the same structure so the whole screen lives under one top-level frame. Check, section by section:
- Spacing between a custom frame and its neighboring Lyra instances matches the Lyra spacing token used elsewhere in that section (don't leave a custom frame's gap as a stray literal just because it now sits next to an instance).
- Auto-layout direction/alignment on any new parent frame you create to hold both kinds of children is set deliberately, not left at Figma's default.
- Re-parenting into an auto-layout frame can resize the screen frame. Re-assert 1920 × 1080 and the FIXED sizing after the last merge.

### Step 5 — Validate the composed screen

Two tool calls, not four:

1. **One `get_screenshot`** of the full top-level frame — compare against the original design (or `ui-breakdown` description) for structural fidelity: right sections, right order, nothing overlapping or missing.
2. **One `get_metadata`** on the top-level frame (deep enough to include the shell content frame and all placed children), then check its single response against all three criteria:
   - Every row from the classifier's inventory table has a corresponding node — cross off your Step 1 reconciliation list.
   - The screen frame reports **exactly 1920 × 1080**.
   - The shell content frame reports **24 padding on all four sides, bound to `lyra/spacing/6`** — not raw literals.

Then spot-check (from the same two outputs — no extra calls) that no Lyra-ready row got hand-drawn instead of imported: an imported row appears as an `INSTANCE` node, a hand-drawn one as a plain `FRAME`/vector. If found, that means the classification or an earlier build step went off track — flag it rather than leaving it.

### Step 6 — Report back

Give the user a short summary table: total rows from the inventory, how many were imported this session, how many were already-built custom pieces merged in, and any rows still flagged as missing. Confirm the frame is 1920 × 1080 and note any re-proportioning or content overflow.

**If invoked from `edith`:** stop here — hand the report back to the pipeline. `edith` runs its own screen review (Gate 5) and prototype wiring (Stage 5); duplicating those offers from inside this skill creates competing prompts.

**If invoked standalone**, stop after the report. Do not offer follow-ups.

## Worked example (miniature)

Classifier inventory, 3 rows:

| # | Element | Location | Classification | Detail |
|---|---|---|---|---|
| 1 | Top bar | screen top | ✅ Lyra-ready | `Shell Top Bar`, variant=default |
| 2 | Metric card | content, left | 🔧 Custom | built by custom-builder as node `78:12` |
| 3 | Primary button | inside metric card footer | ✅ Lyra-ready | `Button`, variant=primary/md, label "View report" |

- **Step 1:** rows 1 and 3 → Lyra-ready, not yet placed. Row 2 → custom, already built at `78:12`. Nothing missing.
- **Step 2:** `baseMode: "blank"` → new 1920 × 1080 FIXED frame → shell chrome → content frame, all four padding sides bound to `lyra/spacing/6`.
- **Step 3:** resolve `Shell Top Bar` and `Button` via `search_design_system`; import both as instances. Top bar parents into shell chrome; Button parents into `78:12`'s footer slot with its label override set to "View report".
- **Step 4:** re-parent `78:12` into the content frame; re-assert 1920 × 1080 FIXED after auto-layout settles.
- **Step 5:** one `get_screenshot` + one `get_metadata`. All 3 rows have nodes; frame is 1920 × 1080; padding bound to `lyra/spacing/6`; Button reports as `INSTANCE`, not a hand-drawn frame.
- **Step 6:** report — 3 rows total, 2 imported this session, 1 custom merged, 0 missing.

## Validation checklist (run before declaring done)

- [ ] Top-level screen frame is **exactly 1920 × 1080**, confirmed via `get_metadata`, with fixed (not hugging) sizing.
- [ ] Shell content frame has **24px padding on all four sides**, bound to `lyra/spacing/6` — no raw literals.
- [ ] Every row in the classifier's inventory table is accounted for (imported, merged, or explicitly flagged as missing) — none silently dropped.
- [ ] No ✅ Lyra-ready row was hand-built instead of imported as a component instance.
- [ ] All custom frames from `lyra-custom-component-builder` are re-parented into the single top-level screen frame, not left floating separately on the canvas.
- [ ] Spacing/alignment between custom and Lyra-instance neighbors uses Lyra tokens, not ad-hoc gaps introduced during merging.
- [ ] Final screenshot matches the original design's structure and reading order.
- [ ] Summary report (Step 6) delivered to the user.

## Error recovery

Follow `figma-use`'s error-recovery guidance: on any `use_figma` error, stop, read the message, fix, retry — scripts are atomic so nothing partial is left behind. If an instance import fails to resolve variant props, re-run `search_design_system` on that specific component to confirm the variant name/value spelling before retrying, rather than guessing at the API shape.

