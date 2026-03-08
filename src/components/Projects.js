import React, { useRef, useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";
import attirenova_2 from "./Assets/attirenova/attirenova_2.png";
import attirenova_3 from "./Assets/attirenova/attirenova_3.png";
import attirenova_4 from "./Assets/attirenova/attirenova_4.png";
import attirenova_5 from "./Assets/attirenova/attirenova_5.png";
import reactwind_2 from "./Assets/react-wind/reactwind_2.png";
import reactwind_3 from "./Assets/react-wind/reactwind_3.png";
import reactwind_4 from "./Assets/react-wind/reactwind_4.png";
import reactwind_5 from "./Assets/react-wind/reactwind_5.png";
import skyclarity_2 from "./Assets/skyclarity/skyclarity_2.png";
import skyclarity_3 from "./Assets/skyclarity/skyclarity_3.png";
import skyclarity_4 from "./Assets/skyclarity/skyclarity_4.png";
import skyclarity_5 from "./Assets/skyclarity/skyclarity_5.png";
import avatar_1 from "./Assets/avatar/avatar_1.PNG";
import avatar_2 from "./Assets/avatar/avatar_2.PNG";
import avatar_3 from "./Assets/avatar/avatar_3.PNG";
import avatar_4 from "./Assets/avatar/avatar_4.PNG";
import wireframe_1 from "./Assets/wireframe/wireframe_1.jpg";
import wireframe_2 from "./Assets/wireframe/wireframe_2.JPG";
import wireframe_3 from "./Assets/wireframe/wireframe_3.JPG";
import wireframe_4 from "./Assets/wireframe/wireframe_4.JPG";
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
    projectDescription:
      "A modern React + Firebase platform for social media automation, AI-powered feedback, and performance analytics. Features include real-time notifications, user feedback management, AI recommendations, and interactive dashboards — all with seamless authentication and a beautiful UI.",
    technologies: ["ReactJS", "Firebase", "MUI", "Chart.js", "Framer Motion"],
    images: [avatar_2, avatar_3, avatar_4],
  },
  {
    id: 3,
    imageUrl: attirenova_2,
    projectLink: "https://attirenova.netlify.app/",
    githubLink: "https://github.com/FishySenpai/AttireNova",
    projectName: "AttireNova",
    projectDescription:
      "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
    technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
    images: [attirenova_2, attirenova_3, attirenova_4, attirenova_5],
  },
  {
    id: 4,
    imageUrl: gitanaylzer_1,
    projectLink: "https://git-profile-analyzer.vercel.app/",
    githubLink: "https://github.com/FishySenpai/Github-Profile-Analyzer",
    projectName: "Github Profile Analyzer",
    projectDescription:
      "GitHub profile analysis platform supporting 1,000+ developer profiles. Secure authentication and saved profiles via Supabase. Optimized API usage and state management, reducing redundant requests by 30%. Next.js SSR improves SEO and reduces initial load time by 35%.",
    technologies: ["React", "Next.js", "Supabase", "TailwindCSS"],
    images: [gitanaylzer_2, gitanaylzer_3, gitanaylzer_4, gitanaylzer_5],
  },
  {
    id: 5,
    imageUrl: reactwind_2,
    projectLink: "https://react-wind.netlify.app/",
    githubLink: "https://github.com/FishySenpai/React_Wind",
    projectName: "React-wind",
    projectDescription:
      "Explore the ultimate anime hub, where you can search for shows, discover popular titles, and stay updated on upcoming and currently airing anime. Keep track of your top picks and enjoy something for everyone!",
    technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
    images: [reactwind_2, reactwind_3, reactwind_4, reactwind_5],
  },
  {
    id: 6,
    imageUrl: skyclarity_2,
    projectLink: "https://skyclarity.netlify.app/",
    githubLink: "https://github.com/FishySenpai/SkyClarity",
    projectName: "SkyClarity",
    projectDescription:
      "Uncover seamless travel with SkyClarity, where booking flights, hotels, and rental cars is effortless. Whether you're planning a getaway or a luxurious vacation, our options cater to every traveler. Enjoy comfort, convenience, and unbeatable choices.",
    technologies: ["HTML", "TailwindCSS", "ReactJS", "Rapid API"],
    images: [skyclarity_2, skyclarity_3, skyclarity_4, skyclarity_5],
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setVisibleProjects((prev) => (prev < projects.length ? prev + 1 : prev));
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  useEffect(() => {
    const threshold = window.innerWidth < 600 ? 0.1 : 0.2;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div id="projects" className="flex flex-col" ref={projectsRef}>
      {/* Section header */}
      <div className="pt-16 mx-auto pb-5">
        <div
          className={`text-[40px] text-neutral-300 transition-transform duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
          }`}
        >
          <span className="font-mono text-orange-500 text-[24px] mr-2 align-middle">02.</span>Projects
        </div>
        <div
          className={`w-32 h-[3px] bg-orange-600 mx-auto mt-1 transition-transform duration-[0.7s] ease-out delay-150 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
          }`}
        />
      </div>

      <div
        className={`mx-auto px-4 pb-10 max-w-3xl text-center text-[17px] leading-[28px] secondary-color transition ease-in-out delay-200 ${
          isVisible
            ? "translate-y-0 opacity-100 duration-[1s]"
            : "translate-y-10 opacity-0 duration-[1s]"
        }`}
      >
        From full-stack web apps and AI-powered tools to real-time platforms and polished UI/UX.
        Click any card to see more details.
      </div>

      {/* Grid */}
      <div className="mx-auto w-full max-w-[1250px] px-4">
        <div className="grid grid-cols-1 1md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${
                index < visibleProjects
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {/* Card */}
              <div
                className="group relative cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* macOS-style title bar */}
                <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#252525] border border-neutral-700/60 border-b-0 rounded-t-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 font-mono text-[11px] text-neutral-400 tracking-wide truncate">
                    {project.projectName}
                  </span>
                </div>

                {/* Image + hover overlay */}
                <div className="relative overflow-hidden border border-neutral-700/60 border-t-0 rounded-b-sm aspect-video">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.imageUrl}
                    alt={project.projectName}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-neutral-900/88 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 px-6">
                    {/* Tech chips */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-[#3a3a3a] border-b-2 border-neutral-700 text-neutral-300 text-[12px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                      <span className="px-4 py-2 bg-[#3a3a3a] border-b-2 border-orange-600 text-orange-400 text-[12px] font-mono tracking-wide">
                        Details →
                      </span>
                      {project.projectLink && (
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 bg-[#3a3a3a] hover:bg-neutral-700 border-b-2 border-neutral-700 text-neutral-300 text-[12px] font-mono transition-colors duration-150"
                        >
                          ↗ Live
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 bg-[#3a3a3a] hover:bg-neutral-700 border-b-2 border-neutral-700 text-neutral-300 text-[12px] font-mono transition-colors duration-150"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <ProjectModal
          project={selectedProject}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default Projects;
