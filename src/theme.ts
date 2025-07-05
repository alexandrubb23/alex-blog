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
