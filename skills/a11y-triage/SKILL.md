---
name: a11y-triage
description: Rank accessibility issues on a page by likely user impact so the user knows where to start fixing. Invoke when the user asks "where do I start with a11y", "triage accessibility issues", "which a11y issues matter most", "I have hundreds of a11y issues — help me prioritize", or similar. Groups `audit_accessibility` results by severity × reach and produces a top-N action list instead of a raw issue dump.
disable-model-invocation: false
---

# Accessibility triage

Answer: *"I've got a pile of a11y issues — which ones actually matter, and where do I start?"* — by running the accessibility audit and ranking results by likely user impact rather than raw count.

## When to invoke

Any of:

- "Where do I start with a11y"
- "Triage accessibility issues"
- "Which a11y issues matter most"
- "Prioritize the accessibility fixes"
- "I've got 300 a11y issues, help me rank them"

Works with either `figma` or `chrome` target. Pick whichever is connected; if both, ask.

## Preflight

1. `list_targets`. Pick the connected target (ask if both).
2. `get_selection_info` — scope to selection if present, otherwise full page/artboard.
3. Opening line: *"Triaging accessibility issues on '<scope>'."*

## Extract

Call `audit_accessibility` on the chosen target. Each issue has at minimum: `nodeId`, `rule` (e.g. `color-contrast`, `missing-alt`, `label-missing`, `heading-order`), `severity` (`critical` / `serious` / `moderate` / `minor`), and location info.

## Score each issue

Compute an impact score per issue:

- **Severity weight**: critical=8, serious=4, moderate=2, minor=1.
- **Reach weight**: estimate how many users hit the element.
  - On Chrome: prefer elements above the fold, in the main landmark, or matching interactive selectors (`a, button, input, [role="button"]`). Weight = 3 for above-fold + interactive, 2 for above-fold or interactive, 1 otherwise.
  - On Figma: weight = 2 for layers in frames named like `Header`, `Hero`, `Nav`, `Primary CTA`; weight = 1 otherwise. (Position-on-artboard is a weak reach proxy in Figma, so don't over-use it.)
- **Rule-class multiplier**: keyboard-trap, missing-label-on-form-control, and contrast-below-3:1 each × 1.5 — these block users entirely rather than degrading experience.

Final score = `severity × reach × multiplier`. Round to int for display.

## Group and rank

Group issues by `rule`, since fixing one rule usually fixes many instances at once. For each rule group, report:

- Count of issues
- Sum of scores (group impact)
- Max single-issue score (worst offender)
- Top 3 example nodes (name or selector)

Sort rule groups by sum-of-scores desc. Keep only rule groups whose sum-of-scores ≥ 10 in the "prioritize" section; everything below goes into a "minor cleanup" collapsed tail.

## Output

Heading: `## Accessibility triage — <scope>`

One-line summary: *"T total issues across R rules. Top N rules account for P% of impact."*

### Start here (top 3–5 rule groups)
For each: a short paragraph, not a table. Format:

> **<rule>** — C instances, impact score S.
> What it means: <one-line plain-English explanation>.
> Why it's first: <critical-severity / blocks keyboard users / hits hero CTA / etc.>.
> Example nodes: `<name1>`, `<name2>`, `<name3>`.
> Fix pattern: <one-line generic remediation>.

### Next wave (rule groups 6–N)
Compact table: `Rule | Count | Impact | Example`. No prose.

### Minor cleanup (remaining rule groups)
Single line: *"K more rule groups with low impact (score < 10 each). Ask for the full list if you want to sweep them."*

### Coverage note
Single line on what was NOT checked — screen reader flow, motion-sensitivity, zoom-to-400%, cognitive load — so the user doesn't mistake a clean report for "fully accessible".

## Follow-up offer

End with: *"Want me to auto-fix the top rule group? (`fix_accessibility` handles contrast, missing labels, and landmark roles. Keyboard-trap and heading-order still need manual review.)"*

## What NOT to do

- Don't dump the full issue list. The whole point of this skill is triage; raw output is what `audit_accessibility` already gives.
- Don't score by severity alone — a critical issue on a hidden element matters less than a serious issue on the primary CTA. Reach matters.
- Don't auto-apply fixes. This skill ranks; `fix_accessibility` is a separate user-confirmed step.
- Don't claim a page is "accessible" because the score is low. This is heuristic triage, not certification. Say so explicitly in the coverage note.
- Don't merge rules across severity classes in the same row — keep `color-contrast` (serious) separate from `color-contrast-enhanced` (moderate) even though they look similar.
