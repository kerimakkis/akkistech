// Import logo base64
import { logoBase64 } from './logo.js';

function getHeaderHTML() {
  // Use translationManager from window object
  const t = window.translationManager || getFallbackTranslations();
  
  // Check if we're on index.html or not
  const currentPage = window.location.pathname;
  const isIndexPage = currentPage === '/' || currentPage.endsWith('/index.html') || currentPage.endsWith('/');
  
  // If NOT on index page, add Home button at the beginning of nav
  const homeButton = !isIndexPage ? `<a href="index.html" data-translate="nav.home">${t.t('nav.home')}</a>` : '';
  
  // Header HTML generation (without img src - will be added via DOM)
  
  return `
  <header class="header">
    <div class="header__brand">
      <div class="header__logo">
        <img id="header-logo" alt="AkkisTech Logo" class="header__logo-img">
      </div>
      <div class="header__brand-text">
        <h1 class="header__title"><a href="index.html" class="header__home">AkkisTech</a></h1>
        <span class="header__tagline" data-translate="hero.tagline">${t.t('hero.tagline')}</span>
      </div>
    </div>
    <nav class="header__nav">
      ${homeButton}
      <a href="index.html#services" data-translate="nav.services">${t.t('nav.services')}</a>
      <a href="contact.html" data-translate="nav.contact">${t.t('nav.contact')}</a>
      <a href="about.html" data-translate="nav.about">${t.t('nav.about')}</a>
    </nav>
    <div class="header__language">
      <button class="lang-btn" data-lang="en">EN</button>
      <button class="lang-btn" data-lang="de">DE</button>
      <button class="lang-btn" data-lang="tr">TR</button>
    </div>
  </header>`;
}

// Fallback translations function
function getFallbackTranslations() {
  const lang = localStorage.getItem('akkistech-language') || 'en';
  const translations = {
    en: { 
      'nav.home': 'Home', 'nav.services': 'Services', 'nav.contact': 'Contact', 'nav.about': 'About',
      'hero.tagline': 'Innovative Software Solutions', 
      'footer.tagline': 'Full-Stack Development • AI Solutions • Cloud Services', 
      'footer.company': 'Company', 'footer.about': 'About Us', 'footer.contact': 'Contact', 
      'footer.imprint': 'Imprint', 'footer.privacy': 'Privacy', 
      'footer.copyright': '© 2024 akkistech. All rights reserved.', 
      'footer.credits': 'Shader effects inspired by', 
      'contact.email': 'Email', 'contact.phone': 'Phone',
      'services.web.heading': 'Web Development', 'services.mobile.heading': 'Mobile Apps',
      'services.backend.heading': 'Backend', 'services.design.heading': 'UX/UI Design',
      'services.cloud.heading': 'Cloud Services', 'services.security.heading': 'Security',
      'services.seo.heading': 'SEO & Marketing', 'services.ai.heading': 'AI Solutions',
      'services.support.heading': 'Support', 'services.consulting.heading': 'Consulting'
    },
    de: { 
      'nav.home': 'Startseite', 'nav.services': 'Services', 'nav.contact': 'Kontakt', 'nav.about': 'Über uns',
      'hero.tagline': 'Innovative Software-Lösungen', 
      'footer.tagline': 'Full-Stack Entwicklung • AI Lösungen • Cloud Services', 
      'footer.company': 'Unternehmen', 'footer.about': 'Über uns', 'footer.contact': 'Kontakt', 
      'footer.imprint': 'Impressum', 'footer.privacy': 'Datenschutz', 
      'footer.copyright': '© 2024 akkistech. Alle Rechte vorbehalten.', 
      'footer.credits': 'Shader-Effekte inspiriert von', 
      'contact.email': 'E-Mail', 'contact.phone': 'Telefon',
      'services.web.heading': 'Web-Entwicklung', 'services.mobile.heading': 'Mobile Apps',
      'services.backend.heading': 'Backend', 'services.design.heading': 'UX/UI Design',
      'services.cloud.heading': 'Cloud Services', 'services.security.heading': 'Sicherheit',
      'services.seo.heading': 'SEO & Marketing', 'services.ai.heading': 'AI Lösungen',
      'services.support.heading': 'Support', 'services.consulting.heading': 'Beratung'
    },
    tr: { 
      'nav.home': 'Ana Sayfa', 'nav.services': 'Hizmetler', 'nav.contact': 'İletişim', 'nav.about': 'Hakkımızda',
      'hero.tagline': 'Yenilikçi Yazılım Çözümleri', 
      'footer.tagline': 'Full-Stack Geliştirme • AI Çözümleri • Bulut Hizmetleri', 
      'footer.company': 'Şirket', 'footer.about': 'Hakkımızda', 'footer.contact': 'İletişim', 
      'footer.imprint': 'Künye', 'footer.privacy': 'Gizlilik', 
      'footer.copyright': '© 2024 akkistech. Tüm hakları saklıdır.', 
      'footer.credits': 'Shader efektleri şundan ilham alınmıştır', 
      'contact.email': 'E-posta', 'contact.phone': 'Telefon',
      'services.web.heading': 'Web Geliştirme', 'services.mobile.heading': 'Mobil Uygulamalar',
      'services.backend.heading': 'Backend', 'services.design.heading': 'UX/UI Tasarım',
      'services.cloud.heading': 'Bulut Hizmetleri', 'services.security.heading': 'Güvenlik',
      'services.seo.heading': 'SEO & Pazarlama', 'services.ai.heading': 'AI Çözümleri',
      'services.support.heading': 'Destek', 'services.consulting.heading': 'Danışmanlık'
    }
  };
  return { t: (key) => translations[lang]?.[key] || key };
}

