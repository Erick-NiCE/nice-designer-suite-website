# Hero Flows Research OS v5 — Governance

Three mechanisms. Calibrated for a small team.

| Mechanism | LITE | STANDARD | STRATEGIC |
|---|---|---|---|
| Research Gate | Log only | ✅ Lightweight | ✅ Full |
| Decision Log | ✅ Always | ✅ Always | ✅ Always |
| Quarterly Review | — | Recommended | ✅ Required |

---

## Governance 1: Research Gate

**LITE:** No Gate. Log the Fast Track and proceed.

**STANDARD:** Lightweight Gate. Research Lead reviews the Intake and Eval Canvas
alone, or in a 20-minute sync with the PM. Not a committee meeting.

**STRATEGIC:** Full Gate. Research Lead + PM + one other stakeholder.
30 minutes maximum.

```
GATE CHECKLIST
─────────────────────────────────────────────────────────────────
□ Mode confirmed
□ Research Type selected — Eval Canvas format matched (A or B)
□ Decision is specific and named
□ Decision Maker is a named person
□ Deadline is a date
□ KB queried — prior entries listed or "none found"
□ Existing evidence assessed — study cannot be replaced by Fast Track
□ Eval Canvas: Golden Answer is a decision threshold (Evaluative)
  OR saturation signal is defined (Generative)
□ Pivot Criteria defined
□ Kill Criteria defined
□ Decision Optionality ≥ 2
□ Method matches research type
□ Research SLA agreed
─────────────────────────────────────────────────────────────────
Result:
  □ APPROVED
  □ DOWNGRADE TO LITE — reason: _______________
  □ BLOCKED — reason: _______________
  □ REJECTED → Kill Log entry #___
```

**Gate failure pattern to watch:**
The Gate is not the place to increase rigor under time pressure.
If a PM is pushing for a fast answer on a question that needs a 3-week study:
- Clarify what can be answered in 2 days (Fast Track) vs. what needs 3 weeks
- Scope a smaller study if the decision is time-bound
- Never run a half-study and present it as a full one

---

## Governance 2: Decision Log

The single non-negotiable record across all modes.
If a study doesn't produce a Decision Log entry, the pipeline is not closed.

```
DECISION LOG
─────────────────────────────────────────────────────────────────
# | Date | Mode | Project | Key Finding | Decision Type
  | Decision | Owner | Outcome Tracked?
─────────────────────────────────────────────────────────────────
```

**Valid Decision Types — all count:**

| Type | Example |
|---|---|
| Decision made | "Relabel Step 3 — Sprint 24" |
| Decision deferred | "Defer to Q3 — insufficient signal" |
| Direction rejected | "Wizard ruled out — not generalizable to enterprise" |
| Hypothesis disproved | "Wizard tested — no improvement in completion rate" |
| More research required | "Need validation at larger N — follow-up study opening" |
| No action + rationale | "Finding noted. Not actionable at current roadmap stage." |
| Finding correct / decision rejected | "PM agreed; leadership overruled on timeline" |
| Execution failed | "Decision made; eng deprioritized in Sprint crunch" |

"TBD" is never valid. If outcome is unknown: "Pending — re-check: [date]."

**What the Decision Log tells you at the Quarterly Review:**

- Where did research produce decisions? Where didn't it?
- What is the Outcome Type breakdown? (Execution failures = org problem, not research problem)
- Are deferred decisions still open from prior quarters?

---

## Governance 3: Quarterly Portfolio Review

**One hour. Small team format — Research Lead prepares, 2–3 stakeholders attend.**

```
AGENDA (60 min)
─────────────────────────────────────────────────────────────────
00–10  Volume + Quality metrics
       Focus on: Falsifier Checks run? Evals matched to type?
       System maintenance time vs. research time ratio.

10–20  Impact Review
       Walk through Outcome Types: where did value break down?
       Execution failures: is this a research problem or a delivery problem?

20–30  Shadow Research Review
       How many PM-run studies this quarter?
       What caused them? What did we extract for the KB?
       What friction should we reduce?

30–40  KB Health
       Entries added. Outdated entries flagged.
       What do we know now that we didn't 90 days ago?

40–50  Big Bet + Hidden Experiment for next quarter
       Research Lead proposes. Stakeholders react.

50–60  OS Health + Maturity
       Is the system costing more than it saves?
       One OS change for next quarter. Current maturity level.
─────────────────────────────────────────────────────────────────
```

### ✅ Good Quarterly Review Output

```
Q2 2025

VOLUME: Lite: 5 / Standard: 4 / Strategic: 1 / Fast Tracks: 8

QUALITY: All 4 Standard studies used correct Eval Canvas type.
  Falsifier Checks run on all findings — 2 findings revised as a result.
  Honest Attribution Statements written for all Outcome Trackers.

IMPACT — Outcome Types:
  Positive: 3 | Decision rejected: 2 | Execution failed: 1
  The 2 rejections were both correct findings overruled by leadership on
  timeline grounds — not research failures. Filing as organizational pattern.
  The execution failure: eng deprioritized mid-sprint. PM aware. Not repeating.

SHADOW RESEARCH: 3 PM-run studies this quarter.
  Caused by: Sprint planning crunch, two fast questions that could have been
  Fast Tracks if PMs knew the option existed.
  Action: Run a 20-min session with PMs on when to use Fast Track vs. request a study.
  Extracted 2 findings to KB from PM studies after framing them through Evidence Chain.

KB: 8 entries added. 2 entries flagged for re-validation (>12 months, product changed).
  New knowledge this quarter: terminology mismatches are more severe in flows where
  users have prior tool experience — the opposite of what we assumed.

OS HEALTH: System time this quarter: ~6 hours. Research time: ~80 hours. Ratio: 7%.
  Target: stay below 15%. Currently healthy.

MATURITY: Level 3 → targeting Level 4. Gap: still reactive on Big Bets.
OS CHANGE: Add PM Fast Track guidance to onboarding doc.
BIG BET Q3: Are supervisors using Hero Flows as a CRM workaround?
```

### ❌ Bad Quarterly Review

```
We completed 6 studies. Stakeholders were happy.
Next quarter we'll do more research.
```

No quality check. No impact breakdown. No shadow research acknowledgment.
No KB health. No OS ratio. No maturity movement. Status update, not governance.
