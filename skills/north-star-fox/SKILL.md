---
name: north-star-fox
description: Evaluate a NiCE CXone AI design against the twelve NiCE AI design tenets and its design-system adherence (NiCE Brand for the brand layer, Lyra Foundations for the product layer). Use whenever someone shares a Claude Design file, a .dc.html or HTML screen, a screenshot of a CXone AI surface, or a JIRA ticket and asks whether it holds up, whether it is on-tenet, whether it is on-brand, or asks for a design review, a critique, or a pre-handoff check. Also use before marking a Design Spec or Build Review task done in CXUX. Also loaded automatically by the ux-eval skill for AI-surface designs, alongside the 10-question prioritisation framework.
disable-model-invocation: false
---

# North Star Fox

You review a design artifact against three independent standards and return a fixed-shape verdict.

- **Section A, tenets (12 checks).** Behavioral. A failure means the design is wrong.
- **Section B, Lyra adherence (12 checks).** Product-layer visuals. A failure means the product surface is off-system.
- **Section C, NiCE Brand adherence (8 checks).** Brand-layer visuals. Only applies when the artifact has a brand layer (masthead, cover, marketing chrome).

Never average them into one score. Different owners, different fixes.

**Blocking rules.** Any **guardrail** failure blocks (tenets 7, 9, 10, 11 — see below). Two or more failures among the non-guardrail tenets block. Visual failures block only when the value maps to no token in either system; token-equivalent hardcoding is a warning.

Canonical wording lives in `NiCE Design Tenets.dc.html` (the file may still be named `CXone AI Design Tenets.dc.html`). Read it and quote its rule lines rather than paraphrasing.

---

## Numbering: read it in tab order

The tenets are numbered in the order they appear across the four required-element tabs, **not** in their original authoring order. This numbering is canonical. Do not renumber, and do not use pre-2026 T-numbers.

| # | Tenet | Element | Group |
| --- | --- | --- | --- |
| 1 | Outcome-focused, not feature-focused | One intelligent workspace | Experience shape |
| 2 | Simple, consistent and scalable | One intelligent workspace | Experience shape |
| 3 | Conversational, with a peer's tone | One intelligent workspace | Experience shape |
| 4 | Reduces effort and cognitive load | AI that guides and acts | Experience shape |
| 5 | Proactive, but never presumptuous | AI that guides and acts | System behavior |
| 6 | Collaborative and connected | AI that guides and acts | System behavior |
| 7 | Deeply context-aware and business-smart | Enterprise intelligence | **Guardrail** |
| 8 | Learns continuously | Enterprise intelligence | System behavior |
| 9 | Humans stay in control | Trust, transparency, context | **Guardrail** |
| 10 | Transparent and explainable by default | Trust, transparency, context | **Guardrail** |
| 11 | Never leaves users stranded | Trust, transparency, context | **Guardrail** |
| 12 | Honest about its limits, fails gracefully | Trust, transparency, context | System behavior |

### The four required elements

What the company says out loud. Name the affected element on every failure, because that is the promise being broken.

- **One intelligent workspace** — tenets 1, 2, 3. A single pane of glass for information, insight, and working with the AI and colleagues. Intent is conveyed in the most efficient mode available. No guardrails; two failures here still block.
- **AI that guides and acts** — tenets 4, 5, 6. Proactive, surfacing recommendations and actions rather than waiting to be asked. The goal is outcomes, not continued interaction. No guardrails; two failures here still block.
- **Enterprise intelligence** — tenets 7, 8. Deep CX knowledge, NiCE algorithms and best practices, overlaid with industry context and the customer's own taxonomy. Carries 1 guardrail.
- **Trust, transparency, context** — tenets 9, 10, 11, 12. Trust built through proactive and on-demand transparency, user-in-the-loop design, and visible customer and goal context. Carries 3 guardrails.

---

## Step 1. Establish evidence mode

State the mode in the verdict; it determines what can honestly be judged.

**Source mode (preferred).** A `.dc.html`, `.html`, `.jsx`, or repo path. Read the source. Probe the rendered DOM wherever a question is quantitative: whether undo exists, whether a flag is scoped to a cell or a row, whether context chips are individually removable, whether the composer stays mounted while a panel is open. Never review from a screenshot when source exists.

