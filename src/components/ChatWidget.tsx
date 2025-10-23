'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  Loader2,
  MessageCircle,
  Send,
  ShieldAlert,
  Sparkles,
  X,
} from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'

type Suggestion = {
  id: string
  label: string
}

type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  text: string
}

const API_BASE =
  process.env.NEXT_PUBLIC_CHAT_API_BASE?.replace(/\/$/, '') ?? 'http://localhost:5000'

const SUGGESTIONS: Suggestion[] = [
  { id: 'exp', label: 'Hva er din erfaring med React og TypeScript?' },
  { id: 'stack', label: 'Hvilken tech stack jobber du mest med?' },
  { id: 'projects', label: 'Fortell om et relevant prosjekt.' },
  { id: 'backend', label: 'Hvordan jobber du med backend og DevOps?' },
]

const SUGGESTION_MAP = new Map(SUGGESTIONS.map((entry) => [entry.id, entry.label]))

type ApiMessage = {
  role: string
  message: string
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [rateLimited, setRateLimited] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const panelId = useId()
  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const [nudgeTick, setNudgeTick] = useState(0)
  const [burstTick, setBurstTick] = useState(0)

  const suggestions = SUGGESTIONS
  const suggestionMap = SUGGESTION_MAP

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const storedId = window.localStorage.getItem('chat-session-id')
    if (storedId) {
      setSessionId(storedId)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    setTimeout(() => inputRef.current?.focus(), 150)
    if (sessionId && messages.length === 0) {
      void hydrateSession(sessionId)
    }
  }, [open, sessionId, messages.length])

  useEffect(() => {
    const id = setInterval(() => {
      if (!open) setNudgeTick((t) => t + 1)
    }, 30000)
    return () => clearInterval(id)
  }, [open])

  useEffect(() => {
    if (!open && nudgeTick > 0) {
      setBurstTick(nudgeTick)
    }
  }, [nudgeTick, open])

  async function hydrateSession(id: string) {
    try {
      const res = await fetch(`${API_BASE}/api/session/${encodeURIComponent(id)}`)
      if (!res.ok) return
      const data = await res.json()
      if (!Array.isArray(data?.messages)) return

      const history: ChatMessage[] = (data.messages as ApiMessage[])
        .filter(
          (entry): entry is ApiMessage & { role: 'user' | 'assistant' } =>
            Boolean(entry) &&
            (entry.role === 'user' || entry.role === 'assistant') &&
            typeof entry.message === 'string',
        )
        .map((entry, index) => ({
          id: `${entry.role}-${index}`,
          role: entry.role,
          text: entry.message,
        }))

      if (history.length) {
        setMessages(history)
      }
    } catch {
      // ignore hydration errors
    }
  }

  const appendMessage = (role: ChatMessage['role'], text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: `${role}-${prev.length}-${Date.now()}`, role, text },
    ])
  }

  const handleSubmit = async (text: string) => {
    if (!text.trim() || loading || rateLimited) return

    const trimmed = text.trim()
    setValue('')
    setError(null)
    appendMessage('user', trimmed)

    setLoading(true)
    try {
      const response = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          session_id: sessionId ?? undefined,
        }),
      })

      if (!response.ok) {
        throw new Error(`API responded with ${response.status}`)
      }

      const data = await response.json()

      if (data?.session_id && typeof data.session_id === 'string') {
        setSessionId(data.session_id)
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('chat-session-id', data.session_id)
        }
      }

      if (typeof data?.message === 'string') {
        appendMessage('assistant', data.message)
      } else {
        appendMessage('assistant', 'Jeg klarte ikke å tolke svaret fra API-et.')
      }

      setRateLimited(Boolean(data?.rate_limited))
    } catch (error) {
      console.error('Chat API request failed', error)
      setError('Kunne ikke kontakte API-et. Prøv igjen senere.')
      appendMessage('assistant', 'Beklager, jeg fikk ikke svar fra serveren akkurat nå.')
    } finally {
      setLoading(false)
    }
  }

  const handleSuggestionClick = (id: string) => {
    const suggestion = suggestionMap.get(id)
    if (suggestion) {
      void handleSubmit(suggestion)
    }
  }

  const handleClearSession = () => {
    setMessages([])
    setSessionId(null)
    setRateLimited(false)
    setError(null)
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('chat-session-id')
    }
  }

  return (
    <div className="pointer-events-none">
      <motion.button
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Lukk chat' : 'Åpne chat'}
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto fixed bottom-6 right-6 z-[1000] inline-flex items-center justify-center gap-0 rounded-full bg-transparent transition-transform focus:outline-none focus:ring-4 focus:ring-accent-purple-300/40 sm:bottom-8 sm:right-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
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

        <span className="relative inline-flex overflow-visible rounded-full bg-[conic-gradient(at_10%_10%,_#7C3AED,_#A855F7,_#C084FC,_#7C3AED)] p-1 shadow-[0_18px_45px_rgba(168,85,247,0.45)]">
          {!open && (
            <motion.span
              aria-hidden
              key="badge"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute -top-4 -right-2 select-none text-xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
              style={{ zIndex: 10 }}
            >
              AI
            </motion.span>
          )}
          <span className="relative inline-flex h-12 min-w-[160px] max-w-[200px] items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base text-white backdrop-blur-md">
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
            {!open && (
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full"
                animate={{ x: ['-120%', '120%'] }}
                transition={{ duration: 2.6, repeat: Infinity }}
                style={{
                  background:
                    'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.65) 55%, transparent 100%)',
                }}
              />
            )}
            <MessageCircle className="h-5 w-5" />
            <span>{open ? 'Lukk chat' : 'La oss chatte'}</span>
            {burstTick > 0 && !open && (
              <motion.span
                key={burstTick}
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-2 text-amber-300"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 1.2 }}
              >
                ✨
              </motion.span>
            )}
          </span>
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 180, damping: 20 }}
            className="pointer-events-auto fixed bottom-24 right-4 z-[999] w-[min(88vw,460px)] rounded-3xl border border-gray-200/60 bg-white/95 shadow-2xl shadow-accent-purple-200/45 backdrop-blur md:bottom-24 md:right-8"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative border-b border-gray-200 bg-gradient-to-r from-white via-white to-purple-50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Chat med AI-Borgar</p>
                    <p className="text-xs text-text-muted">
                      {rateLimited
                        ? 'Midleridig begrenset – hold en liten pause.'
                        : 'Svar innenfor profesjonelle temaer.'}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:text-accent-purple-300"
                    onClick={() => setOpen(false)}
                    aria-label="Lukk chat"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="max-h-[60vh] space-y-5 overflow-y-auto p-6">
                {messages.length === 0 ? (
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-5 text-[13px] leading-6 text-gray-700 shadow-sm">
                    <p>
                      Hei! Jeg er en AI-versjon av meg selv. Spør om erfaring, tech stack eller hvordan jeg jobber – så
                      svarer jeg.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-gray-500">
                      <ShieldAlert className="h-3.5 w-3.5" />
                      <span>Svar er begrenset til profesjonelle temaer.</span>
                    </div>
                  </div>
                ) : null}

                {messages.map((message) =>
                  message.role === 'assistant' ? (
                    <div key={message.id} className="flex items-start gap-3">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-purple-400/20 text-accent-purple-300">
                        🤖
                      </div>
                      <div className="max-w-[85%] rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-[13px] leading-6 text-gray-800 shadow-sm">
                        {message.text}
                      </div>
                    </div>
                  ) : (
                    <div key={message.id} className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl border border-accent-purple-200/70 bg-accent-purple-50 px-4 py-3 text-[13px] leading-6 text-purple-900 shadow-sm">
                        {message.text}
                      </div>
                    </div>
                  ),
                )}

                <div className="h-px bg-gray-200/80" />

                <div className="mt-2">
                  <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                    <span>Forslag</span>
                    {sessionId ? (
                      <button
                        type="button"
                        onClick={handleClearSession}
                        className="rounded-md border border-gray-300 px-2 py-1 text-[10px] font-medium text-gray-600 transition-colors hover:border-red-200 hover:text-red-500"
                      >
                        Nullstill
                      </button>
                    ) : null}
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        title={s.label}
                        onClick={() => handleSuggestionClick(s.id)}
                        className="group inline-flex w-full items-center gap-3 rounded-xl border border-gray-200 px-3 py-2 text-[13px] text-gray-800 transition-colors hover:border-accent-purple-300/60 hover:bg-accent-purple-100/20 hover:text-purple-900"
                      >
                        <Sparkles className="h-4 w-4 text-accent-purple-300" />
                        <span className="whitespace-normal break-words leading-5 text-pretty">{s.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 bg-white p-4">
                <label htmlFor={`${panelId}-input`} className="sr-only">
                  Skriv melding
                </label>
                <div className="relative">
                  <MessageCircle
                    aria-hidden
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    height={20}
                    width={20}
                  />
                  <textarea
                    id={`${panelId}-input`}
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        void handleSubmit(value)
                      }
                    }}
                    rows={1}
                    aria-describedby={`${panelId}-hint`}
                    placeholder="Skriv en melding..."
                    className="w-full resize-none rounded-full border border-gray-300 bg-white py-3 pl-12 pr-12 text-gray-900 placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-4 focus:ring-accent-purple-300/30"
                  />
                  <button
                    type="button"
                    disabled={!value.trim() || loading || rateLimited}
                    onClick={() => handleSubmit(value)}
                    title={
                      rateLimited
                        ? 'Du har nådd grensen for denne chatten.'
                        : loading
                        ? 'Sender…'
                        : 'Send melding'
                    }
                    className="absolute right-1.5 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-accent-purple-300/60 bg-accent-purple-300 text-white shadow transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  </button>
                </div>
                <div
                  id={`${panelId}-hint`}
                  className="mt-2 flex items-center justify-between text-[11px] text-gray-500"
                >
                  <span>{rateLimited ? 'Foreløpig pauset – prøv igjen senere.' : 'Kun profesjonelle spørsmål'}</span>
                  <span>Enter for å sende • Shift+Enter for linjeskift</span>
                </div>
                {error ? (
                  <div className="mt-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-[11px] text-red-600">
                    {error}
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

