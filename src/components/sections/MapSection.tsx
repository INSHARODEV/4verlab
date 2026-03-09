"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { translations, Translation } from "@/lib/translations";
import PremiumWorldMap from "../PremiumWorldMap";

export default function MapSection() {
    const { language, dir } = useLanguage();
    const t = translations[language as keyof typeof translations] as Translation;
    const isRtl = dir === "rtl";

    return (
        <section className="bg-background py-32 relative overflow-hidden" dir={dir}>
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-cyan-400 drop-shadow-[0_0_15px_rgba(48,140,140,0.5)]"
                    >
                        {t.map.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        {t.map.subtitle}
                    </motion.p>
                </div>

                {/* ═══ 3-Column Dashboard: Markets | Map | Offices ═══ */}
                <div className={`grid grid-cols-1 lg:grid-cols-[180px_1fr_280px] gap-6 lg:gap-8 items-center mt-8 ${isRtl ? "lg:grid-cols-[280px_1fr_180px]" : ""}`}>

                    {/* ── Left: Our Markets (in RTL this becomes right visually) ── */}
                    <div className={`flex flex-col items-center z-20 space-y-4 order-2 lg:order-1 ${isRtl ? "lg:order-3" : ""}`}>
                        <motion.h3
                            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300"
                        >
                            {t.map.markets?.title || "Our Markets"}
                        </motion.h3>

                        <div className="flex flex-row lg:flex-col flex-wrap justify-center gap-3 w-full">
                            {t.map.markets?.regions?.map((market, index: number) => (
                                <motion.div
                                    key={market.id}
                                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.08 * index }}
                                    className="premium-card relative overflow-hidden group w-[72px] lg:w-full rounded-2xl border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:border-primary/50 transition-colors duration-300"
                                >
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="p-3 flex flex-col items-center gap-1.5 relative z-10">
                                        <div className="w-9 h-9 rounded-full bg-white/5 border border-white/20 flex items-center justify-center shadow-inner text-lg group-hover:scale-110 transition-transform duration-300">
                                            {market.flag}
                                        </div>
                                        <span className="font-bold text-xs text-white tracking-wide">{market.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ── Center: The Map ── */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-full"
                        >
                            <PremiumWorldMap language={language as "en" | "ar"} />
                        </motion.div>
                    </div>

                    {/* ── Right: Our Offices (in RTL this becomes left visually) ── */}
                    <div className={`flex flex-col items-center lg:items-stretch z-20 space-y-4 order-3 ${isRtl ? "lg:order-1" : ""}`}>
                        <motion.h3
                            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-white drop-shadow-md"
                        >
                            {t.map.offices?.title || "Our Offices"}
                        </motion.h3>

                        <div className="flex flex-col gap-4 w-full max-w-sm lg:max-w-none">
                            {t.map.offices?.locations?.map((office, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="premium-card relative overflow-hidden group w-full rounded-xl border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-transform duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    <div className="p-4 relative z-10">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-base shadow-inner border border-white/10 shrink-0">
                                                {office.flag}
                                            </div>
                                            <h4 className="font-bold text-sm text-white">{office.name}</h4>
                                        </div>
                                        <p className="text-xs text-foreground/75 leading-relaxed">
                                            {office.desc}
                                        </p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-primary opacity-70" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
