"use client";

import CTAButton from "../CTAButton";
import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function HeroSection() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="hero" className="relative bg-background text-white min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background radiant orbs & particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-pulse mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] mix-blend-screen animate-float" style={{ animationDuration: '12s' }} />
                <div className="absolute top-1/2 left-3/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] animate-blob-float" style={{ animationDelay: '2s' }} />

                {/* Subtle static grid for texture */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6TTAgMHY0MGgxSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className={`space-y-8 text-center ${language === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}>
                        <p className="text-lg md:text-xl text-primary font-semibold animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            {t.hero.tag}
                        </p>
                        <div className="relative inline-block">
                            {/* Text glow aura */}
                            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }} />
                            <h1
                                className="relative text-4xl md:text-5xl lg:text-7xl xl:text-[5rem] font-bold leading-[1.1] animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-cyan-200 drop-shadow-[0_0_25px_rgba(48,140,140,0.6)]"
                                style={{ animationDelay: "0.4s" }}
                            >
                                {t.hero.title}
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-foreground/70 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                            {t.hero.description}
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                            {t.hero.benefits.map((benefit, index) => (
                                <div key={index} className="premium-card rounded-2xl p-5 text-center flex items-center justify-center relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                                    {/* Sweeping Lens Flare */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_ease-in-out_infinite] scale-150 pointer-events-none z-10" />
                                    {/* Inner ambient glow */}
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0" />
                                    <strong className="font-bold text-sm text-cyan-50 relative z-20 group-hover:text-white transition-colors drop-shadow-md">{benefit}</strong>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${language === 'ar' ? 'lg:justify-start' : 'lg:justify-start'} animate-fade-in-up`} style={{ animationDelay: "1.0s" }}>
                            <CTAButton
                                href="#contact"
                                text={t.hero.cta}
                                variant="primary"
                                size="lg"
                            />
                        </div>
                    </div>

                    {/* Hero Video Placeholder */}
                    <div className="relative hidden lg:block h-[500px] animate-fade-in-up animate-float perspective-1000" style={{ animationDelay: "1.2s" }}>
                        {/* Deep ambient background aura */}
                        <div className="absolute -inset-10 bg-gradient-to-br from-primary/40 via-transparent to-cyan-500/30 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />

                        <div className="relative h-full premium-card rounded-3xl overflow-hidden group border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.6)] transform-gpu transition-transform duration-700 hover:rotate-y-[-5deg] hover:rotate-x-[5deg]">
                            {/* Inner Glass border reflection */}
                            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none z-20" />

                            <iframe
                                src="https://www.youtube.com/embed/gvtos8V2vUc?autoplay=1&mute=1&loop=1&playlist=gvtos8V2vUc&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
                                title="Hero Video"
                                className="w-full h-full rounded-3xl p-1 transition-transform duration-1000 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100 z-10 relative pointer-events-none"
                                allow="autoplay; encrypted-media"
                                frameBorder="0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}