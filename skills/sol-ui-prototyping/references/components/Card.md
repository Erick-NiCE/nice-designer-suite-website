# Card

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-card` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-card-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-card-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Card. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `useAlternativeBackgroundColor` | `boolean` | Uses an alternative surface background color.Default is false. |
| `divider` | `boolean` | Shows a divider line between body and footer when both are present.Default is true. |
| `enableHover` | `boolean` | Adds a hover background style to the card.Default is false. |
| `ariaLabelledby` | `string \| null` | Sets aria-labelledby on the card root. Prefer this over aria-label so the accessible name comes from visible text. |
| `ariaDescribedby` | `string \| null` | Sets aria-describedby on the card root to reference additional context (e.g., summary or status text). |
| `ariaLive` | `'polite' \| 'assertive' \| 'off' \| null` | Sets aria-live on the card root when card content updates dynamically. |
| `selectable` | `boolean` | When true, the card is treated as selectable and exposes aria-selected based on selected. Default is false. |
| `selected` | `boolean` | Selection state used for aria-selected when selectable is enabled. Default is false. |
| `variant` | `'chat' \| undefined` | Enables chat-bubble rendering mode. When set to 'chat', use chatRole to control alignment and background. Default is undefined. |
| `chatRole` | `'user' \| 'ai' \| undefined` | Role within a conversation. 'user' aligns the bubble to the right with a conversation background; 'ai' is transparent and left-aligned. Required when variant='chat'. Default is undefined. |

## Angular outputs

_None documented._

