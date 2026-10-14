# Button

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-button` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-button-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-button-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'critical'` | The variant of the button. The default value is 'primary'. |
| `id` | `string` | Unique ID for the button. |
| `name` | `string` | Name attribute for the button. |
| `type` | `'button' \| 'submit' \| 'reset'` | The type of the button. The default value is 'button'. |
| `value` | `string` | The value attribute for the button. |
| `icon` | `ReactNode` | React element positioned before any text in the button. |
| `iconEnd` | `ReactNode` | React element positioned after any text in the button. |
| `ariaLabel` | `string` | The accessible label for the button. |
| `ariaLabelledBy` | `string` | The ID of the element that labels the button. |
| `ariaDescribedBy` | `string` | The ID of the element that describes the button. |
| `ariaPressed` | `boolean` | Indicates the pressed state of a toggle button. |
| `ariaExpanded` | `boolean` | Sets the aria-expanded attribute for the button. |
| `disabled` | `boolean` | Disables the button if set to true. |
| `disabledAltState` | `boolean` | Applies disabled styling without native disabled state. |
| `tabindex` | `string` | Specifies the tab order of the button. |
| `size` | `'large' \| 'medium' \| 'small'` | The size of the button. The default value is 'large'. |
| `maxWidth` | `string \| number` | Optional max-width constraint. Numbers are converted to pixels. |
| `tooltip` | `string` | Hover/focus tooltip text. Mirrors Angular's [solTooltip] directive on <sol-button>. Overrides the auto-ariaLabel-tooltip behavior on icon-only buttons. |
| `children` | `ReactNode` | Button content (text, elements, etc.). |
| `className` | `string` | Additional CSS classes to apply. |
| `style` | `React.CSSProperties` | Inline styles to apply. |

## React reference stories

Copy open/close/select behavior from these, not from what seems reasonable.

- [Button Styles](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-button-examples--button-styles)
- [Button Sizes](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-button-examples--button-sizes)
- [Button States](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-button-examples--button-states)
- [Button Icon](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-button-examples--button-icon)

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `variant` | `primary \| secondary \| tertiary \| critical` | The variant of the button. The default value is primary. |
| `id` | `string` | Unique ID for the button. |
| `name` | `string` | Name attribute for the button. |
| `type` | `'button' \| 'submit' \| 'reset'` | The type of the button. The default value is button. |
| `value` | `string` | The value attribute for the button. |
| `icon` | `Icon from @niceltd/sol-angular/icon` | Renders a sol-icon component positioned before any text in the button. |
| `iconEnd` | `Icon from @niceltd/sol-angular/icon` | Renders a sol-icon component positioned after any text in the button. |
| `ariaLabel` | `string` | The accessible label for the button. |
| `ariaLabelledby` | `string` | The ID of the element that labels the button. |
| `ariaDescribedby` | `string` | The ID of the element that describes the button. |
| `ariaPressed` | `boolean` | Indicates the pressed state of a toggle button. |
| `ariaExpanded` | `boolean` | Sets the aria-expanded attribute for the button. |
| `disabled` | `boolean` | Disables the button if set to true. |
| `tabindex` | `string` | Specifies the tab order of the button. |
| `size` | `large \| medium \| small` | The size of the button. |
| `maxWidth` | `string \| number` | Sets a max-width on the inner button. Long labels are trimmed with ellipsis when the button content exceeds this width. Numbers are treated as pixels. |
| `disabledAltState` | `boolean` | Alternative disabled styling state. The default value is false. |
| `ariaHaspopup` | `string \| boolean` | Sets aria-haspopup attribute. |
| `ariaInvalid` | `boolean` | Sets aria-invalid attribute. |
| `buttonMatMenuTriggerFor` | `MatMenu \| null` | Material menu trigger reference. |

## Angular outputs

_None documented._

## Angular reference stories

- [Button Styles](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-button-examples--button-styles)
- [Button Sizes](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-button-examples--button-sizes)
- [Button States](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-button-examples--button-states)
- [Button Icon](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-button-examples--button-icon)

## Migration notes (Angular)

- Migrating to V12: Changes to output names: click ➜ buttonClick; click ➜ buttonClick
- Migrating from V14 to V16: The button component has been updated with new variant names to better align with design system terminology:; Variant name changes: basic ➜ secondary text ➜ tertiary warn ➜ critical; basic ➜ secondary; text ➜ tertiary; warn ➜ critical
- Migrating to V17: Input rename: ariaLabelledBy → ariaLabelledby (lowercase 'b' for consistency with other SOL components); Input rename: ariaDescribedBy → ariaDescribedby (lowercase 'b' for consistency with other SOL components)

Old names in these notes are **removed**. Never use them.
