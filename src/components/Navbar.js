import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative ">
      <div className=" bg-gradient-to-r from-slate-600 from-10% via-slate-700 via-30% to-slate-900 to-90% text-white p-3 font-semibold text-md ">
        <div className="flex flex-row space-x-12 justify-center ">
          <div onClick={() => {scrollToSection("home")}}>Home</div>
          <div onClick={() => scrollToSection("about")}>About</div>
          <div onClick={() => scrollToSection("projects")}>Projects</div>
          <div onClick={() => scrollToSection("contact")}>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
