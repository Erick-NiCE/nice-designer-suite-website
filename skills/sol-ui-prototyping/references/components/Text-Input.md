# Text Input

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-text-input` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-text-input-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-text-input-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | The id attribute for the input element. Default is auto-generated. |
| `name` | `string` | The name for the input element. |
| `placeholder` | `string` | Text that appears inside the input box when it is empty. |
| `value` | `string` | The value for the input element. |
| `type` | `'text' \| 'password' \| 'search'` | The type for the input element. Default is 'text'. |
| `size` | `'medium' \| 'large'` | Controls height of input container. 'large' uses standard control height; 'medium' is a compact variant. Default is 'large'. |
| `disabled` | `boolean` | Whether the input element is disabled. Default is false. |
| `required` | `boolean` | Whether the input element is required. Default is false. |
| `readonly` | `boolean` | Whether the input element is readonly. Default is false. |
| `ariaLabel` | `string` | Fallback accessible name for the native input. It is applied only when the input has no other accessible name — i.e. no visible label, no ariaLabelledby, and no buttonAriaLabel. If any of those is present, ariaLabel is omitted from the input so it cannot override the visible label. When buttonAriaLabel is provided, that value is used for the action buttons (e.g. password toggle, search clear) instead. Default is ''. |
| `buttonAriaLabel` | `string` | When provided, this label is applied to the action buttons (e.g. password toggle, search clear) and ariaLabel is removed from the native input element. Default is ''. |
| `ariaLabelledby` | `string \| null` | The aria-labelledby for the input element. Default is null. |
| `ariaControls` | `string \| null` | The aria-controls attribute for the native input element. Default is null. |
| `role` | `string \| null` | The role attribute for the native input element. Default is null. |
| `ariaAutocomplete` | `'none' \| 'inline' \| 'list' \| 'both' \| null` | The aria-autocomplete attribute. Default is null. |
| `ariaExpanded` | `boolean \| null` | The aria-expanded attribute. Default is null. |
| `ariaHaspopup` | `'listbox' \| 'menu' \| 'tree' \| 'grid' \| 'dialog' \| 'true' \| 'false' \| null` | The aria-haspopup attribute. Default is null. |
| `ariaActivedescendant` | `string \| null` | The aria-activedescendant attribute. Default is null. |
| `ariaInvalid` | `'true' \| 'false' \| 'grammar' \| 'spelling' \| null` | The aria-invalid attribute. Default is null. |
| `externalAriaDescribedby` | `string \| null` | The aria-describedby attribute for the native input element. Default is null. |
| `ariaRequired` | `'true' \| 'false' \| null` | The aria-required attribute. Default is null. |
| `ariaDisabled` | `'true' \| 'false' \| null` | The aria-disabled attribute. Default is null. |
| `clearSearchAriaLabel` | `string` | Accessible label for the clear button inside a type="search" input. When provided and value is non-empty, a clear button is shown. Default is '' (clear button not shown). |
| `showPasswordAriaLabel` | `string` | Custom accessible label for the password visibility toggle when password is hidden. Only applies when type="password". Default is '' (auto-generated). |
| `hidePasswordAriaLabel` | `string` | Custom accessible label for the password visibility toggle when password is visible. Only applies when type="password". Default is '' (auto-generated). |
| `icon` | `Icon` | Renders a SOLIcon component positioned before the input element. Only applies when type="text". |
| `iconEnd` | `Icon` | Renders a SOLIcon component positioned after the input element. Only applies when type="text". |
| `maxLength` | `number \| undefined` | Maximum character length. When set and greater than 0, displays a character counter. Default is undefined. |
| `errorState` | `boolean` | Whether the input has an error state. Default is false. |
| `label` | `string \| undefined` | Label text shown above the input. |
| `labelHelpText` | `string \| undefined` | Help tooltip text shown on the label. |
| `errorMessage` | `string \| undefined` | External error message shown below the input. |
| `infoMessage` | `string \| undefined` | Info message shown below the input. |
| `supportErrorMessage` | `boolean \| undefined` | Explicitly controls error message area visibility. |
| `externalErrorAriaDescribedBy` | `string \| null` | When provided, overrides the internal error aria-describedby. Used by parent components (e.g. date-picker) that own the error message element. Default is null. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onFocusEvent` | `() => void` | Callback invoked when the input is focused. |
| `onBlurEvent` | `() => void` | Callback invoked when the input loses focus. |
| `onValueChange` | `(value: string) => void` | Callback invoked when the input value changes. Receives the new value. |
| `onHighlightedText` | `(text: string) => void` | Callback invoked when text is selected/highlighted inside the input. Receives the selected text. |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string (signal input)` | The id attribute to be set for root sol-text-input elementDefault is auto-generated |
| `name` | `string` | The name for the sol-text-input element |
| `placeholder` | `string` | Text that appears inside the input box when it is empty. By default, there is no placeholder. |
| `value` | `string` | The value for the sol-text-input element |
| `type` | `'text' \| 'password' \| 'search' (signal input)` | The type for the sol-text-input elementDefault is 'text' |
| `size` | `'medium' \| 'large' (signal input)` | Controls the height of the input container. 'large' uses the standard control height; 'medium' is a more compact variant.Default is 'large' |
| `disabled` | `boolean (signal input)` | Define whether the sol-text-input element is disabled or notDefault is false |
| `required` | `boolean (signal input)` | Define whether the sol-text-input element is required or notDefault is false |
| `readonly` | `boolean (signal input)` | Define whether the sol-text-input element is readonly or notDefault is false |
| `ariaLabel` | `string` | Fallback accessible name for the input. It is applied to the native input only when the input has no other accessible name — i.e. no visible label, no ariaLabelledby, and no buttonAriaLabel; if any of those is present, ariaLabel is omitted from the input so it cannot override the visible label. When buttonAriaLabel is provided, that value is used for the action buttons (e.g. password toggle) instead.Default is '' |
| `buttonAriaLabel` | `string` | When provided, this label is applied exclusively to action buttons (e.g. password toggle) and ariaLabel is removed from the native input element. Use this when you need separate accessible labels for the input and its buttons.Default is '' |
| `ariaLabelledby` | `string \| null` | The aria-labelledby text for the sol-text-input elementDefault is null |
| `ariaControls` | `string \| null` | The aria-controls attribute for the native input element. Used to associate the input with the element it controls (e.g. a listbox). Typically set when type="search" to point to the id of the filtered list.Default is null |
| `role` | `string \| null` | The role attribute for the native input element. Used when the input is part of a composite widget (e.g. combobox).Default is null |
| `aria-autocomplete` | `'none' \| 'inline' \| 'list' \| 'both' \| null` | The aria-autocomplete attribute for the native input element. Indicates whether inputting text could trigger display of predictions.Default is null |
| `aria-expanded` | `boolean \| null` | The aria-expanded attribute for the native input element. Indicates whether a popup element controlled by the input is currently expanded or collapsed.Default is null |
| `aria-haspopup` | `'listbox' \| 'menu' \| 'tree' \| 'grid' \| 'dialog' \| 'true' \| 'false' \| null` | The aria-haspopup attribute for the native input element. Indicates the type of popup element that can be triggered by the input.Default is null |
| `aria-activedescendant` | `string \| null` | The aria-activedescendant attribute for the native input element. Identifies the currently active option in a popup listbox when using keyboard navigation.Default is null |
| `aria-invalid` | `'true' \| 'false' \| 'grammar' \| 'spelling' \| null` | The aria-invalid attribute for the native input element. Indicates the entered value does not conform to the expected format.Default is null |
| `aria-describedby` | `string \| null` | The aria-describedby attribute for the native input element. References the ID of an element that describes the input (e.g. error message).Default is null |
| `aria-required` | `'true' \| 'false' \| null` | The aria-required attribute for the native input element. Indicates that user input is required before submission.Default is null |
| `aria-disabled` | `'true' \| 'false' \| null` | The aria-disabled attribute for the native input element. Indicates that the element is perceivable but disabled.Default is null |
| `clearSearchAriaLabel` | `string` | Accessible label for the clear (×) button rendered inside a type="search" input. When provided and the input has a non-empty value, a clear button is shown. Screen readers will announce this label so users know the button clears the search text.Default is '' (clear button not shown) |
| `showPasswordAriaLabel` | `string` | Custom accessible label for the password visibility toggle button when the password is currently hidden (i.e. the "show" action). Only applies when type="password". When not provided, the label is auto-generated as "Show " followed by buttonAriaLabel (if provided), otherwise ariaLabel, or "password" if neither is set.Default is '' |
| `hidePasswordAriaLabel` | `string` | Custom accessible label for the password visibility toggle button when the password is currently visible (i.e. the "hide" action). Only applies when type="password". When not provided, the label is auto-generated as "Hide " followed by buttonAriaLabel (if provided), otherwise ariaLabel, or "password" if neither is set.Default is '' |
| `icon` | `Icon from @niceltd/sol-angular/icon` | Renders a sol-icon component positioned before the input element. |
| `iconEnd` | `Icon from @niceltd/sol-angular/icon` | Renders a sol-icon component positioned after the input element. |
| `maxLength` | `number \| undefined (signal input)` | Define the maximum character length allowed in the sol-text-input element. When set to a value greater than 0, displays a character counter.Default is undefined - no limit |
| `errorState` | `boolean (signal input)` | Whether the sol-text-input element has an error mode stateDefault is false |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `focusEvent` | `void` | Event emitted when the sol-text-input element is focused |
| `blurEvent` | `void` | Event emitted when the sol-text-input element loses focus |
| `valueChange` | `string` | Event emitted when the sol-text-input element value is changed, returns the input new value |
| `highlightedText` | `string` | Event emitted when the sol-text-input element text is highlighted, returns the highlighted text inside the input |

## Migration notes (Angular)

- Migrating to V14: There are a small number of breaking changes in the SOL Text Input from version 13 to 14.; Changes to input names: errorMessageText ➜ errorMessage; errorMessageText ➜ errorMessage; The error message text no longer has a leading and a trailing space. You may need to update your tests. .toHaveText(' This field is required ') ➜ .toHaveText('This field is required'); .toHaveText(' This field is required ') ➜ .toHaveText('This field is required')
- Migrating to V16: Breaking Changes:; Search Input: Text Input with type="search" will now automatically initialize the end icon to sol-search. In this case, developers cannot set the icon or iconEnd inputs.; Password Input: Text Input with type="password" will now automatically include built-in toggle visibility functionality: Password inputs automatically display show/hide eye icons Custom icon and iconEnd inputs are ignored; Password inputs automatically display show/hide eye icons; Custom icon and iconEnd inputs are ignored; maxCharLength renamed to maxLength; When maxLength > 0: text counter appears automatically; The autocomplete input has been removed. The native input element now always uses autocomplete="off".; aria-label renamed to ariaLabel (camelCase binding required); aria-labelledby renamed to ariaLabelledby (camelCase binding required)

Old names in these notes are **removed**. Never use them.
