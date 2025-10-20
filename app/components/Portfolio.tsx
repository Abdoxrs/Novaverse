'use client'

import { useInView } from 'react-intersection-observer'

interface PortfolioItemProps {
  icon: string
  title: string
  description: string
  tags: string[]
  index: number
}

function PortfolioItem({ icon, title, description, tags, index }: PortfolioItemProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`rounded-2xl bg-bg-card border border-border-primary overflow-hidden cursor-pointer hover:scale-[1.02] hover:border-border-accent hover:shadow-xl transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image/Icon Area */}
      <div className="h-48 accent-gradient flex items-center justify-center text-white text-5xl relative overflow-hidden group">
        <i className={icon} />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-3">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const projects = [
    {
      icon: 'fas fa-shopping-cart',
      title: 'TechMart E-Commerce',
      description:
        'Complete online shopping solution with payment integration, inventory management, and customer reviews.',
      tags: ['E-Commerce', 'React', 'Payment Gateway'],
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Brand Boost Campaign',
      description:
        'Full rebranding and social media campaign that increased brand awareness by 300% in 6 months.',
      tags: ['Branding', 'Social Media', 'Marketing'],
    },
    {
      icon: 'fas fa-dumbbell',
      title: 'FitTracker Mobile App',
      description:
        'Cross-platform fitness tracking application with social features, workout plans, and progress analytics.',
      tags: ['Mobile App', 'Fitness', 'React Native'],
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'EduLearn Platform',
      description:
        'Online learning platform with video courses, quizzes, progress tracking, and certification system.',
      tags: ['Education', 'LMS', 'Video Streaming'],
    },
    {
      icon: 'fas fa-utensils',
      title: 'FoodieHub Restaurant',
      description:
        'Restaurant website with online ordering, table reservations, and loyalty program integration.',
      tags: ['Restaurant', 'Online Ordering', 'Reservations'],
    },
    {
      icon: 'fas fa-home',
      title: 'RealEstate Pro',
      description:
        'Property listing website with virtual tours, mortgage calculator, and agent portal.',
      tags: ['Real Estate', 'Virtual Tours', 'CRM'],
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center accent-gradient-text mb-4">
          Portfolio
        </h2>
        <p className="text-center text-text-muted text-lg mb-16">Our Recent Projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}