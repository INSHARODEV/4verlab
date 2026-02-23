import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy and Policy - INSHARO Canada TechConsulting",
    description:
        "Privacy and Policy of INSHARO Canada TechConsulting.",
};

export default function PrivacyAndPolicyPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-background to-accent/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(182,198,73,0.08),transparent_60%)]" />
                <div className="relative z-10 max-w-7xl mx-auto items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                            Privacy and Policy
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
}