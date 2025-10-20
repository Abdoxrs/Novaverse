import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import LoadingScreen from './components/LoadingScreen'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NovaVerse - Digital Innovation Partners',
  description: 'Transform your digital presence with NovaVerse. We offer web development, mobile apps, social media management, and digital marketing services.',
  keywords: 'web development, mobile apps, digital marketing, social media, UI/UX design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} bg-bg-primary text-text-primary overflow-x-hidden`}>
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}