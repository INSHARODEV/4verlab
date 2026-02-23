"use client";

import Image from "next/image";
import { useRef } from "react";

const teamMembers = [
    { name: "Osama B.", role: "Managing Partner", image: "/images/New-Osama.png" },
    { name: "Zümra C.", role: "Senior People & Culture Specialist", initials: "ZC" },
    { name: "Faysal K.", role: "Senior Sales Associate", initials: "FK" },
    { name: "Afaf A.", role: "Commercial Senior Associate", initials: "AA" },
    { name: "Ghaith A.", role: "Managing Consultant", initials: "GA" },
    { name: "Mohamed F.", role: "Full Stack Developer", initials: "MF" },
    { name: "Mennatullah A.", role: "Graphic Designer", initials: "MA" },
    { name: "Abdullah F.", role: "Digital Marketing Manager", initials: "AF" },
    { name: "Sara A.", role: "UX/UI Designer", initials: "SA" },
    { name: "Alaa A.", role: "Full Stack Developer", initials: "AL" },
];

export default function TeamSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 280;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">Our team</h2>
                    <p className="text-muted text-lg max-w-xl mx-auto">
                        Get to know the exceptional individuals who power INSHARO&apos;s success
                    </p>
                </div>

                {/* Scroll controls */}
                <div className="flex justify-end gap-2 mb-6">
                    <button
                        onClick={() => scroll("left")}
                        className="w-10 h-10 rounded-full bg-card-bg border border-card-border hover:border-primary flex items-center justify-center transition-colors"
                        aria-label="Scroll left"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-10 h-10 rounded-full bg-card-bg border border-card-border hover:border-primary flex items-center justify-center transition-colors"
                        aria-label="Scroll right"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="team-scroll flex gap-6 overflow-x-auto pb-4"
                >
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="flex-shrink-0 w-[200px] group"
                        >
                            <div className="relative w-[200px] h-[200px] rounded-2xl overflow-hidden bg-card-bg border border-card-border mb-4 group-hover:border-primary/50 transition-all duration-300">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                                        <span className="text-3xl font-bold text-primary/60">
                                            {member.initials}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-muted text-xs mt-1">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
