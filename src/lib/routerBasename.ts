/**
 * Resolves BrowserRouter basename for static hosts (e.g. GitHub Pages project sites).
 * Production builds use `base: './'` so asset URLs stay correct even when the site
 * is served from a subpath; `import.meta.env.BASE_URL` is then `./`, so we infer
 * `/repo` from `window.location.pathname` when needed.
 */
export function getRouterBasename(): string | undefined {
  const configured = import.meta.env.BASE_URL ?? "/";

  if (configured !== "/" && configured !== "./") {
    const trimmed = configured.replace(/\/$/, "");
    return trimmed === "" ? undefined : trimmed;
  }

  if (typeof window === "undefined") return undefined;

  let segments = window.location.pathname
    .replace(/\/$/, "")
    .split("/")
    .filter(Boolean);

  if (segments.length && segments[segments.length - 1] === "index.html") {
    segments = segments.slice(0, -1);
  }
  if (segments.length === 0) return undefined;

  const first = segments[0];
  if (first.includes(".")) return undefined;

  return `/${first}`;
}
