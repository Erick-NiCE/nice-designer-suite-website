# Side Panel

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-side-panel-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-side-panel-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Side Panel. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `open` | `boolean` | false |
| `mode` | `'push'` | 'push' |
| `edge` | `'left' \| 'right'` | 'right' |
| `panelId` | `string` | '' |
| `persistent` | `boolean` | false |
| `ariaRole` | `string` | 'complementary' |
| `title` | `string \| TemplateRef<unknown>` | '' |
| `size` | `string` | '25rem' |
| `width` | `string` | '' |
| `resizable` | `boolean` | true |
| `minWidth` | `string` | '25rem' |
| `maxWidth` | `string` | '45rem' |
| `destroyOnClose` | `boolean` | false |
| `stickyToViewport` | `boolean` | false |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `openChange` | `EventEmitter<boolean>` | Emits when open state changes. Enables [(open)] two-way binding. |
| `opened` | `EventEmitter<void>` | Fires after slide-in transition completes. |
| `closed` | `EventEmitter<void>` | Fires after slide-out transition completes. |
| `widthChange` | `EventEmitter<string>` | Fires after drag-resize ends with the new width as a rem string (e.g. '32rem'). |

