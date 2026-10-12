# Toastr Notification

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-toastr` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-toastr-notification-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-toastr-notification-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Toastr Notification. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `toastClass` | `string` | CSS class for the toast element |
| `positionClass` | `string` | Position of the toast on the screen. Default is 'toast-bottom-right' |
| `timeOut` | `number` | Time in milliseconds before the toast disappears. Default is 3000ms |
| `extendedTimeOut` | `number` | Time in milliseconds before the toast disappears after a user hovers over it. Default is 1000ms |
| `closeButton` | `boolean` | Whether to show a close button on the toast. Default is true |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `onShown` | `Observable<void>` | Emits when the toast is shown |
| `onHidden` | `Observable<void>` | Emits when the toast is hidden |

## Migration notes (Angular)

- Migrating to V11: Changes to input names: SolToastrService ➜ ToastrManager customToastrConfig ➜ options; SolToastrService ➜ ToastrManager; customToastrConfig ➜ options

Old names in these notes are **removed**. Never use them.
