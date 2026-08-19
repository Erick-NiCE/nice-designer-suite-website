---
name: token-candidates
description: Identify custom (non-token) values on a page that recur often enough to justify being added to the Lyra design system. Invoke when the user asks "which custom values should become tokens", "find token candidates", "what should I add to Lyra", or similar. Groups raw-hex / raw-px usages by frequency and surfaces candidates the design-system team should promote to tokens rather than fix as one-offs.
disable-model-invocation: false
---

# Token-candidate report

Answer the design-system-owner question: *"we keep hitting the same handful of non-token values — which of them should we just bless as new tokens?"* — by scanning a page for recurring raw values and ranking them by frequency.

## When to invoke

Any of:

- "Which custom values should become tokens"
- "Find token candidates"
- "What should we add to Lyra"
- "Token promotion candidates"
- "Are there colors/spacings I'm re-using enough to need a token"

This is a *design-system-maintainer* flow, distinct from the *consumer* flows (`convert_page_to_lyra`, manual-fixes). The output is not a list of things to fix — it's a list of things to add upstream.

## Preflight

1. Call `list_targets`. Pick the lone connected target; if both, ask which page/file.
2. `get_selection_info` on that target. Scope to the selection if one exists, otherwise full page/artboard.
3. Tell the user the scope in the opening line: *"Scanning '<scope>' for token-candidate patterns."*

## Extract

Run these in parallel with `system: "lyra"`:

- `audit_colors`
- `audit_text_styles`
- `audit_spacing`
- `audit_radius`

Each returns an issue list of (nodeId, rawValue, suggestedToken). Suggested-token being null or far-off (`delta > threshold`) means "no close match" — these are the values that matter for this skill. Suggested-token being close means the consumer should just adopt the existing token; that's not a candidate for a new one.

## Rank candidates

For each domain, group the **no-close-match** issues by their raw value:

- Normalize first: colors to lowercase 6-digit hex, sizes to px with 1-decimal precision, font families by case-insensitive string.
- Count occurrences per normalized value.
- Sort by count descending.
- Keep only values with count ≥ 3 as candidates. Singletons and pairs are noise — they might be genuine one-offs.

For each candidate, also record:

- Distinct selectors / layer names where it appears (up to 5 examples).
- Whether it's visually close to an existing token (`delta` just over the match threshold). These are "near-tokens" — the easiest candidates to bless because consumers might already think they're using the token.

## Output

Heading: `## Token candidates — <scope>`

One-line summary: *"Found C recurring non-token values across D domains. Top candidates below."*

Then per domain, only showing domains with at least one candidate:

### Colors (N candidates)
Table: `Value | Count | Near token? | Example locations`. Sort by count desc.

### Text styles (N candidates)
Table: `Font/size/weight triple | Count | Near token? | Example locations`.

### Spacing (N candidates)
Table: `Value (px) | Count | Near token? | Example locations`. Include 1-step-off notes: "8px (Lyra has 4 and 12 — this is between)".

### Radius (N candidates)
Same shape.

### Recommendation
Short prose for the top 3 candidates across all domains. For each: *"Promote to token: `lyra/<proposed-name>` — used X times, currently appears as `<raw value>`. Would replace non-token usages with zero code changes in most consumers once the token exists."*

## Follow-up offer

End with: *"Want me to open a PR-ready description for any of these to take to the Lyra maintainers?"* — implies the user takes this list to the DS team rather than fixing anything locally.

## What NOT to do

- Don't suggest promoting values that *are* already close to an existing token — those aren't candidates, they're consumer bugs. Tell the user to run `convert_page_to_lyra` for those.
- Don't mutate. No `convert_*` / `fix_*` / `apply_*`.
- Don't include singletons or pairs. Low-count values inflate the report and aren't real patterns.
- Don't propose token names with brand/product prefixes (`bloomberg-blue`) — Lyra tokens are semantic (`brand-primary`). Suggest the role, not the appearance.
- Don't include accessibility audit issues — those aren't about reusable values.
