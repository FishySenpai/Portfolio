import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "Work",     id: "projects" },
  { label: "About",    id: "about"    },
];

const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [isOpen, setIsOpen]         = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "services", "projects", "about", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) current = id;
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-[#E5E2DB] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2.5 group"
        >
          <div className="h-9 w-9 bg-[#E8630A] flex items-center justify-center rounded-sm shrink-0">
            <span className="text-white font-bold text-[13px] tracking-tight select-none">NB</span>
          </div>
          <span className="text-[15px] font-bold text-[#111111] tracking-tight">
            Noman Basit
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-[14px] font-medium transition-colors duration-150 ${
                activeLink === id
                  ? "text-[#E8630A]"
                  : "text-[#555555] hover:text-[#111111]"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2.5 bg-[#111111] hover:bg-[#E8630A] text-white text-[14px] font-semibold rounded-sm transition-colors duration-200 shadow-sm"
          >
            Start a Project
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#111111] transition-transform duration-200 origin-center ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#111111] transition-opacity duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#111111] transition-transform duration-200 origin-center ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#FAFAF8] border-t border-[#E5E2DB] px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-[16px] font-medium text-[#555555] hover:text-[#111111] text-left transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-3 bg-[#111111] text-white text-[14px] font-semibold rounded-sm w-full mt-1"
          >
            Start a Project
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
