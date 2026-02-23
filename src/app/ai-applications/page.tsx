import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
    title: "AI Applications - INSHARO Canada TechConsulting",
    description:
        "Custom B2B and AI applications. We specialize in developing AI-powered solutions that streamline business operations.",
};

const useCases = [
    {
        icon: "🤖",
        title: "AI-Powered Automation",
        description:
            "Automate repetitive tasks and workflows with intelligent AI agents that learn and improve over time.",
    },
    {
        icon: "📄",
        title: "Document Processing",
        description:
            "Extract, analyze, and process documents with AI-powered OCR and natural language understanding.",
    },
    {
        icon: "💬",
        title: "Conversational AI",
        description:
            "Build intelligent chatbots and virtual assistants that understand context and deliver meaningful interactions.",
    },
    {
        icon: "📈",
        title: "Predictive Analytics",
        description:
            "Leverage machine learning models to forecast trends, identify opportunities, and make data-driven decisions.",
    },
];

export default function AIApplicationsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-background to-accent/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(182,198,73,0.08),transparent_60%)]" />
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">
                            AI Applications
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                            Intelligent solutions for{" "}
                            <span className="text-primary">modern business</span>
                        </h1>
                        <p className="text-muted text-lg max-w-lg">
                            We specialize in developing custom B2B and AI applications that
                            streamline operations, reduce costs, and drive growth.
                        </p>
                        <CTAButton
                            href="https://form.typeform.com/to/rSb4m9w2"
                            text="Explore AI solutions"
                            variant="primary"
                            size="lg"
                        />
                    </div>
                    <div className="relative hidden lg:block h-[400px]">
                        <Image
                            src="/images/AI-Integrations.png"
                            alt="AI Applications"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Alfred */}
            <section className="py-24 px-4 bg-surface">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[350px]">
                        <Image
                            src="/images/Alfred-logo.png"
                            alt="Alfred AI"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="space-y-6">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                            Featured Product
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Meet <span className="text-primary">Alfred</span>
                        </h2>
                        <p className="text-muted text-lg leading-relaxed">
                            Alfred is our AI-powered business assistant that helps teams
                            automate workflows, manage tasks, and make smarter decisions.
                            Built with cutting-edge AI technology and designed for enterprise
                            use.
                        </p>
                        <CTAButton
                            href="https://form.typeform.com/to/rSb4m9w2"
                            text="Learn about Alfred"
                            variant="outline"
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        What We Build
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {useCases.map((useCase) => (
                            <div
                                key={useCase.title}
                                className="group rounded-2xl bg-card-bg border border-card-border p-8 space-y-4 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="text-4xl">{useCase.icon}</div>
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                    {useCase.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {useCase.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 bg-surface">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Ready to integrate{" "}
                        <span className="text-primary">AI</span> into your business?
                    </h2>
                    <p className="text-muted text-lg">
                        Let&apos;s explore how AI can transform your operations and give
                        you a competitive edge.
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
