import { defineRecipe } from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  base: {
    alignItems: "center",
    borderRadius: "2rem",
    cursor: "pointer",
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  },
  variants: {
    visual: {
      solidPurple: { bg: "{colors.primary}", color: "white" },
      solidWhite: { bg: "white", color: "{colors.primary}" },
    },
    size: {
      lg: { padding: "12px 16px 12px 20px", fontSize: "16px", fontWeight: 500 },
    },
  },
});

export default buttonRecipe;
