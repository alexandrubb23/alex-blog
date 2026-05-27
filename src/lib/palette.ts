/**
 * Accent color token names — match the `data-accent` attribute values and CSS
 * custom-property suffixes used in global.css.
 */
export enum AccentColor {
  Purple = "purple",
  Cyan = "cyan",
  Amber = "amber",
  Green = "green",
}

/** Hex values used for the color-picker dots (vibrant / dark-mode palette). */
export const ACCENT_HEX: Record<AccentColor, string> = {
  [AccentColor.Purple]: "#8B5CF6",
  [AccentColor.Cyan]: "#06b6d4",
  [AccentColor.Amber]: "#f59e0b",
  [AccentColor.Green]: "#10b981",
};
