# Hero Flows Research Knowledge Base — v5

**Designed for one person to maintain alongside running research.**
**One file. One format. Updated after every Standard and Strategic study.**

---

## The Problem with v4's KB

v4 had 5 parallel systems: KC Claims + KBE Evidence + KBC Contradictions
+ Research Debt + Kill List. In a small team with no dedicated Research Ops,
that architecture becomes a ghost KB within 3 months — entries half-filled,
Claims not updated when new evidence arrives, temporal validity never checked.

v5 uses a single flat entry format that captures Claims, Evidence,
Contradictions, and open questions in one place. The Claim IS the entry.
Evidence is attached to it. Contradictions live inside it.

---

## Single Entry Format

One entry per stable knowledge unit. Update it in place when new evidence arrives.

```
KNOWLEDGE BASE ENTRY
─────────────────────────────────────────────────────────────────
ID:         KB-___
Last updated: _______________     By: _______________

TAGS
  User type:    [Agent / Supervisor / Manager / Executive / Admin]
  Persona:      _______________
  Hero Flow:    _______________
  Problem area: [Wayfinding / Mental Model / Terminology / Performance /
                 Motivation / Trust / Load / Integration]

CLAIM (one sentence — falsifiable):

SCOPE
  Applies to:     _______________
  Does NOT apply: _______________
  (Scope is as important as the claim. Both are required.)

CONFIDENCE SUMMARY
  Evidence Strength:         □ Strong  □ Moderate  □ Weak
  Generalizability:          □ Broad   □ Partial   □ Narrow
  Interpretation Confidence: □ High    □ Medium    □ Low
  Trend: □ Strengthening  □ Stable  □ Weakening  □ Contradicted

EVIDENCE (list all studies that support or extend this claim)
  [Date] [Study name]: [one-line summary of what it showed]
  [Date] [Study name]: [one-line summary]

CONTRADICTIONS (inline — not a separate log)
  [Date] [Study name]: [what was found that conflicts]
  Scope of contradiction: [when/where/for whom the contradiction holds]
  Current status: □ Open  □ Resolved — reason:
  Open question: (add to Open Questions section below if worth tracking)

TEMPORAL VALIDITY
  Most recent evidence: ___ months ago
  Product changed since: □ Yes — significantly  □ Minor  □ No
  Decay risk: □ High  □ Medium  □ Low
  Re-validate by: _______________

QUOTES (2–3, with participant code)
  P__: "_______________"
  P__: "_______________"

MECHANISM (the why — from Insight level)
  _______________

FALSIFIER (from Falsifier Check)
  This claim would be wrong if: _______________

DECISIONS MADE FROM THIS CLAIM
  [Decision Log #___]: [one-line summary]

OUTCOMES MEASURED
  [Outcome Tracker #___]: [metric before → after]  Attribution: □ Strong/Moderate/Weak
─────────────────────────────────────────────────────────────────
```

---

## Open Questions + Kill Log (combined)

At the bottom of the KB file. One list. Two entry types.

```
OPEN QUESTIONS + KILL LOG
─────────────────────────────────────────────────────────────────
#  TYPE        QUESTION / TOPIC            WHY NOT NOW
   REOPEN IF                               TRIGGER             OWNER
─────────────────────────────────────────────────────────────────

# 07
   □ Open Q    Does the terminology mismatch hold for enterprise
               supervisors in matrix-structure teams?
   Why not now: <15% of new signups are enterprise; low urgency.
   Reopen if:  Enterprise share of new signups exceeds 25%, OR
               enterprise CS tickets spike on "wrong agents assigned."
   Trigger:    Quarterly review check / CS alert
   Owner:      Research Lead

# 08
   □ Kill      Reporting dashboard layout redesign
   Why not now: Decision Optionality = 1. Leadership committed to
               current layout through Q4 2025. Research cannot influence.
   Reopen if:  Q4 roadmap opens layout as live decision, OR CSAT for
               Reporting drops below 3.5 for 2 consecutive months.
   Owner:      Anna K. (PM Lead) aware — documented March 2025
─────────────────────────────────────────────────────────────────
```

---

## Maintenance Rules for a Small Team

