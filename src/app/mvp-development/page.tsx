import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
    title: "MVP Development - INSHARO Canada TechConsulting",
    description:
        "We build and launch lean platforms using modern agile methods. Fast, efficient, and cost-effective MVP development.",
};

const features = [
    {
        icon: "🎨",
        title: "Design",
        description:
            "Beautiful, intuitive interfaces that make your product stand out from the competition",
    },
    {
        icon: "📊",
        title: "Data Analytics",
        description:
            "Data-driven insights to help you understand your users and make better decisions",
    },
    {
        icon: "⚙️",
        title: "Business Functions",
        description:
            "Core business logic that powers your platform efficiently and reliably",
    },
];

const processSteps = [
    {
        number: "01",
        title: "Discovery & Planning",
        description:
            "Understand your needs, define scope, and plan the development roadmap",
    },
    {
        number: "02",
        title: "Design & Prototype",
        description:
            "Create wireframes, prototypes, and validate with your target users",
    },
    {
        number: "03",
        title: "Development",
        description:
            "Agile development sprints with continuous delivery and testing",
    },
    {
        number: "04",
        title: "Launch & Iterate",
        description:
            "Deploy your MVP, gather feedback, and improve with data-driven iterations",
    },
];

export default function MVPDevelopmentPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-background to-primary/5" />
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">
                            MVP Development
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                            We build fast,{" "}
                            <span className="text-primary">you grow faster</span>
                        </h1>
                        <p className="text-muted text-lg max-w-lg">
                            We build and launch lean platforms using modern agile methods.
                            From idea to product in weeks, not months.
                        </p>
                        <CTAButton
                            href="https://form.typeform.com/to/rSb4m9w2"
                            text="Start your project"
                            variant="primary"
                            size="lg"
                        />
                    </div>
                    <div className="relative hidden lg:block h-[400px]">
                        <div className="absolute inset-0 rounded-3xl overflow-hidden">
                            <Image
                                src="/images/Fast-Develop-Illustration.svg"
                                alt="MVP Development"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 px-4 bg-surface">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        What we deliver
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group rounded-2xl bg-card-bg border border-card-border p-8 space-y-4 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="text-4xl">{feature.icon}</div>
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Our Process
                    </h2>
                    <div className="space-y-6">
                        {processSteps.map((step) => (
                            <div
                                key={step.number}
                                className="group flex gap-6 md:gap-8 p-6 rounded-2xl bg-card-bg border border-card-border hover:border-primary/30 transition-all duration-300 items-start"
                            >
                                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-bold text-lg">
                                        {step.number}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted text-sm">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 bg-surface">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Ready to build your <span className="text-primary">MVP</span>?
                    </h2>
                    <p className="text-muted text-lg">
                        Let&apos;s discuss your project and get started on building your
                        minimum viable product.
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
