'use client';

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const navLinks = [
    { href: "#contact", label: "Contact" },
];

const partnerLinks = [
    { href: "https://exefai.com", label: "Exefai" },
    { href: "https://superstudios.ai", label: "Super Studios AI" },
];

const socialLinks = [
    { href: "https://www.linkedin.com/company/insharo/", icon: <Linkedin size={20} />, name: "LinkedIn" },
    { href: "https://wa.me/966569715973", icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.214l-.252-.149-2.624.781.781-2.624-.149-.252A8 8 0 1112 20z" /></svg>, name: "WhatsApp" },
    { href: "https://www.instagram.com/insharo.sa/", icon: <Instagram size={20} />, name: "Instagram" },
    { href: "https://x.com/insharo_sa", icon: <Twitter size={20} />, name: "X" },
    { href: "https://www.tiktok.com/@insharo.sa", icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.94-6.37-2.96-2.24-2.95-2.2-6.84-.04-9.8.51-.69 1.15-1.32 1.85-1.86 1.34-1.04 2.85-1.57 4.49-1.58.01 2.54-.01 5.08.01 7.63-.01 1.43-.93 2.67-2.31 3.16-1.74.62-3.59-.13-4.5-1.6-.2-.32-.34-.67-.46-1.03.02-2.54.01-5.07.01-7.61.02-2.3.96-4.44 2.69-5.95 1.8-1.57 4.14-2.32 6.51-2.25z" /></svg>, name: "TikTok" },
];

export default function Footer() {
    const { theme } = useTheme();

    return (
        <footer id="contact" className="bg-surface-dark text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-6 md:col-span-1 col-span-2">
                        <Image
                            src="/images/exefai.png"
                            alt="exefai"
                            width={180}
                            height={26}
                            className="h-8 w-auto"
                        />
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Exefai offers AI automation agents for collections recovery, ZATCA payroll, and Saudization tracking, specifically designed for businesses in Saudi Arabia.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
                            Company
                        </h3>
                        <nav className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/70 hover:text-primary transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Partner Companies */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
                            Our Ventures
                        </h3>
                        <nav className="flex flex-col gap-3">
                            {partnerLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/70 hover:text-primary transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
                            Get in Touch
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#calendly"
                                className="inline-flex items-center justify-center whitespace-nowrap gap-2 bg-primary text-surface-dark px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary-dark transition-colors"
                            >
                                Book a free 30-minute demo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-white/40 text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} exefai. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.name}
                                className="text-white/60 hover:text-white transition-colors"
                            >
                                {link.icon}
                                <span className="sr-only">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex justify-center items-center gap-4">
                    <Image src="/images/vision2030.png" alt="Saudi Vision 2030" width={120} height={60} />
                    <div className="flex items-center gap-2">
                        <Image src="/images/CR-Icon.png" alt="CR Icon" width={60} height={60} />
                        <p className="text-white/60 text-sm">السجل التجاري<br />7053180589</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-white/60 text-sm">موثق في منصة الأعمال</p>
                        <Image src="/images/footer-manasa.png" alt="Manasa" width={60} height={60} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
