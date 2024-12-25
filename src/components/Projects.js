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
import skyclarity_2 from "./Assets/skyclarity/skyclarity_2.png";
import skyclarity_3 from "./Assets/skyclarity/skyclarity_3.png";
import skyclarity_4 from "./Assets/skyclarity/skyclarity_4.png";
import skyclarity_5 from "./Assets/skyclarity/skyclarity_5.png";
import weatherapp_2 from "./Assets/weatherapp/weatherapp.png";
import weatherapp_3 from "./Assets/weatherapp/weatherapp_3.png";
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
      imageUrl: "skyClarity.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "SkyClarity",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
      images: [skyclarity_2, skyclarity_3, skyclarity_4, skyclarity_5],
    },
    {
      id: 4,
      imageUrl: "weatherApp.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "WeatherApp",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
      images: [weatherapp_2, weatherapp_3],
    },
  ];
  const [visibleProjects, setVisibleProjects] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [timeOut, setTimeOut] = useState(false);
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

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    if (window.innerWidth < 720) {
      console.log("Test");
      // Add 1-second delay for small screens
      setTimeout(() => {
        setSelectedProject(project);
        setShowModal(true); // Show modal only after timeout
        console.log("Test");
      }, 1000);
    } else {
      console.log("Test");
      // Immediately execute for larger screens
      setSelectedProject(project);
      setShowModal(true);
    }
  };

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = (index) => {
    setHoveredIndex(null);
  };

  return (
    <div id="projects" className="flex flex-col" ref={projectsRef}>
      <div className="pt-16 mx-auto  pb-5 ">
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
        className={`mx-2 4sm:mx-auto pr-5 pb-8 max-w-[1160px] text-center text-[17px] leading-[28px] 1sm:text-lg secondary-color transition ease-in-out delay-200 ${
          isVisible
            ? "translate-y-0 opacity-100 duration-[1s]"
            : "translate-y-10 opacity-0 duration-[1s]"
        }`}
      >
        From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and
        Node.JS. Check out my latest web software development portfolio
        projects.
      </div>

      <div className="mx-auto max-w-[1250px]">
        <div className=" grid grid-cols-1 1md:grid-cols-2  justify-center ">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={` transition-opacity duration-[0.7s] transform ${
                index < visibleProjects
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div
                className="relative group m-4"
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={() => handleMouseOut(index)}
                onClick={() => handleProjectClick(project)}
              >
                <div className="bg-[#DDDDDD] flex justify-between z-30 py-0.5 w-[100%]  2sm:w-[450px] sm:w-[450px]  1md:w-[400px]  lg:w-[450px]  xl:w-[550px] ">
                  <img src={titleBar} alt="" className="" />

                  <div className="flex items-center justify-center w-full h-full mr-12">
                    <div className="text-gray-700 font-sans font-[750] text-[14px]  uppercase">
                      {project.projectName}
                    </div>
                  </div>
                </div>
                <div className="group mw-[100%] h-[240px] 2sm:w-[450px] 2sm:h-[280px]  1md:w-[400px] 1md:h-[260px] lg:w-[450px]  lg:h-[280px] xl:w-[550px] xl:h-[310px] rounded-sm overflow-hidden">
                  <div
                    className={` w-[100%] h-[240px] 2sm:w-[450px] 2sm:h-[280px]  lg:w-[450px] 1md:w-[400px] 1md:h-[260px]  lg:h-[280px] xl:w-[550px] xl:h-[310px] relative overflow-hidden`}
                  >
                    <img
                      className={`w-[100%] h-[240px] 2sm:w-[450px] 2sm:h-[280px]  lg:w-[450px] 1md:w-[400px] 1md:h-[260px]  lg:h-[280px] xl:w-[550px] xl:h-[310px] rounded-sm  ${
                        hoveredIndex === index ? "" : ""
                      }`}
                      src={project.imageUrl}
                      alt="Image description"
                    />
                    <div
                      className={`absolute inset-0 z-10  overflow-hidden w-[100%] h-[240px] 2sm:w-[450px] 2sm:h-[280px]  1md:w-[400px] 1md:h-[260px]  lg:w-[450px] lg:h-[280px] xl:w-[550px] xl:h-[310px] ${
                        hoveredIndex === index
                          ? "bg-neutral-900 bg-opacity-80 absolute top-0 duration-300"
                          : "bg-neutral-900 bg-opacity-80 absolute -top-[330px] duration-300  "
                      }`}
                    >
                      {" "}
                    </div>
                    <img
                      className={`w-[100%] h-[240px] 2sm:w-[450px] 2sm:h-[280px]  lg:w-[450px] 1md:w-[400px] 1md:h-[260px]  lg:h-[280px] xl:w-[550px] xl:h-[310px] z-0 rounded-sm overflow-hidden   ${
                        hoveredIndex === index
                          ? "absolute top-0 duration-300"
                          : "absolute -top-[330px] duration-300  "
                      }`}
                      src={project?.images[0]}
                      alt="Image description"
                    />
                  </div>
                  <button className="hidden group-hover:block z-20 cursor-pointer absolute top-0 left-0 right-0 bottom-0 w-[100%] 2sm:w-[450px]   lg:w-[450px] 1md:w-[400px] xl:w-[550px] rounded-sm">
                    <div className="flex flex-col items-center justify-center h-full">
                      <ul className="flex flex-wrap items-center justify-center w-[100%] 2sm:w-[450px]   lg:w-[450px] 1md:w-[400px] xl:w-[550px] text-[16px] text-slate-200 tag-list py-8 2sm:py-12 1md:py-10 lg:py-14 xl:py-24">
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
          {showModal ? (
            <ProjectModal
              project={selectedProject}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
