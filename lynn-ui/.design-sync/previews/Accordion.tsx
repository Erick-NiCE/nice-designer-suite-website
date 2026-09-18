import { Accordion, AccordionItem, Badge } from 'lynn-ui';

export function FaqDefault() {
  return (
    <Accordion>
      <AccordionItem
        id="why-preview"
        title="Why a package instead of copied CSS?"
        hint="3 reasons"
        defaultOpen
        persist={false}
      >
        Because a pattern copied eight times drifts eight ways.
      </AccordionItem>
      <AccordionItem
        id="theming-preview"
        title="How does theming work?"
        defaultOpen={false}
        persist={false}
      >
        One data-lynn-theme attribute re-points the neutral tokens.
      </AccordionItem>
      <AccordionItem
        id="support-preview"
        title="Which browsers are supported?"
        defaultOpen={false}
        persist={false}
      >
        Every evergreen browser - the CSS relies on custom properties and
        nothing newer.
      </AccordionItem>
    </Accordion>
  );
}

export function WithHeaderActions() {
  return (
    <Accordion>
      <AccordionItem
        id="faq-actions"
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
      <AccordionItem
        id="release-cadence"
        title="How often does lynn-ui release?"
        defaultOpen={false}
        persist={false}
      >
        Roughly monthly, alongside the marketing site's own release notes.
      </AccordionItem>
    </Accordion>
  );
}
