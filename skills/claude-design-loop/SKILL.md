---
name: claude-design-loop
description: The automated Lyra loop for work that lives in Claude Design or a claude.ai artifact. Use it when the user says "build me a Lyra prototype" and wants it in Claude Design or an artifact, gives a claude.ai/artifact link, or asks to audit, fix or score a Claude Design file. It builds or opens the file, audits the design itself in Chrome (never Claude's own interface), reports the score and a category table in chat, corrects the file, re-audits, and repeats until a target holds. It offers options depending on what the user gave: audit only, a non-destructive "Lyra corrections" tweak, an in-place fix, or a brief for Claude Design. Also the right skill when a prototype should be both coded and shareable.
disable-model-invocation: false
---

# Claude Design and artifact loop

Claude Design files and claude.ai artifacts are a normal place for NiCE work to start and finish. People build screens there, share the link, and expect the design system score to follow. This skill makes that a closed, automatic loop: **build or open, audit the design, report, correct, re-audit, report.**

The goal is automation. Ask only what changes what you do next, offer a short list of options when the input leaves a real choice, and run the rest without stopping.

## Route first: what did the user give you?

| The user gave | Do this |
|---|---|
| "Build me a Lyra prototype" and nothing about where | Do not ask. Follow `lyra-prototyping` (real kit components, labeled, audited), as a shareable file unless context says otherwise |
| A claude.ai/artifact link, or "this Claude Design file" | Go to **Open and audit**, then offer the correction options |
| "Build it in Claude Design" or "make an artifact" | Go to **Build in Claude Design** |
| "Make it a real coded prototype" | Hand off to `lyra-prototyping`. Come back here only if they also want it shared as a Claude Design file |
| "Audit this, don't change anything" | Open and audit, report, stop |

**Always ask the user for the file link** when one is needed and none was given, and wait. Never guess which file, tab or artboard, even if a likely tab is already open.

### One question only: the deliverable

The default deliverable is a shareable Claude Design file plus the `feature-handoff` package. Ask once whether that is okay (default yes); never offer other formats. Do not change a live page as a deliverable.

### No questions about tooling

For "build me a Lyra prototype" the answer is already decided and is not asked: use NiCE Designer Suite, build from the real kit components, audit, correct, report. `lyra-prototyping` has the rules, this skill is the engine for any file that lives in Claude Design or an artifact. Never use words like repo, package, registry, npm or VPN with the user. The only thing you may ask for is a **file link** when an existing file must be audited or changed, and a **reference** when the kit is missing a variant.


## Real Lyra components: NiCE Designer is the source

NiCE Designer ships the real Lyra components with every release, captured from the Storybook in the Lyra theme. There is nothing for the user to install, find or provide, and you never ask them for a package, a link, a registry or access.

1. Call `get_component_kit()` with no arguments to list the components, then `get_component_kit({ components: [...] })` for the ones the screen needs. It returns the real markup (class names included), the usage code and exactly the CSS those components need.
2. **Header first:** put the Lyra suite shell on the page before anything else (`get_component_kit({ patterns: ["app-shell"] })`), as `lyra-prototyping` Step 0 says, and check the audit says "App header: present". Then build the screen from the kit markup **unchanged**: `data-theme="lyra"` on `<html>`, the returned CSS (Lyra Sans, which is Inter, is bundled with it), then the markup. Layout around the components uses Lyra tokens and the Lyra spacing scale. Behavior (open and close, selection, validation) is your own small script, following the usage code.
3. Do not restyle a component and do not rename its `sol-*` classes. That is how the audit recognizes a real component, and how the user can trust the claim.
4. A need with no component in the kit is a **gap**. Say so in the final reply and use the plugin's fallback entry or the Claude design system library, labeled. Do not draw a look-alike and call it Lyra.
5. Say honestly what this is: the real components' markup and styles, with behavior written for the prototype. It is not a runtime copy of the production library, and the final reply should say so in one line.

The audit's Components line then confirms it: `sol-*` markup found means real components, none means it is hand-built.

## Open and audit

1. `list_targets`. Chrome must be connected. If two Chrome sessions show, or tools look stale, use `browser-control` recovery (`restart_hub`).
2. `switch_tab({ url })` with the **full link** the user gave. It reports `claudeDesignPage: true` for Claude Design.
3. `run_full_audit({ target: 'chrome', system: 'lyra' })`. The audit covers the embedded design only. **Check the scope before trusting it:** the scope name should read like `Design · <file name>`. If the flagged nodes include `#hdr`, `base-ui-...`, `top-edge`, `dc-props-toggle` or `tb-scroll`, the audit hit Claude's own interface or its canvas wrapper, not the design. Say so, reload the tab, and retry. Do not report that number.
4. If the design is not rendered yet, wait and retry; do not audit a loading screen.
5. `screenshot_page` once, so you can see what the design is.

## Done means three things, not one

A high token score does not make a design good. A hand-drawn page in grays with 8px padding can score well. Do not say a design passes, is ready, or is Lyra until all three hold, and say which you did not check:

1. **Score:** the target holds (overall and per category).
2. **Components:** the audit's Components line. Real `sol-*` markup found means real components. "NO real components found" means the page is hand-built: say "Lyra-styled, 0 real components", or rebuild it from the kit.
3. **Looks right:** `layoutHealth` is clean (no truncated text, nothing under 11px, no overlapping controls, no horizontal overflow) **and** you have looked at a screenshot of this round and judged hierarchy, alignment, density and clipping yourself. For a real review of readiness, run `score_design_review`.

## Report (every round, same shape)

Post this in chat after each audit, kept short:

```
Lyra score: <overall>%  (was <previous>%)   Scope: <scope name>, <N> nodes
Colors <a>%  Text <b>%  Spacing <c>%  Radius <d>%  Accessibility <e>%
Biggest gaps: <top 3, with counts>
Components: <real / hand-built / not verified>   Layout: <clean, or the problems>   Looks right: <yes/no and why>
Changed this round: <one line>
```

- Quote counts and percentages exactly as the audit returned them. Never round a failing number up.
- The overall number is equal weight across every scored category, accessibility counted as one more. It is the same number the Audit panel shows when no filters are on. If the panel shows a different number, ask which filters are on before assuming a bug.
- Report categories with zero candidates as "not scored", not 100%.

## Correct

Offer these when the user has not chosen, recommend the first:

1. **A "Lyra corrections" tweak (recommended).** Add one switch to the file's own Tweaks panel. Off: the design looks exactly as before. On: Lyra values apply through a small script and CSS layer that restores every original value when it is switched off. Non-destructive, reviewable, and the user can compare before and after.
2. **Edit in place.** Change the file's colors, type, spacing and radius to Lyra tokens directly. Cleaner result, no undo. Only with the user's yes.
3. **A brief for Claude Design.** `claude-design-prompt`. Nothing in the file changes.

To edit the file: `Artifact` `action:"read"` on its url to get the type's own instructions (Migrated Design canvases are read through `project/compat.json`), edit copies of only the files that change, and publish them in one call. The type's rule not to verify afterwards covers incidental checks. A requested score loop is the user asking you to verify, so say once up front: "I'll re-audit after each change to report the score."

For big edits, or to keep the main conversation free, run the edit in a separate session and report back when it finishes.

### Correction rules

- **Real tokens only.** Get names and values from `export_design_tokens({ target: 'chrome', system: 'lyra' })`. Never invent a token name. Prefer semantic tokens (`fg/default`, `fg/secondary`, `fg/link`, `border/*`, `status/*`) over base palette tokens.
- **Map by role, not just by closeness.** The nearest hex can be the wrong token. A value used for body text maps to a text token even if a base color is a hair closer.
- **Spacing and radius snap to the scale.** Leave values above the scale and layout-critical gaps alone, and list them.
- **Type** to the Lyra scale and Inter. Keep line breaks: see regressions.
- **Accessibility is required, not optional.** Contrast 4.5:1 (3:1 at 24px and larger), labels on icon-only buttons, real `<button>`/`<a>`/`<input>` where the file allows, targets of at least 24px.
- **Fallback for missing components.** The kit first. If the kit has no such component: the plugin's fallback entry, then the Claude design system library, then a gap. Record the gap and label anything taken from outside the kit.

## Re-audit and stop

1. After publishing, the open tab takes the new version by itself. If the score looks unchanged, reload the tab and wait for the design to render, then audit again.
2. Run the audit, **then take a screenshot and look at it** before reporting. A score can rise while the design breaks.
3. Report in the shape above, with the delta.
4. Stop when the target holds, when two rounds in a row gain less than 2 points, or after 3 rounds. Then say what is left and why.

## What the audit gets wrong (check before you chase a number)

These were found on real Claude Design files. Verify each against the screenshot before fixing, and tell the user when you decide one is a false positive.

- **Icon fills and strokes.** SVG `fill` and `stroke` colors are matched against base color tokens, so an icon painted with a semantic text token's exact hex can still be flagged as off-token, often twice (fill and stroke). Count them separately and say so.
- **Contrast on transparent backgrounds.** A control with a transparent background can be scored against the wrong surface. Compare the reported ratio with what you can see before rewriting colors.
- **Regressions from correcting.** Switching to Inter and the Lyra sizes can truncate labels in fixed-width widgets ("Notepad" becoming "Notep..."). Look at the screenshot for clipped chips, headings and buttons. Fix by loosening the width, never by shrinking the text below the scale.
- **Scope slips.** Right after a page load the audit can briefly address Claude's canvas wrapper instead of the design (a score near 70% on about 100 nodes). A real design usually has far more nodes. Reload and retry when the node count looks small.
- **Filters.** The panel can have category, status or accessibility filters on. An MCP audit has none unless `get_audit_filters` says otherwise.

## Rules

- Never click send, publish, pay or delete controls inside a design without the user's yes (`browser-control`).
- Never describe a fix as applied until the re-audit shows it.
- Quote scores honestly. A prototype that scores 62 is a 62.
- Say what the build cannot do: behavior is written for the prototype, and components missing from the kit are gaps.
- Tell the user the final score, the number of remaining issues, and anything you left alone and why.
- No em dashes in anything you write for the user.
