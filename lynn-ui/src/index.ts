/**
 * lynn-ui - React components for Lynn, the NiCE Designer Suite's own dark,
 * gradient- and motion-driven design system.
 *
 * The public surface is the PascalCase components plus `designTokens`, the
 * `ThemeProvider` trio and the accompanying types. The motion `use*` hooks
 * are internal implementation detail and are deliberately not re-exported:
 * every behavior they provide is already reachable through a component prop
 * (`Button.magnetic`, `Card.interactive`, `Nav.autoHide`, `Reveal.index`,
 * `CursorGlow.enabled`).
 *
 * `useToast` and `useLynnTheme` are the two deliberate camelCase exceptions -
 * showing a toast and reading the active theme have no component-prop
 * equivalent, so a hook is the whole API rather than a shortcut past one.
 *
 * Stylesheet: import `lynn-ui/dist/lynn-ui.css` once, at the app root.
 */

/* ---------- tokens ---------- */
export { designTokens } from './tokens/tokens.js';
export type { AccentColor, DesignTokens } from './tokens/tokens.js';

/* ---------- icons ---------- */
export {
  IconLock,
  IconBolt,
  IconSparkles,
  IconBulb,
  IconCheck,
  IconArrowRight,
  IconChevronUp,
  IconChevronDown,
  IconArrowsSort,
  IconClipboard,
  IconEye,
  IconEyeOff,
  IconSun,
  IconMoon,
  IconNiceSmile,
  IconSpark,
} from './icons/icons.js';
export type { IconProps } from './icons/icons.js';

/* ---------- theme ---------- */
export { ThemeProvider, useLynnTheme } from './theme/ThemeProvider.js';
export type {
  ThemeProviderProps,
  LynnTheme,
  LynnThemeContextValue,
} from './theme/ThemeProvider.js';

export { ThemeToggle } from './theme/ThemeToggle.js';
export type { ThemeToggleProps } from './theme/ThemeToggle.js';

/* ---------- components ---------- */
export { AccessGate } from './components/AccessGate/AccessGate.js';
export type { AccessGateProps } from './components/AccessGate/AccessGate.js';

export { Accordion, AccordionItem } from './components/Accordion/Accordion.js';
export type {
  AccordionProps,
  AccordionItemProps,
} from './components/Accordion/Accordion.js';

export { Alert } from './components/Alert/Alert.js';
export type { AlertProps, AlertVariant } from './components/Alert/Alert.js';

export { Avatar } from './components/Avatar/Avatar.js';
export type { AvatarProps, AvatarSize } from './components/Avatar/Avatar.js';

export { Badge } from './components/Badge/Badge.js';
export type { BadgeProps, BadgeStatus } from './components/Badge/Badge.js';

export { Button } from './components/Button/Button.js';
export type { ButtonProps, ButtonVariant } from './components/Button/Button.js';

export { Card } from './components/Card/Card.js';
export type { CardProps, CardVariant } from './components/Card/Card.js';

export { Carousel } from './components/Carousel/Carousel.js';
export type {
  CarouselProps,
  CarouselSlide,
} from './components/Carousel/Carousel.js';

export { ChangelogEntry } from './components/ChangelogEntry/ChangelogEntry.js';
export type {
  ChangelogEntryProps,
  ChangelogGroup,
} from './components/ChangelogEntry/ChangelogEntry.js';

export { CodeBlock, InlineCode } from './components/CodeBlock/CodeBlock.js';
export type {
  CodeBlockProps,
  InlineCodeProps,
} from './components/CodeBlock/CodeBlock.js';

export { CopyButton } from './components/CopyButton/CopyButton.js';
export type { CopyButtonProps } from './components/CopyButton/CopyButton.js';

export { CtaBanner } from './components/CtaBanner/CtaBanner.js';
export type {
  CtaBannerProps,
  CtaBannerVariant,
} from './components/CtaBanner/CtaBanner.js';

export { CursorGlow } from './components/CursorGlow/CursorGlow.js';
export type { CursorGlowProps } from './components/CursorGlow/CursorGlow.js';

export { DataTable } from './components/DataTable/DataTable.js';
export type {
  DataTableProps,
  DataTableColumn,
  DataTableRow,
  DataTableSort,
  DataTableAlign,
  SortDirection,
} from './components/DataTable/DataTable.js';

export { DocRail } from './components/DocRail/DocRail.js';
export type {
  DocRailProps,
  DocRailMode,
  DocRailPage,
  DocRailGroup,
  DocRailItem,
} from './components/DocRail/DocRail.js';

export { Dropdown } from './components/Dropdown/Dropdown.js';
export type {
  DropdownProps,
  DropdownOption,
} from './components/Dropdown/Dropdown.js';

export { FeatureCard } from './components/FeatureCard/FeatureCard.js';
export type {
  FeatureCardProps,
  FeatureCardDensity,
} from './components/FeatureCard/FeatureCard.js';

export { FeaturePanel } from './components/FeaturePanel/FeaturePanel.js';
export type {
  FeaturePanelProps,
  FeaturePanelAction,
} from './components/FeaturePanel/FeaturePanel.js';

