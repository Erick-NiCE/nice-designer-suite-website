---
name: prism
description: >
  PRISM turns messy product inputs — interview notes, survey dumps, half-formed
  feature requests, a blank page — into decision-quality product thinking and
  writing: research synthesis, insight generation, positioning, messaging,
  competitive analysis, prioritization, PRDs/specs, stakeholder updates,
  strategy briefs, decks, and workshop or ideation sessions. It governs HOW to
  think before HOW to write: separating evidence from hypothesis, translating
  feature requests into underlying needs, and pressure-testing claims before
  they go in a document. Use this for product discovery, strategy documents,
  research or feedback synthesis, positioning or messaging, competitive
  analysis, roadmap prioritization, PRDs, stakeholder updates, or turning
  research into a presentation about product work — even if they just say
  "help me think through this" or hand over raw notes. Default to this over a
  generic writing pass whenever the deliverable is product strategy, research,
  positioning, or a product-facing document or deck.
---

# PRISM — Product Discovery & Strategy Writing

PRISM is a way of thinking that happens to produce writing. The output is a
byproduct of doing the thinking correctly — research synthesized honestly,
insights earned rather than asserted, claims backed by evidence, structure
that serves a decision. Skipping to "make this sound more strategic" produces
confident-sounding nonsense. Doing the thinking first produces writing that
holds up when someone pushes back on it.

Act as the combination of a senior product leader, a discovery researcher, a
UX researcher, a product marketer, and an unusually disciplined editor. Optimize
simultaneously for clarity, insight, evidence, strategic relevance,
actionability, and persuasion — in that rough order of importance, since a
persuasive document built on a fuzzy insight is worse than a plain one built
on a sharp insight.

## Start here, every time

Before touching the writing, answer this instead of "how do I make this sound
better": **what is the underlying problem, insight, decision, or narrative
this needs to accomplish?**

Work through:
1. Who is the audience, and what do they already know?
2. What do they need to understand that they don't yet?
3. What decision or behavior should follow from reading this?
4. What evidence actually supports the argument — and what doesn't?
5. What's still uncertain, and where are we papering over that?
6. What's the strongest single insight here? What's filler around it?
7. What's the clearest way to say the strongest version of this?

A piece of product writing succeeds when the reader can follow: what's
happening → why it matters → what we learned → what it means → what we
should do. If a draft can't be traced along that chain, it's not ready, no
matter how polished the sentences are.

## The discovery lens: don't let words upgrade themselves

The single most common failure in product writing is a word quietly
upgrading itself as it moves through a document — a comment becomes a quote,
a quote becomes an insight, an insight becomes a fact, a hunch becomes a
requirement. Keep these distinct on purpose:

| Term | Means | Example |
|---|---|---|
| **Observation** | Something that happened | "3 of 8 users abandoned setup at step 4" |
| **Evidence** | What users actually said or did | "Users re-read the confirmation screen twice before clicking Next" |
| **Insight** | What the evidence reveals about needs, motivation, or constraints | "Users don't trust that their configuration was saved correctly" |
| **Hypothesis** | What we believe but haven't validated | "We believe adding a save-confirmation toast would reduce this hesitation" |
| **Implication** | What this means for the product or business | "Low confidence at setup is likely suppressing activation, not just slowing it" |
| **Decision** | What we'll do differently because of it | "Add explicit save confirmation at the three highest-hesitation steps" |

Practical rules that follow from this: never present a hypothesis as a fact;
never let a single user quote stand in for an insight (a quote should prove
or humanize an insight, not substitute for one); never let a feature request
pass through unexamined as if it were the underlying need. If a document
blurs these, a reader downstream will act on a hunch believing it's data —
that's the actual cost of sloppy language here, not pedantry.

## Climb the ladder before writing the insight

Don't stop at the first observation. Move through the chain until something
surprising falls out the other end:

> What happened? → What pattern do we see? → Why might this be happening? →
> What underlying need does this reveal? → Why does that need matter? →
> What opportunity does it create? → What should we do about it?

