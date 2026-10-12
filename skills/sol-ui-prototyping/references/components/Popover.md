# Popover

| | |
| --- | --- |
| React | **Not available. Angular only.** |
| Angular | Available, selector `solTooltip` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-popover-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-popover-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React

No React API is documented for Popover. In a React build this component is **not available**; list it in `GAPS.md` and use the Angular fallback only if the user has agreed to a mixed build.

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `solPopover` | `string \| TemplateRef` | The content to be displayed in the popover. This attribute must be specified to create a popover. |
| `popoverTitle` | `string` | The popover title that appears above the main content |
| `popoverId` | `string` | The custom sol-popover-my-id attribute to be set for root solTooltip element |
| `placement` | `string` | Determines the preferred placement of the popover. 'top' \| 'right' \| 'bottom' \| 'left' \| 'auto' Default is 'top' |
| `maxWidth` | `number` | The popover max width. Default is 384 (pixels) |
| `interactive` | `boolean` | The popover interactive behavior, allowing you to hover over and click inside it. Default is true |
| `hideOnOutsideClick` | `boolean` | This determines if a popover should close when the user clicks outside on the popover or uses the Escape key. By default, this is set to true. (If you want to force the user to interactive with content inside the popover, you can set this to false.) (For tooltips, this input has no effect.) |
| `arrow` | `boolean` | The popover arrow style, determines if the popover should have an arrow or not Default is true |
| `appendTo` | `string \| Element` | The element to append the popover to. When set to 'body' it will append the popover to the HTML body element. When not set, it will append the popover to the trigger element. Default is '' |
| `delay` | `number \| undefined \| [number \| null, number \| null]` | Delay in ms once a trigger event is fired before the tooltip is shows or hides. Setting the delay to 100, it will show and hide the tooltip with a delay of 100ms. Setting the delay to [100, 200], it will show the tooltip with a delay of 100ms and hide the tooltip with a of delay is 200ms. Default is 0ms |
| `duration` | `number \| undefined \| [number \| null, number \| null]` | Duration in ms to the transition of the tooltip show/hide animation. Setting the duration to 100, the show and hide duration are 100ms. Setting the duration to [100, 200], the show duration is 100ms and hide duration is 200ms. Default is [300ms, 250ms] |
| `tooltipDisabled` | `boolean` | Determines if the tooltip is disabled or not. Default is false |
| `popoverTrigger` | `'click' \| 'hover' \| 'manual'` | The user action that triggers the popover to appear. Default is 'click'click: For accessibility, the trigger element should be a button or have a role of button. If it does, then 'click' will cause the popover to appear when the user either clicks the element or presses Enter while focused on it.hover: This will cause the popover to appear when the user hovers or focuses on the trigger element.manual: The popover will not open automatically. Use the directive's exported API (exportAs="solTooltip") to programmatically call show() and hide() methods. Note: When using manual mode, the developer is responsible for implementing proper accessibility handling. |
| `tooltipReferenceEl` | `HTMLElement \| null` | Reference element for popover positioning. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `onShown()` | `EventEmitter` | Emitted when the tooltip or popover has finished the transition to being shown. |
| `onHidden()` | `EventEmitter` | Emitted when the tooltip or popover has finished the transition to being hidden. |

