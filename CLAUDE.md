# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Portfolio site for Natalia Moin Fanner, migrated from a Framer site (nmoinfanner.framer.website) to a hand-coded Next.js app.

## Commands

- `npm run dev` - start the dev server (Turbopack, http://localhost:3000)
- `npm run build` - production build
- `npm run start` - serve the production build
- `npm run lint` - ESLint (flat config, `eslint-config-next` core-web-vitals + typescript rules)

There is no test suite configured in this project yet.

## Architecture

- Next.js App Router, everything under `app/`, no `src/` directory.
- TypeScript with `strict: true`. Path alias `@/*` resolves to the repo root (`tsconfig.json`).
- Tailwind CSS v4: no `tailwind.config.js`, theme tokens are defined in `app/globals.css` via `@theme inline` plus a `:root` block for CSS variables. Dark mode currently follows `prefers-color-scheme`.
- `app/layout.tsx` is the only root layout, `app/page.tsx` is the only page so far and still holds the `create-next-app` boilerplate content, to be replaced with the real home page.
- Fonts are currently wired up as Geist Sans/Geist Mono via `next/font/google` (scaffold default). The final type system per the design reference is Cal Sans for headings and Outfit for body/buttons; that swap has not been made yet.

## Content and design source of truth

Two docs at the repo root drive every page. Do not invent content, copy, colors, or layout choices that contradict them.

- [brief-contenido-portfolio.md](brief-contenido-portfolio.md): the source of truth for all page copy and site structure (Home, About, case studies, Contact, Blog). Every section's actual text comes from this file. It also lists open copy items (meta description, hero subhead, About teaser bio, capabilities line) that are not finalized yet: treat those as still-open, do not fabricate a final version on your own.
- [design-referencia-jenny-m.md](design-referencia-jenny-m.md): the source of truth for the visual system (colors, typography, layout, interaction), based on screenshots of the Jenny.M Webflow template in `referencias/`. Final tokens:
  - Text and headings: `#2E2E2E`
  - Accent: `#90BF79`
  - Background: `#EEEEEE`
  - Button background: white
  - Headings in Cal Sans, body text in Outfit regular, buttons in Outfit bold
- Both docs describe the same project detail page template (cover, overview with a services/industry/year/live-website tech sheet, scope of work, process gallery, final outcome, next project cards). Keep them in sync if that structure changes.
- Never copy actual text, filler stats, or testimonials from the `referencias/` screenshots or from the Jenny.M template; they are structure and interaction references only, their copy is placeholder lorem ipsum. See "Qué no copiar" in [design-referencia-jenny-m.md](design-referencia-jenny-m.md).

## Assets

- `assets/`: logo files (`Logo-Black.png`, `Logo-white.png`, `Logo-color.png`).
- `referencias/`: reference screenshots of the Jenny.M template (homepage, projects, about page, services, contact, blog) used for layout and interaction reference only, never for copy.

## Style rules

- Never use the em dash character in any generated text, in copy or in code comments. Use a period, comma, or parentheses instead.
