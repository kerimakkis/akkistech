# 🚀 Deployment Guide - akkistech.com

Complete deployment guide for akkistech.com to akkisHost Ubuntu Server with Docker + Nginx.

---

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Deploy](#quick-deploy)
- [Step-by-Step Deployment](#step-by-step-deployment)
- [Server Configuration](#server-configuration)
- [Post-Deployment](#post-deployment)
- [Troubleshooting](#troubleshooting)

---

## ✅ Prerequisites

### Local Machine:
- Node.js installed
- SSH access to server (kerim@192.168.178.20)
- Project built (`npm run build`)

### Server (akkisHost):
- Ubuntu Server
- Docker + Portainer
- Nginx container running (web-akkissoftware)
- Path: `/mnt/data/volumes/websites/akkistech/html/`

---

## ⚡ Quick Deploy

### One-Command Deploy:

```bash
cd /Users/kerimakkis/akkistech/web/shaders-on-scroll
rsync -avh --delete ./dist/ kerim@192.168.178.20:/mnt/data/volumes/websites/akkistech/html/ && ssh kerim@192.168.178.20 'docker restart web-akkissoftware'
```

**What it does:**
1. Syncs `dist/` folder to server
2. Deletes old files not in source (--delete)
3. Restarts Nginx Docker container
4. Site is live! 🎉

---

## 📝 Step-by-Step Deployment

### 1️⃣ **Build Project**

```bash
cd /Users/kerimakkis/akkistech/web/shaders-on-scroll
npm run build
```

**Output:**
- Creates `dist/` folder
- Minified HTML/CSS/JS
- Optimized assets
- SEO files (sitemap.xml, robots.txt, BingSiteAuth.xml)

### 2️⃣ **Sync Files to Server**

```bash
rsync -avh --delete ./dist/ kerim@192.168.178.20:/mnt/data/volumes/websites/akkistech/html/
```

**Flags:**
- `-a` → Archive mode (preserves permissions)
- `-v` → Verbose (shows progress)
- `-h` → Human-readable sizes
- `--delete` → Removes files on server not in source

**Progress:**
```
sending incremental file list
index.html
about.html
sitemap.xml
...
sent 788.5M bytes  received 1.2K bytes  52.5M bytes/sec
total size is 788M  speedup is 1.00
```

### 3️⃣ **Restart Nginx Container**

```bash
ssh kerim@192.168.178.20 'docker restart web-akkissoftware'
```

**Output:**
```
web-akkissoftware
```

### 4️⃣ **Verify Deployment**

Visit: https://akkistech.com

Check:
- ✅ Homepage loads
- ✅ All service pages work
- ✅ SEO files accessible:
  - https://akkistech.com/sitemap.xml
  - https://akkistech.com/robots.txt
  - https://akkistech.com/BingSiteAuth.xml

---

## 🐳 Server Configuration

### Docker Container: `web-akkissoftware`

**Location:** Portainer → Containers → web-akkissoftware

**Volume Mapping:**
```
/mnt/data/volumes/websites/akkistech/html/ → /usr/share/nginx/html
```

**Nginx Config Location:**
```
/mnt/data/volumes/websites/akkistech/nginx.conf
```

### Recommended Nginx Config:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name akkistech.com www.akkistech.com;

    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json;

    # Main location
    location / {
        try_files $uri $uri/ =404;
    }

    # SEO files
    location = /sitemap.xml {
        default_type application/xml;
    }

    location = /robots.txt {
        default_type text/plain;
    }

    location = /BingSiteAuth.xml {
        default_type application/xml;
    }

    # Download files
    location /downloads/ {
        autoindex off;
        sendfile on;
        tcp_nopush on;
        keepalive_timeout 650;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}

# HTTPS redirect (if SSL configured)
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name akkistech.com www.akkistech.com;

    ssl_certificate /etc/letsencrypt/live/akkistech.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/akkistech.com/privkey.pem;

    root /usr/share/nginx/html;
    index index.html;

    # ... (same locations as above)
}
```

---

## 🔍 Post-Deployment

### 1. **Google Search Console**

1. Visit: https://search.google.com/search-console/
2. Select property: akkistech.com
3. Click "Verify" (meta tag already in index.html)
4. Submit Sitemap: `https://akkistech.com/sitemap.xml`
5. Request indexing for key pages

### 2. **Bing Webmaster Tools**

1. Visit: https://www.bing.com/webmasters/
2. Select site: akkistech.com
3. Click "Verify" (BingSiteAuth.xml already uploaded)
4. Submit Sitemap: `https://akkistech.com/sitemap.xml`
5. Run SEO Analyzer

### 3. **Performance Check**

Test site performance:
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/

### 4. **SSL Certificate (if needed)**

Install Let's Encrypt on server:

```bash
ssh kerim@192.168.178.20

# Install certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d akkistech.com -d www.akkistech.com

# Auto-renewal test
sudo certbot renew --dry-run
```

---

## 🐛 Troubleshooting

### Issue 1: Rsync Permission Denied

**Solution:**
```bash
# On server, fix permissions
ssh kerim@192.168.178.20
sudo chown -R kerim:kerim /mnt/data/volumes/websites/akkistech/html/
```

### Issue 2: Docker Container Won't Start

**Check logs:**
```bash
ssh kerim@192.168.178.20
docker logs web-akkissoftware
```

**Restart manually:**
```bash
ssh kerim@192.168.178.20
docker restart web-akkissoftware
# or via Portainer UI
```

### Issue 3: 404 Errors After Deploy

**Check Nginx config:**
```bash
ssh kerim@192.168.178.20
docker exec web-akkissoftware nginx -t
```

**Verify files uploaded:**
```bash
ssh kerim@192.168.178.20
ls -lh /mnt/data/volumes/websites/akkistech/html/
```

### Issue 4: Old Files Still Showing

**Clear browser cache:**
- Chrome: Ctrl+Shift+R (hard refresh)
- Or use Incognito mode

**Clear CDN cache (if using Cloudflare):**
- Cloudflare Dashboard → Caching → Purge Everything

---

## 📊 Deployment Checklist

### Pre-Deployment:
- [ ] Code changes committed to Git
- [ ] Build successful (`npm run build`)
- [ ] dist/ folder size checked (~788 MB)
- [ ] SEO files present (sitemap.xml, robots.txt)

### Deployment:
- [ ] Rsync completed without errors
- [ ] Docker container restarted successfully
- [ ] Website accessible (https://akkistech.com)

### Post-Deployment:
- [ ] All pages loading correctly
- [ ] SEO files accessible
- [ ] Google Search Console verified
- [ ] Bing Webmaster verified
- [ ] Sitemap submitted to both
- [ ] Performance tested
- [ ] Mobile responsive check

---

## 🔄 Rollback (if needed)

If deployment fails, rollback to previous version:

```bash
# On server, restore from backup
ssh kerim@192.168.178.20
cd /mnt/data/volumes/websites/akkistech/
cp -r html_backup/ html/
docker restart web-akkissoftware
```

**Always create backup before major updates:**
```bash
ssh kerim@192.168.178.20
cd /mnt/data/volumes/websites/akkistech/
cp -r html/ html_backup_$(date +%Y%m%d_%H%M%S)/
```

---

## 📞 Support

For deployment issues:
- **Email:** kerimakkis@gmail.com
- **Server:** akkisHost (192.168.178.20)
- **Portainer:** http://192.168.178.20:9000

---

## 🎯 Quick Reference

### Deploy Command:
```bash
cd /Users/kerimakkis/akkistech/web/shaders-on-scroll && npm run build && rsync -avh --delete ./dist/ kerim@192.168.178.20:/mnt/data/volumes/websites/akkistech/html/ && ssh kerim@192.168.178.20 'docker restart web-akkissoftware'
```

### Server Details:
- **IP:** 192.168.178.20
- **User:** kerim
- **Path:** /mnt/data/volumes/websites/akkistech/html/
- **Container:** web-akkissoftware
- **Domain:** akkistech.com

---

**Last Updated:** 2025-11-03
**Version:** 1.0
