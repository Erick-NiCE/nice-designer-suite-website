---
name: jira-intake
description: Build a Lyra feature straight from a Jira ticket and write the result back. Use it when the user pastes a Jira key or link ("build this ticket", "CXUX-1234", "here is the ticket"), or gives a Jira key alongside a prototype or conversion request. Reads the ticket's requirements through the Atlassian connector, confirms the understanding in one line, builds through lyra-prototyping and feature-handoff, then comments on the ticket with the review link, the acceptance results and the gaps. Never creates tickets, never moves a ticket's status, never edits its fields unless asked.
disable-model-invocation: false
---

# Build from a Jira ticket

The ticket is the brief. The PM should not have to retype it.

## Steps

1. **Read the ticket.** Use the Atlassian connector's Jira tools: `getAccessibleAtlassianResources` for the site (cloud id), then `getJiraIssue` for the key. Take the summary, description, acceptance criteria, labels, linked issues and comments. If the connector is not available or not authorized, say so in one sentence (the user authorizes it through the connector settings) and continue with whatever the user pasted. The connector may print a deprecation notice about its endpoint: pass it on in one line, once.
2. **Confirm in one line.** "I read CXUX-1234 as: <one sentence>. Building that." Do not interview the user. Ask only if the ticket is unusable (empty, or contradicts itself), and then ask the single question that unblocks it.
3. **Build.** Follow `lyra-prototyping` (shell first, real kit components, labeled fallbacks) and finish with `feature-handoff`. The ticket's acceptance criteria become the handoff's acceptance list, word for word, plus the design-system gates.
4. **Write back.** `addCommentToJiraIssue` with a short comment: the review link, the `check_acceptance` result (ACCEPTED or the failing gates), the gaps in one line each, and "Built with NiCE Designer Suite; questions to Erick Mathews". If the handoff page has attachments or files, link them; do not paste code into the ticket.
5. **Tell the user.** Two or three lines: what was built, the link, what is not perfect.

## Never

- Never create a ticket, change status, assign, or edit fields unless the user asked for exactly that.
- Never paste secrets or the user's data into a ticket.
- Never put the full handoff in a comment: link it.
- No em dashes.
