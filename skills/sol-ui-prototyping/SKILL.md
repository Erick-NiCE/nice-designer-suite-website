---
name: sol-ui-prototyping
description: Build a real, working coded prototype out of the actual SOL component library (React first, Angular where React has no component) and hold it to 100% SOL adherence, with every missing piece written down instead of faked. Use when the user wants something clickable/runnable on SOL: "build a working SOL prototype of X", "code this up in SOL", "live demo using the SOL components". Not for Lyra (use lyra-prototyping), not for the Suite's own look (use lynn-ui-prototyping), not a static wireframe.
---

# SOL UI prototyping

SOL is the NiCE CXone design system. Its real components live in the internal **SOL Storybook** (`na1.dev.nice-incontact.com/sol`, VPN) as an Angular library (`@niceltd/sol-angular`, selectors like `sol-button`) with a React counterpart. This skill builds a prototype from those components and nothing else.

| The work is | Use |
|---|---|
| A coded prototype on **SOL** | **this skill** |
| A coded prototype on **Lyra** | `lyra-prototyping` (the official one) |
| A page or tool in the Suite's own look | `lynn-ui-prototyping` |
| Converting an existing page or Figma file to SOL/Lyra | `lyra-visual-patterns` + the convert tools |

If the system is unclear, ask. SOL and Lyra share one Storybook and one component API (the seed's props are identical for both; only the theme differs), but a SOL build must stay on the SOL theme and SOL tokens throughout.

## What "100% adherence" means here

A prototype is at 100% when **every** one of these holds. If one cannot hold, that is not a failure to hide: it goes in `GAPS.md` (below) with the reason.

1. Every interactive or structural element that SOL has a component for **is** that component. No raw `<button>`, `<input>`, `<select>`, dialog, tab strip, menu, toast or tooltip.
2. Every prop and variant used exists in that component's reference file. No invented props, no removed legacy names (each file lists the removed ones under Migration notes).
3. Every color, type size, space and radius is a SOL token (`export_design_tokens({ system: 'sol' })`). No hex, no off-scale pixel value.
4. `run_full_audit({ target: 'chrome', system: 'sol' })` on the running prototype scores 100, or every remaining issue is explained in `GAPS.md`.
5. Nothing in the UI is a look-alike of a component SOL does not have. A missing component is a gap, not a drawing.

## The one rule that matters most

**Never hand-roll anything SOL already has.** Before writing a control:

1. Look it up in `references/component-index.md` (43 components, React availability, selectors).
2. Read `references/components/<Name>.md` before the first use in a build. It lists every real prop, its type, and the removed legacy names.
3. Use an existing prop or variant over restyling. Restyling a component's output to match a screenshot is the same bug as hard-coding a value.
4. If no component covers it, check `references/known-gaps.md`, then the live Storybook. If it is still missing, it is a gap: do not build a substitute.

Fetch files with `get_skill({ id: "sol-ui-prototyping", file: "references/components/Button.md" })`, or read `skills/sol-ui-prototyping/references/` in a checkout.

## Step 1: Framework (React first, Angular fallback)

Default to **React**. 24 of 43 SOL components have a React API. For the other 19 (`references/not-available.md` lists them), the choice is the user's, so say it plainly when a screen needs one:

- Keep the build React and list the component as a gap, or
- Agree a **mixed build** (Angular for that component only) and note it in `GAPS.md`.

Never silently swap in a different React component or a hand-built one to "cover" an Angular-only component.

## Step 2: Get the library

The package names and registry are internal and are **not** recorded in this repo, so do not guess them. In order:

1. Look in the user's project `package.json` and lockfile for a `@niceltd/` dependency and use that.
2. If there is none, ask the user for the React package name and registry (or a link to the SOL Storybook's install page). Do not invent one and do not run `npm install` on a guessed name.
3. Note the installed version in the prototype's README so a later build can tell if it drifted.

If the library cannot be installed from where you are (no VPN, no registry access), say so. A prototype built from look-alikes is not a SOL prototype; offer the Storybook-grounded wireframe path instead of faking it.

## Step 3: Build by the rules

Before writing open/close/select state around a component, find its real reference story in the Storybook (the doc URLs are in each component file) and copy that behavior contract exactly. Wiring that merely seems reasonable is how a correct component ends up behaving wrong.

- **Controlled vs uncontrolled:** read the component file for which props seed state once and which are live. Changing a seed-once prop later needs a remount.
- **Accessibility:** icon-only controls need `ariaLabel`. Use the component's own aria props; do not wrap them in your own roles.
- **Theme:** one SOL theme at the root, light or dark as the user asked. Do not mix SOL and Lyra surfaces on one screen.
- **Copy:** no em dashes. Use a hyphen or a colon.
- **Icons:** only through the SOL `Icon` component and its icon set, never emoji or an unrelated icon pack.

## Step 4: Audit and close the loop

1. `list_targets`, open the running prototype in Chrome, `select_page`.
2. `run_full_audit({ target: 'chrome', system: 'sol' })`. Read the gauge and the issue list.
3. Fix in **source**, never with `convert_*` / `apply_*` / `fix_*`: those patch the live DOM and a reload discards them.
4. Re-audit. Stop at 100, or after three passes with no improvement, and report what is left. `design-system-agent` has the cap and plateau rules written out; follow its loop mechanics with SOL as the system.

What the audit can and cannot see:
- **Covers:** colors, type, spacing, radius, accessibility.
- **Components in Angular builds:** detected, because they render `sol-*` custom elements.
- **Components in React builds:** **not detected**. React components render plain elements with no custom tag, so the audit cannot tell a SOL `Button` from a hand-rolled one. For a React build, rule 1 above is checked by you, by reading the source. Do the check: grep the JSX for `<button`, `<input`, `<select`, `<textarea`, `<dialog`, `role="tab"` and `role="menu"` and justify or replace every hit.

## GAPS.md: what is not available yet

Every prototype ships a `GAPS.md` next to its README. It is the honest list of where the build could not be 100% SOL, and it is the deliverable the design-system team can act on.

```md
# Gaps: <prototype name>

SOL version: <version>   Built: <date>

| Needed | Why SOL cannot do it | What the prototype does instead | Evidence |
|---|---|---|---|
| Stepper with branch states | No component; Wizard is linear only | Used Wizard, branch shown as copy | Storybook search "stepper" returned nothing |
```

Rules for it:
- One row per gap. Name the missing thing, not the screen.
- "What the prototype does instead" must be an honest SOL composition or a plainly marked placeholder, never an unlabeled look-alike.
- "Evidence" is where you looked (the reference file, the Storybook search), so the claim can be rechecked.
- Include Angular-only components used in a mixed build, and any prop the user asked for that the component file does not have.
- Tell the user the gap count at the end of the build, and surface the list. Do not bury it.

Start every build from `references/not-available.md` (generated, provable) and `references/known-gaps.md` (curated) so a known gap is declared up front, not discovered late.

## Library is read-only

Do not edit SOL source or a vendored copy. If a component's real API cannot do what is asked, say so, add it to `GAPS.md`, and either compose around it with real SOL parts or tell the user it needs the SOL team.

## Reference files

- `references/component-index.md`: every component, React availability, selector. Generated.
- `references/components/<Name>.md`: props, callbacks, reference stories, migration notes. Generated.
- `references/not-available.md`: React gaps and what the seed cannot tell you. Generated.
- `references/known-gaps.md`: curated list of what a CXone screen usually needs that SOL's component set does not have.

Regenerate the three generated items with `npm run gen:sol-refs` after the Storybook seed is re-exported.
