function getHeaderHTML(tagline = 'Innovative Software Solutions') {
  return `
  <header class="header">
    <div class="header__brand">
      <h1 class="header__title"><a href="index.html" class="header__home">akkistech</a></h1>
      <span class="header__tagline">${tagline}</span>
    </div>
    <nav class="header__nav">
      <a href="index.html#services" data-translate="nav.services">Services</a>
      <a href="index.html#contact" data-translate="nav.contact">Contact</a>
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
        <p>Innovative Software Solutions<br>Bremen & Hamburg, Deutschland</p>
        <p class="footer__tagline">Full-Stack Development • AI Solutions • Cloud Services</p>
        <div class="footer__social">
          <a href="https://linkedin.com/company/akkistech" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://github.com/akkistech" target="_blank" rel="noopener" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="mailto:hello@akkistech.com" aria-label="E-Mail">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer__section">
        <h4>Services</h4>        
        <ul>
          <li><a href="web-development.html">Web Development</a></li>
          <li><a href="mobile-development.html">Mobile Apps</a></li>
          <li><a href="backend-api.html">Backend</a></li>
          <li><a href="ui-ux-design.html">UX/UIDesign</a></li>          
          <li><a href="cloud-devops.html">Cloud Services</a></li>          
          <li><a href="security.html">Security</a></li>
          <li><a href="seo-marketing.html">SEO & Marketing</a></li>
          <li><a href="ai-data.html">AI Solutions</a></li>
          <li><a href="support.html">Support</a></li>
          <li><a href="consulting.html">Consulting</a></li>
        </ul>
      </div>
      <div class="footer__section">
        <h4>Unternehmen</h4>
        <ul>
          <li><a href="index.html#about">Über uns</a></li>
          <li><a href="index.html#contact">Kontakt</a></li>
          <li><a href="/impressum">Impressum</a></li>
          <li><a href="/datenschutz">Datenschutz</a></li>
        </ul>
      </div>
      <div class="footer__section">
        <h4>Kontakt</h4>
        <p>
          <strong>E-Mail:</strong> hello@akkistech.com<br>
          <strong>Telefon:</strong> +49 (0) 421 123 456<br>
          <strong>Bremen:</strong> Überseestadt<br>
          <strong>Hamburg:</strong> HafenCity
        </p>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© 2024 akkistech. Alle Rechte vorbehalten.</p>
      <p class="footer__credits">inspired by <a href="https://tympanus.net/codrops" target="_blank">Codrops</a></p>
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


