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

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Card className="card-hover max-w-md">
              <CardContent className="p-8">
                <div className="relative">
                  {/* Abstract Data Visualization */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                      <div className="h-2 bg-gradient-to-r from-primary to-primary/50 rounded-full flex-1" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="h-2 bg-gradient-to-r from-accent to-accent/50 rounded-full flex-1" style={{ width: '80%' }} />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                      <div className="h-2 bg-gradient-to-r from-secondary to-secondary/50 rounded-full flex-1" style={{ width: '60%' }} />
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10"
                    >
                      <div className="text-2xl font-bold text-primary">2+</div>
                      <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-accent/5 rounded-lg border border-accent/10"
                    >
                      <div className="text-2xl font-bold text-accent">10+</div>
                      <div className="text-sm text-muted-foreground">Projetos Realizados</div>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"
                  />
                  <motion.div
                    animate={{
                      rotate: -360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                    }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
