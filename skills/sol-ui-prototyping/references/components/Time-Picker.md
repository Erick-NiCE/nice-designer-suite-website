# Time Picker

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-time-picker` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-time-picker-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-time-picker-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | The id attribute set on the root .sol-time-picker element. When omitted, no id attribute is rendered. |
| `name` | `string` | The name attribute passed to the inner SOLTextInput element. |
| `format` | `string` | The format string used when displaying the selected time in the list. Supports the same format tokens as Angular DatePipe (e.g. h, hh, mm, a).Examples:'h:mm a' (default)'hh:mm:ss a''HH:mm:ss'and others |
| `steps` | `number` | The minute interval between time options. Clamped to 1–60. Default is 15. |
| `minTime` | `Date` | The lower bound (inclusive) of the generated time options. Default is today at 00:00:00.000. |
| `maxTime` | `Date` | The upper bound (exclusive) of the generated time options. Default is today at 23:59:00.000. |
| `disabled` | `boolean` | Whether the time picker is disabled. Default is false. |
| `disableTextInput` | `boolean` | When true (and not disabled), the text input is readonly; the user can still open the overlay and select a time from the list. Default is false. |
| `alwaysOpen` | `boolean` | When true, renders the inline time list instead of an overlay. The clock icon is hidden and toggling is disabled. Default is false. |
| `placeholder` | `string` | Text to appear inside the input box when there is no value. Default is ''. |
| `allowAnyValidTime` | `boolean` | When true, the user may type any parseable time within [minTime, maxTime], not only the generated step options. Default is false. |
| `value` | `Date \| undefined` | Controlled value. When provided, the component is controlled and this value is the source of truth for the displayed time string. Pass undefined to clear. |
| `defaultValue` | `Date \| undefined` | Uncontrolled initial value. Seeds internal state only; ignored when value is provided (controlled mode). |
| `className` | `string` | Extra CSS class applied to the root .sol-time-picker element. |
| `style` | `string \| CSSProperties` | Inline style applied to the root .sol-time-picker element. Accepts a CSS string (Angular parity) or a React CSSProperties object. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onActiveIndexChanged` | `(index: number) => void` | Fires with the index of the currently active/focused option during keyboard navigation. Used internally to update aria-activedescendant on the combobox input. |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | The id attribute to be set for the root sol-time-picker element |
| `name` | `string` | The name attribute to be set on the input element inside the sol-time-picker |
| `format` | `string` | The format to use when displaying the selected time in the list. This format uses the Angular DatePipe formats (link).Examples:'h:mm a' (default)'hh:mm:ss a''HH:mm:ss'and others |
| `steps` | `number` | sets the time interval between the options |
| `minTime` | `Date` | sets the minimum time of the time picker |
| `maxTime` | `Date` | sets the maximum time of the time picker |
| `disabled` | `boolean` | sets whether the time picker is disabled or enabled |
| `disableTextInput` | `boolean` | sets whether the time picker input is readonly or not. But able to toggle the overlay and select time |
| `alwaysOpen` | `boolean` | sets whether the time picker is alwaysOpen or not. |
| `placeholder` | `string` | Text to appear inside the input box when there is no value. By default, there is no placeholder. |
| `allowAnyValidTime` | `boolean` | Allow user to enter any valid time to the input. |
| `required` | `boolean` | Whether the time picker is required. Default is false. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `activeIndexChanged` | `number` | Emits the index of the currently active/focused option during keyboard navigation. Used internally to update aria-activedescendant on the combobox input. |

## Migration notes (Angular)

- Migrating to V16: aria-label renamed to ariaLabel (camelCase binding required)

Old names in these notes are **removed**. Never use them.
