# Checkbox

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-checkbox` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-checkbox-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-checkbox-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Checkbox. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `checkboxId` | `string` | The id attribute to be set for root sol-checkbox element |
| `disabled` | `boolean` | Disable sol-checkbox element |
| `readonly` | `boolean` | Make sol-checkbox element read only |
| `name` | `string` | The name attribute to be set for root sol-checkbox element |
| `required` | `boolean` | Indicates if the sol-checkbox element |
| `value` | `string` | Value for the sol-checkbox element |
| `ariaLabel` | `string` | The aria-label attribute to be set for root sol-checkbox element |
| `ariaLabelledby` | `string \| null` | The aria-labelledby attribute to be set for root sol-checkbox element |
| `ariaDescribedby` | `string \| null` | The aria-describedby attribute to be set for root sol-checkbox element |
| `tabindex` | `number` | The tabindex attribute to be set for root sol-checkbox element |
| `indeterminate` | `boolean` | Sets the checkbox to an indeterminate (partially selected) state, visually represented by a dash. This state overrides the visual checked/unchecked appearance without modifying the underlying checked value. |
| `checked` | `boolean` | Sets checked state to sol-checkbox. |
| `customTemplate` | `TemplateRef` | Custom template for checkbox content. |
| `errorState` | `boolean` | Whether the checkbox is in an error state. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `clicked` | `EventEmitter` | Emits an event when checkbox is clicked. |
| `checkedChange` | `EventEmitter` | Emits an event when the value of the checkbox changes. |
| `indeterminateChange` | `EventEmitter` | Emits event notifying other classes when a change in state occurs specifically on an indeterminate checkbox. |
| `blur` | `EventEmitter` | Emits an event when checkbox is blured. |
| `focus` | `EventEmitter` | Emits an event when checkbox is focused. |

## Migration notes (Angular)

- Migrating to V16: SOL Checkbox has the following breaking changes from SOL 14 to SOL 16:; readOnly has been renamed to readonly

Old names in these notes are **removed**. Never use them.
