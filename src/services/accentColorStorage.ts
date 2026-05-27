import { AccentColor } from "@/lib/palette";

const STORAGE_KEY = "accent-color";
const DEFAULT = AccentColor.Purple;

export const accentColorStorage = {
  DEFAULT,

  get(): AccentColor {
    if (typeof window === "undefined") return DEFAULT;
    return (localStorage.getItem(STORAGE_KEY) as AccentColor | null) ?? DEFAULT;
  },

  set(color: AccentColor): void {
    localStorage.setItem(STORAGE_KEY, color);
  },
};
