import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Talent Management",
        description: "We assemble the ideal talent, reducing hiring time and cost",
        image: "/images/Fluid_One.png",
        href: "/talent-management",
        gradient: "from-accent/40 to-accent/10",
    },
    {
        title: "MVP Development",
        description:
            "We build and launch lean platforms using modern agile methods",
        image: "/images/Fluid-Two.png",
        href: "/mvp-development",
        gradient: "from-primary/40 to-primary/10",
    },
    {
        title: "B2B AI Applications",
        description:
            "We specialize in developing custom B2B and AI applications",
        image: "/images/Fluid_Three.png",
        href: "/ai-applications",
        gradient: "from-accent/30 to-primary/20",
    },
];

export default function ServicesSection() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    What do we do?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group relative overflow-hidden rounded-3xl bg-card-bg border border-card-border p-8 min-h-[380px] flex flex-col justify-end hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
                        >
                            {/* Background image */}
                            <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Gradient overlay */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-t ${service.gradient} to-transparent`}
                            />

                            {/* Content */}
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-2xl font-bold">{service.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    >
                                        <path
                                            d="M12.5462 4.41439L3.70733 13.2532"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M5.43131 4.42936C5.43131 4.42936 10.9179 2.78592 12.5454 4.41345C14.1741 6.04215 12.5312 11.5293 12.5312 11.5293"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Learn More
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
