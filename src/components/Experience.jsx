import React from 'react'
import { motion } from 'framer-motion'
import { Database, Code, Calendar, MapPin, Briefcase } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { useLanguage } from '../contexts/LanguageContext'

const Experience = () => {
  const { t } = useLanguage()

  const experiences = [
    {
      id: 1,
      icon: Database,
      title: 'Bolsista - Análise de Dados',
      company: 'JOVEM TECH - Pulse | Porto do Itaqui | Fapema',
      period: 'Maio 2025 - Atual',
      location: 'São Luís, Maranhão',
      description: 'Atuo como bolsista com foco em Análise de Dados, desenvolvendo habilidades práticas em SQL (consultas simples e intermediárias), Excel, Python (Pandas e NumPy) e Power Bi.',
      highlights: [
        'Realizo a coleta, organização e análise de dados para apoiar a tomada de decisões estratégicas.',
        'Transformo dados brutos em insights relevantes, contribuindo com relatórios e visualizações que agregam valor ao negócio.',
        'Tenho evoluído na criação de pipelines de dados e estruturação de análises consistentes'
      ],
      skills: ['Python', 'Pandas', 'NumPy', 'Excel', 'Análise Estatística', 'Séries Temporais']
    },
    {
      id: 2,
      icon: Code,
      title: 'Bolsista Back-end - Programa Trilhas',
      company: 'Inova Maranhão - SECTI-MA',
      period: '2024',
      location: 'São Luís, Maranhão',
      description: 'Especialização em desenvolvimento Back-end com Node.js através do programa Trilhas, uma iniciativa da Secretaria de Ciência, Tecnologia e Inovação do Estado do Maranhão.',
      highlights: [
        'Desenvolvimento de APIs RESTful com Node.js e Express',
        'Integração com bancos de dados relacionais e não-relacionais',
        'Implementação de autenticação e autorização',
        'Práticas de desenvolvimento ágil e versionamento de código'
      ],
      skills: ['Node.js', 'JavaScript', 'APIs REST', 'Banco de Dados']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="experience" className="section-padding bg-card/30">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 text-left"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            {t('experienceTitle')}
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-transparent opacity-30" />
                  )}

                  <Card className="card-hover relative overflow-hidden ring-2 ring-primary/30 shadow-[0_8px_40px_rgba(16,185,129,0.15)]">
                    {/* Accent Border */}
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/50" />

                    <CardHeader>
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-primary-foreground shadow-lg"
                        >
                          <IconComponent className="w-6 h-6" />
                        </motion.div>

                        {/* Title and Company */}
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold mb-2">
                            {exp.title}
                          </CardTitle>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Briefcase className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold mb-3">Principais atividades:</h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1, duration: 0.4 }}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold mb-3">Tecnologias:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05, duration: 0.3 }}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
