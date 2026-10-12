# Textarea

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-text-area` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-textarea-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-textarea-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | The id attribute for the textarea element. Default is auto-generated. |
| `name` | `string` | Name attribute of the textarea element. |
| `placeholder` | `string` | Placeholder text displayed when the textarea is empty. |
| `value` | `string` | The value of the textarea. |
| `cols` | `number` | Number of columns in the textarea. |
| `minRows` | `number` | Minimum number of rows to display in the textarea. |
| `maxRows` | `number` | Maximum number of rows to display in the textarea. |
| `minLength` | `number` | Minimum length of text allowed in the textarea. |
| `maxLength` | `number` | Maximum length of text allowed in the textarea. When set and greater than 0, automatically displays a character counter. |
| `required` | `boolean` | Whether the textarea input is required. Default is false. |
| `readonly` | `boolean` | Whether the textarea is read-only. Default is false. |
| `disabled` | `boolean` | Whether the textarea is disabled. Default is false. |
| `errorState` | `boolean` | Whether the textarea is in an error state. Default is false. |
| `resizeTextarea` | `boolean` | Whether the textarea can be resized by the user. Default is false. |
| `fontSize` | `'small' \| 'large'` | Font size variant for the textarea. Default is 'small'. |
| `wrap` | `string` | Text wrapping behavior for the textarea. Default is 'on'. |
| `hideBorder` | `boolean` | Whether to hide the textarea border. Default is false. |
| `preventEnterKey` | `boolean` | Whether to prevent the Enter key from creating new lines. Shift+Enter still inserts a newline. Default is false. |
| `autocomplete` | `string \| null` | Autocomplete attribute for the textarea. null/undefined are coerced to 'off'. Default is 'off'. |
| `ariaLabel` | `string` | Accessibility label for the textarea. Falls back to label when empty. Default is ''. |
| `ariaLabelledby` | `string \| null` | ID of element that labels the textarea. Default is null. |
| `externalAriaDescribedBy` | `string \| null` | Parent component passes aria-describedby id(s) to be combined with internal counter/error ids. Default is null. |
| `label` | `string \| undefined` | Label text shown above the textarea. |
| `labelHelpText` | `string \| undefined` | Help tooltip text shown on the label. |
| `errorMessage` | `string \| undefined` | External error message shown below the textarea. |
| `infoMessage` | `string \| undefined` | Info message shown below the textarea. |
| `supportErrorMessage` | `boolean \| undefined` | Explicitly controls error message area visibility. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onValueChange` | `(value: string) => void` | Callback invoked when the textarea value changes. Receives the new value. |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `value` | `string` | The value of the textarea. |
| `placeholder` | `string` | Placeholder text displayed when the textarea is empty. |
| `name` | `string` | Name attribute of the textarea element. |
| `cols` | `number` | Number of columns in the textarea. |
| `required` | `boolean` | Whether the textarea input is required. |
| `readonly` | `boolean` | Whether the textarea is read-only. |
| `minLength` | `number` | Minimum length of text allowed in the textarea. |
| `maxLength` | `number` | Maximum length of text allowed in the textarea. When set, automatically displays a character counter. |
| `minRows` | `number` | Minimum number of rows to display in the textarea. |
| `maxRows` | `number` | Maximum number of rows to display in the textarea. |
| `resizeTextarea` | `boolean` | Whether the textarea can be resized by the user. |
| `fontSize` | `'small' \| 'large'` | Font size variant for the textarea. Default is 'small'. |
| `wrap` | `string` | Text wrapping behavior for the textarea. Default is 'on'. |
| `hideBorder` | `boolean` | Whether to hide the textarea border. |
| `preventEnterKey` | `boolean` | Whether to prevent the Enter key from creating new lines. |
| `autocomplete` | `string` | Autocomplete attribute for the textarea. Default is 'off'. |
| `ariaLabel` | `string` | Accessibility label for the textarea. |
| `ariaLabelledby` | `string` | ID of element that labels the textarea. |
| `disabled` | `boolean` | Whether the textarea is disabled. |
| `id` | `string` | ID for the textarea element. If not provided, a unique ID will be generated. |
| `errorState` | `boolean` | Whether the textarea is in an error state. |
| `ariaDescribedby` | `string \| null` | Sets aria-describedby attribute on the textarea. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `valueChange` | `EventEmitter<string>` | Event emitted when the textarea value changes. |

