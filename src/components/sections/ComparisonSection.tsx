"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function ComparisonSection() {
  const { language, dir } = useLanguage();
  const t = translations[language];
  const isRtl = dir === "rtl";
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/90 to-white/80">
            {t.benefits.title}
          </h2>
        </div>

        <div className="glass-card border-white/10 bg-white/[0.02] rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className={`w-full ${isRtl ? 'text-right' : 'text-left'} border-collapse`}>
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className={`py-6 px-8 text-primary font-bold text-lg uppercase tracking-wider ${isRtl ? 'text-right' : 'text-left'}`}>{t.benefits.headers[0]}</th>
                  <th className={`py-6 px-8 text-primary font-bold text-lg uppercase tracking-wider ${isRtl ? 'text-right' : 'text-left'}`}>{t.benefits.headers[1]}</th>
                </tr>
              </thead>
              <tbody>
                {t.benefits.data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors group"
                  >
                    <td className={`py-6 px-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                      <div className={`flex items-center gap-3 ${isRtl ? 'justify-start' : 'justify-start'}`}>
                        <CheckCircle2 className="text-primary w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="font-semibold text-foreground/90">{item.feature}</span>
                      </div>
                    </td>
                    <td className={`py-6 px-8 text-foreground/70 font-medium italic ${isRtl ? 'text-right' : 'text-left'}`}>
                      {item.benefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center group">
          <a
            href="#calendly"
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-primary-dark transition-colors"
          >
            {t.benefits.cta}
            <ArrowRight className={`w-5 h-5 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
