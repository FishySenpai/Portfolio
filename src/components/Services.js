import React, { useRef, useState, useEffect } from "react";

const SERVICES = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Web Application Development",
    desc:  "Custom, scalable full-stack applications built with React, Next.js, and Node.js. Designed for performance, security, and real business outcomes.",
    tags:  ["React", "Next.js", "Node.js", "TypeScript"],
    turnaround: "4–8 weeks",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Business Websites & Landing Pages",
    desc:  "High-converting websites and landing pages that turn visitors into clients. Fast, SEO-ready, and polished on every device.",
    tags:  ["Next.js", "TailwindCSS", "SEO", "Analytics"],
    turnaround: "1–2 weeks",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    title: "E-Commerce Solutions",
    desc:  "End-to-end shopping experiences with secure payments, inventory management, and checkout flows that convert and scale.",
    tags:  ["Stripe", "Firebase", "Supabase", "React"],
    turnaround: "3–5 weeks",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "AI & Automation",
    desc:  "Integrate AI-powered features, automate manual workflows, and build smart tools that save time and scale your operations.",
    tags:  ["OpenAI", "Make.com", "Python", "APIs"],
    turnaround: "2–4 weeks",
  },
];

const Services = () => {
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

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F2F0EB]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[11px] font-bold text-[#E8630A] tracking-[0.2em] uppercase mb-3">
            What I Do
          </p>
          <div className="reveal-line-wrapper mb-4">
            <h2 className={`reveal-line font-serif text-[38px] sm:text-[46px] leading-tight text-[#111111] ${isVisible ? "visible" : ""}`}>
              Services Tailored to Your Business
            </h2>
          </div>
          <p className="text-[16px] leading-[28px] text-[#666666]">
            From a simple landing page to a complex web platform — I deliver
            high-quality work that moves your business forward.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {SERVICES.map(({ icon, title, desc, tags, turnaround }, i) => (
            <div
              key={title}
              className={`bg-white border border-[#E5E2DB] rounded-xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="h-12 w-12 bg-[#FFF4EE] text-[#E8630A] rounded-lg flex items-center justify-center mb-5">
                {icon}
              </div>
              <h3 className="text-[17px] font-bold text-[#111111] mb-2">{title}</h3>
              <p className="text-[14px] leading-[24px] text-[#666666] mb-5">{desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-[#F2F0EB] text-[#555555] text-[12px] font-medium rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 pt-4 border-t border-[#F0EEE9]">
                <svg className="h-3.5 w-3.5 text-[#E8630A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-[12px] font-semibold text-[#888888]">
                  Typical turnaround: <span className="text-[#E8630A] italic">{turnaround}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[15px] text-[#888888] mb-4">Not sure what you need?</p>
          <button
            onClick={() => scrollTo("contact")}
            className="px-7 py-3 border-2 border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] font-semibold text-[14px] rounded-sm transition-colors duration-200"
          >
            Let's talk it through →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
