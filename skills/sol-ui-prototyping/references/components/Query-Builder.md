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

## React reference stories

Copy open/close/select behavior from these, not from what seems reasonable.

- [No Filters Selected](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-query-builder-examples--no-filters-selected)
- [Saved Filters](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-query-builder-examples--saved-filters)
- [Test Filter Display](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-query-builder-examples--test-filter-display)
- [Readonly Filter Display](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-query-builder-examples--readonly-filter-display)
- [Mandatory And Default Filters](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-query-builder-examples--mandatory-and-default-filters)
- [Multi filters change](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-query-builder-examples--multi-filters-change)
- [Filter With Operators](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-query-builder-examples--filter-with-operators)
- [Multi-value overflow (+N)](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-query-builder-examples--multi-value-overflow)
- [Borderless variant](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-query-builder-examples--borderless-variant)

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

## Angular reference stories

- [No Filters Selected](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-query-builder-examples--no-filters-selected)
- [Saved Filters](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-query-builder-examples--saved-filters)
- [Test Filter Display](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-query-builder-examples--test-filter-display)
- [Readonly Filter Display](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-query-builder-examples--readonly-filter-display)
- [Mandatory And Default Filters](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-query-builder-examples--mandatory-and-default-filters)
- [Multi Filters Change](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-query-builder-examples--multi-filters-change)
- [Filter With Operators](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-query-builder-examples--filter-with-operators)
- [Multi-value overflow (+N)](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-query-builder-examples--multi-value-overflow)
- [Borderless variant](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-query-builder-examples--borderless-variant)

## Migration notes (Angular)

- Migrating to V17: Property rename in QueryFilterDefinition: readOnly → readonly (lowercase for consistency with other SOL components)

Old names in these notes are **removed**. Never use them.
