import { Float, Badge, IconSparkles } from 'lynn-ui';

export function Default() {
  return (
    <Float distance={8} duration={6}>
      <Badge tone="lynn" icon={<IconSparkles size={12} />}>
        Floating
      </Badge>
    </Float>
  );
}
