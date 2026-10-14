# Spinner

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-spinner` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-spinner-api--docs&globals=theme:lyra |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-spinner-api--docs&globals=theme:lyra |

These docs are on the internal SOL/Lyra Storybook (VPN), opened in the Lyra theme. If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Spinner. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | Specifies the ID for the spinner component. |
| `showSpinner` | `boolean` | Determines whether the spinner is displayed. true shows the spinner, while false hides it. Default value is false. |
| `variant` | `'bar' \| 'circle'` | Determines the type of spinner to display. Options are 'bar' or 'circle'. Default value is 'bar' |
| `dark` | `boolean` | Determines whether the spinner is for dark backgrounds. true for dark backgrounds, false for light backgrounds. Default value is false. |
| `ariaLabel` | `string` | Sets aria-label on the spinner element. |

## Angular outputs

_None documented._

## Angular reference stories

- [Multiple Spinner](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-spinner-examples--multiple-spinner&globals=theme:lyra)
- [Spinner Bar](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-spinner-examples--spinner-bar&globals=theme:lyra)
- [Spinner Circle](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-spinner-examples--spinner-circle&globals=theme:lyra)

