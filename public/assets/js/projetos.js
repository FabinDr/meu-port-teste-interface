// Scripts específicos para a página de Projetos
class ProjectsManager {
  constructor() {
    this.buttons = document.querySelectorAll('.filter-btn');
    this.projects = document.querySelectorAll('.project-card');
    this.init();
  }

  init() {
    if (!this.buttons.length) return;
    
    this.setupFilters();
    this.setupAnimations();
    this.setupLazyLoading();
  }

  setupFilters() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        this.filterProjects(filter);
        this.updateActiveFilter(e.target);
      });
    });
  }

  filterProjects(filter) {
    this.projects.forEach(project => {
      const categories = project.getAttribute('data-category');
      const shouldShow = filter === 'all' || (categories && categories.includes(filter));
      
      if (shouldShow) {
        project.style.display = 'block';
        project.classList.add('fade-in');
        // Animar entrada
        setTimeout(() => {
          project.style.opacity = '1';
          project.style.transform = 'translateY(0)';
        }, 100);
      } else {
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
        // Esconder após animação
        setTimeout(() => {
          project.style.display = 'none';
          project.classList.remove('fade-in');
        }, 300);
      }
    });
  }

  updateActiveFilter(activeBtn) {
    this.buttons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
  }

  setupAnimations() {
    // Intersection Observer para animações de entrada
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observar elementos para animar
    const animateElements = document.querySelectorAll('.animate-element');
    animateElements.forEach(el => observer.observe(el));
  }

  setupLazyLoading() {
    // Lazy loading para imagens de projetos
    const images = document.querySelectorAll('.project-image img[data-src]');
    
    if (!images.length) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Método público para filtrar projetos
  filterByCategory(category) {
    this.filterProjects(category);
    
    // Atualizar botão ativo
    this.buttons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-filter') === category) {
        btn.classList.add('active');
      }
    });
  }

  // Método público para obter projetos visíveis
  getVisibleProjects() {
    return Array.from(this.projects).filter(project => 
      project.style.display !== 'none'
    );
  }
}

// Função para smooth scroll melhorado
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

// Função para animar contadores (se necessário)
function animateCounter(element, target, duration = 2000) {
  const step = target / (duration / 16);
  let current = 0;
  
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  window.projectsManager = new ProjectsManager();
  
  // Configurar links de volta
  const backLinks = document.querySelectorAll('.back-link');
  backLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.back();
    });
  });
});

// Exportar para uso global
window.ProjectsManager = ProjectsManager;
window.smoothScrollTo = smoothScrollTo;
window.animateCounter = animateCounter;