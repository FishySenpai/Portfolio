const ProjectList = () => {
  const projects = [
    {
      imageUrl: "attirenova.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "AttireNova",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
    },
    {
      imageUrl: "attirenova.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "AttireNova",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
    },
    {
      imageUrl: "attirenova.png",
      projectLink: "https://attirenova.netlify.app/",
      projectName: "AttireNova",
      projectDescription:
        "Discover a curated collection of the latest fashion trends, blending comfort and elegance seamlessly. From casual chic to glamorous evening wear, our diverse range caters to every individual.",
      technologies: ["HTML", "TailwindCSS", "ReactJS", "Firebase"],
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
