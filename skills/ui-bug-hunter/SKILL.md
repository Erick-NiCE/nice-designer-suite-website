---
name: ui-bug-hunter
description: >
  Activate this skill whenever a user shares a screenshot, image, video, or recording of a web
  application and asks for a review, audit, QA check, bug hunt, UX review, or issue analysis.
  Also trigger when the user says things like "what's wrong with this screen", "review this UI",
  "find issues", "open tickets for this", "audit this page", "what should be fixed", "QA this",
  or uploads any web app screenshot alongside words like "check", "review", "fix", "issues",
  "bugs", "tickets". This skill performs a structured visual QA audit across 9 inspection layers
  and produces actionable Jira-style tickets for every real issue found — skipping non-issues
  entirely. Use it even for partial screenshots, mobile views, cropped UI images, or video frames.
  Trigger also when the user says "bug hunt", "visual QA", "screen review", "what needs fixing",
  "performance issue", "slow UI", "loading problem", or "check performance".
---

# UI Bug Hunter

A structured visual QA skill that reviews web application screenshots and produces clear,
actionable bug tickets — without filing noise or false positives.

---

## Core Philosophy

**Signal over noise.** Every ticket filed must represent a real, reproducible issue a developer
can act on. Do not file tickets for:
- Subjective style preferences (unless they violate a visible design system rule)
- Behavior that might be intentional
- Issues that cannot be confirmed from the provided screenshot alone

When in doubt, file an **Observation** — not a ticket.

---

## Step 0 — Context Gathering (Before You Scan)

Before scanning, do two things:

**1. Describe what you see** (2–4 sentences). Name the screen, the main components visible,
and the apparent purpose. This grounds the audit and prevents hallucinating issues on
ambiguous or low-res images.

Example:
> "This appears to be an admin dashboard's user management table. It shows a paginated list of
> users with columns for name, email, role, status, and last login. A search bar and filter
> panel are visible on the left."

**2. Check for context clues.** If the user has mentioned any of the following, factor them in:
- App type (SaaS, internal tool, customer portal, mobile app)
- User role (admin, end user, developer)
- Design system in use (Material, Polaris, custom, etc.)
- Known issues they already want to exclude
- Whether they want Jira tickets created after the audit

If none of this is provided, proceed with B2B Enterprise defaults and note it at the top:
> "No context provided — auditing against general Enterprise B2B best practices."

---

## Step 1 — Visual Intake (9 Inspection Layers)

Scan the screenshot in order through all 10 layers. Note every candidate issue before classifying.

### Layer 1: Layout & Structure
- Broken grid, misaligned elements (compare baselines across sibling components)
- Overflow: content cut off, unexpected scrollbars, elements bleeding outside containers
- Overlapping elements (z-index stacking issues)
- Inconsistent spacing / padding across similar components
- Sticky headers or footers covering content
- Sidebar or panel widths collapsing or expanding unexpectedly

### Layer 2: Typography & Readability
- Text truncation without tooltip, "show more", or expand mechanism
- Incorrect font weight, size, or style vs. surrounding context
- Low contrast text (flag if visually obvious — do not attempt to compute exact ratios)
- Mixed case conventions on the same page (Title Case vs. Sentence case vs. ALL CAPS)
- Orphaned words or awkward mid-word line breaks in headings or labels
- Monospace or code font used for non-code content (or vice versa)

### Layer 3: Component Integrity
- Buttons with no visible label or icon
- Disabled states visually identical to active states (no opacity, color, or cursor difference)
- Input fields missing placeholder text, visible label, or validation hint
- Dropdowns or selects with no affordance (no chevron, no border, no indicator)
- Empty cards, panels, or containers with no empty state treatment
- Icons mismatched to their action, label, or semantic meaning
- Toggle switches with no label or current-state indicator

### Layer 4: Data & Content Quality
- Placeholder text leaked to production ("Lorem ipsum", "Test User", "undefined", "null",
  "[object Object]", "PLACEHOLDER", "TBD")
- Missing data shown as blank rather than a dash "—" or "N/A"
- Numbers without units, currency symbols, or percentage signs where expected
- Dates in inconsistent, ambiguous, or unlocalized formats (e.g., "01/02/03")
- Truncated IDs, hashes, or keys with no copy-to-clipboard action
- Data that appears stale or cached (timestamp says "Last updated: never")

### Layer 5: Feedback & States
- Loading states absent — table or list appears empty instead of showing skeleton/spinner
- Success or error states absent after an action (visible form submit with no confirmation)
- Form fields in visible error state but with no error message text
- Badges or status chips with icon only, no label, and no tooltip
- Counters showing "0" when the UI convention should hide them or show an empty state
- Destructive actions (delete, archive, deactivate) with no confirmation dialog or undo

