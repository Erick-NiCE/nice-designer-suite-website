---
name: feature-handoff
description: Turns a product person's feature into a handoff a developer's own Claude can build, verify and merge. Use it as the last step of any "build me a Lyra prototype", "new feature" or "convert this page to Lyra" request. The package is production-API React code on the real Lyra components, a component manifest, integration points for third-party packages such as AG Grid and charts, acceptance gates a developer runs in one call, a gap log, a ready Jira ticket, and a shareable Claude Design file for review and comments. Defaults to React, Lyra and a completely new build, and never asks a non-developer for repos, stacks or setup.
disable-model-invocation: false
---

# Feature handoff

The whole workflow is: product shapes the feature, Claude generates completely new Lyra code, and a developer verifies it is consistent, wires in the third-party pieces and merges. For most developers the job is now "yes, Claude, do it". So the handoff is written for **their Claude** as much as for them: it must be something an agent can build from and a person can check in a few minutes.

## Defaults (never ask a non-developer about these)

- **React.** The agentic workspace is React. Generate React on the real SOL/Lyra component API.
- **Lyra.** Lyra only. Real components from the kit, Lyra tokens, the Lyra suite shell.
- **Completely new.** New things are new Lyra features that are consistent with each other. This holds even when the source is an old page in Angular, ASP.NET or anything else: the handoff is a new React Lyra feature that replaces it, plus a mapping of what the old page did.
- **Unknown repo.** Most people do not know which of the many repos a page lives in, and a PM cannot look it up. Ask once, in one short line, only for an existing page: "Do you happen to know which repo this lives in? If not, no problem." If they do not know, write "target repo: not known, developer places it" and move on. Never ask for a stack, a package, a branch or credentials. Never tell a PM to ask a developer.
- Write the defaults you assumed at the top of the handoff, so a developer can correct one in a sentence.

## The one question (and the Jira key)

Before building, ask this once, as a yes or no, and nothing else about format:

> I'll build this as a shareable Claude Design file you can send for comments, plus a package your developer's Claude can build from and check. Is that okay? And if you have a Jira ticket for it, paste the key and I'll put the link there.

Default to yes. Do not offer artifact, Claude Design, files or browser-preview as a menu: people pick something different. If they say no, ask what they want instead and do that.

**Never change the live page in the browser as a deliverable.** It disappears on refresh. A live preview happens only if the user specifically asks for it, and then a change file is always saved too, and it is the last option, not the first.

## The package

Everything below is produced for every feature. Keep each part short and checkable.

1. **Review link.** The shareable Claude Design file (see `claude-design-loop`), built from the real kit and the Lyra shell, audited. It is for comments and alignment, not for merging.
2. **Feature summary.** What it is, who uses it, the screens and flows, and the states that matter (empty, loading, error, no permission). Plain language.
3. **Component manifest.** A table: element, real component, props used, states, where it came from (Real, Fallback pattern, Gap). Anything that is not a real component is stated here.
4. **Production code.** React files for the feature, ready to drop into `src/features/<name>/`, written on the real component API (`get_component_api` gives the component names, live props and usage examples; never guess a prop). Lyra tokens come from CSS variables, never literals. Behavior is wired with stubs and clearly marked sample data. Mark every assumption `// CONFIRM:` so a developer or their Claude can find them. The real package is `@niceltd/sol-react` (verified from the Storybook API docs): each component imports from its own subpath with the SOL prefix, e.g. `import { SOLButton } from '@niceltd/sol-react/button';`, types from `@niceltd/sol-shared`. `get_component_api` prints the import line; never import from the bare package root. Angular is not generated.
5. **Integration points.** Where a third-party package is needed, name it, say why, and say how it connects to Lyra:
   - **Data grids:** the Lyra `Grid` component is an AG Grid wrapper, so a data table is `Grid` with AG Grid column definitions, not a custom table. State the columns, sorting, filtering, selection and whether data is client or server side.
   - **Charts and data visualization:** Lyra has no chart component. Name the library the feature needs (AG Charts if the grid is AG Grid, or the one the owner of the data chose), and say that colors must come from the design system's data-visualization palette. Lyra does not define one yet, so flag it as a gap for the design system team.
   - **Anything else** (maps, editors, partner SDKs): name it, what it must do, and the Lyra constraints around it (tokens, focus, contrast).
6. **Acceptance.** The gates a developer runs: open the running feature and call `check_acceptance`. Gates: header present, every non-real element labeled, real components used, score at least 95, no accessibility errors, layout clean. Then a short manual list: behaviors to confirm, states to try, keyboard path.
7. **Gap log.** What the design system lacks that this feature needed, what was used instead (labeled), and what the design system team should decide. Be exact.
8. **Jira ticket.** Ready-to-paste: title, description, acceptance criteria, links (review link, files), gaps, open questions. If the user gave a ticket key and a Jira connector is available, add the link as a comment on that ticket. Never create tickets unasked.
9. **A task file for the developer's Claude** (`CLAUDE-TASK.md`): where the files go, what to wire, what to confirm, and the instruction to keep the design system's classes and tokens as they are. It must include a **verification step**: confirm the imports resolve against the repo's installed `@niceltd/sol-react` version, run the repo's type-check (`tsc` or the project's equivalent) so every prop is checked against the real package's types, fix any mismatch against the real types (the real types win over the generated code), then run `check_acceptance` on the running feature. Written so "yes, Claude, do it" works.

## Delivery

- A **shareable handoff page** with the Artifact tool holding all of it (summary, manifest, the code in blocks, integration points, acceptance, gaps, ticket text), plus the Claude Design file link.
- **Files** when file tools exist: `handoff/<feature-name>/` with `HANDOFF.md`, `components.manifest.md`, `src/` (the React files), `ACCEPTANCE.md`, `GAPS.md`, `JIRA.md`, `CLAUDE-TASK.md`.

## For an existing page (a conversion)

It is a rebuild, not a restyle. Do it read-only: audit, screenshot and scroll the page with the extension tools and read what is on it. Add to the package:
- **What the old page does:** every control, column, filter, state and action you could see, in a table, with what replaces it in the new build.
- **Before measurements:** the audit numbers of the old page, so the developer can see what changed.
- **Open questions:** anything you could not see (permissions, hidden states, server behavior). Ask the PM only what a PM can answer.

## Honesty

- Say what is verified and what is not. The code is written against the real component API but has not been run against the production package: the developer's repo is where it is proven.
- The audit proves the prototype matches the design system. It does not prove behavior.
- Say plainly what is sample data and what is a stub.
- Last line only: "Used NiCE Designer: <the tools or skills you used>. Questions or issues: contact Erick Mathews."
- No em dashes in anything written for the user.
