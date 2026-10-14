# Menu

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-menu, sol-menu-item` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-menu-api--docs&globals=theme:lyra |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-menu-api--docs&globals=theme:lyra |

These docs are on the internal SOL/Lyra Storybook (VPN), opened in the Lyra theme. If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Menu. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `menuItems` | `MenuItem[]` | Yes |
| `menuClass` | `string` | No |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `tabKeyPressed` | `EventEmitter<void>` | Emits when the Tab key is pressed within the menu. |

## Angular reference stories

- [Multiple Level Menu](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-menu-examples--multiple-level-menu&globals=theme:lyra)
- [Single Level Menu](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-menu-examples--single-level-menu&globals=theme:lyra)

