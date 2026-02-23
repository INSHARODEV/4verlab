import Image from "next/image";
import CTAButton from "../CTAButton";

export default function HeroSection() {
    return (
        <section className="relative bg-background text-white min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <p className="text-lg md:text-xl text-primary font-semibold animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            AI AUTOMATION • APPS • WEBSITES • GEO-OPTIMIZED
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                            Build, Automate, and Scale Your Digital Operations in Saudi Arabia
                        </h1>
                        <p className="text-lg md:text-xl animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                            exefai designs AI agents, custom web & mobile apps, and GEO-optimized websites 
                            that automate business processes and drive growth for companies in Riyadh, 
                            Jeddah, Dammam, and across KSA.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                            <div className="bg-primary/20 border border-primary text-primary rounded-lg p-4 text-center flex items-center justify-center">
                                <strong className="font-bold">AI Agents for Business Processes</strong>
                            </div>
                            <div className="bg-primary/20 border border-primary text-primary rounded-lg p-4 text-center flex items-center justify-center">
                                <strong className="font-bold">High-Converting Web & Mobile Apps</strong>
                            </div>
                            <div className="bg-primary/20 border border-primary text-primary rounded-lg p-4 text-center flex items-center justify-center">
                                <strong className="font-bold">SEO/GEO Websites for Saudi Markets</strong>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "1.0s" }}>
                            <CTAButton
                                href="#calendly"
                                text="BOOK FREE 30-MIN STRATEGY CALL"
                                variant="primary"
                                size="lg"
                            />
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative hidden lg:block h-[500px] animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
                        <Image
                            src="/images/ai-dashboard-ksa.jpg"
                            alt="exefai AI, App and Web Development for Saudi Arabia"
                            fill
                            className="object-contain rounded-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}