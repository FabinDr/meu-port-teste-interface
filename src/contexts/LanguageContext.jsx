import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations = {
  pt: {
    // Navigation
    home: 'Home',
    about: 'Sobre',
    experience: 'Experiência',
    skills: 'Habilidades',
    projects: 'Projetos',
    contact: 'Contato',
    education: 'Formação',
    
    // Hero Section
    heroSubtitle: 'Analista de Dados',
    heroDescription: 'Especialista em transformar dados complexos em insights estratégicos que impulsionam decisões de negócio e geram valor real para organizações.',
    viewProjects: 'Ver Projetos',
    getInTouch: 'Entre em Contato',
    scroll: 'Scroll',
    
    // About Section
    aboutTitle: 'Quem sou eu',
    aboutIntro: 'Sou um entusiasta em dados apaixonado por descobrir padrões ocultos e transformar informações brutas em estratégias de negócio eficazes.',
    aboutText1: 'Sou um profissional dedicado, em constante busca por novos desafios e aprendizados, sempre focado em gerar insights que causem impacto real e sustentável. Venho me aprofundando nos estudos de Análise de Dados com Python e SQL, além de desenvolver habilidades em Analytics Engineer.',
    aboutText2: 'Minha abordagem interdisciplinar me permite conectar dados, tecnologia e negócios de forma única, sempre buscando insights que impulsionem o crescimento e a inovação.',
    mainSkills: 'Principais Competências',
    dataAnalysis: 'Análise de Dados',
    dataVisualization: 'Visualização de Dados',
    appliedStatistics: 'Estatística Aplicada',
    educationTitle: 'Formação Acadêmica',
    experienceEducationTitle: 'Experiência e Formação',

    // Experience Section
    experienceTitle: 'Experiência Profissional',
    
    // Skills Section
    skillsTitle: 'Minhas Habilidades',
    pythonLibraries: 'Pandas, NumPy, Matplotlib',
    databaseSystems: 'SQLite, MySQL',
    interactiveDashboards: 'Dashboards interativos',
    chartsVisualizations: 'Gráficos e visualizações',
    
    // Projects Section
    projectsTitle: 'Meus Projetos',
    projectsDescription: 'Explore alguns dos meus trabalhos mais recentes em análise de dados, machine learning e desenvolvimento de soluções inovadoras.',
    all: 'Todos',
    dataAnalysisFilter: 'Análise de Dados',
    machineLearningFilter: 'Machine Learning',
    sql: 'SQL',
    dashboard: 'Dashboards',
    viewAllProjects: 'Ver Todos os Projetos',
    backToHome: 'Voltar para o início',
    
    // Contact Section
    contactTitle: 'Vamos Trabalhar Juntos',
    email: 'Email',
    location: 'Localização',
    locationValue: 'São Luís, Maranhão',
    socialNetworks: 'Redes Sociais',
    letsChat: 'Vamos conversar?',
    chatDescription: 'Estou sempre aberto a novas oportunidades e projetos desafiadores. Entre em contato!',
    sendEmail: 'Enviar Email',
    
    // Footer
    navigation: 'Navegação',
    footerDescription: 'Analista de dados especializado em transformar informações complexas em insights estratégicos para impulsionar o crescimento dos negócios.',
    footerText: 'Todos os direitos reservados.',

    // Projects UI
    demo: 'Demo',
    code: 'Código',
    viewProject: 'Ver Projeto',
    viewCode: 'Ver Código',
    mainFeatures: 'Principais funcionalidades:',
    technologiesUsed: 'Tecnologias utilizadas:',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    education: 'Education',
    
    // Hero Section
    heroSubtitle: 'Data Analyst',
    heroDescription: 'Specialist in transforming complex data into strategic insights that drive business decisions and generate real value for organizations.',
    viewProjects: 'View Projects',
    getInTouch: 'Get In Touch',
    scroll: 'Scroll',
    
    // About Section
    aboutTitle: 'Who I Am',
    aboutIntro: 'I am a data enthusiast passionate about discovering hidden patterns and transforming raw information into effective business strategies.',
    aboutText1: 'I am a dedicated professional, constantly seeking new challenges and learning opportunities, always focused on generating insights that cause real and sustainable impact. I have been deepening my studies in Data Analysis with Python and SQL, in addition to developing Analytics Engineer skills.',
    aboutText2: 'My interdisciplinary approach allows me to uniquely connect data, technology, and business, always seeking insights that drive growth and innovation.',
    mainSkills: 'Core Competencies',
    dataAnalysis: 'Data Analysis',
    dataVisualization: 'Data Visualization',
    appliedStatistics: 'Applied Statistics',
    educationTitle: 'Education',
    experienceEducationTitle: 'Experience & Education',

    // Experience Section
    experienceTitle: 'Professional Experience',
    
    // Skills Section
    skillsTitle: 'My Skills',
    pythonLibraries: 'Pandas, NumPy, Matplotlib',
    databaseSystems: 'SQLite, MySQL',
    interactiveDashboards: 'Interactive dashboards',
    chartsVisualizations: 'Charts and visualizations',
    
    // Projects Section
    projectsTitle: 'My Projects',
    projectsDescription: 'Explore some of my most recent work in data analysis, machine learning, and development of innovative solutions.',
    all: 'All',
    dataAnalysisFilter: 'Data Analysis',
    machineLearningFilter: 'Machine Learning',
    sql: 'SQL',
    dashboard: 'Dashboards',
    viewAllProjects: 'View All Projects',
    backToHome: 'Back to home',
    
    // Contact Section
    contactTitle: "Let's Work Together",
    email: 'Email',
    location: 'Location',
    locationValue: 'São Luís, Maranhão',
    socialNetworks: 'Social Networks',
    letsChat: "Let's chat?",
    chatDescription: "I'm always open to new opportunities and challenging projects. Get in touch!",
    sendEmail: 'Send Email',
    
    // Footer
    navigation: 'Navigation',
    footerDescription: 'Data analyst specialized in transforming complex information into strategic insights to drive business growth.',
    footerText: 'All rights reserved.',

    // Projects UI
    demo: 'Demo',
    code: 'Code',
    viewProject: 'View Project',
    viewCode: 'View Code',
    mainFeatures: 'Main features:',
    technologiesUsed: 'Technologies used:',
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt')
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
