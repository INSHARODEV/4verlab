"use client";

import Image from "next/image";

const costItems = [
    { label: "Talent Cost", percentage: 60, icon: "/images/Cost_Icon.png" },
    { label: "Design Cost", percentage: 45, icon: "/images/Design-Cost.png" },
    { label: "Data Cost", percentage: 50, icon: "/images/Data-Cost.png" },
    { label: "Business Cost", percentage: 55, icon: "/images/Business-Cost.png" },
];

export default function CostSection() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Save Up to <span className="text-primary">60%</span> on Costs
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Compared to traditional hiring or agency models, INSHARO delivers
                        exceptional value while maintaining premium quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {costItems.map((item) => (
                        <div
                            key={item.label}
                            className="group rounded-2xl bg-card-bg border border-card-border p-6 text-center space-y-4 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                                <Image
                                    src={item.icon}
                                    alt={item.label}
                                    width={28}
                                    height={28}
                                    className="opacity-80"
                                />
                            </div>
                            <h3 className="font-semibold text-sm">{item.label}</h3>
                            <div className="relative h-3 bg-foreground/10 rounded-full overflow-hidden">
                                <div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary-dark rounded-full transition-all duration-1000"
                                    style={{ width: `${item.percentage}%` }}
                                />
                            </div>
                            <p className="text-primary font-bold text-2xl">
                                {item.percentage}%
                            </p>
                            <p className="text-muted text-xs">Savings vs traditional</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
