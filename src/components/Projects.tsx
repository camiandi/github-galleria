import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "The-doll-that-chose-to-drive",
      description: "Blender-based Final Team Project of the Polytechnic of Turin Computer Animation course",
      youtubeUrl: "https://youtube.com/watch?v=example1",
      image: "/lovable-uploads/8ddce958-6faa-4a6c-a2e3-1a13a1887f9c.png",
      technologies: ["Blender", "Animation", "3D Modeling", "Team Project"],
      hideGithub: true,
    },
    {
      title: "3DK-reate",
      description: "Portfolio of Unity-based games and interactive experiences",
      githubUrl: "https://github.com/camiandiloro/Unity-Projects",
      youtubeUrl: "https://youtube.com/watch?v=example2",
      ieeeUrl: "https://www.ieee.org/",
      image: "/lovable-uploads/5068a9ad-ada9-4a79-870c-5e9d7c720d88.png",
      technologies: ["Unity", "C#", "Game Development", "3D Animation"],
    },
    {
      title: "Bachelor Pad - 3D Modeling",
      description: "Showcase of visual effects and animation projects using industry-standard tools",
      image: "/lovable-uploads/6334e2ac-bf0e-4ab5-817d-a926b7ea1064.png",
      technologies: ["Blender", "After Effects", "Nuke"],
      hideGithub: true,
      hideYoutube: true,
    },
    {
      title: "VR-FootyStick",
      description: "Virtual Reality football training simulation",
      youtubeUrl: "https://youtube.com/watch?v=example4",
      image: "/lovable-uploads/1b6536e0-29fd-4eb5-8087-4bf42c73877c.png",
      technologies: ["Unity", "VR Development", "C#", "3D Modeling"],
      hideGithub: true,
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