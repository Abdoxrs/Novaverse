'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`bg-bg-card rounded-xl border border-border-primary hover:border-border-accent transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 flex justify-between items-center gap-4 text-left hover:text-accent-purple transition-colors"
      >
        <span className="text-base md:text-lg font-semibold text-text-primary">{question}</span>
        <i
          className={`fas fa-chevron-down text-accent-purple transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 md:px-8 pb-6 md:pb-8 text-text-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const faqs = [
    {
      question: 'How long does it take to complete a website?',
      answer:
        'Most websites are completed within 2-4 weeks, depending on complexity. Simple business websites can be done in 1-2 weeks, while complex e-commerce or custom applications may take 4-8 weeks. We provide detailed timelines for each project during consultation.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer:
        'Yes! We offer comprehensive support packages including regular updates, security monitoring, backup services, and technical support. Our maintenance plans start from $49/month and can be customized to your specific needs.',
    },
    {
      question: "What's included in your social media management service?",
      answer:
        'Our social media management includes content creation, posting schedule management, engagement with followers, analytics reporting, hashtag research, and strategy development. We manage up to 3 platforms with our standard package.',
    },
    {
      question: 'Can you help with mobile app development for both iOS and Android?',
      answer:
        'Absolutely! We specialize in cross-platform development using React Native, which allows us to create apps that work seamlessly on both iOS and Android with a single codebase, saving time and cost while maintaining native performance.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods including bank transfers, credit/debit cards, PayPal, and cryptocurrency. For larger projects, we offer flexible payment plans with milestone-based payments to make it easier for our clients.',
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center accent-gradient-text mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-text-muted text-lg mb-16">Everything You Need to Know</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}