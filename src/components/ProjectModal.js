import React, { useRef, useEffect, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import Slider from "./Slider";

const ProjectModal = ({ project, showModal, setShowModal }) => {
  const projectModalRef = useRef(null);
  const [modalScale, setModalScale] = useState("scale-50 opacity-0");

  useOutsideClick(projectModalRef, () => {
    setShowModal(false);
  });

  useEffect(() => {
    if (showModal) {
      setModalScale("scale-100 opacity-100");
    } else {
      setModalScale("scale-50 opacity-0");
    }
  }, [showModal]);

  if (project) {
    return (
      <div
        className={`fixed inset-0 h-full bg-neutral-800/60 z-50 transition-opacity duration-500  
          ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {/* Modal Content Wrapper */}
        <div
          ref={projectModalRef}
          className={`bg-[#2F2F2F] top-32 sm:top-16 relative md:mx-auto w-full 1sm:w-[700px] shadow-xl rounded transform transition-all duration-500 
            ${modalScale} mx-auto`}
        >
          <div className="border-b-[3px] border-neutral-600 w-full 1sm:w-[700px]">
            <Slider>
              {project?.images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full overflow-hidden"
                />
              ))}
            </Slider>
          </div>
          <div className="px-4 pt-2">
            <h3 className="md:text-xl text-base font-[600] text-neutral-200 text-left">
              {project.projectName}
            </h3>
            <p className="text-[16px] secondary-color">
              {project.projectDescription}
            </p>
            <h3 className="md:text-xl text-base font-[600] text-left my-1 text-neutral-200">
              Technologies
            </h3>
            <ul className="text-[16px] secondary-color">
              <div>Cool Technologies I used to create this project.</div>
              {project.technologies.map((tech, index) => (
                <li className="flex flex-row" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="6"
                    width="6"
                    viewBox="0 0 512 512"
                    className="mt-[10px] mr-2"
                  >
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                      fill="white"
                    />
                  </svg>
                  {tech}
                </li>
              ))}
            </ul>
            <div className="pt-4 pb-4 text-[14px] space-x-4 flex flex-row">
              <a
                href="https://attirenova.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 px-5 flex flex-row bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 shadow-md shadow-neutral-950 text-white font-semibold rounded-sm hover-effect"
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
                rel="noopener noreferrer"
                className="p-2 px-5 bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 shadow-md shadow-neutral-950 text-white font-semibold rounded-sm hover-effect"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default ProjectModal;
