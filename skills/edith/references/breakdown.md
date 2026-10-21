
# UI Breakdown

Decompose any UI input into the five levels of atomic design and present the result as a hierarchical inventory. This is about structure, not implementation — the goal is a component map the user can hand to a designer, engineer, or use to plan a component library.

## The five levels (Brad Frost's atomic design)

Keep these definitions front of mind while triaging elements — the boundary between levels is judgment, not a strict rule, and the "why" matters more than memorizing the labels:

- **Atoms** — the smallest indivisible UI elements that can't be broken down further without losing their function. A single button, an input field, a label, an icon, a checkbox, a color swatch, a typographic style. Atoms are context-free; they don't know what page they're on.
- **Molecules** — small groups of atoms functioning together as a single unit. A search bar (input + button), a form field (label + input + helper text), a labeled toggle. A molecule should do one job.
- **Organisms** — relatively complex, distinct sections of an interface composed of molecules and/or atoms. A site header (logo + nav + search bar), a product card grid, a comment thread, a filter sidebar. Organisms are often reusable across pages but are more specific and identifiable than molecules.
- **Templates** — page-level layouts that arrange organisms into a skeleton, showing structure without real content (placeholder/wireframe level). Think of this as "where things sit" rather than "what's in them."
- **Pages** — a specific instance of a template populated with real content. This is what the user is actually looking at — the concrete screen or screenshot itself.

Most breakdown requests only need atoms through organisms called out explicitly, since templates and pages are usually just "the whole input you were given." Still mention where the templates/page level fits so the hierarchy is complete, but don't force artificial templates when there's only one page in view.

## Workflow

1. **Get the input in front of you.**
   - Text prompt describing a screen: work from the description directly.
   - Screenshot: view the image directly (already in context if uploaded) — look closely at spacing, grouping, and repetition to infer where one component ends and another begins.
   - Figma link: use the Figma MCP tools (load the `figma-use` / design-context skill first per its instructions) to pull the actual node structure and screenshot rather than guessing from the URL alone. Real node names and hierarchy from Figma are far more reliable than visual inference alone.
   - HTML/live-site link: fetch the page (web_fetch, or Claude in Chrome if the page is client-rendered) and inspect the actual DOM structure — repeated markup patterns (e.g. `.card` divs) are strong signals of molecule/organism boundaries.

2. **Identify atoms first, bottom-up.** List every distinct smallest-unit element you can find: buttons, inputs, icons, labels, avatars, badges, dividers, typography styles. Don't skip visually minor ones (helper text, tooltips) — they're still atoms if they're indivisible and reused.

3. **Group atoms into molecules.** Look for atoms that only make sense together and always appear together — a magnifying-glass icon that's meaningless without its input field is part of the same molecule, not a standalone atom.

4. **Group molecules (and stray atoms) into organisms.** These are the named, recognizable sections a person would refer to by a single word: "header," "hero," "pricing table," "footer," "nav sidebar."

5. **Note the template/page level briefly** — how the organisms are arranged spatially (e.g. "header top, sidebar left, main content + organisms stacked center, footer bottom").

6. **Present the final list**, grouped by level, in this format:

   ```
   ## Atoms
   - Element name — one-line description

   ## Molecules
   - Molecule name — composed of: [atom, atom] — one-line description

   ## Organisms
   - Organism name — composed of: [molecule/atom, ...] — one-line description

   ## Template / Page structure
   - Brief description of how organisms are arranged
   ```

   Keep descriptions to one line each — this is an inventory, not an essay. If an element repeats many times (e.g. 12 product cards), list it once and note the repetition count rather than listing duplicates.

## Things to watch for

- **Don't over-atomize.** A "primary button" is an atom even though it technically has a label (text) inside it — decomposing every piece of visible text into its own atom produces a useless, bloated list. Use judgment: if two things are never separated in practice, they're one atom, not two.
- **Ambiguous cases are normal.** A search bar could arguably be a molecule (input + button) or, if it includes autocomplete suggestions and filters, an organism. State your reasoning briefly if a classification is a judgment call rather than silently picking one.
- **Screenshots and Figma files often contain more than one screen/page.** Call this out if so, and either ask which one to focus on or break down each separately if the user seems to want the full set.
- **This skill is architecture-only.** It does not map elements onto any specific design system (e.g. Lyra) — that mapping is done downstream by a classifier (see below).

## Handoff format: flat element list for design-system classifiers

Skills like `lyra-component-classifier` don't consume the atoms/molecules/organisms hierarchy directly — they need a **flat, per-element list** with a location, since an "organism" in atomic-design terms (e.g. "data table with toolbar") is usually several separate design-system decisions (a Grid, a Filter Bar, a Checkbox), not one.

So after producing the atomic hierarchy above, always also flatten it into this second list — it's cheap to derive once you've already done the grouping work, and it's what makes the output directly usable as input to a classifier skill:

```
## Flat element list (for design-system classification)
| # | Element | Location | Atomic level |
|---|---|---|---|
| 1 | Primary button ("Save") | Top-right of modal footer | Atom |
| 2 | Search bar | Header, left of avatar | Molecule |
| 3 | Data table with toolbar | Main content area | Organism |
```

Rules for this list:
- One row per **distinct element type**, not per instance — if a button style repeats 20 times, it's still one row (note repetition in the Location column if it matters, e.g. "repeats ×20 in table rows").
- Break composite organisms down into their constituent atoms/molecules as separate rows too, alongside the organism row itself — a classifier needs both "there's a data table here" and "that table is built from a Grid + Filter Bar + Checkbox" to do its job well. Don't make the classifier re-derive structure you already have.
- Location should be specific enough that someone scanning the original screenshot/link could immediately point to it (e.g. "top nav, far right" not just "header").
- This list is additive, not a replacement — always show both the hierarchy (for understanding structure) and the flat list (for handoff).

After delivering both, if the user's goal looks like it's headed toward a specific design system, offer in one line: "Want me to run this through `lyra-component-classifier` (or another design-system classifier) next?" rather than doing that mapping yourself.

