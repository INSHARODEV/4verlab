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
        "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer";

    const variants = {
        primary:
            "bg-primary text-surface-dark hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20",
        secondary:
            "bg-surface text-foreground hover:bg-surface/80 hover:shadow-lg border border-card-border",
        outline:
            "border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary",
        dark:
            "bg-surface-dark text-white hover:bg-surface-dark/80",
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
            className={`group ${base} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            <span>{text}</span>
        </a>
    );
}
