import { Sparkle, Badge, IconBolt } from 'lynn-ui';

export function Default() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Sparkle />
      <Badge tone="lynn" icon={<IconBolt size={12} />}>
        Superpowers
      </Badge>
    </div>
  );
}
