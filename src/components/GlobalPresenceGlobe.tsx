"use client";

import { useEffect, useState, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { useLanguage } from "./LanguageContext";

export default function GlobalPresenceGlobe() {
    const { dir } = useLanguage();
    const isRtl = dir === "rtl";
    const globeRef = useRef<GlobeMethods | undefined>(undefined);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Slightly auto-rotate the globe on mount to show it's interactive
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 0.5;
            // Point the camera roughly towards Europe/Middle East
            globeRef.current.pointOfView({ lat: 25, lng: 35, altitude: 2 }, 2000);
        }
    }, [isMounted]);

    // Data for the offices (orange/gold) and markets (cyan)
    const pointsData = [
        // Offices (Istanbul & Bogota)
        { lat: 41.0082, lng: 28.9784, size: 0.1, color: "#eab308", label: "Istanbul Office" }, // Yellow/Gold
        { lat: 4.7110, lng: -74.0721, size: 0.1, color: "#eab308", label: "Bogota Office" },

        // Markets (KSA, UAE, USA, CA)
        { lat: 23.8859, lng: 45.0792, size: 0.08, color: "#22d3ee", label: "KSA Market" }, // Cyan
        { lat: 23.4241, lng: 53.8478, size: 0.08, color: "#22d3ee", label: "UAE Market" },
        { lat: 37.0902, lng: -95.7129, size: 0.08, color: "#22d3ee", label: "USA Market" },
        { lat: 56.1304, lng: -106.3468, size: 0.08, color: "#22d3ee", label: "Canada Market" }
    ];

    // Data for arcs connecting offices to their markets
    const arcsData = [
        // Istanbul to KSA
        { startLat: 41.0082, startLng: 28.9784, endLat: 23.8859, endLng: 45.0792, color: ["#eab308", "#22d3ee"] },
        // Istanbul to UAE
        { startLat: 41.0082, startLng: 28.9784, endLat: 23.4241, endLng: 53.8478, color: ["#eab308", "#22d3ee"] },
        // Bogota to USA
        { startLat: 4.7110, startLng: -74.0721, endLat: 37.0902, endLng: -95.7129, color: ["#eab308", "#22d3ee"] },
        // Bogota to CA
        { startLat: 4.7110, startLng: -74.0721, endLat: 56.1304, endLng: -106.3468, color: ["#eab308", "#22d3ee"] },
    ];

    if (!isMounted) return <div className="w-full h-full min-h-[500px] flex animate-pulse bg-primary/5 rounded-full blur-3xl"></div>;

    return (
        <div className="w-full h-[500px] lg:h-[600px] cursor-grab active:cursor-grabbing flex items-center justify-center relative mix-blend-screen">
            <Globe
                ref={globeRef}
                height={600}
                width={600}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                // Point styling
                pointsData={pointsData}
                pointAltitude="size"
                pointColor="color"
                pointResolution={2} // Use spheres instead of circles
                pointsMerge={false}
                pointRadius={0.5}

                // Arc styling
                arcsData={arcsData}
                arcColor="color"
                arcDashLength={0.4}
                arcDashGap={0.2}
                arcDashInitialGap={() => Math.random()}
                arcDashAnimateTime={2000}
                arcAltitudeAutoScale={0.3}

                // Atmosphere
                atmosphereColor="#e23576"
                atmosphereAltitude={0.2}

                // Labels 
                labelsData={pointsData}
                labelLat={(d: any) => d.lat}
                labelLng={(d: any) => d.lng}
                labelText={(d: any) => d.label}
                labelSize={1.5}
                labelDotRadius={0.5}
                labelColor={() => 'rgba(255, 255, 255, 0.75)'}
                labelResolution={2}
                labelAltitude={0.1}
            />
        </div>
    );
}
