import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  tanstackStart: {
    server: { entry: "src/server.ts" },
  },
  ssr: {
    external: ["node:buffer", "node:util"],
  },
});
