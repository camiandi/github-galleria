import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce-Andino",
      description: "A full-featured e-commerce platform built with React and Node.js",
      githubUrl: "https://github.com/camiandi/Ecommerce-Andino",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Proyecto-Final-React",
      description: "Final project showcasing advanced React concepts and best practices",
      githubUrl: "https://github.com/camiandi/Proyecto-Final-React",
      technologies: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Proyecto-Final-JS",
      description: "JavaScript-based project demonstrating modern web development techniques",
      githubUrl: "https://github.com/camiandi/Proyecto-Final-JS",
      technologies: ["JavaScript", "HTML", "CSS"],
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