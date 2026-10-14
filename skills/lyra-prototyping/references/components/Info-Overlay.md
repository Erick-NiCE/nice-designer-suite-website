# Info Overlay

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-info-overlay` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-info-overlay-api--docs&globals=theme:lyra |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-info-overlay-api--docs&globals=theme:lyra |

These docs are on the internal SOL/Lyra Storybook (VPN), opened in the Lyra theme. If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

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

## Angular reference stories

- [Self Config](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-info-overlay-examples--self-config&globals=theme:lyra)
- [Sol Icon Config](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-info-overlay-examples--sol-icon-config&globals=theme:lyra)
- [Cannot Load](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-info-overlay-examples--cannot-load&globals=theme:lyra)
- [No Result](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-info-overlay-examples--no-result&globals=theme:lyra)
- [No Created](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-info-overlay-examples--no-created&globals=theme:lyra)
- [No Permission](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-info-overlay-examples--no-permission&globals=theme:lyra)
- [Loading Items](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-info-overlay-examples--loading-items&globals=theme:lyra)

