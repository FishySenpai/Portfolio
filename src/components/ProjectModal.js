import React, { useState, useEffect, useRef } from "react";
import useOutsideClick from "./useOutsideClick";

import attirenova_2 from "./Assets/attirenova/attirenova_2.png";
import attirenova_3 from "./Assets/attirenova/attirenova_3.png";
import attirenova_4 from "./Assets/attirenova/attirenova_4.png";
import attirenova_5 from "./Assets/attirenova/attirenova_5.png";
import Slider from "./Slider";
const ProjectModal = ({ project, showModal, setShowModal }) => {
  const projectModalRef = useRef(null);


  useOutsideClick(projectModalRef, () => {
    console.log(showModal);
    setShowModal(false);
  });

  if (project) {
    return (
      <div className={!showModal ? "hidden" : "flex"}>
        <div class="fixed inset-0 pt-[450px] sm:pt-[156px]  h-full  bg-gray-900/50  z-50">
          <div
            ref={projectModalRef}
            class="bg-color relative  md:mx-auto w-full sm:w-[700px]  shadow-xl rounded"
          >
            <div>
              <Slider>
                <img
                  src={attirenova_2}
                  alt="nature-1"
                  style={{ width: "100%", height: "100%" }}
                />
                <img
                  src={attirenova_3}
                  alt="nature-2"
                  style={{ width: "100%", height: "100%" }}
                />
                <img
                  src={attirenova_4}
                  alt="nature-3"
                  style={{ width: "100%", height: "100%" }}
                />
                <img
                  src={attirenova_5}
                  alt="nature-3"
                  style={{ width: "100%", height: "100%" }}
                />
              </Slider>
            </div>
            <div class="px-4">
              <h3 class="md:text-2xl text-base text-gray-200 font-bold text-left">
                {project.projectName}
              </h3>
              <p class="text-gray-300 my-2">{project.projectDescription}</p>
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
    );
  }
};
export default ProjectModal;
