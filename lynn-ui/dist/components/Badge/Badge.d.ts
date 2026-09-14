import type { CSSProperties, ReactNode } from 'react';
import type { AccentColor } from '../../tokens/tokens.js';
/**
 * Every status a badge can carry, in three families:
 *
 *   - the six bespoke roadmap statuses, ported verbatim from roadmap.html;
 *   - the four score grades used by the audit/scoring surfaces, which need
 *     their own descending ramp rather than a caller-picked `tone`;
 *   - the three lifecycle/emphasis pills (`beta`, `recommended`, `optional`).
 *
 * They share one union because they share one behavior: a status carries its
 * own hand-tuned background/foreground pair and therefore overrides `tone`.
 */
export type BadgeStatus = 'active' | 'shipped' | 'next' | 'planned' | 'new' | 'dropped' | 'great' | 'good' | 'ok' | 'bad' | 'beta' | 'recommended' | 'optional';
export interface BadgeProps {
    /** Badge label. */
    children: ReactNode;
    /**
     * Tinted pill in one of Lynn's seven accents, at 14% background opacity.
     * Ignored when `status` is set.
     */
    tone?: AccentColor;
    /**
     * One of the status pills. These carry their own hand-tuned
     * background/foreground pairs (e.g. `active` is a lightened `#6ab4ff` on
     * 20% blue, not the flat `tone="blue"` pair), so a status badge
     * deliberately overrides `tone`.
     */
    status?: BadgeStatus;
    /**
     * Adds the 20%-opacity accent border used by the Figma / Chrome / both
     * target-badge family on tools.html. Those badges are otherwise identical
     * to `tone="blue" | "emerald" | "teal"`, which is why they need no
     * separate variant.
     */
    bordered?: boolean;
    /**
     * Leading glyph. The system convention is a `lynn`-tinted bolt icon on
     * every Superpowers/MCP-only feature:
     * `<Badge tone="lynn" icon={<IconBolt />}>`.
     */
    icon?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
/**
 * A Lynn pill badge.
 *
 * `<Badge>Beta</Badge>` alone is a complete blue-tinted pill.
 *
 * Usage: reach for `status` when the label is one of the thirteen real site
 * states (roadmap phases, score grades, lifecycle pills) and `tone` for
 * anything else. `bordered` adds the 20%-accent outline the Figma / Chrome /
 * both target badges use. The system convention for a Superpowers/MCP-only
 * feature is `tone="lynn"` with `icon={<IconBolt />}`.
 *
 * Don't: don't pass `status` and `tone` together - `status` wins and both
 * `tone` and `bordered` are dropped on the floor, so the badge you get is not
 * the one you wrote. And don't invent a status by passing an accent that
 * "looks right": the thirteen pairs are hand-tuned and are what the legends
 * elsewhere on a page are explaining.
 */
export declare function Badge(props: BadgeProps): import("react").JSX.Element;
