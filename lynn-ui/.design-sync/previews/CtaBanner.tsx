import { CtaBanner, IconArrowRight } from 'lynn-ui';

export function Gradient() {
  return (
    <CtaBanner
      text="Forty-odd components, three theme modes, one stylesheet."
      ctaLabel="Read the docs"
      ctaHref="#button"
      variant="gradient"
      ctaIcon={<IconArrowRight size={16} />}
    />
  );
}

export function Tinted() {
  return (
    <CtaBanner
      text="Browse the full component marketplace to see every pattern in one place."
      ctaLabel="Open the marketplace"
      ctaHref="#marketplace"
      variant="tinted"
    />
  );
}

export function GhostCta() {
  return (
    <CtaBanner
      text="Wings 2026 walks through the whole redesign, phase by phase."
      ctaLabel="Read the walkthrough"
      ctaHref="#wings-2026"
      variant="gradient"
      ctaVariant="ghost"
    />
  );
}
