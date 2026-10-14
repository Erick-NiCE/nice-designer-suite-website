# Date Picker

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-date-picker` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-date-picker-api--docs&globals=theme:lyra |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-date-picker-api--docs&globals=theme:lyra |

These docs are on the internal SOL/Lyra Storybook (VPN), opened in the Lyra theme. If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | The id attribute to be set for the root element |
| `placeholder` | `string` | Text to appear inside the input box when there is no value. By default, there is no placeholder. |
| `dateFormat` | `string` | The format to use when displaying the selected date in the input box. This format uses the same tokens as Angular DatePipe formats.Notes:To activate the time picker, this format must include the following characters: h:mm.(If you want the user to select only a date, not a time, make sure dateFormat does not contain that sequence of characters.) |
| `timeFormat` | `string` | (time picker only)The time format to use when displaying times inside the time picker dropdown list. |
| `steps` | `number` | (time picker only)sets the time interval between the options (default 15) |
| `displayFooter` | `boolean` | Determines whether or not to display the footer. Default true. |
| `minDate` | `Date` | sets the minimum date range of the date picker |
| `maxDate` | `Date` | sets the maximum date of the date picker |
| `specialDates` | `Array of Objects` | Status indicators can be added below certain days. Each object in the array can have the following properties: date: Date (required) status: 'full' (default) \| 'partial' |
| `startDOW` | `number` | Determines the starting day of the week. Default is 0, which signifies Sunday |
| `allowAnyValidTime` | `boolean` | Allow user to enter any valid time to the input. |
| `daysDisabled` | `Array of Integers` | Days of the week to be disabled (Sunday = 0) |
| `prevNextButtons` | `boolean` | Determines whether to show/hide the previous and next buttons of the date picker |
| `arrowPosition` | `'right' (default), 'left'` | Determines where the previous and next buttons appear |
| `disabled` | `boolean` | sets whether the date picker is disabled or enabled |
| `readonly` | `boolean` | sets whether the date picker is readonly or not |
| `allowTextInput` | `boolean` | Default: trueDetermines whether or not users are allowed to manually type text in the Date text input |
| `value` | `Date \| undefined` | Controlled value. When provided, the component is controlled and this value is the source of truth. Pass undefined to clear. |
| `defaultValue` | `Date \| undefined` | Uncontrolled initial value. Seeds internal state only; ignored when value is provided (controlled mode). |
| `onChange` | `(value: Date \| undefined) => void` | Fires on every committed value mutation: text-input blur commit, calendar date selection, time selection, and prev/next day navigation. |
| `required` | `boolean` | Indicates if the datepicker is required. |
| `ariaLabel` | `string` | The aria-label text for the date picker input element. |
| `ariaLabelledby` | `string \| null` | The aria-labelledby text for the date picker input element. Default is null. |
| `className` | `string` | Extra CSS class applied to the root element. |
| `style` | `string \| CSSProperties` | Inline style applied to the root element. Accepts a CSS string (Angular parity) or a React CSSProperties object. |

## React reference stories

Copy open/close/select behavior from these, not from what seems reasonable.

- [Basic Date Picker](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-date-picker-examples--basic-date-picker&globals=theme:lyra)
- [Date Picker With Time](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-date-picker-examples--date-picker-with-time&globals=theme:lyra)
- [Date Picker With Constraints](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-date-picker-examples--date-picker-with-constraints&globals=theme:lyra)
- [Date Picker With States](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-date-picker-examples--date-picker-with-states&globals=theme:lyra)

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | The id attribute to be set for root sol-date-picker element |
| `placeholder` | `string` | Text to appear inside the input box when there is no value. By default, there is no placeholder. |
| `dateFormat` | `string` | The format to use when displaying the selected date in the input box. This format uses the Angular DatePipe formats (link).Notes:To activate the time picker, this format must include the following characters: h:mm.(If you want the user to select only a date, not a time, make sure dateFormat does not contain that sequence of characters.) |
| `timeFormat` | `string` | (time picker only)The time format to use when displaying times inside the time picker dropdown list. This format uses the Angular DatePipe formats (link). |
| `steps` | `number` | (time picker only)sets the time interval between the options (default 15) |
| `displayFooter` | `boolean` | Determines whether or not to display the footer containing the Today button. Pressing Today selects today's date, updates the bound model, and closes the overlay. The button is disabled when today falls outside minDate/maxDate or on a day of the week listed in daysDisabled. |
| `minDate` | `Date` | sets the minimum date range of the date picker |
| `maxDate` | `Date` | sets the maximum date of the date picker |
| `specialDates` | `Array of Objects` | Status indicators can be added below certain days. Each object in the array can have the following properties: date: Date (required) status: 'full' (default) \| 'partial' |
| `startDOW` | `number` | Determines the starting day of the week. Default is 0, which signifies Sunday |
| `allowAnyValidTime` | `boolean` | Allow user to enter any valid time to the input. |
| `daysDisabled` | `Array of Integers` | Days of the week to be disabled (Sunday = 0) |
| `prevNextButtons` | `boolean` | Determines whether to show/hide the previous and next buttons of the date picker |
| `arrowPosition` | `'right' (default), 'left'` | Determines where the previous and next buttons appear |
| `disabled` | `boolean` | sets whether the date picker is disabled or enabled |
| `readonly` | `boolean` | sets whether the date picker is readonly or not |
| `allowTextInput` | `boolean` | Default: trueDetermines whether or not users are allowed to manually type text in the Date text input |
| `ngModel` | `Date` | The input model value |
| `required` | `boolean` | Indicates if the datepicker is required. |
| `ariaLabel` | `string` | The aria-label text for the date picker input element. |
| `ariaLabelledby` | `string \| null` | The aria-labelledby text for the date picker input element. Default is null. |

## Angular outputs

_None documented._

## Angular reference stories

- [Basic Date Picker](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-date-picker-examples--basic-date-picker&globals=theme:lyra)
- [Date Picker With Time](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-date-picker-examples--date-picker-with-time&globals=theme:lyra)
- [Date Picker With Constraints](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-date-picker-examples--date-picker-with-constraints&globals=theme:lyra)
- [Date Picker With States](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-date-picker-examples--date-picker-with-states&globals=theme:lyra)

## Migration notes (Angular)

- Migrating to V9: There are a number of breaking changes in the SOL Date Picker from version 8 to 9.; Component selector changed: sol-datepicker ➜ sol-date-picker; Import location changed: @niceltd/sol-angular/datepicker ➜ @niceltd/sol-angular/date-picker; Module class name changed: DatepickerModule ➜ DatePickerModule; Component class name changed: DatepickerComponent ➜ DatePickerComponent; For the specialDates input, the values for the color property have changed to 'blue' (default), 'yellow', 'pink', 'green', and 'orange'; Changes to input names: showActionArrows ➜ prevNextButtons min ➜ minDate max ➜ maxDate readOnly ➜ readonly startingDay ➜ startDOW format ➜ dateFormat; showActionArrows ➜ prevNextButtons; min ➜ minDate; max ➜ maxDate; readOnly ➜ readonly; startingDay ➜ startDOW; format ➜ dateFormat; The noLabel input has been removed. To hide the label, simply leave the new label input as an empty string.; There is no longer a default label Enter Date above the component. To include a label, use the new label input.; The component now takes up 100% the width of its container. To limit its width, you should adjust the width of that container.
- Migrating to V14: There are a number of breaking changes in the SOL Date Picker from version 13 to 14.; Changes to input name: errorMessageText ➜ errorMessage; errorMessageText ➜ errorMessage; By default, there is now space below this component reserved for the error message, even at times when the error message is not present. You may need to modify your configuration to account for this space.; The error message text no longer has a leading and a trailing space. You may need to update your tests. .toHaveText(' This field is required ') ➜ .toHaveText('This field is required'); .toHaveText(' This field is required ') ➜ .toHaveText('This field is required')
- Migrating to V16: Added ariaLabel and ariaLabelledby inputs for accessibility support.

Old names in these notes are **removed**. Never use them.
