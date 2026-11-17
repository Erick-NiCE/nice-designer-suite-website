---
name: lyra-prototyping
description: The official NiCE Designer skill for coded prototypes. Builds a real, working prototype out of the actual Lyra components (their real markup, usage and CSS ship inside NiCE Designer with every release, captured from the SOL/Lyra Storybook, so nothing is installed and nothing is asked of the user), React first and Angular where React has no component, and holds it to 100% Lyra adherence, audited live in Chrome, with every missing piece written down in GAPS.md instead of faked. Use it by default whenever the user wants something clickable or runnable on CXone's design system: "build a working prototype of X", "code this up in Lyra", "make a live demo I can click through", "prototype this screen with the real components". Not for SOL (use sol-ui-prototyping), not for the Suite's own look (use lynn-ui-prototyping), not for David Bauer's separate template library (lyra-ui-prototyping, only when the user asks for it by name), not a static wireframe.
---

# Lyra prototyping (official)

## Rule zero: it is automatic, and it is NiCE Designer Suite

When anyone says "make me a Lyra prototype", "a coded prototype in Lyra", "a Lyra screen", "a Lyra demo" or anything like it, you do not ask how, where or with what. It is already decided, and there is exactly one thing you check with them: that a shareable Claude Design file plus a developer handoff package is okay (see `feature-handoff`: one yes or no, default yes, plus an optional Jira key). Never offer a menu of formats. Never change the live page in the browser as a deliverable. The defaults are React, Lyra and a completely new build:

1. **Use NiCE Designer Suite (NDS), Erick Mathews' tools.** Its component kit holds the real Lyra components. **Real components are the default for every element, always.** It is not an option you offer and not a question you ask.
2. **Start with the header.** The Lyra suite shell is the first thing anyone sees, and if it is missing or wrong, people stop looking at the rest. Before any content, call `get_component_kit({ patterns: ["app-shell"] })` and put it on the page: the 56px top bar (NiCE smile mark, product menu with a chevron, then Help, Apps, Notifications with a red count badge, and the avatar menu), the 232px left rail with the current page in the blue wash, and the single white panel with a breadcrumb, the page title and its actions. Set the product name, the nav items, the breadcrumb and the title for this screen. The rail can go for a page with no navigation (`nds-shell--no-rail`); the header never does. This applies to every form: project, diff, artifact, Claude Design file, hosted project. For a diff into an existing project that already has its own header, keep that one and say so.
3. Build the content inside the shell from the kit, label every element, audit your own work, fix it, then build the handoff package with `feature-handoff` (production React code on the real component API, manifest, acceptance gates, gap log, Jira ticket, review link), and only then tell the user it is done.
4. Keep the reply short and end with one line: "Used NiCE Designer: <the tools or skills you used>. Questions or issues: contact Erick Mathews."

The people asking are product people. They have access to the plugin and nothing else, and they may not know what a repo, package or registry is. Never ask them for one, never explain one, never use those words.

### It works the same in every form

The target changes where the files go and how you reach the running page. It never changes the rules. Infer the form from context (an open project, a pasted link, "in Claude Design", "on Vercel", "just change this file"). Ask only if you truly cannot tell, in one line.

| The work is | What you do | How you audit it |
|---|---|---|
| A Claude Code project | Build in the project; put the kit CSS, fonts and markup in as ordinary files | Run it, open it in Chrome (`switch_tab`), audit |
| Changes to existing files (a diff) | Apply kit components inside the existing files, change only what was asked, keep their structure | Audit the running page before and after, report both |
| A claude.ai artifact | One page plus `lyra-kit.css` and `fonts/` published beside it | Open the artifact link, audit |
| A Claude Design file | Edit it through its own editing flow (`claude-design-loop`) | Open the link, audit the design frame |
| A hosted project (Vercel and similar) | Add the kit files to the project and deploy; use the preview URL | Open the preview URL, audit |

100% match to the design system is the target in all of them. Where something cannot match, it is labeled (below), never hidden.

## Real, fallback, hand-built: always labeled

Three kinds of element exist. Only the first is ever the default.

- **REAL:** from the kit, markup unchanged, `sol-*` classes intact.
- **FALLBACK:** something the kit does not have, taken from the Claude design system library (Lyra) and restyled with Lyra tokens. Mark its outermost element `data-nds-source="fallback"`.
- **HAND-BUILT:** only when neither exists, so it is a gap. Mark it `data-nds-source="hand-built"`.

