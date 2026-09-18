import { Lightning, designTokens } from 'lynn-ui';

export function Default() {
  return (
    <div style={{ width: 400, height: 240 }}>
      <Lightning
        color={designTokens.color.accent.blue}
        motes={54}
        followPointer
        style={{ width: '100%', height: '100%' }}
      >
        Move the pointer across the plasma
      </Lightning>
    </div>
  );
}
