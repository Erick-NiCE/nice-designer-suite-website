---
name: claude-design-prompt
description: Turn audit results into a ready-to-paste prompt for Claude Design that redesigns or fixes a screen so it lands on Lyra (or SOL) tokens, real components and accessible contrast. Invoke when the user asks to "build a Claude Design prompt from the audit", "write a prompt to fix this in Claude Design", "turn these audit issues into a design brief", or wants the audit handed to a generative design tool instead of fixed in place. Read-only: runs audits, never converts or edits the page.
disable-model-invocation: false
---

# Claude Design prompt from audit results

Answer: *"The audit found a pile of problems. Give me a prompt I can paste into Claude Design so it produces the compliant version."*

The output is **one prompt**, written for someone who cannot see the audit. Claude Design has no access to this plugin, the page, or the node ids, so everything it needs has to be in the prompt text, in terms a designer would use.

## When to invoke

- "Build a Claude Design prompt from the audit"
- "Write a prompt that fixes this screen in Claude Design"
- "Turn these audit results into a design brief"
- "Hand the audit to Claude Design"

Works with `figma` or `chrome`. If both are connected, ask which. If the user wants the page fixed in place instead, this is the wrong skill: point them at `convert_page_to_lyra` / `migrate_to_lyra`.

## Preflight

1. `list_targets`. Pick the connected target.
2. `get_selection_info` for the scope. Name it in your opening line: *"Building a Claude Design prompt for '<scope>' against Lyra."*
3. Design system defaults to **Lyra**. Use SOL only if the user says so.
4. This skill is read-only. Do not call any `convert_*`, `fix_*`, `apply_*` or `migrate_*` tool.

## Gather (run in parallel)

- `run_full_audit` with the chosen system. Keep the compliance score: it is the "before" number.
- `audit_colors`, `audit_text_styles`, `audit_spacing`, `audit_radius`, `audit_accessibility`. These carry the per-issue detail the full audit summarizes.
- `export_design_tokens` for the system, so the prompt can name real token names and values.
- `screenshot_page` (Chrome) so you can describe what the screen is for. Never put the screenshot in the prompt text; tell the user to attach it themselves.
- `get_skill({ id: "lyra-visual-patterns" })` when the target is Lyra, so the prompt asks for what a correct Lyra screen looks like rather than inventing a style.

If the page is a CXone page, also consider `nice-product-knowledge` for the screen's real purpose. Skip it when the purpose is obvious.

## Distil the issues

Do not paste the issue list. Group it into the changes a designer would actually make, and drop anything that has no effect on the result.

1. **Exact token swaps.** Raw values that have an exact or near-exact token. Collapse repeats into one line per value: `#1A73E8 (used 14 times) -> color/action/primary`. This is the biggest and safest block.
2. **Values with no close token.** Do not guess a token. Say what the value is used for and ask Claude Design to choose the nearest semantic token and say which it chose.
3. **Type.** Off-scale sizes and weights, mapped to the nearest text style by role (heading, body, caption), not by pixel.
4. **Spacing and radius.** Off-scale values mapped to the nearest step. Mention only the patterns that repeat.
5. **Components.** Hand-built controls that should be the real Lyra component (button, input, select, table, tabs, chip). Name the component, not the node.
6. **Accessibility.** Failing contrast (give the foreground, background and ratio), missing labels, small targets, heading order. These are not optional: put them in their own block and mark them required.
7. **Needs a human.** Anything the audit cannot resolve (brand imagery, custom illustrations, copy). List it so the prompt does not ask Claude Design to fix it.

Rank blocks by score impact, accessibility first when it has critical items. Keep the top of each block, summarize the tail ("plus 9 more spacing values on the same pattern").

## Write the prompt

Output a single fenced block the user can copy, then a short note outside it. Use this shape, trimming sections that are empty:

```
Redesign <screen name / purpose in one line> so it fully uses the <Lyra|SOL> design system.

Context
- What the screen is for and who uses it: <one or two lines>.
- It currently scores <N>/100 against <system>. Target: <N+ or 95+>.
- Keep the layout, content and information hierarchy. Change styling, tokens and components only, unless a section below says otherwise.

Design system rules
- Use only <system> tokens. Never introduce a hex, px or font value that is not a token.
- Colors: <the handful of tokens that matter for this screen, with values>.
- Type: <text styles to use, by role>.
- Spacing and radius: <the scale steps in play>.
- Use the real <system> components, not look-alikes.

Changes, in priority order
1. <Accessibility fixes, required>
2. <Token swaps, one line per value>
3. <Type>
4. <Spacing and radius>
5. <Components>

Do not change
- <Needs-a-human items, brand assets, copy>

Done when
- Every color, size, space and radius maps to a token.
- Text and UI contrast meets WCAG AA (4.5:1 text, 3:1 UI).
- Interactive targets are at least 24px.
- You list any value you could not map to a token and why.
```

After the block, add:

- The scope and the "before" score, so the user can compare.
- One line telling them to attach the screenshot (or the Figma frame) when they paste.
- The offer: *"When Claude Design returns a result, load it in Chrome or Figma and I will re-run the audit so we can see the real score."* Do not promise a specific score.

## Rules

- Quote counts, ratios and scores exactly as the audit returned them. Never round a contrast ratio up to clear a threshold.
- Never invent a token name. Every token in the prompt must appear in the exported token set.
- No node ids, selectors, file names, URLs or hostnames in the prompt. Describe elements by role and visible label.
- Do not claim any fix has been applied. This skill only writes a brief.
- Keep the prompt under roughly 60 lines. A long prompt buries the accessibility items, which are the ones that matter most.
- No em dashes in the prompt or the notes.
