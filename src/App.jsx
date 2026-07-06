import Nav from './components/Nav'
import Hero from './components/Hero'
import WhatItIs from './components/WhatItIs'
import Modules from './components/Modules'
import HowItWorks from './components/HowItWorks'
import Privacy from './components/Privacy'
import WaitlistCTA from './components/WaitlistCTA'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a
        href="#what"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <WhatItIs />
        <Modules />
        <HowItWorks />
        <Privacy />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  )
}
