import { LiquidFill, designTokens } from 'lynn-ui';

export function Default() {
  return (
    <div style={{ width: 400, height: 240 }}>
      <LiquidFill
        color={designTokens.color.accent.teal}
        count={48}
        style={{ width: '100%', height: '100%' }}
      >
        Hover to fill and slosh
      </LiquidFill>
    </div>
  );
}
