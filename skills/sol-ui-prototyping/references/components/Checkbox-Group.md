# Checkbox Group

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-checkbox-group` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-checkbox-group-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-checkbox-group-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | The name attribute to be set for the checkbox group |
| `disabled` | `boolean` | Disable all checkboxes in the group |
| `required` | `boolean` | Mark the checkbox group as required |
| `readonly` | `boolean` | Make all checkboxes in the group readonly (non-interactive) |
| `value` | `string[]` | Array of selected values from the checkbox group |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onClicked` | `(value: string[]) => void` | Fires with an array of selected values whenever a checkbox in the group changes state |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | The name attribute to be set for the checkbox group |
| `disabled` | `boolean` | Disable all checkboxes in the group |
| `required` | `boolean` | Mark the checkbox group as required |
| `readonly` | `boolean` | Make all checkboxes in the group readonly (non-interactive) |
| `value` | `string[]` | Array of selected values from the checkbox group |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `clicked` | `EventEmitter<string[]>` | Emits an array of selected values whenever a checkbox in the group changes state |

