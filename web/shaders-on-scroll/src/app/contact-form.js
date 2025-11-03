// Contact Form Handler with EmailJS and reCAPTCHA v3
(function() {
  // Initialize EmailJS with your public key
  emailjs.init('6fx7eDxVPymjwtNf8'); // Replace with your actual public key

  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnLoader = document.getElementById('btn-loader');
  const formMessage = document.getElementById('form-message');

  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Disable submit button and show loader
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';

    try {
      // Execute reCAPTCHA v3
      const recaptchaToken = await grecaptcha.execute('6Lf2vdkrAAAAANe6CUUCwmFvT06BWILunkszczKq', { action: 'submit' });
      
      // Get form data - mapped to EmailJS template variables
      const formData = {
        name: document.getElementById('from_name').value,         // {{name}}
        email: document.getElementById('from_email').value,       // {{email}}
        contact: document.getElementById('from_email').value,     // {{contact}} (your template uses this)
        phone: document.getElementById('phone').value || 'Not provided',  // {{phone}}
        service: document.getElementById('service').value || 'Not specified',
        title: document.getElementById('service').value || 'General Inquiry',
        message: document.getElementById('message').value,        // {{message}}
        time: new Date().toLocaleString('de-DE', { 
          dateStyle: 'short', 
          timeStyle: 'short' 
        }),  // {{time}}
        'g-recaptcha-response': recaptchaToken
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_0yjkhlj',     // Your EmailJS service ID
        'template_o2jw3l9',    // Your EmailJS template ID (Contact Us template)
        formData
      );

      console.log('SUCCESS!', response.status, response.text);
      showMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
      form.reset();
      
    } catch (error) {
      console.error('FAILED...', error);
      
      // Check if it's a reCAPTCHA error
      if (error.message && error.message.includes('recaptcha')) {
        showMessage('Security verification failed. Please refresh the page and try again.', 'error');
      } else {
        showMessage('Oops! Something went wrong. Please try again or contact us directly via email.', 'error');
      }
    } finally {
      // Re-enable submit button
      submitBtn.disabled = false;
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';
    }
  });

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 5000);
  }
})();