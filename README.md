# Aryan Mishra — Portfolio

A modern, dark, cyberpunk-flavoured personal portfolio for **Aryan Mishra**, Senior Software Engineer.

Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, and Motion.

## Stack

- **Framework**: Next.js 15 · React 19 · TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first `@theme` config)
- **Animation**: `motion` (Framer Motion v12)
- **Icons**: `lucide-react`, `react-icons`
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (accents) via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server             |
| `npm run build` | Build for production             |
| `npm start`     | Run the production build locally |
| `npm run lint`  | Lint with `next lint`            |

## Editing content

All personal content (profile, summary, experience, skills, blog posts) lives in **one file**:

```
lib/data.ts
```

Update your experience, add a new blog post, or tweak the tagline — everything flows from this single source of truth. No need to touch the section components.

### Swapping in your real résumé

The **Download Résumé** button points at `/resume.pdf`. A placeholder is committed at:

```
public/resume.pdf
```

Compile your LaTeX CV (`xelatex resume.tex`) and drop the resulting `resume.pdf` into `public/`, overwriting the placeholder.

## Project structure

```
app/
  layout.tsx          Root layout + fonts + SEO metadata + JSON-LD Person schema
  page.tsx            Home page — composes all sections
  globals.css         Tailwind v4 theme tokens + base styles + keyframes
components/
  sections/           hero, about, experience, skills, writing, resume-cta
  ui/                 aurora-background, nav (scroll-spy), footer,
                      neon-card, glow-button, section-heading
lib/
  data.ts             Single source of truth for all content
  utils.ts            cn() helper
public/
  favicon.svg         On-brand AM monogram
  resume.pdf          Placeholder — replace with your compiled CV
```

## Design system

Brand palette (see `app/globals.css`):

- **Ink** (backgrounds): `#05001a → #1c033c`
- **Brand purple**: `#1c033c`, `#371e77`, `#4b28a4`, `#7c3aed`, `#a78bfa`
- **Neon accents**: cyan `#22d3ee`, magenta `#d946ef`, violet `#a855f7`

Typography, motion, and gradients are coordinated through CSS custom properties and Tailwind v4's `@theme` block, so you can tweak the entire look by editing a handful of tokens.

All animations respect `prefers-reduced-motion`.

## Deploying

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Accept the defaults — Next.js 15 is detected automatically.

### Anywhere else

`npm run build && npm start` — the app runs on Node.js 20+.

## License

Personal portfolio. Code is yours to use and modify.
