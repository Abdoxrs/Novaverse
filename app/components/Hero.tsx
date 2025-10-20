'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Welcome to NovaVerse'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowCursor(false), 2000)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden mt-20 md:mt-24"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent" />
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-accent-purple/5 to-transparent rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-accent-blue/5 to-transparent rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_reverse]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="accent-gradient-text inline-block animate-[gradientShift_3s_ease-in-out_infinite] bg-[length:200%_200%]">
            {displayText}
            {showCursor && <span className="animate-[blink_1s_infinite]">|</span>}
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-text-muted mb-8 md:mb-12 max-w-3xl mx-auto animate-[fadeInUp_0.8s_ease_0.2s_both]">
          Your Digital Innovation Partners - From Concept to Reality
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeInUp_0.8s_ease_0.4s_both]">
          <Link
            href="#contact"
            className="px-8 py-4 rounded-lg font-semibold text-white accent-gradient hover:shadow-glow transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center"
          >
            <i className="fas fa-rocket mr-2" />
            Start Your Project
          </Link>

          <Link
            href="#portfolio"
            className="px-8 py-4 rounded-lg font-semibold text-accent-purple border-2 border-accent-purple hover:bg-accent-purple hover:text-white hover:shadow-glow transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center"
          >
            <i className="fas fa-briefcase mr-2" />
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}