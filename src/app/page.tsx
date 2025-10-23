import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import AdditionalSkills from '@/components/AdditionalSkills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-16 sm:gap-20 lg:gap-24">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <AdditionalSkills />
      <Contact />
    </main>
  )
}
