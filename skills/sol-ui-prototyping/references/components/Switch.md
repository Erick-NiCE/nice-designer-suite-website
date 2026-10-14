# Switch

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-switch` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-switch-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-switch-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Switch. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `toggleId` | `string` | The id attribute to be set for <mat-switch> element in <sol-switch> element. <button> element inside Switch will have id as toggleId-button. |
| `disabled` | `boolean` | Disable sol-switch element. |
| `readonly` | `boolean` | Makes the sol-switch element readonly (non-interactive). |
| `name` | `string` | The name attribute to be set for button element in sol-switch. |
| `required` | `boolean` | Indicates if the sol-switch element is required. |
| `checked` | `boolean` | Checked state for the sol-switch element. It can be true or false. |
| `symbol` | `boolean` | Indicates whether symbol to be present on sol-switch element. It can be true or false. |
| `size` | `'small' \| 'large'` | Used to select the size of Switch. |
| `ariaLabel` | `string` | The aria-label attribute to be set for sol-switch element. |
| `ariaLabelledby` | `string` | The aria-labelledby attribute to be set for sol-switch element. |
| `ariaDescribedby` | `string` | The aria-describedby attribute to be set for sol-switch element. |
| `title` | `string` | Title text for the switch component. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `checkedChange` | `EventEmitter` | Emits an event when Switch is changed using click. |

## Angular reference stories

- [Switch](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-switch-examples--switch-toggle)
- [All States](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-switch-examples--all-states)
- [Ng Model](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-switch-examples--ng-model)
- [Template Form](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-switch-examples--template-form)
- [Reactive Form](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-switch-examples--reactive-form)
- [Required With Error](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-switch-examples--required-with-error)

## Migration notes (Angular)

- Migrating to V14: There are a some breaking changes in the SOL Switch from version 13 to 14.; Changes to input names: label ➜ title; label ➜ title
- Migrating to V16: There are breaking changes in the SOL Switch from version 15 to 16.; labelPosition input has been removed - labels are now always positioned to the right of the switch toggle; The label will now come only from the label input and no longer from ng-content.; Added readonly input - makes the switch non-interactive while still displaying its state

Old names in these notes are **removed**. Never use them.
