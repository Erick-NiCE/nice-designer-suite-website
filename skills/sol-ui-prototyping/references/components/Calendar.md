# Calendar

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-calendar` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-calendar-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-calendar-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Calendar. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `type` | `'single-selection' \| 'multi-single-selection' \| 'week-selection' \| 'multi-week-selection' \| 'range-selection'` | Determines the selection mode of the calendar:single-selection: Select a single datemulti-single-selection: Select multiple individual datesweek-selection: Select an entire weekmulti-week-selection: Select multiple weeksrange-selection: Select a date range (start and end)Default is 'single-selection' |
| `daysDisabled` | `number[]` | Array of day numbers to disable (0 = Sunday, 1 = Monday, ..., 6 = Saturday). Disabled days cannot be selected.Default is [] (no days disabled) |
| `startingDay` | `number` | Determines the starting day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday). Only applicable for week-selection and multi-week-selection types.Default is 0 (Sunday) |
| `min` | `Date \| null` | The minimum selectable date. Dates before this date will be disabled.Default is null (no minimum) |
| `max` | `Date \| null` | The maximum selectable date. Dates after this date will be disabled.Default is null (no maximum) |
| `specialDates` | `SpecialDates[]` | Array of special dates to highlight with visual indicators. Each object has:date: Date (required) - The date to mark as specialstatus: 'partial' \| 'full' (required) - The type of event indicator to displayDefault is [] (no special dates) |
| `displayWeeks` | `boolean` | Whether to display week numbers in the calendar.Default is false |
| `ngModel` | `Date \| Date[] \| DateRange \| DateRange[]` | The selected value(s), type depends on the selection mode:single-selection: Datemulti-single-selection: Date[]week-selection: DateRangemulti-week-selection: DateRange[]range-selection: DateRange |
| `ariaDescribedby` | `string \| null` | Sets aria-describedby attribute on the calendar. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `dateSelected` | `Date \| Date[] \| DateRange \| DateRange[]` | Event emitted when a date selection changes. The emitted value type matches the selection mode. |

