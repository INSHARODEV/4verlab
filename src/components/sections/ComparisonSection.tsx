"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function ComparisonSection() {
  const { language, dir } = useLanguage();
  const t = translations[language];
  const isRtl = dir === "rtl";
  return (
    <section id="solutions" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated organic shapes */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] mix-blend-screen animate-float" style={{ animationDuration: '15s' }} />

        {/* Subtle tech grid over the dark mode */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6TTAgMHY0MGgxSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-50" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-primary to-cyan-400 drop-shadow-[0_0_15px_rgba(226,53,118,0.5)]">
            {t.benefits.title}
          </h2>
        </div>

        <div className="premium-card rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative group">
          {/* Edge glow sweeps on hover */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent -translate-x-full group-hover:animate-[shimmer_3s_ease-in-out_infinite]" />
          <div className="overflow-x-auto relative z-10 bg-black/20">
            <table className={`w-full ${isRtl ? 'text-right' : 'text-left'} border-collapse`}>
              <thead>
                <tr className="border-b border-white/10 bg-gradient-to-r from-white/[0.05] to-transparent">
                  <th className={`py-6 px-8 text-primary font-bold text-lg uppercase tracking-wider ${isRtl ? 'text-right' : 'text-left'}`}>{t.benefits.headers[0]}</th>
                  <th className={`py-6 px-8 text-primary font-bold text-lg uppercase tracking-wider ${isRtl ? 'text-right' : 'text-left'}`}>{t.benefits.headers[1]}</th>
                </tr>
              </thead>
              <tbody>
                {t.benefits.data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.08] transition-all duration-300 group/row relative"
                  >
                    <td className={`py-6 px-8 relative ${isRtl ? 'text-right' : 'text-left'}`}>
                      {/* Left border highlight on hover */}
                      <div className={`absolute inset-y-0 ${isRtl ? 'right-0' : 'left-0'} w-1 bg-gradient-to-b from-cyan-400 to-primary scale-y-0 group-hover/row:scale-y-100 origin-center transition-transform duration-300`} />

                      <div className={`flex items-center gap-3 relative z-10 ${isRtl ? 'justify-start' : 'justify-start'}`}>
                        <div className="relative">
                          {/* Glow pulse under icon */}
                          <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-0 group-hover/row:opacity-50 transition-opacity" />
                          <CheckCircle2 className="relative text-primary w-5 h-5 opacity-70 group-hover/row:opacity-100 group-hover/row:scale-110 group-hover/row:text-cyan-300 transition-all duration-300" />
                        </div>
                        <span className="font-semibold text-foreground/90 group-hover/row:text-white transition-colors">{item.feature}</span>
                      </div>
                    </td>
                    <td className={`py-6 px-8 text-foreground/70 font-medium italic ${isRtl ? 'text-right' : 'text-left'} group-hover/row:text-white/90 transition-colors`}>
                      {item.benefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 text-center group">
          <a
            href="#calendly"
            className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(226,53,118,0.3)] hover:-translate-y-1 group"
          >
            {/* Shimmer sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

            <span className="relative z-10">{t.benefits.cta}</span>
            <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-background transition-transform duration-300 group-hover:scale-110 ${isRtl ? '-ml-2' : '-mr-2'}`}>
              <ArrowRight className={`w-4 h-4 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
