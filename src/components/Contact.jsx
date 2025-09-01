import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react'
import { Button } from './ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/fabioduarte-ic/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/FabinDr' },
    { icon: Mail, label: t('email'), href: 'mailto:fbduarte.ic@gmail.com' },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
            {t('contactTitle')}
          </motion.h2>
          <motion.p variants={item} className="text-muted-foreground max-w-2xl mx-auto">
            {t('chatDescription')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Email */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
            <Card className="card-hover h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{t('email')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">fbduarte.ic@gmail.com</p>
                <Button asChild variant="gradient">
                  <a href="mailto:fbduarte.ic@gmail.com" aria-label={t('sendEmail')}>
                    <Send className="w-4 h-4" />
                    {t('sendEmail')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
            <Card className="card-hover h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{t('location')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('locationValue')}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Socials */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
            <Card className="card-hover h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                    <Github className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{t('socialNetworks')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Icon className="w-4 h-4" /> {label}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
