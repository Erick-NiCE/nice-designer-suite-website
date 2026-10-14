# Chip Group

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-chip-group` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-chip-group-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-chip-group-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | Specifies the ID for the Chip Group component. |
| `tagsSource` | `SelectedTag[]` | List of Chip Group. |
| `removable` | `boolean` | Tags have remove action. Determines if the tags can be removable or not. true indicates removable and false indicates non removable. |
| `tagSize` | `'small' \| 'medium'` | Specifies the size of the selected chips. Default value is 'small'. |
| `allowClearAll` | `boolean` | Displays clear button if true. |
| `primaryKey` | `string` | Selects the unique identifier property of the object in the collection tagsSource. Default is 'id'. |
| `label` | `string` | Selects the string property of the object which is to be displayed. Default is 'text'. |
| `maxTagsToDisplay` | `number` | The maximum number of tags to display, regardless of the width of the container. This value must be larger than 0. To avoid cluttering the DOM with many tags, the component takes the minimum value between this value and 10 tags. |
| `overflowMode` | `'inline' \| 'popover'` | When there are more tags than can fit on a line, a Show More button appears. This option configures what happens when the user clicks that button: 'inline' (default) - The component expands to show multiple lines of Chip Group. 'popover' - A popover containing the additional tags appears beneath the button. |
| `tooltipAppendTo` | `HTMLElement \| string` | appendTo target for chip tooltips. Use 'body' when the chip group sits inside an overflow-clipping container. Default ''. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onTagsChanged` | `` | Event emitted when the selection changes, passing the new selected value(s). |
| `onViewMoreClicked` | `` | Event to denote that the +x button was clicked. Here x is number of hidden chips. |
| `onViewLessClicked` | `` | Event to denote that the Show less button was clicked. |
| `onTagDeleted` | `` | Event emitted when any tag is deleted. Emits the deleted tag value. |
| `onDeleteAllClicked` | `` | Event emitted when Clear all button is pressed. |
| `onLastTagDeleted` | `` | Event emitted when the last chip is deleted and no focusable element (e.g. the Clear button) remains inside the chip group. The parent should use this to restore focus to an appropriate external control. |

## React reference stories

Copy open/close/select behavior from these, not from what seems reasonable.

- [With Chips Expansion](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-chip-group-examples--with-chips-expansion)
- [With Popover](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-chip-group-examples--with-popover)

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | Specifies the ID for the Chip Group component. |
| `tagsSource` | `SelectedTag[]` | List of Chip Group. |
| `removable` | `boolean` | Tags have remove action. Determines if the tags can be removable or not. true indicates removable and false indicates non removable |
| `tagSize` | `'small'  'medium'` | Specifies the size of the selected chips. Default value is 'small' |
| `allowClearAll` | `boolean` | Displays clear button if true. |
| `primaryKey` | `string` | Selects the unique identifier property of the object in the collection tagsSource. Default is 'id'. |
| `label` | `string` | Selects the string property of the object which is to be displayed. Default is 'text'. |
| `maxTagsToDisplay` | `number` | The maximum number of tags to display, regardless of the width of the container. This value must be larger than 0. To avoid cluttering the DOM with many tags, the component takes the minimum value between this value and 10 tags. |
| `overflowMode` | `'inline''popover'` | When there are more tags than can fit on a line, a Show More button appears. This option configures what happens when the user clicks that button:'inline' (default) - The component expands to show multiple lines of Chip Group.'popover' - A popover containing the additional tags appears beneath the button. |
| `tooltipAppendTo` | `HTMLElement \| string` | Element to append chip tooltips to. Default: '' |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `tagsChanged` | `` | Event emitted when the selection changes, passing the new selected value(s). |
| `viewMoreClicked` | `` | Event to denote that the +x button was clicked. Here x is number of hidden chips. |
| `viewLessClicked` | `` | Event to denote that the Show less button was clicked. |
| `tagDeleted` | `` | Event emitted when any tag is deleted. Emits the deleted tag value. |
| `deleteAllClicked` | `` | Event emitted when Clear all button is pressed. |
| `lastTagDeleted` | `` | Event emitted when the last chip is deleted. |

## Angular reference stories

- [With Chips Expansion](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-chip-group-examples--with-chips-expansion)
- [With Popover](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-chip-group-examples--with-popover)

