import HeroSection from "@/components/sections/HeroSection";
import SubscribeSection from "@/components/sections/SubscribeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import InsharoWaySection from "@/components/sections/InsharoWaySection";
import TeamSection from "@/components/sections/TeamSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import CostSection from "@/components/sections/CostSection";
import { Logos3 } from "@/components/blocks/logos3";
import FocusRailSection from "@/components/sections/FocusRailSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import MapSection from "@/components/sections/MapSection";
import PodcastSection from "@/components/sections/PodcastSection";
import OpenPositionsSection from "@/components/sections/OpenPositionsSection";
import CalendlySection from "@/components/sections/CalendlySection";
import ImpactMetricsSection from "@/components/sections/ImpactMetricsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Logos3 />
      <ImpactMetricsSection />
      <TestimonialsSection />
      <ComparisonSection />
      <PodcastSection />
      <TeamSection />
      <MapSection />
      <OpenPositionsSection />
      <CalendlySection />
      {/* <ServicesSection /> */}
      {/* <FocusRailSection /> */}
      {/* <CaseStudiesSection /> */}
      {/* <CostSection /> */}
      {/* <SubscribeSection /> */}
    </>
  );
}
