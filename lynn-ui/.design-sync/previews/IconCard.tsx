import { IconCard, IconSpark, Badge } from 'lynn-ui';

export function VerticalWithFooter() {
  return (
    <IconCard
      icon={<IconSpark size={20} />}
      title="One token set"
      description="Seven accents and one neutral scale, redefined per theme mode and read by every component."
      layout="vertical"
      footer={
        <Badge tone="emerald" bordered>
          Stable
        </Badge>
      }
    />
  );
}

export function HorizontalRow() {
  return (
    <IconCard
      icon={<IconSpark size={20} />}
      title="Consolidated primitives"
      description="Six near-duplicate cards from across the site, resolved to one component."
      layout="horizontal"
    />
  );
}

export function VerticalNoFooter() {
  return (
    <IconCard
      icon={<IconSpark size={20} />}
      title="Zero-dependency motion"
      description="Every animated component self-disables under prefers-reduced-motion."
      layout="vertical"
    />
  );
}
