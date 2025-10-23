'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Code, Coffee, Sparkles } from 'lucide-react'
import ChatWidget from './ChatWidget'

const FLOATING_SYMBOLS = [
  { id: 0, symbol: '</', left: '6%', top: '12%', x: 55, y: 40, duration: 16 },
  { id: 1, symbol: '/>', left: '18%', top: '28%', x: -60, y: 32, duration: 19 },
  { id: 2, symbol: '{}', left: '32%', top: '10%', x: 70, y: 48, duration: 18 },
  { id: 3, symbol: '[]', left: '46%', top: '22%', x: -50, y: 38, duration: 21 },
  { id: 4, symbol: '()', left: '60%', top: '14%', x: 60, y: 42, duration: 17 },
  { id: 5, symbol: '=>', left: '74%', top: '26%', x: -40, y: 30, duration: 20 },
  { id: 6, symbol: '&&', left: '88%', top: '18%', x: -70, y: 36, duration: 22 },
  { id: 7, symbol: '||', left: '12%', top: '46%', x: 60, y: -28, duration: 19 },
  { id: 8, symbol: '</', left: '26%', top: '62%', x: -65, y: -34, duration: 18 },
  { id: 9, symbol: '/>', left: '40%', top: '48%', x: 55, y: -26, duration: 21 },
  { id: 10, symbol: '{}', left: '54%', top: '60%', x: -60, y: -40, duration: 17 },
  { id: 11, symbol: '[]', left: '68%', top: '50%', x: 70, y: -32, duration: 19 },
  { id: 12, symbol: '()', left: '82%', top: '64%', x: -55, y: -36, duration: 20 },
  { id: 13, symbol: '=>', left: '16%', top: '74%', x: 45, y: -30, duration: 18 },
  { id: 14, symbol: '&&', left: '30%', top: '86%', x: -58, y: -28, duration: 22 },
  { id: 15, symbol: '||', left: '48%', top: '78%', x: 52, y: -32, duration: 21 },
  { id: 16, symbol: '</', left: '66%', top: '82%', x: -48, y: -26, duration: 19 },
  { id: 17, symbol: '/>', left: '84%', top: '76%', x: 58, y: -38, duration: 20 },
  { id: 18, symbol: '{}', left: '4%', top: '80%', x: 62, y: -40, duration: 24 },
  { id: 19, symbol: '[]', left: '92%', top: '40%', x: -64, y: 28, duration: 23 },
]

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('skills')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white via-background-primary to-background-tertiary py-8 sm:py-14">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-code-pattern opacity-5"></div>
      
      {/* Floating code symbols */}
      <div className="absolute inset-0">
        {FLOATING_SYMBOLS.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-accent-purple-300 opacity-20"
            style={{ left: item.left, top: item.top }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.15, 0.6, 0.15],
              x: [0, item.x, 0],
              y: [0, item.y, 0],
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: (item.id % 4) * 1.2,
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

  {/* Chat widget (UI only) */}
  <ChatWidget />
 
  <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center lg:px-8">
      
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
            className="mb-10 flex flex-col items-center justify-center gap-2"
          >
             
            <Coffee className="h-6 w-6 text-accent-purple-400" />
            <span className="text-3xl text-text-secondary md:text-4xl">Hei, jeg er</span>
            <span className="flex flex-col gap-2 justify-center items-center text-3xl font-semibold uppercase tracking-wide text-accent-purple-500 md:text-4xl">
              Borgar Flaen Stensrud
            </span>
             <div className="p-1 h-40 w-40 sm:h-48 sm:w-48 lg:h-52 lg:w-52 overflow-hidden rounded-full bg-white/80 shadow-lg shadow-accent-purple-200/40">
              <Image
                src="/borgar-avatar.png"
                alt="Portrett av Borgar Flaen Stensrud"
                width={208}
                height={208}
                priority
                className="pointer-events-none select-none h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Title with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-8"
          >
            <div className="mb-4 flex items-center justify-center gap-3 text-2xl text-text-primary md:text-3xl">
              <Code className="h-7 w-7 text-accent-purple-400 md:h-8 md:w-8" />
              <span className="font-mono text-3xl md:text-4xl">Fullstack-utvikler</span>
              <Sparkles className="h-7 w-7 text-accent-purple-400 md:h-8 md:w-8" />
            </div>
          </motion.div>

          {/* Experience highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-4 rounded-full border border-border-accent/60 bg-white/80 px-8 py-4 shadow-sm shadow-accent-purple-200/40 backdrop-blur">
              <div className="h-3 w-3 animate-pulse rounded-full bg-accent-purple-400"></div>
              <span className="text-base font-medium text-text-secondary md:text-lg">
                <span className="text-2xl font-bold text-accent-purple-500">18+</span> år med kode i toppklasse
              </span>
            </div>
          </motion.div>

          {/* CV Summary */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
           
            <button
              type="button"
              aria-label="Se arbeidet mitt"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 rounded-xl border border-transparent bg-gradient-to-r from-accent-purple-200 via-accent-purple-300 to-accent-purple-400 px-6 py-3 text-lg font-semibold text-text-accent shadow-lg shadow-accent-purple-200/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-accent-purple-300 focus:outline-none focus:ring-4 focus:ring-accent-purple-200/80"
            >
               <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80">
                <Code className="h-4 w-4 text-accent-purple-500" />
              </span>
              <span>Se arbeidet mitt</span>
            </button>

            <button
              type="button"
              aria-label="La oss ta en prat"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 rounded-xl border border-emerald-100 bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-400 px-6 py-3 text-lg font-semibold text-emerald-900 shadow-lg shadow-emerald-200/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-emerald-300 focus:outline-none focus:ring-4 focus:ring-emerald-200/80"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70">
                <Coffee className="h-4 w-4 text-emerald-700" />
              </span>
              <span>La oss ta en prat</span>
            </button>
          </motion.div>

          {/* Tech stack preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="pt-6 text-sm text-text-muted"
          >
            <p className="mb-4">Bygget med dyktighet ved bruk av</p>
            <div className="flex flex-wrap justify-center gap-3 text-accent-purple-400 md:gap-4">
              {['TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'C#', 'Docker', 'PHP', 'Java'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + index * 0.1, duration: 0.4 }}
                  className="rounded-full border border-border-default bg-white/70 px-4 py-2 text-base font-mono text-text-secondary shadow-sm transition-colors duration-300 hover:border-accent-purple-300 hover:text-text-accent md:text-lg"
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
          className="pt-8"
        >
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center text-text-muted transition-colors duration-300 hover:text-accent-purple-400"
          >
            <span className="text-lg mb-2 opacity-70">Scroll for å utforske</span>
            <ChevronDown className="w-6 h-6 animate-bounce-gentle group-hover:text-accent-purple-400" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}


