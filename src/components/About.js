import React, { useRef, useState, useEffect } from "react";

const SKILLS = [
  "React", "Next.js", "Node.js", "TypeScript", "Python",
  "TailwindCSS", "PostgreSQL", "Firebase", "Supabase",
  "AWS", "Docker", "Vercel", "Figma", "Make.com",
];

const WHY_ME = [
  {
    title: "Business-First Thinking",
    desc:  "I don't just write code — I build solutions with your goals in mind. Every decision is made to move your business forward.",
  },
  {
    title: "Fast, Reliable Delivery",
    desc:  "I respect deadlines. You'll get regular updates, clear timelines, and a product that ships on time.",
  },
  {
    title: "Full Ownership",
    desc:  "From design to deployment, I handle everything. No handoffs, no gaps — one person who owns the whole product.",
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const threshold = window.innerWidth < 600 ? 0.1 : 0.2;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) { setIsVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] font-bold text-[#E8630A] tracking-[0.2em] uppercase mb-3">
            About
          </p>
          <h2
            className={`font-serif text-[38px] sm:text-[46px] leading-tight text-[#111111] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            A Developer Who Thinks Like a Business Owner
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: bio */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-5 text-[16px] leading-[28px] text-[#555555] mb-8">
              <p>
                I'm <strong className="text-[#111111]">Noman Basit</strong>, a
                full-stack web developer with 2+ years of experience building
                production-grade applications for startups and businesses. I
                specialize in React, Next.js, Node.js, and modern cloud
                infrastructure.
              </p>
              <p>
                What sets me apart is that I care about outcomes, not just
                output. I ask the right questions before writing a single line
                of code to make sure we're solving the right problem — and
                building the right product.
              </p>
              <p>
                Recently I've been leading AI integration projects: connecting
                social platform APIs, building end-to-end voice workflows, and
                automating operations with Make.com to drive measurable
                efficiency gains for clients.
              </p>
            </div>

            {/* Why me cards */}
            <div className="space-y-4">
              {WHY_ME.map(({ title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 bg-[#F2F0EB] rounded-xl border border-[#E5E2DB]"
                >
                  <div className="h-5 w-5 rounded-sm bg-[#E8630A] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#111111] mb-1">{title}</div>
                    <div className="text-[13px] text-[#666666] leading-[22px]">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="mt-8 px-7 py-3.5 bg-[#111111] hover:bg-[#E8630A] text-white font-semibold text-[14px] rounded-sm transition-colors duration-200"
            >
              Work With Me →
            </button>
          </div>

          {/* Right: skills */}
          <div
            className={`transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="text-[17px] font-bold text-[#111111] mb-2">Tech Stack</h3>
            <p className="text-[14px] text-[#888888] mb-6">
              Tools and technologies I use to build your product.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 bg-white border border-[#E5E2DB] text-[#333333] text-[13px] font-medium rounded-lg hover:border-[#E8630A] hover:text-[#E8630A] transition-colors duration-150"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Availability card */}
            <div className="p-5 bg-[#FFF4EE] border border-[#FDDFC8] rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[13px] font-bold text-[#111111]">
                  Open to New Projects
                </span>
              </div>
              <p className="text-[13px] text-[#666666] leading-[22px]">
                Currently available for freelance projects and consulting
                engagements.{" "}
                <button
                  onClick={() => scrollTo("contact")}
                  className="text-[#E8630A] font-semibold hover:underline"
                >
                  Let's connect
                </button>{" "}
                or find me on{" "}
                <a
                  href="https://www.linkedin.com/in/noman-basit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E8630A] font-semibold hover:underline"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
