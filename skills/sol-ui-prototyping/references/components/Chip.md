# Chip

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-chip` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-chip-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-chip-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique ID for the chip. When omitted or empty, the component generates a stable fallback id of the form sol-chip-{n}. |
| `label` | `string` | Text displayed inside the chip. Default: ''. |
| `icon` | `Icon` | Optional icon rendered at the start of the chip. Accepts a predefined icon name, sprite path, inline SVG string, ReactNode, IconConfig, or null. Default: null. |
| `removable` | `boolean` | When true, shows a remove button. Default: false. |
| `size` | `'small' \| 'medium'` | Chip size. 'small' is the default. |
| `chipTabIndex` | `string` | Tab index for the chip container. Default: '0'. |
| `role` | `ChipRole` | ARIA role for the chip. Defaults to 'group' when the chip has interactive children (remove button or error icon) to avoid nested-interactive violations, or no role for simple chips. Can be explicitly set to 'option' when used in a listbox. Accepted values: 'button', 'group', 'option', null. Default: null. |
| `errorState` | `boolean` | When true, the chip renders in error styling and exposes an error icon. Default: false. |
| `errorMessage` | `string` | Error tooltip content shown on the error icon on hover/focus. Default: ''. |
| `removeIconAriaLabel` | `string` | Accessible label for the remove button, also used as its tooltip text. Default: 'Remove'. |
| `tooltipAppendTo` | `string \| Element` | appendTo target for all internal tooltips (label, error icon, remove button). Use 'body' when the chip is inside an overflow-clipping container. Default: '' (appended within the component). |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique ID for the chip |
| `label` | `string` | Text displayed inside the chip |
| `icon` | `Icon` | Optional icon object to render at the start of the chip |
| `removable` | `boolean` | When true, shows a remove button; default: false |
| `size` | `'small' \| 'medium'` | Chip size. small is the default. |
| `chipTabIndex` | `string` | Tab index for the chip container (default '0') |
| `role` | `ChipRole` | ARIA role for the chip. Defaults to 'group' when chip has interactive children (remove button or error icon) to avoid nested-interactive violation, or 'button' for simple chips. Can be explicitly set to 'option' when used in a listbox. Accepted values: 'button', 'group', 'option', null. |
| `errorState` | `boolean` | When true, chip renders in error styling |
| `errorMessage` | `string` | Error tooltip content shown on error icon hover/focus |
| `removeIconAriaLabel` | `string` | Accessible label for the remove button (default: translated 'remove') |
| `tooltipAppendTo` | `string \| Element` | Element to append the tooltip to. Default: '' |

## Angular outputs

_None documented._

## Migration notes (Angular)

- Migrating to V16: SOL Chip has the following breaking changes from SOL 14 to SOL 16:; size='large - The large size has been removed. Only 'small' and 'medium' are now supported.; ChipVariant - Chip variants have been removed. The component now has a single design with no variant input.; labelEditable - This input has been removed. Labels are no longer editable.; subLabelEditable - This input has been removed along with sublabel support.; chipRole - This input has been removed.; subLabel - Sub-labels are no longer supported. Use only the label property.; subLabelChanged - This output has been removed along with sublabel support.; allowClose - Renamed to removable for better semantic accuracy.; closeIconAriaLabel - Renamed to removeIconAriaLabel for better semantic accuracy.; closed - Output renamed to removed for better semantic accuracy.; closeButtonKeydown - Output renamed to removeButtonKeydown for better semantic accuracy.; CSS class .close-icon - Changed to .remove-icon for better semantic accuracy.; Page object property chipClosebtn - Changed to chipRemoveBtn for better semantic accuracy.; Page object method closeButton() - Changed to removeButton() for better semantic accuracy.

Old names in these notes are **removed**. Never use them.
