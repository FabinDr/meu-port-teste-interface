import React from 'react'
import { Sun, Moon, Globe } from 'lucide-react'
import { Button } from './ui/Button'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'

const SideControls = () => {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      <Button
        aria-label="Toggle theme"
        variant="secondary"
        size="icon"
        className="w-12 h-12 rounded-full shadow-lg border-border/60"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>
      <Button
        aria-label="Toggle language"
        variant="secondary"
        size="icon"
        className="w-12 h-12 rounded-full shadow-lg border-border/60"
        onClick={toggleLanguage}
      >
        <Globe className="w-5 h-5" />
        <span className="sr-only">{language.toUpperCase()}</span>
      </Button>
    </div>
  )
}

export default SideControls
