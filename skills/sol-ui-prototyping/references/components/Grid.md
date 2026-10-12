# Grid

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-grid` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-grid-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-grid-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `dataSource` | `IDatasource \| ICompatibleDatasource \| IServerSideDatasource \| ICompatibleServerSideDatasource \| undefined` | Defines the data source for the ag-grid. The types are specific to ag-grid. |
| `maxAmountOfPages` | `number` | Specifies the maximum number of pages that the grid can display. |
| `rangeOfDisplayedItems` | `string` | Specifies the range of items to be displayed in the pager. This is a string value. |
| `columnDefs` | `(ColDef \| ColGroupDef)[] \| null \| undefined` | Defines the column definitions for the ag-grid. |
| `defaultColDef` | `ColDef` | Defines the default column definitions for the ag-grid. |
| `rowData` | `any[]` | Specifies the data to be displayed in the grid. |
| `gridOptions` | `GridOptionsCellSpinnerProp` | Defines the options for the ag-grid. For checkbox-selection columns, SOLGrid applies a default accessible checkbox cell renderer when no custom cellRenderer is provided. |
| `pagination` | `boolean` | Enables or disables pagination in the grid. If true, a pager will be displayed. |
| `maxItemsPerPage` | `number` | Sets the maximum number of items to be displayed per page when pagination is enabled. |
| `gridState` | `unknown` | Sets the initial state of the grid (column visibility/order). |
| `gridSort` | `ColumnState[] \| unknown` | Sets the initial sort order of the grid. |
| `frameworkComponents` | `unknown` | Custom components registry. AG Grid v34 prefers components on gridOptions; this prop is preserved for source-level parity with Angular. |
| `pageNumber` | `number` | Programmatic 1-based page number control. Defaults to 0. |
| `selectRowEnabled` | `boolean` | When false, the visual selected-row highlight is cleared and row clicks no longer apply the highlight. Default true. |
| `ariaLabel` | `string` | Accessible name for the grid. |
| `ariaLabelledby` | `string \| null` | External label element id. Takes precedence over ariaLabel. |
| `displayedItemsLabel` | `string` | Suffix label for the pagination range. Defaults to the i18n translation of segmentsLabel. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onChangePageClick` | `(page: number) => void` | Fires when the user clicks first/back/next/last/enter pagination buttons. |
| `onSaveState` | `(state: ColumnState[]) => void` | Fires on column resize finish, drag-stopped, column visible, or column changed. |
| `onSaveSort` | `(sort: ColumnState[]) => void` | Fires on sort change. |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `dataSource` | `IDatasource \| ICompatibleDatasource \| IServerSideDatasource \| ICompatibleServerSideDatasource \| undefined Note: This types are ag-grid` | Defines the data source for the ag-grid. The types are specific to ag-grid. |
| `maxAmountOfPages` | `number` | Specifies the maximum number of pages that the grid can display. |
| `rangeOfDisplayedItems` | `string` | Specifies the range of items to be displayed in the pager. This is a string value. |
| `columnDefs` | `(ColDef \| ColGroupDef)[] \| null \| undefined` | Defines the column definitions for the ag-grid. This determines how each column in the grid will be displayed. |
| `defaultColDef` | `ColDef` | Defines the default column definitions for the ag-grid. This is used when specific column definitions are not provided. |
| `rowData` | `any[]` | Specifies the data to be displayed in the grid. This is an array of any type. |
| `gridOptions` | `GridOptionsCellSpinnerProp` | Defines the options for the ag-grid. This includes settings like row selection, sorting, and filtering. For checkbox-selection columns (checkboxSelection: true), sol-grid applies a default accessible checkbox cell renderer when no custom cellRenderer is provided. |
| `pagination` | `boolean` | Enables or disables pagination in the grid. If true, a pager will be displayed. |
| `maxItemsPerPage` | `number` | Sets the maximum number of items to be displayed per page when pagination is enabled. |
| `gridState` | `-` | Sets the initial state of the grid. This can include configurations like column visibility and order. |
| `gridSort` | `ColumnState[] \| any` | Sets the initial sort order of the grid. This is an array of ColumnState objects, each representing a column and its sort order. |
| `frameworkComponents` | `-` | In AG-Grid, frameworkComponents is a property that you can use to register your custom components. The type of frameworkComponents is an object where the keys are the names of the components and the values are the actual component classes. |
| `DisplayedItemsLabel` | `string` | Label for displayed items count. |
| `pageNumber` | `number` | Current page number. |
| `selectRowEnabled` | `boolean` | Whether row selection is enabled. |
| `ariaLabel` | `string` | Sets aria-label on the grid. |
| `ariaLabelledby` | `string \| null` | Sets aria-labelledby on the grid. |
| `filterMode` | `'search' \| 'search-query-builder' \| undefined` | Enables block mode's search bar. 'search' renders the Omnibar; 'search-query-builder' renders the Filterbar with criteria chips. Unset keeps the grid in standalone mode. |
| `searchPlaceholder` | `string` | Placeholder text for the block-mode search input. Default ''. |
| `searchValue` | `string` | Current value of the block-mode search input. Default ''. |
| `searchMaxWidth` | `string \| undefined` | Max width applied to the search input. |
| `filters` | `QueryFilterDefinition[]` | Filter definitions for the Filterbar. Default []. |
| `filterModel` | `QueryBuilderOutput` | Current Filterbar selection model. Default {}. |
| `showAddCriteria` | `boolean` | Shows the "add criteria" control in the Filterbar. Default false. |
| `chipsRemovable` | `boolean` | Whether applied filter chips can be individually removed. Default false. When false, every filter is treated as mandatory: its chip cannot be removed. Set mandatory: true on an individual QueryFilterDefinition to keep a specific chip locked even when chipsRemovable is true. |
| `headerTitle` | `string \| undefined` | Block-mode header title. Setting this (or itemCountLabel/loading) activates block mode. |
| `itemCountLabel` | `string` | Block-mode header item-count label, e.g. '42 Cases'. Default ''. |
| `showColumnPicker` | `boolean` | Shows the column-picker toggle in the block-mode header. Default false. |
| `loading` | `boolean` | Shows the grid's loading skeleton in place of rows. Default false. |
| `borderless` | `boolean` | Removes the grid panel's border — use when nesting the grid inside another bordered container. Default false. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `changePageClick` | `EventEmitter` | Event handler for when the  page changed event handler |
| `saveState` | `EventEmitter` | Event handler for save preferences for column state |
| `saveSort` | `EventEmitter` | Event handler for save preferences for sort |
| `searchValueChange` | `EventEmitter<string>` | Emitted when the block-mode search value changes. |
| `filterModelChange` | `EventEmitter<QueryBuilderOutput>` | Emitted when the Filterbar's selection model changes. |
| `filterApplied` | `EventEmitter<GridFilterAppliedEvent>` | Emitted with { search, filterModel } whenever search or filter criteria are applied. |
| `selectionChange` | `EventEmitter<GridSelectionChangedEvent>` | Emitted with { selectedCount, selectedRows } whenever row selection changes. |

