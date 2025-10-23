# Borgar Flaen Stensrud · Portfolio

A modern, responsive portfolio for a senior fullstack developer with 18+ years of experience. The site is built with Next.js 15, TypeScript, Tailwind CSS v3, and Framer Motion. It features a light aesthetic, animated hero, chat assistant backed by a REST API, and SEO-ready metadata.

> **Merk:** Chat-assistenten er fortsatt under utvikling, så svar kan være ufullstendige eller variere mellom forespørsler.

## ✨ Highlights
- Personal hero with deterministic animated code glyphs, optimized avatar, and clear calls-to-action.
- Skills grid with icons, proficiency bars, and live stats (200+ prosjekter, 20 teammedlemmer, 10 utviklere veiledet).
- Experience timeline highlighting achievements and tech stacks in an alternating layout.
- Projects showcase with detailed modals and technology filters.
- Additional skills for soft/business competencies and achievement counters.
- Floating chat widget that talks to /api/chat, persisting sessions and mirroring user language.
- Contact hub with verified email, phone, and LinkedIn URLs.
- SEO assets: obots.txt, sitemap.xml, and OG/Twitter preview image (public/Skjermbilde 2025-10-23 090737.png).

## 🧰 Tech Stack
| Layer | Tools |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 with custom theme tokens |
| Animation | Framer Motion |
| Icons | Lucide React |
| Tooling | ESLint, PostCSS, Autoprefixer |

## 🚀 Getting Started
`ash
# install dependencies
npm install

# optional: configure chat API base URL during development
# PowerShell
 = "http://localhost:5000"
# macOS/Linux
export NEXT_PUBLIC_CHAT_API_BASE=http://localhost:5000

# start dev server
npm run dev

# visit the site
open http://localhost:3000
`

Useful scripts:
`ash
npm run lint   # type checking + ESLint
npm run build  # production build
npm run dev    # development server
`

## 📁 Project Structure
`
public/
  ├─ favicon-16x16.png
  ├─ Skjermbilde 2025-10-23 090737.png
  ├─ robots.txt
  └─ sitemap.xml
src/
  ├─ app/
  │   ├─ globals.css
  │   ├─ layout.tsx
  │   └─ page.tsx
  └─ components/
      ├─ Hero.tsx
      ├─ Skills.tsx
      ├─ Experience.tsx
      ├─ Projects.tsx
      ├─ AdditionalSkills.tsx
      ├─ Contact.tsx
      └─ ChatWidget.tsx
`

## ✅ Deployment Checklist
- [x] 
pm run lint
- [x] 
pm run build
- [x] public/robots.txt and public/sitemap.xml
- [x] OpenGraph/Twitter metadata configured in src/app/layout.tsx
- [ ] Confirm production NEXT_PUBLIC_CHAT_API_BASE before go-live

## ✉️ Contact
- **E-post:** borgar90@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/borgar-stensrud-0204181a/
- **GitHub:** https://github.com/borgar90

---
Built with ☕ → 💻 by Borgar – 18+ år med kode i toppklasse.
