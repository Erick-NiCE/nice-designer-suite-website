import { Timeline, Phase, RoadmapItemCard } from 'lynn-ui';
import { designTokens } from 'lynn-ui';

export function ActivePhase() {
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

export function FullRoadmap() {
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
          people={['EM']}
          accentColor={designTokens.color.accent.blue}
          highlight
        />
      </Phase>
      <Phase
        status="next"
        title="Phase 3 - Claude Design sync"
        period="Q4 2026"
        description="Import every component into a shared Claude Design project."
        dependency="Phase 2 component freeze"
      >
        <RoadmapItemCard
          name="Design-sync run"
          description="Preview cards for each component, graded and iterated."
          status="Next"
          statusVariant="next"
          tags={['Design']}
          accentColor={designTokens.color.accent.indigo}
        />
      </Phase>
      <Phase
        status="future"
        title="Phase 4 - visual regression"
        period="2027"
        description="Screenshot diffing wired into CI for every merged PR."
      />
    </Timeline>
  );
}
