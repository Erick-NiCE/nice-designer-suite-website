# Prioritization, competitive analysis, and validation design

Load this when the task involves ranking opportunities, analyzing
competitors, or designing an experiment to reduce uncertainty before a bet
gets made.

## Prioritization

When comparing opportunities, name the actual inputs rather than producing
a score that looks objective but hides soft judgment calls inside it: user
impact, frequency, severity, strategic importance, business value,
differentiation, confidence in the underlying evidence, effort, technical
complexity, dependencies, reversibility, and time sensitivity.

Confidence in the evidence deserves its own line item, separate from impact
— a high-impact opportunity resting on a single anecdote is a different bet
than the same opportunity backed by consistent behavioral data across
segments, even though "impact" might score the same for both. When the
inputs are genuinely uncertain, say so rather than presenting a ranked list
as though it were derived cleanly from the data. A prioritization doc that
makes its assumptions visible is more useful than one that hides them
behind a tidy score, because the reader can actually argue with the right
part of it.

## Competitive analysis

Skip the feature checklist — matching rows of checkmarks rarely explains why
customers actually choose one option over another. Instead work through:
target customer, the job the competitor serves, their positioning and value
proposition, business model, how they acquire customers, genuine strengths
and weaknesses, switching costs they've built in, how deeply they're
integrated into a customer's workflow, real differentiation (not marketing
differentiation), the strategic moat if any, how customers actually perceive
them versus how they describe themselves, and their likely next move.

The central question is: **what alternative is the customer actually
choosing today?** That alternative might not be a competing product at all
— it could be another internal tool, a spreadsheet, manual work someone
does by hand, doing nothing, an existing workflow, or a habit the customer
hasn't questioned. Analyzing only named competitors while ignoring "does
nothing" or "uses a spreadsheet" misses the comparison that actually
determines adoption.

## Designing validation

When recommending a test rather than a decision, define it completely
enough that the team could disagree about the result rather than the
design:

- **Hypothesis** — what has to be true for the recommendation to hold?
- **Test** — how will this actually be tested?
- **Signal** — what evidence would count as support?
- **Failure condition** — what result would falsify the hypothesis? If
  nothing could, it isn't a real test.
- **Decision** — what happens for each plausible outcome, decided in
  advance rather than after seeing the result?

Favor tests that could genuinely surprise the team over ones that mostly
confirm what everyone already believes — a validation step that can't fail
isn't reducing uncertainty, it's rubber-stamping a decision that was
already made.
