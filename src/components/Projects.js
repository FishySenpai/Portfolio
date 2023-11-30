import React, { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import arrowLeft from "./Assets/arrowLeft.png";
import arrowRight from "./Assets/arrowRight.png";
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
      projectName: "AttireNova",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
      images: [reactwind_2, reactwind_3, reactwind_4, reactwind_5],
    },
    {
      imageUrl: "doggo.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "AttireNova",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
      images: [attirenova_2, attirenova_3, attirenova_4, attirenova_5],
    },
    {
      imageUrl: "voice-ai.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "AttireNova",
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

  const [index, setIndex] = useState(0);
  const projectModalRef = useRef(null);

  const projectImages = {
    images: [attirenova_2, attirenova_3, attirenova_4, attirenova_5],
  };
  const [thumbnail, setThumbnail] = useState(projectImages?.images[0]);
  const handleImageBack = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
      console.log(index);
    } else {
      setIndex(3);
    }
  };
  const handleImageForward = () => {
    if (index < 3) {
      setIndex((prevIndex) => prevIndex + 1);
      console.log(index);
    } else {
      setIndex(0);
    }
  };
  useOutsideClick(projectModalRef, () => {
    console.log(showModal);
    setShowModal(false);
  });
  return (
    <div>
      <div className=" ml-96 pl-22 mt-36 pb-10 text-[50px]">Projects</div>
      <div className="mx-auto max-w-[1000px]">
        <div className=" grid grid-cols-2 justify-center">
          {projects.map((project, index) => (
            <div>
              <div className="relative group mb-10">
                <div
                  className="group w-[450px] h-[330px] rounded-lg"
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={() => handleMouseOut(index)}
                >
                  <a href="https://attirenova.netlify.app/" target="_blank">
                    <img
                      className="w-full h-full rounded-lg"
                      src={
                        hoveredStates[index] ? project?.images[0] : project.imageUrl
                      }
                      alt="Image description"
                    />
                  </a>
                  <button
                    onClick={() => setShowModal(true)}
                    className="hidden group-hover:block cursor-pointer absolute top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-75 rounded-lg w-[450px]"
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <ul className="flex flex-row space-x-5 font-bold text-[13px] text-slate-200 tag-list pt-28 pb-24">
                        {project.technologies.map((tech, index) => (
                          <li key={index} className="tag-animation">
                            <div className="px-3 py-2 bg-slate-800 rounded shadow-md shadow-slate-950 w-fit">
                              {tech}
                              {console.log(tech)}
                            </div>
                          </li>
                        ))}
                      </ul>

                      <div className="more-animation font-bold text-[13px] text-slate-200 ">
                        <div className="px-3 py-2 bg-slate-800 rounded shadow-md shadow-slate-950 w-fit">
                          details..
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className={!showModal ? "hidden" : "flex"}>
                <div class="fixed inset-0 pt-[450px] sm:pt-[156px]  h-full  bg-gray-900/50  z-50">
                  <div
                    ref={projectModalRef}
                    class="bg-color  md:mx-auto w-full sm:w-[700px]  shadow-xl rounded"
                  >
                    <div className="relative ">
                      <button onClick={handleImageBack}>
                        <img
                          src={arrowLeft}
                          className="absolute top-[170px] -left-8 w-[90px] h-[90px]"
                        />
                      </button>
                      <div className="flex">
                        <img
                          src={project?.images[1]}
                          className="w-[700px] h-[350px]"
                        />
                      </div>
                      <button onClick={handleImageForward}>
                        <img
                          src={arrowRight}
                          className="absolute top-[170px] -right-8  sm:right-[110px] md:right-[110px]  lg:-right-8 w-[90px] h-[90px]"
                        />
                      </button>
                    </div>
                    <div class="px-4">
                      <h3 class="md:text-2xl text-base text-gray-200 font-bold text-left">
                        {project.projectName}
                      </h3>
                      <p class="text-gray-300 my-2">
                        {project.projectDescription}
                      </p>
                      <h3 class="md:text-2xl text-base text-gray-200 font-bold text-left">
                        Technologies
                      </h3>

                      <ul className="text-gray-300 ">
                        {project.technologies.map((tech, index) => (
                          <li className="">{tech}</li>
                        ))}
                      </ul>
                      <div class="pt-4 pb-4 text-[14px] space-x-4 flex flex-row">
                        <a
                          href="https://attirenova.netlify.app/"
                          target="_blank"
                          class="p-2 flex flex-row bg-gray-800 hover:bg-gray-950 shadow-md shadow-gray-950 text-white font-semibold rounded-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                            className="mt-1 mr-2"
                          >
                            <path
                              d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                              fill="white"
                            />
                          </svg>
                          VIEW SITE
                        </a>
                        <a
                          href="https://github.com/FishySenpai/Ecommerce"
                          target="_blank"
                          class="p-2 bg-gray-800 hover:bg-gray-950 shadow-md shadow-gray-950  text-white font-semibold rounded-sm"
                        >
                          GITHUB
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
