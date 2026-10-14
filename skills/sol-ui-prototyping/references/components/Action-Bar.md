# Action Bar

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-action-bar` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-action-bar-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-action-bar-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Action Bar. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `showActionBar` | `boolean` | Whether the action bar is visible. Default is false. |
| `actionBarTextContent` | `string` | The main text content displayed in the action bar. |
| `buttonIcon` | `string` | The icon name for the action button. |
| `buttonText` | `string` | The text displayed on the action button. |
| `styleData` | `string` | Custom CSS style string for the button icon. |
| `iconPath` | `string` | Path to the SVG sprite file. Default is './assets/application-icons.svg'. |
| `ariaLabel` | `string` | Accessibility label for the action bar region. Default is 'Action bar'. |
| `liveMessage` | `boolean` | When true, the message content is announced by screen readers using aria-live="polite". Default is false. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `buttonClicked` | `EventEmitter<void>` | Emits when the action bar button is clicked. |

## Angular reference stories

- [Action Bar](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-action-bar-examples--action-bar)

