# Lyra UI — condensed composition reference

Condensed from `CONTRIBUTING.md` in davidbauerjr991/lyra-ui. When in doubt, the live repo's own copy is authoritative — this is a snapshot, kept short on purpose.

## Composition table (what to use instead of hand-rolling)

| You need | Use | Do not create |
|---|---|---|
| A dropdown attached to a trigger | `Menu` or `Popover`+`PopoverContent` (or `MenuRadix` for a self-triggered flyout) | A custom `<ul>` dropdown |
| A text field | `Input` | A raw `<input>` with manual styling |
| A select / combobox | `Select` + `Menu` (or Radix `Select`) | A new dropdown+input hybrid from scratch |
| A panel over the page header (hover/pin) | `SidePanel` + `PanelHeader`/`PanelFooter` | A custom modal-like div with its own header |
| An inline panel below the page header (click-triggered) | `InteriorPanel` + `PanelHeader`/`PanelFooter` | A custom modal-like div with its own header |
| A chip / badge (pill or circular count/icon) | `Badge` (`shape="pill"` or `shape="circle"`) | An inline-styled `<span>` |
| A breadcrumb trail | `Breadcrumb` + `BreadcrumbList`/`Item`/`Link`/`Page`/`Separator`/`Ellipsis` | A hand-rolled `<nav><ol>` |
| An icon button | `ActionIconButton` (AppHeader row, `size="xl"` → 44px) or `Button` (`variant="icon"`) — both share one `badge` count-overlay | A bare `<button>` with a Lucide icon, or a second hand-rolled badge span |
| A modal / dialog (backdrop, focus trap, Escape-to-dismiss) | `Modal` | `Overlay` + `Container variant="modal"` hand-composed at the call site |

**`Menu` vs `MenuRadix`**: `Menu` is a bare list with no trigger/open-state of its own — use it when something else (a `Select`, a hand-rolled `Popover` wrapper) already supplies the surface and just needs "the list part" (`bare` prop). `MenuRadix` owns its own trigger, open state, and positioning — use it for anything self-triggered (a kebab button, a profile dropdown). `MenuRadix` cannot run in `bare` mode.

**Panels — exactly two types, not one with a variant prop:**

| | `SidePanel` | `InteriorPanel` |
|---|---|---|
| Position | Over the page header | Below the page header, inline in the main container |
| Opens via | Hover (consumer wires enter/leave + external `open`) | Click / trigger elsewhere in the container |
| Pin/unpin | Yes — `pinned` + `onPinToggle`, defaults **unpinned** | No pin concept — always inline |
| Side | `side="left"`/`"right"` (explicit — never rely on a default) | Same |
| Narrow behavior | N/A | Becomes an absolute overlay below ~1050px |

Tabs inside a panel go in the header via the `headerTabs` prop (forwarded to `ContainerHeader`'s `tabs` slot), never as a `sticky` row inside `PanelContent`'s children — a sticky-in-children tab bar has real, shipped scrolling/overflow bugs that `headerTabs` doesn't.

## Menu / Popover width scale

`Menu` itself has no fixed width, only a `min-w-[200px]` floor. When wrapping it in a fixed-width `Popover`, pick from this scale instead of an arbitrary pixel value:

| Size | Width | Use |
|---|---|---|
| `sm` | 200px (the default floor) | Simple item-only menus, no header/search row |
| `md` | 256px (`w-64`) | A small header/search/filter row above the list |
| `lg` | 320px (`w-[320px]`) | A title header + close button, or richer items with icons |

(Calendar/time pickers and trigger-matched dropdowns like `Autocomplete`/`PhoneInput` have their own width drivers and are exempt.)

## Channel type colors (canonical, don't reinvent per instance)

| Channel type | Color | `Tag` variant |
|---|---|---|
| Voice | Purple | `variant="purple"` |
| Chat | Teal | `variant="teal"` |
| SMS | Neutral (gray) | `variant="neutral"` |
| WhatsApp | Default (blue) | `variant="default"` |
| Email | Pink | `variant="pink"` |

Voice/Chat/Email get dedicated `lyra-accent-*` hues; SMS/WhatsApp reuse two general-purpose `Tag` variants rather than a status color — never borrow `success`/`warning`/`critical`/`info` for a channel type, those are reserved for actual state and would collide with a real status tag sitting in the same row.

## The behavior-contract incident (why §18 matters)

`AgentNextGenTemplate.stories.tsx` imported `SidePanel` correctly but wrote its own pin/hover handlers from scratch instead of copying the established reference (`admin-shell.tsx`'s handlers). Two real bugs resulted, both invisible from the component's own code: (1) the record-icon click toggled `pinned` and `open` together, so closing a pinned panel silently unpinned it too; (2) the hover-start handler had no pinned guard (unlike hover-end), so hovering could reopen a pinned-but-closed panel even though pinned mode is supposed to be click-only both ways. Both were fixed by matching the reference handlers line-for-line — the component itself was never the problem. Lesson: copy the real reference usage's state machine, don't infer one that "seems reasonable" for a new prototype in isolation.

## How to check what exists

1. Search `src/index.ts` in the repo — every public component is listed there.
2. Browse the live Storybook — https://davidbauerjr991.github.io/lyra-ui/ — categories `Custom Primitives`, `UI`, `Charts`, `Templates` cover the full surface.
3. If something close-but-not-quite exists, extend it via props (new variant/size/slot) rather than duplicating it.
4. Only create something net-new when no existing component covers it even with added props, and it will be reused in at least two distinct places.
