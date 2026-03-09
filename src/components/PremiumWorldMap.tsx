"use client";

import { useEffect, useRef, useState } from "react";

// ───── Miller cylindrical projection matching @svg-maps/world viewBox 0 0 1010 666 ─────
function geoToSvg(lat: number, lng: number): { x: number; y: number } {
    const x = ((lng + 180) / 360) * 1010;
    const latRad = (lat * Math.PI) / 180;
    // Miller cylindrical: y = 1.25 * ln(tan(π/4 + 0.4 * φ))
    const millerY = 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * latRad));
    // Map range: Miller projection max latitude ~±85° maps to ~±2.303
    const millerMax = 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * (85 * Math.PI / 180)));
    const y = 666 / 2 - (millerY / millerMax) * (666 / 2);
    return { x, y };
}

// ───── Location data with EN + AR labels ─────
const OFFICES = [
    { id: "bogota", en: "Bogota", ar: "بوغوتا", lat: 4.711, lng: -74.072, color: "#f4ca64", labelDx: 0, labelDy: 20 },
    { id: "istanbul", en: "Istanbul", ar: "إسطنبول", lat: 41.008, lng: 28.978, color: "#f4ca64", labelDx: 0, labelDy: -14 },
    { id: "cairo", en: "Cairo", ar: "القاهرة", lat: 30.044, lng: 31.236, color: "#f4ca64", labelDx: -28, labelDy: 4 },
];

const MARKETS = [
    { id: "ksa", en: "KSA", ar: "السعودية", lat: 23.8859, lng: 45.0792, color: "#22d3ee", labelDx: 0, labelDy: 18 },
    { id: "uae", en: "UAE", ar: "الإمارات", lat: 23.4241, lng: 53.8478, color: "#22d3ee", labelDx: 14, labelDy: -12 },
    { id: "usa", en: "USA", ar: "أمريكا", lat: 37.0902, lng: -95.7129, color: "#22d3ee", labelDx: 0, labelDy: -14 },
    { id: "ca", en: "Canada", ar: "كندا", lat: 56.13, lng: -106.35, color: "#22d3ee", labelDx: 0, labelDy: -14 },
];

const ALL = [...OFFICES, ...MARKETS];

const ARCS = [
    { from: "istanbul", to: "ksa" },
    { from: "istanbul", to: "uae" },
    { from: "cairo", to: "ksa" },
    { from: "cairo", to: "uae" },
    { from: "bogota", to: "usa" },
    { from: "bogota", to: "ca" },
];

function arcPath(x1: number, y1: number, x2: number, y2: number) {
    const mx = (x1 + x2) / 2;
    const my = Math.min(y1, y2) - Math.abs(x2 - x1) * 0.18;
    return `M${x1},${y1} Q${mx},${my} ${x2},${y2}`;
}

interface PremiumWorldMapProps {
    language?: "en" | "ar";
}