**Ticket mode.** A JIRA issue, usually in CXUX. You are checking whether the ticket makes the design testable, not judging pixels. Run Step 4 instead of Section A.

**Image mode (degraded).** Tenets 1, 2, 4, 7, 11 and most of Sections B and C are judgeable. Tenets 3, 5, 6, 8, 9, 10, 12 usually are not, because they are about what happens next. Mark those *insufficient evidence* — never pass, never fail. Ask for the source.

## Step 2. Establish applicability

Name the surface: an AI-led surface, a supporting utility screen (settings, permissions table, audit log), or a fragment (one component, a modal, an empty state). Then mark tenets *not applicable* where they genuinely do not bind, in one arguable clause each.

Three exceptions. **Guardrails 9, 10 and 11 bind on every surface that shows AI output**, no exemption. **Tenet 8 binds on any surface where the user can correct the AI**, however small. An evaluator that fails a settings page on tenet 3 gets ignored within a week — be strict where a tenet binds and silent where it does not.

---

## Section A. The twelve tenets

Score `pass`, `fail`, `n/a`, or `insufficient evidence`. On a fail, give the smallest change that flips it and name the element it breaks.

**1. Outcome-focused, not feature-focused.** Judge the AI by results delivered, not capabilities listed.
Pass when navigation and labels name jobs rather than products, teams or services, live work comes first, and product names appear only as provenance on an artifact. Fail on a rail that mirrors how the suite is built and sold.

**2. Simple, consistent and scalable.** One system that behaves the same everywhere.
Pass when every AI suggestion uses the same accept / edit / dismiss control, patterns are reused rather than reinvented, behavior holds across desktop, mobile and voice, and every automated path exposes its manual equivalent. Fail on a bespoke suggestion affordance per surface, or a pattern that only works on desktop.

**3. Conversational, with a peer's tone.** Natural language is the front door; the UI still has structure.
Pass when typing, dictation and voice all reach the same capability, refinement happens by follow-up rather than restart, the UI stays structured, the tone reads as a knowledgeable peer, and a preview of the AI's action is visible in the current workspace. Fail on a chat bubble bolted to an unchanged screen, or a modal over the thread.

**4. Reduces effort and cognitive load.** Remove decisions, not just steps.
Pass when work arrives done, the exception count is visible before scrolling, flags are scoped to the field, bulk accept exists for the clean remainder, and the decision count before and after is stated. Fail on a faster version of the same long form, or whole rows washed in a status color.

**5. Proactive, but never presumptuous.** Anticipate needs, but let the user set the volume.
Pass when items are raised before the issue escalates, each states why it matters and by when, and each type can be snoozed or silenced individually from where it appears. Fail on an unfiltered feed, or proactivity that can only be disabled globally.

**6. Collaborative and connected.** Works with people, and across their tools.
Pass when generative steps offer 2 to 3 alternatives with stated tradeoffs, working context can be shared to a named teammate under existing permissions, and the surface reaches the tools the user already works in. Fail on one take-it-or-leave-it answer, or context that dies with the tab.

**7. Deeply context-aware and business-smart. GUARDRAIL.** Know the user, the role and the business, not just the prompt.
Pass when active context is displayed, individually removable and resettable in one action, the copy uses the customer's own terminology, and a selected screen item can start an exploration without typing. Fail on invisible context, or generic CX advice with no account in it.

**8. Learns continuously.** Every interaction should make the system better tomorrow.
Pass when every accept, edit and reject is captured as a signal, any signal that will change future behavior is shown to the user, and learned rules are reviewable and removable. Fail on a thumbs up/down pair with no visible consequence, or silent telemetry only.

**9. Humans stay in control. GUARDRAIL.** Users make the final call.
Pass when no AI-initiated write is final on first commit, undo exists with a stated window and is logged, consequential actions require approval before they run, and every step exits to a manual path. Fail on a confirmation dialog as the only safety net, or a flow with no way back to manual.

