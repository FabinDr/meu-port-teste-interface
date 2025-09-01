import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/Card'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const skills = [
    t('dataAnalysis'),
    t('dataVisualization'),
    t('appliedStatistics')
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t('aboutTitle')}
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg font-semibold text-foreground"
            >
              {t('aboutIntro')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed"
            >
              {t('aboutText1')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed"
            >
              {t('aboutText2')}
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="text-xl font-semibold mb-4">{t('mainSkills')}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/20 transition-all duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element: Photo like original */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-[320px] h-[320px] rounded-xl overflow-hidden border-2 border-border bg-secondary/40 flex items-center justify-center">
                <img src="/assets/img/img-perfil.png" alt="Foto Fabio" className="w-full h-full object-cover my-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
