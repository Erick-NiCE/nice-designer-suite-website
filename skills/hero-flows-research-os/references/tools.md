# Hero Flows Research OS v5 — Tools Reference

---

## STAGE 0 — MODE + INTAKE

### Fast Track Log (LITE)

Use when existing data or KB can answer the question without recruiting participants.
Every fast-track is logged — no silent bypasses.

```
FAST TRACK
─────────────────────────────────────────────────────
Date:          Requested by:          Topic:
Source: □ Analytics  □ KB  □ Prior study  □ Desk review
Risk:   □ Low — proceed  □ High — add explicit evidence caveat below

Finding (2–3 sentences):
Evidence caveat (if high risk):
Decision enabled:
Time spent:
─────────────────────────────────────────────────────
```

**Risk × Effort — which path:**

| | Low effort | High effort |
|---|---|---|
| **Low risk** | Fast Track | Standard study |
| **High risk** | Fast Track + explicit caveat | Standard or escalate |

Fast Track never upgrades evidence strength. A 20-minute answer carries
the confidence of its source — not of a full study.

---

### Intake Form (STANDARD / STRATEGIC)

```
INTAKE — Hero Flows Research
─────────────────────────────────────────────────────
From:           Date:           Flow/area:

RESEARCH TYPE
  □ Generative   □ Evaluative   □ Descriptive
  □ Strategic    □ Discovery    □ Validation

PROBLEM: What is happening?

DECISION: What specific choice needs to be made?
  (Name the options. Not "improve X" — "decide between A and B.")

DECISION OPTIONALITY
  □ 1 — Nearly decided → reject or add to Kill List
  □ 2 — Some flexibility
  □ 3 — Genuinely open; research will determine direction

DECISION MAKER (named person):
DEADLINE (specific date):

KB CHECK: Prior entries on this topic: (list or "none found")
EXISTING EVIDENCE: What do we already know?
WHAT WOULD MAKE THIS UNNECESSARY: Could existing data answer it?

REMAINING UNCERTAINTY: What is still unknown?
RISK OF NOT RESEARCHING: What happens if we act without this?
─────────────────────────────────────────────────────
Mode: □ STANDARD  □ STRATEGIC
RL response: □ Approved  □ Revise  □ Fast Track  □ Rejected → Kill List
```

---

## STAGE 1 — EVAL

Two Eval Canvas formats. Choose based on research type.
Using the wrong format is a more common error than skipping the Eval entirely.

---

### Eval Canvas A — Evaluative / Validation / Descriptive

Use when: you know roughly what the decision space looks like before the study.

```
EVAL CANVAS — EVALUATIVE
─────────────────────────────────────────────────────
Project:          Type:          Owner:          Date:

STEP 1 — DECISION: What specific choice must be made?

STEP 2 — EXISTING EVIDENCE: KB entries + analytics consulted:

STEP 3 — CAN WE SKIP THE STUDY?
  □ Yes — existing data answers it → Fast Track
  □ No → continue

STEP 4 — REMAINING UNCERTAINTY: What is still unknown?

STEP 5 — EVAL QUESTION: One sharp, answerable question.

STEP 6 — GOLDEN ANSWER (decision threshold — not a count):
  "Evidence sufficient to [choose between / confirm / rule out] ___,
   with no competing explanation that would materially change the decision."
  Operational heuristic: target ≥___ of ___ sessions showing same pattern.

STEP 7 — WHAT WE'LL DO WITH IT:
  If we find X → decision is Y
  If we find Z → decision is W

STEP 8 — METHOD:

PIVOT CRITERIA: What would cause us to change the question or method mid-study?

KILL CRITERIA: Stop if:
─────────────────────────────────────────────────────
Gate: □ Approved  □ Blocked — reason:
```

---

### Eval Canvas B — Generative / Discovery / Strategic

Use when: you do not know the decision space yet. The study will define it.

The wrong approach: forcing a Golden Answer onto a Generative study
produces premature closure. Researchers stop when they reach the
pre-defined answer rather than when the field is saturated.

