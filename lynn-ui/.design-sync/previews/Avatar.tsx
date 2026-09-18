import { Avatar } from 'lynn-ui';

export function Sizes() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Avatar initials="EM" size="xs" ariaLabel="Erick Mathews" />
      <Avatar initials="EM" size="sm" ariaLabel="Erick Mathews" />
      <Avatar initials="EM" size="lg" ariaLabel="Erick Mathews" gradient />
    </div>
  );
}

export function AssigneeStack() {
  return (
    <div style={{ display: 'flex', marginLeft: 4 }}>
      <Avatar initials="EM" size="sm" ariaLabel="Erick Mathews" style={{ marginLeft: -4 }} />
      <Avatar initials="JD" size="sm" ariaLabel="Jamie Davis" style={{ marginLeft: -4 }} />
      <Avatar initials="RK" size="sm" ariaLabel="Ravi Kumar" style={{ marginLeft: -4 }} />
    </div>
  );
}

export function FlatVsGradient() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Avatar initials="EM" size="lg" gradient={false} ariaLabel="Erick Mathews" />
      <Avatar initials="EM" size="lg" gradient ariaLabel="Erick Mathews" />
    </div>
  );
}
