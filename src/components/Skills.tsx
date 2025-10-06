"use client"

import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Terminal,
  Palette,
  Cloud,
  Shield,
} from 'lucide-react'

interface Skill {
  name: string
  level: number
  category: 'Frontend' | 'Backend' | 'Database' | 'Mobile' | 'DevOps'
  icon: React.ReactNode
  years: number
}

const skills: Skill[] = [
  { name: 'JavaScript/TypeScript', level: 95, category: 'Frontend', icon: <Code2 />, years: 18 },
  { name: 'React/Next.js', level: 92, category: 'Frontend', icon: <Globe />, years: 6 },
  { name: 'HTML5/CSS3', level: 98, category: 'Frontend', icon: <Palette />, years: 18 },
  { name: 'Sass/Tailwind/CSS', level: 90, category: 'Frontend', icon: <Palette />, years: 18 },
  { name: 'Node.js', level: 90, category: 'Backend', icon: <Server />, years: 10 },
  { name: 'Python', level: 88, category: 'Backend', icon: <Server />, years: 4 },
  { name: 'PHP', level: 92, category: 'Backend', icon: <Server />, years: 15 },
  { name: 'C#/.NET', level: 85, category: 'Backend', icon: <Server />, years: 5},
  { name: 'Java', level: 80, category: 'Backend', icon: <Server />, years: 8 },
  { name: 'PostgreSQL', level: 90, category: 'Database', icon: <Database />, years: 2 },
  { name: 'MySQL', level: 92, category: 'Database', icon: <Database />, years: 15 },
  { name: 'MongoDB', level: 85, category: 'Database', icon: <Database />, years: 8 },
  { name: 'React Native', level: 85, category: 'Mobile', icon: <Smartphone />, years: 4},
  { name: 'Docker/Kubernetes', level: 85, category: 'DevOps', icon: <Cloud />, years: 4 },
  { name: 'Git/GitHub', level: 85, category: 'DevOps', icon: <GitBranch />, years: 15 },
  { name: 'CI/CD', level: 75, category: 'DevOps', icon: <Terminal />, years: 6 },
  { name: 'Linux/Unix', level: 60, category: 'DevOps', icon: <Terminal />, years: 5 },
  { name: 'Security', level: 85, category: 'DevOps', icon: <Shield />, years: 10 },
]

const categories = [
  { name: 'Frontend', label: 'Frontend', count: skills.filter((s) => s.category === 'Frontend').length },
  { name: 'Backend', label: 'Backend', count: skills.filter((s) => s.category === 'Backend').length },
  { name: 'Database', label: 'Database', count: skills.filter((s) => s.category === 'Database').length },
  { name: 'Mobile', label: 'Mobil', count: skills.filter((s) => s.category === 'Mobile').length },
  { name: 'DevOps', label: 'DevOps', count: skills.filter((s) => s.category === 'DevOps').length },
]

const categoryDisplay: Record<Skill['category'], string> = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  Database: 'Database',
  Mobile: 'Mobil',
  DevOps: 'DevOps',
}

export default function Skills() {
  return (
  <section id="skills" className="w-full py-48 md:py-64 bg-background-secondary relative overflow-hidden flex justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple-300/10 via-transparent to-blue-500/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple-300/5 to-transparent" />

      <div className="mx-auto px-6 lg:px-8 max-w-7xl relative z-10" >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-28 md:mb-36"
          style={{paddingTop: '50px', paddingBottom: '20px'}}
        >
          <h2 className="display-title font-bold mb-8 bg-gradient-to-r from-text-accent via-accent-purple-300 to-blue-400 bg-clip-text text-transparent leading-tight tracking-tight">
            Teknisk verktøykasse
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mx-auto leading-relaxed text-center">
            To tiår med kontinuerlig læring og mestring av teknologier på tvers av hele stacken
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex justify-center mb-24 md:mb-28 mt-8 md:mt-12"
        style={{paddingBottom: '50px'}}
        >
          <div className="flex  justify-center gap-6  w-full">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-surface-300 to-surface-400 rounded-xl p-10 md:p-12 text-center border border-border-default hover:border-accent-purple-300 transition-all duration-300 group hover:shadow-lg hover:shadow-accent-purple-300/20 basis-1/2 md:basis-[20%]"
              >
                <div className="text-3xl font-bold text-accent-purple-300 mb-3 group-hover:scale-110 transition-transform">{category.count}</div>
                <div className="text-text-primary group-hover:text-accent-purple-300 transition-colors font-medium">{category.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="w-full flex justify-center mb-24 md:mb-28">
          <div className="flex flex-wrap justify-center gap-10 max-w-6xl w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative rounded-xl border border-border-default hover:border-accent-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-accent-purple-300/20 hover:-translate-y-1 basis-full md:basis-1/2 lg:basis-1/3 overflow-hidden"
                style={{ padding: '10px' }}
              >
                {/* Gradient background with subtle code pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple-300/15 via-accent-purple-500/10 to-blue-400/10" />
                <div className="absolute inset-0 bg-code-pattern opacity-5" />
                <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-accent-purple-300 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-text-primary font-semibold text-lg group-hover:text-accent-purple-300 transition-colors">{skill.name}</h3>
                    <p className="text-text-muted text-sm">{skill.years} års erfaring</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-text-secondary mb-2">
                    <span>Ferdighetsnivå</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-surface-400 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-accent-purple-300 to-accent-purple-500 h-2 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-300 to-accent-purple-500 rounded-full animate-glow opacity-75" />
                    </motion.div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent-purple-300/20 text-accent-purple-300 border border-accent-purple-300/30">{categoryDisplay[skill.category]}</span>
                  <div className="text-text-muted text-xs">Siden {new Date().getFullYear() - skill.years}</div>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full text-center"
        >
          <div className="flex  justify-center gap-10  mx-auto" style={{ paddingTop: '50px', paddingBottom: '50px'}}>
            <div className="w-1/2 md:w-1/4">
              <div className="text-4xl font-bold text-accent-purple-300 mb-2">18+</div>
              <div className="text-text-secondary">År med koding</div>
            </div>
            <div className="w-1/2 md:w-1/4">
              <div className="text-4xl font-bold text-accent-purple-300 mb-2">{skills.length}</div>
              <div className="text-text-secondary">Teknologier</div>
            </div>
            <div className="w-1/2 md:w-1/4">
              <div className="text-4xl font-bold text-accent-purple-300 mb-2">100+</div>
              <div className="text-text-secondary">Ferdigstilte prosjekter</div>
            </div>
            <div className="w-1/2 md:w-1/4">
              <div className="text-4xl font-bold text-accent-purple-300 mb-2">∞</div>
              <div className="text-text-secondary">Lidenskap for kode</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}