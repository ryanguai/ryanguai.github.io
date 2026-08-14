# Portfolio Site

Single static HTML/CSS page showcasing AI/ML portfolio projects.

## Design decisions

- **Plain HTML/CSS, no framework** — one page, no routing, no build step. Keeps it fast and zero-maintenance.
- **System font stack** — no external font requests, instant rendering.
- **Dark/light mode** via `prefers-color-scheme` — follows OS setting, no toggle needed.
- **Color**: single blue accent (#2563eb) on neutral base. Content-focused, not decorative.
- **Demo**: linked out (not embedded GIF) — Streamlit demo is interactive, a GIF wouldn't do it justice.

## Deploy

Push to GitHub and enable GitHub Pages (Settings → Pages → Source: main branch).

## Adding a new project

Copy the `.project` div block in `index.html` and fill in the same structure: problem statement, architecture, eval table, lessons, links.
