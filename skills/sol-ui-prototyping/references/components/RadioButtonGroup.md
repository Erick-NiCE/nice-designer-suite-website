# RadioButtonGroup

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-radio-group, sol-radio-button` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-radiobuttongroup-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-radiobuttongroup-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the radio button group. All radio buttons inside this group will use this name. |
| `disabled` | `boolean` | Whether the radio group is disabled. |
| `required` | `boolean` | Whether the radio group is required. |
| `readonly` | `boolean` | Whether the radio group is readonly. The group remains keyboard-focusable but the selection cannot be changed. |
| `value` | `string` | Value for the radio-group. Should equal the value of the selected radio button if there is a corresponding radio button with a matching value. If there is not such a corresponding radio button, this value persists to be applied in case a new radio button is added with a matching value. Omit to let the group manage the selected value internally. |
| `inline` | `boolean` | Default: falseControls the layout orientation of the radio button group with intelligent responsive behavior:Vertical layout (false): Radio buttons stack vertically in a column.Horizontal layout (true): Radio buttons are arranged horizontally with automatic reflow based on the following rules:Responsive Behavior Rules (when inline=true):Max Width Constraint: Horizontal layout expands up to a maximum width of 45rem (720px).Content-Based Reflow: If the total width of all radio buttons exceeds 45rem, the group automatically switches to vertical layout.Viewport-Based Reflow: If the viewport or container width becomes smaller than the radio group's natural width, the layout automatically switches to vertical.Horizontal Restoration: When the viewport is wider than the radio group's natural width (and content ≤ 45rem), the normal horizontal layout is restored.Note: This intelligent responsive behavior ensures optimal readability and usability across all screen sizes. Long labels automatically wrap to multiple lines without truncation. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onClicked` | `(value: string) => void` | Fired when the group value changes due to user interaction with a radio button. |
| `onValueChange` | `(value: string) => void` | Onchange-style callback fired alongside onClicked with the same payload — useful when binding the group to controlled state. |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the radio button group. All radio buttons inside this group will use this name. |
| `disabled` | `boolean` | Whether the radio group is disabled. |
| `required` | `boolean` | Whether the radio group is required. |
| `value` | `string` | Value for the radio-group. Should equal the value of the selected radio button if there is a corresponding radio button with a matching value. If there is not such a corresponding radio button, this value persists to be applied in case a new radio button is added with a matching value. |
| `readonly` | `boolean` | Whether the radio group is read-only. Default: false. |
| `inline` | `boolean` | Default: falseControls the layout orientation of the radio button group with intelligent responsive behavior:Vertical layout (false): Radio buttons stack vertically in a column.Horizontal layout (true): Radio buttons are arranged horizontally with automatic reflow based on the following rules:Responsive Behavior Rules (when inline=true):Max Width Constraint: Horizontal layout expands up to a maximum width of 45rem (720px).Content-Based Reflow: If the total width of all radio buttons exceeds 45rem, the group automatically switches to vertical layout.Viewport-Based Reflow: If the viewport or container width becomes smaller than the radio group's natural width, the layout automatically switches to vertical.Horizontal Restoration: When the viewport is wider than the radio group's natural width (and content ≤ 45rem), the normal horizontal layout is restored.Note: This intelligent responsive behavior ensures optimal readability and usability across all screen sizes. Long labels automatically wrap to multiple lines without truncation. |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `clicked` | `EventEmitter` | Event emitted when the group value changes. Change events are only emitted when the value changes due to user interaction with a radio button. |

## Migration notes (Angular)

- Migrating to V14: There is one breaking change in the SOL Radio Button Group from version 13 to 14.; Changes to input names: groupLabel ➜ label; groupLabel ➜ label

Old names in these notes are **removed**. Never use them.
