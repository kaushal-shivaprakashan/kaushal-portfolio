# Kaushal Shivaprakashan — Portfolio

Cinematic single-page portfolio. React 19 + TypeScript + Vite + Tailwind 4 + GSAP ScrollTrigger + Lenis + Framer Motion + React Three Fiber.

## Run locally
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys `dist/` automatically.
In repo Settings → Pages, set **Source: GitHub Actions** (one time).

## Structure
- `src/components/HeroScene.tsx` — R3F neural particle field (pointer + scroll reactive)
- `src/components/Chrome.tsx` — preloader, custom cursor, nav
- `src/components/AboutSkills.tsx` — story timeline + skill constellation
- `src/components/Projects.tsx` — 3D tilt cards with expandable case studies
- `src/components/Experience.tsx` — scroll-driven glowing timeline
- `src/components/Playground.tsx` — token sampler + attention visualizer
- `src/components/Contact.tsx` — terminal CLI, footer, Konami easter egg
- `src/data.ts` — all content (edit this to update copy)

## Easter eggs
- Konami code (↑↑↓↓←→←→BA) toggles developer mode
- Open the browser console
- Try `sudo hire kaushal` in the terminal
