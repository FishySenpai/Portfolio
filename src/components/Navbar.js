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
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#444444] text-white p-3 py-6 font-semibold text-lg">
        <div className="flex flex-row space-x-12 justify-end mr-32">
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
