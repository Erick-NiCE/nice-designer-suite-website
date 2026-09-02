# Dovetail retrieval mechanics

Read this before pulling data from Dovetail via MCP tools for synthesis work. These are
mechanics, not judgment calls, and they are the kind of thing that fails quietly: a truncated
result set produces findings that look complete.

- Search projects with `types: ['PROJECT']` filtered by name terms. This surfaces study rounds
  more reliably than an unfiltered search, which returns highlights and insights mixed together.
- `get_insight_content` can return access denied on a specific insight ID even when the project
  itself is visible. When that happens, pull `get_project_highlights` instead and use highlights
  as the primary evidence source. The permission boundary is per-insight, so do not conclude the
  whole project is unreachable.
- `get_project_highlights` paginates. Pass `limit: 100`, then use the `start_cursor` from the
  response to fetch the next batch. Repeat until the cursor stops coming back. **This is the
  step most likely to be skipped**, and skipping it means synthesizing from the first 100
  highlights of several hundred with no error to warn you.
- For a concept that spans multiple testing rounds, scope with `location_ids` set to all
  relevant project IDs at once rather than querying each project separately and merging by hand.
  Hand-merging across rounds is where duplicate quotes and miscounted prevalence come from.
- Track the project ID alongside any evidence you cite. Successive rounds of the same study
  (V1, V2, V3) carry near-identical names and separate IDs, so a citation without the ID cannot
  be traced back, and the round matters when the concept changed between them.
