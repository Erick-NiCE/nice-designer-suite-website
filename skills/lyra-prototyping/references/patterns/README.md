# NiCE Designer fallback patterns

The SOL/Lyra Storybook has no component for the app shell, a static table, a status pill or a key figure. These patterns fill those gaps so a prototype never has to draw them freehand.

They are written by NiCE Designer from Lyra tokens only. They are **not** Storybook components and they are never presented as real. Every use carries `data-nds-source="fallback"`, the audit counts it as a fallback, and the final reply lists it in the ledger as "Fallback: NiCE Designer pattern".

Get them with `get_component_kit({ patterns: ["app-shell", "data-table"] })`. Real kit components go inside them: the shell's header buttons, breadcrumb and page actions are already real `sol-*` components.

## app-shell: every prototype starts here

The Lyra suite shell is the first thing anyone sees, and the header decides whether a prototype looks presentable to the whole company. It follows the CXone Lyra design system's Suite Shell spec:

- **56px top bar** on the shell surface: the NiCE smile mark, the product menu (a real tertiary Button with a chevron), then on the right Help, Apps, Notifications (with a red count badge) and the account avatar with a chevron.
- **232px left rail**: icon plus label rows, the current page in the active blue wash. Drop it with `nds-shell--no-rail` for pages that have no navigation. The header is never dropped.
- **One white panel** (12px radius, 1px hairline, no shadow) holding the breadcrumb, the page title with its real action Buttons, and the content.

The audit reports whether a header is present, and a prototype without one is not done.

Other patterns: `app-switcher` (the menu from the product menu), `filter-toolbar`, `kpi-strip`, `stat`, `status-pill`, `data-table`, `empty-state`. `chart-theme.md` is the stand-in recipe for charts.

## Page templates

`../templates/` holds the skeleton for the five page types most features are: `list-page`, `detail-page`, `form-page`, `dashboard-page`, `settings-page`. Start from the template that fits, so every new feature has the same bones. Fetch one with `get_skill({ id: "lyra-prototyping", file: "references/templates/list-page.md" })`.
