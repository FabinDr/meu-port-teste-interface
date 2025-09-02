import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, X, Filter } from 'lucide-react'
import { Button } from './ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { useLanguage } from '../contexts/LanguageContext'
import StarField from './StarField'

const Projects = () => {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Análise dos Unicórnios 2022 — Setores, Países e Investidores',
      shortDescription: 'Estudo aprofundado das empresas que atingiram o status de unicórnio em 2022, com análise setorial, geográfica e de investidores, conectando dados e contexto de mercado.',
      fullDescription: 'Projeto de análise completa das empresas que se tornaram unicórnios em 2022. Mapeei setores de atuação, países de origem, principais rodadas e investidores, identificando padrões de crescimento e correlações entre região, estágio e volume de investimento. A pesquisa consolida insights sobre o ecossistema de inovação global, tendências responsáveis pelo crescimento acelerado e características compartilhadas por empresas de alto desempenho, culminando em recomendações práticas para stakeholders.',
      image: 'https://forbes.com.br/wp-content/uploads/2022/06/unicornio-startuo.jpg',
      category: 'data-analysis',
      technologies: ['Python', 'Pandas', 'Jupyter', 'Matplotlib', 'NumPy'],
      liveUrl: 'https://github.com/FabinDr',
      codeUrl: 'https://github.com/FabinDr/Projeto-analise-de-dados---Case-unicornios',
      features: [
        'Análise exploratória e limpeza de dados (EDA) com documentação',
        'Visualizações de setores, países e estágios de investimento',
        'Clusterização de empresas por perfil de investimento',
        'Insights sobre tendências e concentração de capital',
        'Relatório executivo com recomendações acionáveis'
      ]
    },
    {
      id: 2,
      title: 'Análise de Salários na Área de Dados - Imersão Alura',
      shortDescription: 'Análise detalhada dos salários em Data Science, com recortes por senioridade, contrato, país, remoto e variações anuais; inclui dashboard interativo.',
      fullDescription: 'Estudo abrangente da estrutura salarial na área de dados. Explorei níveis de experiência, tipos de vínculo e cargos, normalizei remunerações, comparei remuneração por país e modalidade de trabalho (remoto/hib/onsite) e observei tendências temporais. O projeto também inclui um dashboard no Streamlit para exploração interativa e geração rápida de insights por recrutadores e profissionais.',
      image: '/assets/img/Análsie dos setores.jpg',
      category: 'data-analysis',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'NumPy', 'Streamlit'],
      liveUrl: 'https://dashboard-salarios-naarea-de-dados.streamlit.app/',
      codeUrl: 'https://github.com/FabinDr/Analise-dos-salarios-em-dataScience/tree/main',
      features: [
        'Dashboard interativo com navegação por filtros',
        'Comparativos por região, senioridade e modalidade',
        'Tendências salariais anualizadas',
        'Conversão e padronização monetária',
        'Insights práticos para carreira e recrutamento'
      ]
    },
    {
      id: 3,
      title: 'Modelo de previsão em vendas - Jovem Tech',
      shortDescription: 'Análise e modelagem de dados de vendas no varejo com foco em previsões e suporte à decisão; inclui dados reais e sintéticos.',
      fullDescription: 'Trabalho realizado no programa Jovem Tech com foco em varejo. Partindo de dados reais, executei limpeza, padronização e enriquecimento, conduzi análises estatísticas (Pandas/NumPy) e gerei dados sintéticos para testes controlados. Estruturei o código em classes reutilizáveis, seguindo boas práticas de modularização e versionamento. O resultado foi um conjunto de insights acionáveis e hipóteses de previsão para aumento de receita e otimização de estoque.',
      image: 'https://blog.zooxsmart.com/hubfs/Capa---Artigo-de-Blog_-Analise-de-dados.jpg',
      category: 'data-analysis',
      technologies: ['Python', 'Pandas', 'NumPy', 'Análise Estatística'],
      liveUrl: 'https://github.com/FabinDr',
      codeUrl: 'https://github.com/FabinDr',
      features: [
        'Limpeza, normalização e enriquecimento de dados',
        'Análise estatística e hipóteses de previsão',
        'Geração de dados sintéticos para simulações',
        'Arquitetura modular orientada a classes',
        'Recomendações estratégicas para varejo'
      ]
    }
  ]

  const filters = [
    { id: 'all', label: t('all') },
    { id: 'data-analysis', label: t('dataAnalysisFilter') },
    { id: 'machine-learning', label: t('machineLearningFilter') },
    { id: 'sql', label: t('sql') },
    { id: 'dashboard', label: t('dashboard') }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <StarField count={100} />
      <div className="container-max relative z-10">
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
            {t('projectsTitle')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {t('projectsDescription')}
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground hover:bg-accent border border-border'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="card-hover h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg font-bold line-clamp-2">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm line-clamp-4">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.liveUrl, '_blank')
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.codeUrl, '_blank')
                        }}
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            {t('viewAllProjects')}
            <ExternalLink className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Principais funcionalidades:</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Tecnologias utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="gradient"
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Projeto
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(selectedProject.codeUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    Ver Código
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
