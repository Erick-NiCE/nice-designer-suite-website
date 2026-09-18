import { Timeline, Phase, RoadmapItemCard } from 'lynn-ui';
import { designTokens } from 'lynn-ui';

export function Active() {
  return (
    <Timeline>
      <Phase
        status="active"
        title="Phase 2 - the component package"
        period="Q3 2026"
        description="Every site pattern ported into lynn-ui, typed and themed."
        dependency="Phase 1 sign-off"
      >
        <RoadmapItemCard
          name="Playground docs"
          description="A registry-driven page with a live preview per component."
          status="Active"
          statusVariant="active"
          tags={['Docs', 'React']}
          accentColor={designTokens.color.accent.blue}
          highlight
        />
      </Phase>
    </Timeline>
  );
}

export function Shipped() {
  return (
    <Timeline>
      <Phase
        status="shipped"
        title="Phase 1 - the design tokens"
        period="Q2 2026"
        description="Color, spacing, radius and type scales, redefined per theme mode."
      >
        <RoadmapItemCard
          name="Token export"
          description="designTokens object mirrors every CSS custom property."
          status="Shipped"
          statusVariant="shipped"
          tags={['Tokens']}
          accentColor={designTokens.color.accent.emerald}
        />
      </Phase>
    </Timeline>
  );
}

export function FutureNoChildren() {
  return (
    <Timeline>
      <Phase
        status="future"
        title="Phase 4 - visual regression"
        period="2027"
        description="Screenshot diffing wired into CI for every merged PR."
      />
    </Timeline>
  );
}
