import React from "react";
import { useParams, Link } from "react-router-dom";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const projects = {
    "The-doll-that-chose-to-drive": {
      title: "The-doll-that-chose-to-drive",
      description: "Blender-based Final Team Project of the Polytechnic of Turin Computer Animation course. This project showcases advanced animation techniques and collaborative teamwork in creating a compelling narrative through 3D animation.",
      technologies: ["Blender", "Animation", "3D Modeling", "Team Project"],
      fullDescription: "A captivating animation project that tells the story of a doll who discovers the joy of driving. Created using Blender, this project demonstrates advanced rigging, animation techniques, and storytelling through visual media.",
    },
    "Unity-Projects": {
      title: "Unity-Projects",
      description: "Portfolio of Unity-based games and interactive experiences",
      technologies: ["Unity", "C#", "Game Development", "3D Animation"],
      fullDescription: "A collection of interactive games and experiences developed using Unity. These projects showcase various gameplay mechanics, 3D environments, and interactive storytelling techniques.",
    },
    "VFX-Portfolio": {
      title: "VFX-Portfolio",
      description: "Showcase of visual effects and animation projects using industry-standard tools",
      technologies: ["Blender", "After Effects", "Nuke"],
      fullDescription: "A comprehensive portfolio of visual effects work, demonstrating proficiency in industry-standard tools and techniques for creating compelling visual effects and animations.",
    },
    "VR-FootyStick": {
      title: "VR-FootyStick",
      description: "Virtual Reality football training simulation",
      technologies: ["Unity", "VR Development", "C#", "3D Modeling"],
      fullDescription: "An innovative VR application designed to help football players improve their skills through immersive training scenarios. Features realistic physics and customizable training programs.",
    },
  };

  const project = projectId ? projects[projectId as keyof typeof projects] : null;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E5DEFF] to-[#FFDEE2]">
      <nav className="fixed top-0 right-0 w-full bg-[#9b87f5]/90 backdrop-blur-sm z-50 py-4">
        <ul className="flex space-x-6 justify-end px-8">
          <li>
            <a href="/#about" className="text-white hover:text-white/80 transition-colors font-medium">
              About
            </a>
          </li>
          <li>
            <a href="/#experiences" className="text-white hover:text-white/80 transition-colors font-medium">
              Experiences
            </a>
          </li>
          <li>
            <a href="/#projects" className="text-white hover:text-white/80 transition-colors font-medium">
              Projects
            </a>
          </li>
          <li>
            <a href="/#contact" className="text-white hover:text-white/80 transition-colors font-medium">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto px-4 pt-24 pb-16">
        <Link
          to="/"
          className="inline-block mb-8 text-[#8B5CF6] hover:text-[#7C3AED] transition-colors"
        >
          ← Back to Portfolio
        </Link>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-[#8B5CF6] mb-4">{project.title}</h1>
          <p className="text-gray-700 mb-6">{project.fullDescription}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#E5DEFF] text-[#8B5CF6] rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;