| Action | When | Time cost |
|---|---|---|
| Add/update entry | Within 1 week of findings delivery | 15–20 min per entry |
| Update Contradictions | Immediately when conflicting evidence found | 5 min |
| Check Temporal Validity | At each Quarterly Review | 20 min for full KB scan |
| Add to Open Questions | When Falsifier Check opens a new question | 5 min |
| Add to Kill Log | When Optionality = 1 rejection is made | 5 min |
| Full KB audit | Once per year | 2–3 hours |

**Total quarterly KB overhead for a small team: ~1–2 hours.**
If it's taking longer than that — entries are too long. Trim them.

---

## Pre-Study Query (Standard + Strategic)

Before opening any study:

```
1. Search KB by TAGS: user type + flow + problem area
2. Check Confidence trend — is it strengthening or weakening?
3. Check Temporal Validity — is the evidence still current?
4. Read open Contradictions in this area
5. Check Open Questions — is this study answering one?
6. Check Kill Log — is this a question we consciously parked?
```

**Rule:** If 2+ Strong entries exist on a topic — the new study
must address either an open Contradiction, a temporal validity gap,
or a scope gap not covered by prior evidence.

---

## ✅ Good KB Entry

```
ID: KB-031
Last updated: April 2025     By: Research Lead

TAGS
  User type: Supervisor
  Persona: New Supervisor (0–60 days)
  Hero Flow: Onboarding Setup
  Problem area: Mental Model / Terminology

CLAIM: Supervisors with no prior CRM tool experience misinterpret
  system-language labels in Hero Flows as status indicators,
  causing task abandonment in flows that require action.

SCOPE
  Applies to:     New supervisors (<3 months), non-CRM background, SMB tier
  Does NOT apply: Supervisors with prior CRM experience (see Contradictions)

CONFIDENCE SUMMARY
  Evidence Strength:  Strong (2 independent studies, consistent pattern)
  Generalizability:   Partial (SMB confirmed; enterprise untested)
  Interpretation:     High (mechanism verbalized unprompted by participants)
  Trend:              Strengthening — replicated in 2 separate flows

EVIDENCE
  Oct 2024 / Reporting Flow Study:
    "View assignments" label caused same misread as "already done."
    4/6 participants interpreted as status, not action target.
  Mar 2025 / Onboarding Step 3 Study:
    "Assigned agents" caused abandonment at Step 3.
    6/8 participants interpreted as "agents already set up."

CONTRADICTIONS
  Mar 2025 / Onboarding Step 3: 2/8 participants with prior CRM experience
    completed Step 3 without issue. Did not misread the label.
  Scope: Prior tool experience appears to mitigate terminology mismatch.
  Status: Open — enterprise segment not yet tested.
  Open question: → Open Questions #07

TEMPORAL VALIDITY
  Most recent evidence: 4 months ago (April 2025)
  Product changed since: Minor (subtitle added to Step 3 post-study)
  Decay risk: Low
  Re-validate by: April 2026, or if Onboarding flow is redesigned

QUOTES
  P03: "I thought these were the agents I already set up somewhere else."
  P06: "Assigned — so these are done? I can skip this step?"
  P07: "I kept looking for a way to add my team."

MECHANISM: Users map system-language labels to prior app experience.
  "Assigned" = past-tense = completed, in most software they use.
  Hero Flows uses it to mean "available to assign" — present/future.

FALSIFIER: If users with no prior software experience (e.g. first job, no CRM,
  minimal smartphone use) showed the same confusion, the prior-experience
  mechanism would be insufficient. The issue would be in the label itself —
  not in what users brought to it.

DECISIONS
  Decision Log #28: Relabeled "Assigned agents" → "Your direct reports" — Sprint 24
  Decision Log #19: Relabeled "View assignments" → "Assign agents" — Sprint 19

OUTCOMES
  Outcome Tracker #12: Step 3 abandonment 40% → 24% (-16pp) — Attribution: Moderate
  Outcome Tracker #09: Reporting task success +11pp — Attribution: Strong (A/B)
```

## ❌ Bad KB Entry

```
Finding: Users are confused by labels in the onboarding flow.
Source: March 2025.
Decision: We fixed it.
```

**Why it fails:** No scope (who exactly?). No mechanism. No falsifier.
No confidence. No temporal validity. No contradiction noted.
Unsearchable. Produces no learning for the next researcher — or for
yourself in 6 months when you've forgotten the details.
