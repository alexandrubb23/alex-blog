import { useBreakpoint } from "@chakra-ui/react";
import { useCallback } from "react";

import { shrunkText } from "@/utils/str";

type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
type BreakpointMap = Record<Breakpoint, number>;

const breakpoints = [
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
] satisfies Breakpoint[];

const defaultMaxLengths: BreakpointMap = {
  base: 20,
  sm: 40,
  md: 60,
  lg: 80,
  xl: 100,
  "2xl": 120,
};

const useShrunkenText = () => {
  const breakpoint = (useBreakpoint({ breakpoints }) ?? "base") as Breakpoint;

  const shrink = useCallback(
    (text: string, overrides?: Partial<BreakpointMap>) => {
      const sizes = { ...defaultMaxLengths, ...overrides };
      return shrunkText(text, sizes[breakpoint]);
    },
    [breakpoint],
  );

  return shrink;
};

export default useShrunkenText;