function getFooterHTML() {
  // Use translationManager from window object
  const t = window.translationManager || getFallbackTranslations();
  
  return `
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__section footer__section--brand">
        <div class="footer__brand-header">
          <div class="footer__logo">
            <img id="footer-logo" src="${logoBase64}" alt="AkkisTech Logo" class="footer__logo-img">
          </div>
          <h4>akkistech</h4>
        </div>
        <p><span data-translate="hero.tagline">${t.t('hero.tagline')}</span><br>Bremen, Deutschland</p>
        <p class="footer__tagline" data-translate="footer.tagline">${t.t('footer.tagline')}</p>
        <div class="footer__social">
          <a href="https://linkedin.com/company/akkistech" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://github.com/akkistech" target="_blank" rel="noopener" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="mailto:kerimakkis@gmail.com" aria-label="E-Mail">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
          <a href="tel:+491725634515" aria-label="Telefon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
          </a>
          <a href="https://wa.me/491725634515?text=Hello%20akkistech!%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener" aria-label="WhatsApp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer__section">
        <h4 data-translate="nav.services">${t.t('nav.services')}</h4>        
        <ul>
          <li><a href="web-development.html" data-translate="services.web.heading">${t.t('services.web.heading')}</a></li>
          <li><a href="mobile-development.html" data-translate="services.mobile.heading">${t.t('services.mobile.heading')}</a></li>
          <li><a href="backend-api.html" data-translate="services.backend.heading">${t.t('services.backend.heading')}</a></li>
          <li><a href="ui-ux-design.html" data-translate="services.design.heading">${t.t('services.design.heading')}</a></li>          
          <li><a href="cloud-devops.html" data-translate="services.cloud.heading">${t.t('services.cloud.heading')}</a></li>          
          <li><a href="security.html" data-translate="services.security.heading">${t.t('services.security.heading')}</a></li>
          <li><a href="seo-marketing.html" data-translate="services.seo.heading">${t.t('services.seo.heading')}</a></li>
          <li><a href="ai-data.html" data-translate="services.ai.heading">${t.t('services.ai.heading')}</a></li>
          <li><a href="support.html" data-translate="services.support.heading">${t.t('services.support.heading')}</a></li>
          <li><a href="consulting.html" data-translate="services.consulting.heading">${t.t('services.consulting.heading')}</a></li>
          <li><a href="optiviera.html">Optiviera ERP</a></li>
        </ul>
      </div>
      <div class="footer__section">
        <h4 data-translate="footer.company">${t.t('footer.company')}</h4>
        <ul>
          <li><a href="about.html" data-translate="footer.about">${t.t('footer.about')}</a></li>
          <li><a href="contact.html" data-translate="footer.contact">${t.t('footer.contact')}</a></li>
          <li><a href="impressum.html" data-translate="footer.imprint">${t.t('footer.imprint')}</a></li>
          <li><a href="datenschutz.html" data-translate="footer.privacy">${t.t('footer.privacy')}</a></li>
        </ul>
      </div>
      <div class="footer__section">
        <h4 data-translate="nav.contact">${t.t('nav.contact')}</h4>
        <p>
          <strong data-translate="contact.email">${t.t('contact.email')}:</strong> kerimakkis@gmail.com<br>
          <strong data-translate="contact.phone">${t.t('contact.phone')}:</strong> +49 (0) 172 563 4515<br>
          <strong>Bremen:</strong> Findorff, 28215 Bremen
        </p>
      </div>
    </div>
    
    <div class="footer__bottom">
      <p data-translate="footer.copyright">${t.t('footer.copyright')}</p>
      <p class="footer__credits"><span data-translate="footer.credits">${t.t('footer.credits')}</span> <a href="https://tympanus.net/codrops" target="_blank">Codrops</a></p>
    </div>
  </footer>`;
}

