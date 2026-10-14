# Modal

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-modal` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-modal-api--docs&globals=theme:lyra |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-modal-api--docs&globals=theme:lyra |

These docs are on the internal SOL/Lyra Storybook (VPN), opened in the Lyra theme. If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `type` | `string` | Type of modal whether info, error, warning or standard modal |
| `title` | `string` | Title text of the sol-modal element |
| `criticalButtonLabel` | `string` | Determines the label of the critical button |
| `secondaryButtonLabel` | `string` | Determines the label of the secondary button |
| `primaryButtonLabel` | `string` | Determines the label of the primary button |
| `message` | `string` | The message content to display in the modal body |
| `allowClose` | `boolean` | Determines if the modal can be closed directly. When false, may trigger a confirmation dialog for all close methods (X icon, Cancel button, Escape key, click outside) based on unsaved changes. Default is true |
| `allowEscape` | `boolean` | Allows the modal to be closed when the Escape key is pressed. When combined with allowClose=false, follows the same confirmation behavior. Default is true |
| `allowClickOutside` | `boolean` | Allows the modal to be closed when clicking outside the modal (backdrop click). When combined with allowClose=false, follows the same confirmation behavior. Default is false |
| `primaryButtonDisabled` | `boolean` | Disables the primary button when true. Default is false |
| `hasUnsavedChanges` | `(() => boolean) \| boolean` | Function or boolean that determines if there are unsaved changes. When allowClose is false, only shows confirmation dialog if this returns true. Can be a function for dynamic checking or a boolean for static state. Default is false |
| `open` | `boolean (required)` | Controls the open state of the modal. Required prop in React; the parent owns this state. |
| `onOpenChange` | `(open: boolean) => void` | Fires when the modal requests its open state to change. The parent should update the open prop accordingly. |
| `width` | `string \| number` | Modal width. Accepts CSS string values (e.g. '600px', '50%') or a number interpreted as pixels. |
| `closeAriaLabel` | `string` | Accessible label for the close (X) button. Default is 'Close dialog'. |
| `useAlertDialogRole` | `boolean` | Mirrors Angular @Input() useAlertDialogRole. When true and type is 'error' or 'warning', sets role to 'alertdialog'; otherwise 'dialog'. Default is false |
| `manageInitialFocus` | `boolean` | Mirrors Angular @Input() manageInitialFocus. When true, applies custom focus-management logic; when false, skips custom focus and uses browser/Base UI defaults. Default is true |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onClosed (callback prop)` | `() => void` | Callback for when the modal is closed with a positive intent. Equivalent to Angular's closed output. |
| `onDismissed (callback prop)` | `() => void` | Callback for when the modal is cancelled or dismissed. Equivalent to Angular's dismissed output. |

## React reference stories

Copy open/close/select behavior from these, not from what seems reasonable.

- [All Modal Types](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-modal-examples--all-modal-types&globals=theme:lyra)
- [Custom Modal](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-modal-examples--custom-modal&globals=theme:lyra)
- [Restricted Close](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-modal-examples--restricted-close&globals=theme:lyra)
- [Multiple Modals](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-modal-examples--multiple-modals&globals=theme:lyra)

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `type` | `string` | Type of modal whether info, error, warning or standard modal |
| `title` | `string` | Title text of the sol-modal element |
| `criticalButtonLabel` | `string` | Determines the label of the critical button |
| `secondaryButtonLabel` | `string` | Determines the label of the secondary button |
| `primaryButtonLabel` | `string` | Determines the label of the primary button |
| `message` | `string` | The message content to display in the modal body |
| `allowClose` | `boolean` | Determines if the modal can be closed directly. When false, may trigger a confirmation dialog for all close methods (X icon, Cancel button, Escape key, click outside) based on unsaved changes. Default is true |
| `closeAriaLabel` | `string` | Overrides the close (X) button's accessible name for this modal instance. Falls back to the translated "Close Dialog" string (via TranslationService) when not set. Default is '' |
| `allowEscape` | `boolean` | Allows the modal to be closed when the Escape key is pressed. When combined with allowClose=false, follows the same confirmation behavior. Default is true |
| `allowClickOutside` | `boolean` | Allows the modal to be closed when clicking outside the modal (backdrop click). When combined with allowClose=false, follows the same confirmation behavior. Default is false |
| `hasUnsavedChanges` | `(() => boolean) \| boolean` | Function or boolean that determines if there are unsaved changes. When allowClose is false, only shows confirmation dialog if this returns true. Can be a function for dynamic checking or a boolean for static state. Default is false |
| `primaryButtonDisabled` | `boolean` | Whether the primary button is disabled. Default is false |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `closed` | `EventEmitter` | Event handler for when the modal is closed with a positive intent |
| `dismissed` | `EventEmitter` | Event handler for when the modal is cancelled or dismissed |

## Angular reference stories

- [All Modal Types](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-modal-examples--all-modal-types&globals=theme:lyra)
- [Custom Modal](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-modal-examples--custom-modal&globals=theme:lyra)
- [Restricted Close](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-modal-examples--restricted-close&globals=theme:lyra)
- [Multiple Modals](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-modal-examples--multiple-modals&globals=theme:lyra)

