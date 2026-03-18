'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function PricingSection() {
    return (
        <section className="py-12 bg-[#292931] sm:py-16 lg:py-20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm mb-6"
                        whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.25)" }}
                    >
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-white/70">Simple & Clear</span>
                    </motion.div>

                    <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl xl:text-5xl">
                        Flexible &amp; Transparent Pricing
                    </h2>
                    <p className="mt-4 text-base leading-7 text-foreground/60 sm:mt-8">
                        Choose a plan that fits your needs
                    </p>
                </motion.div>

                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="glass-card rounded-3xl p-4 sm:p-6 glow-border hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(226,53,118,0.15)]">
                        <Image
                            src="/images/pricing.png"
                            alt="Pricing plans"
                            width={1200}
                            height={800}
                            className="mx-auto rounded-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Section divider */}
            <div className="section-divider absolute bottom-0 left-0 right-0" />
        </section>
    );
}
