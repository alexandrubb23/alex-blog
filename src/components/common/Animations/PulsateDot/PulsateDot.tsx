import { Box, BoxProps } from "@chakra-ui/react";

interface PulsateDotProps extends Omit<BoxProps, "as"> {
  shape?: "circle" | "square";
}

const PulsateDot = ({ shape = "circle", ...props }: PulsateDotProps) => (
  <Box
    as="span"
    w="6px"
    h="6px"
    bg="signal"
    display="inline-block"
    flexShrink={0}
    borderRadius={shape === "circle" ? "full" : undefined}
    style={{ animation: "pulsate-dot 1.5s ease-in-out infinite" }}
    {...props}
  />
);

export default PulsateDot;
