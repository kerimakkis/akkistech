// Smart Email Handler - Simple and effective fallback
(function() {
  const email = 'kerimakkis@gmail.com';
  
  // Function to handle email clicks with immediate fallback
  function handleEmailClick(e, emailAddress, subject = '') {
    e.preventDefault();
    
    // Show options immediately - no complex detection needed
    showEmailOptions(emailAddress, subject);
  }
  
  // Show fallback options
  function showEmailOptions(emailAddress, subject) {
    const options = [
      {
        name: 'Gmail',
        url: `https://mail.google.com/mail/?view=cm&to=${emailAddress}${subject ? `&su=${encodeURIComponent(subject)}` : ''}`,
        icon: '📧'
      },
      {
        name: 'Outlook',
        url: `https://outlook.live.com/mail/0/deeplink/compose?to=${emailAddress}${subject ? `&subject=${encodeURIComponent(subject)}` : ''}`,
        icon: '📮'
      },
      {
        name: 'Yahoo Mail',
        url: `https://compose.mail.yahoo.com/?to=${emailAddress}${subject ? `&subject=${encodeURIComponent(subject)}` : ''}`,
        icon: '📬'
      },
      {
        name: 'Copy Email',
        action: () => copyToClipboard(emailAddress)
      }
    ];
    
    // Create modal with options
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      padding: 2rem;
      max-width: 400px;
      text-align: center;
      color: white;
    `;
    
    modalContent.innerHTML = `
      <h3 style="margin: 0 0 1rem 0; color: white;">📧 Email Gönder</h3>
      <p style="margin: 0 0 1.5rem 0; opacity: 0.8;">Hangi email servisini kullanmak istiyorsunuz?</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
        ${options.map(option => `
          <button onclick="${option.action ? option.action.toString() : `window.open('${option.url}', '_blank')`}; this.parentElement.parentElement.parentElement.remove()" 
                  style="
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 8px;
                    padding: 1rem;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    min-height: 80px;
                  "
                  onmouseover="this.style.background='rgba(255, 255, 255, 0.2)'"
                  onmouseout="this.style.background='rgba(255, 255, 255, 0.1)'">
            <span style="font-size: 1.5rem;">${option.icon || '📋'}</span>
            <span style="font-size: 0.9rem;">${option.name}</span>
          </button>
        `).join('')}
      </div>
      <button onclick="this.parentElement.parentElement.remove()" 
              style="
                margin-top: 1.5rem;
                background: transparent;
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 6px;
                padding: 0.75rem 1.5rem;
                color: white;
                cursor: pointer;
                width: 100%;
              ">
        Kapat
      </button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Auto-close after 15 seconds
    setTimeout(() => {
      if (document.body.contains(modal)) {
        modal.remove();
      }
    }, 15000);
  }
  
  // Copy to clipboard function
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      // Show success message
      const toast = document.createElement('div');
      toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(40, 167, 69, 0.9);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 10001;
        animation: slideIn 0.3s ease;
        font-weight: 500;
      `;
      toast.textContent = '📋 Email kopyalandı: ' + text;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.remove();
      }, 4000);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      alert('Email kopyalandı: ' + text);
    });
  }
  
  // Add click handlers when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    // Email button in contact buttons
    const emailBtn = document.getElementById('email-btn');
    if (emailBtn) {
      emailBtn.addEventListener('click', (e) => handleEmailClick(e, email));
    }
    
    // Send email button
    const sendEmailBtn = document.getElementById('send-email-btn');
    if (sendEmailBtn) {
      sendEmailBtn.addEventListener('click', (e) => handleEmailClick(e, email, 'General Inquiry'));
    }
  });
  
  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
})();