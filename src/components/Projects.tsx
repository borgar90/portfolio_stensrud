'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Star, Users, Calendar } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  image: string
  demoUrl?: string
  githubUrl?: string
  features: string[]
  challenges: string[]
  impact: {
    users?: string
    performance?: string
    revenue?: string
    other?: string
  }
  year: string
  duration: string
  teamSize: string
  role: string
}

const projects: Project[] = [
  
 
  // Imported from portfolio.json
  {
    id: 7,
    title: 'Salutor – AI Kundebehandler',
    description: 'Et AI-drevet verktøy for automatisert kundeservice, ordrebehandling og support.',
    longDescription: 'SaaS for små og mellomstore bedrifter. Et AI-drevet verktøy for automatisert kundeservice, ordrebehandling og support. Bruker Supabase, Next.js og GPT-modeller.',
    technologies: ['Supabase', 'Next.js', 'GPT'],
    category: 'AI/ML',
    image: '/media/salutor.png',
    features: [],
    challenges: [],
    impact: {},
    year: '',
    duration: '',
    teamSize: '',
    role: ''
  },
  {
    id: 8,
    title: 'SpriteToJSON Editor',
    description: 'Et Python-basert GUI-verktøy for å kutte, analysere og eksportere sprites til JSON med støtte for animasjoner og tilemaps.',
    longDescription: 'Desktopverktøy for sprite-analyse og eksport. Et Python-basert GUI-verktøy for å kutte, analysere og eksportere sprites til JSON med støtte for animasjoner og tilemaps.',
    technologies: ['Python', 'GUI', 'JSON'],
    category: '',
    image: '/media/spritetojson.png',
    features: [],
    challenges: [],
    impact: {},
    year: '',
    duration: '',
    teamSize: '',
    role: ''
  },
  {
    id: 9,
    title: 'Kaukus - en digitalisering av politiske møter',
    description: 'En webapp for å digitalisere politiske møter og lokalmedvirkning.',
    longDescription: 'Webapp for politiske møter i Norge og Polen. Bygget med Ruby on Rails, Turbo Streams og PostgreSQL. Jeg har vært med på å utvikle løsninger som intern hos Kaukus og Rubynor.',
    technologies: ['Ruby on Rails', 'Turbo Streams', 'PostgreSQL'],
    category: 'SaaS',
    image: '/media/kaukus.png',
    features: [],
    challenges: [],
    impact: {},
    year: '',
    duration: '',
    teamSize: '',
    role: ''
  },
  {
    id: 10,
    title: 'MrFix - nettbutikk',
    description: 'En nettbutikk for salg av universalsåpe.',
    longDescription: 'Nettbutikk for universalsåpe. Bygget med Next.js.',
    technologies: ['Next.js'],
    category: 'Full-Stack',
    image: '/media/mrfix.png',
    features: [],
    challenges: [],
    impact: {},
    year: '',
    duration: '',
    teamSize: '',
    role: ''
  },
  {
    id: 11,
    title: "Grandmaster's smith",
    description: 'Min gruppe og jeg laget et sosialt nettverk for sjakkspillere, med interaktiv sjakkopplæring.',
    longDescription: 'Studentprosjekt. Min gruppe og jeg laget et sosialt nettverk for sjakkspillere, med interaktiv sjakkopplæring.',
    technologies: [],
    category: '',
    image: '/media/gssmith.png',
    features: [],
    challenges: [],
    impact: {},
    year: '',
    duration: '',
    teamSize: '',
    role: ''
  },
  {
    id: 12,
    title: 'CodeExtractor',
    description: 'Et Python-basert verktøy for å analysere og eksportere kode fra bilder og video.',
    longDescription: 'Hobbyprosjekt. Et Python-basert verktøy for å analysere og eksportere kode fra bilder og video. Bruker OpenCV og Tesseract for bildebehandling og tekstgjenkjenning.',
    technologies: ['Python', 'OpenCV', 'Tesseract'],
    category: 'AI/ML',
    image: '/media/codeExtractor.png',
    features: [],
    challenges: [],
    impact: {},
    year: '',
    duration: '',
    teamSize: '',
    role: ''
  },
]

const categories = ['All', 'Full-Stack', 'AI/ML', 'SaaS', 'Healthcare', 'Real-Time', 'FinTech']
// Visningsetiketter for kategorier (beholder interne nøkler uendret)
const categoryDisplay: Record<string, string> = {
  'All': 'Alle',
  'Full-Stack': 'Fullstack',
  'AI/ML': 'AI/ML',
  'SaaS': 'SaaS',
  'Healthcare': 'Helse',
  'Real-Time': 'Sanntid',
  'FinTech': 'FinTech',
}

