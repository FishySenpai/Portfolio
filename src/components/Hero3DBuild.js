import React, { useRef, useEffect, useCallback } from "react";
import attirenova2 from "./Assets/attirenova/attirenova_2.png";

/* ── Layer 1 (back): blueprint wireframe ── */
const BlueprintLayer = () => (
  <svg
    className="build-layer build-layer-blueprint"
    viewBox="0 0 460 340"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <pattern id="bpGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path
          d="M 20 0 L 0 0 0 20"
          stroke="#2D6A60"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect
      x="1"
      y="1"
      width="458"
      height="338"
      rx="10"
      fill="#FDFDFB"
      fillOpacity="0.6"
      stroke="#2D6A60"
      strokeOpacity="0.5"
      strokeDasharray="7 5"
      strokeWidth="1.5"
    />
    <rect x="1" y="1" width="458" height="338" rx="10" fill="url(#bpGrid)" />
    {/* nav */}
    <rect x="20" y="18" width="70" height="14" rx="3" stroke="#2D6A60" strokeOpacity="0.55" strokeDasharray="4 3" />
    <rect x="330" y="18" width="34" height="14" rx="3" stroke="#2D6A60" strokeOpacity="0.4" strokeDasharray="4 3" />
    <rect x="372" y="18" width="34" height="14" rx="3" stroke="#2D6A60" strokeOpacity="0.4" strokeDasharray="4 3" />
    <rect x="414" y="18" width="26" height="14" rx="3" stroke="#2D6A60" strokeOpacity="0.55" strokeDasharray="4 3" />
    <line x1="20" y1="46" x2="440" y2="46" stroke="#2D6A60" strokeOpacity="0.25" strokeDasharray="3 4" />
    {/* hero: headline left, image right */}
    <rect x="20" y="66" width="190" height="20" rx="3" stroke="#2D6A60" strokeOpacity="0.55" strokeDasharray="5 4" />
    <rect x="20" y="94" width="150" height="20" rx="3" stroke="#2D6A60" strokeOpacity="0.55" strokeDasharray="5 4" />
    <rect x="20" y="126" width="170" height="10" rx="2" stroke="#2D6A60" strokeOpacity="0.35" strokeDasharray="3 3" />
    <rect x="20" y="142" width="130" height="10" rx="2" stroke="#2D6A60" strokeOpacity="0.35" strokeDasharray="3 3" />
    <rect x="20" y="168" width="86" height="24" rx="4" stroke="#2D6A60" strokeOpacity="0.6" strokeDasharray="4 3" />
    <rect x="240" y="66" width="200" height="126" rx="6" stroke="#2D6A60" strokeOpacity="0.5" strokeDasharray="6 4" />
    <line x1="240" y1="66" x2="440" y2="192" stroke="#2D6A60" strokeOpacity="0.3" />
    <line x1="440" y1="66" x2="240" y2="192" stroke="#2D6A60" strokeOpacity="0.3" />
    {/* cards row */}
    {[20, 165, 310].map((x) => (
      <rect
        key={x}
        x={x}
        y="216"
        width="130"
        height="100"
        rx="6"
        stroke="#2D6A60"
        strokeOpacity="0.45"
        strokeDasharray="5 4"
      />
    ))}
  </svg>
);

