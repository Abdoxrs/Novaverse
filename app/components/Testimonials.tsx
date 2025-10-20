'use client'

import { useInView } from 'react-intersection-observer'

interface TestimonialCardProps {
  text: string
  author: string
  role: string
  index: number
}

function TestimonialCard({ text, author, role, index }: TestimonialCardProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 180}ms` }}
      className={`relative p-8 rounded-2xl bg-bg-card border border-border-primary hover:-translate-y-1 hover:border-border-accent hover:shadow-lg transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Quote mark */}
  <div className="absolute top-2 left-6 text-6xl text-accent-purple/30 font-serif">{"\u201C"}</div>

      {/* Stars */}
      <div className="flex justify-center gap-1 text-yellow-400 text-lg mb-6">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fas fa-star" />
        ))}
      </div>

      {/* Text */}
      <p className="text-text-secondary italic leading-relaxed mb-8 text-center relative z-10">
        {text}
      </p>

      {/* Author */}
      <div className="text-center">
        <h4 className="font-semibold text-text-primary mb-1">{author}</h4>
        <p className="text-accent-purple text-sm">{role}</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const testimonials = [
    {
      text: "NovaVerse transformed our online presence completely. Their team is professional, creative, and delivers exactly what they promise. Our sales increased by 250% after launching the new website!",
      author: 'Emma Thompson',
      role: 'CEO, TechMart Solutions',
    },
    {
      text: "Working with NovaVerse was a game-changer. They didn't just build us an app; they helped us reimagine our entire digital strategy. The results speak for themselves!",
      author: 'David Park',
      role: 'Founder, FitTracker App',
    },
    {
      text: 'The social media management service from NovaVerse took our restaurant from unknown to the talk of the town. Their creative campaigns brought in customers we never knew existed!',
      author: 'Maria Rodriguez',
      role: 'Owner, FoodieHub Restaurant',
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center accent-gradient-text mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-text-muted text-lg mb-16">Real Reviews from Real People</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}