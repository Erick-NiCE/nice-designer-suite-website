
# Lyra Component Classifier

Analyze a UI design and produce a clear, actionable breakdown of every component — telling the designer exactly which ones to pull from the **Lyra Foundations V1** Figma library and which ones need to be hand-assembled using Lyra tokens.

This is a planning/audit tool. It doesn't build anything in Figma — it gives you the map before construction begins. The output feeds the custom-component build stage.

> **Source of truth**: Inventory verified page-by-page against the Lyra Foundations V1 Figma file:
> `https://www.figma.com/design/qyCq4jUOrpYcpHhpNCdgA5/Lyra-Foundations--V1-`

---

## Inputs Claude accepts

**Primary input: a flat element list from `ui-breakdown`.** That skill's job is to decompose a screenshot/Figma link/HTML link/text description into a per-element list with locations — do that structural work first rather than re-deriving it here. Concretely:

- If the user hasn't already run `ui-breakdown` on this screen in the current conversation, run it first (or invoke it) to get the "Flat element list (for design-system classification)" table (columns: Element, Location, Atomic level). Classify directly off that table — it already tells you every distinct element and where it sits, including organisms pre-broken into their constituent atoms/molecules, so you don't need to re-inspect the raw screenshot/HTML from scratch.
- If the user pastes or references a `ui-breakdown` output directly, use it as-is — don't ask them to re-share the original screenshot/link unless the flat list is missing detail you need (e.g. no variant-relevant detail like whether a field shows an error state).
- Only fall back to analyzing the raw input yourself (screenshot, Figma URL via `get_screenshot`, HTML/web URL, or text description) when `ui-breakdown` isn't available, wasn't run, or the user explicitly wants a quick one-off classification without the full breakdown step.

Working from the flat list rather than raw pixels also makes classification more reliable: `ui-breakdown` already resolved "is this one component or several" and "where does one element end and another begin," which is exactly the ambiguity that used to cause misclassification here.

---

## The Lyra Foundations V1 component inventory

Everything below is **Lyra-ready** — import as a component instance, don't hand-draw it.

Components prefixed with `_` are **internal sub-components** — they exist in the library but are building blocks used inside parent components. In new work, always use the parent; never reach directly for internals.

---

### Forms & Inputs

| Component | Variants / Props |
|---|---|
| **Button** | Type: Primary / Secondary / Ghost / Destructive × State: Default / Hover / Pressed / Disabled |
| **Button Icon** | Type: Primary / Secondary / Ghost / Destructive × State: Default / Hover / Pressed / Disabled |
| **Input** | State: Default / Hover / Active / Read-only / Disabled / Error; Input Type (built-in): **Text, Dropdown, Date picker, Time picker, Password, Numeric** |
| **Search** | State: Default / Hover / Active / Disabled × Size: Large / Medium |
| **Text Area** | State: Default / Hover / Active / Read-only / Disabled / Error / **AI** |
| **Checkbox** | Checked: Yes / No / Intermediate × State: Default / Hover / Pressed / Read-only / Disabled |
| **Checkbox Group** | Direction: Vertical / Horizontal × State: Default / Read-only / Disabled |
| **RadioButton** *(individual)* | Selected: Yes / No × State: Default / Hover / Pressed / Read-only / Disabled |
| **RadioButton Group** | Direction: Vertical / Horizontal × State: Default / Read-only / Disabled |
| **Slider** | Type: **Single / Range / Multi Range** |
| **Switch** | On: Yes / No × State: Default / Hover / Pressed / Disabled / Read-only × Size: Large / Small |
| **Toggle Group** | Size: Large / Medium |
| **Validations** | Type: Required / Invalid Characters / Character Limit / Invalid Format / At Least One Selection Required / Custom |
| **Label** | Props: Mandatory (asterisk), Show help icon |
| **Label + secondary text** | Label with supporting description line |
| **Link text** | State: Default / Hover |

**Internal sub-components (do not use directly):** `_button/base`, `_button/base_icon`, `_input/size`, `_input/content`, `_input/Type & State`, `_checkbox/label`, `_radiobutton/label-simple`, `_slider/handle`, `_slider/marks`, `_Toggle/Segment`

---

### Navigation

| Component | Variants / Props |
|---|---|
| **Tabs** | Size: Default × Alignment: **Left / Fit** |
| **Breadcrumbs** | Type: **Back** (single link) / **Multi level** (Home / … / Page Title) |

