'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export default function Contact() {

  const contactMethods = [
    {
      icon: <Mail />,
      label: 'E-post',
      value: 'borgar90@gmail.com',
      href: 'mailto:borgar90@gmail.com',
      description: 'Send meg en e-post for en mer detaljert prat'
    },
    {
      icon: <Phone />,
      label: 'Telefon',
      value: '+47 975 01 753',
      href: 'tel:+4797501753',
      description: 'Ring for hastesaker eller konsultasjoner'
    },
    {
      icon: <MapPin />,
      label: 'Lokasjon',
      value: 'Tilgjengelig globalt (remote)',
      href: '#',
      description: 'Åpen for fjernarbeid og reise'
    },
    {
      icon: <Linkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/borgar',
      href: 'www.linkedin.com/in/borgar-stensrud-0204181a',
      description: 'Koble deg til meg profesjonelt'
    }
  ]

  const socialLinks = [
    { icon: <Github />, label: 'GitHub', href: 'https://github.com/borgar90' },
    { icon: <Linkedin />, label: 'LinkedIn', href: 'www.linkedin.com/in/borgar-stensrud-0204181a' },
  
  ]

  return (
  <section id="contact" className="w-full py-48 md:py-64 bg-background-secondary relative overflow-hidden flex justify-center" >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple-300/10 via-transparent to-green-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple-300/5 to-transparent"></div>
      
  <div className="mx-auto px-6 lg:px-8 max-w-7xl relative z-10" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-28 md:mb-36"
        >
          <h2 className="display-title font-bold mb-8 bg-gradient-to-r from-text-accent via-green-400 to-accent-purple-300 bg-clip-text text-transparent leading-tight tracking-tight">
            La oss bygge noe fantastisk
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary mx-auto leading-relaxed text-center">
            Klar for å gjøre ideene dine til virkelighet? La oss snakke om hvordan mine 18+ år med erfaring kan hjelpe prosjektet ditt i mål.
          </p>
        </motion.div>

        <div className="w-full "  style={{ paddingTop: '50px', paddingBottom: '50px' }}
       >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-surface-300 to-surface-400 rounded-xl p-10 md:p-12 border border-border-default">
                <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">Ta kontakt</h3>

                {/* Contact methods */}
                <div className="space-y-6 mb-8">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <a
                        href={method.href}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-400 transition-colors duration-300"
                      >
                        <div className="text-accent-purple-300 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-1">
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="text-text-primary font-semibold group-hover:text-accent-purple-300 transition-colors">
                            {method.label}
                          </h4>
                          <p className="text-accent-purple-300 text-sm mb-1">{method.value}</p>
                          <p className="text-text-muted text-xs">{method.description}</p>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Social links */}
                <div style={{ marginTop: '20px' }}>
                  <h4 className="text-text-primary font-semibold mb-4">Koble med meg</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-3 bg-surface-400 text-text-primary hover:bg-accent-purple-300 hover:text-background-primary rounded-lg transition-all duration-300 hover:scale-110"
                        title={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick stats */}
                <div className="mt-8 pt-8 border-t border-border-default" style={{ marginTop: '20px' }}>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent-purple-300">24h</div>
                      <div className="text-text-muted text-xs">Responstid</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent-purple-300">100%</div>
                      <div className="text-text-muted text-xs">Prosjektsuksess</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Empty placeholders to keep layout balanced */}
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="bg-surface-200/20 rounded-xl p-10 md:p-12 border border-border-default text-center max-w-3xl">
                <h4 className="text-lg font-semibold mb-2">Ingen skjema — direkte kontakt</h4>
                <p className="text-text-muted">Jeg foretrekker direkte e-post eller telefon. Bruk kontaktinformasjonen til venstre for å nå meg raskt.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-28 md:mt-36 pt-16 border-t border-border-default"  style={{ paddingTop: '20px' }}
       
        >
          <p className="text-text-muted mb-4">
            © 2024 Borgar Portfolio. Bygget med lidenskap ved bruk av Next.js, TypeScript og Tailwind CSS.
          </p>
          <p className="text-text-secondary">
            <span className="text-accent-purple-300">18+ år</span> med å gjøre kaffe om til kode ☕ → 💻
          </p>
        </motion.div>
      </div>
    </section>
  )
}