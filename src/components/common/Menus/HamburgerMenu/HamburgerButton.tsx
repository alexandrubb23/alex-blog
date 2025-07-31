import { useColorMode } from "@/components/ui/color-mode";
import { Box } from "@chakra-ui/react";

import { CSSProperties } from "react";

const HamburgerButton = ({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const { isDark } = useColorMode();

  const commonBarStyle: CSSProperties = {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: isDark ? "gray.400" : "var(--foreground-color)",
    borderRadius: "var(--bar-height)",
    boxSizing: "border-box",
    height: "var(--bar-height)",
    width: "var(--bar-width)",
    transition:
      "opacity var(--animation-timing), width var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing), background-color var(--animation-timing)",
    transformOrigin: "right center",
  };

  return (
    <Box
      as="label"
      position="relative"
      display="block"
      width="var(--bar-width)"
      height="var(--hamburger-height)"
      right="var(--hamburger-margin)"
      zIndex={9999}
      cursor="pointer"
      pointerEvents="all"
      css={{
        "--x-width": "calc(var(--hamburger-height) * 1.41421356237)",
        "&::before": {
          ...commonBarStyle,
          ...(isOpen && {
            rotate: "-45deg",
            width: "var(--x-width)",
            translate: "0 calc(var(--bar-height) / -2)",
          }),
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "0",
          left: "0",
          backgroundColor: isDark ? "gray.400" : "var(--foreground-color)",
          borderRadius: "var(--bar-height)",
          boxSizing: "border-box",
          height: "var(--bar-height)",
          width: "var(--bar-width)",
          transition:
            "opacity var(--animation-timing), width var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing), background-color var(--animation-timing)",
          transformOrigin: "right center",
          ...(isOpen && {
            rotate: "45deg",
            translate: "0 calc(var(--bar-height) / 2)",
            width: "var(--x-width)",
          }),
        },
        "& input": {
          position: "absolute",
          top: "calc(var(--bar-height) + var(--hamburger-gap))",
          left: "0",
          backgroundColor: isDark ? "gray.400" : "var(--foreground-color)",
          borderRadius: "var(--bar-height)",
          boxSizing: "border-box",
          height: "var(--bar-height)",
          width: "var(--bar-width)",
          transition:
            "opacity var(--animation-timing), width var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing), background-color var(--animation-timing)",
          transformOrigin: "right center",
          appearance: "none",
          margin: 0,
          opacity: isOpen ? 0 : 1,
          outline: "none",
          padding: 0,
          border: "none",
        },
      }}
    >
      <input type="checkbox" onChange={onToggle} />
    </Box>
  );
};

export default HamburgerButton;
