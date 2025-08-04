import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTokens,
} from "@chakra-ui/react";

const tokens = defineTokens({
  fonts: {
    libre: { value: "Libre Baskerville" },
    nothingYouCouldDo: { value: "Nothing You Could Do" },
  },
  colors: {
    header: { value: "#F2EFE5" },
    primary: { value: "#6D54D0" },
    secondary: { value: "#F2EFE5" },
  },
  sizes: {
    container: {
      lg: { value: "980px" },
      md: { value: "768px" },
      sm: { value: "100%" },
      base: { value: "100%" },
    },
  },
});

const config = defineConfig({
  globalCss: {
    ":root": {
      "--bar-width": "30px",
      "--bar-height": "2px",
      "--hamburger-gap": "8px",
      "--foreground-color": "#000",
      "--background-color": "rgba(0, 0, 0, 0.5)",
      "--backdrop-filter": "20px",
      "--hamburger-margin": "18px",
      "--animation-timing": ".5s ease-in-out",
      "--hamburger-height":
        "calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2)",
      "--body-background": "#000",
    },
    body: {
      fontFamily: "inter",
    },
  },
  theme: { tokens },
});

export default createSystem(defaultConfig, config);
