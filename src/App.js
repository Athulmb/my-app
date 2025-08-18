import React from 'react'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ScrollAnimatedStackSections from './components/AnimatedStackCard'

const App = () => {
  return (
   <>
   <Navbar />
   <ScrollAnimatedStackSections/>
   <AboutSection/>
   <AboutSection/>
   <AboutSection/>
   </>
  )
}

export default App
