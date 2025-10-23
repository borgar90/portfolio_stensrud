import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://borgar.dev'),
  title: {
    default: 'Borgar Flaen Stensrud · Fullstack-utvikler',
    template: '%s · Borgar Flaen Stensrud',
  },
  description:
    'Fullstack-utvikler med 18+ års erfaring innen moderne web, sky og produktutvikling. Spesialist på TypeScript, React, Node.js og skalerbare løsninger.',
  keywords: [
    'fullstack utvikler',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'DevOps',
    'Design system',
    'Borgar Flaen Stensrud',
  ],
  authors: [{ name: 'Borgar Flaen Stensrud', url: 'https://borgar.dev' }],
  creator: 'Borgar Flaen Stensrud',
  publisher: 'Borgar Flaen Stensrud',
  category: 'technology',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://borgar.dev',
    title: 'Borgar Flaen Stensrud · Fullstack-utvikler',
    description:
      'Fullstack-utvikler med 18+ års erfaring innen moderne web, sky og produktutvikling. Spesialist på TypeScript, React, Node.js og skalerbare løsninger.',
    siteName: 'Borgar Flaen Stensrud',
    locale: 'nb_NO',
    images: [
      {
        url: '/Skjermbilde 2025-10-23 090737.png',
        width: 800,
        height: 800,
        alt: 'Portrett av Borgar Flaen Stensrud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borgar Flaen Stensrud · Fullstack-utvikler',
    description:
      'Fullstack-utvikler med 18+ års erfaring innen moderne web, sky og produktutvikling. Spesialist på TypeScript, React, Node.js og skalerbare løsninger.',
    creator: '@borgar',
    images: ['/Skjermbilde 2025-10-23 090737.png'],
  },
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="nb" className="bg-background-primary">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}



