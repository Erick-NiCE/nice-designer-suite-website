import { ChangelogEntry } from 'lynn-ui';
import type { ChangelogGroup } from 'lynn-ui';

const groups: ChangelogGroup[] = [
  {
    label: 'Added',
    tone: 'emerald',
    items: ['Three-mode theming', 'Sheen, Sparkle and GlowPulse'],
  },
  {
    label: 'Changed',
    tone: 'blue',
    items: ['Badge covers every real site status'],
  },
];

export function Latest() {
  return (
    <ChangelogEntry
      version="v11.5"
      date="September 2026"
      isLatest
      groups={groups}
      id="release-v11-5"
    />
  );
}

export function OlderCollapsed() {
  return (
    <ChangelogEntry
      version="v11.4"
      date="August 2026"
      groups={[
        {
          label: 'Fixed',
          tone: 'coral',
          items: ['Nav CTA slot no longer clips on narrow viewports'],
        },
      ]}
      id="release-v11-4"
    />
  );
}

export function OlderExpanded() {
  return (
    <ChangelogEntry
      version="v11.3"
      date="July 2026"
      defaultOpen
      groups={[
        {
          label: 'Improved',
          tone: 'emerald',
          items: ['Accordion header hint reads on hover and on focus'],
        },
        {
          label: 'New features',
          tone: 'blue',
          items: ['Timeline phases support a Requires: dependency chip'],
        },
      ]}
      id="release-v11-3"
    />
  );
}
