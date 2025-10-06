import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import AdditionalSkills from '@/components/AdditionalSkills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <AdditionalSkills />
      <Contact />
    </main>
  )
}
