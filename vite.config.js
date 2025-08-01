import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      cesium: "cesium",
    },
  },
  build: {
    rollupOptions: {
      external: ["cesium"],
    },
  },
  server: {
    open: true,
  },
  define: {
    CESIUM_BASE_URL: JSON.stringify("/cesium"),
  },
});
