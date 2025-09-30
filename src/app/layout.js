// Use src folder path
const logoUrl = './akkisTechLogo.png';

function getHeaderHTML(tagline = 'Innovative Software Solutions') {
  // Check if we're on index.html or not
  const currentPage = window.location.pathname;
  const isIndexPage = currentPage === '/' || currentPage.endsWith('/index.html') || currentPage.endsWith('/');
  
  // If NOT on index page, add Home button at the beginning of nav
  const homeButton = !isIndexPage ? '<a href="index.html" data-translate="nav.home">Home</a>' : '';
  
  // Header HTML generation
  
  return `
  <header class="header">
    <div class="header__brand">
      <div class="header__logo">
        <img src="${logoUrl}" alt="AkkisTech Logo" class="header__logo-img">
      </div>
      <div class="header__brand-text">
        <h1 class="header__title"><a href="index.html" class="header__home">AkkisTech</a></h1>
        <span class="header__tagline" data-translate="hero.tagline">${tagline}</span>
      </div>
    </div>
    <nav class="header__nav">
      ${homeButton}
      <a href="index.html#services" data-translate="nav.services">Services</a>
      <a href="contact.html" data-translate="nav.contact">Contact</a>
      <a href="index.html#about" data-translate="nav.about">About</a>
    </nav>
    <div class="header__language">
      <button class="lang-btn" data-lang="en">EN</button>
      <button class="lang-btn" data-lang="de">DE</button>
      <button class="lang-btn" data-lang="tr">TR</button>
    </div>
  </header>`;
}

function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__section footer__section--brand">
        <h4>akkistech</h4>
        <p><span data-translate="hero.tagline">Innovative Software Solutions</span><br>Bremen, Deutschland</p>
        <p class="footer__tagline" data-translate="footer.tagline">Full-Stack Development • AI Solutions • Cloud Services</p>
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
        <h4 data-translate="nav.services">Services</h4>        
        <ul>
          <li><a href="web-development.html" data-translate="services.web.heading">Web Development</a></li>
          <li><a href="mobile-development.html" data-translate="services.mobile.heading">Mobile Apps</a></li>
          <li><a href="backend-api.html" data-translate="services.backend.heading">Backend</a></li>
          <li><a href="ui-ux-design.html" data-translate="services.design.heading">UX/UI Design</a></li>          
          <li><a href="cloud-devops.html" data-translate="services.cloud.heading">Cloud Services</a></li>          
          <li><a href="security.html" data-translate="services.security.heading">Security</a></li>
          <li><a href="seo-marketing.html" data-translate="services.seo.heading">SEO & Marketing</a></li>
          <li><a href="ai-data.html" data-translate="services.ai.heading">AI Solutions</a></li>
          <li><a href="support.html" data-translate="services.support.heading">Support</a></li>
          <li><a href="consulting.html" data-translate="services.consulting.heading">Consulting</a></li>
        </ul>
      </div>
      <div class="footer__section">
        <h4 data-translate="footer.company">Unternehmen</h4>
        <ul>
          <li><a href="index.html#about" data-translate="footer.about">Über uns</a></li>
          <li><a href="contact.html" data-translate="footer.contact">Kontakt</a></li>
          <li><a href="/impressum" data-translate="footer.imprint">Impressum</a></li>
          <li><a href="/datenschutz" data-translate="footer.privacy">Datenschutz</a></li>
        </ul>
      </div>
      <div class="footer__section">
        <h4 data-translate="nav.contact">Kontakt</h4>
        <p>
          <strong data-translate="contact.email">E-Mail:</strong> kerimakkis@gmail.com<br>
          <strong data-translate="contact.phone">Telefon:</strong> +49 (0) 172 563 4515<br>
          <strong>Bremen:</strong> Findorff, 28215 Bremen
        </p>
      </div>
    </div>
    <div class="footer__bottom">
      <p data-translate="footer.copyright">© 2024 akkistech. Alle Rechte vorbehalten.</p>
      <p class="footer__credits"><span data-translate="footer.credits">inspired by</span> <a href="https://tympanus.net/codrops" target="_blank">Codrops</a></p>
    </div>
  </footer>`;
}

function injectLayout() {
  const headerMount = document.getElementById('site-header');
  if (headerMount) {
    headerMount.innerHTML = getHeaderHTML();
  }

  const footerMount = document.getElementById('site-footer');
  if (footerMount) {
    footerMount.innerHTML = getFooterHTML();
  }

  window.dispatchEvent(new CustomEvent('layout:ready'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectLayout);
} else {
  // In case the script is loaded after DOMContentLoaded
  injectLayout();
}

export {};