export { Float } from './components/Float/Float.js';
export type { FloatProps } from './components/Float/Float.js';

export { Footer } from './components/Footer/Footer.js';
export type {
  FooterProps,
  FooterColumn,
  FooterLink,
} from './components/Footer/Footer.js';

export { GaugeRing } from './components/GaugeRing/GaugeRing.js';
export type { GaugeRingProps } from './components/GaugeRing/GaugeRing.js';

export { GradientBackground } from './components/GradientBackground/GradientBackground.js';
export type {
  GradientBackgroundProps,
  GradientAnimation,
} from './components/GradientBackground/GradientBackground.js';

export { GlowPulse } from './components/GlowPulse/GlowPulse.js';
export type { GlowPulseProps } from './components/GlowPulse/GlowPulse.js';

export { Hero } from './components/Hero/Hero.js';
export type { HeroProps } from './components/Hero/Hero.js';

export { IconCard } from './components/IconCard/IconCard.js';
export type {
  IconCardProps,
  IconCardLayout,
} from './components/IconCard/IconCard.js';

export { Legend } from './components/Legend/Legend.js';
export type {
  LegendProps,
  LegendItem,
  LegendVariant,
} from './components/Legend/Legend.js';

export { Lightning } from './components/Lightning/Lightning.js';
export type { LightningProps } from './components/Lightning/Lightning.js';

export { LiquidFill } from './components/LiquidFill/LiquidFill.js';
export type { LiquidFillProps } from './components/LiquidFill/LiquidFill.js';

export { Nav } from './components/Nav/Nav.js';
export type { NavProps } from './components/Nav/Nav.js';

export { ProgressBar } from './components/ProgressBar/ProgressBar.js';
export type { ProgressBarProps } from './components/ProgressBar/ProgressBar.js';

export { PulseDot } from './components/PulseDot/PulseDot.js';
export type { PulseDotProps } from './components/PulseDot/PulseDot.js';

export { Reveal } from './components/Reveal/Reveal.js';
export type { RevealProps } from './components/Reveal/Reveal.js';

export { ScrollArea } from './components/ScrollArea/ScrollArea.js';
export type {
  ScrollAreaProps,
  ScrollAreaOrientation,
} from './components/ScrollArea/ScrollArea.js';

export { SearchInput } from './components/SearchInput/SearchInput.js';
export type { SearchInputProps } from './components/SearchInput/SearchInput.js';

export { Sheen } from './components/Sheen/Sheen.js';
export type { SheenProps } from './components/Sheen/Sheen.js';

export { ShimmerText } from './components/ShimmerText/ShimmerText.js';
export type {
  ShimmerTextProps,
  ShimmerTextTag,
} from './components/ShimmerText/ShimmerText.js';

export { Skeleton } from './components/Skeleton/Skeleton.js';
export type { SkeletonProps } from './components/Skeleton/Skeleton.js';

export { Sparkle } from './components/Sparkle/Sparkle.js';
export type { SparkleProps } from './components/Sparkle/Sparkle.js';

export { Spinner } from './components/Spinner/Spinner.js';
export type {
  SpinnerProps,
  SpinnerSize,
  SpinnerTone,
} from './components/Spinner/Spinner.js';

export { StepNumber } from './components/StepNumber/StepNumber.js';
export type {
  StepNumberProps,
  StepNumberSize,
  StepNumberFill,
} from './components/StepNumber/StepNumber.js';

export { Stepper } from './components/Stepper/Stepper.js';
export type {
  StepperProps,
  StepperStep,
  StepperOrientation,
} from './components/Stepper/Stepper.js';

export { Switch } from './components/Switch/Switch.js';
export type { SwitchProps, SwitchSize } from './components/Switch/Switch.js';

export { TabPanel, TabPanels } from './components/TabPanels/TabPanels.js';
export type {
  TabPanelsProps,
  TabPanelsTab,
  TabPanelProps,
} from './components/TabPanels/TabPanels.js';

export { Tabs } from './components/Tabs/Tabs.js';
export type {
  TabsProps,
  TabsVariant,
  TabsSemantics,
  TabOption,
} from './components/Tabs/Tabs.js';

export { TextField } from './components/TextField/TextField.js';
export type { TextFieldProps } from './components/TextField/TextField.js';

export { Phase, RoadmapItemCard, Timeline } from './components/Timeline/Timeline.js';
export type {
  TimelineProps,
  PhaseProps,
  PhaseStatus,
  RoadmapItemCardProps,
  RoadmapGate,
} from './components/Timeline/Timeline.js';

export { ToastViewport, useToast } from './components/Toast/Toast.js';
export type {
  ToastViewportProps,
  ToastControls,
  ToastAction,
  ToastKind,
  ToastState,
} from './components/Toast/Toast.js';

export { Tooltip } from './components/Tooltip/Tooltip.js';
export type { TooltipProps, TooltipSide } from './components/Tooltip/Tooltip.js';
