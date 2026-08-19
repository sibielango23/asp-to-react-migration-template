import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./__tests__/setup.ts"
  }
});

