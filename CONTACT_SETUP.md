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
reCAPTCHA Score: {{g-recaptcha-response}}
```

4. Copy your **TEMPLATE_ID**

### 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### 5. Update contact-form.js
Open `src/app/contact-form.js` and replace:
- Line 4: `YOUR_EMAILJS_PUBLIC_KEY` with your Public Key (currently: `6fx7eDxVPymjwtNf8`)
- Line 42: `YOUR_SERVICE_ID` with your Service ID (currently: `service_0yjkhlj`)
- Line 43: `YOUR_TEMPLATE_ID` with your Template ID (currently: `template_84saou9`)

## 🤖 Google reCAPTCHA v3 Setup (Invisible Badge)

### 1. Register Site for v3
1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Click "+" to add a new site
3. Fill in:
   - **Label**: akkistech Contact Form v3
   - **reCAPTCHA type**: ⚠️ **reCAPTCHA v3** (NOT v2!)
   - **Domains**: 
     - `localhost` (for development)
     - `akkistech.com` (your production domain)
4. Accept the terms
5. Click "Submit"

### 2. Copy Site Key
1. Copy the **Site Key** (starts with `6L...`)
2. Open `src/contact.html`
3. Find line 16: `<script src="https://www.google.com/recaptcha/api.js?render=YOUR_RECAPTCHA_V3_SITE_KEY"`
4. Replace `YOUR_RECAPTCHA_V3_SITE_KEY` with your v3 Site Key

### 3. Update JavaScript
1. Open `src/app/contact-form.js`
2. Find line 22: `grecaptcha.execute('YOUR_RECAPTCHA_V3_SITE_KEY', { action: 'submit' })`
3. Replace `YOUR_RECAPTCHA_V3_SITE_KEY` with the **same** Site Key

### What's Different in v3?
- ✅ **No checkbox** - completely invisible to users
- ✅ **No puzzles** - no "select traffic lights" challenges
- ✅ **Small badge** - tiny badge in bottom-right corner (can be hidden with CSS if needed)
- ✅ **Score-based** - returns a score from 0.0 (bot) to 1.0 (human)
- ✅ **Better UX** - users don't even notice it's there

## 📱 WhatsApp Setup

### Update Phone Number
In `src/contact.html`, find (line ~93):
```html
https://wa.me/4942112345678
```

Replace with your WhatsApp number:
- Format: Country code + number (no spaces, no +)
- Example: `4917256345158` for +49 172 563 4515

### Update Pre-filled Message
In the same link, customize the text after `?text=`:
```html
?text=Hello%20akkistech!%20I%27m%20interested%20in%20your%20services.
```

Use URL encoding:
- Spaces = `%20`
- Apostrophe = `%27`
- Exclamation = `!`

## 📞 Phone Number Update

Update in multiple places:

### 1. contact.html (line ~102)
```html
<a href="tel:+4917256345158" class="contact-btn phone-btn">
```

### 2. Contact info section (line ~117)
```html
<p><strong>Phone:</strong> +49 (0) 172 563 4515</p>
```

### 3. layout.js (footer)
Open `src/app/layout.js` and update the phone number in the footer section.

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
3. Fill out and submit the form
4. Check browser console for reCAPTCHA score
5. Check EmailJS dashboard for test email

### Before Production
- [ ] EmailJS Public Key added (line 4 in contact-form.js)
- [ ] EmailJS Service ID added (line 42)
- [ ] EmailJS Template ID added (line 43)
- [ ] reCAPTCHA v3 Site Key added in HTML (line 16 in contact.html)
- [ ] reCAPTCHA v3 Site Key added in JS (line 22 in contact-form.js)
- [ ] WhatsApp number updated
- [ ] Phone number updated in all places
- [ ] Google Maps location updated
- [ ] Test form submission
- [ ] Test WhatsApp link
- [ ] Test phone link
- [ ] Check email receipt

## 📊 EmailJS Free Tier Limits
- 200 emails per month
- 2 email services
- 2 email templates
- ✅ Perfect for small business contact forms

## 🔒 Security Notes
- reCAPTCHA v3 scores range from 0.0 (bot) to 1.0 (human)
- Typical threshold: 0.5 (you can adjust in EmailJS or backend)
- EmailJS keys are safe for frontend (they're designed for it)
- Never expose your email password
- Monitor EmailJS dashboard for suspicious activity

## 🎨 Styling the reCAPTCHA Badge (Optional)

### Hide the badge completely
If you want to hide the badge (you MUST include terms in your privacy policy):

```sass
.grecaptcha-badge 
  visibility: hidden
```

Then add to your privacy policy:
```
This site is protected by reCAPTCHA and the Google 
Privacy Policy and Terms of Service apply.
```

### Move the badge
```sass
.grecaptcha-badge 
  bottom: 70px !important  // Move it up
  right: 20px !important   // Move it left
```

## 💡 Tips
1. v3 works invisibly - no user interaction needed
2. Test with a real email first
3. Check spam folder if emails don't arrive
4. Monitor reCAPTCHA scores in console during development
5. Consider adding email autoresponder in EmailJS
6. The badge is tiny - users won't be bothered by it

## 🚀 Ready to Deploy!
Once all keys are configured, your contact form is production-ready with invisible bot protection!