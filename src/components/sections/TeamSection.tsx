"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { translations } from "@/lib/translations";

export default function TeamSection() {
    const { language, dir } = useLanguage();
    const t = translations[language];
    const isRtl = dir === "rtl";
    const teamMembers = t.team.members;
    const scrollRef = useRef<HTMLDivElement>(null);

    // Initial member image mapping (since images are assets, we keep them here or in translations)
    // Osama is the only one with an image currently
    const memberImages: Record<string, string> = {
        "Osama B.": "/images/New-Osama.png",
        "أسامة ب.": "/images/New-Osama.png"
    };

    const scroll = (direction: "prev" | "next") => {
        if (scrollRef.current) {
            const scrollAmount = 280;
            // In RTL, positive scrollLeft scrolls right (previous), negative scrolls left (next)
            // Wait, native scrollBy behavior:
            // LTR: left: -280 moves left (prev), left: 280 moves right (next)
            // RTL: left: 280 moves right (prev), left: -280 moves left (next)
            // So logic should actually be:
            let amount = direction === "next" ? scrollAmount : -scrollAmount;
            if (isRtl) amount = -amount; // Reverse for RTL if we want "next" to be the same physical direction? No, next is "forward in reading order".
            // Actually, simplified: direction "prev" vs "next".
            // For LTR: next is +280 (right), prev is -280 (left).
            // For RTL: next is -280 (left), prev is +280 (right).
            scrollRef.current.scrollBy({
                left: isRtl ? (direction === "next" ? -scrollAmount : scrollAmount) : (direction === "next" ? scrollAmount : -scrollAmount),
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-12 space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold">{t.team.title}</h2>
                    <p className="text-muted text-lg max-w-xl mx-auto">
                        {t.team.description}
                    </p>
                </motion.div>

                {/* Scroll controls */}
                <div className={`flex justify-center md:justify-end gap-2 mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <button
                        onClick={() => scroll("prev")}
                        className="w-10 h-10 rounded-full bg-card-bg border border-card-border hover:border-primary hover:shadow-[0_0_15px_rgba(48,140,140,0.2)] flex items-center justify-center transition-all duration-300"
                        aria-label="Previous"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isRtl ? 'rotate-180' : ''}>
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll("next")}
                        className="w-10 h-10 rounded-full bg-card-bg border border-card-border hover:border-primary hover:shadow-[0_0_15px_rgba(48,140,140,0.2)] flex items-center justify-center transition-all duration-300"
                        aria-label="Next"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isRtl ? 'rotate-180' : ''}>
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="team-scroll flex gap-6 overflow-x-auto pb-4"
                    dir={dir}
                >
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={member.name}
                            className="flex-shrink-0 w-[200px] group"
                            custom={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: (i: number) => ({
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: i * 0.1,
                                        duration: 0.5,
                                        ease: "easeOut" as const,
                                    },
                                }),
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="relative w-[200px] h-[200px] rounded-2xl overflow-hidden bg-card-bg border border-card-border mb-4 group-hover:border-primary/50 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-500">
                                {memberImages[member.name] ? (
                                    <>
                                        <Image
                                            src={memberImages[member.name]}
                                            alt={member.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Gradient overlay for name legibility */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                                    </>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/25 via-primary/10 to-surface-dark">
                                        <span className="text-3xl font-bold text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                                            {member.name.split(' ').map(n => n.charAt(0)).join('')}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <h3 className={`font-semibold text-sm group-hover:text-primary transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                                {member.name}
                            </h3>
                            <p className={`text-muted text-xs mt-1 ${isRtl ? 'text-right' : 'text-left'}`}>{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Section divider */}
            <div className="section-divider absolute bottom-0 left-0 right-0" />
        </section>
    );
}
