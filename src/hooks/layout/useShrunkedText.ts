import { useBreakpoint } from "@chakra-ui/react";

import { shrunkText } from "@/utils/str";
import { useMemo } from "react";

type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

const breakpoints = [
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
] satisfies Breakpoint[];

const maxLengths: Record<Breakpoint, number> = {
  base: 20,
  sm: 40,
  md: 60,
  lg: 80,
  xl: 100,
  "2xl": 120,
};

const useShrunkedText = (text: string) => {
  const breakpoint = (useBreakpoint({ breakpoints }) ?? "base") as Breakpoint;

  const sizes = useMemo(() => {
    return breakpoints.reduce(
      (acc, b) => {
        const maxLength = maxLengths[b];
        acc[b] = text.length > maxLength ? shrunkText(text, maxLength) : text;
        return acc;
      },
      {} as Record<Breakpoint, string>,
    );
  }, [text, breakpoints]);

  return sizes[breakpoint];
};

export default useShrunkedText;
