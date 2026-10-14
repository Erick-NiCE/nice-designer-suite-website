# Toggle Group

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-toggle-group` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-toggle-group-api--docs&globals=theme:lyra |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-toggle-group-api--docs&globals=theme:lyra |

These docs are on the internal SOL/Lyra Storybook (VPN), opened in the Lyra theme. If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `multiple` | `boolean` | Whether multiple toggle buttons can be selected. |
| `name` | `string` | Name attribute for the underlying element. |
| `disabled` | `boolean` | Whether the toggle group is disabled. |
| `value` | `string \| string[]` | Value of the toggle group. A string in single mode; an array in multi mode. |
| `defaultValue` | `string \| string[]` | Uncontrolled initial value. If both value and defaultValue are unset, the initial value is derived from any item marked checked. |
| `ariaLabel` | `string` | Accessible label describing the purpose of the toggle group. Required for accessibility. |
| `ariaLabelledBy` | `string` | ID of an element that labels the toggle group. Alternative to ariaLabel. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onSelectedChange` | `(value: string \| string[]) => void` | Fires when the group's value changes. |
| `onToggleClicked` | `(event: ToggleGroupChangeEvent) => void` | Fires when any toggle is clicked, with { source, value }. |

## React reference stories

Copy open/close/select behavior from these, not from what seems reasonable.

- [Template With Single Selection](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-toggle-group-examples--template-with-single-selection&globals=theme:lyra)
- [Template With Multiple Selection](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-toggle-group-examples--template-with-multiple-selection&globals=theme:lyra)
- [Reactive Forms Toggle](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-toggle-group-examples--reactive-forms-toggle&globals=theme:lyra)
- [Single Selection](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-toggle-group-examples--single-selection&globals=theme:lyra)
- [Multiple Selection](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-toggle-group-examples--multiple-selection&globals=theme:lyra)
- [Icons With Text](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-toggle-group-examples--icons-with-text&globals=theme:lyra)
- [Icons Only](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-toggle-group-examples--icons-only&globals=theme:lyra)

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `title` | `string` | The text which appears within the buttons. |
| `id` | `string` | The unique ID for this button toggle. |
| `checked` | `boolean` | Whether the button is checked. |
| `name` | `string` | HTML's 'name' attribute used to group radios for unique selection. |
| `ariaLabel` | `string \| null` | Attached to the aria-label attribute of the host element. |
| `value` | `string` | SolToggleGroup reads this to assign its own value. |
| `disabled` | `boolean` | Whether the button is disabled. |
| `titleTemplate` | `TemplateRef<unknown> \| null` | Template to be projected within the buttons. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `onSelectedChange` | `EventEmitter<string \| []>` | Event emitted when the group's value changes. |
| `onToggleClicked` | `EventEmitter<MatButtonToggleChange>` | Emits the toggle button source and value change. |

## Angular reference stories

- [Template With Single Selection](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-toggle-group-examples--template-with-single-selection&globals=theme:lyra)
- [Template With Multiple Selection](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-toggle-group-examples--template-with-multiple-selection&globals=theme:lyra)
- [Reactive Forms Toggle](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-toggle-group-examples--reactive-forms-toggle&globals=theme:lyra)
- [Single Selection](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-toggle-group-examples--single-selection&globals=theme:lyra)
- [Multiple Selection](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-toggle-group-examples--multiple-selection&globals=theme:lyra)
- [Icons With Text](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-toggle-group-examples--icons-with-text&globals=theme:lyra)
- [Icons Only](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-toggle-group-examples--icons-only&globals=theme:lyra)

## Migration notes (Angular)

- Migrating from V14 to V16: Component name changed from sol-button-toggle-group to sol-toggle-group and sol-button-toggle to sol-toggle-group-item.
- Migrating to V17: Input rename: ariaLabelledBy → ariaLabelledby (lowercase 'b' for consistency with other SOL components)

Old names in these notes are **removed**. Never use them.
