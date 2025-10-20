import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}