```
EVAL CANVAS — GENERATIVE
─────────────────────────────────────────────────────
Project:          Type:          Owner:          Date:

STEP 1 — TERRITORY: What area of user experience are we exploring?
  (Not a decision — a domain: "supervisor mental model of agent performance"
   or "what blocks mid-office workers from completing X.")

STEP 2 — EXISTING EVIDENCE: What do we already know about this territory?

STEP 3 — KNOWLEDGE GAPS: What don't we know that matters?

STEP 4 — RESEARCH QUESTION (open, not answerable in advance):
  "What is the structure of ___?"
  "How do ___ users understand / experience / navigate ___?"
  "What are the jobs, frictions, and workarounds in ___?"

STEP 5 — WHAT GOOD LOOKS LIKE (saturation signal, not a count):
  We stop when: new participants are not adding new themes, frictions,
  or mental model structures — not when we hit N sessions.

STEP 6 — WHAT WE'LL PRODUCE:
  □ Problem landscape map
  □ Mental model map
  □ JTBD framework
  □ Opportunity space
  (This feeds future Evaluative studies — it does not itself produce a decision.)

STEP 7 — SECONDARY OUTPUT:
  Which decisions might this research inform? (name them — even if tentatively)

STEP 8 — METHOD:

PIVOT SIGNAL: What would tell us we're exploring the wrong territory?

KILL CRITERIA: Stop if:
─────────────────────────────────────────────────────
Gate: □ Approved  □ Blocked — reason:
```

### ✅ Good Generative Eval

```
TERRITORY: How new supervisors build a mental model of Hero Flows during
           their first 30 days — before they've been trained or supported.

RESEARCH QUESTION: What is the structure of the mental model new supervisors
  bring to Hero Flows, and where does it conflict with the system's actual model?

WHAT GOOD LOOKS LIKE: New themes stop emerging after 6–8 sessions across
  2 supervisor personas. We can map at least 3 distinct mental model patterns.

WHAT WE'LL PRODUCE: Mental model map + problem landscape.
  This feeds the Q3 Evaluative study on onboarding friction points.
```

### ❌ Bad Generative Eval (Evaluative format forced onto Generative study)

```
EVAL QUESTION: Do supervisors understand the Hero Flows onboarding?
GOLDEN ANSWER: ≥6 of 8 supervisors complete setup without asking for help.
```

**Why it fails:** This is a usability test question, not a generative question.
It will produce "yes/no" + task success rate — not mental model structure.
The team will learn almost nothing about why, and will repeat the study in 3 months.

---

## STAGE 2 — PRIORITIZATION

### Priority Score — Weighted Additive

```
Priority = (0.25 × Impact) + (0.20 × Uncertainty) + (0.20 × Leverage)
         + (0.20 × Urgency) + (0.15 × Optionality)
```

| Factor | 1 | 3 | 5 |
|---|---|---|---|
| **Impact** (0.25) | <5% users | 20–50% | >70% or core flow |
| **Uncertainty** (0.20) | Mostly known | Partial | No data |
| **Leverage** (0.20) | Won't change decision | Might influence | Will determine |
| **Urgency** (0.20) | 6+ months | 1–3 months | <3 weeks |
| **Optionality** (0.15) | Nearly decided | Some flex | Genuinely open |

**Gate before scoring:** Optionality = 1 → do not score. Kill List or reject.

---

## STAGE 3 — RESEARCH

### Method Matrix

| Question | Right method | Do NOT use |
|---|---|---|
| Do users understand this flow? | Moderated Usability Test | Survey |
| What blocked task completion? | Session Recording + Follow-up Interview | Analytics alone |
| What problems exist? (Generative) | JTBD Interviews, Contextual Inquiry | Usability Test |
| Is this direction right? | Concept Testing + Expert Interviews | Usability Test |
| How many users hit problem X? | Survey + Analytics (triangulated) | Interview alone |
| What do competitors do better? | Competitive UX Audit | User Interview |
| What will users need in future? | Diary Study + JTBD | A/B Test |
| Is the new design better? | A/B Test or Preference Test | Usability Test alone |
| Is a rare behavior catastrophic? | Critical Incident Technique | Frequency analysis |

