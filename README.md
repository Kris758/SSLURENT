# SSLURENT

## GitHub Pages (important)

This app is a **Vite + React** build. It **does not work** with GitHub Pages **“Deploy from a branch”** / **Jekyll** — Jekyll does not run `npm run build`, so the live site is not the compiled app (often a blank page).

### Use GitHub Actions as the publish source

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. When prompted, use the workflow **“Deploy to GitHub Pages”** (file: `.github/workflows/deploy-github-pages.yml`).
4. Push to `main` or run that workflow manually (**Actions** → workflow → **Run workflow**).

The workflow builds with `npm run build`, copies `index.html` to `404.html` for SPA routing, and adds `.nojekyll` so the published files are served as static assets only.

### If you must publish from a branch folder instead

You would need to commit the contents of **`dist/`** after a production build (and still add `.nojekyll` there). The recommended approach for this repo is **GitHub Actions** above.