### Layer 6: Navigation & Interaction
- Breadcrumbs missing, broken, or not reflecting the current location
- Back button absent on detail views with no other exit path
- Dead or visually broken links (underlined text that shouldn't be, or links with no underline)
- Active nav item not highlighted or marked in the sidebar/top nav
- Modals or drawers with no visible close button or ESC-to-close affordance
- Pagination controls present but disabled or unreachable
- Keyboard trap risk: modal or overlay with no focusable close mechanism visible

### Layer 7: Microcopy & Labels
- CTA buttons using vague labels ("Submit", "OK", "Click here") instead of action-specific text
- Error messages that are generic, technical, or blame the user ("Invalid input")
- Tooltip or helper text that is cut off, empty, or says "Tooltip"
- Section headers or column labels that are abbreviations with no explanation (e.g., "LTV", "ARR"
  without a legend if the audience may not know)
- Inconsistent terminology for the same concept across the visible UI

### Layer 8: Accessibility & Contrast
- Obviously low-contrast text on colored backgrounds (flag if the difference is visually stark)
- Interactive elements too small for comfortable tapping (< ~44px on mobile views)
- Color used as the only differentiator between states (e.g., red vs. green status with no icon
  or label difference)
- Form inputs with no visible label (label replaced by placeholder only)
- Charts or data visualizations with no text alternative or legend

### Layer 9: Enterprise / B2B Specific
- Permission-related locked features with no explanation of why or how to unlock
- Multi-tenant data confusion (wrong org name, logo, or tenant-specific content visible)
- Bulk action controls missing for list or table views with selectable rows
- Active filters not visually indicated in the filter panel or as chips/tags
- Export or download actions absent on data-heavy tables or reports
- No row count, result count, or "Showing X of Y" indicator on lists or tables
- Audit log or activity feed entries with no actor, timestamp, or action description
- Session timeout warnings absent for long-running workflows

### Layer 10: Performance & Load Behavior
This layer checks whether the UI correctly communicates performance state and adheres to
required loading patterns. Many of these can be confirmed from a screenshot (spinner absent,
blank page instead of skeleton, etc.).

For exact timing thresholds, severity mappings, and ticket language templates, read:
`references/performance-thresholds.md`

**Loading indicators — thresholds to enforce:**
- Any operation >1 second with no visible spinner or loading state in the affected component
  (spinner must appear inside the component itself, not only at page level)
- Page taking >4 seconds to render showing a blank screen instead of a skeleton/placeholder
- Dashboard showing a blank or partial state without a skeleton for the >7 second load window
- Table or list appearing completely empty with no skeleton rows during load

**Search:**
- Search field absent above a list or dropdown (required regardless of item count)
- Search visibly filtering only the currently loaded rows (client-side filter) rather than
  querying the full dataset — detectable when a large list loads all items at once
- Search behavior inconsistent between components on the same screen (one searches on type,
  another requires Enter press)

**Tables & Grids:**
- All rows rendered in the DOM at once with no pagination (detectable by unusually long
  scroll height or browser freeze indicators)
- Current page number or total row count absent from a paginated table
- Sort action triggering a full page reload rather than an in-place update (detectable if
  page flashes or scroll position resets)

**Filters:**
- Apply/Search button remaining active and clickable while a filter is already processing
  (no disabled state, no spinner on the button)
- Filter producing results without any loading indicator during processing

**Exports:**
- Export button with no progress indicator or background-job feedback for large datasets
- Export failure showing no visible error message (silent failure)

**Error Handling under load:**
- Feature that has clearly stopped working (empty state, broken UI) with no error message
  or retry option visible
- Generic or technical error text shown directly to end users ("500 Internal Server Error",
  "NullPointerException", "ECONNREFUSED")
- Silent failures: action completed with no success confirmation AND no error message

**Memory & Session:**
- Page showing signs of crash state (white screen, partial render) with no recovery message
- Session expiry handled silently — user lands on login page with no explanation
- No warning shown before session timeout during long-running workflows (forms, exports,
  multi-step wizards)

**Large dataset thresholds (flag as Observation if not visually confirmable):**
- Dropdown or list with >500 items and no search field
- Dropdown or list with >2,500 items and no virtualization or paging strategy visible

---

## Step 2 — Classify Each Issue

For every candidate found in Step 1:

| Severity | Criteria |
|----------|----------|
| 🔴 **Critical** | Blocks task completion, data loss risk, security concern, completely broken UI |
| 🟠 **High** | Major UX regression, likely to cause user error, missing required feedback |
| 🟡 **Medium** | Noticeable defect, confusing behavior, inconsistency across the visible UI |
| 🔵 **Low** | Minor polish, cosmetic misalignment, spacing, non-blocking cosmetic issue |
| ⚪ **Observation** | Possible issue but cannot be confirmed from this screenshot — flag for dev to verify |

---

## Step 3 — Write the Tickets

For each **confirmed** issue (Critical through Low), write one ticket:

```
---
🔴 BUG-001 · [Short title — max 60 chars]

📍 Location:   [Page / View / Component / Section]
🔍 Type:       [Layout | Typography | Component | Data | Feedback | Navigation | Microcopy | Accessibility | Enterprise | Performance]
👤 Affects:    [All users | Admins only | Mobile users | etc. — infer from context]

**What's wrong:**
[1–3 sentences. Specific. Reference what is visible in the screenshot.]

**Expected behavior:**
[What should happen instead. Concrete and testable.]

**Suggested fix:**
[Practical, developer-friendly action. Not a design essay. One clear instruction.]

**Reproduction:**
[Visible in screenshot — describe the exact condition shown.
 OR: "Verify when [specific condition]." for observations that get promoted.]
---
```

After all tickets, output a separate **## Observations** section. Each observation is 1–2
sentences only — no full ticket format needed.

---

## Step 4 — Summary Report

```
## 📊 Audit Summary — [Screen/Page Name]

| Severity        | Count |
|-----------------|-------|
| 🔴 Critical     | X     |
| 🟠 High         | X     |
| 🟡 Medium       | X     |
| 🔵 Low          | X     |
| ⚪ Observations  | X     |
| **Total filed** | **X** |

**Screened & dismissed (non-issues):** X
**UI Health Score:** [X/10 — see scale below]
**Top priority:** [One sentence: the single most important issue to fix first and why]
```

### UI Health Score Scale

| Score | Meaning |
|-------|---------|
| 9–10  | Production-ready. Only cosmetic or edge-case issues. |
| 7–8   | Shippable with minor fixes. No blockers. |
| 5–6   | Needs work before release. Multiple High issues present. |
| 3–4   | Not ready. Critical or blocking issues found. |
| 1–2   | Significant breakage. Multiple Critical issues. |

Score is derived from: number of Criticals (−2 each), Highs (−0.75 each), Mediums (−0.25 each),
starting from 10. Floor at 1.

---

## Step 5 — Jira Integration (Optional)

After producing the report, always offer:

> "Would you like me to open these as Jira tickets? Tell me your project key and I'll create
> them with the correct priority, labels, and descriptions."

If the user confirms, read `references/jira-integration.md` for the full field mapping and
workflow. Key rules:
- Create only confirmed tickets (Critical → Low). Never create tickets for Observations.
- Use `Bug` issue type for all tickets.
- After creating all tickets, output a list of issue keys with direct links.

---

## Tone & Output Rules

- Be direct. Never write "It seems like…", "You might want to…", or "Consider…"
- Every ticket must be actionable by a developer with no follow-up questions needed
- Do not inflate the report. 3 real issues → 3 tickets. Not 10 weak ones.
- Never repeat the same root cause across multiple tickets — combine if they share a fix
- Observations: 1–2 sentences max, no ticket format
- Ticket numbering: always sequential BUG-001, BUG-002, etc.
- Multiple views in one screenshot: prefix tickets — `[Settings / Users] BUG-001`

---

## Edge Cases

**Multiple screenshots:** Audit each separately with its own section header and summary.
Produce a **Combined Audit Summary** at the very end across all screenshots.

**Video or screen recording:** Audit from the most informative frame(s) you can identify.
Note at top: "Audited from video frame(s) — some transient states may not be captured."

**Mobile screenshot:** Apply all layers. Skip desktop-only Enterprise items (bulk actions,
export buttons) unless this is clearly a responsive breakpoint of a desktop B2B app.

**Low-resolution or blurry image:**
> "⚠️ Screenshot quality is limited. Issues are flagged where visible; developer should
> verify at full resolution before closing tickets."

**Known design system provided (e.g., Polaris, Material, custom):**
Reference that system's conventions explicitly in ticket language:
e.g., "This violates Polaris's button hierarchy — primary actions should use the filled variant."

**No issues found:**
> "✅ No confirmed issues found. [N] items reviewed and passed. Observations below if any."

**User disputes a ticket:**
If the user says a filed issue is intentional, acknowledge it cleanly:
> "Noted — removing BUG-00X from the report. Marking as intentional behavior."
Do not re-file it unless new evidence appears.
