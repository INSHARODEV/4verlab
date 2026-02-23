"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import CTAButton from "./CTAButton";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";
import { Globe } from "lucide-react";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    const t = translations[language];

    const navLinks = [
        { href: "#contact", label: t.nav.contact },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "ar" : "en");
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 bg-header-bg backdrop-blur-md border-b border-white/10 transition-all duration-300 ${scrolled ? "py-0 shadow-lg shadow-black/20" : "py-0"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14 md:h-16" : "h-16 md:h-20"}`}>
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:brightness-110">
                        <Image
                            src="/images/exefai.png"
                            alt="exefai"
                            width={180}
                            height={26}
                            priority
                            className={`w-auto transition-all duration-300 ${scrolled ? "h-5 md:h-6" : "h-6 md:h-8"}`}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-white/5 group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-2/3" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right controls */}
                    <div className="flex items-center gap-3">
                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-sm font-medium transition-all border border-white/10"
                            aria-label="Toggle language"
                        >
                            <Globe className="w-4 h-4 text-primary" />
                            <span>{language === "en" ? "AR" : "EN"}</span>
                        </button>

                        {/* CTA Button - desktop */}
                        <div className="hidden md:block">
                            <CTAButton
                                href="#calendly"
                                text={t.nav.demo}
                                variant="primary"
                                size="sm"
                            />
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground">
                                    <line x1="0" y1="5" x2="24" y2="5" /><line x1="0" y1="12" x2="24" y2="12" /><line x1="0" y1="19" x2="24" y2="19" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-header-bg backdrop-blur-md border-t border-white/10">
                    <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-white/5"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="mt-3 px-4 flex flex-col gap-3">
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    setMobileOpen(false);
                                }}
                                className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-base font-medium transition-all border border-white/10"
                            >
                                <Globe className="w-5 h-5 text-primary" />
                                <span>{language === "en" ? "تبديل إلى العربية" : "Switch to English"}</span>
                            </button>
                            <CTAButton
                                href="#calendly"
                                text={t.nav.demo}
                                variant="primary"
                                size="sm"
                                className="w-full justify-center"
                            />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