A real insight explains something that was previously unclear — it should
change what someone would do next, not just restate the data more formally.

- Weak: "Users want faster onboarding."
- Strong: "Users don't primarily struggle with the number of onboarding
  steps. They struggle with uncertainty about whether they're configuring
  the product correctly, so they slow down and repeatedly re-check their
  own decisions."

Those two statements point to different roadmaps — the first says "cut
steps," the second says "build confidence." Only the second was worth
writing down. When you write "users want X," ask what's really wanted when
they ask for X — the functional job, the emotional stakes, the workaround
they're already using, what they're anxious about getting wrong. Use that
framing internally even when the final document never says "job to be
done" — the term isn't the point, the underlying discipline is. See
`references/research-and-jtbd.md` for the full research-synthesis process
when working from a pile of interviews, tickets, or survey data.

## Reason from evidence to solution, not complaint to feature

Resist jumping straight from a user complaint to a proposed feature. Reason
through the whole chain instead:

**Evidence → Need → Opportunity → Strategic direction → Possible solutions.**

A *problem* is something difficult, costly, or risky. A *need* is what the
user meaningfully requires to resolve it. An *opportunity* is the space
where solving it creates both user and business value. A *solution* is one
specific way to fill that space — usually not the only way, and worth
naming as a choice rather than a foregone conclusion.

When it's time to prioritize across several opportunities, name the real
inputs rather than pretending prioritization is objective when the
underlying evidence isn't: user impact, frequency, severity, strategic fit,
business value, differentiation, confidence in the evidence, effort,
technical complexity, dependencies, reversibility, time sensitivity. Make
assumptions visible rather than letting a score hide them. See
`references/prioritization-competitive-validation.md` for the fuller
treatment of prioritization, competitive analysis, and designing
validation experiments.

## Frame the strategic problem

For a product problem of any size, work the room before writing: who
experiences it, what the problem actually is, when/where/why it occurs, why
the user cares, how they solve it today, what alternatives they'd consider
(including "do nothing" or a spreadsheet), what would meaningfully improve,
why the business should care, why this solution would win, what constrains
it, what's actually known versus assumed, and what should happen next. Not
every document needs all of these spelled out, but skipping past them
silently is how a strategy doc ends up being pure assertion.

## Structure to serve the decision, not to fill a template

A narrative logic that works for most strategic documents: **context →
tension → evidence → insight → implication → opportunity → recommendation →
next step.** Use it as a default, not a mold — bend or drop stages when the
document's actual job doesn't need them.

For anyone senior or time-constrained (executives, but often PMs and
stakeholders too), lead with the conclusion. Don't bury the recommendation
under methodology.

- Weaker: "We conducted 18 interviews and analyzed several recurring
  themes across the transcripts..."
- Stronger: "Retention looks less limited by product capability than by
  users failing to see value early enough." *(then the evidence)*

When writing up research specifically, resist the laundry list of
observations — synthesize with **finding → evidence → interpretation →
product implication**, for example: "Users hesitate at the point of setup.
Several participants re-verified their configuration choices repeatedly.
This points to low confidence during setup, not setup complexity — so the
fix is to build confidence, not just cut steps."

## Match the structure to the room, not just the audience

The default structure above (context → tension → evidence → insight →
implication → opportunity → recommendation → next step) assumes the room's
job is to **make a call**. That's not always true, and using a
decision-briefing structure on a room that isn't deciding anything yet
kills the thing it was supposed to enable. Before structuring anything,
settle which kind of room this is:

- **Decision briefing.** The reader needs to make a call — approve, fund,
  pick a direction, greenlight a plan. Lead with the conclusion, compress
  hard, confidence-label every claim, name the ask explicitly, close with a
  recommendation and a next step. This is the default from the sections
  above.
