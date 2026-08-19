---
name: nice-product-knowledge
description: Grounded reference on NICE Ltd as a company and its product lines (CXone Mpower, Enlighten AI, NICE Actimize, Evidencentral/Public Safety) — compiled from public sources with citations. Invoke when the user asks anything about "NICE" the company, what a NICE product does, who its users are, or wants design/feature work grounded in real product context rather than generic assumptions (e.g. "what does CXone Mpower actually do", "who uses Actimize", "give me context on our public safety line before I design this screen").
disable-model-invocation: false
---

# NiCE product knowledge

Answer the question a designer keeps needing answered mid-task: *"what does this product actually do, and who is the real person using the screen I'm designing?"* — with sourced facts, not a guess dressed up as confidence.

This is a **public-knowledge base**, not an internal one. It was compiled in August 2026 from nice.com, niceactimize.com, nicepublicsafety.com and third-party coverage — the same material available outside the company. It's a floor to build on, not the ceiling. It will drift out of date (product names and AI features change fast at NICE) and it knows nothing about internal roadmap, unreleased features, org structure, or design decisions that were never made public. Say so when it matters — don't present a 2026-vintage web summary as current internal truth.

## When to invoke

Any of:

- "What does [CXone Mpower / Actimize / Evidencentral / Enlighten] actually do?"
- "Who uses this product — what's their day like?"
- "Give me context on NICE's [segment] before I design this"
- "What's the difference between CXone and Actimize?"
- "Is this feature idea consistent with what NICE already does?"
- Any question about NICE as a company (history, segments, scale, customers)

Don't invoke for generic UX/design-system questions that have nothing to do with NICE's actual business — that's `ux-eval`, `token-candidates`, etc.

## Reference files

Load only the file(s) relevant to the question — don't dump all five into context for a one-line question.

| File | Covers |
|---|---|
| `references/company-overview.md` | History, segments, scale, financials, HQ |
| `references/cxone-mpower.md` | Customer Engagement segment: CXone Mpower platform, Orchestrator, Agents, Autopilot, WEM |
| `references/enlighten-ai.md` | The Enlighten AI layer (Copilot, Actions) that cuts across CX products |
| `references/actimize-financial-crime.md` | Financial Crime & Compliance segment: NICE Actimize, Xceed, X-Sight |
| `references/public-safety-evidencentral.md` | Public Safety & Justice: Evidencentral, digital evidence management |

## How to use this for design work

1. **Ground, don't decorate.** If a user is designing a screen for, say, a fraud analyst, pull the real workflow context (case volume, what a "trust score" is, what X-Sight actually surfaces) from `actimize-financial-crime.md` rather than inventing plausible-sounding fintech UI tropes.
2. **Name the persona explicitly.** Each reference file ends with a short "who's actually using this" section — lead with that when it changes a design decision (e.g. a supervisor scanning dashboards under time pressure needs different information density than an agent mid-call).
3. **Flag the gap when public knowledge runs out.** If the user asks something only an internal source would answer (current roadmap, actual usage metrics, brand/design-system rationale, why a past feature shipped the way it did), say plainly that this is outside what's publicly documented, and suggest checking internal docs (Confluence, Product, the LMS at nice.csod.com) instead of guessing.
4. **Cross-cutting Enlighten AI is not a separate product line** — it's the AI layer inside CXone (and increasingly proposed as a pattern elsewhere). Don't design "an AI feature" as if it's bolted onto NICE's product suite; anchor it against how Enlighten Copilot / Actions already behave, so a new AI-assist idea feels consistent with the existing AI voice and interaction pattern rather than reinventing one.
5. **Two segments, two very different users.** Customer Engagement (CXone Mpower) skews toward operational, fast-paced, dashboard-and-chat UI for agents/supervisors. Financial Crime & Compliance (Actimize) and Public Safety (Evidencentral) skew toward investigative, evidence-heavy, audit-trail-driven UI for analysts/investigators. Don't carry contact-center interaction patterns into a compliance-investigation screen (or vice versa) without checking the fit.

## What NOT to do

- Don't state a specific number (revenue, customer count, case volume) without the citation that backs it — these change every quarter and the files note the as-of date.
- Don't treat this as covering internal tools, unreleased features, or anything under NDA — it only reflects what NICE has published publicly.
- Don't let this substitute for the actual audit/compliance tools (`run_full_audit`, `lyra_compliance_report`, etc.) — this skill is business/product context, not a design-token or accessibility check.
- Don't cite a source you didn't actually read in the reference file — if the user wants a live/current figure, say the reference file may be stale and offer to look it up fresh.
