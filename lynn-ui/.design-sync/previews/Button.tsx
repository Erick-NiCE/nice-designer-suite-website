import { Button, IconArrowRight } from 'lynn-ui';

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Get started</Button>
      <Button variant="secondary">Learn more</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  );
}

export function WithIcon() {
  return (
    <Button variant="primary" icon={<IconArrowRight size={16} />}>
      Continue
    </Button>
  );
}

export function States() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" disabled>
        Disabled
      </Button>
      <Button variant="primary" loading>
        Saving
      </Button>
    </div>
  );
}

export function AsLink() {
  return (
    <Button variant="secondary" href="#" target="_blank" rel="noopener">
      Read the docs
    </Button>
  );
}
