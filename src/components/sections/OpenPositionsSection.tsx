"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { translations } from '@/lib/translations';

export default function OpenPositionsSection() {
    const { language, dir } = useLanguage();
    const t = translations[language];
    const isRtl = dir === "rtl";
    const positions = t.jobs.data;
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        direction: dir
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback((index: number) => {
        emblaApi && emblaApi.scrollTo(index);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelectCallback = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        onSelectCallback(); // Initialize
        emblaApi.on('select', onSelectCallback);
        emblaApi.on('reInit', onSelectCallback);

        return () => {
            emblaApi.off('select', onSelectCallback);
            emblaApi.off('reInit', onSelectCallback);
        };
    }, [emblaApi]);

    const slides = positions.reduce((acc, _, i) => {
        if (i % 2 === 0) {
            acc.push(positions.slice(i, i + 2));
        }
        return acc;
    }, [] as typeof positions[]);

    return (
        <section className="bg-[#292931] py-12 border-t border-primary/10 relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    className="text-4xl font-bold text-center text-foreground mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {t.jobs.title}
                </motion.h2>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {slides.map((slide, index) => (
                            <div className="flex-[0_0_100%] grid grid-cols-1 md:grid-cols-2 gap-8 px-4" key={index}>
                                {slide.map((position, posIndex) => (
                                    <motion.div
                                        key={posIndex}
                                        className={`glass-card rounded-2xl p-8 text-white max-w-md mx-auto border border-white/10 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(48,140,140,0.1)] transition-all duration-500 group ${isRtl ? 'text-right' : 'text-left'}`}
                                        custom={posIndex}
                                        variants={{
                                            hidden: { opacity: 0, y: 40 },
                                            visible: (i: number) => ({
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    delay: i * 0.15,
                                                    duration: 0.6,
                                                    ease: "easeOut" as const,
                                                },
                                            }),
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{position.title}</h3>
                                        <p className="mb-6 text-white/70">{position.description}</p>
                                        <div className={`flex justify-between items-center ${isRtl ? 'flex-row-reverse' : ''}`}>
                                            <span className="bg-primary/15 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/25 shadow-sm shadow-primary/10">
                                                {position.title.toLowerCase().includes('remote') || position.title.includes('عن بعد') ? t.jobs.locations.remote : t.jobs.locations.egypt}
                                            </span>
                                            <motion.button
                                                className="bg-primary text-white font-bold py-2.5 px-6 rounded-full hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 group/btn shadow-lg shadow-primary/20"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <span>{t.jobs.cta}</span>
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className={`transition-transform duration-300 ${isRtl ? 'group-hover/btn:translate-x-1 rotate-180' : 'group-hover/btn:translate-x-1'}`}
                                                >
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <div className={`flex ${isRtl ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                                    ? 'bg-primary w-8 shadow-[0_0_10px_rgba(48,140,140,0.4)]'
                                    : 'bg-foreground/30 hover:bg-foreground/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Section divider */}
            <div className="section-divider absolute bottom-0 left-0 right-0" />
        </section>
    );
}
