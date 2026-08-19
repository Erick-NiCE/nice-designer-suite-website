---
name: ux-eval
description: Run the "10 Question UX Eval" against a design or live page and return a pass/fail recommendation with feedback. Invoke when the user asks to "eval this", "run a UX eval", "should this go to dev", "is this ready for the next step", "pass/fail this design", or similar. Collects a design/browser link, an optional Jira link, and context, audits the target if one is connected, then judges it through Bill's 10-question prioritization framework. For AI-surface artifacts, also runs the North Star Fox tenet check alongside the 10 questions.
disable-model-invocation: false
---

# UX Eval

Answer the question a design or feature review keeps coming back to: *"Is this worth moving forward — into the next design round, or to dev — or not yet?"* Ten questions, one verdict, and the reasoning behind it.

This is a judgment skill. `run_ux_eval` (the MCP tool) never decides pass/fail — it only assembles inputs. All ten questions are answered by you, in prose, grounded in what was actually gathered.

## When to invoke

Any of:

- "Run a UX eval on this"
- "Should this move to dev?"
- "Pass or fail this design"
- "Is this ready for the next step?"
- "Give me the 10-question eval on this"

## Step 1 — Collect inputs

Ask the user for (in one message, not three separate turns, unless they've already given some):

1. **Design or browser link** — a Figma file/frame URL, or the live page URL. Optional if they'd rather just paste a description, but flag that the eval will be weaker without it.
2. **Jira link** (optional) — ticket URL or key (e.g. `PROJ-123`). This server has no Jira access; if the user has the Atlassian MCP connector connected, fetch the ticket's description/comments yourself once they give you the link. If it's not connected, ask the user to paste the ticket's problem statement instead — don't guess at it.
3. **Description or extra context** (optional but valuable) — what problem this is meant to solve, who asked for it, any data already in hand (support tickets, analytics, prior research).

Don't block on all three — if the user only has a link, proceed with what you have and note what's missing in the final report.

## Step 2 — Gather audit data

Call `run_ux_eval` with whatever was collected:

```
run_ux_eval({ target: "auto", system: "lyra", designLink, jiraLink, context })
```

- If a Figma or Chrome target is connected, this returns a live compliance + accessibility audit (colors, text, spacing, components, a11y) for whatever is currently selected/inspected in that client. If the user's link points at something other than what's currently open in the plugin, tell them to open/select the right thing first, or proceed noting the audit may not reflect the linked artifact.
- If nothing is connected, `auditNote` explains why — that's fine. The eval can still run on the Jira ticket + description alone, but say so explicitly in the report; don't imply a design was inspected when it wasn't.
- The response also carries `framework` (the 10 questions) — treat that as the checklist for step 3, not as something to re-fetch or re-derive.

## Step 2.5 — Tenet check (North Star Fox)

When the artifact under review has an AI dimension — an AI-led surface, a CXone AI screen, or a JIRA ticket for AI-facing work — also call `get_skill({ id: "north-star-fox" })` to load that skill's full instructions and run its evaluation, using the same design/browser link, Jira link, and context gathered in Step 1. Its evidence-mode rules (source / ticket / image) apply on top of whatever `run_ux_eval` returned in Step 2.

Keep its verdict in its own labeled section — never merge its tenet/Lyra/Brand pass-fail scoring into the 10-question verdict below. They answer different questions (business prioritization vs. tenet and design-system compliance), and North Star Fox's own rule is to never average its sections into one score either.

Skip this step outright, and say so in one line, when the artifact has no AI dimension (e.g. a plain settings page or a non-AI utility screen with nothing to check against the AI tenets).

## Step 3 — Answer the 10 questions

Work through `UX_EVAL_QUESTIONS` in order. For each, write 1–3 sentences that actually use the evidence gathered — the audit's issue counts and domains, the Jira ticket's problem statement, the user's context — not generic design-review boilerplate. Where evidence is missing for a question, say so ("no usage data was provided, so reach is a guess") rather than inventing a number.

1. **Who feels this pain, and how many of them are there?** — Pull from Jira/context (reported by one PM vs. surfaced in support tickets vs. affects a whole flow).
2. **How painful is it, really, versus how painful does it look?** — Distinguish cosmetic audit findings (off-token color, minor spacing) from ones that block a task (broken a11y on a required form field, contrast failures on primary actions).
3. **What is the cost of doing nothing?** — Reason from severity: a handful of off-token colors costs little; unresolved a11y blockers or a broken core flow compound.
4. **Does this connect to a metric leadership already cares about?** — Only answer yes if the context/Jira ticket actually names one (conversion, support volume, NPS, task time). Don't invent a metric link that wasn't stated.
5. **How confident are you that the proposed direction would actually fix it?** — Base this on whether the audit findings map cleanly to fixable, well-understood issues (e.g. auto-fixable colors/spacing) versus murky/structural ones (layout, IA, missing research).
6. **What would it take to solve, roughly?** — Use the audit's issue counts and domains as a rough sizing signal: a few off-token colors ≈ small fix; broad component/layout/a11y issues ≈ bigger lift.
7. **Is this problem a symptom of something bigger?** — Look for a recurring pattern across the audit domains (e.g. off-token colors AND off-token spacing AND missing components in the same area often means "this section was never built to the design system," not five unrelated issues).
8. **Who else has to say yes for this to happen?** — Infer from what's touched: pure token/color swaps are usually design-only; component or layout changes often need engineering; anything a11y-related may need compliance sign-off.
9. **What's the opportunity cost?** — You generally can't answer this with authority (you don't see the team's backlog) — say what you can observe (severity/size) and flag that the user needs to weigh it against their own priority list.
10. **If you could only defend one sentence to a skeptical VP, what would it be?** — Write the actual sentence, using the real problem and real numbers gathered — not a template.

## Step 4 — Verdict

State one of: **Pass — proceed**, **Pass with conditions**, or **Not yet — hold**. Conditions/holds must name the specific blocking question(s) (usually #2 cost-of-inaction, #4 metric linkage, or #5 confidence-in-fix) and what would need to be true to flip the verdict.

Don't force a binary pass/fail when the honest answer is "not enough information" — say that plainly and name exactly what's missing (usage data, a named metric, engineering estimate, etc.) rather than guessing to force a verdict.

## Output

Heading: `## UX Eval — <scope>` where scope is the design link's file/page name (if audited) or "no live target" plus the Jira key if given.

1. **Inputs used** — one line each: design/browser link, Jira ticket (+ its stated problem, if fetched), context given. Mark any that were missing.
2. **Audit snapshot** — the inline gauge/summary from `run_ux_eval`, if one was returned. Omit this section entirely if no target was connected — don't show an empty table.
3. **AI tenet check (North Star Fox)** — the full verdict block from Step 2.5, when it ran. Omit entirely (don't insert a placeholder) when it was skipped as not applicable.
4. **The 10 questions** — numbered, each with your 1–3 sentence answer per Step 3.
5. **Verdict** — bolded, one of the three states above, with a one-sentence justification.
6. **What would change this** — 1–3 bullets naming the concrete evidence that would move a "hold" to a "pass," or that would make a "pass" more confident.

## What NOT to do

- Don't compute or imply a numeric score for the 10 questions — this is qualitative judgment, not the token-compliance gauge. Keep the audit gauge (if present) and the 10-question verdict visually separate so they aren't mistaken for the same measurement.
- Don't fold the North Star Fox verdict into the 10-question verdict, or vice versa. A design can pass the 10 questions (worth building) and still fail North Star Fox (built the wrong way), or the reverse — report both, distinctly.
- Don't fabricate Jira ticket content. If the Atlassian connector isn't available and the user didn't paste the ticket text, say the ticket wasn't read and reason only from what was given.
- Don't treat a clean compliance audit (few off-token issues) as a "pass" on its own — the 10 questions are about business/user prioritization, not design-system conformance. A perfectly on-token screen can still fail question 4 (no metric link) or question 9 (better things to build).
- Don't run mutation tools (`convert_*`, `fix_*`, `apply_*`) as part of this flow — it's a read-only judgment call, not a conversion.
- Don't skip stating what's missing. An eval built on partial inputs is fine as long as the gaps are named.
