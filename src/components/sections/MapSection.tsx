"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function MapSection() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="bg-background py-24 relative overflow-hidden">
            {/* Background radial glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/90 to-white/80">
                        {t.map.title}
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                        {t.map.subtitle}
                    </p>
                </div>

                <motion.div
                    className="relative max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="glass-card border-white/10 bg-white/[0.03] backdrop-blur-md rounded-[2.5rem] p-4 md:p-8 shadow-2xl relative group">
                        {/* Decorative glow behind the frame */}
                        <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative rounded-[1.5rem] overflow-hidden border border-white/5">
                            <Image
                                src="/images/global_presence_map_v2.png"
                                alt="exefai Global Presence"
                                width={1024}
                                height={561}
                                className="w-full h-auto"
                                quality={100}
                                unoptimized={true}
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
