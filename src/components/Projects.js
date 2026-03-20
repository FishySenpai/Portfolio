import React, { useRef, useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";
import attirenova_2  from "./Assets/attirenova/attirenova_2.png";
import attirenova_3  from "./Assets/attirenova/attirenova_3.png";
import attirenova_4  from "./Assets/attirenova/attirenova_4.png";
import attirenova_5  from "./Assets/attirenova/attirenova_5.png";
import reactwind_2   from "./Assets/react-wind/reactwind_2.png";
import reactwind_3   from "./Assets/react-wind/reactwind_3.png";
import reactwind_4   from "./Assets/react-wind/reactwind_4.png";
import reactwind_5   from "./Assets/react-wind/reactwind_5.png";
import skyclarity_2  from "./Assets/skyclarity/skyclarity_2.png";
import skyclarity_3  from "./Assets/skyclarity/skyclarity_3.png";
import skyclarity_4  from "./Assets/skyclarity/skyclarity_4.png";
import skyclarity_5  from "./Assets/skyclarity/skyclarity_5.png";
import avatar_1      from "./Assets/avatar/avatar_1.PNG";
import avatar_2      from "./Assets/avatar/avatar_2.PNG";
import avatar_3      from "./Assets/avatar/avatar_3.PNG";
import avatar_4      from "./Assets/avatar/avatar_4.PNG";
import wireframe_1   from "./Assets/wireframe/wireframe_1.jpg";
import wireframe_2   from "./Assets/wireframe/wireframe_2.JPG";
import wireframe_3   from "./Assets/wireframe/wireframe_3.JPG";
import wireframe_4   from "./Assets/wireframe/wireframe_4.JPG";
import gitanaylzer_1 from "./Assets/gitanalyzer/gitanalyzer_1.jpg";
import gitanaylzer_2 from "./Assets/gitanalyzer/gitanalyzer_2.JPG";
import gitanaylzer_3 from "./Assets/gitanalyzer/gitanalyzer_3.JPG";
import gitanaylzer_4 from "./Assets/gitanalyzer/gitanalyzer_4.JPG";
import gitanaylzer_5 from "./Assets/gitanalyzer/gitanalyzer_5.JPG";

const projects = [
  {
    id: 1,
    imageUrl: wireframe_1,
    projectLink: "https://wireframe-to-ui-builder.vercel.app/",
    projectName: "Wireframe to UI Builder",
    outcome: "Cut frontend scaffolding time by 70%",
    category: "AI Tool",
    projectDescription:
      "AI tool that converts UI wireframes into responsive React code using YOLOv11 and OCR. Features a drag-and-drop canvas editor with live preview and real-time collaboration (up to 5 users) via Firebase. Node.js backend auto-generates components, reducing frontend scaffolding by 70%.",
    technologies: ["React", "YOLOv11", "OCR", "Firebase", "Node.js"],
    images: [wireframe_2, wireframe_3, wireframe_4],
  },
  {
    id: 2,
    imageUrl: avatar_1,
    projectLink: "https://avatar-social-media-workflow.vercel.app/",
    projectName: "Social Media Avatar Workflow",
    outcome: "Full automation platform with real-time AI analytics",
    category: "Web Platform",
    projectDescription:
      "A modern React + Firebase platform for social media automation, AI-powered feedback, and performance analytics. Features real-time notifications, AI recommendations, and interactive dashboards with seamless authentication.",
    technologies: ["ReactJS", "Firebase", "MUI", "Chart.js", "Framer Motion"],
    images: [avatar_2, avatar_3, avatar_4],
  },
  {
    id: 3,
    imageUrl: attirenova_2,
    projectLink: "https://attirenova.netlify.app/",
    githubLink: "https://github.com/FishySenpai/AttireNova",
    projectName: "AttireNova",
    outcome: "Full e-commerce store built from concept to launch",
    category: "E-Commerce",
    projectDescription:
      "A curated fashion e-commerce platform blending comfort and elegance. Features a full product catalogue, cart system, and seamless checkout experience built with React and Firebase.",
    technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
    images: [attirenova_2, attirenova_3, attirenova_4, attirenova_5],
  },
  {
    id: 4,
    imageUrl: gitanaylzer_1,
    projectLink: "https://git-profile-analyzer.vercel.app/",
    githubLink: "https://github.com/FishySenpai/Github-Profile-Analyzer",
    projectName: "Github Profile Analyzer",
    outcome: "35% faster load times · 1,000+ profiles supported",
    category: "Developer Tool",
    projectDescription:
      "GitHub profile analysis platform supporting 1,000+ developer profiles. Secure authentication via Supabase. Next.js SSR improves SEO and reduces initial load time by 35%.",
    technologies: ["React", "Next.js", "Supabase", "TailwindCSS"],
    images: [gitanaylzer_2, gitanaylzer_3, gitanaylzer_4, gitanaylzer_5],
  },
  {
    id: 5,
    imageUrl: reactwind_2,
    projectLink: "https://react-wind.netlify.app/",
    githubLink: "https://github.com/FishySenpai/React_Wind",
    projectName: "React-Wind",
    outcome: "Real-time discovery app with Firebase-backed user tracking",
    category: "Web App",
    projectDescription:
      "A feature-rich anime discovery hub where users can search shows, discover popular titles, and track upcoming releases. Built with React and Firebase for a fast, interactive experience.",
    technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
    images: [reactwind_2, reactwind_3, reactwind_4, reactwind_5],
  },
  {
    id: 6,
    imageUrl: skyclarity_2,
    projectLink: "https://skyclarity.netlify.app/",
    githubLink: "https://github.com/FishySenpai/SkyClarity",
    projectName: "SkyClarity",
    outcome: "Travel booking platform with live API data integration",
    category: "Travel Platform",
    projectDescription:
      "A seamless travel booking platform for flights, hotels, and rental cars. Built with React and integrated with Rapid API to deliver real-time travel data and a polished booking experience.",
    technologies: ["HTML", "TailwindCSS", "ReactJS", "Rapid API"],
    images: [skyclarity_2, skyclarity_3, skyclarity_4, skyclarity_5],
  },
];

const Projects = () => {
  const [isVisible, setIsVisible]       = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [showModal, setShowModal]       = useState(false);
  const [selected, setSelected]         = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev < projects.length ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#F2F0EB]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] font-bold text-[#E8630A] tracking-[0.2em] uppercase mb-3">
              Selected Work
            </p>
            <h2
              className={`font-serif text-[38px] sm:text-[46px] leading-tight text-[#111111] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Projects That Deliver Results
            </h2>
          </div>
          <p className="text-[15px] text-[#888888] max-w-sm sm:text-right leading-relaxed">
            From full-stack apps and AI tools to e-commerce platforms. Click any
            project for full details.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${
                i < visibleCount ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div
                className="group bg-white border border-[#E5E2DB] rounded-xl overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                onClick={() => { setSelected(project); setShowModal(true); }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video bg-[#F0EEE9]">
                  <img
                    src={project.imageUrl}
                    alt={project.projectName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#111111]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <span className="px-4 py-2 bg-[#E8630A] text-white text-[13px] font-semibold rounded-sm">
                        View Details
                      </span>
                      {project.projectLink && (
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-[13px] font-medium rounded-sm transition-colors"
                        >
                          Live ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <span className="text-[11px] font-semibold text-[#E8630A] bg-[#FFF4EE] px-2 py-0.5 rounded-sm">
                    {project.category}
                  </span>
                  <h3 className="text-[15px] font-bold text-[#111111] leading-snug mt-2 mb-1.5">
                    {project.projectName}
                  </h3>
                  {/* Outcome — the result, not the description */}
                  <p className="text-[12px] text-[#666666] leading-[20px] mb-3">
                    {project.outcome}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-[#F2F0EB] text-[#666666] text-[11px] font-medium rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 bg-[#F2F0EB] text-[#999999] text-[11px] rounded-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <ProjectModal
          project={selected}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
};

export default Projects;
