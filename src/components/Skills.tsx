"use client"

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Atom,
  Palette,
  Wind,
  Server,
  Cpu,
  Braces,
  Coffee,
  Database,
  Layers,
  Leaf,
  Smartphone,
  Boxes,
  GitBranch,
  RefreshCcw,
  TerminalSquare,
  ShieldCheck,
} from 'lucide-react'

const toneStyles = {
  amber: {
    iconBg: 'bg-amber-100',
    iconText: 'text-amber-600',
    ring: 'ring-amber-200/60',
    progress: 'from-amber-400 to-orange-400',
    chip: 'bg-amber-100/70 text-amber-700 border-amber-200/70',
  },
  sky: {
    iconBg: 'bg-sky-100',
    iconText: 'text-sky-600',
    ring: 'ring-sky-200/60',
    progress: 'from-sky-400 to-cyan-400',
    chip: 'bg-sky-100/70 text-sky-700 border-sky-200/70',
  },
  purple: {
    iconBg: 'bg-purple-100',
    iconText: 'text-purple-600',
    ring: 'ring-purple-200/60',
    progress: 'from-purple-400 to-fuchsia-400',
    chip: 'bg-purple-100/70 text-purple-700 border-purple-200/70',
  },
  emerald: {
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-600',
    ring: 'ring-emerald-200/60',
    progress: 'from-emerald-400 to-teal-400',
    chip: 'bg-emerald-100/70 text-emerald-700 border-emerald-200/70',
  },
  blue: {
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-600',
    ring: 'ring-blue-200/60',
    progress: 'from-blue-400 to-indigo-400',
    chip: 'bg-blue-100/70 text-blue-700 border-blue-200/70',
  },
  pink: {
    iconBg: 'bg-pink-100',
    iconText: 'text-pink-600',
    ring: 'ring-pink-200/60',
    progress: 'from-pink-400 to-rose-400',
    chip: 'bg-pink-100/70 text-pink-700 border-pink-200/70',
  },
  indigo: {
    iconBg: 'bg-indigo-100',
    iconText: 'text-indigo-600',
    ring: 'ring-indigo-200/60',
    progress: 'from-indigo-400 to-violet-400',
    chip: 'bg-indigo-100/70 text-indigo-700 border-indigo-200/70',
  },
  teal: {
    iconBg: 'bg-teal-100',
    iconText: 'text-teal-600',
    ring: 'ring-teal-200/60',
    progress: 'from-teal-400 to-emerald-400',
    chip: 'bg-teal-100/70 text-teal-700 border-teal-200/70',
  },
  cyan: {
    iconBg: 'bg-cyan-100',
    iconText: 'text-cyan-600',
    ring: 'ring-cyan-200/60',
    progress: 'from-cyan-400 to-sky-400',
    chip: 'bg-cyan-100/70 text-cyan-700 border-cyan-200/70',
  },
} as const

type ToneKey = keyof typeof toneStyles
type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Mobile' | 'DevOps'

interface Skill {
  name: string
  level: number
  category: SkillCategory
  years: number
  icon: LucideIcon
  tone: ToneKey
}

