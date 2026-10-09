---
name: design-system-agent
description: Build or edit a web UI in this Claude Code project using only real SOL/Lyra Storybook components and tokens, then drive it to a target design-system compliance score by repeatedly auditing the live page through the NiCE Designer Chrome extension and fixing the source code — not the page — until the score holds. Invoke when the user asks to "build this to spec", "make this fully compliant with SOL/Lyra", "keep fixing this until the audit passes", "build a design agent that checks its own work", or wants Claude to self-verify a coded screen against the design system instead of eyeballing it.
disable-model-invocation: false
---

# Design system agent

A closed loop for writing UI code that's *provably* on-system, not just eyeballed: pick SOL or Lyra, build with real components only, then let the same audit the rest of this suite uses keep score and keep fixing until it holds.

This is a code-editing skill, not a page-polishing one. `convert_page_to_lyra`/`apply_single_*` (the plugin's own Chrome mutation tools) patch the *live DOM* — perfect for a demo, gone on next reload. A Claude Code project's actual fix has to land in the source files that render that DOM. This skill uses the plugin's audit tools purely as **eyes** (read-only scoring) and does every actual fix as a normal source-code edit.

## When to invoke

- "Build this screen to spec" / "make this fully compliant with SOL/Lyra"
- "Keep fixing this until the audit passes" / "loop until it's 100% compliant"
- "Only use real components, don't make up markup"
- Any request to self-verify a coded screen against the design system rather than trusting a first pass

Chrome only — this drives off the NiCE Designer **Chrome extension's** live-page audit (`nice-designer-mcp`, target `'chrome'`). It reads the project's own dev-server page rendered in the user's real Chrome (where the extension is installed and connected) — not Claude's own browser tool, and not a Figma file.

## Preflight — ask once, up front

Don't guess these; a wrong default here wastes an entire loop:

1. **SOL or Lyra?** If the project already imports one (e.g. `@nicecxone/lyra-ui`, or Angular `sol-*` elements), infer it and confirm rather than re-asking. Otherwise ask. Default to Lyra if the user has no preference — it's the actively-developed target and the only one with a full coded-prototyping path (`lyra-ui-prototyping`).
2. **Compliance target.** Default 100. A lower target (e.g. 90) is a legitimate answer if the user only cares about the mechanical majority and will hand-finish the rest themselves.
3. **Confirm the loop itself, once:** *"I'll audit the live page, fix the source, and re-audit automatically each round until we hit {target}% or the score stops improving (capped at 8 rounds) — I won't stop to ask after every round. Sound good?"* Get an explicit yes before round 1. This is the one approval that covers the whole loop — don't re-ask per round, and don't silently loop forever either (see the stopping rules below).
4. **Connection check** — `list_targets`. Require `chrome`. If missing, tell the user to open the project's dev server page in Chrome with the NiCE Designer extension installed and connected, then retry. `select_page({target:'chrome'})` to scope the whole page rather than a stale prior selection.
5. If building new UI (not just fixing existing): load `lyra-visual-patterns` first if targeting Lyra, same as any other Lyra conversion in this suite — it sets expectations before anything gets written.

## The component rule (this is the point of the skill)

**Never hand-roll a button, input, modal, menu, or any other element the design system already has a component for.** A page can pass every color/spacing/radius check and still not be "on-system" if it's built from styled `<div>`s pretending to be real components — the audit tools mostly can't catch that, so this rule is enforced by discipline, not by a score.

- **Lyra**: this is `lyra-ui-prototyping`'s own top rule — load that skill and follow it exactly (check its live Storybook, use real props, never restyle a component's own output). Don't duplicate its instructions here; it's the authority on Lyra component usage.
- **SOL**: there's no separate npm/coded library — SOL's real components are what's actually synced from Storybook into this plugin. Call `call_plugin({target:'chrome', message:{type:'GET_STORYBOOK_COMPONENTS'}})` to get the full synced list (name, Angular selector, React/Angular props, description, guidelines) and build from *that* — real prop names, real selector, not a guess. If a component you need isn't in the synced set, tell the user rather than inventing markup for it (the Design System page's "Sync with Storybook" — or the beta Sync control if they've turned that on — pulls the latest set).
- Either system: if genuinely nothing in the library covers what's needed, say so plainly and build the smallest reasonable custom piece rather than silently faking a look-alike of a real component.

## The loop

Each round:

1. **Audit** — `run_full_audit({target:'chrome', system})`. This is the same combined, per-category-weighted score (colors/text/spacing/radius/components/accessibility) the rest of the suite quotes — record the overall number and which categories are dragging it down.
2. **Stop check** — if score ≥ target, go to **Done**, below.
3. **Map issues to source.** The audit returns selectors/values, not file paths — there's no tool that closes that gap, so do it the way any refactor would: match the flagged class name, inline style, hardcoded hex/px value, or element role against the project's source (grep for the literal value or the nearest unique text/attribute), then confirm you found the right spot before editing. Prefer the fewest, most targeted edits that resolve the finding — a token/prop swap, not a rewrite.
4. **Fix in source**, following the component rule above for anything that's actually a missing-component issue rather than a wrong-value issue.
5. **Let it reload.** A dev server hot-reloads on save; if it doesn't appear to have, tell the user to confirm the page updated before continuing rather than auditing a stale DOM.
6. **Re-audit and compare** to the previous round's score.

### Stopping rules (don't loop forever)

- **Hit target** → stop, report success.
- **8 rounds reached without hitting target** → stop, report where it landed.
- **No score improvement for 2 consecutive rounds** → stop early even under the round cap — a flat score means the remaining issues need a human call (a value the audit can't map to a clean token, a component genuinely missing from the library), not another identical pass.
- Any round that also **drops** on categories it had already fixed → stop and flag it; don't keep compounding a regression.

On any of the three non-success stops, hand off what's left the way `manual-fixes-checklist` would: a short list of exactly what remains and why it wasn't auto-fixed, so the user knows what to do by hand rather than assuming the loop just gave up quietly.

## Output

After every round (brief, one line): `Round N: {score}% ({+/-delta} from last round) — {category still lagging, if any}`.

At the end, one short summary: starting score → final score, rounds taken, and (if stopped early) the specific remaining items with file:line pointers, not just "some things need manual attention."

## What NOT to do

- Don't apply fixes via the plugin's own mutation tools (`convert_colors`, `apply_single_*`, `convert_page_to_lyra`, `fix_accessibility`, …) as the actual fix — those change the rendered DOM, not the project's source, so the fix disappears on the next reload. Use them only if the user explicitly also wants a live-page preview of a change before it's written to source.
- Don't skip the up-front confirmation and start looping — the auto-apply behavior is opt-in per session, not a standing default.
- Don't keep looping past a plateau hoping the next round is different — flag it and stop.
- Don't hand-roll markup for something the real component library already covers, even under time pressure to hit the target score faster.