### Research Plan (compressed for small teams)

```
RESEARCH PLAN
─────────────────────────────────────────────────────
Project:     Type:     Mode:     Method:     Owner:
Start:       End:      SLA: □ <2d  □ 1-2w  □ 2-4w  □ 4-8w  □ Quarter

QUESTION (from Eval):
PARTICIPANTS: N:___  Personas:___  Screener:___
SESSIONS: Format:___  Duration:___  Recorded: □Y □N
GUIDE TOPICS: 1.  2.  3.
ANALYSIS: Who:___  Method:___
DELIVERABLES: PMs:___  Designers:___  Leadership:___
─────────────────────────────────────────────────────
```

---

## STAGE 4 — EVIDENCE

### Evidence Chain

Never skip levels. Never present an observation as an insight.

```
OBSERVATION → EVIDENCE → PATTERN → FINDING → INSIGHT → RECOMMENDATION → DECISION
```

| Level | Definition | Test |
|---|---|---|
| **Observation** | One instance | "Single data point?" |
| **Evidence** | Multiple instances | "N across sessions?" |
| **Pattern** | Consistent across segments | "Holds across personas?" |
| **Finding** | Named description of what is happening | "One sentence, no hedging?" |
| **Insight** | Mechanism — why it is happening | "Explains the cause?" |
| **Recommendation** | What to do | "Actionable by named person?" |
| **Decision** | What was decided, by whom, when | "Owner + date?" |

**Insight requires an explicit evidence-to-mechanism link:**

```
EVIDENCE:    6/8 supervisors described the blue badge as a notification.
MECHANISM:   Mental model maps blue circles to "new message" — from messaging apps.
LINK:        4 participants verbalized this unprompted. 2 showed behavioral
             pause-then-click pattern consistent with notification-checking.
```

**Frequency ≠ Importance.** Evaluate on four dimensions:

| Dimension | Question |
|---|---|
| Frequency | How many? |
| Severity | How badly does it block the goal? |
| Novelty | Did we know this existed? |
| Strategic relevance | Does it affect a decision we need to make? |

A rare, severe, novel finding must not be buried by its N.

---

### Falsifier Check — Active Analysis Step

Principle 6 is not a field to fill in at intake.
It is a step to run during synthesis, after findings are drafted.

**Run this check on every Finding and Insight before delivery:**

```
FALSIFIER CHECK
─────────────────────────────────────────────────────
For each Finding or Insight:

1. State what we observed:
   _______________

2. State the mechanism we are proposing:
   _______________

3. Ask: What would we need to observe for this mechanism to be WRONG?
   If we saw ___, this mechanism would not hold.

4. Did we see any of that in this study?
   □ No — finding stands. Log in Contradiction Log.
   □ Yes — revise the finding or scope it more narrowly.

5. What would a future study need to show to disprove this?
   (Add to Research Debt if worth tracking.)
─────────────────────────────────────────────────────
```

### ✅ Good Falsifier Check

```
FINDING: Users interpret the blue badge as a notification.
MECHANISM: Learned convention from messaging apps.
FALSIFIER: If users with no messaging app experience showed the same confusion,
  the learned-convention mechanism would be wrong. The cause would be
  something intrinsic to the badge's visual design — not prior experience.
DID WE SEE IT? 2 participants with low messaging app usage still paused at
  the badge. Revising scope: mechanism is likely BOTH learned convention AND
  insufficient visual differentiation from the rest of the UI.
```

### ❌ Bad Falsifier Check (treated as a form field)

```
FALSIFIER: If users didn't find it confusing.
```

**Why it fails:** This is circular — it restates the finding as its own falsifier.
A falsifier names a specific observation that would require a different mechanism.

---

### Confidence Framework — Three Dimensions

| Dimension | What it measures |
|---|---|
| **Evidence Strength** | How well the data supports the finding |
| **Generalizability** | How broadly the finding applies beyond this sample |
| **Interpretation Confidence** | How certain we are in the causal mechanism |

