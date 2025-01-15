import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "The Doll That Chose to Drive",
      description: "3D Animation video\n Blender-based Final Team Project of the Polytechnic of Turin Computer Animation course",
      youtubeUrl: "https://youtu.be/jXsF-lM_P64",
      image: "/lovable-uploads/8ddce958-6faa-4a6c-a2e3-1a13a1887f9c.png",
      technologies: ["Blender", "Animation", "3D Modeling"],
      hideGithub: true,
    },
    {
      title: "3DK-reate",
      description: "Creation of Your Own 3D Key for Distributed Authentication in the Metaverse",
      githubUrl: "https://github.com/erikprifti/progetto_IEEE_VR_3DK-Reate",
      youtubeUrl: "https://youtu.be/8aWGNW8Q-gI",
      ieeeUrl: "https://ieeexplore.ieee.org/abstract/document/10390314",
      image: "/lovable-uploads/5068a9ad-ada9-4a79-870c-5e9d7c720d88.png",
      technologies: ["Unity", "C#", "VR Development", "2023 IEEE Gaming, Entertainment, and Media Conference (GEM)"],
    },
    {
      title: "Bachelor Pad - 3D Modeling",
      description: "3D Modeling of a Bachelor Pad \n Blender-based Final Team Project of the Polytechnic of Turin Computer Graphics course",
      image: "/lovable-uploads/6334e2ac-bf0e-4ab5-817d-a926b7ea1064.png",
      technologies: ["Blender", "3D Modeling"],   
      hideGithub: true,
      hideYoutube: true,
    },
    {
      title: "VR-FootyStick",
      description: "Seated and portable VR WIP locomotion concept designed for confined public spaces.",
      githubUrl: "https://github.com/camiandi/VR-Footystick",
      youtubeUrl: "https://youtu.be/jOG9e1Z9YjE",
      image: "/lovable-uploads/1b6536e0-29fd-4eb5-8087-4bf42c73877c.png",
      technologies: ["Unity", "VR Development", "C#", "HCI"],
      hideGithub: true,
    },
    {
      title: "Eriantys",
      description: "JAVA based strategic board game implementation",
      githubUrl: "https://github.com/example/eryantis",
      image: "https://raw.githubusercontent.com/camiandi/ingsw2022-AM35/refs/heads/master/src/main/resource/Graphics/Background/EriantysMenu.jpeg",
      technologies: ["Java", "Maven", "Game Development", "Strategy Games"],
      hideYoutube: true,
    },
    {
      title: "D-Spnet",
      description: "Digital garment simulation and pattern network for automated clothing design",
      image: "/lovable-uploads/5df63539-d9e4-4cac-bdfa-f7624996730d.png",
      technologies: ["Maya", "Python", "MEL", "Qualoth", "Machine Learning"],
      hideGithub: true,
      hideYoutube: true,
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