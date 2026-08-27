# Playbooks — the four analyses in detail

`SKILL.md` has the short procedure for each of these. Load this file when the question is
non-trivial: a real staffing decision, a composition read on a group you're about to form, or 1:1
prep that has to be good.

---

## 1. Lookup

The easy one. Read `roster.md`, find the row, present it.

**Presentation rules**

- Give the **top 5 by default**, and say that's what you're showing. Gallup's own guidance is that
  the top 5 is the signal; 6–10 is supporting texture. Show all 10 only when asked, or when the
  question needs them (composition and matching both do).
- Group by domain rather than listing 1–10 flat when the person's shape is the point. `Reid B.` reads
  very differently as "5 Strategic Thinking, 3 Relationship Building, **0 Executing**" than as a
  numbered list.
- One line of interpretation per theme, drawn from `themes.md`'s "on a design team" column. Not four
  paragraphs. The person asking usually wants to act in the next ten minutes.

**Disambiguation.** Match on first name. `David` is ambiguous — `David B.` (AMER, Sr. Leadership) and
`David S.` — so ask which, don't pick. Every other first name on the roster is unique. Watch
`Deepa B.` vs `Deepak B.`, which differ by one character.

**Subsets.** Region (`EMEA`/`APAC`/`AMER`) and role (`Sr. Leadership`, `Management`, `Design`,
`Research`, `Product Management`, `Project Management`) are the only filters in the data. For a
subset of more than about six people, don't dump 10 themes each — go to the composition playbook and
summarise, then offer the detail.

---

## 2. Composition

The question behind this is almost always **"what will this group get wrong?"** Answer that, not
"here is a distribution".

**Procedure**

1. Pull the group's rows from `roster.md`. Sum the pre-computed `ST/INF/REL/EXC` counts. Don't
   recount themes by hand — that's what the tags are for.
2. Convert to shares and compare against the team baseline: **ST 30% · REL 28% · EXC 27% · INF 15%**.
   A domain is over- or under-represented *relative to that*, not relative to 25%.
3. Compute the same thing for **top 5 only**. This matters more than the top-10 view: a domain that
   appears only at ranks 8–10 across the group is not actually available to it. A group can look
   balanced at 10 and be badly lopsided at 5.
4. Find themes **absent from the whole group** — especially the scarce ones (`Focus`, `Deliberative`,
   `Context`, `Command`, `Consistency`, `Discipline`, `Harmony`). Absence of a scarce theme in a
   small group is unremarkable; absence of `Arranger` (29 of 45 have it) in a group of six is a
   genuine signal.
5. Find themes carried by **exactly one person**. That's a single point of failure and a load on
   that individual — name both.
6. State the predicted failure mode as a concrete sentence about behaviour. Use the mirror cases at
   the bottom of `themes.md`.

**What good output looks like**

> Six people, and the shape is ST-heavy (38%) with Executing at 17% — and at top 5 only, Executing
> is 2 slots out of 30. This group will generate more options than it closes, and the closing will
> fall on `Dalya B.`, the only person with `Responsibility` above rank 3. Nobody has `Focus` at all.
> If this is a discovery project, that's fine and even good. If it has a ship date, borrow someone
> with `Focus` or `Discipline`, or make the convergence decision a named checkpoint rather than
> hoping it happens.

**What bad output looks like:** a table of four percentages and the word "balanced". If you haven't
said what will go wrong, you haven't answered the question.

---

## 3. Matching — find the person

**Procedure**

1. Restate the need as a **behaviour**, not a job title. "Someone to own the design-system audit"
   → *sustained attention to a large messy inventory, cares that like cases are handled alike,
   finishes.*
2. Map that to **2–4 themes**. Some common needs:

   | Need | Themes to look up |
   |---|---|
   | Ambiguous, unscoped discovery | Ideation, Strategic, Learner, Adaptability |
   | Cleaning up a legacy mess | Restorative, Consistency, Discipline, Achiever |
   | Getting a design past resistant stakeholders | Command, Communication, Self-Assurance, Significance |
   | Long project that must actually land | Focus, Responsibility, Achiever, Discipline |
   | Growing a junior designer | Developer, Individualization, Empathy, Relator |
   | Pre-mortem / risk review | Deliberative, Analytical, Context |
   | Cross-org relationship building | Woo, Includer, Relator, Communication |
   | Making a fragmented system coherent | Consistency, Arranger, Strategic, Maximizer |
   | Sustaining a thankless long slog | Positivity, Achiever, Belief |
   | Casting and coordinating a multi-team effort | Arranger, Individualization, Responsibility |

   These are a starting point, not a lookup table. Derive from `themes.md` when the need isn't here.
3. Read those themes in `theme-index.md`. Score candidates by **best rank across the mapped themes**,
   and prefer someone with two or three of them at rank ≤5 over someone with one at rank 1.
4. Filter by region/role only if the user constrained it. Don't silently exclude anyone.
5. Return **2–3 named candidates**, each with the themes and ranks that put them there — and for the
   top pick, **the cost**. Every strong fit has one. `Restorative` at #1 means someone drawn to
   problems over opportunities. Say so.

**Hard constraint.** Strengths tell you about *fit and inclination*, and nothing about skill,
seniority, availability, or whether they want the work. Every matching answer ends by saying that
out loud, and that the actual decision needs their manager and a conversation with them. You are
narrowing a shortlist, not making a staffing decision.

---

## 4. Coaching and 1:1 prep

**Single person**

1. Top 5, grouped by domain.
2. For each of the top 3: one **question to ask them**, drawn from the theme. Not a description of
   them — they know what they're like. `Activator` at #1 → *"What's something you've been waiting for
   permission to start?"* `Intellection` at #4 → *"Is there anything on your plate you haven't had
   enough quiet time to think properly about?"*
3. One **partnership observation**: what they need from a manager. High `Intellection` needs the
   agenda in advance. High `Significance` needs to know why the work matters and who will see it.
   High `Adaptability` will not thrive on a rigid quarterly plan.
4. One **overplayed watch-item** from `themes.md` — framed as a question, never a verdict. Not "you
   avoid conflict"; "does `Harmony` at #2 ever mean an objection you had didn't make it into the room?"

**A pair** (1:1 partnership, or two people who keep grinding)

1. **Shared** themes — where they'll understand each other instantly, and where they'll reinforce a
   shared blind spot.
2. **Complementary** themes — one's top 5 covering the other's gap. This is the useful half: name a
   specific handoff. "`Dalya B.` closes; `Reid B.` opens. On a project with a date, let the framing
   be Reid's and the plan Dalya's."
3. **Friction** — predictable, structural, not personal. `Activator` + `Deliberative` will disagree
   about when to move, forever. Naming it as mechanism defuses it; naming it as fault does the
   opposite.

The grid site has fuller framing for all of this — point people at it rather than reinventing it:
`employee-guide.html` (for the person), `manager-guide.html` (for their manager),
`discussion-guides.html` (prompts for the conversation itself), `glossary.html` (official Gallup
definitions), all under `https://megan-fisher-nice.github.io/team-strengths-grid/`.
