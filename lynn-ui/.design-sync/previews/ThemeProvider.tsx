import { ThemeProvider, Badge } from 'lynn-ui';

export function NestedTheming() {
  return (
    <ThemeProvider defaultTheme="lynn">
      <Badge tone="lynn">Themed content</Badge>
    </ThemeProvider>
  );
}
