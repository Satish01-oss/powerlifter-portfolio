# Prashant Singh - International Powerlifter Portfolio

A responsive athlete portfolio website built with React, Tailwind CSS, Framer Motion, and React Router.

## Features

- Responsive design (mobile, tablet, desktop)
- Athlete profile, medals and championship achievements
- Competition best lifts (total calculated automatically)
- Photo gallery with a full-screen viewer (keyboard: ← → to browse, Esc to close)
- Instagram and contact sections
- Accessible: keyboard navigation, skip link, screen-reader labels, respects "reduce motion"
- Optimised WebP images and per-page titles

## Animations

Reusable effects live in `src/components/fx/`:

| Effect | Component | Where it's used |
| --- | --- | --- |
| Barbell-loading intro (once per session) | `Preloader` | First visit |
| Red curtain page transitions | `PageTransition` | Every page |
| Letter / word rise-from-mask text | `SplitText` | Hero name, section titles, 404 |
| Count-up numbers | `CountUp` | Hero stats, medals, lifts, Instagram |
| Scroll-velocity marquee | `VelocityMarquee` | Stats band under the hero |
| Scroll parallax outlined words | `ParallaxWord` | About, Records |
| Wipe-in photo with parallax | `ImageReveal` | About, Instagram |
| Cursor spotlight + 3D tilt cards | `InteractiveCard` | Medals, achievements, lifts, contact |
| Magnetic buttons | `Magnetic` | Hero, navbar, Instagram, 404 |
| Reading progress bar / back-to-top ring | `ScrollProgress`, `BackToTop` | Site-wide |

Visitors with "reduce motion" enabled skip the intro, and movement effects are turned off for them.

## Tech Stack

- React 19 + Vite
- React Router
- Tailwind CSS v4
- Framer Motion
- React Icons

## Run Locally

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build in dist/
npm run preview   # serve the production build
npm run lint      # check code quality
```

## Editing Content

All text and numbers (name, medals, lifts, achievements, contact details, Instagram stats)
live in **`src/data/athleteData.js`**. Change a value there and every section updates.

Gallery photos and captions live in **`src/data/gallery.js`**. Each photo has a full-size
`image` (about 1600px on the long edge) and a smaller `thumb` (about 800px), both in WebP format.
Keep new photos at a similar size so the site stays fast.

## Project Structure

```text
src/
├── assets/images/     # hero, about, instagram and gallery photos (WebP)
├── components/        # page sections (Hero, About, Records, Gallery, ...)
├── data/              # athleteData.js and gallery.js — all site content
├── hooks/             # usePageTitle
├── pages/             # Home, Achievements, Gallery, Contact, 404
├── App.jsx            # routes and layout
└── App.css            # Tailwind setup, theme fonts and colours
```

## Deployment

This is a single-page app using client-side routing. When hosting, configure the server to
serve `index.html` for all paths so that links like `/gallery` work on refresh
(Netlify: `_redirects`, Vercel: `rewrites`, etc.).