async function injectLayout() {
  // Import translations module - it will initialize itself
  if (!window.translationManager) {
    const { initTranslations } = await import('./translations.js');
    initTranslations();
  }
  
  const headerMount = document.getElementById('site-header');
  if (headerMount) {
    headerMount.innerHTML = getHeaderHTML();
    
    // Load real AkkisTech logo via DOM (base64)
    const logoImg = document.getElementById('header-logo');
    if (logoImg) {
      logoImg.src = logoBase64;
    }
  }

  const footerMount = document.getElementById('site-footer');
  if (footerMount) {
    footerMount.innerHTML = getFooterHTML();
    
    // Ensure footer logo is loaded
    const footerLogoImg = document.getElementById('footer-logo');
    if (footerLogoImg) {
      footerLogoImg.src = logoBase64;
    }
  }
  
  // Wait a bit for translationManager to be ready, then reapply translations
  setTimeout(() => {
    if (window.translationManager) {
      window.translationManager.applyTranslations();
      // Ensure logo is loaded after translations
      window.translationManager.ensureLogoLoaded();
    }
    window.dispatchEvent(new CustomEvent('layout:ready'));
  }, 100);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectLayout);
} else {
  // In case the script is loaded after DOMContentLoaded
  injectLayout();
}

// Listen for language change events to reload header and footer
window.addEventListener('languageChanged', () => {
  const headerMount = document.getElementById('site-header');
  if (headerMount) {
    headerMount.innerHTML = getHeaderHTML();
    
    // Load logo after header re-render
    const logoImg = document.getElementById('header-logo');
    if (logoImg) {
      logoImg.src = logoBase64;
    }
    
    // Re-apply translations to re-rendered header
    if (window.translationManager) {
      setTimeout(() => {
        window.translationManager.applyTranslations();
      }, 50);
    }
  }
  
  const footerMount = document.getElementById('site-footer');
  if (footerMount) {
    footerMount.innerHTML = getFooterHTML();
    
    // Ensure footer logo is loaded after re-render
    const footerLogoImg = document.getElementById('footer-logo');
    if (footerLogoImg) {
      footerLogoImg.src = logoBase64;
    }
  }
});

export {};


