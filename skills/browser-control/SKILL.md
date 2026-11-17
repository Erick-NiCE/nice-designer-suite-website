---
name: browser-control
description: Drive Chrome step by step and recover the connection when it breaks. Switch or open tabs, scroll, click, and restart the bridge. Invoke when the user wants Claude to "go to this link", "switch tabs", "scroll down", "click the X tab", "open that panel and audit it", or when tools say nothing is connected, return stale results, or two copies of Chrome are connected.
disable-model-invocation: false
---

# Browser control

Reach the page or state that needs auditing without asking the user to click for you, and fix the bridge when it misbehaves. The browser is Chrome or Edge (the extension works in both): wherever a skill says Chrome, read it as the browser the user has.

## The tools

| Need | Tool |
| --- | --- |
| See what is open | `list_tabs` |
| Go to a tab, or open a link | `switch_tab` (by `tabId`, `urlContains`, or `url`) |
| Reload after an edit (cache bypassed) | `reload_tab` |
| Close a tab you opened | `close_tab` (never one the user opened without asking) |
| Scroll | `scroll_page` (`direction`, `amount`, or a `selector` to bring into view) |
| Click | `click_element` (`text` or `selector`, `index`, `dryRun`) |
| See the result | `screenshot_page` |
| Bridge broken | `get_diagnostics`, then `restart_hub` |

Every audit and fix tool acts on the **active tab**, so switch first, then audit.

## Rules

1. **Ask for the link.** When the user wants a specific file or page, ask for its link and wait. Never guess which tab or file, even if a likely tab is already open. Pass the whole link, fragment included, to `switch_tab`.
2. **Look before you click.** Run `click_element` with `dryRun: true` first when the match is not obvious, and read what it says it would click (label, selector, how many matches). Then click with the right `index`.
3. **Never click through consequences.** `click_element` refuses labels that send, publish, pay, confirm or delete. Do not set `allowDestructive` on your own: ask the user, name the exact control, and wait for a yes.
4. **Re-check after each move.** After a switch, scroll or click, take a `screenshot_page` or re-read the scope before auditing, so you audit what you think you are auditing.
5. **One change at a time.** Do not chain several clicks without looking in between: a click can change the page under the next one.

## Claude design pages

`switch_tab` reports `claudeDesignPage: true` for these. Then:

- Scroll, click, audit and screenshot all act on the **embedded design**, not Claude's interface (header, toolbar, sidebar).
- To use Claude's own controls (for example its artboard picker), pass `inShell: true` to `scroll_page` or `click_element`. Switch back to default afterwards.
- The `#artboard-...` part of a link tells Claude Design which artboard to show. The frame then holds only that artboard, so an audit of the frame is an audit of that artboard.
- If a tool says the design frame could not be reached, reload the Claude Design tab. If that does not help, use the recovery steps below.

## Recovery: when the bridge misbehaves

Symptoms: "No target connected", results that ignore a change you just made, the wrong page being scored, a tool that should exist but does not.

1. `list_targets`. **Two Chrome sessions** means a second copy of the extension (another profile, or an old copy that was never reloaded) is connected. The newest connection is used, but results from the older copy can still confuse things.
2. `get_diagnostics` for a plain-English next step.
3. `restart_hub` with `mode: "reset"`: drops every session so clients reconnect fresh. Safe, and this connector keeps running.
4. `list_targets` again to confirm one session per client.
5. Still stale, or a new tool is missing: the connector itself is old code. Ask the user before `restart_hub` with `mode: "reload"`, because it exits this connector for a few seconds and tools may not come back until Claude Desktop reconnects it. Say so when you ask.
6. Tell the user if the extension itself needs reloading in `chrome://extensions` and the page reloading afterwards; Claude cannot do that part.

## What to tell the user

Say what you switched to, scrolled or clicked, and what you saw, in one or two lines. If you recovered the bridge, say what was wrong and what fixed it.
