"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const positions = [
    {
        title: 'HR Recruiter Specialist',
        description: 'We are a dynamic and innovative company specializing in Business Consulting and Digital Solutions that partners and in-house projects with organizations to achieve growth, efficiency, and sustainable success.',
        location: 'Egypt',
    },
    {
        title: 'Video Editor',
        description: 'We are a dynamic and innovative company specializing in Business Consulting and Digital Solutions that partners and in-house projects with organizations to achieve growth, efficiency, and sustainable success.',
        location: 'Egypt',
    },
    {
        title: 'Frontend Developer',
        description: 'We are looking for a skilled Frontend Developer to join our team. The ideal candidate will be responsible for building the client-side of our web applications.',
        location: 'Remote',
    },
    {
        title: 'Backend Developer',
        description: 'We are looking for a skilled Backend Developer to join our team. The ideal candidate will be responsible for the server-side of our web applications.',
        location: 'Remote',
    },
    {
        title: 'UI/UX Designer',
        description: 'We are looking for a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design.',
        location: 'Egypt',
    },
    {
        title: 'Project Manager',
        description: 'We are seeking an experienced Project Manager to lead our projects to success. The ideal candidate will have a proven track record of managing projects from conception to completion.',
        location: 'Egypt',
    },
];

export default function OpenPositionsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback((index: number) => {
        emblaApi && emblaApi.scrollTo(index);
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (emblaApi) {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            onSelect();
            emblaApi.on('select', onSelect);
        }
    }, [emblaApi, onSelect]);

    const slides = positions.reduce((acc, _, i) => {
        if (i % 2 === 0) {
            acc.push(positions.slice(i, i + 2));
        }
        return acc;
    }, [] as typeof positions[]);

    return (
        <section className="bg-[#292931] py-12 border-t border-[#308C8C]/10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-foreground mb-8">Open positions</h2>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {slides.map((slide, index) => (
                            <div className="flex-[0_0_100%] grid grid-cols-1 md:grid-cols-2 gap-8 px-4" key={index}>
                                {slide.map((position, posIndex) => (
                                    <div key={posIndex} className="bg-surface rounded-lg p-8 text-white max-w-md mx-auto border border-card-border">
                                        <h3 className="text-2xl font-bold mb-4">{position.title}</h3>
                                        <p className="mb-6">{position.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="bg-[#308C8C]/20 text-[#308C8C] text-xs font-semibold px-2.5 py-1 rounded border border-[#308C8C]/30">{position.location}</span>
                                            <button className="bg-[#308C8C] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#308C8C]/80 transition-colors">
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <div className="flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-[#308C8C]' : 'bg-foreground/30'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