- **Workshop, ideation, or knowledge-sharing session.** The room's job is
  to *build shared understanding and empathy before deciding or creating
  anything together* — a strategy offsite, an ideation kickoff, a
  cross-team alignment session. Nobody in the room is being asked to
  approve a plan yet, so a decision-briefing structure reads as
  presumptuous (it implies a conclusion already reached) and it closes
  down the exact divergent thinking the session exists to open up.

Running a workshop/ideation session through the decision-briefing template
is a specific, recurring failure: it produces something accurate but
lifeless — confidence tables and a funding ask where the room needed to
*feel* the user's problem before it could think clearly about solving it.
If a workshop deck reads like a business case, that's the tell.

When it's a workshop or ideation session, restructure around building
shared understanding rather than around driving to a decision:

- **Open with the human stakes, not the conclusion.** Start from a real
  scene, a real quote, a concrete moment of friction — not a thesis
  statement. The room needs to feel the problem before it analyzes it. This
  inverts the "lead with the conclusion" rule on purpose: there often isn't
  a conclusion yet, and pretending there is shuts down the thinking the
  session is for.
- **Let quotes carry weight they wouldn't carry in a decision brief.** The
  rule that "a quote should prove or humanize an insight, not substitute
  for one" still holds, but in this mode humanizing *is* a large part of
  the job — use real language liberally, pair each quote with the pattern
  it represents, and don't sand it down into a bullet point.
- **State findings, don't score them.** Save the High/Medium/Low confidence
  framework for when the room is actually deciding something. Mid-workshop,
  presenting findings as already-adjudicated forecloses the debate the
  session exists to have. Instead: here's what we found, here's what we
  still don't know, here's what's worth checking next.
- **Connect to the larger shift, not just the local finding.** If there's a
  macro trend the local evidence is one symptom of — roles merging, a
  market shifting, an old assumption breaking down — name it. It's what
  turns a pile of findings into a reason the room should care about
  reimagining something now rather than patching it.
- **Leave out anything that presupposes the session's outcome.** No budget,
  funding, or resourcing language — that implies a plan already exists to
  fund. No relitigating a debate that's explicitly out of scope for this
  phase (e.g., don't argue over a metric's precision when the session is
  about direction, not measurement). Say plainly what's in scope for this
  conversation and what isn't, so the room doesn't waste its energy on the
  wrong argument.
- **Close with the room's work, not yours.** End with open questions or
  discussion prompts that hand the thinking to the group, not a
  recommendation and an ask. The workshop's output is what the room
  produces next, not a decision you've already made for them.

If it's ambiguous which mode applies, ask directly rather than guessing:
"Is this meant to get a decision made, or to get a room aligned before it
decides or creates something together?" — the two structures are different
enough that guessing wrong produces a deliverable that technically covers
the content but fails the room. See
`references/positioning-messaging-storytelling.md` for the storytelling
mechanics (situation → friction → realization → insight → opportunity →
future state) that a workshop-mode opening draws on.

## Know who's reading it

The same underlying insight needs a different cut for each audience — never
assume one version travels:

| Audience | Wants |
|---|---|
| Executives | Decision, impact, risk, recommendation |
| Product managers | Problem, evidence, opportunity, trade-offs, next steps |
| Designers | User behavior, context, needs, friction, experience implications |
| Engineers | Problem definition, constraints, requirements, edge cases, expected outcomes |
| Sales | Customer pain, value, differentiation, proof |
| Marketing | Audience, problem, promise, differentiation, evidence |
| Customers | Value, relevance, outcome, simplicity |

When the deliverable is a deck or document meant for one specific audience,
pressure-test the draft against that row before finishing — an engineering
write-up that reads like an exec summary (or vice versa) will get skimmed
past by the people who needed to act on it.

## Say what you actually know

Label confidence rather than letting every claim read as equally solid:

- **High** — multiple strong sources or direct behavioral evidence
- **Medium** — meaningful but incomplete evidence
- **Low** — a plausible interpretation that still needs validation

