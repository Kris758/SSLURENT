import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

function viteBase(): string {
  const raw = process.env.GITHUB_PAGES_BASE?.trim();
  if (raw) {
    return raw.endsWith("/") ? raw : `${raw}/`;
  }
  return "/";
}

// https://vitejs.dev/config/
export default defineConfig({
  base: viteBase(),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
});
