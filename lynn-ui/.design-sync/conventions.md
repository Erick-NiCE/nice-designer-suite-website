## Wrapping and setup

Every component needs a `ThemeProvider` ancestor, or theming context is inert and `useLynnTheme()` silently reports the `lynn` default with no way to change it. `ThemeProvider` itself renders the actual styled root (a `div.lynn-root` carrying the background, text color and font) — don't add your own wrapper div for that, just mount the provider at the top of the tree:

```jsx
import 'lynn-ui/dist/lynn-ui.css';
import { ThemeProvider, ThemeToggle, ToastViewport } from 'lynn-ui';

export function App({ children }) {
  return (
    <ThemeProvider defaultTheme="lynn">
      {children}
      <ToastViewport />
    </ThemeProvider>
  );
}
```

Mount exactly one `ToastViewport` at the root if you use `CopyButton` or call `useToast()` anywhere — both report success/failure only through it, and there is no fallback. `Nav`, `DocRail`, and `AccessGate` are `position: fixed` by design (a sticky top bar, a fixed side rail, a full-viewport overlay) — expect them to escape normal document flow rather than sizing to a parent container.

## The styling idiom: CSS custom properties, not utility classes

Lynn is a token system. Components style themselves internally from `--lynn-*` custom properties — you never write a `lynn-*` class by hand, and there is no utility-class vocabulary to memorize. What you DO control is props: `tone`/`accent`/`status` pick a color from the token set, `size` picks a spacing/type step, `variant` picks a shape family. The three theme modes (`light`, `dark`, `lynn` — the default) are switched by `ThemeProvider`'s `defaultTheme` prop or live via `ThemeToggle`; they re-point the neutral tokens (`--lynn-color-bg/-surface/-card/-text/-text-secondary/-text-muted/-border`) automatically — never hardcode a hex value where a neutral token belongs, or it goes stale the moment someone switches themes.

The seven real accent names (used as `tone="…"` / `accentColor` on `Badge`, `Card`, `FeatureCard`, `IconCard`, `Tabs`, and others) are mode-invariant — identical hex in all three themes:

| Accent | Token | Hex |
|---|---|---|
| `blue` | `--lynn-color-blue` | `#3694fc` |
| `electric-blue` | `--lynn-color-electric-blue` | `#025afb` |
| `indigo` | `--lynn-color-indigo` | `#6100ff` |
| `emerald` | `--lynn-color-emerald` | `#00e2a0` |
| `teal` | `--lynn-color-teal` | `#36ead0` |
| `coral` | `--lynn-color-coral` | `#ff5b8a` |
| `lynn` | `--lynn-color-lynn` | `#b98fff` |

Radius scale (`--lynn-radius-{none,xs,sm,md,lg,xl,pill}` → `0/4/8/12/16/24/100px`) and spacing scale (`--lynn-space-{none,xs,sm,md,lg,xl,2xl,3xl,4xl,5xl,6xl}` → `0/4/8/12/16/24/32/48/64/80/96px`) follow the same rule: components already apply them internally per their own density/size props (e.g. `FeatureCard`'s `density="compact"|"full"`) — reach for a raw `var(--lynn-radius-lg)` only in glue code between components (e.g. sizing a wrapper to match a `Card`'s own corner so an effect like `Sheen` clips correctly), never to invent a new visual size a prop doesn't already offer.

Status pills specifically: `Badge` takes either `tone` (any accent, generic) or `status` (one of `active/shipped/next/planned/new/dropped/great/good/ok/bad/beta/recommended/optional` — hand-tuned per-status colors) — `status` wins if both are set, so never pass both meaning to combine them.

## Where the truth lives

- `dist/lynn-ui.css` (bound here as `styles.css`'s import closure) — every token and every component's real CSS. Read this before styling anything by hand.
- Each component's own `<Name>.prompt.md` — real usage/don't-do guidance pulled from its source JSDoc, including the specific composition mistakes this package has already hit once (e.g. `Sparkle` must sit *beside* content, not wrap it; `GlowPulse` wraps a pill-shaped element, not a square-cornered one; `Sheen` clips to `--lynn-radius-lg` so it belongs on a `Card`).

## A real, verified build snippet

```jsx
import { Badge, Button, Card, IconBolt } from 'lynn-ui';

function ExampleCard() {
  return (
    <Card variant="solid" accent="lynn" interactive>
      <Badge tone="lynn" icon={<IconBolt size={12} />}>
        Superpowers
      </Badge>
      <p>Move the pointer across this card — it tilts toward the cursor.</p>
      <Button variant="primary">Get started</Button>
    </Card>
  );
}
```