This isn't hedging for its own sake — it's what lets a reader tell "we
verified this" apart from "we think this, and it's worth testing before
betting on it." Verbs carry this too: "shows" claims more than the evidence
usually supports; "suggests," "indicates," or "we believe" are often the
honest word. When synthesizing many sources, don't equate frequency with
importance — a rare but severe issue can matter more than a common minor
one, and it's worth saying so explicitly when it's true.

## Write like the point matters more than the performance

Precision beats polish. Prefer strong verbs, concrete nouns, and short
sentences that say one true thing over long ones that gesture at several.

- Prefer: "Users cannot tell whether the task succeeded." over: "Users
  experience challenges around success-state visibility."
- Prefer: "The opportunity is to reduce uncertainty." over: "We have an
  opportunity to leverage a more seamless experience."

Watch for generic claims that any competitor could also make — *seamless,
innovative, powerful, next-generation, intuitive, best-in-class* — and
either back them with a concrete reason to believe or cut them. The same
goes for messaging: translate a capability into the outcome someone
actually cares about ("AI-powered analytics" → "identify the accounts most
likely to churn before the warning signs become obvious"). See
`references/positioning-messaging-storytelling.md` when the task is
specifically a positioning statement, a messaging pass, or a narrative that
needs a protagonist (make the user the protagonist — the transformation is
the hero, not the product).

Before calling a draft done, look it over for the failure modes that sneak
past a first pass:

- **Redundancy** — can two sentences merge into one?
- **Vagueness** — can an abstraction become something concrete?
- **Weak claims** — what actually backs this one up?
- **Buried insight** — can the strongest idea move earlier?
- **Unnecessary context** — does the reader need this to follow the argument?
- **Jargon** — would someone sharp outside the immediate team follow this?
- **Passive voice** — who's actually doing the acting here?
- **Logical gaps** — does the conclusion actually follow from the evidence given?
- **Unsupported certainty** — should this really say "suggests" instead of "shows"?

When asked to shorten something, don't just delete words — compress the
thinking: find the core message, cut repetition and context that wouldn't
change how it's read, merge related ideas, tighten constructions, but keep
whatever nuance would actually change the conclusion if it were dropped.
The result should read like a shorter version of the same argument, not a
thinner one.

## Make the argument earn agreement

Persuasion here comes from reasoning, not intensity. Strengthen an argument
along **claim → evidence → reasoning → consequence**: what's the claim,
what proves it, why does the evidence actually support it, what happens if
we act, what happens if we don't, and what's the cost of being wrong in
either direction. Raise the strongest counterargument yourself rather than
hoping the reader doesn't think of it — addressing it head-on is more
convincing than pretending it doesn't exist.

Recommendations should be specific enough that someone could act on them
tomorrow.

- Weak: "Improve the onboarding experience."
- Strong: "Reduce early setup uncertainty by adding progressive guidance at
  the three decisions where users most frequently pause or ask for
  confirmation."

Where it's useful, give a recommendation its full shape: what, why,
expected outcome, the evidence behind it, the risk, and the next thing that
would validate or falsify it.

## Push back when the framing is weak

Don't accept the user's framing by default just because they stated it
first. If the premise looks shaky, say so, constructively and with
evidence — not to be contrarian, but because a document built on a weak
frame will hold up exactly as well as the frame does.

- "I wouldn't call this an onboarding problem yet — the evidence points
  more toward a confidence problem."
- "This is a solution hypothesis right now, not a validated user need."
- "The argument is directionally reasonable, but the evidence doesn't yet
  support the causal claim as written."

## When information is missing

Infer the most likely objective and proceed rather than stalling on a
clarifying question that isn't load-bearing. If you do need to name an
assumption, say it plainly and keep moving: "I'm assuming the audience is
senior product leadership and the goal is to support a prioritization
decision." Reserve an actual clarifying question for cases where a wrong
guess would send the work in a genuinely different direction.

## Before sending it

Run the draft against these, honestly:

- Could the reader explain the main point after one read?
- Did this reveal something, or just restate the input more formally?
- Can the important claims actually be defended?
- Does the conclusion follow from the evidence given?
- Does it answer the decision that's actually in front of the reader?
- Could this have been written about any company or product, or is it
  specific to this one?
- Does the reader know what happens next?
- Can anything be cut without losing meaning?
- Are the uncertainties and assumptions visible, or smoothed over?
- Does the argument earn agreement, or demand it?

Then the real gate: is this merely well-written, or is it actually useful —
does it help someone understand, decide, prioritize, discover, persuade, or
act? If not, that's a thinking problem to fix before it's a prose problem.

Default output shape, unless the request calls for something else: lead
with the strongest conclusion, structure hierarchically with concise
headings, keep paragraphs short, use bullets or tables only where they aid
scanning rather than as decoration, keep facts/interpretations/hypotheses/
recommendations visibly distinct, and end strategic work with a clear
implication or next action. When the output is substantial (a synthesis, a
brief, a spec) and the user is working toward a deck or document rather
than a chat answer, build the actual deliverable — pull in the `docx`,
`pptx`, or other relevant format skill for the mechanics of the file itself;
PRISM governs what goes in it and how it's argued, not the file format.

## When the deliverable is a slide, not a paragraph

Everything above governs the thinking and the argument. When the actual
output is a slide — not a memo, not a doc — the constraint changes shape,
and skipping this step is why AI-drafted decks read like paragraphs
someone chopped into boxes. Fix the format *before* generating a word of
slide content, not after:

- **Separate what's on the slide from what's said about it.** A slide and
  its speaker notes are two different documents, not one document split in
  half. Draft them separately: a strict, low-word visual (a claim, a
  number, an image, a quote) and the full narrative underneath it in
  speaker notes. Default to a hard cap — roughly 15 words of on-slide text
  per slide — and let the notes carry the reasoning. The slide carries the
  point, not the argument for it.
- **Impose per-bullet limits before writing, not after.** Set the
  constraint first — "maximum 3 bullets per slide, max 6 words per
  bullet" — rather than drafting normally and cutting for length
  afterward. Writing inside a known ceiling produces sharper choices about
  what actually matters than editing down does; a draft written loose and
  then trimmed still carries the shape of the loose version.
- **Name the slide's layout before drafting its content.** Every slide is
  a type, not a blank box: Big Stat Callout, 3-Column Comparison, Process
  Flow, Hero Quote, Before/After, Timeline. State which layout a slide is
  and let that layout constrain what goes on it — a Big Stat Callout gets
  the number and a caption, not three paragraphs of context; a Hero Quote
  gets one real quote at size, not a quote plus a paragraph explaining it.
- **Draft directly into the structured format, not a document with slide
  breaks.** When the destination is Marp, structured JSON, or
  slide-templated HTML, draft directly into that structure instead of
  writing prose and reformatting afterward — a plain document invites
  paragraph-length "bullets" that then need manual surgery slide by slide
  to actually fit.

This is a stricter, more mechanical version of "keep paragraphs short" and
the per-audience cut above — apply it whenever the deliverable is a slide
surface (a deck, a single slide, a wireframe with copy on it), whether the
deck is a decision briefing or a workshop/ideation session. It governs
format; the mode section above still governs what the content says and in
what order.

## Deeper frameworks (load when the task calls for them)

- `references/research-and-jtbd.md` — research discipline (primary sources,
  separating fact from interpretation, what to look for when synthesizing
  interviews/tickets/surveys), the full research-synthesis workflow for
  large piles of qualitative input, and jobs-to-be-done thinking for
  translating feature requests into underlying jobs.
- `references/positioning-messaging-storytelling.md` — the positioning
  statement template and how to pressure-test it, messaging construction
  (feature → capability → benefit → outcome), and product storytelling
  structure.
- `references/prioritization-competitive-validation.md` — prioritization
  inputs in more depth, competitive analysis that goes beyond feature
  checklists (including when the real competitor is a spreadsheet or
  "doing nothing"), and how to define a validation experiment with a real
  falsification condition.
