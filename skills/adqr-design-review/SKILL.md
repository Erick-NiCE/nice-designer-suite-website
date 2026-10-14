---
name: adqr-design-review
description: ADQR design review by Prafull Mane. Judges a design (Figma frames, a live page, screenshots or a prototype) against its requirement, business goal and user goal, and returns four separate scores (Business Alignment, Requirement Coverage, UX Experience, AI Experience), a rule-based confidence level, a ship verdict ("Ready for engineering", "Revise before engineering", "Needs UX review", "Insufficient evidence") and the evidence behind every score, shown as a scorecard in chat. Use when the user asks "is this design ready for engineering?", "review this against the PRD/requirement", "does this cover the ticket?", "run ADQR", "score this design". It is a review, never a redesign: it does not suggest fixes. Not for design-system compliance (use run_full_audit), not for whether a feature is worth building (use ux-eval), not for the 12 AI design tenets (use north-star-fox).
---

# ADQR design review

ADQR (by Prafull Mane) answers one question: **is this design ready to hand to engineering?** It checks four things independently and never blends them into one number:

| Pillar | Asks | Needs |
|---|---|---|
| Business Alignment | Does it support the business goal? | Business Goal (and optionally outcome, rules, success criteria, scope) |
| Requirement Coverage | Does it implement what the requirement says, and can the user reach their goal? | Requirement, User Goal |
| UX Experience | Is it a good experience? (12 Nielsen-style heuristics) | Just the screens |
| AI Experience | Does its AI behave like an AI-first experience? | AI present in the design; otherwise not scored |

**The split of work is fixed.** You judge each dimension against its written anchors. The `score_design_review` tool then applies ADQR's rules as code: modality caps, exclusions, the pillar scores, the confidence level and the verdict. Never compute, adjust or second-guess those yourself. That separation is the point: the same judgements always produce the same verdict.

