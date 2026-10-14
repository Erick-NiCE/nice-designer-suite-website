---
name: copilot-demo-generator
description: Turn a one-line scenario ("a happy customer gets angry when their car insurance claim is rejected") into a ready-to-import Copilot Demo Studio JSON file for an Agent Copilot demo.
disable-model-invocation: false
---

# Copilot Demo Generator

Use this when someone describes a customer scenario and wants an Agent Copilot demo. The output is one valid JSON file that they import into Copilot Demo Studio (in the Studio: ⋯ menu, Open JSON…, paste or choose the file, Load demo). Do not build or edit the Studio app; only generate the JSON.

Example request: "I want to build a copilot demo which shows a happy customer getting angry when their car insurance claim is rejected."

## Process

1. Read the scenario and decide the arc. Name the emotional or situational turning points (for example: warm opening, bad news, anger, de-escalation, calmer close). Infer everything else; ask at most one short question and only if the channel or industry truly changes the demo. Defaults: channel chat, Copilot for Agents, fictional brand and names, 15 to 20 steps.
2. Pick tiles that serve the arc, not all of them. A good demo uses 7 to 10 tiles. See the tile guide below.
3. Write the steps as a story the presenter can talk over. One click of Next is one step. Put the presenter's talking points in notes.
4. Validate against the checklist below, then write the file to the working directory (or the environment's outputs folder) as `<kebab-case-title>.json` and tell the user how to import it. Mention the arc in one sentence and any assumptions in one line.

## File shape

```
{ "schemaVersion": "1.0",
  "meta": { "title", "product": "copilotForAgents", "channel": "chat"|"voice", "company", "contactId",
            "customer": {"name","subtitle"}, "agent": {"name","initials"}, "notes",
            "mode": "agentic" (only if asked for Agentic Copilot), "typing": false (only to turn typing off) },
  "tiles": { "<id>": { "type": "...", ... } },
  "steps": [ { "messages": [{"from":"customer"|"agent","text","time"}], "tiles": ["id" | {"tile":"id","set":{...}}],
               "rtSummary": "...", "copilotQuery": "...", "notes": "..." } ] }
```

A step may have any subset of keys. A step with no messages is a Copilot-only beat. A tile id appears on its first step by name and is created there; later steps update it in place with `{"tile":"id","set":{...}}` (objects merge, arrays replace). `time` strings read like "3 minutes ago", "Just now". `rtSummary` replaces the Running Summary banner. `copilotQuery` fills the agent search bar.

## Tile guide

Required fields in brackets. All 14 types:

- **sentiment** [label: neutral|negative|positive] plus reason, time (like "14:06"). Only three states exist. Show a turn by updating it in place: `{"set":{"label":"negative","reason":"...","time":"..."}}`. Use it first at the start of every demo so the shift has a baseline.
- **journeySummary** [text] plus interactionCount, dateRange. Past contacts; good for context and foreshadowing.
- **transferSummary** [text]: notes from the previous agent.
- **selfServiceSummary**: voice only. Fields intent, actions, escalationReason, dataCollected.
- **kbAnswer** [articleTitle, answer] plus cardTitle, steps[], links[{text,url}]. Public answers can be inserted or sent. Set `"internal": true` for agent-only guidance.
- **textCard** [title, message] plus tone (warning|info|success|neutral), icon (warning|info|checklist|announcement), links, trigger {phrases[], speaker}. Use for alerts like "heads up" or de-escalation prompts.
- **checklist** [title, items[{id,text}]] plus instructions, status: "intro". Update with set.status (open|complete|cancelled) and set.checked: [ids] (the full list so far).
- **processAutomation** [name] plus description, launch ("rule"), stage: "recommended", form[], output{title,text,failureTitle,failureText}. Stages: recommended, confirm, collecting, form, awaitingInput, inProgress, success, failure, cancelled, timedOut. form items are {label,value}; add `"type":"autocomplete","suggestions":[...]` for a lookup. For the collecting stage: `set:{stage:"collecting", active:"<label>", typed:{"<label>":"partial"}, values:{"<label>":"filled"}}`. Show the lookup being typed on one step and filled on the next. Typical run: recommended, collecting (1 to 3 steps), form, inProgress, success.
- **guidedCapture** [title, sections[{label,fields[{id,label,type,required,options?,suggestions?}]}]]. Field types: text, number, yesNo, date, time, select, autocomplete. Fill with `set.values:{fieldId:value}` as the customer says things; finish with `set.submitted:true`, `set.result:"..."`. Use set.active and set.typed for a lookup or open dropdown.
- **adaptiveCard** [card]: Adaptive Card JSON (TextBlock, FactSet, Container, ColumnSet, Action.ShowCard). Good for customer or account details. Open the ShowCard section with `set.expanded: true`.
- **nextBestResponse**: voice only. responses[]; `set.index` picks which one is shown.
- **legalDisclosure** [title (max 75), body (max 1000)]: pinned above the feed. Good for regulatory notices.
- **automatedSummary** [text]: wrap-up at the end. Mention the arc.
- **feedback**: agent rates suggestions at the very end. Optional set.ratings, set.tags, set.submitted.

Voice-only types (selfServiceSummary, nextBestResponse) must not be used on chat demos. For voice demos, agent messages are a live transcript.

## Arc patterns

- **Mood shift (the common ask):** open with sentiment positive and a rapport line; reveal the trigger (decision, delay, fee) in an agent message; show the customer's reaction as two customer messages, updating sentiment in place after each (positive → negative, with the reason getting stronger); then recover through acknowledgement, an offer, a workflow, and a calmer sentiment (negative → neutral, rarely positive).
- **Before the news lands:** show the agent learning the bad news privately first (kbAnswer internal plus a textCard "heads up") so the presenter can say Copilot prepared the agent.
- **Steps per beat:** setup 3 to 4, trigger 2 to 3, reaction 2 to 3, resolution 6 to 8, close 2.
- Always end with automatedSummary then feedback.

## Writing rules

- Fictional company, customer and agent names; no real brands or people. Fictional policy numbers and claim IDs.
- Messages short and natural, one or two sentences. Agent lines are warm and plain. Customer lines carry the emotion.
- Presenter notes explain what to point at ("Sentiment drops; the card updates in place"). Not every step needs a note.
- Tiles update in place; do not add a second sentiment or checklist tile.
- Every field filled in a workflow form should have a visible moment: spoken by the customer, or typed and picked as a lookup.
- Keep rtSummary to one or two sentences and update it when the story changes.

## Validation checklist (do before writing the file)

1. JSON parses; schemaVersion, meta, tiles and steps exist; meta.channel is chat or voice; meta.customer.name and meta.agent.name exist.
2. Every tile has a known type and its required fields.
3. Every tile id used in a step exists in tiles; every tile in tiles is used in at least one step.
4. `set` keys match the tile type (for example `checked` only on checklists, `values` only on processAutomation or guidedCapture; guidedCapture values keys are field ids, processAutomation values keys are form labels).
5. Autocomplete value and the values you set are present in suggestions; active and typed labels match a form label.
6. Checklist checked ids exist in items.
7. No voice-only tiles on a chat demo.
8. Sentiment is only neutral, negative or positive, and is updated in place.
9. Step count 15 to 20 unless asked otherwise.

For a quick structural check, run a short Python script that loads the JSON and verifies items 1 to 3 and 6. If a Studio is available, load the file with Open JSON… and confirm the "Ready to present" chip shows with no errors.

## Delivery

Write the JSON to the current working directory as `<kebab-title>.json`, or to an outputs folder if the environment provides one. Then reply in a few sentences: the arc, the file name, and how to preview it. Always give the live Studio link, which is the real, maintained Studio and not a copy, so it picks up any updates:

**Preview it:** open https://claude.ai/artifact/7MU8aHXq4fxpKRdPzqDxzq, then ⋯ menu → Open JSON… → paste the file's contents or choose the file → Load demo. The "Ready to present" chip means it loaded cleanly; press Next to step through the story.

Do not publish a copy of the Studio, and do not edit the Studio. The link is visible to the user's organization, so if someone cannot open it, they need access from the Studio's owner. Offer to switch the demo to Agentic Copilot or voice only if relevant.
