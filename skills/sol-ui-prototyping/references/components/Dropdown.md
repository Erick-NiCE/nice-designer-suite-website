# Dropdown

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-dropdown` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-dropdown-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-dropdown-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | The Id for the dropdown |
| `name` | `string` | The Name for the dropdown |
| `selection` | `OptionType \| OptionType[] \| null` | The selected option(s) for the dropdown. |
| `options` | `OptionType[]` | The list of options available for selection in the dropdown. |
| `isMultiple` | `boolean` | Determines if multiple options can be selected. (Default: false) |
| `disabled` | `boolean` | Indicates if the dropdown is disabled. (Default: false) |
| `readOnly` | `boolean` | Indicates if the dropdown is in read-only mode. When true, the dropdown displays the selected value but cannot be opened or changed. (Default: false) |
| `placeholder` | `string` | The placeholder text to display when no option is selected. |
| `optionsLabel` | `string` | The property name to use for the display label of each option. This will be used in the dropdown to look up the display name for the selected item, so it knows which property to display. (Default: 'name') |
| `optionsValue` | `string` | The property name to use for the value of each option. This will be used in the dropdown to look up the display name for the selected item, so it knows which property to return. The dropdown will use the value specified in optionsValue (such as an ID or any custom value) during the search process to sort items based on the provided optionsValue. (Default: 'value') |
| `optionsIcon` | `string` | The property name to use for the icon of each option. (Default: 'icon') |
| `required` | `boolean` | Indicates if the dropdown is required. (Default: false) |
| `ariaLabel` | `string` | Accessible name applied as aria-label on the trigger. Use only when no visible label is provided. When label is set, this value is ignored to prevent conflicting accessible names. |
| `searchEnabled` | `boolean` | Enables the search functionality within the dropdown. (Default: false) |
| `searchFunction` | `(option: any, query: string) => boolean` | A custom function to filter the options based on the search query. |
| `optionTemplate` | `ReactNode \| ((scope: ProjectedContentScope) => ReactNode)` | A custom template for the option. |
| `optionTemplateScopeKey` | `any` | Optional key to access data in the option template scope. |
| `selectedOptionTemplate` | `ReactNode \| ((scope: DropdownSelectionTemplateScope) => ReactNode)` | A custom template for the placeholder section. |
| `selectedOptionTemplateScopeKey` | `any` | Optional key to access data in the selected option template scope. |
| `maxSelectionLimit` | `number` | Indicates the maximum number of items that can be selected. Minimum supported value is 1 (default: 1). There is no enforced upper limit. |
| `maxItemsLimit` | `number` | Limits the number of options rendered in the dropdown. If the options array exceeds this value, only the first maxItemsLimit options are shown. Minimum supported value is 1 (default: 2500). |
| `showFooter` | `boolean` | Indicates whether to show footer or not (Default: false) |
| `loading` | `boolean` | whether to loading state or not (Default: false) |
| `externalSearchError` | `boolean` | whether to error state or not (Default: false) |
| `externalSearchOptions` | `ExternalSearchOptions` | This field determines if data should be retrieved from the server on load and on search in the dropdown with following params : keystrokeDelay, resultsCount, enabled (Defaults: keystrokeDelay: 500, resultsCount: 0, enabled: false) |
| `sortEnabled` | `boolean` | Enables or disables sorting of options. When true, options will be sorted based on sortKey property. (Default: true) |
| `sortKey` | `string` | Only effective when sortEnabled is true. Specifies the property name to sort by. Supports fields containing string or number values. When not provided, the component uses optionsLabel as the sorting key (and optionsLabel defaults to 'name'). |
| `sortOrder` | `'asc' \| 'desc'` | The sort order for options. Can be 'asc' (ascending) or 'desc' (descending). Only effective when sortEnabled is true. (Default: 'asc') |
| `tooltipPlacement` | `DropdownTooltipPlacement` | The placement of the tooltip that appears when the selected value text overflows. Valid values: 'top' \| 'right' \| 'bottom' \| 'left' \| 'auto'. (Default: 'auto') |
| `className` | `string` | Extra CSS class added to the root .sol-dropdown element. |
| `style` | `string \| CSSProperties` | Inline style on the root .sol-dropdown element. Accepts a CSS string (Angular parity) or a React CSSProperties object. |
| `( Inherited` | `from` | useLabelErrorMessage ) |
| `label` | `string` | The text for the label that appears above the input. By default, there is no label. |
| `labelHelpText` | `string` | Help text that appears as a tooltip when hovering over a help icon next to the label. When provided, a help icon appears after the label text. Default is empty. |
| `supportErrorMessage` | `boolean` | When true, the component will have a space below it where an error message could go. When false, the component will not have a space for an error message. If you want to show an error message, then this value must be set to true when the component is initialized. If the field is marked as required or the field has an infoMessage, then this input will default to true. Otherwise, it will default to false. |
| `errorMessage` | `string` | The text of the error that should appear below the field. supportErrorMessage must have a value of true for this errorMessage to appear. |
| `infoMessage` | `string` | The informational text that should appear below the field. If errorMessage is set, the errorMessage will take precedence over the infoMessage. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onSelectionChange` | `` | Event emitted when the selection changes, passing the new selected value(s). |
| `onDropdownOpenStateChange` | `` | Event emitted when the overlay changes. |
| `onSearchChanged` | `` | Event emitted when the search value changes. |
| `onExternalSearch` | `` | Event emitted for performing external search and update options. It contains searchQuery and selectedItem. |
| `onSelectAllToggled` | `` | Boolean event emitted when select all on the multiselect is clicked. True when all options selected false when no options selected. |

## React reference stories

Copy open/close/select behavior from these, not from what seems reasonable.

- [Single Select](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--single-select)
- [Single Select Sort](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--single-select-sort)
- [Single Select Read Only](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--single-select-read-only)
- [Single Select Disabled](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--single-select-disabled)
- [Single Select Error Message](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--single-select-error-message)
- [Multi Select](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--multi-select)
- [Multi Select Search](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--multi-select-search)
- [Custom Search](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--custom-search)
- [Multi Select With Large Set Items](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--multi-select-with-large-set-items)
- [Multi Select With Max Items Limit](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--multi-select-with-max-items-limit)
- [Multi Select With Max Selection Limit](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--multi-select-with-max-selection-limit)
- [Dropdown Bottom Position](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--dropdown-bottom-position)
- [Single Select Custom Template](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--single-select-custom-template)
- [Multiple Select Custom Template](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--multiple-select-custom-template)
- [Icon In Dropdown Options](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--icon-in-dropdown-options)
- [Multi Select With Categories](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--multi-select-with-categories)
- [Multi Select With Categories And Max Selection Limit](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--multi-select-with-categories-and-max-selection-limit)
- [Long Options Dropdown](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--long-options-dropdown)
- [External Search](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--external-search)
- [Single Select Multi Line Custom Template](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--single-select-multi-line-custom-template)
- [Multi Select Multi Line Custom Template](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--multi-select-multi-line-custom-template)
- [Multi Select Search With Same Name](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--multi-select-search-with-same-name)
- [Dropdown Custom Item Height Template](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--dropdown-custom-item-height-template)
- [Reactive Form](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--reactive-form)
- [Dynamic Options Test](https://na1.dev.nice-incontact.com/sol/?path=/story/react_dropdown--dynamic-options-test)

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | The Id for the dropdown |
| `name` | `string` | The Name for the dropdown |
| `selection` | `any` | The selected option(s) for the dropdown. |
| `options` | `any[]` | The list of options available for selection in the dropdown. |
| `isMultiple` | `boolean` | Determines if multiple options can be selected. (Default: false) |
| `disabled` | `boolean` | Indicates if the dropdown is disabled. |
| `readonly` | `boolean` | Indicates if the dropdown is in read-only mode. When true, the dropdown displays the selected value but cannot be opened or changed. (Default: false) |
| `placeholder` | `string` | The placeholder text to display when no option is selected. |
| `optionsLabel` | `string` | The property name to use for the display label of each option. This will be used in the dropdown to look up the display name for the selected item, so it knows which property to display. (Default: 'name') |
| `optionsValue` | `string` | The property name to use for the value of each option. This will be used in the dropdown to look up the display name for the selected item, so it knows which property to return. The dropdown will use the value specified in optionValue (such as an ID or any custom value) during the search process to sort items based on the provided optionValue. (Default: 'value') |
| `optionsIcon` | `string` | The property name to use for the icon of each option. (Default: 'icon') |
| `required` | `boolean` | Indicates if the dropdown is required. (Default: false) |
| `ariaLabel` | `string` | Accessible name applied as aria-label on the trigger. Use only when no visible label is provided. When label is set, this value is ignored to prevent conflicting accessible names. |
| `searchEnabled` | `boolean` | Enables the search functionality within the dropdown. (Default: false) |
| `searchFunction` | `Function` | A custom function to filter the options based on the search query. |
| `optionTemplate` | `TemplateRef` | A custom template for the option. |
| `optionTemplateScopeKey` | `any` | Optional key to access data in the option template scope. |
| `selectedOptionTemplate` | `TemplateRef` | A custom template for the placeholder section. |
| `selectedOptionTemplateScopeKey` | `any` | Optional key to access data in the selected option template scope. |
| `maxSelectionLimit` | `number` | Indicates the maximum number of items that can be selected. Minimum supported value is 1 (default: 1). There is no enforced upper limit. |
| `maxItemsLimit` | `number` | Limits the number of options rendered in the dropdown. If the options array exceeds this value, only the first maxItemsLimit options are shown. Minimum supported value is 1 (default: 2500). |
| `showFooter` | `boolean` | Indicates whether to show footer or not (Default: false) |
| `loading` | `boolean` | whether to loading state or not (Default: false) |
| `externalSearchError` | `boolean` | whether to error state or not (Default: false) |
| `externalSearchOptions` | `ExternalSearchOptions` | This field determines if data should be retrieved from the server on load and on search in the dropdown with following params : keystrokeDelay, resultsCount, enabled (Defaults: keystrokeDelay: 500, resultsCount: 0, enabled: false) |
| `sortEnabled` | `boolean` | Enables or disables sorting of options. When true, options will be sorted based on sortKey property. (Default: true) |
| `sortKey` | `string` | Only effective when sortEnabled is true. Specifies the property name to sort by. Supports fields containing string or number values. When not provided, the component uses optionsLabel as the sorting key (and optionsLabel defaults to 'name'). |
| `sortOrder` | `'asc' \| 'desc'` | The sort order for options. Can be 'asc' (ascending) or 'desc' (descending). Only effective when sortEnabled is true. (Default: 'asc') |
| `tooltipPlacement` | `TooltipPlacement` | The placement of the tooltip that appears when the selected value text overflows. Valid values: 'top' \| 'right' \| 'bottom' \| 'left' \| 'auto'. (Default: 'auto') |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `selectionChange` | `` | Event emitted when the selection changes, passing the new selected value(s). |
| `dropdownOpenStateChange` | `` | Event emitted when the overlay changes. |
| `searchChanged` | `` | Event emitted when the search value changes. |
| `onExternalSearch` | `` | Event emitted for performing external search and update options. It contains searchQuery and selectedItem. |
| `selectAllToggled` | `` | Boolean event emitted when select all on the multiselect is clicked. True when all options selected false when no options selected. |

## Angular reference stories

- [Single Select](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--single-select)
- [Single Select Sort](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--single-select-sort)
- [Single Select Read Only](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--single-select-read-only)
- [Single Select Disabled](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--single-select-disabled)
- [Single Select Error Message](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--single-select-error-message)
- [Multi Select](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--multi-select)
- [Multi Select Search](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--multi-select-search)
- [Custom Search](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--custom-search)
- [Multi Select With Large Set Items](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--multi-select-with-large-set-items)
- [Multi Select With Max Items Limit](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--multi-select-with-max-items-limit)
- [Multi Select With Max Selection Limit](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--multi-select-with-max-selection-limit)
- [Dropdown Bottom Position](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--dropdown-bottom-position)
- [Single Select Custom Template](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--single-select-custom-template)
- [Multiple Select Custom Template](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--multiple-select-custom-template)
- [Icon In Dropdown Options](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--icon-in-dropdown-options)
- [Multi Select With Categories](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--multi-select-with-categories)
- [Multi Select With Categories And Max Selection Limit](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--multi-select-with-categories-and-max-selection-limit)
- [Long Options Dropdown](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--long-options-dropdown)
- [Reactive Form](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--reactive-form)
- [External Search](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--external-search)
- [Single Select Multi Line Custom Template](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--single-select-multi-line-custom-template)
- [Multi Select Multi Line Custom Template](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--multi-select-multi-line-custom-template)
- [Dynamic Options Test](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--dynamic-options-test)
- [Multi Select Search With Same Name](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--multi-select-search-with-same-name)
- [Dropdown Custom Item Height Template](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_dropdown--dropdown-custom-item-height-template)

## Migration notes (Angular)

- Migrating to V17: Input rename: readOnly → readonly (lowercase for consistency with other SOL components)
- Migrating to V16: The following breaking change was made in SOL Dropdown version 16 to align with the Select component:
- Migrating to V14: There are a small number of breaking changes in the SOL Dropdown from version 13 to 14.; Changes to input names: labelText ➜ label errorMessageText ➜ errorMessage; labelText ➜ label; errorMessageText ➜ errorMessage; The error message text no longer has a leading and a trailing space. You may need to update your tests. .toHaveText(' This field is required ') ➜ .toHaveText('This field is required'); .toHaveText(' This field is required ') ➜ .toHaveText('This field is required')

Old names in these notes are **removed**. Never use them.
