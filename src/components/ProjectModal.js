import React, { useRef, useEffect, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import Slider from "./Slider";

const ProjectModal = ({ project, showModal, setShowModal }) => {
  const modalRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useOutsideClick(modalRef, () => {
    if (!isClosing) handleClose();
  });

  const handleClose = () => {
    setIsClosing(true);
    setVisible(false);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => setVisible(true));
    }
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  if (!showModal && !isClosing) return null;
  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        visible ? "bg-black/50 backdrop-blur-sm" : "bg-black/0"
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-white w-full max-w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl transition-all duration-300 ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0EEE9] sticky top-0 bg-white z-10 rounded-t-2xl">
          <div>
            <span className="text-[11px] font-semibold text-[#E8630A] bg-[#FFF4EE] px-2.5 py-0.5 rounded-sm uppercase tracking-wide">
              {project.category}
            </span>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="h-8 w-8 flex items-center justify-center rounded-full bg-[#F2F0EB] hover:bg-[#E5E2DB] text-[#555555] transition-colors duration-150"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image slider */}
        <div className="bg-[#F2F0EB]">
          <Slider>
            {project.images.map((imgSrc, i) => (
              <img
                key={i}
                src={imgSrc}
                alt={`${project.projectName} screenshot ${i + 1}`}
                className="w-full object-cover"
              />
            ))}
          </Slider>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-5">

          {/* Title + outcome */}
          <div>
            <h3 className="text-[22px] font-bold text-[#111111] mb-2">
              {project.projectName}
            </h3>
            {project.outcome && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFF4EE] border border-[#FDDFC8] rounded-full">
                <svg className="h-3.5 w-3.5 text-[#E8630A]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
                </svg>
                <span className="text-[12px] font-semibold text-[#E8630A]">{project.outcome}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-[15px] leading-[27px] text-[#555555]">
            {project.projectDescription}
          </p>

          {/* Tech stack */}
          <div>
            <p className="text-[11px] font-bold text-[#888888] tracking-[0.15em] uppercase mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-[#F2F0EB] border border-[#E5E2DB] text-[#444444] text-[13px] font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-[#F0EEE9]">
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-[#E8630A] text-white text-[14px] font-semibold rounded-sm transition-colors duration-200"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                View Live Site
              </a>
            )}
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#E5E2DB] hover:border-[#111111] text-[#555555] hover:text-[#111111] text-[14px] font-semibold rounded-sm transition-colors duration-200"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
                </svg>
                View on GitHub
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#F0EEE9] text-[#BBBBBB] text-[14px] font-semibold rounded-sm cursor-not-allowed">
                Private Repository
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
