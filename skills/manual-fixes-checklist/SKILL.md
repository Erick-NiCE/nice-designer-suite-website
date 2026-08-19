---
name: manual-fixes-checklist
description: Produce the list of fixes a human still has to make after every auto-fixer has been run. Invoke when the user asks "what needs manual fixing", "what's left", "make a list of the manual fixes to get this to 100%", "what can't be auto-fixed", or similar. Runs a full audit, applies every automatic fixer in dry-run, then surfaces the delta — the issues still present — grouped and prioritized.
disable-model-invocation: false
---

# Manual-fixes checklist

Answer the question: *"What do I still have to do by hand to make this page 100% compliant?"* — by running every auto-fixer the plugin offers and reporting what survives.

## When to invoke

Any of:

- "What manual fixes are needed"
- "What can't be auto-fixed"
- "Make a list of the things I still need to do"
- "What's left after Apply All"
- "What blocks this from 100%"

Also invoke as the last step of any conversion flow when the user asks "am I done?" or "what's remaining?".

## Preflight

1. Call `list_targets`. Use whichever target is connected; if both, ask the user which page/file they want audited.
2. Call `get_selection_info` on the chosen target. If the user has a specific element/node selected, scope to it; otherwise scope to the full page/artboard. State the scope in the opening line of the output.

## Procedure

1. **Baseline audit** — call `run_full_audit` with `system: "lyra"` on the resolved target. Record the issue counts per domain as the *before* snapshot.
2. **Disclose filters** — read `report.filters` from the audit response and state plainly which filter toggles are active (e.g. mobile a11y hidden, contrast checks hidden). The manual-fixes list only reflects what the user has chosen to see.
3. **Dry-run every auto-fixer**. Call with `dryRun: true` to avoid mutating the page:
   - Chrome: `convert_page_to_lyra` (covers colors, text, spacing, radius, a11y one-click fixes).
   - Figma: `migrate_to_lyra` with every `apply*: true` and `dryRun: true`.
   Both tools return a delta showing what *would* be fixed.
4. **Compute remainder**. For each domain (colors, text, spacing, radius, components, a11y):
   - `remainder = baseline_count - would_fix_count`.
   - These are the issues that have no auto-fixer OR that the auto-fixer declined (low-confidence match, ambiguous).
5. **Re-audit is not required** in dry-run mode. Only run a real re-audit if the user asks to apply fixes first.

## Output

Heading: `## Manual fixes — <scope>` where scope is the selection name or "full page".

Then, a short prose line: *"After running every auto-fixer, N issues would remain. They need human judgement."*

Then grouped sections (omit any with zero remaining):

### Colors (N)
Bulleted list. Each bullet is one issue: `<selector/nodeName> — <raw value> — <why it survived>`. The "why" is inferred from the audit item: "no close token", "multiple candidate tokens", "semantic mismatch", etc.

### Text styles (N)
Same format.

### Spacing (N)
Same format.

### Components (N) — Figma only
Components that couldn't be auto-swapped, usually because the Lyra equivalent differs structurally. Include the target component name the user should swap to.

### Accessibility (N)
These are usually the longest list — contrast trade-offs that need copy changes, missing landmarks that need structural edits, images without alt text that need human authoring. For each issue include: element, issue type, suggested human action.

### Scope notes
If any filter was active during the audit, list it here so the user knows the checklist doesn't cover hidden issues.

## Follow-up offer

End with a single question: *"Want me to apply the auto-fixers now so these are the only issues left?"* — this is the natural next step if they haven't already.

## What NOT to do

- Don't call any fixer with `dryRun: false` — this is a reporting flow.
- Don't invent fixes. Every bullet comes from an audit issue's recorded metadata.
- Don't include issues the audit filters are hiding unless the user has explicitly asked to see them.
- Don't group by severity unless the user asks — grouping by domain matches how the fixer UI is organized.
