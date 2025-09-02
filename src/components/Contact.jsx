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
    <section id="contact" className="section-padding bg-card/30">
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


        {/* Social section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
          <Card className="card-hover text-center mb-8">
            <CardHeader>
              <CardTitle className="text-xl">{t('socialNetworks')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-4 flex-wrap">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            <div className="relative p-8">
              <h3 className="text-2xl font-bold mb-2">{t('letsChat')}</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t('chatDescription')}</p>
              <Button asChild variant="gradient" className="ml-8 pl-4 pr-[47px]">
                <a href="mailto:fbduarte.ic@gmail.com">
                  <span className="inline-flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    {t('sendEmail')}
                  </span>
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
