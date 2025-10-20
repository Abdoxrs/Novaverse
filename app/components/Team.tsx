'use client'

import { useInView } from 'react-intersection-observer'

interface TeamMemberProps {
  icon: string
  name: string
  role: string
  description: string
  socials: { platform: string; icon: string; url: string }[]
  index: number
}

function TeamMember({ icon, name, role, description, socials, index }: TeamMemberProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 200}ms` }}
      className={`text-center p-8 rounded-2xl bg-bg-card border border-border-primary hover:-translate-y-2 hover:border-border-accent hover:shadow-xl transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Avatar */}
      <div className="w-32 h-32 mx-auto mb-6 rounded-full accent-gradient flex items-center justify-center text-white text-4xl shadow-lg group-hover:scale-105 transition-transform duration-300">
        <i className={icon} />
      </div>

      {/* Info */}
      <h3 className="text-2xl font-semibold text-text-primary mb-2">{name}</h3>
      <p className="text-accent-purple font-medium mb-4">{role}</p>
      <p className="text-text-muted leading-relaxed mb-6">{description}</p>

      {/* Social Links */}
      <div className="flex justify-center gap-3">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.url}
            className="w-10 h-10 rounded-full bg-bg-tertiary border border-border-primary text-text-secondary flex items-center justify-center hover:bg-accent-purple hover:text-white hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
            aria-label={social.platform}
          >
            <i className={social.icon} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Team() {
  const team = [
    {
      icon: 'fas fa-code',
      name: 'Abdelrhman Atef',
      role: 'CEO & Lead Developer',
      description:
        'Full-stack developer with 5+ years of experience in creating scalable web solutions and leading technical innovation. Passionate about clean code and user experience.',
      socials: [
        { platform: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
        { platform: 'GitHub', icon: 'fab fa-github', url: '#' },
        { platform: 'Twitter', icon: 'fab fa-x-twitter', url: '#' },
      ],
    },
    {
      icon: 'fas fa-palette',
      name: 'Mahmoude Rafat',
      role: 'Creative Director & UI/UX Designer',
      description:
        'Visual storyteller specializing in brand identity, UI/UX design, and creative marketing campaigns. Believes that great design solves problems beautifully.',
      socials: [
        { platform: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
        { platform: 'Dribbble', icon: 'fab fa-dribbble', url: '#' },
        { platform: 'Behance', icon: 'fab fa-behance', url: '#' },
      ],
    },
    {
      icon: 'fas fa-chart-line',
      name: 'Ahmed Hassan',
      role: 'Marketing Strategist & Growth Hacker',
      description:
        'Digital marketing expert focused on data-driven strategies and social media growth. Specializes in turning creative campaigns into measurable business results.',
      socials: [
        { platform: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
        { platform: 'Twitter', icon: 'fab fa-twitter', url: '#' },
        { platform: 'Instagram', icon: 'fab fa-instagram', url: '#' },
      ],
    },
  ]

  return (
    <section id="team" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center accent-gradient-text mb-4">
          Meet Our Team
        </h2>
        <p className="text-center text-text-muted text-lg mb-16">
          The Innovators Behind NovaVerse
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}