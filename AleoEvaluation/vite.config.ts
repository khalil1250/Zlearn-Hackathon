import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.wasm'],
   css: {
    modules: {
      scopeBehaviour: 'local', // 'local' est le comportement par défaut
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@provablehq/wasm"],
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
});
