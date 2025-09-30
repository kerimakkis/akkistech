// Contact Form Handler with EmailJS and reCAPTCHA
(function() {
  // Initialize EmailJS with your public key
  emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // Replace with your actual public key

  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnLoader = document.getElementById('btn-loader');
  const formMessage = document.getElementById('form-message');

  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Validate reCAPTCHA
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      showMessage('Please complete the reCAPTCHA verification.', 'error');
      return;
    }

    // Disable submit button and show loader
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';

    // Get form data
    const formData = {
      from_name: document.getElementById('from_name').value,
      from_email: document.getElementById('from_email').value,
      phone: document.getElementById('phone').value || 'Not provided',
      service: document.getElementById('service').value || 'Not specified',
      message: document.getElementById('message').value,
      'g-recaptcha-response': recaptchaResponse
    };

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
        formData
      );

      console.log('SUCCESS!', response.status, response.text);
      showMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
      form.reset();
      grecaptcha.reset();
      
    } catch (error) {
      console.error('FAILED...', error);
      showMessage('Oops! Something went wrong. Please try again or contact us directly via email.', 'error');
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
