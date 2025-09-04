import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import logo from '../../assets/img/logo-02.svg'

const Footer = () => {
  const { t } = useLanguage()

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

  const navLinks = [
    { href: '#home', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#experience', label: t('experience') },
    { href: '#projects', label: t('projects') },
  ]

  const contactLinks = [
    { href: 'mailto:fbduarte.ic@gmail.com', label: 'fbduarte.ic@gmail.com' },
    { href: '#', label: t('locationValue') },
    { href: '#contact', label: t('getInTouch') },
  ]

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-max px-6">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold">
                  Fabio <span className="gradient-text">Duarte</span>
                </span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground mb-6 max-w-md leading-relaxed"
              >
                {t('footerDescription')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
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
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-secondary border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-semibold mb-4"
              >
                {t('navigation')}
              </motion.h4>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-semibold mb-4"
              >
                {t('contact')}
              </motion.h4>
              <ul className="space-y-3">
                {contactLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm">
            &copy; 2025 Fabio Duarte. {t('footerText')}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
