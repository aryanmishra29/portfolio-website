# Portfolio — aryancodes.in

A modern, dark, single-accent personal portfolio for **Aryan Mishra**, Senior Software Engineer.

Built with **Next.js 16 · React 19 · TypeScript 6 · Tailwind CSS v4 · Motion 12** and deployed on Vercel.

> Live: [aryancodes.in](https://aryancodes.in)

Feel free to fork this repo and use it as a starting point for your own portfolio — just swap out `lib/data.ts`, replace the headshot/résumé in `public/`, and redeploy.

## Highlights

- **Single source of truth** — all content (profile, experience, skills, blog posts, rotating roles) lives in `lib/data.ts`. No component edits required.
- **File-based icons** — favicon and Apple touch icon are generated from your headshot at build time via `next/og` `ImageResponse` (`app/icon.tsx`, `app/apple-icon.tsx`). No manual PNG exports.
- **Scroll-spy navigation** with sticky blurred header and active-section highlighting.
- **Reduced-motion friendly** — every animation respects `prefers-reduced-motion`.
- **SEO-ready** — Open Graph, Twitter cards, and JSON-LD `Person` schema wired up in `app/layout.tsx`.
- **Optimised imagery** via `next/image` with retina srcset.

## Stack

| Layer      | Choice                                                                    |
| ---------- | ------------------------------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router) · React 19                  |
| Language   | TypeScript 6                                                              |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme` config)    |
| Animation  | [Motion](https://motion.dev) (Framer Motion v12)                          |
| Icons      | [`lucide-react`](https://lucide.dev), [`react-icons`](https://react-icons.github.io) |
| Fonts      | Space Grotesk (display), Inter (body), JetBrains Mono (mono) via `next/font` |

## Getting started

Requires **Node.js 20.9+**.

```bash
git clone https://github.com/aryanmishra29/portfolio-website.git
cd portfolio-website
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

## Customising it for yourself

Almost everything you'll want to change is in one of these spots.

### 1. Content — `lib/data.ts`

Profile, summary, rotating roles, experience timeline, skill groups, and blog posts. The section components read from here directly, so updating a job title or adding a new post is a one-line change.

### 2. Photos — `public/`

Replace `public/aryan-headshot.png` with your own headshot (roughly square, ~800×800). It's used in three places automatically:

- The navbar avatar (`components/ui/nav.tsx`)
- The hero portrait frame (`components/sections/hero.tsx`)
- The favicon and Apple touch icon (`app/icon.tsx`, `app/apple-icon.tsx`)

If you rename the file, update the `photo` field in `lib/data.ts` and the two paths in the icon routes.

### 3. Résumé — `public/resume.pdf`

Drop your compiled CV at `public/resume.pdf` (overwriting the placeholder). The **Download Résumé** button and the footer link both point there.

### 4. Theme — `app/globals.css`

Brand palette is a single deep-violet ramp driven by CSS custom properties:

```css
--color-accent:         #6d28d9; /* violet-700 — primary  */
--color-accent-soft:    #8b5cf6; /* violet-500 — highlights */
--color-accent-bright:  #a78bfa; /* violet-400 — small accents */
--color-accent-deep:    #4c1d95; /* violet-900 — buttons/shadows */
--color-accent-darkest: #2e1065; /* violet-950            */
```

Change the five tokens and the whole site follows.

## Project structure

```
app/
  layout.tsx          Root layout · fonts · SEO metadata · JSON-LD Person schema
  page.tsx            Home page — composes all sections
  globals.css         Tailwind v4 theme tokens · base styles · keyframes
  icon.tsx            Favicon generated from the headshot at build time
  apple-icon.tsx      Apple touch icon (180×180) generated the same way

components/
  sections/           hero · about · experience · skills · writing · resume-cta
  ui/                 nav (scroll-spy) · footer · aurora-background ·
                      neon-card · glow-button · section-heading

lib/
  data.ts             Single source of truth for all content
  utils.ts            cn() helper (clsx + tailwind-merge)

public/
  aryan-headshot.png  Portrait — drives the navbar, hero, and favicons
  resume.pdf          Compiled CV served by the Download button
```

## Deploying

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Accept the defaults — Next.js is detected automatically. No env vars needed.

### Anywhere else

```bash
npm run build && npm start
```

Requires Node.js 20.9+.

## License

Released under the [MIT License](./LICENSE). You're welcome to reuse the code and structure — please swap the personal content (name, photo, copy, résumé) before shipping your version.
