import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <div className="relative ">
      <div className=" bg-gradient-to-r from-slate-600 from-10% via-slate-700 via-30% to-slate-900 to-90% text-white p-3 font-semibold text-md ">
        <div className="flex flex-row space-x-12 justify-center ">
          <Link to="/" onClick={() => scrollToSection("home")}>
            Home
          </Link>
          <Link to="/" onClick={() => scrollToSection("about")}>
            About
          </Link>
          <Link to="/" onClick={() => scrollToSection("projects")}>
            Projects
          </Link>
          <Link to="/" onClick={() => scrollToSection("contact")}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
