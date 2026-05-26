import { defineRecipe } from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  base: {
    alignItems: "center",
    borderRadius: "2px",
    cursor: "pointer",
    display: "inline-flex",
    gap: "10px",
    justifyContent: "center",
    fontFamily: "mono",
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    fontSize: "12px",
    transition:
      "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
    border: "1px solid transparent",
    position: "relative",
  },
  variants: {
    visual: {
      solidPurple: {
        bg: "iris",
        color: "graphite",
        borderColor: "iris",
        _hover: {
          bg: "irisSoft",
          borderColor: "irisSoft",
          boxShadow: {
            base: "0 0 0 1px var(--iris-soft)",
            _dark:
              "0 0 0 1px var(--iris-soft), 0 0 24px -4px rgba(139,92,246,0.55)",
          },
        },
      },
      solidWhite: {
        bg: "bone",
        color: "graphite",
        borderColor: "bone",
        _hover: {
          bg: "iris",
          color: "graphite",
          borderColor: "iris",
          boxShadow: {
            base: "0 0 0 1px var(--iris)",
            _dark: "0 0 0 1px var(--iris), 0 0 24px -4px rgba(139,92,246,0.55)",
          },
        },
      },
    },
    size: {
      lg: { padding: "12px 18px" },
    },
  },
});

export default buttonRecipe;
