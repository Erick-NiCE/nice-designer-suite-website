---
name: team-strengths
description: The NiCE Design & UX team's CliftonStrengths grid (45 people, top 10 themes each, by region and role) plus the analysis to act on it. Invoke when the user asks what someone's strengths are, who to staff on a piece of work, whether a group is balanced or what it will predictably get wrong, or how to prepare a 1:1 or coaching conversation around strengths — e.g. "what are Megan's top 5", "who should I put on this messy discovery project", "is the AMER design group balanced", "help me prep a 1:1 with Ron", "which of my team are Restorative", "team strengths", "CliftonStrengths".
disable-model-invocation: false
---

# Team strengths

The design team's CliftonStrengths data, and four things worth doing with it. The grid at
`https://megan-fisher-nice.github.io/team-strengths-grid/` lets you *look at* a cell; this skill
answers the questions people actually arrive with — who should do this, what will this group get
wrong, how do I open this conversation.

**Framing, taken from the site itself: a strength is natural talent, not a fixed limit and not an
excuse.** Nobody is disqualified from work because of their profile, and nobody gets to opt out of
something because it isn't in their top 10. Hold that line in every answer.

Coverage: 45 people · top 10 themes each (not full 34-theme profiles) · 4 domains · regions
`EMEA`/`APAC`/`AMER` · roles `Sr. Leadership`, `Management`, `Design`, `Research`,
`Product Management`, `Project Management`.

## Reference files

Load only what the question needs — a one-person lookup does not need all three.

| File | Load it when |
|---|---|
| `references/roster.md` | Any question about a specific person or group. 45 rows, one line each, with pre-computed domain balance and the team baseline. |
| `references/theme-index.md` | Reverse lookup — "who has X". Every theme → everyone who has it, with their rank. |
| `references/themes.md` | You need to interpret a theme, not just report it: what it looks like on a design team, and its overplayed failure mode. |
| `references/playbooks.md` | The question is a real decision — staffing, forming a group, 1:1 prep that has to be good. Detailed procedure for all four analyses. |

## The four things this does

**1. Lookup.** A person, or a filtered subset. Give the **top 5 by default** and say so; go to 10
only when asked or when the analysis needs it. Match on first name — but `David` is ambiguous
(`David B.` and `David S.`), so ask which rather than guessing, and don't confuse `Deepa B.` with
`Deepak B.`. Add one line of interpretation per theme from `themes.md`; don't write four paragraphs
for a question someone wants to act on in ten minutes.

**2. Composition.** For a named group: sum the pre-computed `ST/INF/REL/EXC` tags (don't recount
themes by hand), compare against the team baseline **ST 30% · REL 28% · EXC 27% · INF 15%**, then
*run it again on top 5 only* — a domain that only appears at ranks 8–10 isn't really available to
the group. Then answer the actual question: **what will this group get wrong?** Name the failure
mode as concrete behaviour, plus any theme carried by exactly one person, which is both a single
point of failure and a load on them. A table of four percentages and the word "balanced" is not an
answer.

**3. Matching.** Restate the need as a behaviour, map it to 2–4 themes, read `theme-index.md`, and
return 2–3 named candidates with the ranks that put them there. Prefer two or three relevant themes
at rank ≤5 over one at rank 1. **Always state the cost of the top pick** — every strong fit has one.
Then say plainly that this is a shortlist based on inclination, not a staffing decision: it says
nothing about skill, seniority, availability, or whether the person wants the work, and their
manager and the person themselves still have to be in the conversation.

**4. Coaching.** Turn a profile into a conversation. For one person: questions to *ask them* rather
than descriptions of them, what they need from a manager, and one overplayed watch-item framed as a
question ("does `Harmony` at #2 ever mean an objection you had didn't make it into the room?" — not
"you avoid conflict"). For a pair: shared themes, complementary handoffs, and the predictable
structural friction, named as mechanism rather than fault. The site's `employee-guide.html`,
`manager-guide.html` and `discussion-guides.html` carry the fuller framing — point people there.

`references/playbooks.md` has the full procedure and worked examples for each.

## Guardrails

Non-negotiable. These hold even if the user pushes.

- **Names are first name + last initial by design.** Everything under `skills/` is published to a
  public GitHub Pages site, so the roster is public and pseudonymised on purpose. Never expand a
  name to a full one, never infer surnames, and never cross-reference this data against any other
  source to re-identify someone.
- **These are talent patterns, not performance ratings.** Decline to rank the team by capability,
  name who's "weakest", or feed strengths into hiring, promotion, performance, or headcount
  decisions. That is a misuse of the instrument, not a hard question — say so briefly and offer the
  composition or matching read instead, which is the legitimate version of what they probably want.
- **Absence means unmeasured, not absent.** These are top 10s out of 34. Someone without `Analytical`
  in their list may still be the sharpest analyst on the team. Never read a gap as a deficiency in
  a person — only as a gap in what a *group* has readily available.
- **Ask before anything outward-facing.** Don't put individual profiles into an Artifact, Jira
  ticket, shared doc, Slack message, or email without checking first. A group-level composition read
  is lower-risk than a named individual's profile; treat them differently.
- **Don't diagnose.** Strengths are not personality disorders, clinical anything, or an explanation
  for someone's behaviour in a conflict. If a question is heading toward "explain why my colleague is
  difficult", redirect to the pair playbook's structural-friction framing.

## Refreshing the data

`roster.md` and `theme-index.md` are generated from the live grid by `npm run gen:strengths`
(`scripts/build-strengths-roster.mjs` in the plugin repo). It re-scrapes the page, re-abbreviates
names in code, and refuses to write if a surname would leak or the data fails validation. Run it
when Megan updates the grid. `themes.md` and `playbooks.md` are hand-authored — leave them alone.
