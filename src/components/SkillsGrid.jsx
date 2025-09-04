import React from 'react'
import { Database, BarChart3, Boxes, GitBranch, Terminal, Brain, BookOpen, Sigma } from 'lucide-react'
import { Card, CardContent } from './ui/Card'
import { useLanguage } from '../contexts/LanguageContext'

const skills = [
  { name: 'Python', icon: Brain },
  { name: 'Pandas', icon: BookOpen },
  { name: 'NumPy', icon: Sigma },
  { name: 'Matplotlib', icon: BarChart3 },
  { name: 'SQL', icon: Database },
  { name: 'SQLite', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'Power BI', icon: BarChart3 },
  { name: 'Jupyter', icon: BookOpen },
  { name: 'Streamlit', icon: BarChart3 },
  { name: 'Git', icon: GitBranch },
]

const SkillsGrid = () => {
  const { t } = useLanguage()
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">{t('skillsTitle')}</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map(({ name, icon: Icon }) => (
            <Card key={name} className="bg-secondary/30 border border-border/60 hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-secondary/60 border border-border/60 flex items-center justify-center text-muted-foreground">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsGrid
