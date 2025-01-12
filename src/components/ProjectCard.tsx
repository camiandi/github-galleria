import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, githubUrl, technologies }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-[#1A1F2C]/90 backdrop-blur-sm hover:scale-105 animate-fade-in border-[#4A1B45]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-[#DD6B20]" />
            <span className="text-[#B829DD]">{title}</span>
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-[#DD6B20] transition-colors"
          >
            <Github className="h-5 w-5 text-white/80" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-[#2D1B69] text-white/90 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;