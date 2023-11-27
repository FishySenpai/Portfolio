import React, { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import arrowLeft from "./Assets/arrowLeft.png"
import arrowRight from "./Assets/arrowRight.png"
import attirenova_2 from "./Assets/attirenova/attirenova_2.png";
import attirenova_3 from "./Assets/attirenova/attirenova_3.png";
import attirenova_4 from "./Assets/attirenova/attirenova_4.png";
import attirenova_5 from "./Assets/attirenova/attirenova_5.png";
const Projects = () => {
  const [isHovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

    const [index, setIndex] = useState(0);
  const projectModalRef = useRef(null);
  const projectImages = {
    images: [attirenova_2, attirenova_3, attirenova_4, attirenova_5],
  };
  const [thumbnail, setThumbnail] = useState(projectImages?.images[0]);
  const handleImageBack = () => {

      if (index > 0) {
        setIndex((prevIndex) => prevIndex - 1);
        setThumbnail(projectImages.images[index - 1]);
        console.log(index);
      } else {
        setIndex(3);
        setThumbnail(projectImages?.images[3]);
      }
    }
  const handleImageForward = () => {

      if (index < 3) {
        setIndex((prevIndex) => prevIndex + 1);
        setThumbnail(projectImages?.images[index + 1]);
        console.log(index);
      } else {
        setIndex(0);
        setThumbnail(projectImages.images[0]);
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
          <div>
            <div className="relative group mb-10">
              <div
                className="group w-[450px] h-[330px] rounded-lg"
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
              >
                <a href="https://attirenova.netlify.app/" target="_blank">
                  <img
                    className="w-full h-full rounded-lg"
                    src={isHovered ? attirenova_2 : "attirenova.png"}
                    alt="Image description"
                  />
                </a>
                <button
                  onClick={() => setShowModal(true)}
                  className="hidden group-hover:block cursor-pointer absolute top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-75 rounded-lg w-[450px]"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <ul className="flex flex-row space-x-5 font-bold text-[13px] text-slate-200 tag-list pt-28 pb-24">
                      <li className="tag-animation">
                        <div className="px-3 py-2 bg-slate-800 rounded shadow-md shadow-slate-950 w-fit">
                          HTML
                        </div>
                      </li>
                      <li className="tag-animation">
                        <div className="px-3 py-2 bg-slate-800 rounded shadow-md shadow-slate-950 w-fit">
                          TAILWINDCSS
                        </div>
                      </li>
                      <li className="tag-animation">
                        <div className="px-3 py-2 bg-slate-800 rounded shadow-md shadow-slate-950 w-fit">
                          REACTJS
                        </div>
                      </li>
                      <li className="tag-animation">
                        <div className="px-3 py-2 bg-slate-800 rounded shadow-md shadow-slate-950 w-fit">
                          FIREBASE
                        </div>
                      </li>
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

                    <img
                      className="w-[700px] h-[350px]"
                      src={thumbnail}
                      alt="image"
                    />
                    <button onClick={handleImageForward}>
                      <img
                        src={arrowRight}
                        className="absolute top-[170px] -right-8  sm:right-[110px] md:right-[110px]  lg:-right-8 w-[90px] h-[90px]"
                      />
                    </button>
                  </div>
                  <div class="px-4">
                    <h3 class="md:text-2xl text-base text-gray-200 font-bold text-left">
                      AttireNova
                    </h3>
                    <p class="text-gray-300 my-2">
                      Discover a curated collection of the latest fashion
                      trends, blending comfort and elegance seamlessly. From
                      casual chic to glamorous evening wear, our diverse range
                      caters to every individual.
                    </p>
                    <h3 class="md:text-2xl text-base text-gray-200 font-bold text-left">
                      Technologies
                    </h3>

                    <ul className="text-gray-300 ">
                      <li>Html</li>
                      <li>Css</li>
                      <li>Reactjs</li>
                      <li>Firebase</li>
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

          <div className="relative group mb-10">
            <img
              className="w-[450px] h-[330px] rounded-lg"
              src="react-wind.png"
              alt="Image description"
            />
            <div className="hidden group-hover:block cursor-pointer absolute top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-75 rounded-lg w-[450px]">
              <div className="flex flex-col items-center justify-center h-full">
                <ul className="flex flex-row space-x-5 font-bold text-[13px] text-slate-200 tag-list pt-28 pb-24">
                  <li className="tag-animation">
                    <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                      HTML
                    </div>
                  </li>
                  <li className="tag-animation">
                    <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                      TAILWINDCSS
                    </div>
                  </li>
                  <li className="tag-animation">
                    <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                      REACTJS
                    </div>
                  </li>
                  <li className="tag-animation">
                    <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                      FIREBASE
                    </div>
                  </li>
                </ul>
                <div className="more-animation font-bold text-[13px] text-slate-200 ">
                  <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                    details..
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group mb-10">
            <a href="https://attirenova.netlify.app/" target="_blank">
              <img
                className="w-[450px] h-[330px] rounded-lg"
                src="voice-ai.png"
                alt="Image description"
              />
            </a>
            <div className="hidden group-hover:block cursor-pointer absolute top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-75 rounded-lg w-[450px]">
              <div className="flex flex-col items-center justify-center h-full">
                <ul className="flex flex-row space-x-5 font-bold text-[13px] text-slate-200 tag-list pt-28 pb-24">
                  <li className="tag-animation">
                    <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                      HTML
                    </div>
                  </li>
                  <li className="tag-animation">
                    <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                      TAILWINDCSS
                    </div>
                  </li>
                  <li className="tag-animation">
                    <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                      REACTJS
                    </div>
                  </li>
                  <li className="tag-animation">
                    <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                      FIREBASE
                    </div>
                  </li>
                </ul>
                <div className="more-animation font-bold text-[13px] text-slate-200 ">
                  <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                    details..
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group mb-10">
            <a href="https://attirenova.netlify.app/" target="_blank">
              <img
                className="w-[450px] h-[330px] rounded-lg"
                src="doggo.png"
                alt="Image description"
              />
            </a>
            <div className="hidden group-hover:block cursor-pointer absolute top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-75 rounded-lg w-[450px]">
              <div className="flex flex-col items-center justify-center h-full">
                <ul className="flex flex-row space-x-5 font-bold text-[13px] text-slate-200 tag-list pt-28 pb-24">
                  <li className="tag-animation">
                    <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                      HTML
                    </div>
                  </li>
                  <li className="tag-animation">
                    <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                      TAILWINDCSS
                    </div>
                  </li>
                  <li className="tag-animation">
                    <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                      REACTJS
                    </div>
                  </li>
                  <li className="tag-animation">
                    <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                      FIREBASE
                    </div>
                  </li>
                </ul>
                <div className="more-animation font-bold text-[13px] text-slate-200 ">
                  <div className="px-3 py-2 bg-slate-800 rounded w-fit">
                    details..
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
