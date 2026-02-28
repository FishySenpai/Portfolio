import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const skills = {
    Languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "NoSQL",
      "HTML",
      "CSS",
    ],
    Frameworks: [
      "React",
      "Next.js",
      "Node.js",
      "TailwindCSS",
      "PyTorch",
      "Keras",
      "TensorFlow",
    ],
    Tools: ["Git", "GitHub", "Docker", "Vercel", "Linux", "Figma", "AWS"],
  };
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
    const [viewport, setViewport] = useState({
      width: typeof window !== "undefined" ? window.innerWidth : 1920,
      height: typeof window !== "undefined" ? window.innerHeight : 1080,
    });
  const [isTallScreen, setIsTallScreen] = useState(window.innerHeight > 800);
  const [isVeryTallScreen, setIsVeryTallScreen] = useState(
    window.innerHeight > 1200,
  );

  useEffect(() => {
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
      setIsTallScreen(window.innerHeight > 800);
      setIsVeryTallScreen(window.innerHeight > 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    let threshold = 0.3;
    if (viewport.width < 600) threshold = 0.15;
    else if (isVeryTallScreen || isTallScreen) threshold = 0.5;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, [viewport.width, isTallScreen, isVeryTallScreen]);
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      id="about"
      className={`text-neutral-200 flex flex-col pb-24 sm:pb-28 lg:pb-32 ${
        isVeryTallScreen ? "pt-28" : isTallScreen ? "pt-24" : "pt-16"
      }`}
      ref={aboutRef}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 pb-8 text-center">
        <div
          className={`text-[34px] sm:text-[38px] text-neutral-300 transition-transform duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-40 opacity-0"
          }`}
        >
          ABOUT
        </div>
        <div
          className={`w-24 sm:w-28 h-[3px] bg-orange-600 mx-auto mt-2 transition-transform duration-1000 ease-out delay-150 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
          }`}
        />
        <div
          className={`mx-auto text-[16px] sm:text-[17px] leading-[26px] sm:leading-[28px] pt-4 max-w-4xl text-center secondary-color transition ease-in-out delay-200 ${
            isVisible
              ? "translate-y-0 opacity-100 duration-[1s]"
              : "translate-y-10 opacity-0 duration-[1s]"
          }`}
        >
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:gap-14 xl:gap-16 lg:grid-cols-2 items-start">
          <div
            className={`text-[16px] sm:text-[17px] leading-[26px] sm:leading-[28px] secondary-color transition ease-in-out delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100 duration-1000"
                : "-translate-x-20 opacity-0 duration-1000"
            }`}
          >
            <div className="text-2xl font-bold mb-5 text-neutral-100">
              Get to know me!
            </div>
            <div>
              <p>
                I’m a{" "}
                <strong className="text-neutral-300">
                  Full Stack Web Developer
                </strong>{" "}
                with <strong>2+ years</strong> building production apps in{" "}
                <strong>React, Next.js, Node.js, and TailwindCSS</strong>. I
                design <strong>scalable backends</strong>, secure auth flows,
                and <strong>real-time features</strong>, then ship them to the
                cloud with a focus on performance and UX.
              </p>
              <br />
              <p>
                Lately I’ve led <strong>AI & Integrations</strong>{" "}
                work—connecting social platform APIs, delivering AI voice
                workflows end-to-end, and wiring up{" "}
                <strong>Make.com automations</strong> to cut manual ops. I enjoy
                pairing thoughtful UX with reliable infra to drive measurable
                gains in <strong>speed</strong> and <strong>usability</strong>.
              </p>
              <br />
              <p>
                I like collaborating with designers and product teams to ship
                fast, measurable improvements—whether that’s shaving seconds off
                load times, tightening accessibility, or refining dashboards for
                better decision-making.
              </p>
              <br />
              <p>
                I’m open to new roles and projects—if you’re hiring or have
                something interesting, feel free to{" "}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-orange-500 font-[300] leading-relaxed underline"
                >
                  contact me
                </button>{" "}
                or connect on{" "}
                <a
                  href="https://www.linkedin.com/in/noman-basit/"
                  target="_blank"
                  className="underline text-orange-500 font-[300] leading-relaxed"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>

          <div
            className={`flex flex-col text-neutral-200 transition duration-1000 ease-in-out delay-150 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="text-2xl font-bold mb-4 text-neutral-100">
              Skills
            </div>
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="mb-6">
                <div className="text-sm text-neutral-300 mb-2">{group}</div>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 shadow-md shadow-neutral-950 text-neutral-200 w-fit"
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
