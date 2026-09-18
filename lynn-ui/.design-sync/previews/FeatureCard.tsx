import { FeatureCard, IconSparkles } from 'lynn-ui';

export function Full() {
  return (
    <FeatureCard
      icon={<IconSparkles size={22} />}
      iconGradient="linear-gradient(135deg, #6100ff, #b98fff)"
      name="lynn-ui"
      tagline="The design system as a real package"
      whyText="Because eight hand-rolled copies of the same callout is eight chances to drift."
      bullets={['Forty-odd components', 'Three theme modes', 'One stylesheet']}
      tags={['React', 'TypeScript']}
      status="Shipped"
      statusVariant="shipped"
      accentColor="#6100FF"
      density="full"
    />
  );
}

export function Compact() {
  return (
    <FeatureCard
      icon={<IconSparkles size={16} />}
      iconGradient="linear-gradient(135deg, #3694FC, #025AFB)"
      name="Frontend Audit"
      tagline="Read-only - Figma + Chrome"
      whyText="One score for design-system compliance and accessibility."
      tags={['Figma', 'Chrome']}
      accentColor="#3694FC"
      density="compact"
    />
  );
}

export function NoStatus() {
  return (
    <FeatureCard
      icon={<IconSparkles size={22} />}
      iconGradient="linear-gradient(135deg, #00E2A0, #36EAD0)"
      name="One token set"
      tagline="Every accent, spacing, and radius value in one place"
      whyText="Seven accents and one neutral scale, redefined per theme mode."
      accentColor="#00E2A0"
      density="full"
    />
  );
}
