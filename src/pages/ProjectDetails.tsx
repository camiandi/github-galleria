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
      videoUrl: "https://youtu.be/jXsF-lM_P64",
      images: [
        "/lovable-uploads/8ddce958-6faa-4a6c-a2e3-1a13a1887f9c.png",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      ]
    },
    "3DK-reate": {
      title: "3DK-reate",
      description: "Portfolio of Unity-based games and interactive experiences",
      technologies: ["Unity", "C#", "Game Development", "3D Animation"],
      fullDescription: "A collection of interactive games and experiences developed using Unity. These projects showcase various gameplay mechanics, 3D environments, and interactive storytelling techniques.",
      videoUrl: "https://youtu.be/8aWGNW8Q-gI",
      images: [
        "/lovable-uploads/5068a9ad-ada9-4a79-870c-5e9d7c720d88.png",
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      ]
    },
    "Bachelor Pad - 3D Modeling": {
      title: "Bachelor Pad - 3D Modeling",
      description: "Showcase of visual effects and animation projects using industry-standard tools",
      technologies: ["Blender", "After Effects", "Nuke"],
      fullDescription: "A comprehensive portfolio of visual effects work, demonstrating proficiency in industry-standard tools and techniques for creating compelling visual effects and animations.",
      images: [
        "/lovable-uploads/6334e2ac-bf0e-4ab5-817d-a926b7ea1064.png",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      ]
    },
    "VR-FootyStick": {
      title: "VR-FootyStick",
      description: "Virtual Reality football training simulation",
      technologies: ["Unity", "VR Development", "C#", "3D Modeling"],
      fullDescription: "An innovative VR application designed to help football players improve their skills through immersive training scenarios. Features realistic physics and customizable training programs.",
      videoUrl: "https://youtu.be/jOG9e1Z9YjE",
      images: [
        "/lovable-uploads/1b6536e0-29fd-4eb5-8087-4bf42c73877c.png",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      ]
    },
    "Eryantis": {
      title: "Eryantis",
      description: "A strategic board game implementation with advanced AI gameplay",
      technologies: ["Java", "AI", "Game Development", "Strategy Games"],
      fullDescription: "A digital implementation of a strategic board game featuring advanced AI opponents. The project demonstrates software architecture design, AI algorithm implementation, and game development principles.",
      images: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      ]
    }
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
          
          {'videoUrl' in project && typeof project.videoUrl === 'string' && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-[#8B5CF6] mb-4">Project Demo</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={project.videoUrl.replace('watch?v=', 'embed/')}
                  title="Project Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg w-full h-[400px]"
                ></iframe>
              </div>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#8B5CF6] mb-4">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover"
                />
              ))}
            </div>
          </div>

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