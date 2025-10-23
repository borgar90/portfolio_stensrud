# Borgar Flaen Stensrud · Portfolio

A modern, responsive portfolio for a senior fullstack developer with 18+ years of experience. The site is built with Next.js 15, TypeScript, Tailwind CSS v3, and Framer Motion, and ships with a light design, animated hero, chat assistant backed by a REST API, and SEO-ready metadata.

## ✨ Highlights

- **Personal hero** with deterministic animated code glyphs, optimized avatar, and clear calls-to-action.
- **Skills grid** featuring iconography, proficiency bars, and dynamic stats (200+ prosjekter, 20 teammedlemmer, 10 utviklere veiledet).
- **Experience timeline** showcasing roles, achievements, and tech stacks in an alternating layout.
- **Projects showcase** with rich details, modal dialogs, and technology filters.
- **Additional skills** section for soft skills, business competencies, and achievement counters.
- **Floating chat widget** that talks to the REST API (/api/chat) and persists a session across requests.
- **Contact hub** with verified email, phone, and LinkedIn URLs plus a quick response pledge.
- **SEO ready** with obots.txt, sitemap.xml, OpenGraph/Twitter metadata, and a custom share image (public/Skjermbilde 2025-10-23 090737.png).

## 🧰 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 with custom theme tokens
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Tooling:** ESLint, PostCSS, Autoprefixer

## 🚀 Getting Started

`ash
# 1. Install dependencies
npm install

# 2. Provide the chat API base URL (optional for local dev)
set NEXT_PUBLIC_CHAT_API_BASE=http://localhost:5000   # Windows (PowerShell)
export NEXT_PUBLIC_CHAT_API_BASE=http://localhost:5000 # macOS/Linux

# 3. Start the dev server
npm run dev

# 4. Visit the site
http://localhost:3000
`

### Useful Scripts

`ash
npm run lint   # Type checking + ESLint
npm run build  # Production build
npm run dev    # Local development
`

## 📁 Project Structure

`
public/
  ├─ favicon-16x16.png
  ├─ Skjermbilde 2025-10-23 090737.png   # OG/Twitter preview
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

## 📋 Deployment Checklist

- [x] 
pm run lint
- [x] 
pm run build
- [x] Robots and sitemap in public/
- [x] OpenGraph/Twitter metadata configured in src/app/layout.tsx
- [ ] Confirm production NEXT_PUBLIC_CHAT_API_BASE before going live

## ✉️ Contact

- **E-post:** borgar90@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/borgar-stensrud-0204181a/
- **GitHub:** https://github.com/borgar90

---

> Laget med ☕ → 💻 av Borgar – 18+ år med kode i toppklasse.
