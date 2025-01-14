import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, Youtube, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl?: string;
  youtubeUrl?: string;
  ieeeUrl?: string;
  image: string;
  technologies: string[];
  hideGithub?: boolean;
  hideYoutube?: boolean;
  hideIeee?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  githubUrl, 
  youtubeUrl, 
  ieeeUrl,
  image, 
  technologies,
  hideGithub,
  hideYoutube,
  hideIeee
}: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${title}`);
  };

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/10 backdrop-blur-sm hover:scale-105 animate-fade-in cursor-pointer border-2 border-[#8B5CF6]/20"
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
            <Star className="h-5 w-5 text-[#F97316]" />
            <span className="text-[#8B5CF6] group-hover:text-[#A78BFA]">{title}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-[#2D1F4E] text-[#8B5CF6] rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-end space-x-4 mt-4 border-t pt-4 border-[#8B5CF6]/20">
          {!hideGithub && githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#D946EF] transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-6 w-6" />
            </a>
          )}
          {!hideYoutube && youtubeUrl && (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Youtube className="h-6 w-6" />
            </a>
          )}
          {!hideIeee && ieeeUrl && (
            <a
              href={ieeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Link className="h-6 w-6" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;