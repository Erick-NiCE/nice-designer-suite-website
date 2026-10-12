# Info Overlay

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-info-overlay` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-info-overlay-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-info-overlay-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Info Overlay. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `iconConfiguration` | `IconConfiguration \| undefined` | Custom icon configuration object containing an optional message, icon, iconPath, and iconStyles. |
| `iconType` | `IconType \| undefined` | Predefined icon type that determines the displayed icon and message. Options: 'cannot_display', 'no_permission', 'no_result', 'no_created', 'loading_items'. |
| `autoResize` | `IconStates` | Controls the sizing behavior of the overlay. When set to 'default', the component auto-resizes based on its parent container dimensions. Can also be set to 'large' or 'medium' to force a specific size. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `This component does not emit any outputs.` | `` |  |

