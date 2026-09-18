import { InlineCode } from 'lynn-ui';

export function CustomProperty() {
  return (
    <p>
      Theming re-points the neutral scale by flipping a single
      {' '}
      <InlineCode>--lynn-color-bg</InlineCode> custom property.
    </p>
  );
}

export function PropName() {
  return (
    <p>
      Pass <InlineCode>defaultSort</InlineCode> to seed the table's initial
      order - it only ever applies once, on mount.
    </p>
  );
}

export function CommandAndPath() {
  return (
    <p>
      Run <InlineCode>npm install lynn-ui</InlineCode>, then import styles
      from <InlineCode>lynn-ui/dist/lynn-ui.css</InlineCode>.
    </p>
  );
}
