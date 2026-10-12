# Tooltip

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `solTooltip` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-tooltip-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-tooltip-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Tooltip. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `solTooltip` | `string` | The content to be displayed in the tooltip. This attribute must be specified to create a tooltip. |
| `tooltipId` | `string` | The custom sol-tooltip-my-id attribute to be set for root solTooltip element |
| `placement` | `string` | Determines the preferred placement of the tooltip. 'top' \| 'right' \| 'bottom' \| 'left' \| 'auto' Default is 'top' |
| `maxWidth` | `number` | The tooltip max width. Default is 320 (pixels) |
| `interactive` | `boolean` | The tooltip interactive behavior, allowing you to hover over and click inside it. Default is true |
| `arrow` | `boolean` | The tooltip arrow style, determent if the tooltip should have arrow or not Default is true |
| `overflowOnly` | `boolean` | When set to true, the tooltip will only be present if the content overflows the trigger element. Default is false, meaning the tooltip always appears on hover. (For popovers, this input has no affect.) |
| `appendTo` | `string \| Element` | The element to append the tooltip to. When set to 'body' it will append the tooltip to the HTML body element. When not set, it will append the tooltip to the trigger element. Default is '' |
| `delay` | `number \| undefined \| [number \| null, number \| null]` | Delay in ms once a trigger event is fired before the tooltip shows or hides. Setting the delay to 100, it will show and hide the tooltip with a delay of 100ms. Setting the delay to [100, 200], it will show the tooltip with a delay of 100ms and hide the tooltip with a delay of 200ms. Default is undefined (tippy.js defaults to 0ms) |
| `duration` | `number \| undefined \| [number \| null, number \| null]` | Duration in ms for the transition of the tooltip show/hide animation. Setting the duration to 100, the show and hide duration are 100ms. Setting the duration to [100, 200], the show duration is 100ms and hide duration is 200ms. Default is undefined (tippy.js defaults to [300ms, 250ms]) |
| `tooltipDisabled` | `boolean` | Determines if the tooltip is disabled or not. Default is false |
| `tooltipTrigger` | `'hover' \| 'focusOnly'` | The user action that triggers the tooltip to appear. Default is 'hover'hover: This will cause the tooltip to appear when the user hovers or focuses on the trigger element.focusOnly: This will cause the tooltip to appear when the user focuses on the trigger element (but not when they hover on it). Use this only if some other action more appropriate for mouse users than a tooltip is triggered on hover. |
| `tooltipReferenceEl` | `HTMLElement \| null` | Reference element for tooltip positioning. |
| `OutputsonShown()` | `` | Emitted when the tooltip or popover has finished the transition to being shown. |
| `onHidden()` | `` | Emitted when the tooltip or popover has finished the transition to being hidden. |

## Angular outputs

_None documented._

## Migration notes (Angular)

- Migrating to V9: Sol Tooltip Inputs changed in v9:; solTooltipId ➜ tooltipId; An empty solTooltip attribute is no longer needed. Instead, solTooltip should now have the content from the tooltip.; popoverTemplate (any) ➜ solTooltip or solPopover (string \| TemplateRef); content (string \| null) ➜ solTooltip or solPopover  (string \| TemplateRef); position ➜ placement; overflowTooltip ➜ overflowOnly; closeOnOutsideClick ➜ hideOnOutsideClick
- Migrating to V16: SOL Tooltip breaking changes in v16:; solTooltip now string only: You can no longer use a TemplateRef with solTooltip. If you need content that appears on hover to have more than just text, you can use solPopover with a popoverTrigger specified.; tooltipTitle removed: The tooltipTitle input has been removed. If you need content that appears on hover to have a title, you can use solPopover with a popoverTrigger and a popoverTitle specified.; trigger input removed: The trigger input has been removed. Tooltips now always use the default trigger behavior ('mouseenter focusin') and cannot be customized. For click-triggered interactive content, use the solPopover directive instead, which uses 'click' as its trigger.; dark input removed: The dark input has been removed. Tooltips now use the default light theme styling. Dark mode styling should be handled through CSS custom properties and design tokens.; offset input removed: The offset input has been removed and is no longer configurable. Tooltip positioning still applies a fixed offset of [0, 13] internally via the underlying positioning system.

Old names in these notes are **removed**. Never use them.
