import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ command }) => {
  // 1. If running "npm run dev", run as a normal React App
  if (command === "serve") {
    return {
      plugins: [react()]
    };
  }

  // 2. If running "npm run build", build as a Library for npm
  return {
    plugins: [react()],
    build: {
      lib: {
        entry: resolve(__dirname, "src/Components/index.js"),
        name: "DesignSystem",
        fileName: (format) => `design-system.${format}.js`
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM"
          }
        }
      }
    }
  };
});
