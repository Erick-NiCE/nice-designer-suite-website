---
name: dark-mode-parity
description: Check whether a Chrome page works correctly in dark mode by applying dark-mode simulation and re-running the color audit to surface elements that break only in dark. Invoke when the user asks "does this work in dark mode", "check dark mode", "dark/light parity", or similar. Produces a diff of audit results between modes and a list of elements that need attention only in dark.
disable-model-invocation: false
---

# Dark-mode parity check

Answer: *"does this page work in dark mode, or only in light?"* — by running the color audit in both modes and surfacing the delta.

## When to invoke

Any of:

- "Does this work in dark mode"
- "Check dark mode"
- "Dark/light parity"
- "What breaks in dark mode"
- "Is this dark-mode ready"

Chrome-only. If only Figma is connected, explain that dark-mode simulation runs on live DOM and stop.

## Preflight

1. Call `list_targets`. Require `chrome`.
2. `get_selection_info` with `target: "chrome"` — scope to the current selection if one exists, otherwise full page.
3. Ensure the page is currently in its default (light) visual state before starting. If the user already has dark-mode simulation on from a previous session, explicitly turn it off first via `polish_page({darkMode: false})` so the baseline is clean.

## Procedure

1. **Light baseline** — `audit_colors` with `target: "chrome"`, `system: "lyra"`, `mode: "light"`. Record every flagged item (nodeId, property, rawHex, suggestedToken).
2. **Enable dark simulation** — `polish_page({darkMode: true})`. This flips the page's color scheme via the plugin's dark-mode polish.
3. **Dark audit** — `audit_colors` with `target: "chrome"`, `system: "lyra"`, `mode: "dark"`. Record flagged items.
4. **Restore** — `polish_page({darkMode: false})` so the user's page is back to its original state before we show results. Always run this, even if step 3 errored.
5. **Compute the three sets**:
   - **Broken in both** (intersection by `nodeId + property`): fundamental non-token color, not a mode issue. Already covered by normal audits.
   - **Broken only in dark**: the interesting set. These pass in light but fail in dark — usually hardcoded hex that doesn't adapt.
   - **Broken only in light**: rare but possible — fixed colors that happen to token-match in dark. Surface with low priority.

## Output

Heading: `## Dark-mode parity — <scope>`

One-line summary: *"Light baseline: L issues. Dark: D issues. Mode-specific drift: Mode-only count."*

### Breaks only in dark (N)
Table: `Element | Property | Value in light | Value in dark | Suggested fix`. The suggested fix is "use token <X>" if the audit found a near match, otherwise "hardcoded hex — replace with a dual-mode token".

### Breaks only in light (N)
Usually empty. Same table. Low priority.

### Breaks in both (N) — informational
Just a count. Link to the normal `audit_colors` output for details; these aren't dark-specific.

### Mode coverage
Single line: *"N elements have explicit dark-mode-aware tokens. M use single-mode hex."* Helps the user judge how close the page is to true mode-parity.

## Follow-up offer

If "breaks only in dark" is non-empty: *"Want me to apply the suggested token fixes? (That will run `convert_colors` in dark mode on just these elements.)"*

If nearly everything is hardcoded hex: *"Most of this page uses fixed colors. Consider a full Lyra conversion (`convert_page_to_lyra`) rather than spot fixes."*

## What NOT to do

- Don't leave dark-mode simulation on after the skill completes — always restore.
- Don't use `convert_mode` — that's Figma's artboard-duplication tool, not related to Chrome dark simulation.
- Don't audit text/spacing/radius in dark mode — they don't vary by mode. Stick to `audit_colors`.
- Don't claim the page "fails dark mode" if the only drift is sub-1-ΔE noise. Use the same ΔE threshold the audit uses.