**Boundaries that are not up for negotiation** (from ADQR's own spec):

- It is a **review, not a design tool**. No recommendations, no rewrites, no ranked fix lists, inside the review. If the user asks for fixes afterwards, that is a separate request: say so, then help outside the scorecard.
- **Every score traces to evidence.** Absence of evidence lowers confidence; it is never filled in with a guess.
- **Never look behind a sign-in wall or bot check.** If a page shows a login, a CAPTCHA or a "click to view prototype" cover, do not score it as the product. Ask for a public link or exported screenshots of the real screens.
- **Not yet calibrated.** ADQR's own release gate (30 human-scored cases, each run 5 times) has not been run. Say once, plainly, that the result is a structured first read, not a calibrated grade.

## Step 1: Gather the context

Ask for what is missing, in one message. Never invent a value to fill a gap; an empty field simply excludes the checks that need it, and the tool handles that.

- **Requirement**: what the design must do.
- **User Goal**: what the person using it is trying to get done.
- **Business Goal**: why the business wants it.
- Optional, each unlocks one Business Alignment check: Business Outcome, Business Rules, Success Criteria, Scope.

If the user gives a PRD, ticket or doc, pull the fields out of it. A field the user typed always wins over one you extracted. If the document does not clearly state a field, treat it as missing rather than inferring it. If a Jira link is given and an Atlassian connector is available, read the ticket for the requirement.

## Step 2: Capture the design with the NiCE Designer tools

Use the connected clients rather than asking the user to paste screenshots. `list_targets` first.

- **Figma:** `get_selection_info({ target: 'figma' })` to see what is selected, then `screenshot_page({ target: 'figma' })`, which exports the current selection. For a flow, either ask the user to select one frame at a time, in order, capturing each, or capture all the frames selected together as one image and count the distinct screens in it.
- **Chrome:** `select_page({ target: 'chrome' })` and `screenshot_page({ target: 'chrome' })`. Capture each state that matters (empty, filled, error, success) if the user can step through them.
- **Pasted images or files:** use them as given.
- **Accessibility evidence:** with Figma or Chrome connected, run `audit_accessibility` on the same scope. Its failures are **observed** evidence for the `accessibility_pour` dimension, and a failure caps that dimension the way any named defect does. Do not claim WCAG compliance from it either way.

Then set three facts honestly. They change the scoring, so never round them up.

- **modality**:
  - `static` for screenshots and Figma frames;
  - `semi_interactive` for a clickable prototype you actually stepped through, with limited real behaviour;
  - `fully_interactive` only for a working build you actually operated.
  A live page you only screenshotted is `static` evidence.
- **screenCount**: distinct screens or states judged. With fewer than 2, flow completeness, consistency and the flow-state checklist cannot be assessed.
- **sufficientContent**: false if what you captured is a loading screen, a prototype cover page, a blank state or an error page rather than the real product. That forces Low confidence, and the scorecard says so prominently.

## Step 3: Judge every dimension

Load the rubric for each pillar with `get_skill({ id: 'adqr-design-review', file: 'references/<file>' })`:

- `references/requirement-coverage.md` (6)
- `references/ux-experience.md` (12)
- `references/business-alignment.md` (5)
- `references/ai-experience.md` (10)
- `references/flow-states.md`
- `references/modality-caps.md` (only to explain a capped band to the user afterwards)

Skip the dimensions the tool will exclude anyway (each file says when). Every other dimension needs one entry. These rules come from ADQR's own scoring prompts:

1. **Evidence first, band second.** Write what you actually saw, then pick the band whose anchor sentence matches it. Never pick a number and justify it afterwards.
2. **Exactly one band:** 0, 2, 4, 6, 8 or 10. Never round up to a kinder band, never split the difference between two anchors.
3. **A named defect caps the band.** If your own evidence names a specific problem (a missing state, a contradiction, numbers that do not reconcile), the band cannot sit above the anchor that describes that problem, however strong the rest is.
4. **Stay inside each check.** Respect its "Evaluate for" list and its "Do not evaluate" list; one check's reasoning must not bleed into another's.
5. **Tag every finding honestly.**
   - `observed`: you can point at it.
   - `inferred`: a reasonable conclusion from what is shown, such as a control's likely behaviour.
   - `assumed`: not grounded in the screens or the context.
   Never mark something observed to make it sound surer.
6. **Write for a product manager or engineering lead, not a designer.** Say what a person sees and what happens to them, in everyday words ("pop-up", not "modal"; "main button", not "CTA"). Name a real kind of person ("an admin"), not "users". For each dimension give:
   - `evidence`: one or two sentences;
   - `evidenceShort`: one clause of about 12 words, no hedging;
   - `impact`: one sentence on the consequence for the user or business, never a fix.

**Requirement Coverage, part by part.**

1. Split the requirement into individually checkable parts (R1, R2...). Split only what it actually states. "Hourly, weekly or monthly" is three parts. Never add a part for something merely sensible, such as search or bulk actions: that is a UX observation, not a requirement gap.
2. Trace each part to the screens as `covered`, `partial`, `missing`, `conflict` (the design does the opposite) or `not_verifiable` (cannot be checked from this input), with evidence.
3. Also list:
   - `missingRequirements`: stated requirements with no UI evidence;
   - `extraFeatures`: prominent features nobody asked for.

**AI Experience.**

- First decide `aiPresent`: is there any AI-driven interaction anywhere, such as suggestions, drafting, an assistant or automated decisions? If not, leave every AI dimension out. The tool records them as not applicable, which does not lower confidence.
- If AI is present, score each AI dimension on what you can see. Mark one `outOfScope` only when that specific concern genuinely does not apply.
- The tool applies the modality caps afterwards, so do not pre-cap.
- For the separate 12 NiCE AI design tenets, `north-star-fox` is its own review. Offer it, but do not mix its scores into this one.

**Flow states** (only with 2 or more screens). For each of the seven, decide whether it is shown anywhere across the screens. Do not assume a state exists off-screen.

## Step 4: Score it

Call `score_design_review` with everything above:

- `title`, `modality`, `screenCount`, `sufficientContent`;
- `contentNote`: one sentence on what the screens show;
- `aiPresent`, `context`;
- `dimensions`, `requirementElements`, `missingRequirements`, `extraFeatures`;
- `flowRisks`, when there are 2 or more screens.

If it returns problems, it lists all of them at once. Fix them and call it again; do not drop a dimension to make the error go away.

## Step 5: Present it in chat

The tool's result already carries the scorecard: an inline image with the verdict, confidence, four pillar gauges and flow states. Your reply adds only what the image cannot:

1. The verdict and confidence **exactly as the tool returned them**, with its stated reasons. Never restate a different verdict, average the pillars, or soften a Low confidence.
2. If confidence is Low because the screens did not show the product, lead with that.
3. The weakest checks (band 4 or below), each with its plain-language finding and evidence tag.
4. The requirement parts table, so the reader can see what is covered and what is missing.
5. Flow states not shown.
6. What was not scored and why (missing context, one screen, needs an interactive version), so the reader knows what a fuller input would unlock.
7. One line saying the rubric is not yet calibrated.

If the chat surface offers an inline interactive visual (for example a widget tool that renders HTML in the conversation), you may also render the per-check evidence as an expandable list grouped by pillar. Build it **only** from the tool's JSON: every score, band, cap and label as returned, nothing recomputed, no fixes added. Where no such tool exists, the image plus markdown is the complete result.

Keep the reply short. The full per-check evidence is in the tool result for anyone who wants it.
