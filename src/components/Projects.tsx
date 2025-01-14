import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "The-doll-that-chose-to-drive",
      description: "Blender-based Final Team Project of the Polytechnic of Turin Computer Animation course",
      githubUrl: "https://github.com/camiandi/The-doll-that-chose-to-drive",
      youtubeUrl: "https://youtube.com/watch?v=example1",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
      technologies: ["Blender", "Animation", "3D Modeling", "Team Project"],
    },
    {
      title: "Unity-Projects",
      description: "Portfolio of Unity-based games and interactive experiences",
      githubUrl: "https://github.com/camiandiloro/Unity-Projects",
      youtubeUrl: "https://youtube.com/watch?v=example2",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Unity", "C#", "Game Development", "3D Animation"],
    },
    {
      title: "VFX-Portfolio",
      description: "Showcase of visual effects and animation projects using industry-standard tools",
      githubUrl: "https://github.com/camiandiloro/VFX-Portfolio",
      youtubeUrl: "https://youtube.com/watch?v=example3",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Blender", "After Effects", "Nuke"],
    },
    {
      title: "VR-FootyStick",
      description: "Virtual Reality football training simulation",
      githubUrl: "https://github.com/camiandiloro/VR-FootyStick",
      youtubeUrl: "https://youtube.com/watch?v=example4",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      technologies: ["Unity", "VR Development", "C#", "3D Modeling"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-[#1a1f2e] to-[#2a1f2e]">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-[#8B5CF6] mb-12 text-center animate-fade-in">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;