// Visningsetiketter for effekt-nøkler
const impactLabels: Record<string, string> = {
  users: 'Brukere',
  performance: 'Ytelse',
  revenue: 'Omsetning',
  other: 'Annet',
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
  <section id="projects" className="relative flex w-full justify-center overflow-hidden bg-gradient-to-b from-background-primary via-background-secondary to-background-tertiary py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-blue-200/15 to-accent-purple-200/15"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple-300/5 to-transparent"></div>
      
  <div className="mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 pt-8 text-center md:mb-20 md:pt-12"
        >
          <h2 className="display-title mb-6 text-3xl font-bold tracking-tight text-text-accent sm:text-4xl lg:text-5xl">
            Utvalgte prosjekter
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary mx-auto leading-relaxed text-center">
            Et utvalg av innovative løsninger og teknisk kvalitet på tvers av bransjer
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 flex w-full flex-wrap justify-center gap-4 md:mb-20"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 text-lg ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-accent-purple-200 via-accent-purple-300 to-blue-300 text-text-accent shadow-lg shadow-accent-purple-200/60'
                  : 'bg-gradient-to-br from-white/15 via-blue-200/10 to-accent-purple-200/15 text-text-secondary hover:bg-surface-200 hover:text-accent-purple-300 border border-border-default'
              }`}
            >
              {categoryDisplay[category] ?? category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-white/15 via-blue-200/10 to-accent-purple-200/15 rounded-xl overflow-hidden border border-border-default hover:border-accent-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-accent-purple-300/20 hover:-translate-y-2"
            >
              {/* Project image */}
              <div className="aspect-video bg-gradient-to-br from-accent-purple-300/20 to-accent-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-code-pattern opacity-10"></div>
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-accent-purple-300/30">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
                {project.category && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-accent-purple-300/20 text-accent-purple-300 text-xs rounded-full border border-accent-purple-300/30">
                      {categoryDisplay[project.category] ?? project.category}
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <button 
                        onClick={() => window.open(project.demoUrl, '_blank')}
                        className="p-2 bg-accent-purple-300 text-background-primary rounded-full hover:bg-accent-purple-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                    {project.githubUrl && (
                      <button 
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="p-2 bg-surface-400 text-text-primary rounded-full hover:bg-surface-200 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.year && (
                    <span className="text-text-muted text-sm">{project.year}</span>
                  )}
                </div>

                <p className="text-text-secondary text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block px-2 py-1 bg-accent-purple-300/20 text-accent-purple-300 text-xs rounded border border-accent-purple-300/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="inline-block px-2 py-1 bg-surface-400 text-text-muted text-xs rounded">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Project stats */}
                {(project.teamSize || project.duration || project.role) && (
                  <div className="flex items-center justify-between text-text-muted text-xs mb-6">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {project.teamSize || '—'}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.duration || '—'}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.role || '—'}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-accent-purple-300 hover:bg-accent-purple-400 text-background-primary py-2 px-4 rounded font-medium transition-colors duration-300 text-sm"
                  >
                    Se detaljer
                  </button>
                  {project.demoUrl && (
                    <button 
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      className="p-2 border border-accent-purple-300 text-accent-purple-300 hover:bg-accent-purple-300 hover:text-background-primary rounded transition-colors duration-300"
                    >
                      <Play className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Project detail modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Layered backdrop for readability and style */}
            <div className="absolute inset-0 pointer-events-auto">
              <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-accent-purple-900/35 mix-blend-overlay" />
              <div className="absolute inset-0 bg-code-pattern opacity-6" />
            </div>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border-accent/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl bg-white p-10 text-text-primary shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2">{selectedProject.title}</h3>
                    <p className="text-accent-purple-300 font-semibold text-sm tracking-wide">{selectedProject.category} • {selectedProject.year}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Lukk"
                    className="text-text-muted hover:text-text-primary transition-colors p-2 rounded-md bg-surface-300/30 hover:bg-surface-300/50"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-text-secondary mb-6 text-lg leading-relaxed">{selectedProject.longDescription}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Features */}
                  <div>
                    <div className="mb-3">
                      <div className="h-1 w-14 bg-accent-purple-300 rounded mb-3" />
                      <h4 className="text-xl font-bold text-text-primary">Nøkkelfunksjoner</h4>
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="text-text-secondary flex items-start gap-3">
                          <span className="text-accent-purple-300 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div>
                    <div className="mb-3">
                      <div className="h-1 w-14 bg-accent-purple-300 rounded mb-3" />
                      <h4 className="text-xl font-bold text-text-primary">Tekniske utfordringer</h4>
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="text-text-secondary flex items-start gap-3">
                          <span className="text-accent-purple-300 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <div className="mb-3">
                    <div className="h-1 w-14 bg-accent-purple-300 rounded mb-3" />
                    <h4 className="text-xl font-bold text-text-primary">Teknologier brukt</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 bg-surface-400 text-text-primary text-sm rounded border border-border-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-8">
                  <div className="mb-3">
                    <div className="h-1 w-14 bg-accent-purple-300 rounded mb-3" />
                    <h4 className="text-xl font-bold text-text-primary">Prosjektpåvirkning</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(selectedProject.impact).map(([key, value]) => (
                      <div key={key} className="text-center bg-surface-400 rounded-lg p-4">
                        <div className="text-accent-purple-300 font-extrabold text-lg mb-1">{value}</div>
                        <div className="text-text-muted text-sm uppercase tracking-wide">{impactLabels[key] ?? key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  {selectedProject.demoUrl && (
                    <button 
                      onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                      className="flex items-center gap-2 bg-accent-purple-300 hover:bg-accent-purple-400 text-background-primary px-6 py-3 rounded font-semibold transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Se live demo
                    </button>
                  )}
                  {selectedProject.githubUrl && (
                    <button 
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      className="flex items-center gap-2 border border-accent-purple-300 text-accent-purple-300 hover:bg-accent-purple-300 hover:text-background-primary px-6 py-3 rounded font-semibold transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Se kildekode
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
