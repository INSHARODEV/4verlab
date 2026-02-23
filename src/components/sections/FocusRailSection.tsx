
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";

const DEMO_ITEMS: FocusRailItem[] = [
  {
    id: 1,
    title: "Product 1",
    description: "Explainer Video, link to testimonial",
    meta: "Services",
    imageSrc: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop",
    href: "#product1",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Explainer Video",
    meta: "Services",
    imageSrc: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000&auto=format&fit=crop",
    href: "#product2",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Explainer Video",
    meta: "Services",
    imageSrc: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
    href: "#product3",
  },
];

export default function FocusRailSection() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full bg-neutral-950 flex flex-col items-center justify-center py-20">
      {/* The Component */}
      <FocusRail 
        items={DEMO_ITEMS} 
        autoPlay={false} 
        loop={true} 
      />
    </main>
  );
}
