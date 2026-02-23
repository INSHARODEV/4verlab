import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
    title: "Culture - INSHARO Canada TechConsulting",
    description:
        "At INSHARO, culture isn't just a buzzword — it's the foundation of everything we do.",
};

const values = [
    {
        title: "Trust & Transparency",
        description:
            "We build relationships on trust, honesty, and mutual respect. No micromanagement.",
        icon: "🤝",
    },
    {
        title: "Flexibility",
        description:
            "We work smart, not just hard. Flexible work arrangements that prioritize results.",
        icon: "🌊",
    },
    {
        title: "Continuous Growth",
        description:
            "Learning opportunities, mentorship, and room to grow in your career.",
        icon: "🌱",
    },
    {
        title: "Team Well-being",
        description:
            "Mental health, work-life balance, and a supportive environment come first.",
        icon: "💚",
    },
    {
        title: "Innovation First",
        description:
            "We encourage experimentation, creative problem-solving, and pushing boundaries.",
        icon: "🚀",
    },
    {
        title: "Culture Add",
        description:
            "We don't look for culture fit — we seek culture add. Diverse perspectives make us stronger.",
        icon: "🌍",
    },
];

export default function CulturePage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-surface-dark" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                    <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">
                        Our Culture
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                        We don&apos;t just build tech.{" "}
                        <span className="text-primary">We build teams.</span>
                    </h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        At INSHARO, culture isn&apos;t just a buzzword — it&apos;s the
                        foundation of everything we do. We believe that great products come
                        from great teams.
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "/images/Culture_Gallery_One-1.png",
                            "/images/Culture-Blob-1024x717.png",
                            "/images/Culture_Gallery_One-1.png",
                            "/images/Culture-Blob-1024x717.png",
                        ].map((src, i) => (
                            <div
                                key={i}
                                className={`relative overflow-hidden rounded-2xl ${i === 0 || i === 3
                                    ? "aspect-square"
                                    : "aspect-[4/3]"
                                    }`}
                            >
                                <Image
                                    src={src}
                                    alt={`Culture gallery ${i + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-4 bg-surface">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="group rounded-2xl bg-card-bg border border-card-border p-8 space-y-4 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="text-4xl">{value.icon}</div>
                                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Want to be part of{" "}
                        <span className="text-primary">our team</span>?
                    </h2>
                    <p className="text-muted text-lg">
                        We&apos;re always looking for exceptional people who want to make an
                        impact.
                    </p>
                    <CTAButton
                        href="https://form.typeform.com/to/rSb4m9w2"
                        text="Join INSHARO"
                        variant="primary"
                        size="lg"
                    />
                </div>
            </section>
        </>
    );
}
