import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "The Doll That Chose to Drive",
      description: "3D Animation video\n Blender-based Final Team Project of the Polytechnic of Turin Computer Animation course",
      githubUrl: "https://github.com/camiandi/The-doll-that-chose-to-drive",
      youtubeUrl: "https://youtu.be/jXsF-lM_P64",
      image: "src/components/images/tdwctd_image.png",
      technologies: ["Blender", "Animation", "3D Modeling", "Team Project"],
    },
    {
      title: "Bachelor Pad - 3D Modeling",
      description: "3D Modeling of a Bachelor Pad \n Blender-based Final Team Project of the Polytechnic of Turin Computer Graphics course",
      githubUrl: "https://github.com/camiandi/VR-Footystick",
      youtubeUrl: "https://youtu.be/jOG9e1Z9YjE",
      image: "src/components/images/RenderingScena2.png",
      technologies: ["Unity", "C#", "Game Development", "3D Animation"],
    },
    {
      title: "3DK-reate",
      description: "Creation of Your Own 3D Key for Distributed Authentication in the Metaverse",
      githubUrl: "https://github.com/erikprifti/progetto_IEEE_VR_3DK-Reate",
      youtubeUrl: "https://youtu.be/8aWGNW8Q-gI",
      image: "src/components/images/3dkreate_image.png",
      technologies: ["Unity", "C#", "VR Development", "2023 IEEE Gaming, Entertainment, and Media Conference (GEM)"],
    },
    {
      title: "VR-FootyStick",
      description: "Seated and portable VR WIP locomotion concept designed for confined public spaces.",
      githubUrl: "https://github.com/camiandi/VR-Footystick",
      youtubeUrl: "https://youtu.be/jOG9e1Z9YjE",
      image: "src/components/images/footystick_image.png",
      technologies: ["Unity", "VR Development", "C#", "HCI", "Team Project"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-background-dark to-background-darker">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-secondary mb-12 text-center animate-fade-in">
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