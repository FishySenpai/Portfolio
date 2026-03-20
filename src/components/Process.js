import React, { useRef, useState, useEffect } from "react";

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc:  "We start with a call to understand your goals, timeline, and budget. I ask the right questions to scope the project clearly — no surprises later.",
  },
  {
    num: "02",
    title: "Design & Build",
    desc:  "I design and develop your product with regular check-ins. You see real progress every step of the way, not just promises.",
  },
  {
    num: "03",
    title: "Launch & Support",
    desc:  "Once you're happy, we ship. I handle deployment, testing, and provide post-launch support to make sure everything runs smoothly.",
  },
];

const Process = () => {
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
    <section id="process" className="py-24 lg:py-32 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] font-bold text-[#E8630A] tracking-[0.2em] uppercase mb-3">
            How It Works
          </p>
          <h2
            className={`font-serif text-[38px] sm:text-[46px] leading-tight text-[#111111] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Simple, Transparent Process
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 relative">
          {/* Connector line behind cards */}
          <div className="hidden md:block absolute top-8 left-[calc(33.33%+8px)] right-[calc(33.33%+8px)] h-px bg-[#E5E2DB]" />

          {STEPS.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Step number */}
              <div className="relative mb-5">
                <div className="h-16 w-16 bg-[#FFF4EE] border-2 border-[#FDDFC8] rounded-full flex items-center justify-center">
                  <span className="font-serif text-[20px] text-[#E8630A] font-bold">
                    {num}
                  </span>
                </div>
              </div>

              <h3 className="text-[20px] font-bold text-[#111111] mb-3">{title}</h3>
              <p className="text-[14px] leading-[25px] text-[#666666]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
