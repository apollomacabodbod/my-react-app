import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],

  // [ADDED] Entire build block for Library Mode
  build: {
    lib: {
      // Points to your new index.js location inside the Components folder
      entry: resolve(__dirname, "src/Components/index.js"),
      name: "DesignSystem",
      fileName: (format) => `design-system.${format}.js`
    },
    rollupOptions: {
      // Prevents Vite from bundling React into your library
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
