import { StepNumber } from 'lynn-ui';

export function Fills() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <StepNumber n={1} size="md" fill="gradient" color="electric-blue" />
      <StepNumber n={2} size="md" fill="tint" color="indigo" />
      <StepNumber n={3} size="md" fill="solid" color="emerald" />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <StepNumber n={1} size="xs" fill="tint" color="indigo" />
      <StepNumber n={2} size="sm" fill="tint" color="indigo" />
      <StepNumber n={3} size="md" fill="tint" color="indigo" />
      <StepNumber n={4} size="lg" fill="gradient" color="electric-blue" />
    </div>
  );
}

export function InlineNumberedList() {
  return (
    <ol style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', padding: 0, margin: 0 }}>
      <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <StepNumber n={1} size="sm" fill="tint" color="indigo" />
        Connect the design tokens
      </li>
      <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <StepNumber n={2} size="sm" fill="tint" color="indigo" />
        Port each component's usage doc
      </li>
      <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <StepNumber n={3} size="sm" fill="tint" color="indigo" />
        Capture and grade the previews
      </li>
    </ol>
  );
}
