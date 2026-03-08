import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const skills = {
    Languages: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
    Frameworks: ["React", "Next.js", "Node.js", "TailwindCSS", "PyTorch", "TensorFlow"],
    Tools: ["Git", "Docker", "Vercel", "AWS", "Firebase", "Supabase", "Figma"],
  };

  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const threshold = window.innerWidth < 600 ? 0.1 : 0.25;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      id="about"
      className="text-neutral-200 flex flex-col pt-16 pb-24 sm:pb-28 lg:pb-32"
      ref={aboutRef}
    >
      {/* Section header */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 pb-10 text-center">
        <div
          className={`text-[34px] sm:text-[38px] text-neutral-300 transition-transform duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
          }`}
        >
          <span className="font-mono text-orange-500 text-[20px] sm:text-[22px] mr-2 align-middle">01.</span>About
        </div>
        <div
          className={`w-24 sm:w-28 h-[3px] bg-orange-600 mx-auto mt-2 transition-transform duration-1000 ease-out delay-150 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
          }`}
        />
        <div
          className={`mx-auto text-[16px] sm:text-[17px] leading-[28px] pt-4 max-w-2xl secondary-color transition ease-in-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100 duration-[1s]" : "translate-y-10 opacity-0 duration-[1s]"
          }`}
        >
          A little about who I am, what I've built, and the tools I work with every day.
        </div>
      </div>

      {/* Content grid */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">

          {/* Bio column */}
          <div
            className={`transition ease-in-out delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100 duration-1000"
                : "-translate-x-20 opacity-0 duration-1000"
            }`}
          >
            <div className="text-2xl font-bold mb-5 text-neutral-100">
              Get to know me!
              <div className="w-10 h-[2px] bg-orange-600 mt-2" />
            </div>

            <div className="space-y-4 text-[16px] sm:text-[17px] leading-[28px] secondary-color">
              <p>
                I'm a{" "}
                <strong className="text-neutral-300">Full Stack Web Developer</strong>{" "}
                with <strong>2+ years</strong> building production apps using{" "}
                <strong>React, Next.js, Node.js,</strong> and <strong>TailwindCSS</strong>.
                I design scalable backends, secure auth flows, and real-time features —
                then ship them to the cloud with a focus on performance and UX.
              </p>
              <p>
                Lately I've been leading <strong className="text-neutral-300">AI integration</strong>{" "}
                work — connecting social platform APIs, building AI voice workflows end-to-end,
                and automating manual operations with <strong>Make.com</strong>. I enjoy pairing
                thoughtful UX with solid infrastructure to drive measurable improvements.
              </p>
              <p>
                I thrive collaborating with designers and product teams to ship fast, measurable
                results — whether shaving load times, improving accessibility, or refining
                dashboards for better decision-making.
              </p>
            </div>

            {/* Currently card */}
            <div className="mt-6 p-4 bg-[#1e1e1e] border border-neutral-700/60 rounded-sm border-l-2 border-l-orange-600">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[11px] text-neutral-400 tracking-widest uppercase">Currently</span>
              </div>
              <p className="text-[14px] secondary-color leading-[22px]">
                Open to full-time roles and freelance projects. If you're hiring or have
                something interesting, feel free to{" "}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-orange-500 underline"
                >
                  reach out
                </button>
                {" "}or connect on{" "}
                <a
                  href="https://www.linkedin.com/in/noman-basit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-orange-500"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>

          {/* Skills column */}
          <div
            className={`flex flex-col text-neutral-200 transition duration-1000 ease-in-out delay-150 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <div className="text-2xl font-bold mb-6 text-neutral-100">
              Skills
              <div className="w-10 h-[2px] bg-orange-600 mt-2" />
            </div>
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="mb-6">
                <div className="font-mono text-[11px] text-orange-500 mb-3 tracking-widest uppercase">
                  <span className="mr-1 opacity-50">&gt;</span>{group}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 hover:border-b-orange-600 shadow-md shadow-neutral-950 text-neutral-200 text-[14px] w-fit transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
