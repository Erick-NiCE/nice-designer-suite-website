# Icon

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-icon` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-icon-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-icon-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `icon` | `string \| ReactNode \| IconConfig \| null` | Specifies the icon to be displayed. This can take a number of formats:StringSingle SVG  — './path/single.svg'SVG Sprite  — './path/sprite.svg#my-icon'SVG Sprite Symbol  — '#my-icon'ReactNode  — A JSX element (for example &lt;svg&gt;...&lt;/svg&gt;) rendered as the icon content.IconConfig  — An object containing icon properties including the icon path and styling options; the properties the object can contain match the names of the inputs in this table.Note: When using ReactNode, all of the other inputs are ignored.Note: When using IconConfig, values specified in the IconConfig properties take precedence over inputs of the same name. |
| `className` | `string` | Adds a custom CSS class to the icon for custom styling. |
| `height` | `string` | Specifies the height of the icon. This is a string value. |
| `width` | `string` | Specifies the width of the icon. This is a string value. |
| `fill` | `string` | Specifies the fill color of the icon. This is a string value. |
| `style` | `string` | Applies custom CSS styles to the icon. This is a string value. |
| `ariaLabel` | `string` | By default, SOL Icons are decorative: they are hidden from screen readers and keyboard navigation. If your icon is not decorative, use ariaLabel to provide a string value that will label the icon for assistive technologies and show a tooltip. |
| `tooltipLabel` | `string` | If you provide an ariaLabel, the ariaLabel text will appear as a tooltip. If you want the text of the tooltip to be different than the text of the ariaLabel, use tooltipLabel to override that text. |
| `tooltipConfig` | `{placement: TooltipPlacementappendTo: string \| Element}` | If your icon has a tooltip, you can configure the placement and the appendTo properties of that tooltip with this input. (See the SOL Tooltip API page for details.) |
| `iconClick` | `() => void` | When provided, the icon is rendered inside a button element that invokes this callback when clicked. |

## React reference stories

Copy open/close/select behavior from these, not from what seems reasonable.

- [String Input](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-icon-examples--string-input)
- [Template Input](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-icon-examples--template-input)

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `icon` | `string \| TemplateRef \| IconConfig` | Specifies the icon to be displayed. This can take a number of formats:StringSingle SVG  — './path/single.svg'SVG Sprite  — './path/sprite.svg#my-icon'SVG Sprite Symbol  — '#my-icon'TemplateRefIconConfig  — An object containing icon properties including the icon path and styling options; the properties the object can contain match the names of the inputs in this table.Note: When using TemplateRef, all of the other inputs are ignored.Note: When using IconConfig, values specified in the IconConfig properties take precedence over inputs of the same name. |
| `className` | `string` | Adds a custom CSS class to the icon for custom styling. |
| `height` | `string` | Specifies the height of the icon. This is a string value. |
| `width` | `string` | Specifies the width of the icon. This is a string value. |
| `fill` | `string` | Specifies the fill color of the icon. This is a string value. |
| `style` | `string` | Applies custom CSS styles to the icon. This is a string value. |
| `ariaLabel` | `string` | By default, SOL Icons are decorative: they are hidden from screenreaders and keyboard navigation. If your icon is not decorative, use ariaLabel to provide a string value that will label the icon for assistive technologies and show a tooltip. |
| `tooltipLabel` | `string` | If you provide an ariaLabel, the ariaLabel text will appear as a tooltip. If you want the text of the tooltip to be different than the text of the ariaLabel, use tooltipLabel to override that text. |
| `tooltipConfig` | `{placement: TooltipPlacementappendTo: string \| Element}` | If your icon has a tooltip, you can configure the placement and the appendTo properties of that tooltip with this input. (See the SOL Tooltip API page for details.) |

## Angular outputs

_None documented._

## Angular reference stories

- [String Input](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-icon-examples--string-input)
- [Template Input](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-icon-examples--template-input)

## Migration notes (Angular)

- Migrating to V16: SOL Icon has the following breaking changes from SOL 15 to SOL 16:; SOL Icons are now hidden from screenreaders and keyboard navigation by default. If your icon is not decorative, you now must specify an ariaLabel.; ariaHidden has been removed. (See previous point: The value for aria-hidden is now derived based on the presence of ariaLabel.); If you specify an ariaLabel, your icon will now have tabindex="0" and can receive focus when the user navigates with the Tab key. If you do not want your icon to be focusable (for example, if your icon appears inside a button), you must remove the ariaLabel and place it on another element (like the button).; Note: If you specify an ariaLabel, it will now also appear as a tooltip. If you want the text of the tooltip to be different than the text of the ariaLabel, specify tooltipLabel.; Predefined icons are for internal use of SOL components only; Default CSS values: icons now have default CSS values for width and height applied via the component's stylesheet. You can still override these values using the respective inputs.

Old names in these notes are **removed**. Never use them.
