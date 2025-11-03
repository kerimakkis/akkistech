// Simple translation system - loads translations from JS modules and applies them to HTML
import enTranslations from '../locales/en.js';
import deTranslations from '../locales/de.js';
import trTranslations from '../locales/tr.js';
import { logoBase64 } from './logo.js';

class TranslationManager {
  constructor() {
    this.translations = {
      en: enTranslations,
      de: deTranslations,
      tr: trTranslations
    };
    this.currentLang = this.detectLanguage();
    this._langButtonHandler = null; // Store handler reference for cleanup
    this.init();
  }

  detectLanguage() {
    // Check localStorage first
    const savedLang = localStorage.getItem('akkistech-language');
    if (savedLang && ['en', 'de', 'tr'].includes(savedLang)) {
      return savedLang;
    }

    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('de')) return 'de';
    if (browserLang.startsWith('tr')) return 'tr';
    
    // Default to English
    return 'en';
  }

  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && value.hasOwnProperty(k)) {
        value = value[k];
      } else {
        console.warn(`Translation not found: ${key}`);
        // Try English fallback
        value = this.translations.en;
        for (const k2 of keys) {
          if (value && typeof value === 'object' && value.hasOwnProperty(k2)) {
            value = value[k2];
          } else {
            return key;
          }
        }
        return typeof value === 'string' ? value : key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  }

  applyTranslations() {
    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang === 'en' ? 'en' : this.currentLang === 'de' ? 'de' : 'tr';

    // Find all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = this.t(key);
      
      if (translation && translation !== key) {
        // Preserve HTML if translation contains HTML
        if (translation.includes('<')) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Handle data-translate-placeholder for input fields
    const inputs = document.querySelectorAll('[data-translate-placeholder]');
    inputs.forEach(input => {
      const key = input.getAttribute('data-translate-placeholder');
      const translation = this.t(key);
      if (translation && translation !== key) {
        input.placeholder = translation;
      }
    });

    // Update active language button
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      if (btn.dataset.lang === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update meta tags
    this.updateMetaTags();
    
    // Re-load logo after translation (logo might be removed during innerHTML updates)
    // Use setTimeout to ensure DOM updates are complete
    setTimeout(() => {
      this.ensureLogoLoaded();
    }, 0);
  }

  ensureLogoLoaded() {
    // Ensure header logo is loaded
    const logoImg = document.getElementById('header-logo');
    if (logoImg) {
      // Always set logo src to base64
      // This ensures logo is present after header re-renders
      if (!logoImg.src || !logoImg.src.includes('base64')) {
        logoImg.src = logoBase64;
      }
    }
    
    // Ensure footer logo is loaded
    const footerLogoImg = document.getElementById('footer-logo');
    if (footerLogoImg) {
      if (!footerLogoImg.src || !footerLogoImg.src.includes('base64')) {
        footerLogoImg.src = logoBase64;
      }
    }
  }

  updateMetaTags() {
    // Update title if it has a translation key
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.dataset.translate) {
      document.title = this.t(titleElement.dataset.translate);
    }

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && metaDesc.dataset.translate) {
      metaDesc.content = this.t(metaDesc.dataset.translate);
    }
  }

  switchLanguage(lang) {
    if (!['en', 'de', 'tr'].includes(lang)) {
      console.error('Invalid language:', lang);
      return;
    }

    // Don't switch if already on this language
    if (this.currentLang === lang) {
      return;
    }

    this.currentLang = lang;
    localStorage.setItem('akkistech-language', lang);
    this.applyTranslations();

    // Ensure logo is loaded after language switch
    this.ensureLogoLoaded();

    // Setup buttons again in case header was re-rendered
    this.setupLanguageButtons();

    // Dispatch event for other scripts that might need to know
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  init() {
    // Wait for layout to be injected first
    const waitForLayout = () => {
      const header = document.getElementById('site-header');
      if (!header || !header.innerHTML.trim()) {
        // Layout not ready yet, wait a bit
        setTimeout(waitForLayout, 50);
        return;
      }
      
      // Apply translations
      this.applyTranslations();
      this.setupLanguageButtons();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(waitForLayout, 100);
      });
    } else {
      setTimeout(waitForLayout, 100);
    }
  }

  setupLanguageButtons() {
    // Remove existing listeners to avoid duplicates
    if (this._langButtonHandler) {
      document.removeEventListener('click', this._langButtonHandler);
    }
    
    // Use event delegation on document to handle dynamically added buttons
    this._langButtonHandler = (e) => {
      const button = e.target.closest('.lang-btn');
      if (button) {
        e.preventDefault();
        const lang = button.dataset.lang;
        if (lang && ['en', 'de', 'tr'].includes(lang)) {
          this.switchLanguage(lang);
        }
      }
    };
    
    // Attach listener to document (event delegation)
    document.addEventListener('click', this._langButtonHandler);
  }

  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Create singleton instance
let translationManagerInstance = null;

export function initTranslations() {
  if (!translationManagerInstance) {
    translationManagerInstance = new TranslationManager();
    // Make it available globally for layout.js
    window.translationManager = translationManagerInstance;
  }
  return translationManagerInstance;
}

// Don't auto-initialize - let layout.js call initTranslations()
export default TranslationManager;

