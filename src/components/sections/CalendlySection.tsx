"use client";

import Script from 'next/script';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '@/lib/translations';

export default function CalendlySection() {
  const { language } = useLanguage();
  const t = translations[language];
  const calendlyUrl = "https://calendly.com/product-insharo/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=292931&text_color=E0EBEA&primary_color=308C8C";

  return (
    <section id="contact" className="py-12 bg-surface md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.25)" }}
          >
            <CalendarDays className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-white/70">{t.calendly.badge}</span>
          </motion.div>

          <h2 className="text-3xl font-bold text-center text-foreground">{t.calendly.title}</h2>
          <p className="text-foreground/50 mt-2">{t.calendly.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="premium-card rounded-3xl p-2 sm:p-4 glow-border max-w-4xl mx-auto shadow-[0_20px_50px_rgba(48,140,140,0.15)] relative group">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />
            <div
              className="calendly-inline-widget rounded-2xl overflow-hidden relative z-10"
              data-url={calendlyUrl}
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </motion.div>

        <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
      </div>

      {/* Glowing top border accent */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
}
