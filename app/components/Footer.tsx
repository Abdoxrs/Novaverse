import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-primary text-text-secondary py-16 border-t border-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold accent-gradient-text mb-4">NovaVerse</h3>
            <p className="text-text-muted leading-relaxed">
              Transforming ideas into digital reality. We're your partners in innovation, helping
              businesses thrive in the digital age with cutting-edge solutions and creative
              strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold accent-gradient-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-text-muted hover:text-accent-purple transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold accent-gradient-text mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile Apps',
                'Social Media',
                'Digital Marketing',
                'Creative Design',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-text-muted hover:text-accent-purple transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold accent-gradient-text mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-text-muted">
                <i className="fas fa-envelope" />
                <span>contact@novaverse.com</span>
              </li>
              <li className="flex items-center gap-2 text-text-muted">
                <i className="fas fa-phone" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-text-muted">
                <i className="fas fa-map-marker-alt" />
                <span>Global Remote Team</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-primary text-center text-text-disabled">
          <p>
            &copy; {currentYear} NovaVerse. All rights reserved. | Designed with ❤️ by NovaVerse
            Team
          </p>
        </div>
      </div>
    </footer>
  )
}