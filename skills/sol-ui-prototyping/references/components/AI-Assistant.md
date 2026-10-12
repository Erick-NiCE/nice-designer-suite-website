# AI Assistant

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-ai-assistant-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-ai-assistant-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for AI Assistant. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `open` | `boolean` | false |
| `panelId` | `string` | 'ai-assistant' |
| `title` | `string` | 'AI Assistant' |
| `userName` | `string` | '' |
| `messages` | `SolAiMessage[]` | [] |
| `messageFormatter` | `Type<SolAiMessageFormatter>` | PlainTextFormatterComponent |
| `suggestions` | `string[]` | [] |
| `width` | `string` | '' |
| `resizable` | `boolean` | true |
| `welcomeMessage` | `string` | '' |
| `disclaimerMessage` | `string` | '' |
| `moreActions` | `SolAiMoreAction[]` | [] |
| `maxLength` | `number` | 200 |
| `responding` | `boolean` | false |
| `stopEnabled` | `boolean` | false |
| `promptShortcut` | `string \| null` | '/' |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `openChange` | `EventEmitter<boolean>` | Emits when open state changes. Enables [(open)] two-way binding. |
| `opened` | `EventEmitter<void>` | Fires after the panel's slide-in transition completes. |
| `closed` | `EventEmitter<void>` | Fires after the panel's slide-out transition completes. |
| `promptSubmit` | `EventEmitter<string>` | Fires with the trimmed text when the user sends a message or clicks a suggestion pill. |
| `stopRequested` | `EventEmitter<void>` | Fires when Stop is clicked. The component also aborts its own client-side stream read; the consumer is responsible for cancelling any in-flight backend request. |
| `messageAction` | `EventEmitter<{ messageId: string; actionId: string }>` | Fires for Regenerate, any custom per-message actions, or a moreActions selection (empty messageId in that case). |
| `feedbackChange` | `EventEmitter<{ messageId: string; feedback: 'up' \| 'down' \| null }>` | Fires on every thumbs up/down toggle, including clearing (clicking the already-active thumb). |
| `retryRequested` | `EventEmitter<string>` | Fires with the message id when Retry is clicked on an errored message (all error kinds except rate-limit). |