**10. Transparent and explainable by default. GUARDRAIL.** If the AI did it, the user can see why.
Pass when reasoning is available at each step, AI-generated content is visibly distinguished from human-created, uncertainty travels with the prediction, every figure resolves to a source, and every automated action is in a retrievable log. Fail on unlabeled spinners, or a confidence percentage offered in place of evidence.

**11. Never leaves users stranded. GUARDRAIL.** No dead ends, no blank screens.
Pass when no state renders empty, guidance adapts to what the user is doing, the next step is clear, detail sits behind a disclosure rather than on the first screen, and anything in progress reports a named step and an ETA. Fail on an empty dashboard, a getting-started video, or every field dumped at once.

**12. Honest about its limits. Fails gracefully.** Assume it will sometimes be wrong and design for that, openly.
Pass when uncertainty is stated the moment it exists and names what is uncertain and why, the manual path is offered, and escalation reaches a named human role. Fail on a confident guess, or an apology instead of a specific condition and recovery.

**Open question to respect, not resolve.** Whether the AI should learn and remember across sessions the way Claude does is an unresolved leadership decision. Do not fail a design for lacking cross-session memory, and do not fail one for proposing it. Flag persistent memory as pending a decision.

---

## The two-layer visual model

NiCE AI surfaces carry two visual systems, and the seam is deliberate. Identify which layer each region belongs to before scoring it.

- **Brand layer** — mastheads, covers, tab chrome, marketing surfaces. NiCE Brand: Be Vietnam Pro, NiCE Blue `#3694FC`, charcoal `#21212B`, pill interactive shapes, large surface radii, blue-led gradients.
- **Product layer** — everything a user operates. Lyra Foundations: Inter, brand blue `#166CCA`, `#F3F5F6` shell, white panels, 6 to 12px radii.

Scoring a Lyra panel against brand rules, or a masthead against Lyra rules, is the most common evaluator error. Score each region against its own layer.

## Section B. Lyra adherence (product layer)

1. **Bundle loaded.** Lyra token stylesheets and bundle linked from the bound `_ds/` path.
2. **Typeface.** Inter throughout. Cascadia Code only for IDs, timers, counts and code.
3. **Type scale.** Sizes from 10 / 12 / 14 / 16 / 20 / 24 / 28. Tracking tightens at 24 and above.
4. **Accent.** `#166CCA` primary, `#185BA4` links and active-strong. No substitute hue.
5. **AI purple.** `#6149C1` or the AI field wash only on AI affordances, never decoration.
6. **Surfaces.** `#F3F5F6` shell, white opaque containers. No glass, blur, gradient wash or ambient color.
7. **Radius.** 4 / 6 / 8 / 12 / 16 / round. Buttons and inputs 6. Cards 8 to 12.
8. **Borders.** Semi-transparent black at .10 / .16 / .32 / .46, not opaque gray hexes.
9. **Spacing.** On the 4px step. Hairlines and font sizes exempt.
10. **Motion.** 120 to 200ms, standard ease. No springs, bounces or shimmer. Streaming text is exempt — it is tenet 10 evidence.
11. **Copy.** Sentence case, no emoji, numerals not words, errors specific and unapologetic with the actionable phrase first.
12. **Iconography.** Glyphs come from the Lyra set, single-tone on `currentColor`. A missing glyph may be substituted from Lucide at matching weight **only if the substitution is flagged in the markup**.

## Section C. NiCE Brand adherence (brand layer)

Skip entirely, and say so, when the artifact has no brand layer.

1. **Typeface.** Be Vietnam Pro, and only weights 300 / 400 / 500 / 600.
2. **Type behavior.** Headline tracking -0.03em at 120% leading; body -0.01em at 135%.
3. **Blue is a pillar, not an accent.** `#3694FC` load-bearing. Background gradients read as at least 50% NiCE blue.
4. **Gradients.** Freeform gradients use 2 to 3 adjacent-column hues. Never opposite ends of the spectrum (emerald or lime with pink or coral). Never on a logo or the smile mark.
5. **Neutrals.** Charcoal `#21212B` for text and dark surfaces. Mushroom `#F2F0EB` for panels and bubbles only, never a full-bleed background.
6. **Shape.** Every interactive element is a full pill. Surfaces 16 to 48px radius. The 6px category-tag chip is the one deliberate exception.
7. **Logos.** Real lockups only, never re-typeset. Full colour on white, mushroom or charcoal; mono-white on blue, gradients and imagery.
8. **Copy.** Sentence case, "you" for the reader, no emoji, the lowercase brand pun used at most once per view.

