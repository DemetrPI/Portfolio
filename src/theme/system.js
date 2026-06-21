import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      minHeight: "100%",
      scrollBehavior: "smooth",
    },
    body: {
      fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      background: "#f8fafc",
      color: "#172033",
    },
    "*": {
      boxSizing: "border-box",
    },
  },
  theme: {
    tokens: {
      colors: {
        ink: { value: "#172033" },
        paper: { value: "#f8fafc" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