**Internal sub-components:** `_Tabs/base` — States: Default / Hover / Selected

---

### Containers

| Component | Variants / Props |
|---|---|
| **Panel** | Show Frame: Yes / No |
| **Modal Dialog** | Form/content dialog — header + body + footer buttons |
| **Accordion** | Single component; section states: Closed / Open / Disabled |
| **Toolbar** | With Background: Yes / No |

> **Modal Dialog vs Modal Message** — Modal Dialog is for forms and content input. Modal Message (see Messaging section) is for status-driven task interruptions that force the user to respond before continuing. Do not confuse them.

**Internal sub-components:** `_accordion/section` — States: Closed / Open / Disabled

---

### Overlays

| Component | Variants / Props |
|---|---|
| **Overlay Container** | Generic overlay wrapper |
| **Menu** | Full dropdown menu with items, dividers, and destructive items |
| **Select Dropdown** | Type: **Single select / Multi select**; includes Category grouping label and Select All / Limit Selection bar |
| **Popover** | Arrow location: Down / Up / Left / Right |
| **Select Time** | Scrollable time picker panel |
| **Tooltip** | Arrow location: Down / Up / Left / Right |

**Internal sub-components:** `_Menu/menu item` (States: Default / Hover / Pressed / Critical / Critical Hover / Critical Pressed / Disabled / Divider), `_select/all bar`, `_select/item-label`, select item rows (single & multi)

---

### Data Display & Management

| Component | Variants / Props |
|---|---|
| **Grid** | Full data grid with pagination; rich internal cell types (see below) |
| **Chip** | Type: Default / Error × Size: Small / Medium |
| **Chip Group** | Horizontal chip row + overflow **Chips popover** |
| **Query Builder** | Show Frame: Yes / No; includes Query chip (Status: Inactive / Inactive Short / Active / Error / Read-only) |
| **Filter Bar** | Horizontal filter chip bar; chips have Status: Inactive / Active / Error / Read-only × States: Default / Hover / Pressed |
| **_Badge** *(Unpublished)* | Color: Gray / Red / Orange / Yellow / Lime / Green / Teal / Blue / Purple / Pink × Inversed: Yes / No × Size: Medium / Small |
| **_Metric Bar** *(Unpublished)* | Type: Info / Multi / Single; metric tiles have Selected: Yes / No × States: Default / Hover / Pressed |

**Grid cell types (internal `_grid/cell`):** Text, Link, Icon + Text, Date Time, Numeric, Button, Multi Button, Chip, Badge, Empty, Icon, Icon Button, Checkbox, Custom — do not rebuild these; configure via the Grid component.

**Other internal sub-components:** `_grid/row`, `_grid/column`, `_grid/header`, `_grid/pagination`, `_Filter chip`, `_Filter Bar`, `Query chip`, `_query/operator`, `_query/value`, `_query/filter`, `_metricbar/metric-multi`, `_metricbar/metric-single`, `_metricbar/metric-static`

> Components marked **Unpublished** are in the file and usable, but not yet officially released — flag this to the team when using them.

---

### Messaging

| Component | Variants / Props |
|---|---|
| **Toast** | Status: Success / Warning / Info / Error; also has **Inverse** (dark) variant with same statuses |
| **Inline Notification** | Status: Warning / Error / Info / Success — full-width banner, sits inline in the page |
| **Modal Message** | Type: Warning / Destructive / Error / Info / Success — task interruption dialog, forces user to respond before continuing |

> **Choosing the right messaging component:**
> - **Toast** → transient, non-blocking feedback (action confirmed, error occurred)
> - **Inline Notification** → persistent contextual alert within a page section
> - **Modal Message** → blocking confirmation required before the user can proceed (delete, destructive action, critical error)

---

### Shell & Application Chrome

| Component | Variants / Props |
|---|---|
| **Shell Top Bar** | Application header bar with app name, profile, notification icons |
| **Shell Sidebar** | Left navigation panel; internal nav items: Page (active/inactive/badge), Category header, Parent (expandable), Child (nested) |
| **Application Menu** | Full app-switcher overlay listing all NICE CXone products with icons |

See **Templates & Page Composition** below for `Content - shell` and `Content Sidebar`.

**Internal sidebar sub-components:** `_sidebar/Nav-Page`, `_sidebar/Nav-Category`, `_sidebar/Nav-Parent`, `_sidebar/Nav-Child`, `_sidebar/Nav-group`

---

### Templates & Page Composition

