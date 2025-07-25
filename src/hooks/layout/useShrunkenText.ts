import { shrunkText } from "@/utils/str";
import { useBreakpoint } from "@chakra-ui/react";

import { useCallback } from "react";

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

const maxLengths: BreakpointMap = {
  base: 20,
  sm: 40,
  md: 60,
  lg: 80,
  xl: 100,
  "2xl": 120,
};

const useShrunkenText = () => {
  const breakpoint = (useBreakpoint({ breakpoints }) ?? "base") as Breakpoint;

  const shrunkenText = useCallback(
    (breakpoint: Breakpoint) =>
      (text: string, options?: Partial<BreakpointMap>) => {
        const size = options ?? maxLengths;
        return shrunkText(text, size[breakpoint]);
      },
    [],
  );

  return shrunkenText(breakpoint);
};

export default useShrunkenText;
