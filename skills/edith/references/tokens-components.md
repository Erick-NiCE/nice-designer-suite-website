# Lyra Components

**This file does not duplicate the component inventory.** The canonical, fully-detailed list of every Lyra component and its variant props lives in `lyra-component-classifier` — sections *Forms & Inputs, Navigation, Containers, Overlays,* and onward. It is richer than anything that would be maintained here (exact variant axes, internal `_` sub-components, disambiguation notes like Modal Dialog vs Modal Message), so read it there.

What this file owns: the **rules for using** those components during a build.

## Usage rules

1. **If a component exists for the element, import the instance — never hand-build it.** Instances carry their own internal token bindings; you don't rebind those, you only set variant props.
2. **Search for the component set, then select the variant by prop.** Don't import a specific variant node directly when a set exists.
3. **Set variant props explicitly** (`Type=Primary`, `State=Default`) rather than accepting the set's default.
4. **Never reach for an internal sub-component.** Anything prefixed `_` (`_button/base`, `_input/size`, `_Menu/menu item`, etc.) is a building block used *inside* a parent. Always use the parent.
5. **If a needed state isn't in the variant list** (e.g. a "loading" button), don't hand-draw a fake one — flag it to the user as a gap in Lyra.
6. **A custom container may legitimately contain Lyra instances** — a bespoke card holding a Lyra `Button`. Build the container, import the button.
7. **If a classifier marked something ✅ Lyra-ready and you're hand-building it, stop.** Either the row was miscategorised or you're on the wrong row.

## Icons

Icon primitives live under `control/*` and `system/*`.

## Key resolution

Component keys are per-library-version. Resolve them per file via `search_design_system` scoped to the Lyra `libraryKey` — never hardcode.
