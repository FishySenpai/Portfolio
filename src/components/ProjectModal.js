import React, {useState, useRef} from "react";
import useOutsideClick from "./useOutsideClick";
import arrowLeft from "./Assets/arrowLeft.png";
import arrowRight from "./Assets/arrowRight.png";
const ProjectModal = ({ project, showModal, setShowModal }) => {
  const [index, setIndex] = useState(0);
  const [thumbnail, setThumbnail] = useState(project?.images[0]);
  const projectModalRef = useRef(null);
   const handleImageBack = () => {
     if (index > 0) {
       setIndex((prevIndex) => prevIndex - 1);
       console.log(index);
     } else {
       setIndex(3);
       console.log(index);
     }
   };

   const handleImageForward = () => {
     if (index < 3) {
       setIndex((prevIndex) => prevIndex + 1);
       console.log(index);
     } else {
       setIndex(0);
       console.log(index);
     }
   };

   useOutsideClick(projectModalRef, () => {
     console.log(showModal);
     setShowModal(false);
   });

if(project){
  return (
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
                src={project.images[index]}
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