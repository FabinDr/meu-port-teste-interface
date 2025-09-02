import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Briefcase, MapPin, Database, Code, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { useLanguage } from '../contexts/LanguageContext'

const ExperienceEducation = () => {
  const { t } = useLanguage()
  const listRef = useRef(null)
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const handleScroll = () => {
    const el = listRef.current
    if (!el) return
    const max = el.scrollHeight - el.clientHeight
    const ratio = max > 0 ? el.scrollTop / max : 0
    setProgress(Math.min(1, Math.max(0, ratio)))
  }

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    handleScroll()
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  const onTrackClick = (e) => {
    const track = trackRef.current
    const list = listRef.current
    if (!track || !list) return
    const rect = track.getBoundingClientRect()
    const y = e.clientY - rect.top
    const ratio = y / rect.height
    const max = list.scrollHeight - list.clientHeight
    list.scrollTo({ top: max * ratio, behavior: 'smooth' })
  }

  const experiences = useMemo(() => ([
    {
      id: 1,
      icon: Database,
      title: 'Bolsista - Análise de Dados',
      company: 'JOVEM TECH - Pulse | Porto do Itaqui | Fapema',
      period: 'Maio 2025 - Atual',
      location: 'São Luís, Maranhão',
      description: 'Atuo como bolsista com foco em Análise de Dados, desenvolvendo habilidades práticas em SQL (consultas simples e intermediárias), Excel, Python (Pandas e NumPy) e Power Bi.',
      highlights: [
        'Coleta, organização e análise de dados para apoiar decisões estratégicas',
        'Transformação de dados em insights e criação de visualizações',
        'Criação de pipelines de dados e estruturação de análises consistentes'
      ],
      skills: ['Python', 'Pandas', 'NumPy', 'Excel', 'Análise Estat��stica', 'Séries Temporais']
    },
    {
      id: 2,
      icon: Code,
      title: 'Bolsista Back-end - Programa Trilhas',
      company: 'Inova Maranhão - SECTI-MA',
      period: '2024',
      location: 'São Luís, Maranhão',
      description: 'Especialização em desenvolvimento Back-end com Node.js através do programa Trilhas.',
      highlights: [
        'Desenvolvimento de APIs RESTful com Node.js e Express',
        'Integração com bancos de dados',
        'Autenticação e autorização',
        'Práticas ágeis e versionamento de código'
      ],
      skills: ['Node.js', 'JavaScript', 'APIs REST', 'Banco de Dados']
    }
  ]), [])

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={container} className="text-center mb-12">
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold">{t('experienceEducationTitle')}</motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Education Card */}
          <motion.div variants={item} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5">
            <Card className="card-hover overflow-hidden hover:brightness-110 hover:scale-[1.01] flex flex-col items-center">
              <div className="flex flex-col">
                <div className="hidden">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2F257c6662cbff4e9d9eaaa0956ace7a59%2F4cb23e80ad634efca295fccdc0adfa5d?format=webp&width=800" alt="Universidade Federal do Maranhão" className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-t-lg" />
                </div>
                <img src="https://cdn.builder.io/api/v1/image/assets%2F257c6662cbff4e9d9eaaa0956ace7a59%2F4cb23e80ad634efca295fccdc0adfa5d?format=webp&width=800" alt="Universidade Federal do Maranhão" className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-t-lg" />
                <div className="w-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">Bacharelado Interdisciplinar em Ciência e Tecnologia</CardTitle>
                        <div className="text-muted-foreground text-sm flex flex-wrap gap-3 mt-1">
                          <span>Universidade Federal do Maranhão (UFMA)</span>
                          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />2023 - Presente | Cursando</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 px-6 pb-6">
                    <h4 className="font-semibold mb-3">Conhecimentos e disciplinas:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {[
                        'Ciência de Dados: Análise estatística, Visualização de dados e Machine Learning',
                        'Algoritmos e Programação: Fundamentos da Computação e Estruturas de Dados',
                        'Matemática Aplicada: Álgebra Linear, Cálculo, Probabilidade e Estatística',
                        'Engenharia de Software: Metodologias ágeis e arquitetura de sistemas',
                        'Administração: Gestão de projetos, empreendedorismo e inovação',
                        'Física e Química: Fundamentos científicos para aplicações tecnológicas'
                      ].map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Experiences list with custom scroll indicator */}
          <div className="lg:col-span-7 relative pb-[9px]">
            <div ref={listRef} className="space-y-6 lg:h-[826px] overflow-y-auto pr-6">
              {experiences.map((exp) => {
                const Icon = exp.icon
                return (
                  <motion.div key={exp.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item}>
                    <Card className="card-hover relative overflow-hidden hover:brightness-110 hover:scale-[1.01]">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/40" />
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-primary-foreground shadow-lg">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Briefcase className="w-4 h-4" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{exp.period}</span>
                                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-5">
                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Atividades:</h4>
                          <ul className="space-y-2">
                            {exp.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2 text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Tecnologias:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((s, i) => (
                              <motion.span
                                key={s}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                              >
                                {s}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Custom scroll indicator */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-4 flex items-center">
              <div
                ref={trackRef}
                onClick={onTrackClick}
                className="relative mx-auto w-1 h-[calc(100%-2rem)] rounded-full bg-border cursor-pointer"
              >
                <div
                  className="absolute left-0 top-0 w-1 rounded-full bg-gradient-to-b from-primary to-primary/60"
                  style={{ height: `${Math.max(8, progress * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceEducation
