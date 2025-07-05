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
    body: {
      backgroundColor: "#F9F7F1",
      fontFamily: "inter",
    },
  },
  theme: { tokens },
});

export default createSystem(defaultConfig, config);
