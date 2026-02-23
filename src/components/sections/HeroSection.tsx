"use client";

import Image from "next/image";
import CTAButton from "../CTAButton";
import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function HeroSection() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="relative bg-background text-white min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background radial glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className={`space-y-8 text-center ${language === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}>
                        <p className="text-lg md:text-xl text-primary font-semibold animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            {t.hero.tag}
                        </p>
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white animate-shimmer"
                            style={{ animationDelay: "0.4s", backgroundSize: "200% auto" }}
                        >
                            {t.hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/70 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                            {t.hero.description}
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                            {t.hero.benefits.map((benefit, index) => (
                                <div key={index} className="glass-card bg-primary/10 border border-primary/30 text-primary rounded-xl p-4 text-center flex items-center justify-center hover:border-primary/60 hover:shadow-[0_0_20px_rgba(48,140,140,0.2)] transition-all duration-300 hover:-translate-y-1">
                                    <strong className="font-bold text-sm">{benefit}</strong>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${language === 'ar' ? 'lg:justify-start' : 'lg:justify-start'} animate-fade-in-up`} style={{ animationDelay: "1.0s" }}>
                            <CTAButton
                                href="#calendly"
                                text={t.hero.cta}
                                variant="primary"
                                size="lg"
                            />
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative hidden lg:block h-[500px] animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-xl" />
                        <div className="relative h-full glass-card rounded-2xl overflow-hidden glow-border">
                            <Image
                                src="/images/ai-dashboard-ksa.jpg"
                                alt={t.metadata.title}
                                fill
                                className="object-contain rounded-2xl p-1"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}