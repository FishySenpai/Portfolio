import React, { useRef, useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";
import attirenova_2 from "./Assets/attirenova/attirenova_2.png";
import attirenova_3 from "./Assets/attirenova/attirenova_3.png";
import attirenova_4 from "./Assets/attirenova/attirenova_4.png";
import attirenova_5 from "./Assets/attirenova/attirenova_5.png";
import reactwind_2 from "./Assets/react-wind/reactwind_2.png";
import reactwind_3 from "./Assets/react-wind/reactwind_3.png";
import reactwind_4 from "./Assets/react-wind/reactwind_4.png";
import reactwind_5 from "./Assets/react-wind/reactwind_5.png";
import titleBar from "./Assets/titleBar.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      imageUrl: "attirenova.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "AttireNova",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
      images: [attirenova_2, attirenova_3, attirenova_4, attirenova_5],
    },
    {
      id: 2,
      imageUrl: "react-wind.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "React-wind",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
      images: [reactwind_2, reactwind_3, reactwind_4, reactwind_5],
    },
    {
      id: 3,
      imageUrl: "weatherApp.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "WeatherApp",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
      images: [attirenova_2, attirenova_3, attirenova_4, attirenova_5],
    },
    {
      id: 4,
      imageUrl: "skyClarity.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "SkyClarity",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
      images: [attirenova_2, attirenova_3, attirenova_4, attirenova_5],
    },
  ];
  const [visibleProjects, setVisibleProjects] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      // Reveal one project at a time with 500ms delay between each
      const interval = setInterval(() => {
        setVisibleProjects((prev) =>
          prev < projects.length ? prev + 1 : prev
        );
      }, 400);

      // Cleanup the interval on unmount
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.4 } // Trigger when 50% of the section is visible
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.disconnect(); // Ensure the observer is disconnected on cleanup
      }
    };
  }, []);

  const [hoveredStates, setHoveredStates] = useState(
    Array(projects.length).fill(false)
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleMouseOver = (index) => {
    const updatedHoveredStates = [...hoveredStates];
    updatedHoveredStates[index] = true;
    setHoveredStates(updatedHoveredStates);
  };

  const handleMouseOut = (index) => {
    const updatedHoveredStates = [...hoveredStates];
    updatedHoveredStates[index] = false;
    setHoveredStates(updatedHoveredStates);
  };

  return (
    <div id="projects" className="flex flex-col" ref={projectsRef}>
      <div className="pt-16 mx-auto  pb-5">
        <div
          className={`text-[40px] text-neutral-300 transition-transform duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-40 opacity-0"
          }`}
        >
          Projects
        </div>
        <div
          className={`w-32 h-[3px] bg-orange-600 mx-auto mt-1 transition-transform duration-[0.7s] ease-out delay-150 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
          }`}
        ></div>
      </div>
      <div
        className={`mx-auto pr-5 pb-8 max-w-[1160px] text-center secondary-color transition-transform duration-[0.2s] ease-out delay-200  ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and
        Node.JS. Check out my latest web software development portfolio
        projects.
      </div>
      <div className="mx-auto max-w-[1250px]">
        <div className=" grid grid-cols-1 1md:grid-cols-2 justify-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={` transition-opacity duration-[0.5s] transform ${
                index < visibleProjects
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative group mb-8 1md:mr-10 ">
                <div className="bg-[#DDDDDD] flex justify-between z-30 py-0.5 w-[96%]  2sm:w-[450px] sm:w-[450px]  1md:w-[400px]  lg:w-[450px]  xl:w-[550px] ">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 841.9 595.3"
                      className="h-6 w-6"
                    >
                      <g fill="#61DAFB">
                        <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
                        <circle cx="420.9" cy="296.5" r="45.7" />
                        <path d="M520.5 78.1z" />
                      </g>
                    </svg>
                    <div className="text-gray-700 font-sans font-[750] text-[14px]  uppercase">
                      {project.projectName}
                    </div>
                  </div>
                  <img src={titleBar} alt="" className="" />
                </div>
                <div
                  className="group w-[120%] h-[240px] 2sm:w-[450px] 2sm:h-[280px] sm:w-[550px] sm:h-[310px] 1md:w-[400px] 1md:h-[260px] lg:w-[450px]  lg:h-[280px] xl:w-[550px] xl:h-[310px] rounded-sm overflow-hidden"
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={() => handleMouseOut(index)}
                  onClick={() => handleProjectClick(project)}
                >
                  <a
                    href="https://attirenova.netlify.app/"
                    target="_blank"
                    className={` w-[80%] h-[240px] 2sm:w-[450px] 2sm:h-[280px]  lg:w-[450px] 1md:w-[400px] 1md:h-[260px]  lg:h-[280px] xl:w-[550px] xl:h-[310px]] relative overflow-hidden`}
                  >
                    <img
                      className={`w-[80%] h-[240px] 2sm:w-[450px] 2sm:h-[280px]  lg:w-[450px] 1md:w-[400px] 1md:h-[260px]  lg:h-[280px] xl:w-[550px] xl:h-[310px] rounded-sm  ${
                        hoveredStates[index] ? "" : ""
                      }`}
                      src={project.imageUrl}
                      alt="Image description"
                    />
                    <div
                      className={`absolute inset-0 z-10  overflow-hidden w-[80%] h-[240px] 2sm:w-[450px] 2sm:h-[280px]  1md:w-[400px] 1md:h-[260px]  lg:w-[450px] lg:h-[280px] xl:w-[550px] xl:h-[310px] ${
                        hoveredStates[index]
                          ? "bg-neutral-900 bg-opacity-80 absolute top-0 duration-300"
                          : "bg-neutral-900 bg-opacity-80 absolute -top-[330px] duration-300  "
                      }`}
                    >
                      {" "}
                    </div>
                    <img
                      className={`w-[80%] h-[240px] 2sm:w-[450px] 2sm:h-[280px]  lg:w-[450px] 1md:w-[400px] 1md:h-[260px]  lg:h-[280px] xl:w-[550px] xl:h-[310px] z-0 rounded-sm overflow-hidden   ${
                        hoveredStates[index]
                          ? "absolute top-0 duration-300"
                          : "absolute -top-[330px] duration-300  "
                      }`}
                      src={project?.images[0]}
                      alt="Image description"
                    />
                  </a>
                  <button
                    onClick={() => setShowModal(true)}
                    className="hidden group-hover:block z-20 cursor-pointer absolute top-0 left-0 right-0 bottom-0 w-[80%] 2sm:w-[450px]   lg:w-[450px] 1md:w-[400px] xl:w-[550px] rounded-sm"
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <ul className="flex flex-wrap items-center justify-center w-[400px] 2sm:w-[450px]   lg:w-[450px] 1md:w-[400px] xl:w-[550px] text-[16px] text-slate-200 tag-list py-8 2sm:py-12 1md:py-10 lg:py-14 xl:py-24">
                        {project.technologies.map((tech, index) => (
                          <li key={index} className="tag-animation mr-5 mt-5">
                            <div className="px-3 py-2 bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 shadow-md shadow-neutral-950 text-neutral-200 w-fit">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="details-animation text-[16px] mr-5 text-slate-200  ">
                        <div className="px-3 py-2 bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 shadow-md shadow-neutral-950 text-neutral-200 w-fit">
                          details..
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <ProjectModal
            project={selectedProject}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