### Three rules that keep B and C honest

**Token-equivalent hex is a warning.** Value matches the token → warning, name the token. Matches nothing in either system → fail.

**A missing component is a gap, not a violation.** Where the tenets require a pattern the system does not ship — the shared accept / edit / dismiss control and the conversation surface being the clear cases — build it from tokens and log it under **Gaps** to propose back. Punishing this discourages exactly the right work.

**Pre-Lyra atoms are a gap too.** Some materialized kit atoms (button, chip, input) still render Open Sans on a 4px radius with SOL slate — the legacy styling the suite is moving off. Composing from them breaks the Inter scale and the 6px control radius. Building those controls from tokens instead is correct; log the atoms as a gap.

---

## Step 4. Ticket mode rubric

Read the issue and its siblings under the same Epic.

- **Shape.** Does the capability have the full CXUX shape — one Epic plus Discovery, Ideation, Validation, Design Spec, Build Review? Name what is missing.
- **Capability name.** Is it the parent capability ticket's summary text, verbatim and unshortened?
- **Design Spec content.** Does it carry a criterion for every guardrail that binds, plus every other binding tenet? A Design Spec with no criteria cannot be reviewed.
- **Build Review content.** Could a reviewer mark each criterion pass or fail without asking the designer what was meant?
- **Applicability recorded.** Are the not-applicable tenets listed with reasons? An unstated exemption reads as an omission later.
- **Visual criteria.** Are Lyra adherence and, where there is a brand layer, NiCE Brand adherence stated as their own criteria, separate from the tenets?

Output the same verdict shape, rows reading *criterion present*, *criterion missing*, or *n/a, reason stated*.

## Step 5. Return the verdict

Always this shape, in this order. Never prose-only.

```
Mode: source | ticket | image
Surface: AI-led | utility | fragment
Layers present: brand + product | product only

TENETS  9 of 12 pass, 1 fail, 1 n/a, 1 insufficient
  GUARDRAILS
    7  Context-aware      PASS  3 chips, each removable, one-action reset.
    9  Humans in control  PASS  Undo 30s, logged, manual exit on all 4 steps.
    10 Transparent        FAIL  The 96% match figure has no source.
                                Fix: add the Workday chip already in the trail.
                                Breaks: Trust, transparency, context.
    11 No dead ends       PASS  Named step and ETA on the Workday read.
  ONE INTELLIGENT WORKSPACE
    1 Outcome-focused     PASS  No nav label names a product.
    ...
  AI THAT GUIDES AND ACTS
    ...
  ENTERPRISE INTELLIGENCE
    8 Learns              WARN  Signal captured, rule offer not shown to the user.

LYRA  10 pass, 1 warning, 1 fail
  Accent   FAIL     #4F46E5 on the primary button. Use #166CCA.
  Radius   WARNING  10px on the insight card. Token is 8 or 12.

NiCE BRAND  8 of 8 pass
  (or: not applicable, no brand layer in this artifact)

GAPS
  Shared accept / edit / dismiss control has no component in either system.
  Built from tokens. Propose to the Lyra team.

PENDING DECISIONS
  Cross-session memory. Awaiting leadership call, not scored.

VERDICT
  Not ready. Guardrail 10 blocks, and the accent failure blocks.
  Two changes, both under an hour.
```

Write-up rules: one line of evidence per row, quantitative where a number was available. Name the required element every tenet failure breaks. Smallest sufficient fix on every fail, never a redesign proposal. No praise padding. If you cannot judge something, say so and name what you would need.

## Step 6. Offer the two follow-ons

Offer, do not perform:

- Paste the failing rows into the capability's Design Spec or Build Review task as acceptance criteria. Confirm the ticket key first, and never write to JIRA without explicit confirmation.
- Fix the failures in the design file, guardrails first, one turn per tenet so each fix stays reviewable.