/* ── Layer 2 (middle): half-built components ── */
const ComponentLayer = () => (
  <div className="build-layer build-layer-mid" aria-hidden="true">
    {/* nav */}
    <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#E5E2DB]">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#2D6A60]" />
        <span className="h-2 w-14 rounded-sm bg-[#111111]/80" />
      </div>
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-8 rounded-sm bg-[#CCCCCC]" />
        <span className="h-1.5 w-8 rounded-sm bg-[#CCCCCC]" />
        <span className="h-5 w-12 rounded-sm bg-[#2D6A60]" />
      </div>
    </div>
    {/* hero */}
    <div className="flex gap-5 px-5 pt-5">
      <div className="flex-1">
        <div className="h-3.5 w-4/5 rounded-sm bg-[#111111]/85 mb-2" />
        <div className="h-3.5 w-3/5 rounded-sm bg-[#111111]/85 mb-3.5" />
        <div className="h-1.5 w-full rounded-sm bg-[#D8D5CE] mb-1.5" />
        <div className="h-1.5 w-3/4 rounded-sm bg-[#D8D5CE] mb-4" />
        <div className="h-7 w-24 rounded-sm bg-[#2D6A60]" />
      </div>
      <div className="w-[44%] h-[140px] rounded-md bg-[#F2F0EB] border border-[#E5E2DB] flex items-center justify-center">
        <svg className="h-6 w-6 text-[#C9C5BC]" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    {/* cards row */}
    <div className="grid grid-cols-3 gap-3 px-5 pt-6">
      {[0, 1, 2].map((i) => (
        <div key={i} className="rounded-md border border-[#E5E2DB] bg-white p-2.5">
          <div className="h-16 rounded-sm bg-[#F2F0EB] mb-2" />
          <div className="h-1.5 w-4/5 rounded-sm bg-[#D8D5CE] mb-1" />
          <div className="h-1.5 w-3/5 rounded-sm bg-[#D8D5CE]" />
        </div>
      ))}
    </div>
  </div>
);

/* ── Layer 3 (front): the shipped product ── */
const ProductLayer = () => (
  <div className="build-layer build-layer-product">
    <div className="flex items-center gap-2 px-3 py-2 bg-[#F2F0EB] border-b border-[#E5E2DB]">
      <div className="flex gap-1.5 shrink-0">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 bg-white rounded px-2.5 py-0.5 border border-[#E5E2DB] min-w-0">
        <span className="text-[10px] text-[#AAAAAA] truncate block">
          attirenova.netlify.app
        </span>
      </div>
    </div>
    <img
      src={attirenova2}
      alt="AttireNova e-commerce, shipped"
      className="w-full object-cover object-top"
      style={{ height: 326 }}
    />
  </div>
);

const CONNECTORS = [
  { top: 12, left: 12 },
  { top: 12, left: 468 },
  { top: 348, left: 12 },
  { top: 348, left: 468 },
];

const CHIPS = [
  { label: "React", className: "build-chip-1" },
  { label: "Node.js", className: "build-chip-2" },
  { label: "AI", className: "build-chip-3" },
];

const Hero3DBuild = () => {
  const tiltRef = useRef(null);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  const handleMove = useCallback((e) => {
    if (reducedRef.current || !tiltRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltRef.current.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  }, []);

  const handleLeave = useCallback(() => {
    if (tiltRef.current)
      tiltRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  }, []);

  return (
    <div className="select-none">
      <div
        className="build-viewport"
        style={{ width: 480, height: 450 }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div ref={tiltRef} className="build-tilt w-full h-full">
          <div className="build-scene" style={{ width: 480, height: 360, marginTop: 45 }}>
            {CONNECTORS.map((pos, i) => (
              <span key={i} className="build-connector" style={pos} aria-hidden="true" />
            ))}
            <BlueprintLayer />
            <ComponentLayer />
            <ProductLayer />
            {CHIPS.map((chip) => (
              <span key={chip.label} className={`build-chip ${chip.className}`} aria-hidden="true">
                <span className="build-chip-inner">{chip.label}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="build-shadow" aria-hidden="true" />
      </div>
      <div className="build-caption text-[11px] font-semibold tracking-[0.18em] uppercase text-[#888888]">
        <span>Wireframe</span>
        <span className="text-[#2D6A60]">→</span>
        <span>Build</span>
        <span className="text-[#2D6A60]">→</span>
        <span className="text-[#111111]">Ship</span>
      </div>
    </div>
  );
};

export default Hero3DBuild;
