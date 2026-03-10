"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { ArrowLeft, ArrowRight, CheckCircle2, Zap, Shield, BarChart3, MessageSquare, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Feature {
    title: { en: string; ar: string };
    description: { en: string; ar: string };
    icon: React.ReactNode;
}

interface ProductPageProps {
    id: string;
    badge: { en: string; ar: string };
    title: { en: string; ar: string };
    accentTitle: { en: string; ar: string };
    description: { en: string; ar: string };
    features: Feature[];
    benefits: { en: string; ar: string }[];
    heroImage?: string;
}

const ProductPage: React.FC<ProductPageProps> = ({
    badge,
    title,
    accentTitle,
    description,
    features,
    benefits,
}) => {
    const { language, dir } = useLanguage();
    const isAr = language === "ar";

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30" dir={dir}>
            {/* Header / Back Link */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium"
                    >
                        {isAr ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
                        <span>{isAr ? "العودة للرئيسية" : "Back to Home"}</span>
                    </Link>
                    <div className="text-xl font-bold tracking-tighter">
                        .exefai <span className="text-primary">/ {isAr ? accentTitle.ar : accentTitle.en}</span>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
                                {isAr ? badge.ar : badge.en}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                {isAr ? title.ar : title.en}{" "}
                                <span className="text-primary">{isAr ? accentTitle.ar : accentTitle.en}</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                                {isAr ? description.ar : description.en}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/#contact"
                                    className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    {isAr ? "اطلب تجربة الآن" : "Request Demo"}
                                </Link>
                                <div className="flex -space-x-3 items-center px-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surface-dark overflow-hidden flex items-center justify-center text-xs font-bold text-primary">
                                            {i}
                                        </div>
                                    ))}
                                    <span className="ms-4 text-sm text-muted-foreground">
                                        {isAr ? "+50 شركة تثق بنا" : "+50 trusted companies"}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-3xl premium-card overflow-hidden flex items-center justify-center p-8 border border-primary/20">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
                                <div className="relative z-10 text-center">
                                    <div className="w-24 h-24 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary animate-float">
                                        <Zap size={48} />
                                    </div>
                                    <div className="space-y-4">
                                        {benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-surface/50 backdrop-blur-sm p-4 rounded-xl border border-white/5 shadow-xl">
                                                <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                                                <span className="text-foreground font-medium">{isAr ? benefit.ar : benefit.en}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Blobs */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse" />
                        </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">
                                {isAr ? "لماذا تختار" : "Why choose"} {isAr ? accentTitle.ar : accentTitle.en}?
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                {isAr
                                    ? "حلولنا صُممت خصيصاً لتناسب احتياجات الشركات في المملكة العربية السعودية."
                                    : "Our solutions are specifically engineered for the unique needs of Saudi Arabian businesses."}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-2xl glass-card hover-glow border border-white/5 transition-all group"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{isAr ? feature.title.ar : feature.title.en}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {isAr ? feature.description.ar : feature.description.en}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl premium-card p-12 text-center relative overflow-hidden border border-primary/30"
                    >
                        <div className="absolute inset-0 bg-primary/5 -z-10" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {isAr ? "جاهز لأتمتة عملياتك؟" : "Ready to automate your operations?"}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                            {isAr
                                ? "انضم إلى الشركات الرائدة في المملكة التي تستخدم وكلاء ذكاء اصطناعي لرفع كفاءتها."
                                : "Join leading KSA companies using AI agents to scale their operations with unmatched efficiency."}
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-block px-10 py-5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 text-lg"
                        >
                            {isAr ? "احجز مكالمة استشارية اليوم" : "Book a Strategy Call Today"}
                        </Link>
                    </motion.div>
                </div>
            </main>

            <footer className="py-10 px-6 border-t border-border text-center text-muted-foreground text-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>{isAr ? "© ٢٠٢٥ إكسفاي. جميع الحقوق محفوظة." : "© 2025 exefai. All rights reserved."}</div>
                    <div className="font-bold tracking-tighter">.exefai</div>
                    <div className="flex gap-6">
                        <Link href="/privacy-and-policy" className="hover:text-primary transition-colors">{isAr ? "سياسة الخصوصية" : "Privacy Policy"}</Link>
                        <Link href="/mvp-development" className="hover:text-primary transition-colors">{isAr ? "تطوير التطبيقات" : "MVP Development"}</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ProductPage;
