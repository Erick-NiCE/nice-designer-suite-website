# Numeric Selector

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-numeric-selector` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-numeric-selector-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-numeric-selector-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Numeric Selector. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique ID for the numeric selector. |
| `value` | `number` | The value of the numeric selector. |
| `step` | `number` | The numeric amount that a single button click will increase or decrease the value selected. |
| `name` | `string` | Name attribute for the button. |
| `required` | `boolean` | Defines whether a user is required to select a value |
| `disabled` | `boolean` | Disables the button if set to true. |
| `readonly` | `boolean` | Sets the button to readonly state when set to true. |
| `min` | `number` | Sets the minimum value that can be selected |
| `max` | `number` | Sets the maximum value that can be selected |
| `placeholder` | `string` | Text that appears inside the input box when it is empty. By default, there is no placeholder. |
| `allowDecimal` | `boolean` | Allows decimal values in the input. Defaults to false. |
| `ariaLabel` | `string` | Accessible name applied as aria-label on the input. Use only when no visible label is provided. When label is set, this value is ignored to prevent conflicting accessible names. |

## Angular outputs

_None documented._

## Angular reference stories

- [Default With Label And Info Text](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-numeric-selector-examples--default-with-label-and-info-text)
- [All Other Modes](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-numeric-selector-examples--all-other-modes)
- [Ng Model](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-numeric-selector-examples--ng-model)
- [Reactive Form](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-numeric-selector-examples--reactive-form)

## Migration notes (Angular)

- Migrating to V16: There are some breaking changes in the SOL Numeric Selector from version 15 to 16.; Changes to input names: errorMessageText ➜ errorMessage; errorMessageText ➜ errorMessage; The buttonType input has been removed. Only arrow buttons are now supported. Remove: buttonType: 'math' or buttonType: 'arrow'; Remove: buttonType: 'math' or buttonType: 'arrow'

Old names in these notes are **removed**. Never use them.
