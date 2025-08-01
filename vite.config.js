import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { viteStaticCopy } from "vite-plugin-static-copy";

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
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/cesium/Build/Cesium",
          dest: "",
        },
      ],
    }),
  ],
  define: {
    CESIUM_BASE_URL: JSON.stringify("/Cesium"),
  },
});
