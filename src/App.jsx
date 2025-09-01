import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import SkillsGrid from './components/SkillsGrid'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SideControls from './components/SideControls'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <SideControls />
          <main>
            <Hero />
            <About />
            <Projects />
            <SkillsGrid />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
