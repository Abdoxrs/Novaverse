'use client'

import { useInView } from 'react-intersection-observer'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  price: string
  index: number
}

function ServiceCard({ icon, title, description, price, index }: ServiceCardProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`relative p-8 rounded-2xl bg-bg-card border border-border-primary overflow-hidden group hover:-translate-y-2 hover:border-border-accent hover:shadow-xl transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 accent-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      {/* Icon */}
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl accent-gradient flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
        <i className={icon} />
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-4 text-center">
        {title}
      </h3>
      <p className="text-text-muted text-center mb-6 leading-relaxed">{description}</p>

      {/* Price */}
      <div className="inline-block w-full text-center">
        <span className="px-4 py-2 rounded-lg text-lg font-bold text-accent-purple bg-accent-purple/10 inline-block">
          {price}
        </span>
      </div>
    </div>
  )
}

export default function Services() {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Complete Website Development',
      description:
        'From initial concept to final launch, we build stunning, responsive websites that captivate your audience and drive results.',
      price: 'Starting from $299',
    },
    {
      icon: 'fas fa-share-alt',
      title: 'Social Media Management',
      description:
        'Build your personal brand and engage your audience with our comprehensive social media strategy and management services.',
      price: 'Starting from $199/month',
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Online Ads & Marketing',
      description:
        'Maximize your ROI with targeted digital marketing campaigns that reach the right audience at the right time.',
      price: 'Starting from $149/month',
    },
    {
      icon: 'fas fa-palette',
      title: 'Creative Design',
      description:
        'Eye-catching banners, promotional materials, and visual content that make your brand stand out from the competition.',
      price: 'Starting from $99',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile App Development',
      description:
        'Ready-to-use mobile applications that provide seamless user experiences across all devices and platforms.',
      price: 'Starting from $499',
    },
    {
      icon: 'fas fa-cogs',
      title: 'Full Service Management',
      description:
        'Let us handle everything while you focus on your business. Complete management of all digital services under one roof.',
      price: 'Custom Quote',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center accent-gradient-text mb-4">
          Our Services
        </h2>
        <p className="text-center text-text-muted text-lg mb-16">
          Everything You Need for Digital Success
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}