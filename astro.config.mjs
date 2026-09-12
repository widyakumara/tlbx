// @ts-check
import solidJs from "@astrojs/solid-js";
import { defineConfig } from "astro/config";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 9999,
    allowedHosts: ["demo.widyakumara.com"],
  },
  devToolbar: {
    enabled: false,
  },
  outDir: "./.dist",
  build: {
    inlineStylesheets: "never",
    format: "file",
    assets: "inc",
  },
  integrations: [solidJs()],
  vite: {
    plugins: [],
    build: {
      emptyOutDir: true,
      rollupOptions: {
        output: {
          hashCharacters: "base36",
          assetFileNames: "inc/[hash:8].[ext]",
          chunkFileNames: "inc/[hash:8].js",
          entryFileNames: "inc/[hash:8].js",
        },
      },
    },
  },
});
