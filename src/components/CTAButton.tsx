'use client';

import { MouseEvent } from "react";

export default function CTAButton({
    href,
    text,
    variant = "primary",
    size = "md",
    target,
    className = "",
}: {
    href: string;
    text: string;
    variant?: "primary" | "secondary" | "outline" | "dark";
    size?: "sm" | "md" | "lg";
    target?: string;
    className?: string;
}) {
    const base =
        "relative inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-500 cursor-pointer overflow-hidden";

    const variants = {
        primary:
            "bg-gradient-to-r from-primary to-cyan-500 text-white hover:from-cyan-400 hover:to-primary hover:shadow-[0_0_50px_rgba(48,140,140,0.8)] shadow-[0_0_30px_rgba(48,140,140,0.4)] hover:-translate-y-1 hover:scale-110 group",
        secondary:
            "bg-surface text-foreground hover:bg-surface/80 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] border border-white/10 hover:border-white/30 hover:-translate-y-1 hover:scale-105 group",
        outline:
            "border-2 border-primary/50 text-white hover:border-cyan-400 hover:text-cyan-50 hover:shadow-[0_0_40px_rgba(48,140,140,0.6)] hover:-translate-y-1 hover:scale-105 hover:bg-primary/10 group",
        dark:
            "bg-surface-dark text-white hover:bg-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:-translate-y-1 hover:scale-105 group",
    };

    const sizes = {
        sm: "px-5 py-2.5 text-sm",
        md: "px-7 py-3 text-base",
        lg: "px-9 py-4 text-lg",
    };

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const isAnchor = href.startsWith("#");

    return (
        <a
            href={href}
            onClick={handleClick}
            target={isAnchor ? undefined : (target || "_blank")}
            rel={isAnchor ? undefined : "noopener noreferrer"}
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {/* Shimmer effect overlay for all buttons on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            <span className="relative z-10">{text}</span>
        </a>
    );
}
