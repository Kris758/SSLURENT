/**
 * Browser basename for React Router. Must match Vite `base` (see `import.meta.env.BASE_URL`).
 */
function inferBasenameFromPathname(): string | undefined {
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

export function getRouterBasename(): string | undefined {
  const base = import.meta.env.BASE_URL ?? "/";

  if (base !== "/" && base !== "./") {
    const trimmed = base.replace(/\/$/, "");
    return trimmed === "" ? undefined : trimmed;
  }

  if (base === "/" || typeof window === "undefined") {
    return undefined;
  }

  // Local builds use `base: './'` — infer `/repo` when previewing under a subpath.
  return inferBasenameFromPathname();
}
