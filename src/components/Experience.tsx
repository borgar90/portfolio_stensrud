'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, TrendingUp, Award, Users } from 'lucide-react'

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
  achievements: string[]
  type: 'full-time' | 'freelance' | 'contract' | 'startup' | 'education'
}

const experiences: Experience[] = [
  // User CV entries (merged, preserving existing examples)
  {
    title: 'Webansvarlig',
    company: 'Mrfix',
    location: 'Norge',
    period: 'April 2011 - 2021',
    description: [
      'Ansvarlig for utvikling og drift av nettbutikk og online salg av universalsåpen 2 clean universal',
    ],
    technologies: ["C#", "Typescript", "Node.js",'PHP', 'MySQL', 'JavaScript', 'CSS'],
    achievements: ["Solgt 1000+ enheter av universalsåpen 2 clean universal"],
    type: 'full-time'
  },
  {
    title: 'Webutvikler',
    company: 'Selvstendig næringsdrivende',
    location: 'Norge',
    period: 'April 2007 - Nå',
    description: [
      'Levert løsninger for kunder som selvstendig utvikler og konsulent',
    ],
    technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
    achievements: [],
    type: 'freelance'
  },
  {
    title: 'Intern',
    company: 'Rubynor AS',
    location: 'Norge',
    period: 'August 2024 - Desember 2024',
    description: ['Arbeidet med interne utviklingsoppgaver som del av internship'],
    technologies: ['JavaScript', 'HTML', 'CSS'],
    achievements: [],
    type: 'contract'
  },
  {
    title: 'Webansvarlig',
    company: 'Telesalg AS',
    location: 'Norge',
    period: 'Juli 2016 - Desember 2017',
    description: ['Ansvar for web og digitale kanaler'],
    technologies: ['PHP', 'JavaScript'],
    achievements: [],
    type: 'full-time'
  }
  ,
  {
    title: 'Bachelor i informatikk',
    company: 'USN',
    location: 'Norge',
    period: 'August 2022 - Juni 2025',
    description: ['Bachelorstudium i informatikk med fokus på programvareutvikling og systemdesign'],
    technologies: ['Java', 'Python', 'Databaser'],
    achievements: [],
    type: 'education'
  },
  {
    title: 'Bachelor i dynamisk webdesign',
    company: 'Høgskolen i Buskerud (HBu)',
    location: 'Norge',
    period: 'August 2010 - Juni 2013',
    description: ['Bachelor i dynamisk webdesign med fokus på front-end, UX og visuell kommunikasjon'],
    technologies: ['HTML', 'CSS', 'Photoshop', 'Illustrator'],
    achievements: [],
    type: 'education'
  }
]

const getTypeColor = (type: string) => {
  switch (type) {
    case 'full-time': return 'bg-blue-500'
    case 'freelance': return 'bg-green-500'
    case 'contract': return 'bg-orange-500'
    case 'startup': return 'bg-purple-500'
    case 'education': return 'bg-indigo-500'
    default: return 'bg-gray-500'
  }
}

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'full-time': return 'Fast ansatt'
    case 'freelance': return 'Frilans'
    case 'contract': return 'Kontrakt'
    case 'startup': return 'Startup'
    case 'education': return 'Utdanning'
    default: return 'Annet'
  }
}

export default function Experience() {
  return (
  <section id="experience" className="w-full py-48 md:py-64 bg-background-primary relative overflow-hidden flex justify-center" >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-accent-purple-300 to-transparent h-full opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-accent-purple-300/10"></div>
      </div>
      
  <div className="mx-auto px-6 lg:px-8 max-w-7xl relative z-10 " style={{ paddingBottom: '50px', paddingTop: '50px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-28 md:mb-36"
          style={{paddingBottom: '20px' }}
        >
          <h2 className="display-title font-bold mb-8 bg-gradient-to-r from-text-accent via-green-400 to-accent-purple-300 bg-clip-text text-transparent leading-tight tracking-tight">
            Reisen gjennom kode
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed text-center">
            18+ år med profesjonell utvikling, kontinuerlig læring og leveranser som gjør en forskjell
          </p>
        </motion.div>

        {/* Stats overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex justify-center mb-28 md:mb-36"
          style={{paddingBottom: '50px' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl">
            <div className="text-center bg-gradient-to-br from-surface-300 to-surface-400 rounded-xl p-10 md:p-12 border border-border-default">
              <Briefcase className="text-accent-purple-300 w-10 h-10 mx-auto mb-4" />
              <div className="text-3xl font-bold text-text-primary mb-2">6</div>
              <div className="text-text-secondary">Selskaper</div>
            </div>
            <div className="text-center bg-gradient-to-br from-surface-300 to-surface-400 rounded-xl p-10 md:p-12 border border-border-default">
              <TrendingUp className="text-green-400 w-10 h-10 mx-auto mb-4" />
              <div className="text-3xl font-bold text-text-primary mb-2">200+</div>
              <div className="text-text-secondary">Prosjekter</div>
            </div>
            <div className="text-center bg-gradient-to-br from-surface-300 to-surface-400 rounded-xl p-10 md:p-12 border border-border-default">
              <Users className="text-blue-400 w-10 h-10 mx-auto mb-4" />
              <div className="text-3xl font-bold text-text-primary mb-2">50+</div>
              <div className="text-text-secondary">Teammedlemmer</div>
            </div>
            <div className="text-center bg-gradient-to-br from-surface-300 to-surface-400 rounded-xl p-10 md:p-12 border border-border-default">
              <Award className="text-orange-400 w-10 h-10 mx-auto mb-4" />
              <div className="text-3xl font-bold text-text-primary mb-2">100%</div>
              <div className="text-text-secondary">Leveringsgrad</div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full flex justify-center">
          <div className="relative max-w-6xl w-full">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-accent-purple-300 via-green-400 to-accent-purple-300 h-full"></div>
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-accent-purple-300 rounded-full border-4 border-background-primary z-10">
                  <div className="absolute inset-0 bg-accent-purple-300 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 md:ml-0 mt-10 md:mt-0`} >
                  <div className="bg-gradient-to-br from-surface-300 to-surface-400 rounded-xl p-8 border border-border-default " 
                  style={{padding: '10px' }}>
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-purple-300 transition-colors mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-accent-purple-300 font-semibold mb-2" >{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <span 
                  style={{padding: '5px' }} className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(exp.type)}`}>
                        {getTypeLabel(exp.type)}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-text-secondary flex items-start gap-2">
                            <span className="text-accent-purple-300 mt-2">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-text-primary mb-2">Teknologier brukt</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-block px-2 py-1 bg-accent-purple-300/20 text-accent-purple-300 text-xs rounded border border-accent-purple-300/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-2">Viktige prestasjoner</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                            <Award className="w-3 h-3 text-accent-purple-300 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full text-center mt-28 md:mt-36"
          style={{paddingTop: '50px' }}
        >
          <div className="bg-surface-300 rounded-lg p-10 md:p-12 border border-border-default max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Klar for neste kapittel</h3>
            <p className="text-text-secondary mb-6 mt-5 mx-auto">
              Med over 18 års erfaring og en lidenskap for innovasjon, gleder jeg meg til å bidra med min kompetanse 
              til ditt neste prosjekt og bygge noe fantastisk sammen.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent-purple-300 hover:bg-accent-purple-400 text-background-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-purple-300/50"
            >
              La oss jobbe sammen
            </button>
          </div>
        </motion.div>
        {/* Education entries moved into the timeline above */}
      </div>
    </section>
  )
}