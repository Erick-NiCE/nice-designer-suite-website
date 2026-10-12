# Query Builder

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-query-builder` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-query-builder-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-query-builder-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `model` | `QueryBuilderOutput` | The current selection or state of the query builder. |
| `filters` | `QueryFilterDefinition[]` | The list of filters available for use in the query builder. |
| `errorMessageText` | `string` | The error message displayed when an error occurs. |
| `showErrorMessage` | `boolean` | Whether to display the error message (default: false). |
| `addFilterText` | `string` | The text displayed on the button used to add filters. |
| `enableSearchOnAddFilter` | `boolean` | Determines whether to show a search box in the filters menu. |
| `borderless` | `boolean` | When true, removes the outer query-builder border and background so the component blends into a containing surface such as a Grid Block filter bar. Default: false. |
| `allowClearAll` | `boolean` | When true (default), shows a "Clear" button that removes all non-mandatory filters at once. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onSelectionChanged` | `(value: QueryBuilderOutput) => void` | Called when the selection changes. Fires selection and isValid. When new criteria is added, fires after the overlay closes. |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `model` | `QueryBuilderOutput` | The current selection or state of the query builder. |
| `filters` | `QueryFilterDefinition[]` | The list of filters available for use in the query builder. |
| `errorMessageText` | `string` | The error message displayed when an error occurs. |
| `showErrorMessage` | `boolean` | Whether to display the error message (default: false). |
| `addFilterText` | `string` | The text displayed on the button used to add filters. |
| `enableSearchOnAddFilter` | `boolean` | Determines whether to show a search box in the filters menu. |
| `borderless` | `boolean` | When true, removes the outer query-builder border and background so the component blends into a containing surface such as a Grid Block filter bar. Default: false. |
| `allowClearAll` | `boolean` | When true (default), shows a "Clear" button that removes all non-mandatory filters at once. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `selectionChanged` | `QueryBuilderOutput` | event gets emitted when value is changed. It emits selection and isValid. When new criteria is added then event will fire after closing the overlay. |

## Migration notes (Angular)

- Migrating to V17: Property rename in QueryFilterDefinition: readOnly → readonly (lowercase for consistency with other SOL components)

Old names in these notes are **removed**. Never use them.
