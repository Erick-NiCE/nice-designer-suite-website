---
name: ux-research-synthesis
description: >
  Turn collected research data into findings: thematic analysis, affinity mapping, personas,
  journey maps, and insight themes. Use whenever someone shares interview notes, transcripts,
  quotes, observation logs, or survey results and asks what it means, or asks for personas, a
  journey map, affinity clusters, or synthesized themes. Enforces that every synthesis claim is
  grounded in submitted data and never fabricated. For designing a study before fieldwork, use
  ux-research-planning; for presenting findings, use ux-research-readouts.
disable-model-invocation: false
---

# UX research synthesis

You turn data that came back from fieldwork into findings someone can act on. Every output here
makes a claim about real users, which is what makes the grounding rule below non-negotiable
rather than good practice.

---

## The grounding rule

**All synthesis output must be grounded in data the user submitted.** This binds on every
deliverable that makes a claim about users, patterns, behaviors, or findings: personas, journey
maps, insight themes, affinity clusters, and synthesized findings.

- **Check for source material before generating anything.** Interview notes, transcripts,
  quotes, observation logs, survey data, session recordings. If none has been provided, ask for
  it. One clarifying ask is enough. Do not generate placeholder content and label it "example",
  because that is what gets pasted into a deck and presented as real.
- **Never fabricate quotes, findings, or behavioral patterns.** If a persona or insight needs a
  representative quote and none is available, leave `[Quote to be added from participant data]`
  rather than writing a plausible one. A fabricated quote is indistinguishable from a real one
  downstream, which is exactly the problem.
- **Distinguish structure from content.** A blank journey map or an empty framework is a
  scaffold, and saying so is fine. Label it as a starting structure. When you fill it in from
  submitted data, make the source basis clear.
- **Flag confidence and coverage.** If the data is thin, partial, or covers one segment only,
  say so in the output itself, not in a caveat you mention once in chat. Example: "This persona
  reflects patterns from three sessions with supervisors. Agent-side data has not been
  collected."
- **Keep the basis traceable.** Tie claims to the submitted material in a way the user can
  check. "Based on the session notes you shared, three participants described..." is correct.
  "Research shows that users typically..." with no grounding is not, and it is the failure mode
  to watch for, because it reads authoritative.

This rule does not restrict planning artifacts. Those are forward-looking and live in
`ux-research-planning`.

---

## Thematic analysis

Default to inductive coding unless a framework has been specified.

Organize around jobs-to-be-done, pain points, mental models, or behavioral patterns, depending
on what the research was asking.

When synthesizing across multiple sessions, participants, or customers, **structure findings
into three categories rather than one flat list.** The flat list is the default failure mode and
it hides the two most valuable categories inside a single averaged theme:

- **Convergent patterns.** Themes that show up across most participants. Rank by how many
  participants or sessions support each one, and state the count.
- **Contradictions.** Places where participants disagree, or where preference data conflicts
  with behavioral data. **Name these explicitly as their own category rather than averaging
  them away.** The case that justifies the category: in concept testing where stated preference
  points one direction and observed behavior points the other, folding both into a single
  "mixed reception" theme destroys the finding. The conflict *is* the finding, and it only
  becomes visible when it has somewhere to live.
- **Signals worth investigating.** Things one or two participants raised that seem significant.
  Low prevalence is not low importance. Note the signal and note that it is thin, rather than
  dropping it for lack of consensus.

Write insights as actionable observations, not descriptions. "Agents rely on tribal knowledge to
route edge-case calls because the system gives no contextual guidance at the decision point"
tells someone what to build. "Agents said routing is hard" does not.

## Affinity mapping

- Cluster raw notes and quotes by similarity, then name clusters at the **insight** level, not
  the topic level. "Onboarding" is a topic. "New users cannot tell which setup steps are
  optional" is an insight.
- If clusters stay descriptive after the first pass, prompt for a second layer of synthesis
  rather than accepting topic labels.

## Personas

- Ground each one in behavioral patterns, not demographics.
- Include role context, primary goals, core frustrations, key behaviors, and representative
  quotes drawn from the data.
- Distinguish the operator roles that actually exist in the product rather than merging them.
  In most enterprise tools that means separating the person doing the work, the person
  supervising it, the person configuring the system, and the person who implemented it. Merging
  them produces a persona that matches nobody.
- For a designer audience, keep the language accessible and drop the research jargon.

## Journey maps

- Anchor to a specific scenario or job-to-be-done. A generic "day in the life" map has no
  decision it can inform.
- Include stages, actions, thoughts and feelings, pain points, and opportunities.
- Flag where emotional lows and high-friction moments cluster. Those clusters are the design
  leverage points and they are the reason to build the map at all.

---

## Pulling data from a repository

When the source data lives in a research repository reached over MCP tools rather than pasted
into the conversation, the retrieval mechanics matter and are easy to get wrong in ways that
silently truncate your evidence. For Dovetail specifically, read
`references/dovetail-retrieval.md` first.

The general hazard applies to any repository: **paginated endpoints that look complete on the
first page.** Synthesizing from page one of five produces confident findings from 20% of the
data, and nothing in the output will indicate it. Always exhaust the cursor.

---

## Attribution

Findings reflect patterns across multiple participants or customers. Do not attribute a finding
to a single source unless explicitly asked. Single-source attribution turns a research finding
into one customer's complaint, and it is how findings get dismissed in the room.

Frame friction as a property of the system, not the user. "Participants could not locate the
settings menu" points at the interface. "Users failed to find settings" blames the user for a
design problem, and it changes what the reader thinks needs fixing.

## Handling incomplete input

| Situation | What to do |
| --- | --- |
| No source data provided | Ask for it once. Do not produce labeled-example output. |
| Data covers one segment only | Proceed, and state the coverage gap in the output itself. |
| Asked for a quote that does not exist | Insert `[Quote to be added from participant data]`. Never compose one. |
| Clusters stay topic-level | Push for a second synthesis pass before delivering. |
| Preference and behavior conflict | This is a contradiction finding, not a data problem. Give it its own row. |

## Handoff

When the findings are ready to go in front of stakeholders, move to `ux-research-readouts`,
which carries the writing standards and the deliverable formats. If synthesis reveals a
question the data cannot answer, that is a new study: go back to `ux-research-planning`.
