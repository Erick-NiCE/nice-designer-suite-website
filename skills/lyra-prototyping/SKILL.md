---
name: lyra-prototyping
description: The official NiCE Designer skill for coded prototypes. Builds a real, working prototype out of the actual Lyra components in the SOL/Lyra Storybook (the same components the plugin syncs into its Design System browser), React first and Angular where React has no component, and holds it to 100% Lyra adherence, audited live in Chrome, with every missing piece written down in GAPS.md instead of faked. Use it by default whenever the user wants something clickable or runnable on CXone's design system: "build a working prototype of X", "code this up in Lyra", "make a live demo I can click through", "prototype this screen with the real components". Not for SOL (use sol-ui-prototyping), not for the Suite's own look (use lynn-ui-prototyping), not for David Bauer's separate template library (lyra-ui-prototyping, only when the user asks for it by name), not a static wireframe.
---

# Lyra prototyping (official)

This is **the** skill for a coded prototype on Lyra. When someone asks for a working, clickable or runnable prototype of a CXone screen and does not name a different system, use this one.

Lyra is the current theme of the CXone design system. It is not a separate component library: Lyra and SOL share **one Storybook** (`na1.dev.nice-incontact.com/sol`, VPN) and **one component API**. The bundled Storybook seed proves it: all 43 components have identical props in both, and only the theme differs (every Lyra doc link carries `globals=theme:lyra`). So a Lyra prototype is built from the real SOL/Lyra components (`@niceltd/` packages) running in the Lyra theme, on Lyra tokens, and nothing else.

The component facts in `references/` are generated from that same seed, the one the plugin's Design System browser shows. They cannot drift from what the plugin knows.

| The work is | Use |
|---|---|
| A coded prototype on **Lyra** (the default) | **this skill** |
| A coded prototype on **SOL** | `sol-ui-prototyping` |
| A page or tool in the Suite's own look | `lynn-ui-prototyping` |
| A demo from David Bauer's `@nicecxone/lyra-ui` templates, asked for by name | `lyra-ui-prototyping` (Marketplace) |
| Keep an existing project audited and fixed until it hits a score | `design-system-agent` |
| Converting an existing page or Figma file to Lyra | `lyra-visual-patterns` + the convert tools |

David Bauer's library is a separate, unofficial package with its own components (avatars, charts, page templates). Its components are **not** in the Lyra Storybook, so they do not count toward Lyra adherence. Never mix them into a build from this skill. If the user wants one of them, that is a gap row (below) and their call.

## What "100% adherence" means here

A prototype is at 100% when **every** one of these holds. If one cannot hold, that is not a failure to hide: it goes in `GAPS.md` with the reason.

1. Every interactive or structural element that Lyra has a component for **is** that component. No raw `<button>`, `<input>`, `<select>`, `<textarea>`, dialog, tab strip, menu, toast or tooltip.
2. Every prop and variant used exists in that component's reference file. No invented props, and no removed legacy names (each file lists them under Migration notes).
3. Every color, type style, space and radius is a **Lyra** token, never a SOL one and never a literal. Get them with `export_design_tokens({ target: 'chrome', system: 'lyra', mode: 'light' })` (and `'dark'` if the prototype has a dark mode), or as CSS custom properties with `extract_token_css({ target: 'chrome', system: 'lyra' })`. No hex, no off-scale pixel value.
4. The whole prototype runs in the Lyra theme. No SOL-themed surface anywhere on screen.
5. `run_full_audit({ target: 'chrome', system: 'lyra' })` on the running prototype scores **100**, or every remaining issue is explained in `GAPS.md`.
6. Nothing in the UI is a look-alike of a component Lyra does not have. A missing component is a gap, not a drawing.

## The one rule that matters most

**Never hand-roll anything Lyra already has.** Before writing a control:

1. Look it up in `references/component-index.md` (43 components, React availability, Angular selectors).
2. Read `references/components/<Name>.md` before its first use in a build. It lists every real prop, its type, the reference stories, and the removed legacy names.
3. Use an existing prop or variant over restyling. Restyling a component's output to match a screenshot is the same bug as hard-coding a value.
4. If no component covers it, check `references/known-gaps.md`, then search the live Storybook. If it is still missing, it is a gap: do not build a substitute.

Fetch files with `get_skill({ id: "lyra-prototyping", file: "references/components/Button.md" })`, or read `skills/lyra-prototyping/references/` in a checkout.

If the Chrome extension is connected, two more sources line up with these files:

- `get_storybook_sync_status()` returns every component the user's install has synced from Storybook. That sync can be newer than the bundled seed. If it has a component or prop the reference files do not, the sync wins (and the seed is due a re-export). If it is empty, the install has only the seed, and the reference files are the full picture.
- The plugin's **Design System** tab (system set to LYRA) shows the same components with preview screenshots. Point the user there when they want to see a component before you use it.

## Step 1: Gather the brief

Ask in chat, or infer from what the user already said and confirm. Do not wait for a form.

- **What screen or flow.** One sentence on what it does and who uses it. `nice-product-knowledge` can ground the product context.
- **Light, dark or both.** Default to light.
- **Where it lives.** An existing project (look for `package.json` and an `@niceltd/` dependency) or a new one in a `Prototypes/<name>/` folder of the current project.

## Step 2: Framework (React first, Angular fallback)

Default to **React**. 24 of the 43 components have a React API. For the other 19 (`references/not-available.md` lists them) the choice is the user's, so say it plainly when a screen needs one:

- Keep the build React and list the component as a gap, or
- Agree a **mixed build** (Angular for that component only) and note it in `GAPS.md`.

