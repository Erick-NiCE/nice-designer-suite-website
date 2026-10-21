
# Screen Splitter

Figure out how many distinct **screens** — separate views, pages, or states of an app — actually live inside whatever the user handed over, and how those screens relate to each other. A single screenshot, Figma link, HTML/site link, or description can secretly contain two, three, or more screens (e.g. a login screen and a dashboard laid out side by side, a Figma page with five top-level frames, or a site with several linked routes). This skill finds the seams first, maps the connections between them, and delivers the result either directly to the user (when invoked via `/screen-splitter`) or back to the `/edith` pipeline (when called from within edith). It does **not** hand off to `ui-breakdown` — that is edith's responsibility.

## Why the confirmation step matters

Screen detection from a flattened image or a loosely described flow is genuinely ambiguous — a settings panel that overlays a dashboard can look like "one screen" or "two" depending on framing, and a Figma file with six frames might have three that are just size variants of the same screen. Guessing wrong here means every downstream skill (`ui-breakdown`, `lyra-component-classifier`, etc.) runs against the wrong boundaries and the whole chain has to be redone. A quick confirmation costs one exchange; a wrong split costs the entire pipeline.

## Inputs this skill accepts

- **A screenshot or image** containing one or more screens (side-by-side mockups, a flow diagram of screens, a single composite export from Figma).
- **A Figma file/page link** — inspect via `get_metadata` or `get_screenshot` (if the Figma MCP is connected and authorized) to see how many top-level frames exist, whether they represent distinct screens vs. variants of one screen, and whether any prototype connections/links between frames are defined (those are direct evidence of flow — use them).
- **An HTML/live-site link** — treat distinct routes/pages as distinct screens. Fetch the page, then follow same-site navigation (nav bar, header/footer links, sidebar links, in-page `<a href>` targets) to discover other pages belonging to the same site/app. Don't wander off-domain or into unrelated marketing pages unless the user's request implies the whole site (e.g. "map this whole site" vs. "just look at this page"). If the site has many pages (a large marketing site, a docs site), ask the user to scope which section/flow they care about rather than crawling indefinitely.
- **A text description** that implies multiple views ("the user logs in, then sees a dashboard, then can open settings") — the description itself usually already encodes some of the flow; extract it rather than re-deriving it from nothing.

## Required workflow

### Step 1 — Scan for screen boundaries

Look for the signals that separate one screen from another:
- Distinct top-level frames/artboards (Figma: separate frames on the canvas or page; screenshots: clearly separated rectangular regions, often with gaps, different backgrounds, or browser/app chrome repeated per region; HTML: distinct routes/URLs).
- A change in primary purpose or navigation state (a login form vs. a data table vs. a settings panel are different screens even if visually adjacent).
- Repeated shell elements (top bar, sidebar, site nav) wrapping *different* main content — that's usually multiple screens sharing a shell, not one screen.
- Explicit labels, titles, URLs, or filenames that name separate views ("Login", "Dashboard", "Settings", `/login`, `/dashboard`).

