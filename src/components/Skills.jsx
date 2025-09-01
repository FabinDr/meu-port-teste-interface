import React from 'react'
import { motion } from 'framer-motion'
import { Database, BarChart3, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { useLanguage } from '../contexts/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      id: 1,
      title: t('dataAnalysis'),
      icon: Database,
      description: 'Transformação de dados brutos em insights valiosos',
      skills: [
        {
          name: 'Python',
          description: t('pythonLibraries'),
          level: 'Avançado'
        },
        {
          name: 'SQL',
          description: t('databaseSystems'),
          level: 'Intermediário'
        }
      ]
    },
    {
      id: 2,
      title: t('dataVisualization'),
      icon: BarChart3,
      description: 'Criação de dashboards e visualizações impactantes',
      skills: [
        {
          name: 'Power BI',
          description: t('interactiveDashboards'),
          level: 'Intermediário'
        },
        {
          name: 'Matplotlib',
          description: t('chartsVisualizations'),
          level: 'Intermediário'
        }
      ]
    }
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className="section-padding">
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
            {t('skillsTitle')}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start justify-start"
        >
          {skillCategories.map((category, i) => {
            const IconComponent = category.icon
            const highlight = i === 1
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className={`h-full ${highlight ? 'border-primary/60 ring-1 ring-primary' : 'card-hover'}`}>
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-primary-foreground shadow-lg mx-auto mb-4"
                    >
                      <IconComponent className="w-8 h-8" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold">
                      {category.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={skillVariants}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="mb-2">
                          <h4 className="font-semibold text-foreground">
                            {skill.name}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>                        
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-8"
          >
            Outras Tecnologias
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              'Excel', 'Git', 'GitHub', 'Jupyter', 'VS Code', 'Node.js', 
              'JavaScript', 'APIs REST', 'MySQL', 'SQLite'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                variants={skillVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
