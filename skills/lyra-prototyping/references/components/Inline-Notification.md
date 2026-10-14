# Inline Notification

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-inline-notification` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-inline-notification-api--docs&globals=theme:lyra |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-inline-notification-api--docs&globals=theme:lyra |

These docs are on the internal SOL/Lyra Storybook (VPN), opened in the Lyra theme. If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Inline Notification. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `messageTitle` | `string` | The title for sol-Inline Notification. |
| `messageData` | `string` | The message to be shown as notification. |
| `messageType` | `InlineNotificationType = 'error' \| 'info' \| 'success' \| 'warning';` | Type of inline-notification. |
| `showClose` | `boolean` | Whether or not to show close icon. |
| `show` | `boolean` | To display sol-Inline Notification or not. |
| `messageId` | `string` | The id attribute to be set for root sol-Inline Notification element |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `close` | `EventEmitter` | Emits an event when Inline Notification is closed. |

## Angular reference stories

- [Inline](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-inline-notification-examples--inline&globals=theme:lyra)
- [All Inline](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-inline-notification-examples--all-inline&globals=theme:lyra)

## Migration notes (Angular)

- Migrating to V11: There are a number of breaking changes in the SOL Inline Notification from version 10 to 11.; Changes to input names: title ➜ messageTitle message ➜ messageData type ➜ messageType; title ➜ messageTitle; message ➜ messageData; type ➜ messageType

Old names in these notes are **removed**. Never use them.
