# Wizard

| | |
| --- | --- |
| React | Available |
| Angular | Available, selector `sol-wizard, sol-step` |
| React docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/react_components-wizard-api--docs&globals=theme:lyra |
| Angular docs | https://na1.dev.nice-incontact.com/sol/?path=/docs/angular_components-wizard-api--docs&globals=theme:lyra |

These docs are on the internal SOL/Lyra Storybook (VPN), opened in the Lyra theme. If a prop below is not enough to build what was asked, that is a gap: record it in the prototype's `GAPS.md`, do not restyle around it.

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

## React reference stories

Copy open/close/select behavior from these, not from what seems reasonable.

- [Wizard Parallel](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-wizard-examples--wizard-parallel&globals=theme:lyra)
- [Wizard](https://na1.dev.nice-incontact.com/sol/?path=/story/react_components-wizard-examples--wizard&globals=theme:lyra)

## Angular inputs

| Name | Type | Description |
| --- | --- | --- |
| `allowJumping` | `boolean` | Allow jumping to next steps |

## Angular outputs

| Name | Type | Description |
| --- | --- | --- |
| `stepChanged` | `EventEmitter` | Emits the changed steps |

## Angular reference stories

- [Wizard Parallel](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-wizard-examples--wizard-parallel&globals=theme:lyra)
- [Wizard](https://na1.dev.nice-incontact.com/sol/?path=/story/angular_components-wizard-examples--wizard&globals=theme:lyra)

