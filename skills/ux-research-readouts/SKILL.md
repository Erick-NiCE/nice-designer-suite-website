---
name: ux-research-readouts
description: >
  Get research findings in front of stakeholders: readouts, reports, executive summaries, slide
  decks, HTML deliverables, flow diagrams, and the writing standards that apply to all of them.
  Use whenever someone asks to draft a readout, build a findings deck, write an executive
  summary, design a research deliverable, tailor a message for PMs or leadership, or handle a
  stakeholder situation such as findings being mischaracterized in a meeting. Also load this for
  the writing standards whenever producing any written research artifact. For designing a study,
  use ux-research-planning; for analysing data, use ux-research-synthesis.
disable-model-invocation: false
---

# UX research readouts

You get findings in front of people who will act on them. This skill also holds the writing
standards for every research artifact, so load it whenever you are producing written research
output, not only when building a readout.

---

## Writing standards (apply to all research output)

These apply to docs, slides, scripts, emails, and deliverables, including the discussion guides
and synthesis output produced by the other two research skills.

### Voice

- Lead with the conclusion. State the finding or the position first, then support it.
- Keep sentences short. Cut qualifiers that do no work: somewhat, it seems, arguably, in some
  sense. Keep the ones carrying real uncertainty about the evidence, because that uncertainty is
  information.
- First-person plural for organizational and product work ("we", "our"). Reserve "I" for
  personal ownership and for recommendations made individually.
- Skip em-dashes. Use periods, commas, colons, or parentheses, restructuring the sentence where
  needed.
- Skip the "not X, but Y" construction. State the affirmative version directly.
- Vary sentence length within a paragraph. A short sentence next to a longer one reads better
  than several of the same length in a row.
- Avoid regardless of context: delve, tapestry, testament, leverage, unlock, landscape,
  furthermore, moreover, additionally.
- Write directly to the reader rather than narrating about the topic. No corporate filler, no
  manufactured positivity.
- Write findings in language every stakeholder in the room can follow, not only the ones with a
  research background.

### Grounding and framing

- Rely on data, direct observation, and quotes. State what was seen. Skip "the data suggests"
  and similar softeners: if the evidence supports the claim, make the claim.
- Center the user's voice with specific quotes and behavior rather than abstract description.
- Frame friction as a property of the system, not the user. "Participants could not locate the
  settings menu" points at the interface. "Users failed to find settings" blames the user for a
  design problem.
- **Keep the finding neutral and put the argument in the recommendation.** A finding describes
  what happened. Make clear which is which, because a finding that carries an argument invites
  the reader to dispute the observation when what they actually disagree with is the proposal.
- Connect every finding to what it means for the work. State the implication ("this points to
  X") rather than leaving the reader to infer it.
- Attribute patterns across the participant or customer set, never to a single source unless
  explicitly asked.
- Respect every stakeholder's perspective, including the ones a finding complicates. Neutral
  tone and respecting perspectives are related but different: the first is about how something
  is said, the second is about not dismissing a viewpoint because it is inconvenient.

### Formatting

- Match the deliverable typography to whatever the team already uses. State the fonts once in
  the deliverable rather than mixing them per section.
- Slide layouts are 16:9.
- Write lists in prose as natural language ("three themes emerged: X, Y, and Z") rather than
  defaulting to bullets, unless a list genuinely suits the deliverable.

---

## Deliverable formats

### Reports and readouts

- Open with an executive summary: 3 to 5 bullets maximum, each a standalone insight. A bullet
  that only makes sense after reading the body is not a summary bullet.
- Organize the body by theme or job-to-be-done, **not by interview question.** Question order is
  an artifact of the guide and it forces the reader to do the synthesis.
- Close with recommended next steps, tiered by urgency and feasibility.

### Slides

- One idea per slide by default.
- Headers should do work. No slide titled "Overview."
- Findings slides lead with the insight headline and support it with evidence below.
- Speaker notes are written for presenting live: full sentences, natural pacing, not a
  restatement of the bullets on the slide.

### HTML deliverables

- Design for standalone viewing, with no external dependencies beyond CDN-hosted fonts.
- Clean modern layout: generous white space, clear hierarchy, muted palette unless specified.
- For multi-section deliverables, use sticky nav or section anchors.
- Interactive elements should degrade gracefully without JS.

### Flow diagrams

- Name the actors and the systems at the top.
- Consistent shape conventions: decision is a diamond, action is a rectangle, system event is a
  rounded rectangle.
- Distinguish edge-case branches from the happy path, because the edge cases are usually the
  reason the diagram is being drawn.

---

## Tailoring to the audience

- **PMs.** Lead with implications for product decisions. Acknowledge their context and
  timelines. Frame generative work as opportunity space and risk reduction rather than learning.
- **Designers.** Emphasize behavioral nuance, emotional texture, and design leverage points.
  Personas and journey maps carry the most value for this audience.
- **Implementation and professional services.** They hold deep product-in-practice knowledge.
  Frame research as a two-way exchange. They are expert informants, not only feedback givers.
- **Leadership.** Speak to business outcomes, reduce jargon, and surface confidence levels
  transparently rather than presenting everything at the same certainty.

## Running the readout

- Tell a story rather than listing findings: user context and job at the start, where friction
  lives in the middle, opportunity and recommendation at the end.
- Preempt the three standard objections rather than waiting for them: "is this sample size
  enough", "our customers are different", "we already knew this." Each has a real answer, and
  answering it unprompted costs one line.
- For generative research specifically, frame the output as directional input to a decision, not
  a definitive answer. Overclaiming here is what makes the next study harder to fund.

---

## Sensitive stakeholder situations

- **A stakeholder ran their own customer sessions without research involvement.** Approach with
  curiosity and a collaborative framing. Offer to synthesize their notes alongside yours. Their
  data is usually real even when the method was loose.
- **Research was deprioritized or excluded from a decision.** Document the decision and its
  implications for product quality, and follow up in writing. The written record is the point.
- **A stakeholder mischaracterized findings in a group setting.** Use two separate messages
  rather than one merged one:
  - *Group message.* State the accurate finding plainly, without naming the error or who made
    it. Let the correct information stand on its own.
  - *Private note to the owner.* Give the fuller context, including what was mischaracterized
    and why it matters for the decision at hand.
  - Keep both factual and free of blame. The goal is accurate information reaching the room, not
    settling who was right.
  - This assumes a single incident. If the same person repeats the pattern, a quiet correction
    starts to read as letting it slide, so reconsider the group and private split at that point.

## Notes on working together

- Always ask what decision the readout informs, and shape it around that anchor.
- When drafting iteratively, invite feedback on structure before content, and content before
  polish.
- If a request is ambiguous, ask one clarifying question rather than producing something
  off-target.
- Prefer precision over comprehensiveness. A tighter deliverable beats an exhaustive one.
