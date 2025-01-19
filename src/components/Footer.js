import React from "react";
import { Link } from "react-router-dom";
import gmail from "./Assets/gmail.png";
const Footer = () => {
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      console.log(`Scrolling to section: ${sectionId}`);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.log(`Section not found: ${sectionId}`);
    }
  };
  return (
    <footer className="bg-[#2b2a2a] text-center py-6 relative mt-4 secondary-color ">
      {/* Back to Top Button */}

      <button
        className="text-white text-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#444444] p-3 rounded-sm"
        onClick={() => scrollToSection("home")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-6 w-6"
        >
          <path
            d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"
            fill="white"
          />
        </svg>
      </button>

      <div className="flex flex-col 1lg:flex-row  justify-center py-6 pl-6 md:pl-12">
        <div className="text-left  pr-[50px] pb-4">
          <div className="text-lg pb-4 font-bold">NOMAN BASIT</div>
          <div className="md:w-[700px] text-[15px]">
            A Full Stack Web Developer specializing in crafting responsive and
            user-friendly websites and web applications, ensuring seamless
            functionality and contributing to the overall success of the
            product.
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex flex-col ">
          <div className="text-left text-lg font-bold">SOCIAL</div>
          <div className="flex 1lg:justify-center space-x-4 my-4">
            <a
              href="https://github.com/FishySenpai"
              target="_blank"
              className=" bg-[#444444] h-12 w-12 pl-2 pt-2  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="h-8 w-8 "
              >
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/noman-basit/"
              target="_blank"
              className=" bg-[#444444] h-12 w-12 pl-3 pt-3 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512 "
                className="h-6 w-6 "
              >
                <path
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <p className="text-neutral-400 text-sm">
        Noman Basit ©{new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
