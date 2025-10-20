'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section
      const sections = ['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#team', label: 'Team' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-secondary/80 backdrop-blur-xl py-0 shadow-lg'
          : 'bg-gradient-to-r from-gray-800/80 to-bg-primary/80 backdrop-blur-lg py-4'
      } border-b border-border-primary`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="flex items-center transition-transform hover:scale-105 overflow-visible">
            {/* Keep navbar height controlled by a small wrapper, let the logo overflow and scale visually */}
            <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 relative overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center scale-125 sm:scale-125 md:scale-150">
                <Image
                  src="/logo.png"
                  alt="NovaVerse Logo"
                  fill
                  className="object-contain brightness-110 hover:brightness-125 transition-all hover:drop-shadow-[0_4px_12px_rgba(139,92,246,0.4)]"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all relative group ${
                    activeSection === link.href.substring(1)
                      ? 'text-text-primary bg-accent-purple/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-accent-purple/10'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan transition-all ${
                      activeSection === link.href.substring(1) ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-text-primary transition-all ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-text-primary transition-all ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-text-primary transition-all ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="bg-bg-secondary border-t border-border-primary py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'text-text-primary bg-accent-purple/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-accent-purple/10'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}