```
CONFIDENCE
─────────────────────────────────────────────────────
EVIDENCE STRENGTH:      □ Strong    □ Moderate    □ Weak
  N:___  Severity: □ Blocking  □ Friction  □ Minor

GENERALIZABILITY:       □ Broad     □ Partial     □ Narrow
  Applies to:     _______________
  NOT applicable: _______________

INTERPRETATION CONFIDENCE:  □ High  □ Medium  □ Low
  Mechanism:       _______________
  Mechanism link:  _______________
  Alternatives considered: _______________
  Falsifier (from check above): _______________

CONTRADICTORY EVIDENCE:
  □ None found — search was conducted
  □ Found — see Contradiction Log #___
─────────────────────────────────────────────────────
```

**After 6+ sessions:** Document whether disconfirming evidence was sought.
An empty Contradiction Log is acceptable if the search was run.
It is not acceptable if the search was skipped.

---

## STAGE 5 — DECISION → OUTCOME

### Decision Brief — Three Audience Formats

**For PMs:**

```
PM BRIEF
─────────────────────────────────────────────────────
What we researched (1 sentence):
What we found (2–3 sentences, most important first):

OPTIONS:
  A:  effort:___  expected impact:___
  B:  effort:___  expected impact:___
  Do nothing:  consequence:___

Tradeoff:
Decision needed:
Deadline:

Confidence:
  Evidence Strength:  □ Strong / Moderate / Weak
  Generalizability:   □ Broad / Partial / Narrow
  Interpretation:     □ High / Medium / Low
─────────────────────────────────────────────────────
```

**For Designers:**

```
DESIGN BRIEF
─────────────────────────────────────────────────────
Finding:
Evidence (quote + N):
Mechanism (why it happens):
Design implication:
Do NOT (what this rules out):
Open design question (needs judgment, not more research):
─────────────────────────────────────────────────────
```

**For Leadership:**

```
LEADERSHIP BRIEF
─────────────────────────────────────────────────────
Problem:
Scale: users affected:___  severity:___
Do nothing → consequence:
Recommended action:
Estimated impact:
Confidence: □ Strong / Moderate / Weak
Decision needed from leadership:
─────────────────────────────────────────────────────
```

---

### Outcome Tracker + Honest Attribution

```
OUTCOME TRACKER
─────────────────────────────────────────────────────
Project:                    Completed:

FINDING:
DECISION: who:___  what:___  when:___
PRODUCT CHANGE: what:___  shipped:___

USER OUTCOME (measured ___ weeks post-ship):
  Before:___  After:___  Delta:___  Source:___

BUSINESS OUTCOME:
  Before:___  After:___  Delta:___  Source:___

OUTCOME TYPE:
  □ Finding correct → positive outcome
  □ Finding correct → decision rejected by stakeholder
  □ Finding correct → execution failed
  □ Finding incorrect → decision based on it
  □ Outcome ambiguous or externally confounded
  □ No implementation — reason:___
  □ Outcome not yet measurable — re-check date:___

HONEST ATTRIBUTION STATEMENT:
  (Replace "Attribution Confidence" with this)

  "What we changed: ___
   What we observed: ___
   Other changes that happened at the same time: ___
   Why we think the research-driven change contributed: ___
   What we cannot rule out as an alternative explanation: ___"
─────────────────────────────────────────────────────
```

**Why Honest Attribution replaces Attribution Confidence:**

In a product that ships every sprint, before/after measurement almost always
has confounds. Claiming "Moderate confidence" on a before/after with 3 other
simultaneous changes is false precision — and it damages Research's credibility
when someone asks the follow-up question.

An Honest Attribution Statement is harder to write but impossible to pick apart.
It shows rigor by naming what we don't know, not by hiding it behind a label.

### ✅ Good Honest Attribution

```
What we changed: "Assigned agents" → "Your direct reports" + subtitle.
What we observed: Step 3 abandonment dropped from 40% to 24% over 4 weeks.
Other changes at the same time: CS sent a proactive email to new supervisors
  in week 2. A new tooltip was added to Step 2 in the same sprint.
Why we think the research-driven change contributed: The drop was most
  pronounced in the first week — before the CS email. The tooltip addressed
  a different step.
What we cannot rule out: The CS email may have reduced overall onboarding
  anxiety, making Step 3 easier regardless of the label change.
```

