# List page

Use for: a collection people scan, filter and act on (queues, agents, patterns, tickets).

Inside the `app-shell` page panel, top to bottom:
1. Breadcrumb (real), page title and the primary action (real Button, primary) on the right.
2. `filter-toolbar`: search (real Text Input), filter chips (real Chips), add filter, clear.
3. `kpi-strip` (only if the page has headline numbers).
4. The list: the Lyra `Grid` (AG Grid under it) for real data, or `data-table` for a short static list. Name column first as a link, numeric columns right aligned, status as `status-pill` with text, a row actions column at the end.
5. Pagination or infinite scroll as the Grid provides.

States to include: loading, empty (`empty-state`), no results after filtering (`empty-state`), error, no permission.
Acceptance extras: keyboard reaches every row action; sorted column is announced; header row sticks.