const skills: Skill[] = [
  { name: 'JavaScript / TypeScript', level: 95, category: 'Frontend', years: 18, icon: Code2, tone: 'amber' },
  { name: 'React / Next.js', level: 92, category: 'Frontend', years: 6, icon: Atom, tone: 'sky' },
  { name: 'HTML5 / CSS3', level: 98, category: 'Frontend', years: 18, icon: Palette, tone: 'purple' },
  { name: 'Sass · Tailwind', level: 90, category: 'Frontend', years: 18, icon: Wind, tone: 'pink' },
  { name: 'Node.js', level: 90, category: 'Backend', years: 10, icon: Server, tone: 'emerald' },
  { name: 'Python', level: 88, category: 'Backend', years: 4, icon: Cpu, tone: 'teal' },
  { name: 'PHP', level: 92, category: 'Backend', years: 15, icon: Braces, tone: 'indigo' },
  { name: 'C# / .NET', level: 85, category: 'Backend', years: 5, icon: Layers, tone: 'blue' },
  { name: 'Java', level: 80, category: 'Backend', years: 8, icon: Coffee, tone: 'amber' },
  { name: 'PostgreSQL', level: 90, category: 'Database', years: 2, icon: Database, tone: 'cyan' },
  { name: 'MySQL', level: 92, category: 'Database', years: 15, icon: Database, tone: 'sky' },
  { name: 'MongoDB', level: 85, category: 'Database', years: 8, icon: Leaf, tone: 'emerald' },
  { name: 'React Native', level: 85, category: 'Mobile', years: 4, icon: Smartphone, tone: 'purple' },
  { name: 'Docker · Kubernetes', level: 85, category: 'DevOps', years: 4, icon: Boxes, tone: 'cyan' },
  { name: 'Git · GitHub', level: 85, category: 'DevOps', years: 15, icon: GitBranch, tone: 'pink' },
  { name: 'CI / CD', level: 75, category: 'DevOps', years: 6, icon: RefreshCcw, tone: 'teal' },
  { name: 'Linux / Unix', level: 60, category: 'DevOps', years: 5, icon: TerminalSquare, tone: 'indigo' },
  { name: 'Sikkerhet', level: 85, category: 'DevOps', years: 10, icon: ShieldCheck, tone: 'emerald' },
]

const categoryLabels: Record<SkillCategory, string> = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  Database: 'Database',
  Mobile: 'Mobil',
  DevOps: 'DevOps',
}

export default function Skills() {
  return (
    <section id="skills" className="relative flex w-full justify-center overflow-hidden bg-gradient-to-b from-white via-background-primary to-background-secondary py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-accent-purple-200/15 to-blue-400/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple-300/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 pt-8 text-center md:mb-20 md:pt-12"
        >
          <h2 className="display-title mb-6 text-3xl font-bold tracking-tight text-text-accent sm:text-4xl lg:text-5xl">
            Teknisk verktøykasse
          </h2>
          <p className="mx-auto text-lg leading-relaxed text-text-secondary md:text-xl">
            To tiår med kontinuerlig læring og mestring av teknologier på tvers av hele stacken
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 rounded-3xl border border-border-default/60 bg-white/80 shadow-xl shadow-accent-purple-200/20 backdrop-blur md:mb-20"
        >
          <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3 xl:grid-cols-4 xl:p-10 2xl:p-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            const tone = toneStyles[skill.tone]

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="group relative flex flex-col rounded-2xl border border-border-default/60 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tone.iconBg} ${tone.iconText} ring-4 ${tone.ring} shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                      {categoryLabels[skill.category]}
                    </p>
                    <h3 className="text-lg font-semibold text-text-primary">{skill.name}</h3>
                  </div>
                  <span className="text-3xl font-bold text-text-accent">{skill.level}%</span>
                </div>

                <div className="mt-4 h-2 w-full rounded-full bg-surface-200">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${tone.progress}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="mt-5 flex items-center justify-between text-sm text-text-muted">
                  <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${tone.chip}`}>
                    {skill.years}+ år
                  </span>
                  <span className="font-mono text-xs text-text-muted">Siden {new Date().getFullYear() - skill.years}</span>
                </div>
              </motion.div>
            )
          })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full text-center"
        >
          <div className="mx-auto flex flex-wrap justify-center gap-6 py-8 md:gap-12 md:py-12">
            <div className="w-1/2 md:w-1/4">
              <div className="mb-2 text-4xl font-bold text-accent-purple-300">18+</div>
              <div className="text-text-secondary">År med koding</div>
            </div>
            <div className="w-1/2 md:w-1/4">
              <div className="mb-2 text-4xl font-bold text-accent-purple-300">{skills.length}</div>
              <div className="text-text-secondary">Teknologier</div>
            </div>
            <div className="w-1/2 md:w-1/4">
              <div className="mb-2 text-4xl font-bold text-accent-purple-300">100+</div>
              <div className="text-text-secondary">Ferdigstilte prosjekter</div>
            </div>
            <div className="w-1/2 md:w-1/4">
              <div className="mb-2 text-4xl font-bold text-accent-purple-300">&infin;</div>
              <div className="text-text-secondary">Lidenskap for kode</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}




