# Date Range Picker

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-date-range-picker` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-date-range-picker-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-date-range-picker-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | The id attribute to be set for the root element |
| `placeholderStartDate` | `string` | Text to appear inside the input box when there is no value. By default, the placeholder is 'Start Date'. |
| `placeholderEndDate` | `string` | Text to appear inside the input box when there is no value. By default, the placeholder is 'End Date'. |
| `dateFormat` | `string` | The format to use when displaying the dates in the input boxes. This format uses the same tokens as Angular DatePipe formats.Notes:To activate the time picker, this format must include the following characters: h:mm.(If you want the user to select only a date, not a time, make sure dateFormat does not contain that sequence of characters.) |
| `displayleftPanel` | `boolean` | Determines whether or not to display the left panel with preset range options.Note: If the time picker is activated by the dateFormat, the left panel will not appear. |
| `minDate` | `Date` | sets the minimum date range of the date picker |
| `maxDate` | `Date` | sets the maximum date of the date picker |
| `daysDisabled` | `Array of Integers` | Days of the week to be disabled (Sunday = 0) |
| `specialDates` | `Array of Objects` | Indicator dots can be added below certain days. Each object in the array can have the following properties: date: Date (required) status: 'partial' \| 'full' |
| `disabled` | `boolean` | sets whether the date picker is disabled or enabled |
| `readonly` | `boolean` | sets whether the date picker is readonly or not |
| `allowTextInput` | `boolean` | Default: trueDetermines whether or not users are allowed to manually type text in the Start Date and End Date text inputs |
| `allowAnyValidTime` | `boolean` | Allow user to enter any valid time to the input. |
| `startDOW` | `number` | Determines the starting day of the week. Default is 0, which signifies Sunday |
| `type` | `string` | Determines if users select specific ranges (default) or weeks. Values:'range-selection' (default)'week-selection' |
| `prevNextButtons` | `boolean` | Determines whether to show/hide the previous and next buttons of the date picker |
| `arrowPosition` | `'right' (default), 'left'` | Determines where the previous and next buttons appear |
| `value` | `DateRangeValue \| undefined` | Controlled value. When provided, the component is controlled and this value is the source of truth. Pass undefined to clear. |
| `defaultValue` | `DateRangeValue \| undefined` | Uncontrolled initial value. Seeds internal state only; ignored when value is provided (controlled mode). |
| `onChange` | `(value: DateRangeValue \| undefined) => void` | Fires on every committed value mutation: text-input blur commit, calendar date selection, time selection, preset selection, prev/next range navigation, and clear. |
| `dateRangePresetConfigurations` | `(DateRangePresetConfig \| string)[]` | It accepts array of objects or predefined strings used to configure date range presets. For more details, click here |
| `timeFormat` | `string` | (time picker only)The time format to use when displaying times inside the time picker dropdown list. |
| `required` | `boolean` | Whether the date range picker is required. Default: false. |
| `steps` | `number` | Time step interval in minutes. Default: 15. |
| `className` | `string` | Extra CSS class applied to the root element. |
| `style` | `string \| CSSProperties` | Inline style applied to the root element. Accepts a CSS string (Angular parity) or a React CSSProperties object. |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID attribute for the component. If not provided, a unique ID is automatically generated with the format 'sol-date-range-picker-{uid}'. |
| `placeholderStartDate` | `string` | Text to appear inside the input box when there is no value. By default, the placeholder is 'Start Date'. |
| `placeholderEndDate` | `string` | Text to appear inside the input box when there is no value. By default, the placeholder is 'End Date'. |
| `dateFormat` | `string` | The format to use when displaying the dates in the input boxes. This format uses the Angular DatePipe formats (link).Notes:To activate the time picker, this format must include the following characters: h:mm.(If you want the user to select only a date, not a time, make sure dateFormat does not contain that sequence of characters.) |
| `displayleftPanel` | `boolean` | Determines whether or not to display the left panel with preset range options.Note: If the time picker is activated by the dateFormat, the left panel will not appear. |
| `minDate` | `Date` | sets the minimum date range of the date picker |
| `maxDate` | `Date` | sets the maximum date of the date picker |
| `daysDisabled` | `Array of Integers` | Days of the week to be disabled (Sunday = 0) |
| `specialDates` | `Array of Objects` | Indicator dots can be added below certain days. Each object in the array can have the following properties: date: Date (required) status: 'partial' \| 'full' |
| `disabled` | `boolean` | sets whether the date picker is disabled or enabled |
| `readonly` | `boolean` | sets whether the date picker is readonly or not |
| `allowTextInput` | `boolean` | Default: trueDetermines whether or not users are allowed to manually type text in the Start Date and End Date text inputs |
| `allowAnyValidTime` | `boolean` | Allow user to enter any valid time to the input. |
| `startDOW` | `number` | Determines the starting day of the week. Default is 0, which signifies Sunday |
| `type` | `string` | Determines if users select specific ranges (default) or weeks. Values:'range-selection' (default)'week-selection' |
| `prevNextButtons` | `boolean` | Determines whether to show/hide the previous and next buttons of the date picker |
| `arrowPosition` | `'right' (default), 'left'` | Determines where the previous and next buttons appear |
| `ngModel` | `DateRange` | The input model value. It a DateRange object from Angular Material. It has two properties:start: Dateend: Date |
| `dateRangePresetConfigurations` | `(DateRangePresetConfig \| string)[]` | It accepts array of objects or predefined strings used to configure date range presets. For more details, click here |
| `timeFormat` | `string` | (time picker only)The time format to use when displaying times inside the time picker dropdown list. This format uses the Angular DatePipe formats (link). |
| `required` | `boolean` | Whether the date range picker is required. Default: false. |
| `steps` | `number` | Time step interval in minutes. Default: 15. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `ngModelChange` | `DateRange` | Emitted when the selected date range changes. The emitted value is a DateRange object with start and end properties, each being a Date object.Example: { start: Date, end: Date } |

## Migration notes (Angular)

- Migrating to V16: There are breaking changes in the Date Range Picker component for this version:; The specialDates input property has changed from using a color property ('blue', 'yellow', 'pink', 'green', 'orange') to using a status property ('partial', 'full'). If you are using the specialDates feature, you will need to update your configuration to use the new status property.; The Page Object property calenderIcon has been corrected to calendarIcon for consistency with naming conventions.

Old names in these notes are **removed**. Never use them.