Page-level scaffolds. Reach for these **before** hand-building a page layout — a design that looks like a bespoke screen is often one of these with slots filled.

| Component | Variants / Props |
|---|---|
| **Full Page** | Complete page scaffold (1680px content width) |
| **Content - shell** | `Show page sidebar`: yes / no — full-page layout shell composing Shell Top Bar + Shell Sidebar + main content area |
| **Content Sidebar (TBD)** | `State`: pinned / overlayed. Marked TBD in the library — confirm it exists in-file before relying on it |
| **Page Header** | Standard page title/header bar |
| **Content - Grid Block** | Grid-based content region |
| **Content - Form** | Standard form page layout |
| **Content - User Details** | `Type`: rows / fields |
| **AI-Assist** | `Content`: empty / chat — AI assistant side panel |

**Internal sub-components:** `_ai/header`, `_ai/chat`, `_ai/chat-start`, `_ai/footer`

---

### Text Patterns

Mostly the form-adjacent text components also listed under Forms & Inputs. Two are unique to this page:

| Component | Variants / Props |
|---|---|
| **-- Section Title** | Section heading pattern |
| **Group Title** | Sub-group heading within a section |

Also on this page (already listed under Forms & Inputs): `Validations`, `Link text`, `Label`, `Label+secondary text`.

---

### Foundation Icons

Lyra includes two icon sets. Always prefer **Foundation Icons** first; fall back to Lucide only if no Foundation Icon matches.

**Foundation Icons** (16×16 unless noted):

| Category | Icons |
|---|---|
| **general** | `general/placeholder` |
| **control** | `control/dash`, `control/check`, `control/breadcrumb-menu` |
| **message** | `message/error` |
| **input** | `input/chevron-down-sm-small`, `input/chevron-up-sm-small`, `input/date`, `input/time`, `input/eye-show`, `input/eye-hide`, `input/search`, `input/numeric-stepper` |
| **alert** | `alert/error-fill`, `alert/info-fill`, `alert/warning-fill`, `alert/success-Fill`, `alert/info` |
| **system** | `system/menu`, `system/close`, `system/close-small`, `system/help1`, `system/notification`, `system/chevron-left/right/down/up`, `system/chevron-first`, `system/chevron-last`, `system/Filter`, `system/filter_on`, `system/link-out`, `system/AI1`, `system/AI2`, `system/AI badge` (24×24), `system/arrrow-up`, `system/arrow down`, `system/pin`, `system/unpin`, `system/panel left close/open`, `system/settings`, `system/configure`, `system/stop` |
| **datavis** | `datavis/trend-up`, `datavis/trend-down` |
| **action** | `action/edit`, `action/delete`, `action/add`, `action/remove`, `action/activate`, `action/deactivate`, `action/thumbs-up`, `action/thumbs-down`, `action/retry`, `action/copy`, `action/export` |

**Lucide Icons** — full Lucide set is integrated into Lyra (e.g. `lucide/search`, `lucide/headset`, `lucide/gauge`, `lucide/workflow`, `lucide/calendar-clock`). Use when no Foundation Icon matches.

---

## What is NOT in Lyra Foundations V1

These patterns must be hand-assembled using Lyra tokens (spacing, color, radius, border, shadow, typography):

- **Custom card layouts** — `Panel` exists but has limited structure; anything more bespoke needs a custom frame with `bg/surface/container`, `radius/lg`, `Shadow md`
- **Date picker calendar panel** — the input field trigger uses `Input` (date picker type), but the calendar dropdown grid itself is custom
- **Stepper / wizard / multi-step progress indicator** — no component; build custom with Lyra spacing + color tokens
- **Skeleton loaders / loading placeholders** — no component; use `bg/surface/container` + `radius/sm` custom shapes
- **Empty state illustrations / zero-state screens** — custom layout using Lyra typography + icon tokens
- **Data visualizations / charts / graphs** — no chart components; build chart containers with Lyra tokens, use a charting library for rendering
- **Avatar / profile image** — no avatar component; build a circle frame with `bg/surface/container` or `bg/control` token
- **Progress bar / spinner** — no standalone component (Button has a loading state, but a general progress indicator does not exist)
- **Notification badge / dot** — small numeric count dot on an icon; build custom with `bg/status/critical` token
- **Hero / marketing banner sections** — custom layout using Lyra heading tokens. (Note: a standard **Page Header** component *does* exist on the Templates page — use it for ordinary page titles. Only genuinely bespoke hero treatments are custom.)
- **Custom navigation bars** beyond `Shell Top Bar` — build with Lyra tokens
- **General AI interaction patterns** — the library's **A.I. Patterns** page is an empty placeholder canvas (labelled Chat / Confidence Score / AI Suggestions with blank frames), not a component set. The only shipped AI components are **AI-Assist** (Templates) and the `bg/ai` / `border/field-ai` tokens. Everything else AI-related is custom.

