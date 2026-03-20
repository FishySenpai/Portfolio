import React, { useRef, useState, useEffect } from "react";

const METRICS = [
  {
    stat:    "70%",
    label:   "Faster Frontend Build",
    context: "Auto-generated React components cut scaffolding time by 70% for a UI builder tool.",
  },
  {
    stat:    "35%",
    label:   "Faster Page Load",
    context: "Next.js SSR and optimized state management cut initial load by 35% on a developer platform.",
  },
  {
    stat:    "30%",
    label:   "Fewer API Requests",
    context: "Smarter caching and state management reduced redundant calls by 30% on a high-traffic app.",
  },
  {
    stat:    "1K+",
    label:   "Daily Active Users",
    context: "Scaled a developer analytics platform to support 1,000+ active profiles without degradation.",
  },
];

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#0F172A] py-20 lg:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold text-[#E8630A] tracking-[0.2em] uppercase mb-3">
            Proven Impact
          </p>
          <h2
            className={`font-serif text-[34px] sm:text-[42px] text-white leading-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Results That Speak for Themselves
          </h2>
          <p className="text-[15px] text-white/50 mt-3 max-w-xl mx-auto leading-relaxed">
            Real numbers from real projects — not vanity metrics.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
          {METRICS.map(({ stat, label, context }, i) => (
            <div
              key={label}
              className={`bg-[#0F172A] p-8 hover:bg-[#1a2540] transition-colors duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms`, transition: "opacity 0.6s ease, transform 0.6s ease, background-color 0.3s ease" }}
            >
              <div className="font-serif text-[52px] lg:text-[60px] text-[#E8630A] leading-none mb-2">
                {stat}
              </div>
              <div className="text-[14px] font-bold text-white mb-3">{label}</div>
              <div className="text-[12px] text-white/40 leading-[20px]">{context}</div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[12px] text-white/30 mt-6">
          Metrics sourced from delivered client projects.
        </p>
      </div>
    </section>
  );
};

export default Results;