Do not split on: modals/overlays that belong to a parent screen (a delete-confirmation dialog is part of the screen it interrupts, not a separate screen), or minor state variants of the same screen (hover/error/loading states of one form aren't separate screens).

### Step 2 — Count and name the candidate screens

Produce an internal list: for each candidate screen, a short name, a one-line description of what's on it, and where it sits in the input (e.g. "top-left region," "Frame 2 in the Figma page," "the third mockup in the row," "the `/settings` route").

### Step 3 — Map the relationships between screens

This is the architecture/flow pass — don't skip it even when the count is obvious. For each pair of screens that connect, note:
- **What triggers the transition** — a button, link, nav item, form submission, or an implicit "next step" from a text description.
- **Direction** — one-way (e.g. login → dashboard on success) vs. bidirectional (e.g. dashboard ↔ settings via nav).
- **Shared structure** — which screens share a shell/layout (top bar, sidebar, footer) vs. which are structurally standalone (e.g. a full-bleed login screen with no shared chrome).
- **Entry/exit points** — which screen is the natural starting point (landing page, login) and which are terminal or loop back.

Sources for this, in order of reliability: explicit prototype links in Figma > explicit navigation/links in HTML > visual cues (a "Settings" icon in a shared top bar strongly implies dashboard ↔ settings) > the user's own description of the flow > inference from screen purpose (weakest — flag these as assumptions, not facts).

### Step 4 — Branch on the count

**If exactly 1 screen is found:** no split needed — say so briefly and return the single screen as the output (to the user, or to the edith pipeline). There's nothing to map relationships against, so skip Step 3's output too. Don't manufacture a confirmation step for an unambiguous single-screen input; that would be friction for no reason.

**If 2-3 screens are found:** this is the ambiguous range where confirmation pays off most — surface the candidate list (with the relationships from Step 3) to the user in one short message and ask directly: "I count N screens here: [list], connected like [brief flow summary]. Is that right, or did I split something up that's actually one screen (or miss one, or get a connection wrong)?" Wait for their answer before dividing anything.

**If 4+ screens are found:** the boundaries are usually unambiguous at this volume (distinct frames/routes are easy to tell apart), so confirm more lightly — state the count, names, and flow summary, and proceed unless the user objects, rather than blocking on an explicit yes/no. Use judgment: if the input still looks genuinely ambiguous even at this count (e.g. many small overlapping regions, or a site where the crawl scope is unclear), fall back to the same confirm-and-wait behavior as the 2-3 case.

### Step 5 — Handle the user's answer (2-3 screen case)

- **User confirms ("yes, that's right")** → proceed to Step 6.
- **User says no, or corrects the count/boundaries/flow** → don't just patch the one thing they mentioned and move on. Rescan the whole input from scratch with their correction in mind (e.g. "screens 2 and 3 are actually one screen" or "settings doesn't link back to dashboard" means re-examine whether other candidate boundaries or connections were also mis-drawn), produce a fresh candidate list and flow map, and confirm again. Repeat until the user agrees, rather than assuming one correction fixes everything.

### Step 6 — Divide and hand off

Once the split is confirmed (or auto-proceeded per Step 4's 4+ case), produce one clearly separated unit per screen:
- For an image/screenshot input, crop or logically isolate each screen's region (describe the crop bounds if you can't literally cut the image) so each downstream `ui-breakdown` call has an unambiguous single-screen input.
- For a Figma link, list the specific frame/node ID for each screen so it can be passed to `ui-breakdown` or `get_screenshot` individually.
- For an HTML/site link, list the specific URL for each screen/page.
- For a text description, restate each screen's scope as its own short paragraph.

Then return the full inventory and flow map:
- **If invoked via `/screen-splitter`**: present the results to the user and stop. Do not offer to run `ui-breakdown` or any downstream skill — that is not this skill's responsibility.
- **If invoked via `/edith`**: return the structured screen list and flow map to the edith pipeline for it to drive next steps.

## Output format

### Screen inventory

| # | Screen name | Location in input | Notes |
|---|---|---|---|
| 1 | Login | Top-left region of screenshot | Standalone form, no shared shell |
| 2 | Dashboard | Right two-thirds of screenshot | Shares top bar + sidebar with Settings |
| 3 | Settings | Figma frame "Settings v2" | Shares top bar + sidebar with Dashboard |

### Screen architecture / flow map

Describe connections in plain language, or as a simple list of edges — pick whichever is clearer for the input at hand:

> Login → Dashboard (on successful sign-in, one-way)
> Dashboard ↔ Settings (via gear icon in shared top bar, bidirectional)
> Entry point: Login. Shared shell (top bar + sidebar): Dashboard, Settings.

If the user wants this as a visual diagram rather than prose, offer to hand off to `figma-generate-diagram` (FigJam) using this edge list as the source.

### Confirmation prompt (2-3 screens)

> I count **3 screens** here: Login, Dashboard, Settings (described above), connected as: Login → Dashboard on sign-in, then Dashboard ↔ Settings via the top bar. Does that match what you meant, or is the split or flow wrong somewhere?

### After confirmation

State clearly which screens were identified and present the full inventory and flow map. If invoked via `/screen-splitter`, deliver the output to the user and stop. If invoked via `/edith`, hand the structured result back to the edith pipeline.

## Edge cases

**Overlay/modal ambiguity** — if it's genuinely unclear whether something is a modal on top of a screen or its own screen, ask about that one specifically rather than folding the question into the general count confirmation.

**Shared shell across screens** — always call this out explicitly in the inventory and flow map; it matters later because `ui-breakdown` and the Lyra skills should treat the shell as shared, not re-derive it per screen.

**HTML site is large or scope is unclear** — don't crawl an entire site by default. State how many pages you found reachable from the entry link and ask the user to confirm the boundary (e.g. "just this flow" vs. "the whole site") before treating all of them as in-scope screens.

**Inferred (not explicit) connections** — when a transition is guessed from purpose/layout rather than an explicit link, prototype connection, or user description, mark it as inferred in the flow map so the user knows to double-check it, rather than presenting it with the same confidence as an explicit link.

**Input is already a single, obviously single screen** — skip the whole workflow and say so in one line; forcing a scan-and-confirm cycle on an unambiguous single screen just wastes the user's time.

**Rescanning loop doesn't converge** — if after two rescans the user is still unsatisfied, stop guessing and ask them to point directly at the boundaries and connections themselves (e.g. "can you list where each screen starts and what links to what?").

**Do not chain into ui-breakdown** — this skill's output is always the screen inventory and flow map, delivered to the user (via `/screen-splitter`) or to edith (via `/edith`). Never automatically invoke `ui-breakdown`.

