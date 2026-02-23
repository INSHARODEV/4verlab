'use client';

import Image from "next/image";

export default function MapSection() {
    return (
        <section className="px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mt-16">
                    <Image src="/images/map.png" alt="World Map" width={1200} height={600} className="mx-auto" />
                </div>
            </div>
        </section>
    );
}
