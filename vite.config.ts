import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
// vite.config.ts

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "the-fold-ui",
      fileName: (format) => `the-fold-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react()],
});
