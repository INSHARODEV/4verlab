
import Image from 'next/image';
import Link from 'next/link';
import { Twitter } from 'lucide-react';

// Placeholder icons with brand-appropriate background colors
const ApplePodcastsIcon = () => <div className="w-6 h-6 bg-primary/30 rounded-md" />;
const YouTubeIcon = () => <div className="w-6 h-6 bg-primary/40 rounded-md" />;
const SpotifyIcon = () => <div className="w-6 h-6 bg-primary/20 rounded-md" />;

const podcastLinks = [
    { name: 'بودكاست Apple', icon: <ApplePodcastsIcon />, href: '#', available: 'متاح على' },
    { name: 'يوتيوب', icon: <YouTubeIcon />, href: '#', available: 'متاح على' },
    { name: 'سبوتيفاي', icon: <SpotifyIcon />, href: '#', available: 'متاح على' },
];

export default function PodcastSection() {
    return (
        <section className="py-20 sm:py-28 bg-[#292931] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">

                    {/* Left side: Image and podcast links */}
                    <div className="relative order-last lg:order-first -mx-4 sm:mx-0">
                        <div className="relative aspect-square max-w-lg mx-auto">
                            <Image
                                src="/images/person.png"
                                alt="Podcast Host"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-3xl shadow-2xl"
                            />
                        </div>
                        <div className="absolute right-0 sm:right-4 md:right-8 lg:-left-16 top-1/2 transform -translate-y-1/2 w-60">
                            <div dir="rtl" className="bg-[#292931]/90 backdrop-blur-md rounded-2xl shadow-lg p-5 space-y-4 border border-[#308C8C]/20">
                                {podcastLinks.map((item) => (
                                    <Link href={item.href} key={item.name}>
                                        <div className="flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
                                            <div className="p-3 rounded-xl bg-[#308C8C]/10">
                                                {item.icon}
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-foreground/50">{item.available}</p>
                                                <p className="font-semibold text-foreground">{item.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side: Text content in Arabic */}
                    <div className="text-center lg:text-right order-first lg:order-last" dir="rtl">
                        <p className="text-base font-bold text-[#308C8C]">قريباً</p>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mt-3 leading-tight">
                            بودكاست سكواديو
                        </h2>
                        <p className="mt-6 text-lg text-foreground/60 max-w-md mx-auto lg:ml-auto lg:mr-0">
                            ترقبوا بودكاست سكواديو حيث ستبقى على اطلاع بكل ما هو تقني. سنلتقي مع شركائنا، وأصحاب المشاريع الريادية في حلقات حصرية، وأكثر.
                        </p>
                        <div className="mt-10 flex flex-col items-center lg:items-end space-y-5">
                            <div className="flex items-center gap-3">
                                <p className="font-semibold text-foreground">قريبا الإطلاق</p>
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#308C8C]/60 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#308C8C]"></span>
                                </span>
                            </div>
                            <Link href="#">
                                <div className="inline-flex items-center justify-end gap-4 rounded-full p-2 pr-6 transition-colors bg-[#308C8C]/10 text-foreground hover:bg-[#308C8C]/20 cursor-pointer border border-[#308C8C]/20">
                                    <div className="text-right">
                                        <div className="text-xs text-[#308C8C]">متاح على</div>
                                        <div className="font-bold text-foreground">تويتر سبيس</div>
                                    </div>
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#308C8C]/20 shadow-md">
                                        <Twitter size={24} className="text-[#308C8C]" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
