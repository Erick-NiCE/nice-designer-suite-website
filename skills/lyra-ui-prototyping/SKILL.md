---
name: lyra-ui-prototyping
description: Build a real, working coded prototype (React + Tailwind, or a self-contained HTML demo) out of the actual Lyra UI component library — not a static wireframe, not a Figma mockup. Use when the user wants something clickable/runnable that looks and behaves like a real CXone screen: "build a working prototype of X", "make me a live demo I can click through", "code this up with the design system", "spin up a quick app using our components". Third-party library by David Bauer (github.com/davidbauerjr991/lyra-ui) — ~95 components (primitives, charts, full page templates) built on Radix + Tailwind, with a live Storybook.
---

# Lyra UI prototyping

`@nicecxone/lyra-ui` is a real, versioned React component library for the **Lyra** design system — not a token reference or a Figma library, an actual `npm install`-able package with ~95 components (Custom Primitives, Headless Primitives, UI, Charts, and full page Templates for admin UIs, agent workspaces, data management, dashboards, forms). It's maintained by David Bauer outside this repo; treat it the same way you'd treat any external dependency — pull the latest rather than assuming what's in it.

Reach for this skill instead of hand-coding UI from scratch, and instead of `wireframe-generator` (which produces a deliberately unstyled structural wireframe), whenever the ask is for something that should actually **look and feel like real CXone product** — a live demo for a stakeholder, a coded exploration of a flow, a prototype to usability-test.

## The one rule that matters most

**Never hand-roll a button, menu, modal, or any other interactive element that the library already has.** This is the #1 rule in the library's own `CONTRIBUTING.md`, restated there because it's the single most common way a "close enough" prototype quietly stops looking like the real product. Before writing a single `<button>`, `<div role="option">`, or custom dropdown:

1. Check the **live Storybook** first — https://davidbauerjr991.github.io/lyra-ui/ — it's always current with `main` and is the authoritative component catalog (a hand-maintained list goes stale; don't keep one).
2. If something close-but-not-quite exists, use its real props (new variant, new size) rather than duplicating it.
3. Only build something new if no existing component covers it even with extra props, **and** it'll be reused in at least two places. Otherwise compose.

Concretely: any button-shaped control → `Button` / `ActionIconButton` (or a purpose-built atom like `FavoriteButton`, `KebabMenuButton`). Any dropdown/select/combobox/context menu → `Menu` (bare list) or `MenuRadix` (self-triggered). Any dialog with a backdrop/focus-trap/Escape → `Modal`. A chip or count badge → `Badge`. A side or inline panel → `SidePanel` / `InteriorPanel`. Never reach for raw Tailwind, a hex color, or a hand-copied class name where a token or component prop already covers it.

## Starting a build

Don't wait for a form. Gather what you need the same way you would for any other request — by asking directly in chat, or inferring it from what the user already said and confirming rather than re-asking:

- **Prototype name** — becomes the file name.
- **Type** — `Admin` (start from `AdminShell.stories.tsx`'s `WithPageHeader` story) or `Agent` (start from `AgentNextGenTemplate.stories.tsx`'s `WithPageHeader` story). Infer this from what's being built if it's obvious (a configuration/management screen → Admin; an agent-facing workspace screen → Agent) and only ask if it's genuinely unclear.
- **Product** — the exact string to set as the `appName` prop on `AppHeader` (top-left, next to the logo). If the user names a real product, use it as given; otherwise ask.

Once you have those three things, go straight into the "Getting the library" and "Deliverable & iteration" steps below yourself. There's no separate hand-off step: you're already the one building it in this chat.

**If the user would rather fill this out as a visual form instead of talking it through in chat**, point them at `create-lyra-prototype.html` in the root of David's repo (clone it, or note it's also linked from the repo's `README.md`) — but flag clearly that its generated prompt is written for **Claude Cowork or Claude Design specifically** (it says "paste into Claude Cowork chat," assumes a connected folder and a sandbox), not for this chat — so if they use it, they'd take the prompt it produces to one of those surfaces rather than pasting it back here.

## Getting the library

**`npm install github:davidbauerjr991/lyra-ui` does not work** — verified by actually running it. `dist/` is gitignored in the repo (confirmed: `git ls-files` shows zero tracked files under `dist/`), so a plain git-dependency install only pulls `package.json` + `README.md` (its `"files"` allowlist) and nothing runtime-usable. Don't tell a user to run that command, and don't rely on `@nicecxone/lyra-ui` being resolvable via bare `npm install` unless you've separately confirmed it's been published to a registry.

**The verified working path — clone and build it yourself:**

```bash
git clone https://github.com/davidbauerjr991/lyra-ui.git
cd lyra-ui
npm install
npm run build   # tsup — produces dist/index.js, dist/index.cjs, dist/styles/, dist/tailwind-preset.*
```

