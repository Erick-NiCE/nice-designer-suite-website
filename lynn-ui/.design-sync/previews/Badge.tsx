import { Badge, IconBolt } from 'lynn-ui';

export function Accents() {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Badge tone="blue">Blue</Badge>
      <Badge tone="indigo">Indigo</Badge>
      <Badge tone="emerald">Emerald</Badge>
      <Badge tone="teal">Teal</Badge>
      <Badge tone="coral">Coral</Badge>
      <Badge tone="lynn">Lynn</Badge>
    </div>
  );
}

export function Statuses() {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Badge status="active">Active</Badge>
      <Badge status="shipped">Shipped</Badge>
      <Badge status="next">Next</Badge>
      <Badge status="planned">Planned</Badge>
      <Badge status="new">New</Badge>
      <Badge status="dropped">Dropped</Badge>
    </div>
  );
}

export function ScoreGrades() {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Badge status="great">Great</Badge>
      <Badge status="good">Good</Badge>
      <Badge status="ok">Ok</Badge>
      <Badge status="bad">Bad</Badge>
    </div>
  );
}

export function BorderedWithIcon() {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Badge tone="lynn" bordered icon={<IconBolt size={12} />}>
        Superpowers
      </Badge>
      <Badge tone="emerald" bordered>
        Stable
      </Badge>
    </div>
  );
}
