# Omnibar

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-omnibar` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-omnibar-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-omnibar-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `customOmnibar` | `boolean` | Determines if the complete header section of the omnibar is to be content projected or not |
| `id` | `string` | Unique ID for the omnibar |
| `isFilterable` | `boolean` | Determines whether to show the filter button or not. |
| `itemCountLabel` | `string` | The label to show the total count of an entity. Also announced to screen readers, even when showItemCount is false. Don't provide this input to disable the count feature entirely. |
| `searchable` | `boolean` | Determines whether to show a search input field or not. |
| `searchQuery` | `string` | Search Query to be passed to the omnibar for filtering. |
| `searchPlaceholderText` | `string` | The search field placeholder text. |
| `selectedItemCountLabel` | `string` | The label to show the total selected count of an entity |
| `showFooter` | `boolean` | Determines whether the omnibar footer is to be shown or not. |
| `showItemCount` | `boolean` | Determines whether the count badge is visible. Defaults to true. Only affects the visible badge — the screen-reader announcement of itemCountLabel/selectedItemCountLabel always fires regardless of this value. If you set showItemCount= because you render your own count UI elsewhere, don't also pass itemCountLabel/selectedItemCountLabel — doing so announces the count twice. |
| `filtersSelectedCount` | `number` | Number of filters selected |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `customOmnibar` | `boolean` | Determines if the complete header section of the omnibar is to be content projected or not |
| `id` | `string` | Unique ID for the omnibar |
| `isFilterable` | `boolean` | Determines whether to show the filter button or not. |
| `itemCountLabel` | `string` | The label to show the total count of an entity. Also announced to screen readers, even when showItemCount is false. Don't provide this input to disable the count feature entirely. |
| `searchable` | `boolean` | Determines whether to show a search input field or not. |
| `searchQuery` | `string` | Search Query to be passed to the omnibar for filtering. |
| `searchPlaceholderText` | `string` | The search field placeholder text. |
| `selectedItemCountLabel` | `string` | The label to show the total selected count of an entity |
| `showFooter` | `boolean` | Determines whether the omnibar footer is to be shown or not. |
| `showItemCount` | `boolean` | Determines whether the count badge is visible. Defaults to true. Only affects the visible badge - the screen-reader announcement of itemCountLabel/selectedItemCountLabel always fires regardless of this value. If you set showItemCount={false} because you render your own count UI elsewhere, don't also pass itemCountLabel/selectedItemCountLabel - doing so announces the count twice. |
| `filtersSelectedCount` | `number` | Number of filters selected |

## Angular outputs

_None documented._

## Migration notes (Angular)

- Migrating to V16: SOL Omnibar has the following breaking changes from SOL 15 to SOL 16:; The filtersSelected boolean input has been removed. Use filtersSelectedCount instead to indicate the number of active filters.; The filter badge visibility is now automatically computed based on whether filtersSelectedCount is greater than 0.

Old names in these notes are **removed**. Never use them.