---

## How to classify

For each row in the `ui-breakdown` flat element list (or each distinct UI element, if working from raw input):

1. **Name it** — use the Element name from the flat list as-is.
2. **Match it** — does it appear in the Lyra inventory above?
3. **Classify**:
   - ✅ **Lyra-ready** — import as a component instance, set the correct variant props
   - 🔧 **Custom (Lyra tokens)** — build from frames/text/shapes, bind all properties to Lyra tokens
4. **For Lyra-ready** — note the exact variant props (e.g. Button → Type: Primary, State: Default)
5. **For custom** — note which token categories are needed (e.g. `bg/surface/container`, `radius/lg`, `spacing/6` gap)

Remember that an "Organism" row from the flat list is rarely a single Lyra match — decompose it into its already-listed constituent atom/molecule rows and classify each of those separately (e.g. "Data table with toolbar" → Grid + Filter Bar + Checkbox, each its own row in your output), rather than trying to force the whole organism into one component.

---

## Output format

### 1. Component inventory table

| # | Element | Location | Classification | Detail |
|---|---|---|---|---|
| 1 | Email field | Login form | ✅ Lyra-ready: **Input** | Type: Text, State: Default |
| 2 | Sign in button | Login form | ✅ Lyra-ready: **Button** | Type: Primary, State: Default |
| 3 | Error message | Below email | ✅ Lyra-ready: **Validations** | Type: Required |
| 4 | Remember me | Login form | ✅ Lyra-ready: **Checkbox** | Checked: No, State: Default |
| 5 | Tab bar | Page top | ✅ Lyra-ready: **Tabs** | Alignment: Left |
| 6 | Status toast | Top-right | ✅ Lyra-ready: **Toast** | Status: Success |
| 7 | Data table | Main content | ✅ Lyra-ready: **Grid** | Configure cell types per column |
| 8 | Filter chips | Above table | ✅ Lyra-ready: **Filter Bar** | — |
| 9 | Delete confirm | On delete click | ✅ Lyra-ready: **Modal Message** | Type: Destructive |
| 10 | Card container | Main content | 🔧 Custom | `bg/surface/container`, `radius/lg`, `Shadow md`, `spacing/8` padding |
| 11 | Page background | Full screen | 🔧 Custom | `bg/surface/canvas` fill only |

Keep the **Location** column consistent with whatever the flat element list used, so a reviewer can trace each row back to the `ui-breakdown` output and the original screenshot/link.

### 2. Summary counts

> **X Lyra-ready** components to import · **Y custom** elements to build with tokens

### 3. Build sequence recommendation

Suggest the order to assemble in Figma — typically: shell frame → section containers → Lyra component instances → text labels → custom decorative elements. Place Lyra components first so their intrinsic sizing informs the surrounding custom container dimensions.

---

## Edge cases

**Partial matches** — if an element is close to a Lyra component but has additions (e.g. an Input with an inline icon button attached), classify the core as Lyra-ready and the wrapper/extension as custom.

**`_` prefixed components in existing designs** — these are internal sub-components. In new work, always use the parent component instead (e.g. use `Grid` not `_grid/cell`, use `Accordion` not `_accordion/section`).

**Unpublished components** (`_Badge`, `_Metric Bar`) — available in the file but not officially released. Flag to the team: "This uses an unpublished Lyra component — confirm with the Lyra team before shipping."

**Messaging type confusion** — if a design has a confirmation dialog, classify it as `Modal Message` (not `Modal Dialog`) when it's blocking the user to confirm a destructive or status-critical action.

**Multiple instances** — count each unique component type once; note "appears N times" (the flat list should already carry this note in its Location column — reuse it rather than re-counting).

**Unknown element** — flag with ❓ and ask the user before proceeding.

**Flat list seems incomplete or too coarse** — if a row from `ui-breakdown` is too vague to classify confidently (e.g. "Card container" with no hint of what's inside), ask the user for a quick clarification or glance at the original screenshot/link rather than guessing.

---

## After classification

Return the table, counts and build sequence to the caller. Do not offer follow-ups.