export default function PremiumWorldMap({ language = "en" }: PremiumWorldMapProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState<string | null>(null);
    const [mapSvg, setMapSvg] = useState<string>("");
    const isAr = language === "ar";

    // Load the real SVG map
    useEffect(() => {
        fetch("/images/world-map.svg")
            .then((r) => r.text())
            .then((text) => {
                const paths = text.match(/<path[^>]*\/>/g);
                if (paths) setMapSvg(paths.join("\n"));
            });
    }, []);

    const pts = Object.fromEntries(ALL.map((p) => [p.id, geoToSvg(p.lat, p.lng)]));

    const legendOffices = isAr ? "مكاتبنا" : "Offices";
    const legendMarkets = isAr ? "أسواقنا" : "Markets";

    return (
        <div ref={containerRef} className="relative w-full select-none">
            <svg
                viewBox="0 0 1010 666"
                className="w-full h-auto"
                style={{ maxHeight: "520px" }}
            >
                <defs>
                    <radialGradient id="mapBg" cx="50%" cy="50%" r="70%">
                        <stop offset="0%" stopColor="#1a2e2e" />
                        <stop offset="100%" stopColor="#111a1a" />
                    </radialGradient>
                    <filter id="glowCyan" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="glowGold" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <linearGradient id="arcLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f4ca64" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.7" />
                    </linearGradient>
                    <radialGradient id="vignette" cx="50%" cy="50%" r="55%">
                        <stop offset="70%" stopColor="transparent" />
                        <stop offset="100%" stopColor="rgba(10,18,18,0.9)" />
                    </radialGradient>
                </defs>

                {/* Background */}
                <rect width="1010" height="666" rx="24" fill="url(#mapBg)" />

                {/* Dot grid */}
                <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.5" fill="rgba(48,140,140,0.08)" />
                </pattern>
                <rect width="1010" height="666" fill="url(#dots)" rx="24" />

                {/* Real country paths */}
                <g
                    fill="#1e3a3a"
                    stroke="#308C8C"
                    strokeWidth="0.5"
                    strokeOpacity="0.4"
                    dangerouslySetInnerHTML={{ __html: mapSvg }}
                />

                {/* Vignette */}
                <rect width="1010" height="666" fill="url(#vignette)" rx="24" />

                {/* Flight-path arcs */}
                {ARCS.map(({ from, to }, i) => {
                    const p1 = pts[from];
                    const p2 = pts[to];
                    if (!p1 || !p2) return null;
                    const d = arcPath(p1.x, p1.y, p2.x, p2.y);
                    return (
                        <g key={i}>
                            <path d={d} fill="none" stroke="rgba(34,211,238,0.08)" strokeWidth="4" />
                            <path
                                d={d} fill="none" stroke="url(#arcLine)"
                                strokeWidth="1.5" strokeDasharray="8 6" strokeLinecap="round"
                            >
                                <animate attributeName="stroke-dashoffset" from="0" to="-28" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                            </path>
                        </g>
                    );
                })}

                {/* Location markers */}
                {ALL.map((loc) => {
                    const { x, y } = pts[loc.id];
                    const isOffice = OFFICES.some((o) => o.id === loc.id);
                    const isHov = hovered === loc.id;
                    const r = isOffice ? 5 : 4;
                    const label = isAr ? loc.ar : loc.en;

                    return (
                        <g key={loc.id}>
                            {/* Ping ring */}
                            <circle cx={x} cy={y} r={r * 3} fill="none" stroke={loc.color} strokeWidth="1" opacity="0.3">
                                <animate attributeName="r" from={`${r}`} to={`${r * 4}`} dur="2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                            </circle>
                            {/* Halo */}
                            <circle cx={x} cy={y} r={isHov ? r + 6 : r + 3} fill={loc.color} fillOpacity={isHov ? 0.2 : 0.1} style={{ transition: "all 0.3s" }} />
                            {/* Core dot */}
                            <circle
                                cx={x} cy={y} r={isHov ? r + 1.5 : r}
                                fill={loc.color} stroke="#fff" strokeWidth="1.2"
                                filter={isOffice ? "url(#glowGold)" : "url(#glowCyan)"}
                                style={{ cursor: "pointer", transition: "all 0.25s" }}
                                onMouseEnter={() => setHovered(loc.id)}
                                onMouseLeave={() => setHovered(null)}
                            />
                            {/* Label */}
                            <text
                                x={x + loc.labelDx}
                                y={y + loc.labelDy}
                                textAnchor="middle"
                                fontSize={isOffice ? "11" : "9"}
                                fontWeight={isOffice ? "700" : "600"}
                                fill={isHov ? "#fff" : loc.color}
                                opacity={isOffice ? (isHov ? 1 : 0.9) : (isHov ? 1 : 0.75)}
                                direction={isAr ? "rtl" : "ltr"}
                                style={{
                                    pointerEvents: "none",
                                    filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
                                    transition: "all 0.25s",
                                    fontFamily: isAr ? "inherit" : undefined,
                                }}
                            >
                                {label}
                            </text>
                        </g>
                    );
                })}

                {/* Legend */}
                <g transform="translate(20,626)">
                    <rect width="175" height="30" rx="8" fill="rgba(15,25,25,0.85)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                    <circle cx="18" cy="15" r="4.5" fill="#f4ca64" />
                    <text x="30" y="19" fontSize="10" fill="rgba(255,255,255,0.8)" fontWeight="600">{legendOffices}</text>
                    <circle cx="105" cy="15" r="4.5" fill="#22d3ee" />
                    <text x="117" y="19" fontSize="10" fill="rgba(255,255,255,0.8)" fontWeight="600">{legendMarkets}</text>
                </g>
            </svg>
        </div>
    );
}
