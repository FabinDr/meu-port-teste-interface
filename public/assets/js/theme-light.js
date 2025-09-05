// Sistema de tema claro/escuro melhorado
class ThemeController {
  constructor() {
    this.button = document.querySelector('.theme-toggle');
    this.currentTheme = 'dark';
    this.init();
  }

  init() {
    if (!this.button) return;
    
    // Verificar preferência salva
    this.loadSavedTheme();
    
    // Configurar evento de clique
    this.button.addEventListener('click', () => {
      this.toggleTheme();
    });
    
    // Atualizar ícone inicial
    this.updateIcon();

    // Observar mudanças de idioma para atualizar aria-labels
    if (window.translator) {
      window.translator.addObserver((lang) => {
        this.updateAccessibilityLabels();
      });
    }
  }

  loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
      this.applyTheme(savedTheme);
    } else {
      // Verificar preferência do sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
      this.applyTheme(this.currentTheme);
    }
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.currentTheme = newTheme;
    
    // Aplicar tema com animação
    this.applyThemeWithAnimation(newTheme);
    
    // Salvar preferência
    localStorage.setItem('theme', newTheme);
    
    // Atualizar ícone e acessibilidade
    this.updateIcon();
    this.updateAccessibilityLabels();
  }

  applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    
    // Atualizar meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = theme === 'dark' ? '#0f0f23' : '#ffffff';
    }
  }

  applyThemeWithAnimation(theme) {
    // Adicionar classe de transição
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    // Aplicar novo tema
    this.applyTheme(theme);
    
    // Remover transição após animação
    setTimeout(() => {
      document.body.style.transition = '';
    }, 300);
  }

  updateIcon() {
    if (!this.button) return;
    
    const icon = this.button.querySelector('i');
    if (icon) {
      if (this.currentTheme === 'dark') {
        icon.className = 'bx bx-sun';
      } else {
        icon.className = 'bx bx-moon';
      }
    }
  }

  updateAccessibilityLabels() {
    if (!this.button || !window.translator) return;
    
    const labelKey = this.currentTheme === 'dark' ? 'lightMode' : 'darkMode';
    const label = window.translator.getTranslation(labelKey);
    
    if (label) {
      this.button.setAttribute('aria-label', label);
    }
  }

  // Método público para obter tema atual
  getCurrentTheme() {
    return this.currentTheme;
  }

  // Método público para definir tema
  setTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      this.currentTheme = theme;
      this.applyThemeWithAnimation(theme);
      this.updateIcon();
      this.updateAccessibilityLabels();
      localStorage.setItem('theme', theme);
    }
  }

  // Detectar mudanças na preferência do sistema
  watchSystemPreference() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener((e) => {
      // Só aplicar se o usuário não tiver uma preferência salva
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        this.setTheme(newTheme);
      }
    });
  }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  window.themeController = new ThemeController();
  
  // Observar preferências do sistema
  if (window.themeController) {
    window.themeController.watchSystemPreference();
  }
});

// Exportar para uso global
window.ThemeController = ThemeController;