Never silently swap in a different React component, or a hand-built one, to cover an Angular-only component.

## Step 3: Get the library and the theme

The package names, registry and theme switch are internal and are **not** recorded in this repo, so do not guess them. In order:

1. Look in the user's project `package.json` and lockfile for an `@niceltd/` dependency, and for how that project already turns on the Lyra theme. Reuse both.
2. If there is none, ask the user for the React package name and registry, or a link to the Storybook's install and theming pages. Do not invent a package name, do not run `npm install` on a guess, and do not guess how the Lyra theme is applied.
3. Write the installed version and how the Lyra theme is enabled into the prototype's `README.md`, so a later build can tell if it drifted.

If the library cannot be installed from where you are (no VPN, no registry access), say so. A prototype built from look-alikes is not a Lyra prototype. Offer to stop there rather than fake it.

## Step 4: Build by the rules

Before writing open/close/select state around a component, open its **reference stories** (listed in each component file) and copy that behavior contract exactly. Wiring that merely seems reasonable is how a correct component ends up behaving wrong.

- **Controlled vs uncontrolled:** read the component file for which props seed state once and which are live. Changing a seed-once prop later needs a remount.
- **Accessibility:** icon-only controls need `ariaLabel`. Use the component's own aria props; do not wrap it in your own roles.
- **Theme:** Lyra once, at the root. Light or dark as agreed. Never a SOL surface or a SOL token.
- **Layout:** only the Lyra spacing scale for gaps and padding, and only Lyra radius tokens. `lyra-visual-patterns` describes the canonical Lyra page anatomy (top bar, left rail, surfaces, tables, side panels): follow it for composition, using real components for every part of it.
- **Icons:** only through the `Icon` component and its icon set. No emoji, no other icon pack.
- **Copy:** real-sounding product copy, no lorem ipsum. No em dashes: use a hyphen or a colon.
- **Data:** realistic fake data in one module, never a real customer's.

## Step 5: Audit and close the loop

1. Start the prototype, then `list_targets`, open it in Chrome and `select_page`.
2. `run_full_audit({ target: 'chrome', system: 'lyra' })`. Read the gauge and the issue list.
3. Fix in **source**, never with `convert_*` / `apply_*` / `fix_*`. Those patch the live DOM and the next reload discards them.
4. Re-audit. Stop at **100**, or after three passes with no improvement, and report what is left. `design-system-agent` has the cap and plateau rules written out: follow its loop mechanics with Lyra as the system.
5. If the prototype has a dark mode, audit it in dark too (`dark-mode-parity` covers how).

What the audit can and cannot see:

- **Covers:** colors, type, spacing, radius, accessibility.
- **Components in Angular builds:** detected, because they render `sol-*` custom elements.
- **Components in React builds:** **not detected.** React components render plain elements with no custom tag, so the audit cannot tell a real `Button` from a hand-rolled one. For a React build, you check rule 1 by reading the source. Do the check: grep the JSX for `<button`, `<input`, `<select`, `<textarea`, `<dialog`, `<a `, `role="tab"`, `role="menu"`, `role="dialog"` and raw hex or `px` values in styles, and justify or replace every hit.

A score of 100 with a failed source check is not 100%. Report both.

## GAPS.md: what is not available yet

Every prototype ships a `GAPS.md` next to its `README.md`. It is the honest list of where the build could not be 100% Lyra, and it is the deliverable the design-system team can act on.

```md
# Gaps: <prototype name>

Lyra components version: <version>   Built: <date>   Audit: <score>/100 (light), <score>/100 (dark)

| Needed | Why Lyra cannot do it | What the prototype does instead | Evidence |
|---|---|---|---|
| Avatar with presence dot | No component in the 43 | Initials shown as Label text, marked as a placeholder | component-index.md; Storybook search "avatar" returned nothing |
```

Rules for it:

- One row per gap. Name the missing thing, not the screen.
- "What the prototype does instead" must be an honest Lyra composition or a plainly marked placeholder, never an unlabeled look-alike.
- "Evidence" is where you looked (the reference file, the Storybook search), so the claim can be rechecked.
- Include Angular-only components used in a mixed build, any prop the user asked for that the component file does not have, and anything taken from a non-Lyra library at the user's request.
- If there are no gaps, say so in the file. An empty table is a result, not an omission.
- Tell the user the gap count and the final audit score at the end of the build. Do not bury either.

Start every build from `references/not-available.md` (generated, provable) and `references/known-gaps.md` (curated), so a known gap is declared up front, not discovered late.

## The library is read-only

Do not edit Lyra/SOL source or a vendored copy, and do not override a component's internal styles. If a component's real API cannot do what is asked, say so, add it to `GAPS.md`, and either compose around it with real Lyra parts or tell the user it needs the design-system team.

## Done means

- The prototype runs, and the user knows how to start it.
- `README.md` (what it is, how to run it, package version, how Lyra is enabled) and `GAPS.md` are next to it.
- The final audit score, and the source check result for React builds, are reported in chat with the gap count.

## Reference files

- `references/component-index.md`: every component, React availability, Angular selector. Generated.
- `references/components/<Name>.md`: props, callbacks, reference stories (Lyra theme), migration notes. Generated.
- `references/not-available.md`: React gaps and what the seed cannot tell you. Generated.
- `references/known-gaps.md`: curated list of what a CXone screen usually needs that the Lyra component set does not have.

Regenerate the three generated items with `npm run gen:lyra-refs` after the Storybook seed is re-exported. Never hand-edit them.
