
import Image from "next/image";

export default function PricingSection() {
    return (
        <section className="py-12 bg-[#292931] sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl xl:text-5xl">
                        Flexible &amp; Transparent Pricing
                    </h2>
                    <p className="mt-4 text-base leading-7 text-foreground/60 sm:mt-8">
                        Choose a plan that fits your needs
                    </p>
                </div>
                <div className="mt-10">
                    <Image
                        src="/images/pricing.png"
                        alt="Pricing plans"
                        width={1200}
                        height={800}
                        className="mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}
