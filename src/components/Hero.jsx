import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { Button } from './ui/Button'
import { useLanguage } from '../contexts/LanguageContext'
import StarField from './StarField'

const Hero = () => {
  const { t } = useLanguage()
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    t('heroSubtitle'),
    'Dados movem o mundo.',
    'Viva de dados, pense em dados.'
  ]

  // Robust typewriter without stacking timers
  useEffect(() => {
    const current = texts[currentIndex] || ''
    let timeout

    if (!isDeleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setCurrentText(current.slice(0, charIndex + 1))
          setCharIndex((v) => v + 1)
        }, 100)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1200)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText(current.slice(0, charIndex - 1))
          setCharIndex((v) => v - 1)
        }, 50)
      } else {
        setIsDeleting(false)
        setCurrentIndex((i) => (i + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [texts, currentIndex, charIndex, isDeleting])

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/fabioduarte-ic/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/FabinDr',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:fbduarte.ic@gmail.com',
      label: 'Email'
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern + Starfield */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      {/* Stars */}
      <StarField count={120} />

      <div className="container-max px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Fabio{' '}
              <span className="gradient-text">Duarte</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl font-semibold mb-6 h-8 flex items-center"
            >
              <span className="text-primary">{currentText}</span>
              <span className="animate-pulse text-primary ml-1">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              {t('heroDescription')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                variant="gradient"
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="group"
              >
                {t('viewProjects')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                {t('getInTouch')}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-4"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-80 h-80 rounded-full overflow-hidden ring-4 ring-primary shadow-[0_0_60px_rgba(0,212,255,0.35)]"
              >
                <img
                  src="/assets/img/img-perfil.png"
                  alt="Fabio Duarte"
                  className="w-full h-full object-cover"
                />
                
                {/* Outer glow ring */}
                <div className="absolute -inset-3 rounded-full border-2 border-primary/50 opacity-80" />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-6 -right-6 w-14 h-14 bg-transparent ring-2 ring-primary rounded-full flex items-center justify-center text-primary shadow-[0_0_25px_rgba(0,212,255,0.35)]"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                  y: [0, -10, 0]
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="absolute top-[270px] left-1 w-14 h-14 bg-transparent ring-2 ring-primary rounded-full flex items-center justify-center text-primary shadow-[0_0_25px_rgba(0,212,255,0.35)]"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-1/2 -right-10 w-14 h-14 bg-transparent ring-2 ring-primary rounded-full flex items-center justify-center text-primary shadow-[0_0_25px_rgba(0,212,255,0.35)]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl scale-110" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm font-medium">{t('scroll')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
