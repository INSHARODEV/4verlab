"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { translations } from '@/lib/translations';

// Placeholder icons with brand-appropriate background colors
const ApplePodcastsIcon = () => <div className="w-6 h-6 bg-primary/30 rounded-md" />;
const YouTubeIcon = () => <div className="w-6 h-6 bg-primary/40 rounded-md" />;
const SpotifyIcon = () => <div className="w-6 h-6 bg-primary/20 rounded-md" />;

const icons = [
    <ApplePodcastsIcon key="apple" />,
    <YouTubeIcon key="youtube" />,
    <SpotifyIcon key="spotify" />
];

export default function PodcastSection() {
    const { language, dir } = useLanguage();
    const t = translations[language];
    const isRtl = dir === "rtl";
    return (
        <section className="py-20 sm:py-28 bg-[#292931] overflow-hidden relative">
            {/* Background gradient for depth */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">

                    {/* Left side: Image and podcast links */}
                    <motion.div
                        className="relative order-last lg:order-first -mx-4 sm:mx-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Glow halo behind image */}
                            <div className="absolute -inset-6 bg-primary/10 rounded-full blur-[60px]" />
                            <Image
                                src="/images/person.png"
                                alt="Podcast Host"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-3xl shadow-2xl shadow-primary/10 relative z-10"
                            />
                        </div>
                        <div className={`absolute ${isRtl ? 'left-0 sm:left-4 md:left-8 lg:-right-16' : 'right-0 sm:right-4 md:right-8 lg:-left-16'} top-1/2 transform -translate-y-1/2 w-60 z-20`}>
                            <div className="glass-card rounded-2xl shadow-lg p-5 space-y-4 border border-primary/20">
                                {t.podcast.platforms.map((name, index) => (
                                    <Link href="#" key={name}>
                                        <div className={`flex items-center gap-4 hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-white/5 rounded-xl p-1 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                            <div className="p-3 rounded-xl bg-primary/10 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(48,140,140,0.3)]">
                                                {icons[index]}
                                            </div>
                                            <div className={isRtl ? 'text-right' : 'text-left'}>
                                                <p className="text-xs text-foreground/50">{t.podcast.availableOn}</p>
                                                <p className="font-semibold text-foreground">{name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side: Text content */}
                    <motion.div
                        className={`text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'} order-first lg:order-last`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {/* Animated badge */}
                        <motion.p
                            className="inline-block text-base font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {t.podcast.badge}
                        </motion.p>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mt-3 leading-tight">
                            {t.podcast.title}
                        </h2>
                        <p className={`mt-6 text-lg text-foreground/60 max-w-md mx-auto ${isRtl ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'}`}>
                            {t.podcast.description}
                        </p>
                        <div className={`mt-10 flex flex-col items-center ${isRtl ? 'lg:items-end' : 'lg:items-start'} space-y-5`}>
                            <div className="flex items-center gap-3">
                                <p className="font-semibold text-foreground">{t.podcast.launchingSoon}</p>
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                </span>
                            </div>
                            <Link href="#">
                                <motion.div
                                    className={`inline-flex items-center ${isRtl ? 'justify-end pr-6' : 'justify-start pl-6'} gap-4 rounded-full p-2 transition-all bg-primary/10 text-foreground hover:bg-primary/20 cursor-pointer border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(48,140,140,0.15)]`}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className={isRtl ? 'text-right' : 'text-left'}>
                                        <div className="text-xs text-primary">{t.podcast.availableOn}</div>
                                        <div className="font-bold text-foreground">{t.podcast.twitterSpace}</div>
                                    </div>
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 shadow-md">
                                        <Twitter size={24} className="text-primary" />
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Section divider */}
            <div className="section-divider absolute bottom-0 left-0 right-0" />
        </section>
    );
}
