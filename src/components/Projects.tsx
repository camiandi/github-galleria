import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Unreal-Engine-5",
      description: "Collection of Unreal Engine 5 projects showcasing game development and VFX capabilities",
      githubUrl: "https://github.com/camiandiloro/Unreal-Engine-5",
      technologies: ["Unreal Engine 5", "C++", "Blueprints", "VFX"],
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
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
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