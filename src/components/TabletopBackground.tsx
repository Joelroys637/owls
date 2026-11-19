import { useMemo } from 'react';

export function TabletopBackground() {
  // Hex cluster coordinates for strategy board aesthetic
  const hexPoints = useMemo(() => {
    // Generate a subtle cluster of hexes
    const r = 24; // hex radius
    const w = Math.sqrt(3) * r;
    const h = 2 * r * 0.75;
    const hexes: { cx: number; cy: number }[] = [];
    for (let row = 0; row < 12; row++) {
      for (let col = 0; col < 4; col++) {
        const x = (col * w) + (row % 2 ? w / 2 : 0) + 20;
        const y = (row * h) + 40;
        hexes.push({ cx: x, cy: y });
      }
    }
    return hexes;
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Atmospheric Ambient Tabletop Lighting (Soft Daylight & Cinnabar Warmth) */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#C84B31]/4 blur-[120px] animate-ambient-glow" />
      <div className="absolute top-[28%] -right-40 w-[650px] h-[650px] rounded-full bg-[#1E3A5F]/4 blur-[130px] animate-ambient-glow [animation-delay:-4s]" />
      <div className="absolute top-[62%] -left-32 w-[580px] h-[580px] rounded-full bg-[#B8862D]/3.5 blur-[120px] animate-ambient-glow [animation-delay:-8s]" />
      <div className="absolute -bottom-40 right-[15%] w-[500px] h-[500px] rounded-full bg-[#C84B31]/3 blur-[110px]" />

      {/* 2. Tactile Tabletop Dot-Matrix Drafting Grid */}
      <div className="absolute inset-0 bg-tabletop-dots opacity-[0.45]" />

      {/* 3. Left Gutter: Board Game Topography, Hex Map Cluster & Coordinates */}
      <div className="hidden xl:block absolute left-3 top-28 bottom-28 w-24">
        {/* Architectural coordinate stamp */}
        <div className="sticky top-32 flex flex-col gap-6 font-mono-spec text-[9px] uppercase tracking-[0.2em] text-[#111318]/25 writing-vertical rotate-180">
          <span>LAT 12.97° N · LON 77.59° E [BLR-VAULT]</span>
          <span>SECTOR // STRATEGY & EURO TABLES</span>
          <span>GRID SPEC: CARTAMUNDI 320GSM LINEN</span>
        </div>

        {/* Faint Strategy Board Hexagonal Tiles */}
        <svg
          className="absolute left-0 top-[280px] w-32 h-[420px] opacity-[0.16] stroke-[#111318] fill-none"
          viewBox="0 0 160 500"
        >
          {hexPoints.slice(0, 18).map((p, i) => (
            <polygon
              key={i}
              points="0,-22 19,-11 19,11 0,22 -19,11 -19,-11"
              transform={`translate(${p.cx}, ${p.cy})`}
              strokeWidth="0.8"
              strokeDasharray={i % 3 === 0 ? '2,2' : undefined}
            />
          ))}
          {/* Connecting board game trail */}
          <path
            d="M 30,50 L 50,110 L 30,170 L 70,230 L 40,300"
            stroke="#C84B31"
            strokeWidth="1.2"
            strokeDasharray="3,3"
            opacity="0.4"
          />
          <circle cx="50" cy="110" r="3" fill="#C84B31" opacity="0.6" />
          <circle cx="70" cy="230" r="3" fill="#C84B31" opacity="0.6" />
        </svg>

        {/* Minimal Meeple Watermark Silhouette */}
        <svg
          className="absolute left-4 bottom-24 w-10 h-10 opacity-[0.06] fill-[#111318]"
          viewBox="0 0 100 100"
        >
          <path d="M 50 15 C 43 15 38 20 38 27 C 38 31 40 35 43 37 C 33 40 25 47 18 55 C 14 60 17 67 23 65 C 30 62 33 58 36 55 L 36 78 C 36 82 32 85 28 86 C 26 87 26 90 28 90 L 44 90 C 47 90 48 87 47 84 L 47 68 C 47 66 53 66 53 68 L 53 84 C 52 87 53 90 56 90 L 72 90 C 74 90 74 87 72 86 C 68 85 64 82 64 78 L 64 55 C 67 58 70 62 77 65 C 83 67 86 60 82 55 C 75 47 67 40 57 37 C 60 35 62 31 62 27 C 62 20 57 15 50 15 Z" />
        </svg>
      </div>

      {/* 4. Right Gutter: Tabletop Wireframe Polyhedral D20 & D6 Drafting Motifs */}
      <div className="hidden xl:block absolute right-3 top-28 bottom-28 w-24">
        {/* Topographic drafting coordinates */}
        <div className="sticky top-32 flex flex-col gap-6 font-mono-spec text-[9px] uppercase tracking-[0.2em] text-[#111318]/25 writing-vertical">
          <span>ATELIER ELEVATION: 920M ASL</span>
          <span>DICE PROBABILITY ENGINE // D6 & D20</span>
          <span>100% PUBLISHER SEALED EDITIONS</span>
        </div>

        {/* Faint D20 Icosahedron Wireframe */}
        <svg
          className="absolute right-4 top-[240px] w-20 h-20 opacity-[0.14] stroke-[#111318] fill-none"
          viewBox="0 0 100 100"
          strokeWidth="0.8"
        >
          {/* Outer pentagon/hexagon */}
          <polygon points="50,10 88,32 88,72 50,92 12,72 12,32" />
          {/* Inner triangle */}
          <polygon points="50,28 76,68 24,68" strokeDasharray="2,2" />
          {/* Vertex connects */}
          <line x1="50" y1="10" x2="50" y2="28" />
          <line x1="88" y1="32" x2="76" y2="68" />
          <line x1="12" y1="32" x2="24" y2="68" />
          <line x1="88" y1="72" x2="76" y2="68" />
          <line x1="12" y1="72" x2="24" y2="68" />
          <line x1="50" y1="92" x2="76" y2="68" />
          <line x1="50" y1="92" x2="24" y2="68" />
          <line x1="50" y1="28" x2="88" y2="32" />
          <line x1="50" y1="28" x2="12" y2="32" />
        </svg>

        {/* Isometric D6 Cube Wireframe */}
        <svg
          className="absolute right-4 bottom-28 w-16 h-16 opacity-[0.12] stroke-[#111318] fill-none"
          viewBox="0 0 100 100"
          strokeWidth="0.9"
        >
          {/* Cube outline */}
          <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" />
          {/* Center Y */}
          <line x1="50" y1="55" x2="50" y2="95" />
          <line x1="50" y1="55" x2="85" y2="35" />
          <line x1="50" y1="55" x2="15" y2="35" />
          {/* Pips */}
          <circle cx="50" cy="35" r="2.5" fill="#111318" />
          <circle cx="32" cy="65" r="2.5" fill="#111318" />
          <circle cx="68" cy="65" r="2.5" fill="#111318" />
        </svg>
      </div>

      {/* 5. Subtle Architectural Crosshairs at Page Margins */}
      <div className="absolute top-[22%] left-6 text-[#111318]/15 font-mono text-xs select-none">
        + [GRID-01]
      </div>
      <div className="absolute top-[48%] right-6 text-[#111318]/15 font-mono text-xs select-none">
        + [AXIS-02]
      </div>
    </div>
  );
}