### ❌ Bad Attribution

```
Attribution: Moderate. Before/after, no major confounds identified.
```

**Why it fails:** "No major confounds identified" is not the same as
"no confounds exist." A PM or executive who asks "are you sure this was
the research?" will get no useful answer. The credibility damage is worse
than the honest statement.

---

## STAGE 6 — AI IN THE RESEARCH WORKFLOW

### What AI Can Do

| Stage | Task | What to watch |
|---|---|---|
| Intake | Flag vague decisions, missing fields | — |
| Eval | Challenge Golden Answer, propose falsifiers | Check: is it proposing a real falsifier or a circular one? |
| Analysis | First-pass transcript review | **See clustering warning below** |
| Brief | Generate three audience variants | Always edit before sending |
| KB | Search prior entries, surface contradictions | Verify matches manually |

### The AI Clustering Warning

**This is the most important AI risk in qualitative research.**

AI clustering tools (including LLMs asked to "find themes") optimize for consensus.
They find what most participants said. They surface the majority pattern.

This is the opposite of what good qualitative research does.

Good qualitative analysis:
- Actively looks for what doesn't fit
- Treats outliers as signals, not noise
- Notices when 1 of 8 participants said something that changes everything

**When you use AI to cluster themes, you systematically:**
- Suppress low-frequency but high-severity findings
- Lose novel observations that don't fit existing patterns
- Produce findings that confirm what stakeholders already believe

**The rule:** Use AI to organize raw data (timestamps, quotes by topic).
Do not use AI to identify what matters. That step requires human judgment.

```
AI PROVENANCE — required for STANDARD and STRATEGIC
─────────────────────────────────────────────────────
Study:         Stage:         Task:
AI used for:
Output used? □ Yes — what was kept:
             □ No — why not:
Human review: what was verified independently:
Judgment that remained human:
─────────────────────────────────────────────────────
```

### What AI Cannot Do — Research Lead Only

```
□ Approve a Research Gate or assign a mode
□ Run the Falsifier Check (requires understanding the mechanism)
□ Assign Confidence dimensions
□ Write the Recommendation or "So What"
□ Decide Kill or Pivot
□ Write the Honest Attribution Statement
□ Assign Outcome Type
□ Determine strategic relevance of a finding
```

---

## STAGE 7 — LEARNING LOOP

### Research Debt + Kill List (combined — one log)

In a small team, two separate logs will not be maintained.
One log covers both: things we chose not to research and open questions
we intend to revisit.

```
OPEN QUESTIONS + KILL LOG
─────────────────────────────────────────────────────
# | Type | Question | Why Not Now | What Would Reopen It | Trigger | Owner
  | □ Debt (open question)
  | □ Kill (conscious non-decision)
─────────────────────────────────────────────────────
```

### Quarterly Portfolio Review (STRATEGIC / recommended STANDARD)

```
QUARTERLY REVIEW — Q___ / ____

VOLUME:  Lite:___  Standard:___  Strategic:___  Fast Tracks:___

QUALITY
  □ Evals matched to research type (A vs B canvas)
  □ Falsifier Checks run on all findings
  □ Contradiction Logs searched (not just filled)
  □ Honest Attribution Statements written (not confidence labels)

IMPACT — Outcome Type breakdown:
  Positive:___  Decision rejected:___  Execution failed:___
  Finding wrong:___  Ambiguous:___  No implementation:___
  Where in the chain did value break down this quarter?

KB HEALTH
  Entries added:___  Outdated entries flagged:___

SHADOW RESEARCH
  PM-run studies logged:___
  Findings extracted to KB:___
  Friction that caused them: (what to simplify)

OS HEALTH
  Principles violated:___ (target: 0)
  Mode mismatches:___
  System maintenance time vs. research time this quarter: ___h / ___h
  (If system time > 20% of research time → simplify something)

MATURITY:  ___ / 5
OS CHANGE FOR NEXT QUARTER:
BIG BET:
HIDDEN EXPERIMENT:
```