Never present a fallback or hand-built element as real. The audit counts all three and warns about any element that is neither real nor labeled. The final reply carries a ledger the user can read:

```
| Element | Kind | Source |
|---|---|---|
| Button, Tabs, Text Input, Card | Real | NiCE Designer kit |
| Status timeline | Fallback | Claude design system library (Lyra) |
| Heat map | Hand-built | Not in Lyra: a gap |
```

## References: ask when the kit is not enough

The kit may have a component but not the variant or state the screen needs ("only built in one aspect"), or not have the component at all. Then, and only then, ask the user **one line**: "Do you have a screenshot, a Claude Design file, an artifact or any link that shows how this should look?" Do not ask when the kit covers the need.

- **A screenshot:** look at it closely: structure, spacing, states, what is emphasized. Describe back what you read before relying on it.
- **A Claude Design file or artifact link:** read its files with the Artifact tool, or open it with `switch_tab` and use `screenshot_page`, `extract_dev_details` and `extract_all_css` to read the real DOM and styles.
- **Any other link:** open it the same way.

Use a reference to **infer** the missing variant or composition. You still build it from real kit components and Lyra tokens, and anything that is not a real component is labeled. A reference never replaces a real component that exists.

## Say who built it and who to contact

The last line of your reply, and as a comment in anything you write to a file:

> Used NiCE Designer: <the tools or skills you used>. Questions or issues: contact Erick Mathews.

In HTML: `<!-- Built with NiCE Designer Suite using real Lyra components. Issues: Erick Mathews -->`. In a README: the same sentence.


This is **the** skill for a coded prototype on Lyra. When someone asks for a working, clickable or runnable prototype of a CXone screen and does not name a different system, use this one.

Lyra is the current theme of the CXone design system. It is not a separate component library: Lyra and SOL share **one Storybook** and **one component API**. The bundled Storybook seed proves it: all 43 components have identical props in both, and only the theme differs (every Lyra doc link carries `globals=theme:lyra`). So a Lyra prototype is built from the real SOL/Lyra components, in the Lyra theme, on Lyra tokens, and nothing else. NiCE Designer ships those components with every release (`get_component_kit`, `references/kit/`), so building from them needs nothing from the user.

The component facts in `references/` are generated from that same seed, the one the plugin's Design System browser shows. They cannot drift from what the plugin knows.

| The work is | Use |
|---|---|
| A coded prototype on **Lyra** (the default) | **this skill** |
| A coded prototype on **SOL** | `sol-ui-prototyping` |
| A page or tool in the Suite's own look | `lynn-ui-prototyping` |
| A demo from David Bauer's `@nicecxone/lyra-ui` templates, asked for by name | `lyra-ui-prototyping` (Marketplace) |
| Keep an existing project audited and fixed until it hits a score | `design-system-agent` |
| A **Claude Design file or claude.ai artifact**, or a prototype that must be shareable by link, with the score reported and corrected automatically | `claude-design-loop` |
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

1. Look it up in the kit: `get_component_kit()` lists what exists, and `references/component-index.md` has the props.
2. Read `references/components/<Name>.md` before its first use in a build. It lists every real prop, its type, the reference stories, and the removed legacy names.
3. Use an existing prop or variant over restyling. Restyling a component's output to match a screenshot is the same bug as hard-coding a value.
4. If no component covers it, check `references/known-gaps.md`, then search the live Storybook. If it is still missing, it is a gap: do not build a substitute.

Fetch files with `get_skill({ id: "lyra-prototyping", file: "references/components/Button.md" })`, or read `skills/lyra-prototyping/references/` in a checkout.

If the Chrome extension is connected, two more sources line up with these files:

- `get_storybook_sync_status()` returns every component the user's install has synced from Storybook. That sync can be newer than the bundled seed. If it has a component or prop the reference files do not, the sync wins (and the seed is due a re-export). If it is empty, the install has only the seed, and the reference files are the full picture.
- The plugin's **Design System** tab (system set to LYRA) shows the same components with preview screenshots. Point the user there when they want to see a component before you use it.

## Step 0: Lay down the header and check it

