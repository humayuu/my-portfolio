# Portfolio

Personal portfolio site for **Humayun**—built with React and Vite, styled with Bootstrap, and deployed as a static site.

## Tech stack

- **React** 19 and **Vite** 8
- **Bootstrap** 5.3 (CSS and JS from CDN in `index.html`)
- **Font Awesome** 6 (icons from CDN)
- Custom styles in `src/index.css`

## Prerequisites

- **Node.js** 20+ recommended (LTS)

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server (with hot reload):

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Project structure

| Path | Purpose |
|------|---------|
| `index.html` | HTML shell, meta tags, Bootstrap and Font Awesome CDN links |
| `src/main.jsx` | React entry |
| `src/App.jsx` | Single-page layout: hero, about, skills, projects, contact |
| `src/index.css` | Theme, layout helpers, and component-specific styles |
| `public/` | Static assets served as-is (e.g. icons, optional `resume.pdf`) |

## Customization

- **Copy and links** (GitHub, LinkedIn, email, WhatsApp, project cards, hero text): edit the constants at the top of `src/App.jsx`.
- **Resume download**: place a PDF at `public/resume.pdf`. The hero button points to `/resume.pdf` and suggests the filename `Humayun-Resume.pdf` when downloaded.
- **SEO / sharing**: update `<meta>` and `<title>` in `index.html` if you change your positioning or name.

## Deployment

`npm run build` outputs to `dist/`. Upload that folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.). Configure the host to serve `index.html` for client-side routes if you add routing later; this app is a single page with hash-less section links (`#home`, `#about`, …).

## License

Private project; all rights reserved unless you choose to add an open license.
