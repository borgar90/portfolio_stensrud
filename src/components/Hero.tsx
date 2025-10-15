'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Code, Coffee, Sparkles } from 'lucide-react'
import ChatWidget from './ChatWidget'

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('skills')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
  <section className="min-h-screen flex items-center justify-center relative bg-background-primary overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-code-pattern opacity-5"></div>
      
      {/* Floating code symbols */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-accent-purple-300 opacity-20"
            initial={{ 
              x: Math.random() * 1200, 
              y: Math.random() * 800,
              scale: 0 
            }}
            animate={{ 
              x: Math.random() * 1200, 
              y: Math.random() * 800,
              scale: [0, 1, 0],
              rotate: 360
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear" 
            }}
          >
            {['</', '/>', '{}', '[]', '()', '=>', '&&', '||'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
  </div>

  {/* Chat widget (UI only) */}
  <ChatWidget />

  <div className="flex flex-col justify-center items-center mx-auto px-6 lg:px-8 max-w-7xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-2 mb-10"
          >
            <Coffee className="text-accent-purple-300 w-6 h-6" />
            <span className="text-text-secondary text-4xl">Hei, jeg er</span>
            <span className="text-purple-500 font-semibold uppercase text-4xl">Borgar Flaen Stensrud</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-text-accent via-accent-purple-300 to-text-accent bg-clip-text text-transparent"
          >
            BORGAR
          </motion.h1>

          {/* Title with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl text-text-primary mb-4">
              <Code className="text-accent-purple-300 w-8 h-8" />
              <span className="font-mono text-4xl">Fullstack-utvikler</span>
              <Sparkles className="text-accent-purple-300 w-8 h-8" />
            </div>
          </motion.div>

          {/* Experience highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-4 bg-surface-300 border border-border-accent rounded-full px-8 py-4">
              <div className="w-3 h-3 bg-accent-purple-300 rounded-full animate-pulse"></div>
              <span className="text-text-primary font-medium" style={{ paddingBottom: '20px' }}>
                <span className="text-accent-purple-300 font-bold text-2xl" >18+</span> år med kode i toppklasse
              </span>
            </div>
          </motion.div>

          {/* Subtitle 
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ paddingBottom: '20px' }}
          >
            Skaper digitale opplevelser med lidenskap, presisjon og snart to tiår med
            <span className="text-accent-purple-300 font-semibold"> innovative løsninger</span>.
            Fra idé til produksjon bringer jeg konsepter til live gjennom kode.
          </motion.p>
*/}
          {/* CV Summary */}
          

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
           
            <button
              type="button"
              aria-label="Se arbeidet mitt"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-xl font-semibold text-lg text-white shadow-[0_18px_40px_rgba(79,70,229,0.18)] transform-gpu hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-700/60"
            style={{padding:"5px", paddingRight:"10px"}}
            >
               <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                <Code className="w-4 h-4 text-white" />
              </span>
              <span>Se arbeidet mitt</span>
            </button>

            <button
              type="button"
              aria-label="La oss ta en prat"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg text-white shadow-[0_18px_40px_rgba(16,185,129,0.18)] transform-gpu hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-green-900 via-green-800 to-green-700 focus:outline-none focus:ring-4 focus:ring-green-800/60"
               style={{padding:"5px", paddingRight:"10px"}}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                <Coffee className="w-4 h-4 text-white" />
              </span>
              <span>La oss ta en prat</span>
            </button>
          </motion.div>

          {/* Tech stack preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-text-muted text-sm"
            style={{ paddingTop: '20px' }}
          >
            <p className="mb-4">Bygget med dyktighet ved bruk av</p>
            <div className="flex flex-wrap justify-center gap-4 text-accent-purple-300 ">
              {['TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'C#', 'Docker', 'PHP', 'Java'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + index * 0.1, duration: 0.4 }}
                  className="bg-surface-300 px-3 py-1 rounded-full text-xl font-mono border border-border-default hover:border-accent-purple-300 transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className=""
          style={{ paddingTop: '20px' }}
        >
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center text-text-muted hover:text-accent-purple-300 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-lg mb-2 opacity-70">Scroll for å utforske</span>
            <ChevronDown className="w-6 h-6 animate-bounce-gentle group-hover:text-accent-purple-300" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}