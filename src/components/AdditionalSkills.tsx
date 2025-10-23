'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Target, 
  Lightbulb, 
  MessageSquare, 
  GitBranch,
  Award,
} from 'lucide-react'

interface AdditionalSkill {
  name: string
  description: string
  icon: React.ReactNode
  category: string
  proficiency: number
  examples: string[]
}

const additionalSkills: AdditionalSkill[] = [
  {
    name: 'Entreprenørskap og forretningssans',
    description: 'Erfaring som frilanser og egen bedrift gir innsikt i salg, kundebehov og forretningslogikk',
    icon: <Target />,
    category: 'Business',
    proficiency: 90,
    examples: ['Egen virksomhet og frilans siden 2007', 'Håndtert tilbud, fakturering og kundekontakt']
  },
  {
    name: 'Kundeservice og salg',
    description: 'Bakgrunn i salg og bartending som styrker mellommenneskelige ferdigheter og serviceinnstilling',
    icon: <MessageSquare />,
    category: 'Business',
    proficiency: 88,
    examples: ['Håndtert kundesaker og salg', 'Sterk servicefokus under høyt tempo']
  },
  {
    name: 'Design og visuell kommunikasjon',
    description: 'Bakgrunn i Photoshop og Illustrator som støtter UX-design og visuell identitet',
    icon: <Lightbulb />,
    category: 'Design',
    proficiency: 85,
    examples: ['Designet visuelt materiale', 'Sikret god brukeropplevelse og visuell konsistens']
  },
  {
    name: 'Selvstendighet og initiativ',
    description: 'Lang erfaring som énmannsteam gir evne til å drive prosjekter fra idé til ferdig produkt',
    icon: <Users />,
    category: 'Personal',
    proficiency: 95,
    examples: ['Gjennomført komplette leveranser alene', 'Evne til å ta raskt eierskap over oppgaver']
  }
]

const categories = [
 { name: 'Methodology', color: 'from-pink-400 to-pink-600', icon: <GitBranch /> }
  , { name: 'Business', color: 'from-yellow-400 to-yellow-600', icon: <Target /> }
  , { name: 'Design', color: 'from-teal-400 to-teal-600', icon: <Lightbulb /> }
  , { name: 'Personal', color: 'from-indigo-400 to-indigo-600', icon: <Users /> }
]

// Norske visningsnavn for kategorier
const categoryDisplay: Record<string, string> = {
  Leadership: 'Ledelse',
  Communication: 'Kommunikasjon',
  Innovation: 'Innovasjon',
  Quality: 'Kvalitet',
  Methodology: 'Metodikk',
  Business: 'Forretning & salg',
  Design: 'Design',
  Personal: 'Selvstendighet'
}

const achievements = [
  { number: '200+', label: 'Prosjekter', icon: <Target /> },
  { number: '20', label: 'Teammedlemmer', icon: <Users /> },
  { number: '10', label: 'Utviklere veiledet', icon: <GitBranch /> },
  { number: '18+', label: 'Års erfaring', icon: <Award /> }
]

export default function AdditionalSkills() {
  return (
  <section className="relative flex w-full justify-center overflow-hidden bg-gradient-to-b from-background-secondary via-background-primary to-background-tertiary py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-orange-200/15 to-accent-purple-200/15"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-purple-300/5 to-transparent"></div>
      
  <div className="mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="display-title mb-6 text-3xl font-bold tracking-tight text-text-accent sm:text-4xl lg:text-5xl">
            Utover koden
          </h2>
          <p className="mx-auto mb-6 text-xl leading-relaxed text-text-secondary md:mb-8 md:text-2xl">
            Profesjonelle ferdigheter som skiller det å skrive kode fra å bygge fremragende produkter
          </p>
        </motion.div>

        {/* Achievement stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center justify-center mb-16 md:mb-20"
        >
          <div className="flex w-full max-w-4xl flex-wrap justify-center gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group w-full min-w-[140px] flex-1 rounded-lg border border-border-default bg-white/85 p-6 text-center transition-all duration-300 hover:border-accent-purple-300 hover:shadow-lg hover:shadow-accent-purple-200/30 sm:w-[calc(50%-0.75rem)] md:w-[calc(33%-0.75rem)] lg:w-auto lg:p-8"
              >
                <div className="text-accent-purple-300 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-text-primary mb-2">{achievement.number}</div>
                <div className="text-text-secondary text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full flex flex-wrap justify-center gap-6 mb-16 md:mb-20"
        >
          <div className="mb-12 flex w-full max-w-5xl flex-wrap justify-center gap-4 sm:gap-6 md:mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full min-w-[160px] flex-1 rounded-lg border border-border-default bg-surface-300 p-6 text-center transition-all duration-300 hover:border-accent-purple-300 hover:shadow-lg hover:shadow-accent-purple-200/30 sm:w-[calc(50%-0.75rem)] md:w-[calc(33%-0.75rem)] xl:w-[calc(25%-0.75rem)] lg:p-8"
              >
                <div className="text-accent-purple-300 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <div className="text-text-primary group-hover:text-accent-purple-300 transition-colors font-medium">
                  {categoryDisplay[category.name] ?? category.name}
                </div>
                <div className="text-text-muted text-sm mt-1">
                  {additionalSkills.filter(s => s.category === category.name).length} ferdigheter
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 max-w-5xl">
            {additionalSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border border-border-default bg-white/85 p-6 transition-all duration-300 hover:border-accent-purple-300 hover:shadow-lg hover:shadow-accent-purple-300/20 md:p-8"
            >
              {/* Gradient background with subtle pattern (orange-focused) */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-orange-200/15 to-accent-purple-200/15" />
              <div className="absolute inset-0 bg-code-pattern opacity-5" />
              <div className="relative">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-accent-purple-300 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-1">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-purple-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-accent-purple-300/20 text-accent-purple-300 border border-accent-purple-300/30`}>
                      {categoryDisplay[skill.category] ?? skill.category}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mb-3">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Proficiency bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-text-secondary mb-2">
                  <span>Nivå</span>
                  <span>{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-surface-400 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-accent-purple-300 to-accent-purple-500 h-2 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-300 to-accent-purple-500 rounded-full animate-glow opacity-75"></div>
                  </motion.div>
                </div>
              </div>

              {/* Examples */}
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2">Viktige prestasjoner</h4>
                <ul className="space-y-1">
                  {skill.examples.map((example, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                      <span className="text-accent-purple-300 mt-1 text-xs">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

      
      </div>
    </section>
  )
}






