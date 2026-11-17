# Dashboard page

Use for: live numbers and a few lists on one screen.

Inside the shell panel: page title and a period or filter control, a `kpi-strip`, then a grid of Cards (real) holding the lists, tables and charts. Equal gutters, no card taller than it needs to be. Live values carry a "Live" indicator and an updated-at time. Charts: see `patterns/chart-theme.md` (a third-party integration and a gap).

States: loading skeletons, a card with no data (`empty-state`), a card that failed (Inline Notification inside the card, the rest still works).
Acceptance extras: no information is carried by color alone; every chart has a text alternative or a table view.
