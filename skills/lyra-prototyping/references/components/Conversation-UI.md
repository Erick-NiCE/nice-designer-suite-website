# Conversation UI

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `sol-conversation-prompt` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-conversation-ui-api--docs&globals=theme:lyra |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-conversation-ui-api--docs&globals=theme:lyra |

These docs are on the internal SOL/Lyra Storybook (VPN), opened in the Lyra theme. If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Conversation UI. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `placeholder` | `string` | Placeholder text for the input field. |
| `maxRows` | `number` | Maximum number of visible text rows. The default value is 4. |
| `showCharacterCount` | `boolean` | Whether to display a character counter. |
| `maxLength` | `number` | Maximum character length for the input. The default value is 200. |
| `textAreaId` | `string` | The id attribute for the textarea element. |
| `textInputValue` | `string` | Used to set the textarea value based on specific use case requirements. |
| `showPixieIcon` | `boolean` | Whether to show the Pixie button. The default value is true. |
| `suggestions` | `any[]` | List of suggestion items displayed in the suggestion popover. Recommended up to 4. |
| `fetchSuggestions` | `() => Promise<any[]>` | Async callback triggered when the Pixie icon is clicked, used to fetch dynamic suggestions. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `actionButtonClicked` | `EventEmitter<string>` | Emits the input text value when the submit button is clicked. |

## Angular reference stories

- [Async Fetch Suggestion](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-conversation-ui-examples--async-fetch-suggestion&globals=theme:lyra)
- [Conversation Card Demo](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-conversation-ui-examples--conversation-card-demo&globals=theme:lyra)
- [Conversation Prompt Basic](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-conversation-ui-examples--conversation-prompt-basic&globals=theme:lyra)
- [Show Pixie Icon](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-conversation-ui-examples--show-pixie-icon&globals=theme:lyra)

