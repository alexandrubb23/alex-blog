import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTokens,
} from "@chakra-ui/react";

const tokens = defineTokens({
  colors: {
    header: { value: "#F2EFE5" },
  },
  sizes: {
    container: { value: "920px" },
  },
  spacing: {},
});

const config = defineConfig({
  globalCss: {
    body: {
      backgroundColor: "#F9F7F1",
    },
  },
  theme: { tokens },
});

export default createSystem(defaultConfig, config);
