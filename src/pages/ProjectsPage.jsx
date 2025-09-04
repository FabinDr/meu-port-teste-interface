import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideControls from '../components/SideControls'
import { ThemeProvider } from '../contexts/ThemeContext'
import { LanguageProvider } from '../contexts/LanguageContext'
import Projects from '../components/Projects'

const ProjectsPage = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header backOnly />
          <SideControls />
          <main className="pt-24">
            <Projects showViewAllButton={false} showTopBackButton />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default ProjectsPage
