import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  youtubeUrl: string;
  image: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, githubUrl, youtubeUrl, image, technologies }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${title}`);
  };

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-background-dark/80 backdrop-blur-sm hover:scale-105 animate-fade-in cursor-pointer border-2 border-secondary relative min-h-[450px]"
      onClick={handleClick}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-accent" />
            <span className="text-secondary group-hover:text-primary">{title}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-background-darker text-secondary rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 flex space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Youtube className="h-6 w-6" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;