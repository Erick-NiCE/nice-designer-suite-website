# Wizard

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-wizard, sol-step` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-wizard-api--docs |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-wizard-api--docs |

These docs are on the internal SOL Storybook (VPN). If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

## React props

| Name | Type | Description |
| --- | --- | --- |
| `allowJumping` | `boolean` | Allow jumping to next steps |
| `compact` | `boolean` | @deprecated Compact mode is now automatic based on container width. Accepted for API parity but ignored. |
| `children` | `ReactNode` | SOLStep children. Only SOLStep elements are read; other children are ignored. |
| `id` | `string` | Unique ID for the wizard's root element. |
| `className` | `string` | Additional CSS class(es) applied to the wizard's root element. |
| `style` | `CSSProperties` | Inline styles applied to the wizard's root element. |

## React callbacks

| Name | Type | Description |
| --- | --- | --- |
| `onStepChanged` | `(step: StepChangedData) => void` | Fires whenever the active step changes. Receives a snapshot of the newly active step's state: id, label, stepIndex, stepNumber, active, visited, completed, stepCompleted, stepNotCompleted, disabled, parallelStep, activeParallelBranch, mainBranchCompleted, parallelBranchCompleted. |

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `allowJumping` | `boolean` | Allow jumping to next steps |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `stepChanged` | `EventEmitter` | Emits the changed steps |

