import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

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
      <div className="bg-[#383838] text-white p-3 py-5 font-semibold text-lg">
        <div className="flex flex-row space-x-12 justify-end mr-32">
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
      </div>
    </div>
  );
};

export default Navbar;
