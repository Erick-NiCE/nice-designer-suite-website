# Detail page

Use for: one record and what you can do with it (an agent, a pattern set, a campaign).

Inside the shell panel: breadcrumb ending in the record name, title with status pill and actions (Edit, then a kebab menu for the rest), then Tabs (real) for sibling views of the same record (Overview, Activity, Settings). Overview is a two-column layout of real Cards: summary fields on the left, related data (a `data-table` or Grid) on the right. Destructive actions are a critical Button behind a Modal (real) confirmation.

States: loading, record not found, no permission, empty related data.
Acceptance extras: the title and status are readable by a screen reader in that order; the Modal traps focus.
