import React, { useRef, useState, useEffect } from "react";

// ─── Replace these with real testimonials when available ───────────────────
const TESTIMONIALS = [
  {
    quote:
      "Noman delivered our entire platform in under 3 weeks — ahead of schedule and exactly what we envisioned. The attention to detail on the UI and the performance of the backend were both exceptional. I'd work with him again without hesitation.",
    name:    "Sarah Mitchell",
    role:    "Co-Founder",
    company: "LaunchPad Studio",
    initials: "SM",
    color:   "#E8630A",
  },
  {
    quote:
      "We came in with a rough idea and Noman turned it into a fully functioning product. He asked the right questions up front, which saved us a lot of back-and-forth later. Communicates clearly, delivers fast, knows what he's doing.",
    name:    "James Okonkwo",
    role:    "Product Manager",
    company: "Flowbase",
    initials: "JO",
    color:   "#0F172A",
  },
  {
    quote:
      "I've worked with agencies that cost 5x more and delivered less. Noman built our e-commerce store from scratch, integrated our payment system, and handled the deployment — all in two weeks. Seriously impressive work.",
    name:    "Priya Nair",
    role:    "Founder",
    company: "Kova Collective",
    initials: "PN",
    color:   "#555555",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="h-4 w-4 text-[#E8630A]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold text-[#E8630A] tracking-[0.2em] uppercase mb-3">
            Client Feedback
          </p>
          <h2
            className={`font-serif text-[38px] sm:text-[46px] leading-tight text-[#111111] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            What Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, role, company, initials, color }, i) => (
            <div
              key={name}
              className={`bg-white border border-[#E5E2DB] rounded-xl p-7 flex flex-col transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Stars />

              {/* Quote */}
              <blockquote className="text-[14px] leading-[26px] text-[#444444] flex-1 mb-6">
                "{quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#F0EEE9]">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-white text-[13px] font-bold"
                  style={{ backgroundColor: color }}
                >
                  {initials}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#111111]">{name}</div>
                  <div className="text-[12px] text-[#888888]">{role}, {company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="mt-12 text-center">
          <p className="text-[13px] text-[#AAAAAA]">
            Have a project in mind?{" "}
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
              }}
              className="text-[#E8630A] font-semibold hover:underline"
            >
              Let's talk →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
