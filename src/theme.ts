import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineSemanticTokens,
  defineTokens,
} from "@chakra-ui/react";

const tokens = defineTokens({
  fonts: {
    display: {
      value:
        "var(--font-plex-condensed), 'IBM Plex Sans Condensed', 'IBM Plex Sans', system-ui, sans-serif",
    },
    body: {
      value: "var(--font-plex-sans), 'IBM Plex Sans', system-ui, sans-serif",
    },
    mono: {
      value:
        "var(--font-plex-mono), 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
    },
    libre: {
      value: "var(--font-plex-sans), 'IBM Plex Sans', system-ui, sans-serif",
    },
    script: {
      value: "var(--font-plex-mono), 'IBM Plex Mono', ui-monospace, monospace",
    },
    nothingYouCouldDo: {
      value: "var(--font-plex-mono), 'IBM Plex Mono', ui-monospace, monospace",
    },
  },
  sizes: {
    container: {
      lg: { value: "1100px" },
      md: { value: "820px" },
      sm: { value: "100%" },
      base: { value: "100%" },
    },
  },
});

const semanticTokens = defineSemanticTokens({
  colors: {
    // canvas + surfaces
    graphite: {
      value: { base: "#EFEDE8", _dark: "#0B0D10" },
    },
    surface: {
      value: { base: "#F7F5F1", _dark: "#14171C" },
    },
    elevated: {
      value: { base: "#FFFFFF", _dark: "#1A1E25" },
    },
    canvasStrip: {
      value: { base: "#E6E3DC", _dark: "#0A0C0F" },
    },
    canvasDeep: {
      value: { base: "#E1DDD6", _dark: "#08090B" },
    },

    // text
    bone: {
      value: { base: "#0B0D10", _dark: "#ECECEC" },
    },
    ash: {
      value: { base: "#4B5563", _dark: "#9AA3AF" },
    },
    ashMuted: {
      value: { base: "#7A828D", _dark: "#5C6471" },
    },

    // accent + signals
    iris: {
      value: { base: "#6B4E9B", _dark: "#8B5CF6" },
    },
    irisSoft: {
      value: { base: "#8870C7", _dark: "#A78BFA" },
    },
    irisGlow: {
      value: {
        base: "rgba(107,78,155,0.10)",
        _dark: "rgba(139,92,246,0.18)",
      },
    },
    signal: {
      value: { base: "#059669", _dark: "#34D399" },
    },

    // rules
    rule: {
      value: { base: "#D8D3CA", _dark: "#1F2329" },
    },
    ruleSoft: {
      value: {
        base: "rgba(11,13,16,0.08)",
        _dark: "rgba(236,236,236,0.10)",
      },
    },

    // Back-compat aliases mapped to the new palette so existing usages stay valid.
    ink: { value: { base: "#0B0D10", _dark: "#ECECEC" } },
    cream: { value: { base: "#0B0D10", _dark: "#ECECEC" } },
    paper: { value: { base: "#EFEDE8", _dark: "#0B0D10" } },
    ember: { value: { base: "#6B4E9B", _dark: "#8B5CF6" } },
    emberSoft: { value: { base: "#8870C7", _dark: "#A78BFA" } },
    dust: { value: { base: "#7A828D", _dark: "#9AA3AF" } },
    header: { value: { base: "#EFEDE8", _dark: "#0B0D10" } },
    primary: { value: { base: "#6B4E9B", _dark: "#8B5CF6" } },
    secondary: { value: { base: "#0B0D10", _dark: "#ECECEC" } },
  },
});

const config = defineConfig({
  globalCss: {
    ":root": {
      "--bar-width": "30px",
      "--bar-height": "2px",
      "--hamburger-gap": "8px",
      "--foreground-color": "#0B0D10",
      "--background-color": "rgba(11, 13, 16, 0.6)",
      "--backdrop-filter": "20px",
      "--hamburger-margin": "18px",
      "--animation-timing": ".5s ease-in-out",
      "--hamburger-height":
        "calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2)",
      "--body-background": "#EFEDE8",
      "--hamburger-bar-color": "#0B0D10",
      "--graphite": "#EFEDE8",
      "--surface": "#F7F5F1",
      "--iris": "#6B4E9B",
      "--iris-soft": "#8870C7",
      "--bone": "#0B0D10",
      "--ash": "#4B5563",
      "--rule": "#D8D3CA",
      "--signal": "#059669",
      "--ember": "#6B4E9B",
      "--cream": "#0B0D10",
      "--ink": "#0B0D10",
      "--paper": "#EFEDE8",
    },
    ".dark": {
      "--hamburger-bar-color": "#ECECEC",
      "--foreground-color": "#ECECEC",
      "--body-background": "#0B0D10",
      "--graphite": "#0B0D10",
      "--surface": "#14171C",
      "--iris": "#8B5CF6",
      "--iris-soft": "#A78BFA",
      "--bone": "#ECECEC",
      "--ash": "#9AA3AF",
      "--rule": "#1F2329",
      "--signal": "#34D399",
      "--ember": "#8B5CF6",
      "--cream": "#ECECEC",
      "--ink": "#ECECEC",
      "--paper": "#0B0D10",
    },
    body: {
      fontFamily: "body",
      bg: "graphite",
      color: "bone",
    },
  },
  theme: { tokens, semanticTokens },
});

export default createSystem(defaultConfig, config);
