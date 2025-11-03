#!/bin/bash
# Batch translation script for remaining service pages

# Service page translations mapping
declare -A TR_TITLES
declare -A DE_TITLES
declare -A TR_DESCS
declare -A DE_DESCS
declare -A TR_HEADINGS
declare -A DE_HEADINGS

# backend-api
TR_TITLES[backend-api]="Backend & API Geliştirme"
DE_TITLES[backend-api]="Backend & API Entwicklung"
TR_DESCS[backend-api]="Profesyonel Backend Geliştirme: REST API'lar, GraphQL, Microservices, Veritabanı Tasarımı, ERP/CRM Entegrasyonu. Bremen & Hamburg."
DE_DESCS[backend-api]="Professionelle Backend-Entwicklung: REST APIs, GraphQL, Microservices, Datenbankdesign, ERP/CRM Integration. Bremen & Hamburg."
TR_HEADINGS[backend-api]="Ölçeklenebilir Sunucu Çözümleri"
DE_HEADINGS[backend-api]="Skalierbare Server-Lösungen"

# ui-ux-design
TR_TITLES[ui-ux-design]="UI/UX Tasarım Hizmetleri"
DE_TITLES[ui-ux-design]="UI/UX Design Services"
TR_DESCS[ui-ux-design]="Profesyonel UI/UX Tasarım: Kullanıcı Arayüzü Tasarımı, Prototipleme, UX Araştırması, Kurumsal Kimlik. Bremen & Hamburg."
DE_DESCS[ui-ux-design]="Professionelles UI/UX Design: User Interface Design, Prototyping, UX-Forschung, Corporate Identity. Bremen & Hamburg."
TR_HEADINGS[ui-ux-design]="Kullanıcı Deneyimi Tasarımı"
DE_HEADINGS[ui-ux-design]="User Experience Design"

# cloud-devops
TR_TITLES[cloud-devops]="Bulut & DevOps Hizmetleri"
DE_TITLES[cloud-devops]="Cloud & DevOps Services"
TR_DESCS[cloud-devops]="Profesyonel Bulut & DevOps: AWS, Azure, GCP, Docker, Kubernetes, CI/CD Pipeline'ları. Bremen & Hamburg."
DE_DESCS[cloud-devops]="Professionelle Cloud & DevOps: AWS, Azure, GCP, Docker, Kubernetes, CI/CD Pipelines. Bremen & Hamburg."
TR_HEADINGS[cloud-devops]="Bulut Altyapı Çözümleri"
DE_HEADINGS[cloud-devops]="Cloud-Infrastruktur-Lösungen"

# security
TR_TITLES[security]="Güvenlik Hizmetleri"
DE_TITLES[security]="Sicherheits-Services"
TR_DESCS[security]="Profesyonel Güvenlik: PenTest, Güvenlik Açığı Taramaları, SSL/TLS, WAF, DDoS Koruması, GDPR Uyumluluğu. Bremen & Hamburg."
DE_DESCS[security]="Professionelle Sicherheit: PenTest, Vulnerability Scans, SSL/TLS, WAF, DDoS-Schutz, DSGVO-Compliance. Bremen & Hamburg."
TR_HEADINGS[security]="Güvenlik & Uyumluluk"
DE_HEADINGS[security]="Sicherheit & Compliance"

# seo-marketing
TR_TITLES[seo-marketing]="SEO & Pazarlama Hizmetleri"
DE_TITLES[seo-marketing]="SEO & Marketing Services"
TR_DESCS[seo-marketing]="Profesyonel SEO & Pazarlama: Teknik SEO, İçerik Stratejisi, Google Analytics, Online Reklamcılık. Bremen & Hamburg."
DE_DESCS[seo-marketing]="Professionelles SEO & Marketing: Technical SEO, Content-Strategie, Google Analytics, Online-Werbung. Bremen & Hamburg."
TR_HEADINGS[seo-marketing]="Dijital Pazarlama"
DE_HEADINGS[seo-marketing]="Digitales Marketing"

# ai-data
TR_TITLES[ai-data]="AI & Veri Hizmetleri"
DE_TITLES[ai-data]="AI & Data Services"
TR_DESCS[ai-data]="Profesyonel AI & Veri: AI Chatbot'lar, Öneri Sistemleri, NLP, Bilgisayarlı Görü, Veri Bilimi. Bremen & Hamburg."
DE_DESCS[ai-data]="Professionelle AI & Data: AI Chatbots, Empfehlungssysteme, NLP, Computer Vision, Data Science. Bremen & Hamburg."
TR_HEADINGS[ai-data]="Yapay Zeka Çözümleri"
DE_HEADINGS[ai-data]="KI-Lösungen"

# support
TR_TITLES[support]="Destek Hizmetleri"
DE_TITLES[support]="Support Services"
TR_DESCS[support]="Profesyonel Destek: Hosting Yönetimi, Yazılım Güncellemeleri, 7/24 SLA Desteği, Hata Düzeltmeleri. Bremen & Hamburg."
DE_DESCS[support]="Professioneller Support: Hosting-Management, Software-Updates, 24/7 SLA Support, Bug-Fixes. Bremen & Hamburg."
TR_HEADINGS[support]="Bakım & Destek"
DE_HEADINGS[support]="Wartung & Support"

# consulting
TR_TITLES[consulting]="Danışmanlık Hizmetleri"
DE_TITLES[consulting]="Beratungs-Services"
TR_DESCS[consulting]="Profesyonel Danışmanlık: Dijital Dönüşüm, Teknoloji Danışmanlığı, Ürün Stratejisi, Agile Koçluk. Bremen & Hamburg."
DE_DESCS[consulting]="Professionelle Beratung: Digitale Transformation, Technologie-Beratung, Produktstrategie, Agile Coaching. Bremen & Hamburg."
TR_HEADINGS[consulting]="Danışmanlık & Strateji"
DE_HEADINGS[consulting]="Beratung & Strategie"

echo "✅ Translation mappings ready"
echo "Run individual translations for each service page"


