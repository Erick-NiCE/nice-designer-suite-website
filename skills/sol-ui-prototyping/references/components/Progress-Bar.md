# Progress Bar

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-progress-bar` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-progress-bar-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-progress-bar-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `progress` | `number` | The current progress value. Accepts values between 0 and 100. Values greater than 100 will be capped at 100. Default is 0. |
| `ariaLabel` | `string` | Optional. Accessibility label for screen readers. Provides context about what the progress bar represents. |
| `ariaHidden` | `boolean` | Optional. When set to true, hides the progress bar from screen readers. Default is false. |
| `className` | `string` | Additional CSS classes to apply to the progress bar root. |
| `style` | `React.CSSProperties` | Inline styles to apply to the progress bar root. |

## React reference stories

Copy open/close/select behavior from these, not from what seems reasonable.

- [Progress Bar Determinate](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-progress-bar-examples--progress-bar-determinate)
- [Multiple Progress Bar Determinate](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-progress-bar-examples--multiple-progress-bar-determinate)

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `progress` | `number` | The current progress value. Accepts values between 0 and 100. Values greater than 100 will be capped at 100. Default is 0. |
| `ariaLabel` | `string` | Optional. Accessibility label for screen readers. Provides context about what the progress bar represents. |
| `ariaHidden` | `boolean` | Optional. When set to true, hides the progress bar from screen readers. Default is false. |

## Angular outputs

_None documented._

## Angular reference stories

- [Progress Bar Determinate](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-progress-bar-examples--progress-bar-determinate)
- [Multiple Progress Bar Determinate](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-progress-bar-examples--multiple-progress-bar-determinate)

