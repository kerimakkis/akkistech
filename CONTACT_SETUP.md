# Contact Form Setup Guide

## 📧 EmailJS Setup

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Add Email Service
1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Copy your **SERVICE_ID**

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interest: {{service}}

Message:
{{message}}

---
This message was sent via akkistech.com contact form.
reCAPTCHA: {{g-recaptcha-response}}
```

4. Copy your **TEMPLATE_ID**

### 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### 5. Update contact-form.js
Open `src/app/contact-form.js` and replace:
- `YOUR_EMAILJS_PUBLIC_KEY` with your Public Key
- `YOUR_SERVICE_ID` with your Service ID
- `YOUR_TEMPLATE_ID` with your Template ID

## 🤖 Google reCAPTCHA Setup

### 1. Register Site
1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Click "+" to add a new site
3. Fill in:
   - **Label**: akkistech Contact Form
   - **reCAPTCHA type**: reCAPTCHA v2 → "I'm not a robot" Checkbox
   - **Domains**: 
     - `localhost` (for development)
     - `akkistech.com` (your production domain)
4. Accept the terms
5. Click "Submit"

### 2. Copy Site Key
1. Copy the **Site Key** (starts with `6L...`)
2. Open `src/contact.html`
3. Find line: `<div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>`
4. Replace `YOUR_RECAPTCHA_SITE_KEY` with your Site Key

## 📱 WhatsApp Setup

### Update Phone Number
In `src/contact.html`, find:
```html
https://wa.me/4942112345678
```

Replace with your WhatsApp number:
- Format: Country code + number (no spaces, no +)
- Example: `4942112345678` for +49 421 123 456 78

## 📞 Phone Number Update

Update in multiple places:

### 1. contact.html
```html
<a href="tel:+4942112345678" class="contact-btn phone-btn">
```

### 2. Contact info section
```html
<p><strong>Phone:</strong> +49 (0) 421 123 456 78</p>
```

## 🗺️ Google Maps Setup

### Option 1: Use Current Generic Map
The current embed shows Bremen location. This works but is generic.

### Option 2: Get Exact Location (Recommended)
1. Go to [Google Maps](https://maps.google.com)
2. Search for your exact office address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `src/contact.html` (line ~131)

## 🧪 Testing

### Test Locally
1. Run `npm start`
2. Navigate to `/contact.html`
3. Test the form submission
4. Check EmailJS dashboard for test email

### Before Production
- [ ] EmailJS Public Key added
- [ ] EmailJS Service ID added
- [ ] EmailJS Template ID added
- [ ] reCAPTCHA Site Key added
- [ ] WhatsApp number updated
- [ ] Phone number updated in all places
- [ ] Google Maps location updated
- [ ] Test form submission
- [ ] Test reCAPTCHA validation
- [ ] Test WhatsApp link
- [ ] Test phone link
- [ ] Check email receipt

## 📊 EmailJS Free Tier Limits
- 200 emails per month
- 2 email services
- 2 email templates
- ✅ Perfect for small business contact forms

## 🔒 Security Notes
- reCAPTCHA protects against spam bots
- EmailJS keys are safe for frontend (they're designed for it)
- Never expose your email password
- Monitor EmailJS dashboard for suspicious activity

## 💡 Tips
1. Test with a real email first
2. Check spam folder if emails don't arrive
3. Keep reCAPTCHA keys secure
4. Update contact info in footer too (layout.js)
5. Consider adding email autoresponder in EmailJS

## 🚀 Ready to Deploy!
Once all keys are configured, your contact form is production-ready!
