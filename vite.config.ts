import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/** GitHub Actions sets this for Pages. Local `npm run build` omits it → `./` for `vite preview`. */
function productionBase(): string {
  const raw = process.env.VITE_PAGES_BASE?.trim();
  if (!raw) return "./";
  if (raw === "/") return "/";
  return raw.endsWith("/") ? raw : `${raw}/`;
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // Project Pages need `/repo/` so script URLs work even when the browser URL has no trailing slash.
  // Relative `./assets/...` from `.../repo` (no trailing slash) resolves to `/assets/...` (wrong).
  base: command === "build" ? productionBase() : "/",
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
}));
