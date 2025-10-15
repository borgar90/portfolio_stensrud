'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, ShieldAlert, Sparkles } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'

type Suggestion = {
  id: string
  label: string
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const panelId = useId()
  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const [nudgeTick, setNudgeTick] = useState(0)
  const [burstTick, setBurstTick] = useState(0)

  const suggestions: Suggestion[] = [
    { id: 'exp', label: 'Hva er din erfaring med React og TypeScript?' },
    { id: 'stack', label: 'Hvilken tech stack jobber du mest med?' },
    { id: 'projects', label: 'Fortell om et relevant prosjekt.' },
    { id: 'backend', label: 'Hvordan jobber du med backend og DevOps?' },
  ]

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) {
      // Focus the input when opening the panel
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [open])

  // Periodic nudge animation every ~30s when closed
  useEffect(() => {
    const id = setInterval(() => {
      if (!open) setNudgeTick((t) => t + 1)
    }, 30000)
    return () => clearInterval(id)
  }, [open])

  // Trigger a small sparkle burst together with nudge when closed
  useEffect(() => {
    if (!open && nudgeTick > 0) {
      setBurstTick(nudgeTick)
    }
  }, [nudgeTick, open])

  return (
    <div className="pointer-events-none">
      {/* Floating toggle button */}
      <motion.button
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Lukk chat' : 'Åpne chat'}
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto cursor-pointer fixed md:absolute bottom-6 right-6 md:bottom-8 md:right-8 z-40 inline-flex items-center justify-center gap-0 rounded-full hover:scale-[1.03] active:scale-[0.98] transition-transform focus:outline-none focus:ring-4 focus:ring-accent-purple-300/40 overflow-visible"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Radiating rings (closed only) - outside inner container to avoid clipping */}
        {!open && (
          <>
            <motion.span
              aria-hidden
              className="absolute -inset-8 rounded-full border border-accent-purple-300/30"
              animate={{ opacity: [0.25, 0], scale: [1, 1.6] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.span
              aria-hidden
              className="absolute -inset-12 rounded-full border border-accent-purple-300/20"
              animate={{ opacity: [0.18, 0], scale: [1, 1.9] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
            />
          </>
        )}

        {/* Vibrant glass button with gradient border and clipped glow */}
        <span className="relative inline-flex rounded-full p-1 overflow-visible bg-[conic-gradient(at_10%_10%,_#7C3AED,_#A855F7,_#C084FC,_#7C3AED)] shadow-[0_18px_45px_rgba(168,85,247,0.45)]">
          {/* AI badge outside pill, absolute to button */}
          {!open && (
            <motion.span
              aria-hidden
              key="badge"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute -top-4 -right-2 text-xl font-extrabold uppercase tracking-widest text-white select-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
              style={{ zIndex: 10 }}
            >
              AI
            </motion.span>
          )}
          <span className="relative inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 backdrop-blur-md text-white px-6 py-4 min-w-[160px] max-w-[200px] h-12 whitespace-nowrap text-base border border-white/20 overflow-hidden">
            {/* Pulsing glow when closed (clipped to inner) */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full bg-accent-purple-300/35 blur-2xl"
              animate={
                open
                  ? { opacity: 0.18, scale: 1 }
                  : { opacity: [0.28, 0.55, 0.28], scale: [1, 1.06, 1] }
              }
              transition={{ duration: 2.2, repeat: open ? 0 : Infinity }}
            />

            {/* Sheen shimmer across the button (closed only, clipped to inner) */}
            {!open && (
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    'linear-gradient(115deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 70%)',
                }}
                initial={{ x: '-140%' }}
                animate={{ x: ['-140%', '140%'] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}

            {/* (Removed inner badge to avoid duplication) */}

            {/* Button content with periodic nudge */}
            <motion.span
              key={nudgeTick}
              animate={
                open
                  ? { x: 0, rotate: 0 }
                  : { x: [0, 0, -3, 3, -2, 2, 0], rotate: [0, 0, -1, 1, -0.5, 0.5, 0] }
              }
              transition={{ duration: 0.9 }}
              className="relative z-[1] inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5 text-white" />
              <span className="font-semibold">Chat med meg</span>
            </motion.span>
          </span>
        </span>

        {/* Sparkle burst on nudge (closed only) - outside inner to allow overflow */}
        <AnimatePresence>
          {!open && burstTick > 0 && (
            <>
              {Array.from({ length: 7 }).map((_, i) => {
                const startX = (Math.random() * 60) - 30 // px offset
                const endX = startX + (Math.random() * 20 - 10)
                const startY = (Math.random() * 6) - 3
                const duration = 0.9 + Math.random() * 0.4
                const delay = i * 0.03
                return (
                  <motion.span
                    key={`spark-${burstTick}-${i}`}
                    aria-hidden
                    className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-accent-purple-300 shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                    initial={{ x: startX, y: startY, opacity: 0.0, scale: 0.6 }}
                    animate={{ x: endX, y: startY - 26 - Math.random() * 8, opacity: [0.2, 1, 0], scale: [0.6, 1, 0.8] }}
                    transition={{ duration, ease: 'easeOut', delay }}
                    exit={{ opacity: 0 }}
                  />
                )
              })}
            </>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${panelId}-title`}
            id={panelId}
            className="pointer-events-auto fixed md:absolute bottom-24 right-6 md:bottom-[5.5rem] md:right-8 z-40 w-[92vw] max-w-md"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.18 }}
          >
            <div className="rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-accent-purple-300 to-accent-purple-500 grid place-items-center text-white font-semibold">B</div>
                  <div>
                    <h3 id={`${panelId}-title`} className="text-gray-900 font-semibold">Borgar-boten</h3>
                    <p className="text-gray-500 text-xs">Profesjonelle spørsmål om erfaring, kompetanse og prosjekter</p>
                  </div>
                </div>
                <button
                  aria-label="Lukk chat"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent-purple-300/50"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="max-h-[60vh] overflow-y-auto p-6 space-y-5">
                {/* Assistant welcome */}
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-accent-purple-400/20 grid place-items-center text-accent-purple-300">🤖</div>
                  <div className="bg-gray-50 border border-gray-200 text-gray-800 rounded-2xl px-4 py-3 max-w-[85%] shadow-sm">
                    <p className="text-[13px] leading-6">Hei! Jeg er en AI-versjon av meg selv. Spør meg om min erfaring, hva jeg jobber med, eller hvordan jeg kan hjelpe teamet ditt.</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-gray-500">
                      <ShieldAlert className="h-3.5 w-3.5" />
                      <span>Svar er begrenset til profesjonelle temaer.</span>
                    </div>
                  </div>
                </div>

                {/* Example Q&A for design demo */}
                <div className="flex justify-end">
                  <div className="bg-accent-purple-50 border border-accent-purple-200/70 text-purple-900 rounded-2xl px-4 py-3 max-w-[85%] shadow-sm">
                    <p className="text-[13px] leading-6">Hvilke teknologier bruker du mest for tiden?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-accent-purple-400/20 grid place-items-center text-accent-purple-300">🤖</div>
                  <div className="bg-gray-50 border border-gray-200 text-gray-800 rounded-2xl px-4 py-3 max-w-[85%] shadow-sm">
                    <p className="text-[13px] leading-6">Jeg jobber daglig med TypeScript, React, Node.js og moderne cloud- og DevOps-praksis. Designet her er kun en prototype — ingen meldinger sendes ennå.</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200/80" />

                {/* Suggestions */}
                <div className="mt-2">
                  <p className="mb-2 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Forslag</p>
                  <div className="grid grid-cols-1 gap-2">
                  {suggestions.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      title={s.label}
                      onClick={() => setValue(s.label)}
                      className="group w-full inline-flex items-center gap-3 px-3 py-2 rounded-xl border border-gray-200 text-[13px] text-gray-800 hover:text-purple-900 hover:border-accent-purple-300/60 hover:bg-accent-purple-100/20 transition-colors"
                    >
                      <Sparkles className="h-4 w-4 text-accent-purple-300" />
                      <span className="whitespace-normal break-words leading-5 text-pretty">{s.label}</span>
                    </button>
                  ))}
                  </div>
                </div>
              </div>

              {/* Composer */}
              <div className="border-t border-gray-200 bg-white p-4">
                <label htmlFor={`${panelId}-input`} className="sr-only">Skriv melding</label>
                <div className="relative">
                  <MessageCircle aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <textarea
                    id={`${panelId}-input`}
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    rows={1}
                    aria-describedby={`${panelId}-hint`}
                    placeholder="Skriv en melding..."
                    className="w-full resize-none rounded-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 pl-12 pr-12 py-3 focus:outline-none focus:ring-4 focus:ring-accent-purple-300/30 shadow-sm"
                  />
                  <button
                    type="button"
                    disabled
                    title="Kommer snart — ingen backend koblet til ennå"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-accent-purple-300 text-white h-10 w-10 border border-accent-purple-300/60 opacity-80 cursor-not-allowed shadow"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                <div id={`${panelId}-hint`} className="mt-2 flex items-center justify-between text-[11px] text-gray-500">
                  <span>Kun profesjonelle spørsmål</span>
                  <span>Enter for å sende • Shift+Enter for linjeskift</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
