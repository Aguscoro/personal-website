# Personal Website

**Live at [agustin-corominas.vercel.app](https://agustin-corominas.vercel.app)**

A personal portfolio website built with React, showcasing a selection of my
projects as a professional reference alongside my resume.

## Goal

Provide a single public URL where recruiters and collaborators can see what I
build, rather than reading about it in a list of bullet points.

## Tech Stack

- React (JavaScript)
- Vite
- Deployed on Vercel

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run lint     # oxlint
```

## Status

The portfolio layout is live: hero, about, selected projects and contact, in a
single responsive page with automatic light and dark themes. Every push to
`main` deploys automatically.

Next up: replacing the placeholder cards in `src/data/projects.js` with the
real featured projects.
