# Accordion

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-accordion-group, sol-accordion-item` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-accordion-api--docs&globals=theme:lyra |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-accordion-api--docs&globals=theme:lyra |

These docs are on the internal SOL/Lyra Storybook (VPN), opened in the Lyra theme. If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `multiple` | `boolean` | Whether the accordion should allow multiple expanded accordion items simultaneously. |
| `id` | `string \| null` | A readonly id value to use for unique selection coordination. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onOpened` | `() => void` | Callback fired every time the AccordionItem is opened. |
| `onClosed` | `() => void` | Callback fired every time the AccordionItem is closed. |
| `onToggle` | `() => void` | Callback fired every time the AccordionItem is toggled. |

## React reference stories

Copy open/close/select behavior from these, not from what seems reasonable.

- [Single](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-accordion-examples--single&globals=theme:lyra)
- [Multiple](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-accordion-examples--multiple&globals=theme:lyra)

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `multiple` | `boolean` | Whether the accordion should allow multiple expanded accordion items simultaneously. |
| `id` | `string \| null` | A readonly id value to use for unique selection coordination. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `opened` | `EventEmitter` | Event emitted every time the AccordionItem is opened. |
| `closed` | `EventEmitter` | Event emitted every time the AccordionItem is closed. |
| `toggle` | `EventEmitter` | Event emitted every time the AccordionItem is toggled. |

## Angular reference stories

- [Single](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-accordion-examples--single&globals=theme:lyra)
- [Multiple](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-accordion-examples--multiple&globals=theme:lyra)

