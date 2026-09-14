import type { CSSProperties, ReactNode } from 'react';
export type SwitchSize = 'sm' | 'md';
export interface SwitchProps {
    checked: boolean;
    /** Called with the state the switch is moving to. */
    onChange: (checked: boolean) => void;
    /** Visible label, rendered after the track and clickable with it. */
    label?: ReactNode;
    disabled?: boolean;
    /** `md` - 36x20 track. `sm` - 28x16, for dense rows. */
    size?: SwitchSize;
    /**
     * `default` - the flat pill track that fills with blue when on.
     * `neumorphic` - a raised track (`--lynn-shadow-raised`) carrying an
     * extruded thumb, which takes a brief indent (`--lynn-shadow-pressed`) on
     * each toggle. One step larger at both sizes, since the shared shadow
     * tokens need surface area to read as extrusion.
     */
    variant?: 'default' | 'neumorphic';
    /** Accessible name, needed when there is no visible `label`. */
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
}
/**
 * A boolean on/off control.
 *
 * The one component here with no precedent on the website - the site has no
 * real form controls at all - so it is built from Lynn's own vocabulary: a
 * pill track that fills with the blue accent when on, a white thumb that
 * slides on `transform`, and the standard `--lynn-ease`.
 *
 * A real `role="switch"` button rather than a styled checkbox, so Space and
 * Enter both toggle it without a hidden input to keep in sync.
 *
 * Usage: controlled - `onChange` receives the state it is moving to, so
 * `onChange={setEnabled}` is the whole wiring. Prefer a visible `label`: it is
 * clickable along with the track and becomes the accessible name through
 * `aria-labelledby`, so you need no `ariaLabel` at all. `size="sm"` is for a
 * dense settings row; `variant="neumorphic"` renders one step larger at both
 * sizes because the shared shadow tokens need surface area to read as
 * extrusion.
 *
 * Don't: don't pass `label` and `ariaLabel` together unless you mean to
 * override - `ariaLabel` wins, and the visible text quietly stops being the
 * control's name, which is how a switch ends up announced as something other
 * than what it says. And don't use it for a destructive or expensive action:
 * it commits on the first click with no pending or confirming state.
 */
export declare function Switch(props: SwitchProps): import("react").JSX.Element;
