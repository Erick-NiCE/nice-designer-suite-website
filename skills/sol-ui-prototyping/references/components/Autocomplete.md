# Autocomplete

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-autocomplete` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-autocomplete-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-autocomplete-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `minimumSearchTextLength` | `number` | The minimum number of characters required before showing autocomplete suggestions. Default: 3 |
| `placeholder` | `string \| undefined` | Placeholder text displayed in the input field. Default: translation of autoCompleteFullPlaceholder (e.g. 'Search for item'). |
| `ariaLabel` | `string` | ARIA label for accessibility. Required for screen reader support. |
| `ariaLabelledby` | `string` | Id of a labelling element. When set, ariaLabel is omitted in favour of aria-labelledby. |
| `panelId` | `string` | Id of the listbox panel. Auto-generated when omitted. |
| `value` | `string` | Controlled search text shown in the input. Default: '' |
| `className` | `string` | Escape hatch — extra CSS class added to the root .sol-auto-complete element. |
| `style` | `string` | Escape hatch — inline style string applied to the root element. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onOptionSelected` | `(event: { option: { value: string; id: string } }) => void` | Fired when an option is selected from the dropdown. The payload exposes the selected option's value (its name) and id. |
| `onClearedSearchText` | `() => void` | Fired when the clear button is clicked to remove the search text. |
| `onChange` | `(value: string) => void` | Fired as the search text changes. |
| `onDropdownVisible` | `(visible: boolean) => void` | Fired when the dropdown opens (true) or closes (false). |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `minimumSearchTextLength` | `number` | The minimum number of characters required before showing autocomplete suggestions. Default: 3 |
| `placeholder` | `string \| undefined` | Placeholder text displayed in the input field. Default: translation of autoCompleteFullPlaceholder (e.g. 'Search for item'). |
| `ariaLabel` | `string` | ARIA label for accessibility. Required for screen reader support. |
| `ariaLabelledby` | `string` | Sets aria-labelledby attribute. |
| `panelId` | `string` | ID for the autocomplete panel. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `optionSelected` | `EventEmitter<any>` | Event emitted when an option is selected from the dropdown. |
| `clearedSearchText` | `EventEmitter<void>` | Event emitted when the clear button is clicked to remove search text. |
| `dropdownVisible` | `EventEmitter<boolean>` | Event emitted when the dropdown opens (true) or closes (false). |

## Migration notes (Angular)

- Migrating to V17: Input rename: ariaLabelledBy → ariaLabelledby (lowercase 'b' for consistency with other SOL components)

Old names in these notes are **removed**. Never use them.
