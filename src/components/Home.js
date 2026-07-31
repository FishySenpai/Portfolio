import React, { useRef, useState, useEffect, useCallback } from "react";
import Hero3DBuild from "./Hero3DBuild";

const STATS = [
  { numericValue: 10, suffix: "+", label: "Projects Delivered" },
  { numericValue: 2, suffix: "+", label: "Years Experience" },
  { numericValue: 24, suffix: "hr", label: "Response Time" },
  { numericValue: 100, suffix: "%", label: "Client Satisfaction" },
];

const LENS_RADIUS = 170;

/* ── Count-up hook ── */
const useCountUp = (target, duration, isStarted) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  useEffect(() => {
    if (!isStarted) return;
    const start = performance.now();
    const frame = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(frame);
      }
    };
    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isStarted, target, duration]);
  return count;
};

const StatItem = ({ numericValue, suffix, label, isVisible }) => {
  const count = useCountUp(numericValue, 1400, isVisible);
  return (
    <div>
      <div className="font-serif text-[34px] text-[#111111] leading-none tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="text-[11px] text-[#888888] mt-2 font-semibold tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
};

/* ── Magnetic wrapper ── */
const MagneticWrapper = ({ children, strength = 0.28 }) => {
  const ref = useRef(null);
  const handleMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.transition = "transform 0.12s linear";
    },
    [strength],
  );
  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
    ref.current.style.transition =
      "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
  }, []);
  return (
    <span
      ref={ref}
      style={{ display: "inline-block" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </span>
  );
};

/* ── Blueprint twin of the hero — revealed under the x-ray lens.
     Must mirror the real hero's layout exactly: same grid, same
     type sizes, same spacing. Only the "ink" changes. ── */
const Handles = () => (
  <>
    <span className="bp-handle bp-handle-tl" />
    <span className="bp-handle bp-handle-tr" />
    <span className="bp-handle bp-handle-bl" />
    <span className="bp-handle bp-handle-br" />
  </>
);

/* Horizontal dimension line with end caps, e.g. "184 × 50" */
const DimLine = ({ label, style }) => (
  <span className="bp-dim" style={style}>
    <span className="bp-dim-cap" style={{ left: 0 }} />
    {label}
    <span className="bp-dim-cap" style={{ right: 0 }} />
  </span>
);

/* Every button gets drawn as a spec'd object: hatched fill, dashed
   bounds, corner handles, a measure under it and a colour callout. */
const BlueprintButton = ({ label, measure, swatch, note, solid }) => (
  <span className="relative inline-block">
    <span
      className={`${solid ? "bp-hatch" : "bp-hatch-soft bp-box"} relative inline-flex items-center px-7 py-3.5 rounded-sm`}
      style={
        solid
          ? {
              outline: "1.5px dashed rgba(45, 106, 96, 0.7)",
              outlineOffset: -1,
            }
          : { borderWidth: 2 }
      }
    >
      <span
        className={`bp-ink-solid text-[15px] ${solid ? "font-bold" : "font-semibold"}`}
      >
        {label}
      </span>
      <Handles />
    </span>
    <DimLine label={measure} style={{ bottom: -16 }} />
    <span className="bp-note" style={{ top: -15, left: 0 }}>
      {note}
    </span>
    {swatch && (
      <span className="bp-swatch absolute" style={{ bottom: -32, left: 0 }}>
        <i style={swatch === "outline" ? { background: "transparent" } : undefined} />
        {swatch === "outline" ? "border 2px · #111111" : "fill · #2D6A60"}
      </span>
    )}
  </span>
);

/* The right-hand 3D scene, drawn flat as an exploded elevation:
   three offset layer plates with leader lines and layer callouts. */
const BlueprintScene = () => (
  <div className="relative" style={{ width: 480, height: 450 }}>
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 480 450"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="bpSceneHatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="#2D6A60" strokeOpacity="0.16" strokeWidth="1.5" />
        </pattern>
      </defs>

      {/* three exploded plates, back → front */}
      {[
        { x: 18, y: 30, o: 0.32 },
        { x: 42, y: 66, o: 0.45 },
        { x: 66, y: 102, o: 0.62 },
      ].map((p) => (
        <g key={p.y}>
          <rect
            x={p.x}
            y={p.y}
            width="380"
            height="250"
            rx="8"
            stroke="#2D6A60"
            strokeOpacity={p.o}
            strokeDasharray="6 4"
            strokeWidth="1.2"
          />
          <line
            x1={p.x}
            y1={p.y + 26}
            x2={p.x + 380}
            y2={p.y + 26}
            stroke="#2D6A60"
            strokeOpacity={p.o * 0.7}
            strokeDasharray="3 4"
          />
        </g>
      ))}

      {/* front plate contents — the shipped page, wireframed */}
      <rect x="82" y="140" width="150" height="16" rx="3" fill="url(#bpSceneHatch)" stroke="#2D6A60" strokeOpacity="0.5" strokeDasharray="4 3" />
      <rect x="82" y="164" width="112" height="16" rx="3" fill="url(#bpSceneHatch)" stroke="#2D6A60" strokeOpacity="0.5" strokeDasharray="4 3" />
      <rect x="82" y="192" width="132" height="8" rx="2" stroke="#2D6A60" strokeOpacity="0.35" strokeDasharray="3 3" />
      <rect x="82" y="206" width="100" height="8" rx="2" stroke="#2D6A60" strokeOpacity="0.35" strokeDasharray="3 3" />
      <rect x="82" y="226" width="76" height="22" rx="3" fill="url(#bpSceneHatch)" stroke="#2D6A60" strokeOpacity="0.6" strokeDasharray="4 3" />
      <rect x="262" y="140" width="164" height="108" rx="5" stroke="#2D6A60" strokeOpacity="0.5" strokeDasharray="5 4" />
      <line x1="262" y1="140" x2="426" y2="248" stroke="#2D6A60" strokeOpacity="0.28" />
      <line x1="426" y1="140" x2="262" y2="248" stroke="#2D6A60" strokeOpacity="0.28" />
      {[82, 202, 322].map((x) => (
        <rect key={x} x={x} y="268" width="104" height="66" rx="5" stroke="#2D6A60" strokeOpacity="0.4" strokeDasharray="5 4" />
      ))}

      {/* leader lines out to the layer callouts */}
      {[
        { y: 44, ty: 44 },
        { y: 80, ty: 80 },
        { y: 116, ty: 116 },
      ].map((l) => (
        <path
          key={l.y}
          d={`M 8 ${l.ty} L 30 ${l.ty}`}
          stroke="#2D6A60"
          strokeOpacity="0.6"
          strokeDasharray="2 3"
        />
      ))}
    </svg>

    <span className="bp-note" style={{ top: 8, left: 18 }}>
      hero.scene · preserve-3d · perspective 1400
    </span>
    <span className="bp-note" style={{ top: 38, left: 404 }}>
      z 0 · wireframe
    </span>
    <span className="bp-note" style={{ top: 74, left: 428 }}>
      z 60 · components
    </span>
    <span className="bp-note" style={{ top: 110, left: 452 }}>
      z 120 · shipped
    </span>

    {/* offset dimension between plates */}
    <span className="bp-rail" style={{ left: 8, top: 30, height: 108 }} />
    <span
      className="bp-note"
      style={{ top: 66, left: -34, transform: "rotate(-90deg)", transformOrigin: "left top" }}
    >
      offset 36
    </span>

    <DimLine label="480 × 450" style={{ bottom: 34, left: 18, right: 82 }} />
  </div>
);

const BlueprintHero = () => (
  <div className="bp-surface w-full h-full flex items-center pt-[76px]">
    <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-28">
      <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">
        {/* ── Left ── */}
        <div className="relative">
          {/* column rail running the full height of the content */}
          <span className="bp-rail" style={{ left: -22, top: 0, bottom: 0 }} />
          <span
            className="bp-note"
            style={{
              top: 120,
              left: -30,
              transform: "rotate(-90deg)",
              transformOrigin: "left top",
            }}
          >
            col · 1fr
          </span>

          <div className="relative inline-block mb-8">
            <span className="bp-note" style={{ top: -17 }}>
              badge · pill · auto × 34
            </span>
            <span className="bp-box bp-hatch-soft inline-flex items-center gap-2.5 px-4 py-2 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2D6A60]/70" />
              <span className="bp-ink-solid text-[12px] font-semibold tracking-wide">
                Available for New Projects
              </span>
              <Handles />
            </span>
            <span className="bp-swatch absolute" style={{ top: 6, left: "calc(100% + 14px)" }}>
              <i style={{ background: "#FDF8EE", borderColor: "rgba(45,106,96,0.5)" }} />
              #FDF8EE / #F4E2C2
            </span>
          </div>

          <div className="relative">
            <span className="bp-note" style={{ top: -16 }}>
              h1 · DM Serif Display · 70/1.08
            </span>
            {/* baseline guides, one per display line */}
            {[0.94, 1.94, 2.94].map((n) => (
              <span
                key={n}
                className="bp-baseline"
                style={{ top: `calc(${n} * 1.08em)` }}
              />
            ))}
            <h1 className="bp-stroke font-serif text-[44px] sm:text-[54px] lg:text-[62px] xl:text-[70px] leading-[1.08] mb-5">
              I Build Web Products
              <br />
              That Work for
              <br />
              <span className="italic">Your Business.</span>
            </h1>
          </div>

          <div className="relative max-w-xl mb-3">
            <span className="bp-note" style={{ top: -14, left: "auto", right: 0 }}>
              p · 18/30 · max-w 576
            </span>
            <p className="bp-ink text-[17px] sm:text-[18px] leading-[30px]">
              Full-stack development for startups and growing businesses. Fast
              turnaround, clean code, and someone who actually cares about the
              outcome — not just the deliverable.
            </p>
          </div>

          <p className="bp-ink text-[14px] mb-8 flex items-center gap-2">
            <svg
              className="h-4 w-4 text-[#2D6A60]/60 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeDasharray="3 2"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="8" />
              <path d="M6.5 10.2l2.4 2.4 4.6-4.8" />
            </svg>
            10+ projects delivered across 3 continents. Trusted by founders,
            agencies, and product teams.
          </p>

          <div className="relative mb-12">
            <div className="flex flex-wrap gap-3">
              <BlueprintButton
                label="Start a Project →"
                measure="184 × 50"
                note="cta.primary · onClick → #contact"
                swatch="fill"
                solid
              />
              <BlueprintButton
                label="See My Work"
                measure="156 × 50"
                note="cta.ghost · onClick → #projects"
                swatch="outline"
              />
            </div>
            {/* behaviour annotation, parked clear of the two buttons */}
            <span className="bp-note" style={{ top: 16, left: "auto", right: 0 }}>
              gap 12 · radius 2 · magnetic pull 0.28
            </span>
          </div>

          <div className="relative pt-8 border-t border-dashed border-[#2D6A60]/40">
            <span className="bp-note" style={{ top: 12 }}>
              stats · grid 4 × auto · gap 24
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="relative">
                  <span
                    className="bp-rail"
                    style={{ left: -10, top: 2, height: "calc(100% - 4px)" }}
                  />
                  <div className="bp-stroke font-serif text-[34px] leading-none tabular-nums">
                    {stat.numericValue}
                    {stat.suffix}
                  </div>
                  <div className="bp-ink-solid text-[11px] mt-2 font-semibold tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <span className="bp-note" style={{ bottom: -18, left: 12 }}>
              counter · easeOutCubic · 1400ms · IntersectionObserver
            </span>
          </div>
        </div>

        {/* ── Right: the 3D scene as an exploded elevation ── */}
        <div className="hidden md:flex items-center justify-center">
          <div className="select-none">
            <BlueprintScene />
            <div className="build-caption text-[11px] font-semibold tracking-[0.18em] uppercase">
              <span className="bp-ink-solid">Wireframe</span>
              <span className="text-[#2D6A60]/50">→</span>
              <span className="bp-ink-solid">Build</span>
              <span className="text-[#2D6A60]/50">→</span>
              <span className="bp-ink-solid">Ship</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [lensOn, setLensOn] = useState(false);
  const statsRef = useRef(null);
  const overlayRef = useRef(null);
  const ringRef = useRef(null);
  const crossHRef = useRef(null);
  const crossVRef = useRef(null);
  const coordsRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setLensOn(fine && !reduced);
  }, []);

  const applyLens = useCallback(() => {
    rafRef.current = null;
    const { x, y } = posRef.current;
    if (overlayRef.current) {
      overlayRef.current.style.clipPath = `circle(${LENS_RADIUS}px at ${x}px ${y}px)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${x - LENS_RADIUS}px, ${y - LENS_RADIUS}px)`;
      ringRef.current.style.opacity = "1";
    }
    if (crossHRef.current) {
      crossHRef.current.style.top = `${y}px`;
      crossHRef.current.style.opacity = "1";
    }
    if (crossVRef.current) {
      crossVRef.current.style.left = `${x}px`;
      crossVRef.current.style.opacity = "1";
    }
    if (coordsRef.current) {
      coordsRef.current.textContent = `x ${Math.round(x)} · y ${Math.round(y)}`;
    }
  }, []);

  const handleLensMove = useCallback(
    (e) => {
      if (!lensOn) return;
      const rect = e.currentTarget.getBoundingClientRect();
      posRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!rafRef.current) rafRef.current = requestAnimationFrame(applyLens);
    },
    [lensOn, applyLens],
  );

  const handleLensLeave = useCallback(() => {
    if (!lensOn) return;
    const { x, y } = posRef.current;
    if (overlayRef.current) {
      overlayRef.current.style.clipPath = `circle(0px at ${x}px ${y}px)`;
    }
    if (ringRef.current) ringRef.current.style.opacity = "0";
    if (crossHRef.current) crossHRef.current.style.opacity = "0";
    if (crossVRef.current) crossVRef.current.style.opacity = "0";
  }, [lensOn]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#FAFAF8] pt-[76px]"
      onMouseMove={handleLensMove}
      onMouseLeave={handleLensLeave}
    >
      {/* isolate: keeps the 3D scene's translateZ layers from painting above the lens overlay */}
      <div className="isolate max-w-6xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">
          {/* ── Left ── */}
          <div>
            <div className="pre-heading inline-flex items-center gap-2.5 px-4 py-2 bg-[#FDF8EE] border border-[#F4E2C2] rounded-full mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2D6A60] animate-pulse" />
              <span className="text-[12px] font-semibold text-[#2D6A60] tracking-wide">
                Available for New Projects
              </span>
            </div>

            <h1 className="hero-role font-serif text-[44px] sm:text-[54px] lg:text-[62px] xl:text-[70px] leading-[1.08] text-[#111111] mb-5">
              I Build Web Products
              <br />
              That Work for
              <br />
              <span className="text-[#2D6A60] italic">Your Business.</span>
            </h1>

            <p className="hero-description text-[17px] sm:text-[18px] leading-[30px] text-[#555555] max-w-xl mb-3">
              Full-stack development for startups and growing businesses. Fast
              turnaround, clean code, and someone who actually cares about the
              outcome — not just the deliverable.
            </p>

            <p className="hero-description text-[14px] text-[#888888] mb-8 flex items-center gap-2">
              <svg
                className="h-4 w-4 text-[#111111] shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              10+ projects delivered across 3 continents. Trusted by founders,
              agencies, and product teams.
            </p>

            <div className="hero-cta flex flex-wrap gap-3 mb-12">
              <MagneticWrapper>
                <button
                  onClick={() => scrollTo("contact")}
                  className="btn-shimmer px-7 py-3.5 bg-[#2D6A60] hover:bg-[#204B44] text-white font-bold text-[15px] rounded-sm transition-colors duration-200 shadow-md shadow-emerald-900/20"
                >
                  Start a Project →
                </button>
              </MagneticWrapper>
              <MagneticWrapper>
                <button
                  onClick={() => scrollTo("projects")}
                  className="px-7 py-3.5 border-2 border-[#111111] hover:border-[#2D6A60] hover:text-[#2D6A60] text-[#111111] font-semibold text-[15px] rounded-sm transition-colors duration-200"
                >
                  See My Work
                </button>
              </MagneticWrapper>
            </div>

            <div
              ref={statsRef}
              className="tech-chips grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#E5E2DB]"
            >
              {STATS.map((stat) => (
                <StatItem key={stat.label} {...stat} isVisible={statsVisible} />
              ))}
            </div>
          </div>

          {/* ── Right: 3D exploded build — wireframe → build → ship ──
               isolation keeps its translateZ layers below the lens overlay */}
          <div className="hero-right hidden md:flex items-center justify-center" style={{ isolation: "isolate" }}>
            <Hero3DBuild />
          </div>
        </div>
      </div>

      {/* ── X-ray blueprint lens ── */}
      {lensOn && (
        <>
          <div
            ref={overlayRef}
            className="absolute inset-0 z-[5] pointer-events-none"
            style={{
              clipPath: "circle(0px at 50% 50%)",
              transition: "clip-path 0.12s ease-out",
              transform: "translateZ(0)",
            }}
            aria-hidden="true"
          >
            <BlueprintHero />
          </div>
          <div ref={crossHRef} className="bp-cross-h z-[6]" aria-hidden="true" />
          <div ref={crossVRef} className="bp-cross-v z-[6]" aria-hidden="true" />
          <div ref={ringRef} className="bp-ring z-[6]" aria-hidden="true">
            <span className="bp-tick" style={{ top: -6, left: "50%", width: 1.5, height: 12, marginLeft: -0.75 }} />
            <span className="bp-tick" style={{ bottom: -6, left: "50%", width: 1.5, height: 12, marginLeft: -0.75 }} />
            <span className="bp-tick" style={{ left: -6, top: "50%", height: 1.5, width: 12, marginTop: -0.75 }} />
            <span className="bp-tick" style={{ right: -6, top: "50%", height: 1.5, width: 12, marginTop: -0.75 }} />
            <span ref={coordsRef} className="bp-coords" />
          </div>
          <div className="absolute top-[96px] right-6 lg:right-10 z-[6] pointer-events-none" aria-hidden="true">
            <span className="bp-hint">( move your cursor — x-ray the blueprint )</span>
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
