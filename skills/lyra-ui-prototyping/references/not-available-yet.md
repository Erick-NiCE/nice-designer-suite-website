# Lyra (`@nicecxone/lyra-ui`): not available yet

Verified against `src/index.ts` of github.com/davidbauerjr991/lyra-ui at commit `2b0e88a` (197 named exports) and its `CONTRIBUTING.md`, `CLAUDE-HANDOFF.md` and `PROJECT_SUMMARY.md` "Known Debt". Re-check against the live repo before declaring a gap; if the library has caught up, use the component and fix this list.

Use it to declare gaps up front in the prototype's `GAPS.md`. A gap is never covered with a look-alike.

## Two Lyras, do not mix them

| | Source | Notes |
|---|---|---|
| **Lyra via the SOL Storybook** | The 43 SOL components with `globals=theme:lyra` | Same components and props as SOL, Lyra theme. Angular for all 43, React for 24. |
| **`@nicecxone/lyra-ui`** | David Bauer's React library | ~95 components plus templates. This skill's default. Different API from SOL's. |

If a user says "Lyra" and the target is an Angular CXone app, ask which one. A prototype uses one, not both.

## SOL components with no `lyra-ui` equivalent

Compared against the 43 components in the SOL Storybook seed.

| SOL component | In `lyra-ui`? | What exists instead | Handling |
|---|---|---|---|
| Wizard | **No** (no stepper or wizard export) | none | Gap. Do not hand-build a stepper. |
| Query Builder | **No** | none | Gap. |
| Omnibar | **No** | `SearchInput`, `AgentSearch` | Gap for the omnibar pattern; `SearchInput` is a search field only. |
| Info Overlay | **No** | `Popover`, `Tooltip` | Use `Popover` or `Tooltip` only if the content fits them; otherwise gap. |
| Chip Group | **No** | `FilterChip`, `Tag`, `TagPicker` | Gap for a managed chip group; compose real `FilterChip`s and note it. |
| Card (generic) | **No** | `Container`, `DashboardCard`, `SessionDetailsCard`, `LoginCard` | `Container` for generic surfaces. A generic `Card` is a gap. |
| Grid (ag-Grid based) | **Partly** | `Table` and parts (`TableToolbar`, `SortableTableHead`, `ColumnToggle`, resizable columns) | Use `Table` (it has `TableFooter` with pagination). Server-side or virtualized data is not documented in its props: gap. |
| Conversation UI | Partly | `ConversationMessage`, `ChatMessage`, `AgentChat` | Use these; anything beyond their props is a gap. |
| AI Assistant | Partly | `AiPanel`, `AIInput`, `AIProcess` | Use these; anything beyond their props is a gap. |

Everything else in the SOL set maps to a `lyra-ui` component (Accordion, Action Bar, Autocomplete, Breadcrumb, Button, Calendar, Checkbox and Group, Date and Date Range Picker, Icon, Inline Notification, Label, Menu, Modal, `NumberField` for Numeric Selector, Panel, Popover, Progress Bar, Radio Button Group, `SliderRange` for Range Slider, Select, Side Panel, Spinner, Switch, Tabs, `Input` for Text Input, Textarea, Time Picker, `Toast` for Toastr, Toggle Group, Tooltip). Names and props differ from SOL's, so read the Lyra story, not the SOL file.

## Library debt the owner has recorded

These are the library's own open items, from its handoff and summary docs. They matter because a prototype inherits them.

- **No published package.** `npm install github:davidbauerjr991/lyra-ui` does not work (`dist/` is gitignored). The build is clone, `npm install`, `npm run build`.
- **`npm run build` reports a DTS error** (`admin-shell.tsx` twice, "Expected 1 arguments"). The JS bundles still build. Types for those two spots are unreliable.
- **`list-item.tsx`**: `title` prop conflicts with `HTMLAttributes`; a pre-existing type error.
- **`AppName` / `AppHeader` do not own their click-to-open menu.** Wiring an `AppMenu` is hand-copied Popover boilerplate in every consumer, and the owner has put a shared fix on hold. Ask the user whether the prototype needs a working app menu or a static app name; do not default to either.
- **Menu and Popover width scale is not fully retrofitted.** `select.tsx` (`w-[240px]`), `connected-apps.tsx` (`w-72`), `ai-input.tsx` and `profile-menu.tsx` (`min-w-[220px]`) use one-off widths. `app-menu.tsx` hand-rolls its own `role="menu"` instead of composing `Menu`. Do not copy those widths.
- **`AgentNextGenTemplate.stories.tsx`** partly mirrors the app page and is known to drift. Treat the real consumer, not that story, as the reference for page-level behavior.
- **Perceived lag** on very large workspace pages: a heavy re-render can delay a popover's exit animation by a second or more. State is correct; the unmount lags.

## Not in the library at all

Things real CXone screens need that appear nowhere in the export list. Each is a gap unless the live Storybook shows otherwise.

- A stepper or wizard (see above).
- A skeleton or loading-placeholder component (`Spinner` and `ProgressBar` only).
- A combined time-zone or locale picker.
- A rich-text editor.
- A file uploader or dropzone (`AttachmentThumbnail` shows an attachment; it does not upload).
