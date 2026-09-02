# Jira Integration — Field Mapping Reference

Read this file when the user confirms they want Jira tickets created from the bug hunt report.

---

## Pre-Flight Checklist

Before creating any ticket, confirm with the user:
1. **Project key** (e.g., "PROD", "UX", "FE", "PLATFORM")
2. **Assignee** (optional — ask "Should these be assigned to someone, or left unassigned?")
3. **Sprint or Fix Version** (optional — ask "Should I add these to a sprint or fix version?")
4. **Component** (optional — ask "Is there a Jira component these belong to, e.g., 'Frontend' or 'UI'?")

Only ask once — collect all answers before creating any ticket.

---

## Workflow

1. Call `getAccessibleAtlassianResources` to get the cloudId
2. Confirm the 4 pre-flight items above with the user
3. Create tickets one at a time using `createJiraIssue` (Critical first, then High, Medium, Low)
4. After all tickets are created, output a clean list:
   ```
   ✅ Created 5 Jira tickets in [PROJECT]:
   · [PROJECT-101] Filter panel shows no active state when filters are applied
   · [PROJECT-102] ...
   ```
5. Do NOT create tickets for Observations

---

## Field Mapping

### `summary`
Use the ticket title exactly as written in the bug report, without the severity emoji or BUG-### prefix.
Example: `"Filter panel shows no active state when filters are applied"`

### `issueTypeName`
Always: `Bug`

### `priority`
| Bug Hunt Severity | Jira Priority |
|-------------------|---------------|
| 🔴 Critical       | Highest       |
| 🟠 High           | High          |
| 🟡 Medium         | Medium        |
| 🔵 Low            | Low           |
| ⚪ Observation    | **Do not create** |

### `description` (use markdown format)
```
**📍 Location:** [paste from ticket]
**🔍 Type:** [paste from ticket]
**👤 Affects:** [paste from ticket]

---

**What's wrong:**
[paste from ticket]

**Expected behavior:**
[paste from ticket]

**Suggested fix:**
[paste from ticket]

**Reproduction:**
[paste from ticket]

---
*🤖 Created by UI Bug Hunter skill · Audit date: [today's date]*
```

### `labels`
Always apply all three label groups:
1. `ui-bug-hunt` — tags all tickets from this skill for easy filtering
2. Severity: `critical` / `high` / `medium` / `low`
3. Type (map from the ticket's Type field):
   - Layout → `layout`
   - Typography → `typography`
   - Component → `component`
   - Data → `data-quality`
   - Feedback → `ux-feedback`
   - Navigation → `navigation`
   - Microcopy → `microcopy`
   - Accessibility → `accessibility`
   - Enterprise → `enterprise-ux`
   - Performance → `performance`

### `additional_fields` (use for optional fields)
```json
{
  "assignee": { "accountId": "[from lookupJiraAccountId if provided]" },
  "components": [{ "name": "[component name if provided]" }],
  "fixVersions": [{ "name": "[version if provided]" }]
}
```
Only include fields the user confirmed. Omit blank ones entirely.

---

## Error Handling

If `createJiraIssue` fails for a ticket:
- Log the failure: "⚠️ Failed to create [BUG-00X]: [reason]"
- Continue creating remaining tickets
- At the end, list all failures so the user can retry or create manually
- Never silently skip a failure
