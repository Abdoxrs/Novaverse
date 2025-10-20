'use client'

import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center accent-gradient-text mb-4">
            About Us
          </h2>
          <p className="text-center text-text-muted text-lg mb-12">
            Young Innovators, Big Dreams
          </p>

          <div className="space-y-6 text-text-secondary text-lg leading-relaxed text-center">
            <p>
              NovaVerse is a dynamic tech startup founded by three passionate friends who believe in
              the power of digital transformation. We combine cutting-edge development skills,
              creative design thinking, and strategic marketing expertise to help businesses thrive
              in the digital world.
            </p>
            <p>
              Our journey began with a simple vision: to make professional digital services
              accessible to everyone. Today, we&apos;re proud to offer comprehensive solutions that cover
              everything from web development to mobile apps, all managed under one roof for your
              convenience.
            </p>
            <p>
              We don&apos;t just build websites and apps - we craft digital experiences that tell your
              story, engage your audience, and drive real business results. Every project is a
              partnership, and every client becomes part of the NovaVerse family.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}