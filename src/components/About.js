import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const skills = [
    [
      "HTML",
      "CSS",
      "TailwindCss",
      "Bootstrap",
      "JavaScript",
      "Reactjs",
      "Firebase",
      "Nodejs",
      "MySql",
      "Postgresql",
      "Git",
      "GitHub",
    ],
  ];
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.3 } // Trigger when 50% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.disconnect(); // Ensure the observer is disconnected on cleanup
      }
    };
  }, []);

  return (
    <div
      id="about"
      className="text-neutral-200 flex flex-col pb-36 "
      ref={aboutRef}
    >
      <div className="pt-16 mx-auto mt-36 pb-5 text-center ">
        <div
          className={`text-[40px] text-neutral-300 transition-transform duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-40 opacity-0"
          }`}
        >
          ABOUT
        </div>
        <div
          className={`w-32 h-[3px] bg-orange-600 mx-auto mt-1 transition-transform duration-1000 ease-out delay-150 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
          }`}
        ></div>
        <div
          className={`mx-2 4sm:mx-auto text-[17px] leading-[28px] 1sm:text-lg pt-5 pr-5 max-w-[1160px] text-center secondary-color transition ease-in-out delay-200  ${
            isVisible
              ? "translate-y-0 opacity-100 duration-[1s]"
              : "translate-y-10 opacity-0 duration-[1s]"
          }`}
        >
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:pl-12 mt-5 mx-auto px-4">
        <div
          className={`text-[17px] leading-[28px] 1sm:text-lg secondary-color w-full lg:w-[50%] xl:w-[580px] transition  ease-in-out delay-200 ${
            isVisible
              ? "translate-x-0 opacity-100 duration-1000"
              : "-translate-x-20 opacity-0 duration-1000"
          }`}
        >
          <div className="text-2xl font-bold mb-5">Get to know me!</div>
          <div className="">
            <p>
              I'm a passionate{" "}
              <strong className="text-neutral-300">Full Stack Developer</strong>
              , focused on building functional and user-friendly websites and
              web apps that blend both frontend and backend technologies. You
              can check out some of my{" "}
              <a
                href="#projects"
                className="text-orange-500 font-[300] leading-relaxed underline scroll-smooth"
              >
                Projects
              </a>{" "}
              on GitHub to see what I've been working on.
            </p>
            <br />
            <p>
              Though I don’t post much, feel free to connect with me on{" "}
              <a
                href="#"
                className="underline text-orange-500 font-[300] leading-relaxed mr-1"
              >
                LinkedIn
              </a>
              I’m always open to chatting about{" "}
              <strong className="text-neutral-300">
                Full Stack Development
              </strong>
              , new tech, and programming.
            </p>
            <br />
            <p>
              Right now, I’m actively looking for new{" "}
              <strong className="text-neutral-300">Job</strong> opportunities
              that let me grow, learn, and make an impact. If you’re hiring or
              have a cool project in mind, I’d love to{" "}
              <strong className="text-orange-500 font-[300] leading-relaxed underline">
                contact
              </strong>{" "}
              with you. Let’s create something awesome together!
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col w-fit mt-10 lg:mt-0 lg:ml-20 xl:ml-24 text-lg space-y-12 text-neutral-200 transition duration-1000 ease-in-out delay-150 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <div className="text-2xl font-bold">Skills</div>
          {skills.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap min-w-[300px] lg:max-w-[488px]"
            >
              {row.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="px-4 py-3 bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 shadow-md shadow-neutral-950 text-neutral-200 w-fit mr-5 mb-10"
                >
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
