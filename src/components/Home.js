import React, { useState, useEffect, useRef } from "react";
import gmail from "./Assets/gmail.png";

const TypewriterLine = ({
  text,
  delay = 0,
  speed = 45,
  className = "",
  onDone,
  tag: Tag = "div",
}) => {
  const [count, setCount] = useState(0);
  const [cursorOn, setCursorOn] = useState(false);
  const timers = useRef({ start: null, interval: null, done: null });

  useEffect(() => {
    const timerHandles = timers.current;
    timers.current.start = setTimeout(() => {
      setCursorOn(true);
      let i = 0;
      timers.current.interval = setInterval(() => {
        i++;
        setCount(i);
        if (i >= text.length) {
          clearInterval(timerHandles.interval);
          timers.current.done = setTimeout(() => {
            setCursorOn(false);
            onDone?.();
          }, 80);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timerHandles.start);
      clearInterval(timerHandles.interval);
      clearTimeout(timerHandles.done);
    };
  }, [text, delay, speed, onDone]);

  return (
    <Tag className={className}>
      <span className="whitespace-nowrap">
        {text.slice(0, count)}
        {cursorOn && <span className="hero-cursor h-[0.82em]" />}
      </span>
    </Tag>
  );
};

const stats = [
  { num: "2+", label: "Years Experience" },
  { num: "10+", label: "Projects Built" },
  { num: "15+", label: "Technologies" },
  { num: "100%", label: "Commitment" },
];

const Home = () => {
  const [line1Done, setLine1Done] = useState(false);
  const navOffset = 96;

  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const targetTop =
        targetSection.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto px-8 sm:px-12 lg:px-20 xl:pl-28 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 xl:gap-14">
          {/* Left column */}
          <div className="flex-1 min-w-0">
            {/* Badge + comment */}
            <div className="mb-5 pre-heading">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[11px] text-neutral-400 tracking-widest uppercase">
                  Available for work
                </span>
              </div>
              <p className="font-mono text-[12px] sm:text-[13px] text-neutral-500 tracking-[0.18em]">
                {"// full-stack web developer"}
              </p>
            </div>

            {/* Heading */}
            <div className="mb-5">
              <TypewriterLine
                text="Hello, I'm"
                delay={350}
                speed={45}
                tag="p"
                className="text-[22px] sm:text-[28px] lg:text-[30px] font-light text-neutral-400"
                onDone={() => setLine1Done(true)}
              />

              {line1Done && (
                <TypewriterLine
                  text="Noman Basit."
                  delay={0}
                  speed={42}
                  tag="h1"
                  className="text-[48px] sm:text-[62px] lg:text-[72px] xl:text-[82px] font-bold text-orange-500 leading-none mt-1"
                />
              )}

              <p className="text-[18px] sm:text-[22px] lg:text-[24px] text-neutral-400 font-light mt-4 hero-role">
                I build fast, scalable web experiences.
              </p>
            </div>

            {/* Description */}
            <div className="max-w-lg mb-5 hero-description">
              <p className="text-[16px] sm:text-[17px] leading-[28px] secondary-color">
                Full-stack developer with 2+ years building production apps.
                Focused on React, Node.js, and modern cloud infrastructure - from
                concept to deployment.
              </p>
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mb-7 tech-chips">
              {["React", "Next.js", "Node.js", "TypeScript", "Python"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] text-neutral-400 border border-neutral-700 hover:border-orange-600/50 hover:text-neutral-300 px-3 py-1 tracking-wide transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-row gap-3 hero-cta">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 flex flex-row items-center gap-2 bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-orange-600/60 hover:border-orange-600 shadow-md shadow-neutral-950 text-neutral-200 font-semibold rounded-sm group hover-effect transition-colors duration-200"
              >
                <span className="text-[17px]">View Projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="h-[15px] w-[15px] -rotate-90 transition-transform duration-300 group-hover:rotate-0"
                >
                  <path
                    d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    fill="rgb(229 229 229)"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-transparent border border-orange-600/50 hover:border-orange-500 hover:bg-orange-600/10 text-orange-400 hover:text-orange-300 font-semibold rounded-sm hover-effect transition-colors duration-200"
              >
                <span className="text-[17px]">Contact Me</span>
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
              {stats.map(({ num, label }) => (
                <div
                  key={label}
                  className="bg-[#2e2e2e] border border-neutral-700/60 px-4 py-3 rounded-sm"
                >
                  <div className="text-[24px] font-bold text-orange-500 leading-none">{num}</div>
                  <div className="font-mono text-[10px] text-neutral-400 mt-2 tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - desktop only */}
          <div className="hidden lg:flex flex-col gap-4 w-[320px] xl:w-[360px] shrink-0 hero-right">
            {/* Code card */}
            <div className="bg-[#1a1a1a] border border-neutral-700/60 rounded-lg overflow-hidden shadow-2xl shadow-black/40">
              {/* macOS dots header */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#252525] border-b border-neutral-700/50">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-neutral-500 tracking-wide">
                  developer.js
                </span>
              </div>
              {/* Syntax-highlighted code */}
              <div className="p-5 font-mono text-[12.5px] leading-[27px]">
                <div>
                  <span className="text-[#c792ea]">const </span>
                  <span className="text-[#82aaff]">developer</span>
                  <span className="text-neutral-500"> = </span>
                  <span className="text-[#ffcb6b]">&#123;</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#f78c6c]">name</span>
                  <span className="text-neutral-500">: </span>
                  <span className="text-[#c3e88d]">"Noman Basit"</span>
                  <span className="text-neutral-500">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#f78c6c]">role</span>
                  <span className="text-neutral-500">: </span>
                  <span className="text-[#c3e88d]">"Full-Stack Dev"</span>
                  <span className="text-neutral-500">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#f78c6c]">skills</span>
                  <span className="text-neutral-500">: </span>
                  <span className="text-[#ffcb6b]">[</span>
                </div>
                <div className="pl-10">
                  <span className="text-[#c3e88d]">"React"</span>
                  <span className="text-neutral-500">, </span>
                  <span className="text-[#c3e88d]">"Node.js"</span>
                  <span className="text-neutral-500">,</span>
                </div>
                <div className="pl-10">
                  <span className="text-[#c3e88d]">"Next.js"</span>
                  <span className="text-neutral-500">, </span>
                  <span className="text-[#c3e88d]">"Python"</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#ffcb6b]">]</span>
                  <span className="text-neutral-500">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-[#f78c6c]">available</span>
                  <span className="text-neutral-500">: </span>
                  <span className="text-[#82aaff]">true</span>
                </div>
                <div>
                  <span className="text-[#ffcb6b]">&#125;</span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ num, label }) => (
                <div
                  key={label}
                  className="bg-[#2e2e2e] border border-neutral-700/60 px-4 py-4 rounded-sm hover:border-orange-600/30 transition-colors duration-200"
                >
                  <div className="text-[28px] font-bold text-orange-500 leading-none">{num}</div>
                  <div className="font-mono text-[11px] text-neutral-400 mt-2 tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social sidebar (xl only) */}
      <div className="relative cursor-pointer z-50 hidden xl:block">
        <a
          href="https://github.com/FishySenpai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          className="fixed left-0 top-1/2 -translate-y-[84px] bg-[#4E545A] h-14 w-14 pl-2 pt-2 hover:w-[80px] hover:pl-7 transition-all duration-300 ease-in-out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="h-9 w-9">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="white" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/noman-basit/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          className="fixed left-0 top-1/2 -translate-y-[28px] bg-[#0077BA] h-14 w-14 pl-3 pt-3 hover:w-[80px] hover:pl-7 transition-all duration-300 ease-in-out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8">
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" fill="white" />
          </svg>
        </a>
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          aria-label="Scroll to contact section"
          className="fixed left-0 top-1/2 translate-y-[28px] bg-[#fff] h-14 w-14 pl-2 pt-2 hover:w-[80px] hover:pl-7 transition-all duration-300 ease-in-out"
        >
          <img src={gmail} alt="" className="h-10 w-10" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 scroll-indicator">
        <span className="text-[10px] font-mono text-neutral-500 tracking-[0.2em] uppercase">scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-orange-500/70 animate-bounce"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
};

export default Home;
