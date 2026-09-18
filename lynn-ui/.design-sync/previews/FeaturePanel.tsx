import { FeaturePanel } from 'lynn-ui';

export function TwoActions() {
  return (
    <FeaturePanel
      badge="Wings 2026"
      heading="A design system you can actually import"
      body="Every pattern on the marketing site, ported once, typed and documented here."
      accentGradient="linear-gradient(90deg, #3694FC, #6100FF, #00E2A0)"
      actions={[
        { label: 'Get started', href: '#button' },
        { label: 'Tokens', href: '#tokens-colors', variant: 'secondary' },
      ]}
    />
  );
}

export function SingleAction() {
  return (
    <FeaturePanel
      heading="One stylesheet, three theme modes"
      body="Flip data-lynn-theme and the whole neutral scale re-points itself, live."
      accentGradient="linear-gradient(90deg, #00E2A0, #36EAD0)"
      actions={[{ label: 'Get started', href: '#button' }]}
    />
  );
}

export function NoBadgeWithChildren() {
  return (
    <FeaturePanel
      heading="Copy-ready code beside every preview"
      body="Each component ships a real usage snippet, not a placeholder."
      accentGradient="linear-gradient(90deg, #B98FFF, #36EAD0)"
      actions={[
        { label: 'View source', href: '#code-block' },
        { label: 'Copy import', href: '#copy-button', variant: 'secondary' },
      ]}
    >
      <p style={{ marginTop: 12, opacity: 0.8 }}>
        Step 3 of 4 - wire the copy button to a mounted ToastViewport.
      </p>
    </FeaturePanel>
  );
}
