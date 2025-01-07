import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, githubUrl, demoUrl, technologies }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl flex items-center justify-between">
          {title}
          <div className="space-x-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:text-accent transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:text-accent transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
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