import { ScrollArea } from 'lynn-ui';

const SECTIONS = [
  'Getting started',
  'Installation',
  'Theming',
  'Buttons',
  'Badges',
  'Cards',
  'Carousel',
  'Hero',
  'Motion & effects',
  'Forms',
  'Layout',
  'Icons',
];

export function Default() {
  return (
    <div
      style={{
        height: 240,
        width: 220,
        borderRadius: 14,
        border: '1px solid var(--lynn-color-border)',
        background: 'var(--lynn-color-bg)',
        padding: '4px 0',
      }}
    >
      <ScrollArea radius="14px" ariaLabel="Documentation sections">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '8px 16px' }}>
          {SECTIONS.map((section) => (
            <div key={section} style={{ padding: '6px 4px', color: 'var(--lynn-color-text)' }}>
              {section}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