This produces real, working output (confirmed: 225 exports including `Button`, `Modal`, `SidePanel`, `Badge`, `AppHeader`, etc.). **One known, pre-existing gotcha**: `npm run build` will report a `DTS Build error` from two type errors in `admin-shell.tsx` (`Expected 1 arguments, but got 0`) — this is a real, already-known bug in the library itself (documented in its own `CLAUDE-HANDOFF.md`), not something you did wrong. The JS/CJS bundles still build successfully despite it; only the `.d.ts` type-declaration step fails. Don't chase it as your own bug, and don't let it block using the library.

From there, either:
- **Consume the built `dist/`** in a separate project via `npm link`, or by pointing your `package.json` dependency at the local `lyra-ui` folder (`"@nicecxone/lyra-ui": "file:../lyra-ui"`), then follow the README's setup (import `@nicecxone/lyra-ui/styles` once, add the Tailwind preset with `presets: [lyraPreset]`, include `node_modules/@nicecxone/lyra-ui/dist/**/*.js` in Tailwind's `content` globs).
- **Alias straight to `src/index.ts`** (skip the build step entirely) if your bundler supports it — this is the pattern the library's own real consumer app (`agent-next-gen-v2`) uses in practice: a Vite alias `@nicecxone/lyra-ui` → `../lyra-ui/src/index.ts`, no published package, the two projects just sit side by side. Faster to iterate with since there's no rebuild step between edits.
- **Quick, self-contained one-off demo** (no ongoing project, just a file to double-click): build a single bundled HTML file from the cloned repo the way its own `prototype-kit/` does. The gotcha that silently kills this path: the light `:root` and `[data-theme="dark"]` token blocks have equal CSS specificity, so if the compiled CSS ends up with the light block duplicated *after* the dark block, dark mode "works" (the toggle relabels) but the page never actually changes. Compile once from `src/storybook.css` (it already `@import`s the tokens) rather than concatenating a second copy, and verify there's exactly one `:root` block and exactly one `[data-theme="dark"]` block, in that order, before calling it done.

Whichever path: always re-clone or re-pull rather than assuming a cached copy is current — check `git ls-remote https://github.com/davidbauerjr991/lyra-ui.git main` against whatever you last built from if any time has passed.

## Deliverable & iteration

For a one-off self-contained prototype:

- One HTML file, all JS bundled and styles compiled/inlined, so it opens by double-click with nothing installed. Save it into a `Prototypes/` folder in the current project (create it if missing) and tell the user where it landed.
- Stamp the build with a `<meta name="lyra-ui-commit" content="<sha>">` tag (`git rev-parse HEAD` in your clone) — it's how anyone can tell later whether the prototype was built against a stale checkout.
- Verify dark mode actually works before calling it done, per the gotcha above — don't just eyeball it.
- On every later change: apply it to the same file, re-check any new component's `.stories.tsx` first, and overwrite in place. Don't re-generate or re-present the file each time — just tell the user to refresh.
- Library components stay read-only throughout. If a requested change would mean editing shared component source — especially anything under a "Custom Primitives" or "Headless Primitives" story title — don't; use the component's real props at the usage site, or tell the user it needs David (the design-system maintainer).

## Before wiring up any component's behavior

Using the right component isn't enough on its own — a prototype can `import` `SidePanel` correctly and still drift from what `SidePanel` actually means, purely in the `useState`/handler glue code written around it (open/close/pin/hover semantics). That drift is invisible in a diff of the component file, because the component never changed — only the call-site logic did.

**Before writing open/close/pin/hover/select state around a component, find its real reference usage first** — its own Storybook story, or the most established real consumer visible in the repo — and copy that behavior contract exactly (which transitions are allowed, which are guarded) rather than inventing what "seems reasonable" in isolation. See `references/composition-rules.md` for the worked incident this rule is drawn from, plus the canonical width/color reference tables (menu/popover width scale, channel-type colors) worth checking before guessing a value.

Also read the component's own `.stories.tsx` before using it for the first time in a build — it shows real prop combinations rather than ones you'd have to guess.

## What NOT to do

- Don't modify library source. Library components (`UI/`, `Templates/`, and anything under `Custom Primitives/` or `Headless Primitives/` in Storybook) are read-only from a prototyping session. If a component's real API doesn't support what's being asked, say so plainly rather than patching around it with hand-written CSS or a forked copy — restyling a component's output to match a screenshot (including `text-transform` tricks) is the same bug as hard-coding a value, just aimed at styling instead of content.
- Don't hard-code a value a component already computes correctly (a per-country phone placeholder, a computed label) just because a screenshot or mock shows something static.
- Don't invent a new dropdown/popover width — the library has a canonical scale (`references/composition-rules.md`) instead of picking an arbitrary pixel value.

## Attribution

Library and its authoring rules by **David Bauer** (github.com/davidbauerjr991/lyra-ui). This skill is a thin pointer to that live repo, not a fork — always prefer the repo's own current `CONTRIBUTING.md` and Storybook over anything cached here if they disagree.
