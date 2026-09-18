import { Accordion, AccordionItem, Badge } from 'lynn-ui';

export function Open() {
  return (
    <Accordion>
      <AccordionItem
        id="item-open-preview"
        title="Why a package instead of copied CSS?"
        hint="3 reasons"
        defaultOpen
        persist={false}
      >
        Because a pattern copied eight times drifts eight ways.
      </AccordionItem>
    </Accordion>
  );
}

export function Collapsed() {
  return (
    <Accordion>
      <AccordionItem
        id="item-collapsed-preview"
        title="How does theming work?"
        defaultOpen={false}
        persist={false}
      >
        One data-lynn-theme attribute re-points the neutral tokens.
      </AccordionItem>
    </Accordion>
  );
}

export function WithActions() {
  return (
    <Accordion>
      <AccordionItem
        id="item-actions-preview"
        title="What counts as a breaking change?"
        hint="Versioning policy"
        actions={
          <Badge tone="teal" bordered>
            FAQ
          </Badge>
        }
        defaultOpen
        persist={false}
      >
        Removing a prop, renaming a class, or changing a default - anything
        that changes what already-shipped markup renders.
      </AccordionItem>
    </Accordion>
  );
}
