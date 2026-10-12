# Breadcrumb

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-breadcrumb` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-breadcrumb-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-breadcrumb-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `items` | `BreadcrumbItem[]` | Yes |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onItemClicked` | `{ item: BreadcrumbItem; event: Event }` | Emits when a breadcrumb item with a path is clicked. Use this to handle custom navigation logic. |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `items` | `BreadcrumbItem[]` | Yes |
| `ariaLabel` | `string` | No |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `itemClicked` | `{ item: BreadcrumbItem; event: Event }` | Emits when a breadcrumb item with a path is clicked. Use this to handle custom navigation logic. |

