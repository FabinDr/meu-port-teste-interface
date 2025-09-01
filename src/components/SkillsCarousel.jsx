import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const skills = [
  'Python', 'Pandas', 'NumPy', 'Matplotlib', 'SQL', 'SQLite', 'MySQL', 'Power BI',
  'Streamlit', 'Excel', 'APIs REST', 'Git', 'GitHub', 'Jupyter', 'VS Code'
]

const Row = ({ reverse = false }) => {
  const items = [...skills, ...skills]
  return (
    <motion.div
      className="flex gap-3 whitespace-nowrap" 
      animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
    >
      {items.map((s, i) => (
        <span
          key={`${s}-${i}`}
          className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium hover:border-primary/60 transition-colors"
        >
          {s}
        </span>
      ))}
    </motion.div>
  )
}

const SkillsCarousel = () => {
  const { t } = useLanguage()
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('skillsTitle')}</h2>
          <p className="text-muted-foreground">{t('projectsDescription')}</p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-border bg-card/40 p-6">
          <Row />
          <Row reverse />
        </div>
      </div>
    </section>
  )
}

export default SkillsCarousel
