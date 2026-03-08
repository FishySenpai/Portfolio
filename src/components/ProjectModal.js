import React, { useRef, useEffect, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import Slider from "./Slider";

const ProjectModal = ({ project, showModal, setShowModal }) => {
  const projectModalRef = useRef(null);
  const [modalScale, setModalScale] = useState("scale-50 opacity-0");
  const [isClosing, setIsClosing] = useState(false);

  useOutsideClick(projectModalRef, () => {
    if (!isClosing) handleClose();
  });

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 400);
  };

  useEffect(() => {
    if (showModal) setModalScale("scale-100 opacity-100");
    else setModalScale("scale-50 opacity-0");
  }, [showModal]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  if (!showModal && !isClosing) return null;
  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 bg-neutral-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-[0.4s] ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        ref={projectModalRef}
        className={`bg-[#2a2a2a] w-full max-w-[680px] max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl transform transition-all duration-[0.4s] ${modalScale} ${
          isClosing ? "scale-95 opacity-0" : ""
        }`}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#222222] border-b border-neutral-700/60 sticky top-0 z-10">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-[11px] text-neutral-400 tracking-wide">
              {project.projectName}
            </span>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-neutral-500 hover:text-neutral-300 transition-colors text-lg leading-none px-1"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Image slider */}
        <div className="border-b border-neutral-700/60">
          <Slider>
            {project.images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${project.projectName} screenshot ${index + 1}`}
                className="w-full object-cover"
              />
            ))}
          </Slider>
        </div>

        {/* Content */}
        <div className="px-5 py-4 space-y-4">
          <h3 className="text-[18px] font-semibold text-neutral-100">
            {project.projectName}
          </h3>

          <p className="text-[15px] leading-[26px] secondary-color">
            {project.projectDescription}
          </p>

          {/* Technologies */}
          <div>
            <div className="font-mono text-[11px] text-orange-500 mb-2 tracking-widest uppercase">
              <span className="mr-1 opacity-50">&gt;</span> Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-[#444444] border-b-2 border-neutral-700 text-neutral-200 text-[13px] font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-1 pb-2 flex-wrap">
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 shadow-md shadow-neutral-950 text-neutral-200 text-[13px] font-mono tracking-wide rounded-sm hover-effect transition-colors duration-150"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 512 512" className="shrink-0">
                  <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" fill="white" />
                </svg>
                VIEW SITE
              </a>
            )}
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#444444] hover:bg-neutral-700 border-b-[3px] border-neutral-800 shadow-md shadow-neutral-950 text-neutral-200 text-[13px] font-mono tracking-wide rounded-sm hover-effect transition-colors duration-150"
              >
                GITHUB
              </a>
            ) : (
              <span className="px-5 py-2 bg-[#333333] border-b-[3px] border-neutral-800 text-neutral-500 text-[13px] font-mono tracking-wide rounded-sm cursor-not-allowed">
                PRIVATE REPO
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
