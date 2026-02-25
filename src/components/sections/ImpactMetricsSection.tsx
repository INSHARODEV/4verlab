"use client";

import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ from, to, duration, suffix = "" }: { from: number, to: number, duration: number, suffix?: string }) {
    const [count, setCount] = useState(from);
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!inView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            // Easing function: easeOutExpo
            const easeOutExpo = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

            const currentCount = Math.floor(from + (to - from) * easeOutExpo);
            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(to);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [from, to, duration, inView]);

    return (
        <span ref={nodeRef} className="tabular-nums">
            {count}{suffix}
        </span>
    );
}

export default function ImpactMetricsSection() {
    const { language } = useLanguage();
    const t = translations[language].impactMetrics;

    const cards = [
        { ...t.metrics[0], color: "from-blue-500/20 to-cyan-500/20" },
        { ...t.metrics[1], color: "from-primary/20 to-teal-500/20" },
        { ...t.metrics[2], color: "from-purple-500/20 to-pink-500/20" },
        { ...t.metrics[3], color: "from-emerald-500/20 to-green-500/20" },
    ];

    return (
        <section className="py-20 bg-background relative overflow-hidden border-y border-white/5">
            {/* Background subtle glow */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        {t.title}
                    </h2>
                </div>

                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${language === "ar" ? "rtl" : "ltr"}`}>
                    {cards.map((metric, index) => {
                        const numericValue = parseInt(metric.value.replace(/[^0-9]/g, ''), 10);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-50`} />
                                <div className="relative glass-card bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-center h-full flex flex-col justify-center transform transition-transform duration-300 group-hover:-translate-y-1">
                                    <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                        {isNaN(numericValue) ? (
                                            <span>{metric.value}{metric.suffix}</span>
                                        ) : (
                                            <Counter from={0} to={numericValue} duration={2.5} suffix={metric.suffix} />
                                        )}
                                    </div>
                                    <div className="text-sm md:text-base text-foreground/80 font-medium tracking-wide">
                                        {metric.label}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
