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

    // Experience & Education details
    educationCourseTitle: 'Bacharelado Interdisciplinar em Ciência e Tecnologia',
    universityName: 'Universidade Federal do Maranhão (UFMA)',
    educationPeriod: '2023 - Presente | Cursando',
    knowledgeTitle: 'Conhecimentos e disciplinas:',
    educationTopics: [
      'Ciência de Dados: Análise estatística, Visualização de dados e Machine Learning',
      'Algoritmos e Programação: Fundamentos da Computação e Estruturas de Dados',
      'Matemática Aplicada: Álgebra Linear, Cálculo, Probabilidade e Estatística',
      'Engenharia de Software: Metodologias ágeis e arquitetura de sistemas',
      'Administração: Gestão de projetos, empreendedorismo e inovação',
      'Física e Química: Fundamentos científicos para aplicações tecnológicas'
    ],
    activitiesLabel: 'Atividades:',
    technologiesLabel: 'Tecnologias:',

    exp1Title: 'Bolsista - Análise de Dados',
    exp1Company: 'JOVEM TECH - Pulse | Porto do Itaqui | Fapema',
    exp1Period: 'Maio 2025 - Atual',
    exp1Location: 'São Luís, Maranhão',
    exp1Description: 'Atuo como bolsista com foco em Análise de Dados, desenvolvendo habilidades práticas em SQL (consultas simples e intermediárias), Excel, Python (Pandas e NumPy) e Power BI.',
    exp1Highlights: [
      'Coleta, organização e análise de dados para apoiar decisões estratégicas',
      'Transformação de dados em insights e criação de visualizações',
      'Criação de pipelines de dados e estruturação de análises consistentes'
    ],
    exp1Skills: ['Python', 'Pandas', 'NumPy', 'Excel', 'Análise Estatística', 'Séries Temporais'],

    exp2Title: 'Bolsista Back-end - Programa Trilhas',
    exp2Company: 'Inova Maranhão - SECTI-MA',
    exp2Period: '2024',
    exp2Location: 'São Luís, Maranhão',
    exp2Description: 'Especialização em desenvolvimento Back-end com Node.js através do programa Trilhas.',
    exp2Highlights: [
      'Desenvolvimento de APIs RESTful com Node.js e Express',
      'Integração com bancos de dados',
      'Autenticação e autorização',
      'Práticas ágeis e versionamento de código'
    ],
    exp2Skills: ['Node.js', 'JavaScript', 'APIs REST', 'Banco de Dados'],
    
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

    // Experience & Education details
    educationCourseTitle: "Interdisciplinary Bachelor's in Science and Technology",
    universityName: 'Federal University of Maranhão (UFMA)',
    educationPeriod: '2023 - Present | Ongoing',
    knowledgeTitle: 'Knowledge and disciplines:',
    educationTopics: [
      'Data Science: Statistical analysis, Data visualization and Machine Learning',
      'Algorithms and Programming: Computer Science fundamentals and Data Structures',
      'Applied Mathematics: Linear Algebra, Calculus, Probability and Statistics',
      'Software Engineering: Agile methodologies and systems architecture',
      'Business Administration: Project management, entrepreneurship and innovation',
      'Physics and Chemistry: Scientific foundations for technological applications'
    ],
    activitiesLabel: 'Activities:',
    technologiesLabel: 'Technologies:',

    exp1Title: 'Research Fellow - Data Analysis',
    exp1Company: 'JOVEM TECH - Pulse | Porto do Itaqui | Fapema',
    exp1Period: 'May 2025 - Present',
    exp1Location: 'São Luís, Maranhão',
    exp1Description: 'I work as a research fellow focused on Data Analysis, developing practical skills in SQL (basic and intermediate queries), Excel, Python (Pandas and NumPy) and Power BI.',
    exp1Highlights: [
      'Data collection, organization and analysis to support strategic decisions',
      'Transforming data into insights and creating visualizations',
      'Building data pipelines and structuring consistent analyses'
    ],
    exp1Skills: ['Python', 'Pandas', 'NumPy', 'Excel', 'Statistical Analysis', 'Time Series'],

    exp2Title: 'Back-end Fellow - Trilhas Program',
    exp2Company: 'Inova Maranhão - SECTI-MA',
    exp2Period: '2024',
    exp2Location: 'São Luís, Maranhão',
    exp2Description: 'Specialization in Back-end development with Node.js through the Trilhas program.',
    exp2Highlights: [
      'Development of RESTful APIs with Node.js and Express',
      'Database integration',
      'Authentication and authorization',
      'Agile practices and version control'
    ],
    exp2Skills: ['Node.js', 'JavaScript', 'REST APIs', 'Databases'],
    
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
