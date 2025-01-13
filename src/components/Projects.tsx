import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "The-doll-that-chose-to-drive",
      description: "Blender-based Final Team Project of the Polytechnic of Turin Computer Animation course",
      githubUrl: "https://github.com/camiandi/The-doll-that-chose-to-drive",
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
      technologies: ["Blender", "After Effects", "Nuke"],
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-[#E5DEFF] to-[#FFDEE2]">
      <div className="container px-4 relative">
        <h2 className="text-4xl font-bold text-[#8B5CF6] mb-12 text-center animate-fade-in">
          Featured Projects
        </h2>
        <div className="relative max-w-5xl mx-auto">
          {projects.length > 3 && (
            <>
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/80 p-2 rounded-full shadow-lg z-10"
              >
                <ChevronLeft className="w-6 h-6 text-[#8B5CF6]" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/80 p-2 rounded-full shadow-lg z-10"
              >
                <ChevronRight className="w-6 h-6 text-[#8B5CF6]" />
              </button>
            </>
          )}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <div key={project.title} className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;