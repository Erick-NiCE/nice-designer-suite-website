---
name: ux-research-planning
description: >
  Design a UX research study and write the instruments it needs: research briefs, discussion
  guides, screeners, JTBD switching interviews, and surveys. Use whenever someone asks to plan
  a study, pick a method, write or review a discussion guide, build a screener, scope a sample
  size, or design a survey or SUS benchmark. Also use when someone has a research question but
  is not sure which method answers it. For making sense of data already collected, use
  ux-research-synthesis instead; for presenting findings, use ux-research-readouts.
disable-model-invocation: false
---

# UX research planning

You design studies and write the instruments that run them. Planning artifacts are
forward-looking, so they do not require existing data. That makes this the one research stage
you can do from a research question alone.

Anchor everything to one question: **what decision will this research inform?** A study that
cannot name the decision it feeds produces findings nobody uses. Ask for it if it has not been
stated.

---

## Step 1. Match the method to the question

Generative and evaluative work answer different questions. Picking the wrong one is the most
expensive mistake available at this stage, because it is only visible after fieldwork.

| Research goal | Method | Key output |
| --- | --- | --- |
| Discover unmet needs | Generative interviews, diary studies | Insight themes, JTBD map |
| Understand mental models | Contextual inquiry, concept interviews | Mental model diagram, personas |
| Understand a switching decision | JTBD timeline interviews | Job statement, four-forces map |
| Evaluate usability | Moderated usability study | Issue severity map, redesign recommendations |
| Validate comprehension | Think-aloud, concept test | Comprehension findings, copy recommendations |
| Test prevalence of a known theme | Survey | Prevalence figures with confidence noted |
| Track sentiment over time | Longitudinal survey (SUS, UMUX-Lite) | Trend over comparable periods |
| Enable design decisions | Synthesis plus journey map | Journey map, opportunity framing |
| Build stakeholder alignment | Readout with recommendations | Deck plus executive summary |

Two routes have their own reference files. Read the file rather than working from the table row:

- **Switching decisions** (adoption, churn, competitive displacement). Read
  `references/jtbd-timeline.md` for the six-stage guide structure, the four forces, and how to
  adapt the guide by participant type.
- **Quantitative instruments** (validation at scale, prevalence testing, benchmarking). Read
  `references/survey-design.md` for structure, response formats, quality checks, and the exact
  SUS scoring procedure.

## Step 2. Write the research brief

Every study gets a brief before it gets a guide. It carries background, research questions,
method, timeline, stakeholders, and how findings will be used. The last item is the one people
skip and the one that decides whether the study matters.

## Step 3. Sampling

For multi-segment work in an enterprise or B2B context, N=5 to 8 per segment is the working
default. Two things to state explicitly in the brief:

- Where saturation is likely, and where it is not.
- Where purposive sampling matters more than representativeness. Most enterprise research is
  the former, and claiming the latter invites a sample-size objection you cannot win.

Segment by the operator roles that actually exist in the product, not by demographics. In most
enterprise tools that means separating the person doing the work, the person supervising it,
the person configuring the system, and the person who implemented it. Those four see different
products.

---

## Discussion guides

- Open with rapport-building and context-setting before the core topic. A participant who has
  not warmed up gives you their public answer.
- Open-ended and non-leading by default. Flag any question that could prime the participant,
  and say what the priming risk is rather than just marking it.
- Structure in phases: warm-up, then current state and context, then core topic exploration,
  then concept or stimulus if there is one, then priorities and closing.
- Include facilitator notes in brackets or italics: probes, timing, transitions.
- Calibrate depth against session length. A 60-minute session supports 3 to 4 core themes. A
  30-minute session supports 1 to 2. Guides that ignore this run long and lose the closing
  section, which is usually where the prioritization questions sit.
- For interviews with implementation, professional services, or operations staff, lean into
  workflow walkthroughs, configuration pain points, workaround behavior, and handoff friction.
  These people hold product-in-practice knowledge that end users do not have.

## Screeners

- Lead with disqualifying criteria, so the filter is cheap.
- Ask behavioral and situational questions rather than relying on self-reported job titles.
  Titles are inconsistent across companies and people round them up.
- Flag any screener logic that could introduce selection bias, and name the direction of the
  bias, not just its presence.

---

## Handling incomplete input

| Situation | What to do |
| --- | --- |
| No decision named | Ask what decision the research informs before writing anything. One ask. |
| Method already chosen, and it is wrong for the question | Say so once, plainly, with the method that fits and why. If the choice is reaffirmed, write the best version of the chosen method and note the limitation in the brief. |
| Session length not given | Assume 60 minutes, state the assumption, and note what would be cut at 30. |
| Segment unclear | Ask which operator roles are in scope. Do not write one guide that tries to serve all of them. |

## Handoff

A guide is done when someone else could run the session from it. When the data comes back, move
to `ux-research-synthesis`. When you are writing the guide, the screener, or the brief as a
document someone will read, the writing standards in `ux-research-readouts` apply.
