# Performance Thresholds & UX Rules Reference

Read this file when auditing performance-related issues (Layer 10) or when writing tickets
that cite specific timing thresholds or UX enforcement rules.

Source: "Performance Thresholds and Conditions for User Interface Components" — Lihi Shrem

---

## Timing Thresholds

| Category | Threshold | Condition |
|---|---|---|
| Dropdown / List loading | >4 seconds | Bug: loading too slow |
| Dropdown with many items | >500 items | Must have search field |
| Dropdown with many items | >2,500 items | Must have virtualization or paging |
| Search | >4 seconds | Bug: results loading too slow |
| Search | any size | Must query full dataset (not client-side filter) |
| Page load | >4 seconds | Must show skeleton screen — not blank page |
| Table / Grid loading | >4 seconds | Bug: loading too slow |
| Table / Grid scrolling | any | Must be smooth — no freeze or skip |
| Dashboard full load | >7 seconds | Bug: loading too slow |
| Dashboard data | any | Must not show stale data from silent refresh failure |
| Filter application | >4 seconds | Bug: filter applying too slow |
| API action (Add, Save, etc.) | >4 seconds | Bug: backend response too slow under normal load |
| Any operation | >1 second | Must show loading spinner in the affected component |
| Mouse / click response | immediate | Cursor freeze or click with no response = bug |

---

## UX Enforcement Rules (Non-Negotiable)

These are required behaviors — violations are always bugs, not observations.

### Search
- A search field **must** appear above every list or dropdown, regardless of item count
- Search must behave consistently across all components and products
- If search is part of a component (dropdown, table), it **must** run as a backend search —
  not a client-side filter on already-loaded data
- Search must always run on the **full dataset**, not only records currently loaded in the UI

### Loading States
- Any operation >1 second **must** display a loading spinner or loading state
- The spinner **must appear inside the affected component**, not only at the page level
- Pages taking >4 seconds to load **must** show a skeleton screen or placeholders — never
  a blank page
- Non-critical sections must load after main content (progressive loading)

### Tables / Grids
- Tables **must** use server-side pagination — the UI must never render all rows at once
- Current page number and total row count **must always** be visible
- Sorting **must** be executed server-side

### Filters
- Filters **must** be applied server-side
- While a filter is processing:
  - A loading indicator must appear
  - The Apply button must be disabled to prevent duplicate requests

### Exports
- If export takes more than a few seconds → must run in the background and notify when ready
- A clear error message **must** be shown if the export fails (silent failure = bug)

### Error Handling
- Every error state **must** display a visible, user-friendly message with a clear next step
  (retry / refresh / contact support)
- Generic or technical error messages must **never** be shown to end users
- Silent failures are **not acceptable** under any circumstance

---

## Severity Mapping for Performance Issues

Use this to classify performance tickets:

| Issue | Default Severity |
|---|---|
| Page crash / freeze / white screen | 🔴 Critical |
| Silent failure (action fails with no message) | 🔴 Critical |
| Session lost during heavy use with no warning | 🔴 Critical |
| Export fails with no error message | 🔴 Critical |
| Feature stops working under load with no message | 🔴 Critical |
| Missing spinner for >1s operation | 🟠 High |
| Blank page instead of skeleton on slow load | 🟠 High |
| Client-side search instead of backend search | 🟠 High |
| Table rendering all rows without pagination | 🟠 High |
| Filter Apply button not disabled during processing | 🟡 Medium |
| Dashboard showing stale data without indicator | 🟡 Medium |
| Missing row count / page number on table | 🟡 Medium |
| Dropdown >500 items with no search | 🟡 Medium |
| Sorting triggering full page reload | 🟡 Medium |
| Spinner at page level only (not in component) | 🟡 Medium |
| Export with no background-job progress feedback | 🟡 Medium |
| Dropdown >2,500 items with no virtualization | 🟡 Medium |

---

## Ticket Language Templates

When writing performance tickets, cite the threshold explicitly:

**Loading indicator absent:**
> "The [component] shows no loading spinner during [operation]. Per UX guidelines, any
> operation exceeding 1 second must display a loading indicator inside the affected component."

**Blank page on slow load:**
> "The [page name] displays a blank screen during load. Pages taking more than 4 seconds
> must show a skeleton screen or loading placeholders — not an empty page."

**Client-side search:**
> "The search field in [component] filters only the currently loaded rows rather than querying
> the full dataset. Search must always run as a backend search against the complete dataset."

**Silent failure:**
> "The [action] fails silently — no error message, toast, or retry option is shown to the user.
> All error states must display a visible, user-friendly message with a clear next step."

**Table missing row count:**
> "The table shows no row count or 'Showing X of Y' indicator. Per UX guidelines, current
> page number and total row count must always be visible to the user."
