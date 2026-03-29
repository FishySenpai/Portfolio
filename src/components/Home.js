import React, { useRef, useState, useEffect, useCallback } from "react";
import attirenova2 from "./Assets/attirenova/attirenova_2.png";
import skyclarity2  from "./Assets/skyclarity/skyclarity_2.png";

const STATS = [
  { numericValue: 10,  suffix: "+",  label: "Projects Delivered" },
  { numericValue: 2,   suffix: "+",  label: "Years Experience"    },
  { numericValue: 24,  suffix: "hr", label: "Response Time"       },
  { numericValue: 100, suffix: "%",  label: "Client Satisfaction" },
];

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
      if (progress < 1) { rafRef.current = requestAnimationFrame(frame); }
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
        {count}{suffix}
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
  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width  / 2) * strength;
    const y = (e.clientY - rect.top  - rect.height / 2) * strength;
    el.style.transform  = `translate(${x}px, ${y}px)`;
    el.style.transition = "transform 0.12s linear";
  }, [strength]);
  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform  = "translate(0, 0)";
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
  }, []);
  return (
    <span ref={ref} style={{ display: "inline-block" }} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </span>
  );
};

/* ── Browser chrome strip ── */
const BrowserChrome = ({ url }) => (
  <div className="flex items-center gap-2 px-3 py-2.5 bg-[#F2F0EB] border-b border-[#E5E2DB]">
    <div className="flex gap-1.5 shrink-0">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
    </div>
    <div className="flex-1 bg-white rounded px-2.5 py-1 flex items-center gap-1.5 border border-[#E5E2DB] min-w-0">
      <svg className="h-2.5 w-2.5 text-[#AAAAAA] shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
      </svg>
      <span className="text-[10px] text-[#AAAAAA] truncate">{url}</span>
    </div>
  </div>
);

const Home = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) { setStatsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#FAFAF8] pt-[76px]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">

          {/* ── Left ── */}
          <div>
            <div className="pre-heading inline-flex items-center gap-2.5 px-4 py-2 bg-[#FFF4EE] border border-[#FDDFC8] rounded-full mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[12px] font-semibold text-[#E8630A] tracking-wide">
                Available for New Projects
              </span>
            </div>

            <h1 className="hero-role font-serif text-[44px] sm:text-[54px] lg:text-[62px] xl:text-[70px] leading-[1.08] text-[#111111] mb-5">
              I Build Web Products
              <br />
              That Work for
              <br />
              <span className="text-[#E8630A] italic">Your Business.</span>
            </h1>

            <p className="hero-description text-[17px] sm:text-[18px] leading-[30px] text-[#555555] max-w-xl mb-3">
              Full-stack development for startups and growing businesses.
              Fast turnaround, clean code, and someone who actually cares
              about the outcome — not just the deliverable.
            </p>

            <p className="hero-description text-[14px] text-[#888888] mb-8 flex items-center gap-2">
              <svg className="h-4 w-4 text-[#111111] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              10+ projects delivered across 3 continents. Trusted by founders,
              agencies, and product teams.
            </p>

            <div className="hero-cta flex flex-wrap gap-3 mb-12">
              <MagneticWrapper>
                <button
                  onClick={() => scrollTo("contact")}
                  className="btn-shimmer px-7 py-3.5 bg-[#E8630A] hover:bg-[#D45508] text-white font-bold text-[15px] rounded-sm transition-colors duration-200 shadow-md shadow-orange-200"
                >
                  Start a Project →
                </button>
              </MagneticWrapper>
              <MagneticWrapper>
                <button
                  onClick={() => scrollTo("projects")}
                  className="px-7 py-3.5 border-2 border-[#111111] hover:border-[#E8630A] hover:text-[#E8630A] text-[#111111] font-semibold text-[15px] rounded-sm transition-colors duration-200"
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

          {/* ── Right: stacked project mockups ── */}
          <div className="hero-right hidden lg:flex items-center justify-center">
            <div className="relative" style={{ width: 460, height: 420 }}>

              {/* Back card — skyclarity */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden border border-[#E5E2DB] shadow-lg"
                style={{
                  transform: "rotate(4deg) translateY(10px)",
                  animation: "heroFloatBack 6s ease-in-out infinite 0.8s",
                }}
              >
                <BrowserChrome url="skyclarity.netlify.app" />
                <img
                  src={skyclarity2}
                  alt="SkyClarity travel platform"
                  className="w-full object-cover object-top"
                  style={{ height: 330 }}
                />
              </div>

              {/* Front card — attirenova (main) */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden border border-[#E5E2DB] shadow-2xl bg-white"
                style={{
                  transform: "rotate(-1.5deg)",
                  animation: "heroFloat 5s ease-in-out infinite",
                }}
              >
                <BrowserChrome url="attirenova.netlify.app" />
                <img
                  src={attirenova2}
                  alt="AttireNova e-commerce"
                  className="w-full object-cover object-top"
                  style={{ height: 330 }}
                />
                {/* Floating outcome badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm border border-[#E5E2DB] rounded-full shadow-md">
                  <svg className="h-3 w-3 text-[#E8630A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[11px] font-semibold text-[#111111]">E-Commerce · Concept to Launch</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
