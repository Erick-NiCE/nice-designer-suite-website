# Tabs

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-tabs, sol-tab` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-tabs-api--docs&globals=theme:lyra |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-tabs-api--docs&globals=theme:lyra |

These docs are on the internal SOL/Lyra Storybook (VPN), opened in the Lyra theme. If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Tabs. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `selectedIndex` | `number \| undefined` | The index of the active tab. |
| `size` | `default \| small` | Size of the tabs. |
| `alignment` | `left \| fit-width` | Alignment of the tabs. left aligns tabs to the left, fit-width makes tabs fit full width. |
| `ariaLabel` | `string` | Aria label for the tab group. |
| `ariaLabelledby` | `string` | Id of the element that labels the tab group. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `selectedTabChange` | `EventEmitter` | Event emitted when the tab selection has changed. |

## Angular reference stories

- [Tab With Error](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-tabs-examples--tab-with-error&globals=theme:lyra)
- [Icon Only](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-tabs-examples--icon-only&globals=theme:lyra)
- [Default Icon Text](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-tabs-examples--default-icon-text&globals=theme:lyra)
- [Small Icon Text](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-tabs-examples--small-icon-text&globals=theme:lyra)

