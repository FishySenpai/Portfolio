import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const skills = [
    ["HTML", "CSS", "TailwindCss", "Bootstrap"],
    ["JavaScript", "Reactjs", "Firebase", "Nodejs"],
    ["MySql", "Postgresql", "Git", "GitHub"],
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
      className=" text-neutral-200 flex flex-col  pb-36 "
      ref={aboutRef}
    >
      <div className="pt-16 mx-auto mt-36 pb-5">
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
      </div>
      <div className={`flex flex-row mt-10 `}>
        <div
          className={`text-lg secondary-color w-[600px] ml-96 transition-transform duration-1000 ease-out delay-150 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <p>
            As a dedicated{" "}
            <strong className="text-neutral-200">Full Stack Developer</strong>,
            I specialize in creating robust and user-friendly websites and web
            applications by seamlessly integrating both frontend and backend
            technologies. My expertise extends from crafting engaging user
            interfaces to architecting and optimizing scalable server-side
            solutions. The
            <strong className="text-neutral-200"> Projects</strong> section
            showcases some of my notable achievements, providing a glimpse into
            the comprehensive skill set I bring to every project.
          </p>
          <br />
          <p>
            Beyond the code, I am committed to fostering knowledge-sharing
            within the dynamic developer community. Connect with me on
            <a href="#" className="underline text-purple-300">
              {" "}
              LinkedIn
            </a>
            , where I consistently share content spanning a wide array of topics
            related to{" "}
            <strong className="text-neutral-200">
              Full Stack Development
            </strong>{" "}
            and Programming.
          </p>
          <br />
          <p>
            Actively seeking new opportunities, I am enthusiastic about roles
            that allow me to contribute holistically, continuously learn, and
            foster personal and professional growth. If you have an exciting
            opportunity that aligns with my skills and experiences, don't
            hesitate to <strong className="text-neutral-200">contact</strong>{" "}
            me. Let's collaborate and create something extraordinary together!
          </p>
        </div>
        <div
          className={`flex flex-col ml-40 text-lg space-y-12 text-neutral-200 transition-transform duration-1000 ease-out delay-150 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <div className="text-2xl font-bold">Skills</div>
          {skills.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row space-x-5">
              {row.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="px-4 py-3 bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 shadow-md shadow-neutral-950 text-neutral-200 w-fit"
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
