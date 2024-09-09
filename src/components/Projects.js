import React, { useRef, useState } from "react";
import ProjectModal from "./ProjectModal";
import attirenova_2 from "./Assets/attirenova/attirenova_2.png";
import attirenova_3 from "./Assets/attirenova/attirenova_3.png";
import attirenova_4 from "./Assets/attirenova/attirenova_4.png";
import attirenova_5 from "./Assets/attirenova/attirenova_5.png";
import reactwind_2 from "./Assets/react-wind/reactwind_2.png";
import reactwind_3 from "./Assets/react-wind/reactwind_3.png";
import reactwind_4 from "./Assets/react-wind/reactwind_4.png";
import reactwind_5 from "./Assets/react-wind/reactwind_5.png";
const Projects = () => {
  const projects = [
    {
      imageUrl: "attirenova.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "AttireNova",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
      images: [attirenova_2, attirenova_3, attirenova_4, attirenova_5],
    },
    {
      imageUrl: "react-wind.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "React-wind",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
      images: [reactwind_2, reactwind_3, reactwind_4, reactwind_5],
    },
    {
      imageUrl: "doggo.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "Doggo",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
      images: [attirenova_2, attirenova_3, attirenova_4, attirenova_5],
    },
    {
      imageUrl: "voice-ai.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "Voice-ai",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
      images: [attirenova_2, attirenova_3, attirenova_4, attirenova_5],
    },
  ];
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
    <div id="projects" className="flex flex-col">
      <div className="pt-16  mx-auto mt-36 pb-5 text-[50px] text-gray-100">
        Projects
      </div>
      <div className="mx-auto pl-2 pb-8 max-w-[1100px]">
        From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and
        Node.JS. Check out my latest web software development portfolio
        projects. From Web Components and UI/UX animations to React.JS, Redux,
        Vue.JS, and Node.JS. Check out my latest web software development
        portfolio projects.
      </div>
      <div className="mx-auto max-w-[1100px]">
        <div className=" grid grid-cols-2 justify-center">
          {projects.map((project, index) => (
            <div>
              <div className="relative group mb-10 mr-10">
                <div
                  className="group w-[500px] h-[330px] rounded-sm overflow-hidden"
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={() => handleMouseOut(index)}
                  onClick={() => handleProjectClick(project)}
                >
                  <a
                    href="https://attirenova.netlify.app/"
                    target="_blank"
                    className={`w-[500px] h-[330px] relative  `}
                  >
                    <img
                      className={`w-full h-full rounded-sm  ${
                        hoveredStates[index] ? "" : ""
                      }`}
                      src={project.imageUrl}
                      alt="Image description"
                    />
                    <div
                      className={`absolute inset-0 z-10 bg-neutral-900  duration-300 ${
                        hoveredStates[index]
                          ? "bg-opacity-90 "
                          : "bg-opacity-0 "
                      }`}
                    >
                      <img
                        className={`w-full h-full z-0 rounded-sm overflow-hidden   ${
                          hoveredStates[index]
                            ? "absolute top-0 duration-300"
                            : "absolute -top-[330px] duration-300 "
                        }`}
                        src={project?.images[0]}
                        alt="Image description"
                      />
                    </div>
                  </a>
                  <button
                    onClick={() => setShowModal(true)}
                    className="hidden group-hover:block z-20 cursor-pointer absolute top-0 left-0 right-0 bottom-0 bg-neutral-900 bg-opacity-50  rounded-sm w-[500px]"
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <ul className="flex flex-row space-x-5 font-bold text-[16px] text-slate-200 tag-list pt-28 pb-24">
                        {project.technologies.map((tech, index) => (
                          <li key={index} className="tag-animation">
                            <div className="px-4 py-2 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit">
                              {tech}
                              {console.log(tech)}
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="details-animation font-bold text-[16px] text-slate-200 ">
                        <div className="px-4 py-2 bg-[#444444] rounded shadow-md shadow-[#212121] w-fit">
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
