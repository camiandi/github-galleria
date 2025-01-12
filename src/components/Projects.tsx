import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "The-doll-that-chose-to-drive",
      description: "Blender-based Final Team Project of the Polytechnic of Turin Computer Animation course",
      githubUrl: "https://github.com/camiandiloro/The-doll-that-chose-to-drive",
      technologies: ["Blender", "Animation", "3D Modeling", "Team Project"],
    },
    {
      title: "Unity-Projects",
      description: "Portfolio of Unity-based games and interactive experiences",
      githubUrl: "https://github.com/camiandiloro/Unity-Projects",
      technologies: ["Unity", "C#", "Game Development", "3D Animation"],
    },
    {
      title: "VFX-Portfolio",
      description: "Showcase of visual effects and animation projects using industry-standard tools",
      githubUrl: "https://github.com/camiandiloro/VFX-Portfolio",
      technologies: ["Houdini", "Maya", "After Effects", "Nuke"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-[#2D1B69] to-[#4A1B45]">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;