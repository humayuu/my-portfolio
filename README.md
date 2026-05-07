# Humayun Ahmed — Portfolio

Personal portfolio website built with **React 19 + Vite + Bootstrap 5**. Showcases my background as a PHP & Laravel developer, projects, tech stack, and ways to get in touch.

> **Live site:** _to be added after first Vercel deploy_

---

## Tech stack

- **Framework:** React 19 (functional components + hooks)
- **Build tool:** Vite 8
- **Styling:** Bootstrap 5.3 + custom CSS variables (dark theme)
- **Icons:** Font Awesome 6
- **Hosting:** Vercel
- **Language:** JavaScript (ES modules)

---

## Project structure

```
My-portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── Humayun.Resume.pdf      # served from site root
├── src/
│   ├── App.jsx                 # all sections (Nav, Hero, About, Skills, Projects, Contact, Footer)
│   ├── main.jsx                # React entry
│   └── index.css               # custom theme styles + responsive overrides
├── index.html                  # Bootstrap + Font Awesome CDN, meta tags
├── vercel.json                 # Vercel build & cache config
├── .nvmrc                      # Node version pin (22)
└── vite.config.js
```

---

## Run locally

Requirements: **Node 22+** and **npm**.

```bash
git clone https://github.com/humayuu/My-portfolio.git
cd My-portfolio
npm install
npm run dev
```

Open <http://localhost:5173> in your browser.

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Deployment (Vercel)

This project is configured for zero-config deployment on **Vercel**.

1. Push to `main` on GitHub
2. Import the repo at <https://vercel.com/new>
3. Vercel auto-detects Vite — keep defaults and click **Deploy**

`vercel.json` already provides:

- **SPA rewrites** so deep links resolve to `index.html`
- **Long-term cache headers** for hashed assets in `/assets/*`
- **Reasonable cache** for static images, fonts, and the resume PDF

Every push to `main` triggers an automatic redeploy. Pull requests get instant **preview URLs**.

---

## Connect

- **Portfolio:** _add Vercel URL here after first deploy_
- **GitHub:** [@humayuu](https://github.com/humayuu)
- **LinkedIn:** [humayuu-ahmed](https://www.linkedin.com/in/humayuu-ahmed/)
- **Email:** humayun.ahmed1198@gmail.com
- **WhatsApp:** [+92 345 257 8930](https://wa.me/923452578930)

---

© Humayun Ahmed — open to junior PHP / Laravel / full-stack roles.
