import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTokens,
} from "@chakra-ui/react";

const tokens = defineTokens({
  fonts: {
    libre: { value: "Libre Baskerville" },
  },
  colors: {
    header: { value: "#F2EFE5" },
    bg: {
      primary: { value: "#6D54D0" },
    },
  },
  sizes: {
    container: { value: "920px" },
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
