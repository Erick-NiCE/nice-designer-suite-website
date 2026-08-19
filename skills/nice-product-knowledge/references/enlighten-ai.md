# Enlighten AI — the cross-cutting AI layer

*Compiled from public sources, August 2026.*

## What it is

**NICE Enlighten AI** is a suite of purpose-built AI models embedded across NICE's CX and compliance products — it isn't one product but the AI layer that shows up inside CXone Mpower (and is positioned as NICE's broader AI brand). [[WebSearch summary, Aug 2026]] The most visible surface of it is **Enlighten Copilot**.

## Enlighten Copilot

A virtual assistant embedded in the contact-center workflow, with distinct behavior for different roles: [[nice.com — Enlighten Copilot blog](https://www.nice.com/blog/nice-enlighten-copilot-the-next-generation-ai-driven-intelligence-to-the-entire-cx-workforce-is-here)]

### Copilot for Agents
- Listens to conversations **live**, tracks customer sentiment, and surfaces guidance from knowledge sources **during** the interaction — not after.
- Identifies upsell/cross-sell opportunities in the moment.
- Handles repetitive post-interaction work: contact summarization, transfer summaries, journey summaries, email responses, knowledge-base answers.

[[help.nicecxone.com — Copilot for Agents](https://help.nicecxone.com/content/agent/cxoneagent/enlightencopilotforagentscxa.htm)]

### Copilot for Supervisors
- Surfaces performance insights: customer sentiment trends, speech patterns, time-to-resolution.
- Integrates with native + third-party CXone apps to **trigger staffing adjustments** directly from an insight (not just report it).
- Shows KPI comparisons against **sector-specific benchmarks** — supervisors see how they compare to peers in their industry, not just to their own history.

[[help.nicecxone.com — Copilot for Supervisors](https://help.nicecxone.com/content/supervisorwem/enlightencopilotforsupervisors.htm)]

### Cross-application intelligence
Copilot draws on data from **40+ applications** inside CXone plus third-party sources to isolate trends, inefficiencies, and execution gaps — surfaced as visual dashboards, and answerable via **natural-language questions** ("ask a question, get an opportunity," not just a static report). [[CX Today — Enlighten AI overview](https://www.cxtoday.com/contact-center/nice-enlighten-ai-features-benefits-pricing/)]

### Enlighten Actions
The automation counterpart to Copilot's insight layer: integrates with native/third-party apps and data to **automatically initiate** workflow and staffing adjustments — closing the loop from "Copilot noticed something" to "the system acted on it" without a human necessarily triggering the action. [[CX Today](https://www.cxtoday.com/contact-center/nice-enlighten-ai-features-benefits-pricing/)]

## Why this matters for design work

- Enlighten's design pattern is consistently: **listen/observe → surface an insight in-context → offer or take an action** — not a separate "AI chat window" bolted onto the side of the product. A new AI feature idea should be checked against this pattern before assuming a chatbot-style interface is the right fit.
- Copilot deliberately differentiates by role (agent vs. supervisor) rather than shipping one generic "AI assistant" UI. When designing an AI-assist feature, ask "who specifically is this for, and what does *their* moment of use look like" rather than designing a single AI panel for everyone.
- Benchmarking against **sector peers**, not just historical self-comparison, is a distinctive Enlighten pattern worth reusing when the idea is plausible for the feature being designed.
