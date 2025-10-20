'use client'

import { useState, FormEvent } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (formData.name.length < 2) {
      alert('Name must be at least 2 characters')
      return
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email')
      return
    }

    if (formData.message.length < 10) {
      alert('Message must be at least 10 characters')
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setShowSuccess(true)
    setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
    setIsSubmitting(false)

    setTimeout(() => setShowSuccess(false), 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
    { icon: 'fab fa-x-twitter', url: '#', label: 'Twitter', color: 'hover:bg-white hover:text-black' },
    { icon: 'fab fa-linkedin-in', url: '#', label: 'LinkedIn', color: 'hover:bg-[#0A66C2]' },
    {
      icon: 'fab fa-instagram',
      url: '#',
      label: 'Instagram',
      color: 'hover:bg-gradient-to-r hover:from-[#DD2A7B] hover:via-[#8134AF] hover:to-[#515BD4]',
    },
    { icon: 'fab fa-discord', url: '#', label: 'Discord', color: 'hover:bg-[#5865F2]' },
  ]

  return (
    <section id="contact" className="py-20 md:py-24 bg-bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center accent-gradient-text mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-text-muted text-lg mb-16">
          Let's Discuss Your Next Project
        </p>

        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Info */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-xl text-accent-purple font-semibold mb-3">
              <i className="fas fa-envelope" />
              <span>contact@novaverse.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg text-text-muted mb-6">
              <i className="fas fa-phone" />
              <span>+1 (555) 123-4567</span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  aria-label={social.label}
                  className={`w-12 h-12 rounded-xl bg-bg-card border border-border-primary text-text-secondary flex items-center justify-center transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-glow ${social.color}`}
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-6 p-4 rounded-lg bg-success text-white flex items-center gap-3 animate-[fadeInUp_0.3s_ease]">
              <i className="fas fa-check-circle text-2xl" />
              <span>Thank you! Your message has been sent successfully. We'll get back to you soon!</span>
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-bg-card p-6 md:p-12 rounded-2xl border border-border-primary shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-tertiary border border-border-primary rounded-lg text-text-primary focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-secondary font-medium mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-tertiary border border-border-primary rounded-lg text-text-primary focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-text-secondary font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-bg-tertiary border border-border-primary rounded-lg text-text-primary focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-text-secondary font-medium mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-bg-tertiary border border-border-primary rounded-lg text-text-primary focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all"
                >
                  <option value="">Select a Service</option>
                  <option value="website">Website Development</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="marketing">Online Ads & Marketing</option>
                  <option value="design">Creative Design</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="full-service">Full Service Management</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="budget" className="block text-text-secondary font-medium mb-2">
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-tertiary border border-border-primary rounded-lg text-text-primary focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all"
              >
                <option value="">Select Budget Range</option>
                <option value="under-500">Under $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2500">$1,000 - $2,500</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="over-5000">Over $5,000</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-text-secondary font-medium mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your project, goals, and any specific requirements..."
                className="w-full px-4 py-3 bg-bg-tertiary border border-border-primary rounded-lg text-text-primary focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 outline-none transition-all resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-lg font-semibold text-white accent-gradient hover:shadow-glow transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}