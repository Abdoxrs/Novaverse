'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface StatItemProps {
  target: number
  label: string
  suffix?: string
}

function StatItem({ target, label, suffix = '' }: StatItemProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000
      const increment = target / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, target])

  return (
    <div
      ref={ref}
      className="p-6 rounded-xl bg-bg-card border border-border-primary hover:border-accent-purple transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
    >
      <h3 className="text-4xl md:text-5xl font-bold accent-gradient-text mb-2">
        {count}{suffix}
      </h3>
      <p className="text-text-muted font-medium">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 bg-bg-secondary border-y border-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <StatItem target={100} label="Success Rate" suffix="%" />
          <StatItem target={3} label="Years Experience" />
          <StatItem target={50} label="Projects Completed" />
          <StatItem target={25} label="Happy Clients" />
        </div>
      </div>
    </section>
  )
}