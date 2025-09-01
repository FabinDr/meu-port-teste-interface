import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { useLanguage } from '../contexts/LanguageContext'

const Education = () => {
  const { t } = useLanguage()

  const items = [
    {
      title: 'Bacharelado em Engenharia da Computação',
      school: 'Universidade Estadual do Maranhão (UEMA)',
      period: '2022 - Em andamento',
      details: [
        'Base sólida em matemática, estatística e programação',
        'Ênfase em análise de dados e engenharia de software'
      ]
    },
    {
      title: 'Formações complementares em Dados',
      school: 'Imersões e programas (Alura, Jovem Tech, SECTI-MA)',
      period: '2023 - 2025',
      details: [
        'Python para análise de dados (Pandas, NumPy, Matplotlib)',
        'SQL para consultas e modelagem de dados',
        'Dashboards e storytelling com Power BI'
      ]
    }
  ]

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }
  const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

  return (
    <section id="education" className="section-padding">
      <div className="container-max">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={container} className="mb-12 text-left">
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold">{t('educationTitle')}</motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {items.map((ed, idx) => (
            <motion.div key={ed.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={item}>
              <Card className="card-hover ring-2 ring-primary/30 shadow-[0_8px_40px_rgba(16,185,129,0.15)]">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                      {idx === 0 ? <GraduationCap className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{ed.title}</CardTitle>
                      <div className="text-muted-foreground text-sm flex flex-wrap gap-4 mt-1">
                        <span>{ed.school}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{ed.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {ed.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