1. `get_component_kit({ patterns: ["app-shell"] })`, write the CSS and fonts it gives you, and drop the markup in with the real product name, nav items, breadcrumb and page title for this screen. Mark the root `data-nds-source="fallback"` (it already is).
2. Pick the page type (list, detail, form, dashboard or settings) and read its template: `get_skill({ id: "lyra-prototyping", file: "references/templates/<type>-page.md" })`. Every new feature starts from the same skeleton, which is how features stay consistent with each other.
3. Open the page and **look at it** before you build anything else. The header must show, left to right: the NiCE smile mark, the product menu with a chevron, then Help, Apps, a bell with a red count badge, and the avatar with a chevron. Below it, the left rail with the current page in the blue wash, and one white panel with rounded corners on the grey shell surface. If any of that is missing, fix it now.
4. Run the audit once on the empty shell. The summary must say "App header: present". If it says "NO APP HEADER", nothing else matters yet.

## Step 1: Understand the screen (no questions about tooling)

Infer from what the user said. Ask only about the **product**, never about tooling, and only what you cannot reasonably assume.

- **What screen or flow.** One sentence on what it does and who uses it. `nice-product-knowledge` can ground the product context.
- **Light or dark.** Default to light.
- **Realistic content.** Real-sounding product copy and data, never lorem ipsum.

The form (project, diff, artifact, Claude Design, hosted) comes from context, see the table above. The audit loop is always on: build, audit, fix, re-audit, report. There is no "report only" mode unless the user asks for one.

## Step 2: Framework

The kit carries every component as the markup Storybook renders for **React**, so default to React for a runnable project, and plain HTML with a small script for a shareable file. There is no Angular-only gap to negotiate: if a component is not in the kit (`get_component_kit()` lists what is), it is a gap row, never a hand-drawn stand-in.

## Step 3: Get the real components (NiCE Designer is the source)

The real Lyra components ship inside NiCE Designer with every release, captured from the Storybook in the Lyra theme: the real markup with its class names, the usage code, and the exact CSS. You do not install anything, and you never ask the user for a package name, a registry, VPN or repo access. (A reference link for a missing variant is different: see References.)

1. `get_component_kit()` lists every component and the fallback patterns. `get_component_kit({ components: ["Button", "Tabs"] })` returns the markup, usage code and the CSS those components need, already pruned to the tokens they use. `references/kit/` holds the same facts for reading offline.
2. Put `data-theme="lyra"` on `<html>`, include the returned CSS (the Lyra font, which is Inter, comes with it), and use the markup **unchanged**, class names included. Do not restyle it and do not rename its `sol-*` classes: that is how the audit tells a real component from a look-alike.
3. Behavior (open and close, selection, validation, focus) is your own small script, following each component's usage code and `references/components/<Name>.md`. Each `get_component_kit` answer lists the `data-*` and `aria-*` attributes the component's CSS responds to (the active tab, an open panel): set those, or the component shows no state (a tab strip with no active tab). Say plainly, once, that the markup and styles are the real components' and the behavior is written for the prototype.
4. Asking for many components at once writes the markup to a file and returns the story names and variant classes, so read only the sections you need. Typography classes (`heading-xl` to `heading-xs`, `body-lg` to `body-sm`) are always included: use `heading-xl` for key figures.
5. A variant no story shows (a warning notification) is built from the nearest story's real markup with the class swapped, as the answer's "swap the class" line says. A need with no component in the kit follows the fallback ladder below and is labeled. Never draw a look-alike and call it real. `get_component_kit()` lists exactly what exists, and `references/kit/coverage.md` shows what the kit covers and what it does not.

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

1. Start the prototype, then `list_targets`, open it in the user's browser (Chrome or Edge) with `switch_tab({ url })` and `select_page`. After every change use `reload_tab` (it bypasses the cache); never open the same URL again in a new tab. When you are done, `close_tab` the tabs you opened.
2. `run_full_audit({ target: 'chrome', system: 'lyra' })`. Read the gauge and the issue list.
3. Fix in **source**, never with `convert_*` / `apply_*` / `fix_*`. Those patch the live DOM and the next reload discards them.
4. Re-audit. Stop at **100**, or after three passes with no improvement, and report what is left. `design-system-agent` has the cap and plateau rules written out: follow its loop mechanics with Lyra as the system.
5. If the prototype has a dark mode, audit it in dark too (`dark-mode-parity` covers how).

What the audit can and cannot see:

- **Covers:** colors, type, spacing, radius, accessibility, and which controls are real components.
- **Real components, in any build (Angular, React, artifact):** recognized by their `sol-*` class names or `sol-*` tags, the classes the kit's markup carries. A control inside `sol-*` markup counts as real. A hand-drawn button, input or tab has none of them, so it shows up as hand-built.
- **Does not cover:** layout quality and hierarchy, and whether the behavior is right. Those need a screenshot you have looked at.

