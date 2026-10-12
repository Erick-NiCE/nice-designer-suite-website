# Range Slider

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-range-slider` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-range-slider-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-range-slider-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Range Slider. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `max` | `number` | Max value in the range slider |
| `min` | `number` | Min value in the range slider |
| `step` | `number` | Step value for every move in the range slider |
| `startPoints` | `Array<any>` | StartPoints for every drag and drop in the range slider |
| `range` | `Range` | The Range to be passed to the slider. |
| `pips` | `PositionsPips \| ValuesPips \| CountPips \| StepsPips \| RangePips` | Pips feature allows generation of points along the slider. |
| `enableTooltip` | `boolean` | Enable or disable tooltip. |
| `enableTooltipOnDrag` | `boolean` | Enable or disable tooltip on drag. |
| `mode` | `string` | Slider mode - get mode (count/steps/range) for slider. |
| `density` | `number` | Density for markers in between pips. |
| `markerValues` | `number` | Number of marker values to be displayed. |
| `stepped` | `boolean` | Whether slider should be stepped or not. |
| `behaviour` | `string` | Behaviour of slider. |
| `markerSuffix` | `string` | Suffix provided for marker labels. |
| `markerLabelFormatter` | `any` | Logic for marker label formatting. |
| `tooltipFormatter` | `any` | Logic for tooltip formatting. |
| `connect` | `'lower' \| 'upper' \| boolean \| boolean[]` | Number of pips and their connectivity. |
| `colorClasses` | `string[]` | Supports all SOL slider color classes (accessible: c-nl1, c-nl2, c-nl3, c-nl4, c-neutral, c-pl4, c-pl3, c-pl2, c-pl1; standard: c-1-darkRed, c-2-mediumRed, c-3-lightRed, c-4-white, c-5-lightGreen, c-6-mediumGreen, c-7-darkGreen, c-8-thinDarkGreen, c-9-yellow, c-10-blue, c-11-grey, c-blue, c-grey) plus any custom class. Segments can also apply thickness classes from big to small (seg-0, seg-1, seg-2, seg-3, seg-4) combined with the color class, e.g., 'c-nl1 seg-0'. |
| `highlightPosition` | `number \| null` | Position for highlighting a position on slider. |
| `highlightedMarkerTitle` | `string` | Title for highlighted position on slider. |
| `disabled` | `boolean` | Disable or enable pivots. |
| `enableArrow` | `boolean` | Enable the arrows. |
| `enableRoundButton` | `boolean` | Enable or disable round touch button. |
| `allowOverlap` | `boolean` | Allow handles to overlap (min and max can be equal). When false, maintains minimum margin of step value between handles. When true, allows handles to overlap completely. Defaults to false to maintain backward compatibility. |
| `handleAttributes` | `Array of { key: value }` | Allows you to add custom attributes to the slider's handles |
| `id` | `string` | Optional custom ID for the slider element. If not provided, a unique ID is auto-generated. Used for label association when providing a label input. |
| `ariaLabel` | `string` | Accessible name for the slider region (e.g., "Price Range Slider"). Provides an accessible label for screen readers. When provided, enables role="region" on the slider wrapper for enhanced accessibility. |
| `ariaLabelledby` | `string` | ID of element that labels the slider. Use when the slider has a visible label element in the DOM. When provided, enables role="region" on the slider wrapper. |
| `ariaDescribedby` | `string` | ID of element that describes the slider. Use to link to help text or additional instructions for the slider. |
| `isTimeBasedSlider` | `boolean` | When true, enhances accessibility for time-based sliders by expanding abbreviated time units (h/m/s) to full descriptive words in aria-valuetext (e.g., "2h 30m" becomes "2 hours 30 minutes"). Automatically enabled when tooltipFormatter is provided. Use for sliders that display time durations. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `endEvent` | `EventEmitter` | Event handler for change in value on slider end. |
| `changeEvent` | `EventEmitter` | Event handler for change in value. |

## Migration notes (Angular)

- Migrating to V17: Input rename: ariaLabelledBy → ariaLabelledby (lowercase 'b' for consistency with other SOL components); Input rename: ariaDescribedBy → ariaDescribedby (lowercase 'b' for consistency with other SOL components)

Old names in these notes are **removed**. Never use them.
