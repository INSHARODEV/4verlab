import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
    title: "Talent Management - INSHARO Canada TechConsulting",
    description:
        "Your tech team, without the overhead. We assemble the ideal talent, reducing hiring time and cost.",
};

const benefits = [
    {
        icon: "💰",
        title: "Lower Initial Investment",
        description:
            "Start with a lean team and scale as your business grows, paying only for what you need.",
    },
    {
        icon: "⚡",
        title: "Faster Market Fit",
        description:
            "Get pre-vetted talent onboarded rapidly, so you hit the ground running from day one.",
    },
    {
        icon: "📉",
        title: "Cost Savings",
        description:
            "Save up to 60% compared to traditional hiring while maintaining premium quality output.",
    },
    {
        icon: "😊",
        title: "Employee Satisfaction",
        description:
            "Our culture-first approach ensures team members are engaged, productive, and happy.",
    },
];

export default function TalentManagementPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-surface-dark" />
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">
                            Talent Management
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                            Your tech team,{" "}
                            <span className="text-primary">without the overhead</span>
                        </h1>
                        <p className="text-muted text-lg max-w-lg">
                            We assemble the ideal talent, reducing hiring time and cost. Our
                            teams work from office with full oversight and accountability.
                        </p>
                        <CTAButton
                            href="https://form.typeform.com/to/rSb4m9w2"
                            text="Build your team"
                            variant="primary"
                            size="lg"
                        />
                    </div>
                    <div className="relative hidden lg:block h-[400px]">
                        <Image
                            src="/images/Visionary-Technology.png"
                            alt="Talent Management"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 px-4 bg-surface">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Why INSHARO Talent?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="group rounded-2xl bg-card-bg border border-card-border p-8 space-y-4 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="text-4xl">{benefit.icon}</div>
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {["Share your needs", "We match talent", "Start working"].map(
                            (step, i) => (
                                <div
                                    key={step}
                                    className="text-center space-y-4 p-6 rounded-2xl bg-card-bg border border-card-border"
                                >
                                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-primary font-bold text-xl">
                                            {i + 1}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-lg">{step}</h3>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 bg-surface">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Ready to build your{" "}
                        <span className="text-primary">dream team</span>?
                    </h2>
                    <p className="text-muted text-lg">
                        Tell us what you need and we&apos;ll match you with the perfect
                        talent within days.
                    </p>
                    <CTAButton
                        href="https://form.typeform.com/to/rSb4m9w2"
                        text="Let's chat"
                        variant="primary"
                        size="lg"
                    />
                </div>
            </section>
        </>
    );
}
