import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, X } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { useLanguage } from '../contexts/LanguageContext'
import StarField from '../components/StarField'
import { projects as allProjects } from '../data/projects'

const ProjectsPage = () => {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: t('all') },
    { id: 'data-analysis', label: t('dataAnalysisFilter') },
    { id: 'machine-learning', label: t('machineLearningFilter') },
    { id: 'sql', label: t('sql') },
    { id: 'dashboard', label: t('dashboard') }
  ]

  const filtered = activeFilter === 'all' ? allProjects : allProjects.filter(p => p.category === activeFilter)

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <StarField count={140} />
      <div className="container-max relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={container} className="mb-12 text-left">
          <motion.h1 variants={item} className="text-3xl md:text-4xl font-bold mb-2">{t('projectsTitle')}</motion.h1>
          <motion.p variants={item} className="text-muted-foreground max-w-2xl">{t('projectsDescription')}</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className="flex flex-wrap gap-2 mb-10">
          {filters.map(f => (
            <motion.button
              key={f.id}
              variants={item}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === f.id ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-card text-foreground hover:bg-accent border border-border'}`}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map(project => (
              <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} whileHover={{ y: -8 }} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <Card className="card-hover h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3"><Eye className="w-6 h-6 text-white" /></div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold line-clamp-2">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm line-clamp-4">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="default" size="sm" className="flex-1" onClick={e => { e.stopPropagation(); window.open(project.liveUrl, '_blank') }}><ExternalLink className="w-4 h-4" />Demo</Button>
                      <Button variant="ghost" size="sm" className="flex-1" onClick={e => { e.stopPropagation(); window.open(project.codeUrl, '_blank') }}><Github className="w-4 h-4" />Código</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-t-2xl" />
                <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}><X className="w-4 h-4" /></Button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{selectedProject.fullDescription}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Principais funcionalidades:</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" /><span className="text-muted-foreground">{feature}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Tecnologias utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(tech => (<span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">{tech}</span>))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="gradient" onClick={() => window.open(selectedProject.liveUrl, '_blank')}><ExternalLink className="w-4 h-4" />Ver Projeto</Button>
                  <Button variant="outline" onClick={() => window.open(selectedProject.codeUrl, '_blank')}><Github className="w-4 h-4" />Ver Código</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsPage
