import { Box } from "@chakra-ui/react";

export type Corner = "tl" | "tr" | "bl" | "br";

interface CornerTicksProps {
  corners?: Corner[];
  size?: string;
  thickness?: string;
  color?: string;
  offset?: string;
  /** When true, ticks are hidden until the nearest [role=group] ancestor is hovered. */
  hoverOnly?: boolean;
}

const ALL_CORNERS: Corner[] = ["tl", "tr", "bl", "br"];

const CornerTicks = ({
  corners = ALL_CORNERS,
  size = "14px",
  thickness = "1px",
  color = "iris",
  offset = "0",
  hoverOnly = false,
}: CornerTicksProps) => (
  <>
    {corners.map((c) => {
      const isTop = c === "tl" || c === "tr";
      const isLeft = c === "tl" || c === "bl";
      return (
        <Box
          key={c}
          position="absolute"
          w={size}
          h={size}
          borderColor={color}
          borderStyle="solid"
          borderTopWidth={isTop ? thickness : "0"}
          borderBottomWidth={!isTop ? thickness : "0"}
          borderLeftWidth={isLeft ? thickness : "0"}
          borderRightWidth={!isLeft ? thickness : "0"}
          top={isTop ? offset : undefined}
          bottom={!isTop ? offset : undefined}
          left={isLeft ? offset : undefined}
          right={!isLeft ? offset : undefined}
          opacity={hoverOnly ? 0 : 1}
          transition={hoverOnly ? "opacity 0.25s ease" : undefined}
          css={
            hoverOnly ? { "[role=group]:hover &": { opacity: 1 } } : undefined
          }
          pointerEvents="none"
        />
      );
    })}
  </>
);

export default CornerTicks;
