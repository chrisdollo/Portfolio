# Chris Dollo — Portfolio

Personal portfolio site: about me, experience timeline, and coding projects.

## Stack

Plain HTML, CSS, and JavaScript — no build step, no framework, no dependencies.

- `index.html` — page structure and content
- `style.css` — styling, theming (light/dark), and responsive layout
- `script.js` — interactivity (theme toggle, timeline, project cards, lightbox)
- `IMG/` — images used across the site
- `DOCS/` — resume and other reference documents

## Running locally

No build tools required. Either open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Sections

- **About Me** — bio and info cards
- **Experience** — a timeline of work and research roles
- **Coding Projects** — project cards with descriptions, tags, and links
- **Get in touch** — contact links (email, LinkedIn)

## Deployment

Static site — deploy by hosting the files as-is (e.g. GitHub Pages, Netlify, Vercel).
