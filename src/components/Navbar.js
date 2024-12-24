import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollToSection = (sectionId) => {
    setActiveLink(sectionId);
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const sections = ["home", "about", "projects", "contact"];
    let currentSection = "home";
    const buffer = 100; // Add a buffer of 100px to make the transition smoother

    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop - buffer; // Adjust for navbar height and buffer
        const sectionBottom =
          sectionElement.offsetTop + sectionElement.offsetHeight - buffer;
        const scrollPos = window.pageYOffset;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          currentSection = sectionId;
        }
      }
    });

    setActiveLink(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#383838] text-white  py-5 font-semibold text-lg flex flex-row justify-between">
        <div className=" h-[30px] text-md flex ml-[2%] 1md:ml-[5%] lg:ml-[10%]">
          <img src="logo3.png" alt="" className=" h-[30px] mt-0.5 w-full " />
          <img src="logo4.png" alt="" className=" h-[35px]  w-full " />
          {/* <p>NOMANBASIT</p> */}
        </div>
        <div className="hidden 1sm:flex flex-row space-x-6 2sm:space-x-14 2sm:justify-end mr-10 1md:mr-20 lg:mr-28 ">
          <NavLink
            to="/"
            onClick={() => scrollToSection("home")}
            className={`${
              activeLink === "home"
                ? "text-white after:bg-orange-600 after:scale-x-100"
                : "text-gray-200 after:bg-orange-600 after:scale-x-0 hover:after:scale-x-100"
            } relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:w-full after:left-0 after:-bottom-[3px] after:transition after:duration-300 after:origin-center`}
          >
            <div className="flex">
              <span>Home</span>
            </div>
          </NavLink>
          <NavLink
            to="/"
            onClick={() => scrollToSection("about")}
            className={`${
              activeLink === "about"
                ? "text-white after:bg-orange-600 after:scale-x-100"
                : "text-gray-200 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100"
            } relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:w-full after:left-0 after:-bottom-[3px] after:transition after:duration-300 after:origin-center`}
          >
            <div className="flex">
              <span>About</span>
            </div>
          </NavLink>
          <NavLink
            to="/"
            onClick={() => scrollToSection("projects")}
            className={`${
              activeLink === "projects"
                ? "text-white after:bg-orange-600 after:scale-x-100"
                : "text-gray-200 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100"
            } relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:w-full after:left-0 after:-bottom-[3px] after:transition after:duration-300 after:origin-center`}
          >
            <div className="flex">
              <span>Projects</span>
            </div>
          </NavLink>
          <NavLink
            to="/"
            onClick={() => scrollToSection("contact")}
            className={`${
              activeLink === "contact"
                ? "text-white after:bg-orange-600 after:scale-x-100"
                : "text-gray-200 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100"
            } relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:w-full after:left-0 after:-bottom-[3px] after:transition after:duration-300 after:origin-center`}
          >
            <div className="flex">
              <span>Contact</span>
            </div>
          </NavLink>
        </div>
        <div className="relative 1sm:hidden text-black pr-2">
          {/* Hamburger/X Icon */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
          >
            <div
              className={`h-1 w-8 bg-[#FEFFFD] transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-8 bg-[#FEFFFD] transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`h-1 w-8 bg-[#FEFFFD] transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>
      <div
        className={`relative overflow-hidden w-full ${
          isOpen ? "h-screen" : "h-[0px] duration-300"
        }`}
      >
        {/* Dropdown Menu */}
        <div
          className={`absolute right-0 h-full  bg-[#383838] text-neutral-400 p-3 pb-5 font-semibold text-3xl text-center border-t-2 border-neutral-800 w-full transform transition-all  duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-44 opacity-0"
          }`}
        >
          <ul className="py-2 flex flex-col items-center">
            <NavLink
              className={`w-[75%] hover:w-[100%] my-14 ${
                activeLink === "home" ? "text-white" : ""
              } `}
              to="/"
              onClick={() => {
                scrollToSection("home");
                setIsOpen(false);
              }}
            >
              <div className="">
                <li className="px-4 py-4 hover:bg-neutral-600 hover:text-white cursor-pointer">
                  Home
                </li>
                <div className={` h-[3px] bg-neutral-600 mx-auto `}></div>
              </div>
            </NavLink>
            <NavLink
              className={`w-[75%] hover:w-[100%] my-14 ${
                activeLink === "about" ? "text-white" : ""
              } `}
              to="/"
              onClick={() => {
                scrollToSection("about");
                setIsOpen(false);
              }}
            >
              <div className="">
                <li className="px-4 py-4 hover:bg-neutral-600 hover:text-white cursor-pointer">
                  About
                </li>
                <div className={` h-[3px] bg-neutral-600 mx-auto `}></div>
              </div>
            </NavLink>
            <NavLink
              className={`w-[75%] hover:w-[100%]  my-14  ${
                activeLink === "projects" ? "text-white" : ""
              } `}
              to="/"
              onClick={() => {
                scrollToSection("projects");
                setIsOpen(false);
              }}
            >
              <div className=" ">
                <li className="px-4 py-4 hover:bg-neutral-600 hover:text-white cursor-pointer">
                  Projects
                </li>
                <div className={` h-[3px] bg-neutral-600 mx-auto `}></div>
              </div>
            </NavLink>
            <NavLink
              className={`w-[75%] hover:w-[100%] my-14 ${
                activeLink === "contact" ? "text-white" : ""
              } `}
              to="/"
              onClick={() => {
                scrollToSection("contact");
                setIsOpen(false);
              }}
            >
              <div className="">
                <li className="px-4 py-4 hover:bg-neutral-600 hover:text-white cursor-pointer">
                  Contact
                </li>
                <div className={` h-[3px] bg-neutral-600 mx-auto `}></div>
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