The audit prints two extra lines next to the score. Read them and repeat them to the user:

- **Components**: how many controls sit inside real components and how many are hand-built, by kind. "NO real components found" means the page is hand-built, whatever the score says. Rebuild it from the kit, or call it "Lyra-styled, 0 real components".
- **Layout health**: truncated text, text under 11px, overlapping controls, horizontal overflow. Any of these means the design is not done, even at a high token score.

**A token score is not a verdict.** A hand-drawn page in grays with 8px padding can score high. Before calling a prototype ready, all three must hold: the score target, the Components line (real components found, or an honest "Lyra-styled, 0 real components" label), and a screenshot you have looked at (hierarchy, alignment, density, nothing clipped or crowded). Say which of the three you have not checked.

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

## Fallback ladder: when the kit does not have it

Work down this list, stop at the first rung that works, and label what you used:

1. **The kit, a different story or a CSS-only variant.** Every `get_component_kit` answer lists all of a component's story names (fetch one with `story: ["Warning"]`) and the variant classes the CSS defines but no story shows (add the class to the real markup, for example `sol-inline-notification-warning`).
2. **The kit plus a reference.** If the user gave a screenshot, artifact or link, use it to infer the missing variant, composed from real kit components and Lyra tokens.
3. **A NiCE Designer pattern.** `get_component_kit({ patterns: [...] })` ships built-in stand-ins for what the Storybook has no component for: `top-bar`, `side-nav`, `page-header`, `stat`, `status-pill`, `data-table`. Always available, token-only, marked `data-nds-source="fallback"`. Put real kit components inside them (Buttons in a page header, Icons in a nav (inline SVG inside the kit's `sol-icon-host`, since the kit's Icon markup is sprite-based), a Card around a stat).
4. **The Claude design system library (Lyra).** If the user's Claude account has a Lyra design system, look the component up there and restyle it with Lyra tokens. Mark it `data-nds-source="fallback"`.
5. **A gap.** Name it, mark any stand-in `data-nds-source="hand-built"`, and list it in the ledger.

A fallback or hand-built element never counts as real Lyra. In the ledger a pattern reads "Fallback: NiCE Designer pattern" and a library component reads "Fallback: Claude design system". It is a deliberate, listed exception, never a silent one.

## The library is read-only

Do not edit Lyra/SOL source or a vendored copy, and do not override a component's internal styles. If a component's real API cannot do what is asked, say so, add it to `GAPS.md`, and either compose around it with real Lyra parts or tell the user it needs the design-system team.

## Done means (and what you tell the user)

For a feature or prototype, the deliverable is the handoff package from `feature-handoff` with the Claude Design review link. The checks below are what you verify before you hand it over.

Do not call it done until all of these hold, and say which one does not:

1. **The header is there and right.** "App header: present" in the audit, and the screenshot shows the Lyra suite shell as described in Step 0.
2. **Real components by default.** The audit's Components line shows the real count, and every non-real element is labeled. Zero unlabeled elements.
3. **Score.** The target holds (100 where possible), with each remaining issue explained. An issue that comes from a real kit component's own CSS belongs to the design system, not to your page: say "kit-owned", do not try to fix it, and do not edit the component.
4. **Looks right.** Layout health is clean (no truncation, overlap, overflow, tiny text, lorem ipsum or sample copy) **and** you have looked at a screenshot of the finished page and judged hierarchy, alignment, density and spacing. Raw Storybook stories carry demo copy and demo layout: take the component, not the demo around it.
5. **It opens.** A shareable file opens from its link. A project runs with one obvious step. No terminal steps unless a project was asked for.

The final reply is SHORT. In this order:

1. The element ledger (Real / Fallback / Hand-built).
3. The audit result: score and the category numbers, the Components line, the Layout health line, what you looked at in the screenshot.
4. What is not perfect and why, including every fallback and gap.

For a project, `README.md` carries the attribution line and the kit version, and `GAPS.md` lists the gaps.

## Reference files

- `references/component-index.md`: every component, React availability, Angular selector. Generated.
- `references/components/<Name>.md`: props, callbacks, reference stories (Lyra theme), migration notes. Generated.
- `references/not-available.md`: React gaps and what the seed cannot tell you. Generated.
- `references/known-gaps.md`: curated list of what a CXone screen usually needs that the Lyra component set does not have.

Regenerate the three generated items with `npm run gen:lyra-refs` after the Storybook seed is re-exported. Never hand-edit them.
