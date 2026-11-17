---
name: lyra-page-conversion
description: The automatic path for "convert this page to Lyra", "make this page Lyra", "Lyra-ify this" or a page link plus "Lyra". Converting a page means rebuilding it as a new React Lyra feature, so this skill reads the live page without changing it (audit, screenshots, scrolling), rebuilds it in a shareable Claude Design file from the real Lyra components and the Lyra shell, audits that file, and hands off through feature-handoff: production code, component manifest, acceptance gates, gap log and a Jira ticket. It never edits the live page unless the user specifically asks for a preview. Extension only: no devtools, computer control, repo or stack questions.
disable-model-invocation: false
---

# Lyra page conversion (rebuild and hand off)

## Rule zero

"Convert this page to Lyra" does not mean patching the live page. A change made in the browser is gone on the next refresh, so it is never a deliverable and never the default. Converting a page means rebuilding it as a **new React Lyra feature**, consistent with every other Lyra feature, and handing that off.

1. **Use NiCE Designer Suite, Erick Mathews' tools, and nothing else.** The user has the browser extension and the connector. They have no computer control, devtools, terminal or repo, and most never will. Never ask them to open the console, run a command, inspect an element or look anything up. Everything you need comes from the tools below.
2. **Read the page, never change it.** Audit, screenshot, scroll and read are allowed. `apply_lyra_theme`, `convert_page_to_lyra`, `convert_*`, `fix_*` and `apply_css_overrides` change the live page and are **not** part of this flow. Use them only if the user specifically asks to see a live preview, and then always also save a change file, and say that it disappears on refresh.
3. Last line only: "Used NiCE Designer: <the tools or skills you used>. Questions or issues: contact Erick Mathews."

## The questions (and only these)

Ask in one message, before touching anything:

> I'll rebuild this page in Lyra as a shareable Claude Design file you can send for comments, plus a package your developer's Claude can build from and check. Is that okay? Do you happen to know which repo this page lives in, or have a Jira ticket for it? If not, no problem.

Defaults if they do not answer or do not know: yes to the deliverable, React, Lyra, a completely new build, repo not known, no ticket. Do not ask which stack the old page is in, do not ask for a link to code, do not offer a menu of formats.

## The steps

**1. Open the page.** `list_targets` (a browser must be connected; if not, tell them to turn on "Connect to Claude" in the extension, nothing more). `switch_tab({ url })`, or `list_tabs` then `switch_tab({ tabId })` for "this page". It opens in their own signed-in browser. If it lands on a login page, stop and say so; do not try to sign in.

**2. Read it, without changing it.**
- `run_full_audit({ target: "chrome", system: "lyra" })`: the before numbers, the Components line (what is real, what is hand-built, by kind), the App header line, the layout line. Big results overflow: read the saved file.
- `screenshot_page`, then `scroll_page` and screenshot again until you have seen the whole page and its states. Look at every screenshot. Read the text on them: headings, labels, columns, buttons, filters, empty and error states.
- `click_element` with `dryRun: true` is fine to learn what a control is. Do not click anything that changes data, sends, saves or deletes.
- Write the **page inventory**: every control, column, filter, state and action you could see, and what it does.

**3. Plan the rebuild.** Map each inventory item to the real Lyra component (`get_component_kit` lists them), a NiCE Designer pattern (`app-shell`, `data-table`, `status-pill`, `stat`), or a gap. A data grid is the Lyra `Grid` (AG Grid under it). Charts are a third-party integration and a gap. Keep the old page's purpose and content, and the new page's Lyra consistency: same shell, same components, same spacing.

**4. Build the review file.** Create the Claude Design file (`claude-design-loop` and `lyra-prototyping` Step 0 explain how: the Lyra suite shell first, real kit components unchanged, everything not real labeled). Use realistic content taken from what you read on the page, and say where you had to invent any.

**5. Check it.** Open the file's link with `switch_tab`, `check_acceptance`, `screenshot_page`, and look. Fix and re-check up to three rounds. A high score on a page that looks wrong is a failure to report.

**6. Build the handoff.** `feature-handoff` defines the package: production React code on the real component API, component manifest, integration points, acceptance gates, gap log, Jira ticket, task file for the developer's Claude. For a conversion add the inventory table (old element, what replaces it) and the before measurements. Deliver the shareable handoff page and the Claude Design link, plus files when file tools exist.

**7. Tell the user.** Short: the link to share, what was rebuilt, what is not perfect, what a developer must confirm.

## Live preview (only if the user specifically asks)

If they ask to see their change on the live page, you may use `apply_lyra_theme` and `convert_page_to_lyra`, and you must:
- say first that it only changes their browser and is gone on refresh;
- save a change file (`GET_LOCAL_EDITS_SNAPSHOT` via `call_plugin`, plus your before and after audit numbers) so the work is not lost;
- check layout after every step and undo a step that makes the page worse (`reload_tab` is the reliable revert for a convert; `clear_css_overrides` only removes the theme rules);
- never present it as the handoff.

## Honesty

- The rebuild is a new build from what you could see. Say what you could not see.
- Never claim the page is "100% Lyra" from a score alone: report the components line and what you looked at.
- The audit proves the prototype matches the design system, not that behavior is right.
- No em dashes in anything you write for the user.
