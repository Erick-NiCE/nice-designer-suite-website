# Breadcrumb

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-breadcrumb` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-breadcrumb-api--docs&globals=theme:lyra |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-breadcrumb-api--docs&globals=theme:lyra |

These docs are on the internal SOL/Lyra Storybook (VPN), opened in the Lyra theme. If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `items` | `BreadcrumbItem[]` | Yes |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onItemClicked` | `{ item: BreadcrumbItem; event: Event }` | Emits when a breadcrumb item with a path is clicked. Use this to handle custom navigation logic. |

## React reference stories

Copy open/close/select behavior from these, not from what seems reasonable.

- [All Scenarios](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-breadcrumb-examples--all-scenarios&globals=theme:lyra)

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `items` | `BreadcrumbItem[]` | Yes |
| `ariaLabel` | `string` | No |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `itemClicked` | `{ item: BreadcrumbItem; event: Event }` | Emits when a breadcrumb item with a path is clicked. Use this to handle custom navigation logic. |

## Angular reference stories

- [All Scenarios](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-breadcrumb-examples--all-scenarios&globals=theme:lyra)

