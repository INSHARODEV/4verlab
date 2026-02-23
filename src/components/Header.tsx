"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import CTAButton from "./CTAButton";

const navLinks = [
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme } = useTheme();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-header-bg backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src={theme === "dark" ? "/images/exefai.png" : "/images/exefai.png"}
                            alt="exefai"
                            width={180}
                            height={26}
                            priority
                            className="h-6 md:h-8 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-white/5"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right controls */}
                    <div className="flex items-center gap-3">

                        {/* CTA Button - desktop */}
                        <div className="hidden md:block">
                            <CTAButton
                                href="#calendly"
                                text="Book a free 30-minute demo"
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
                        <div className="mt-3 px-4">
                            <CTAButton
                                href="#calendly"
                                text="Book a free 30-minute demo"
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
