import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = {
    "The Doll That Chose to Drive": {
      title: "The Doll That Chose to Drive",
      description: "Blender-based Final Team Project of the Polytechnic of Turin Computer Animation course. This project showcases advanced animation techniques and collaborative teamwork in creating a compelling narrative through 3D animation.",
      technologies: ["Blender", "Animation", "3D Modeling", "Team Project"],
      fullDescription: {
        overview: "Blender-based Final Team Project of the Polytechnic of Turin Computer Animation course. The project consisted in the replicate 30s of an original video 'CGI Animated Spot HD The Doll that Chose to Drive' by Post23 CGMeetup, exploiting the animation techniques learned in class.\nMy main role was to animate all the characters representing cars as well as managing the lighting of the scenes. Finally, I aid with the animation of the doll in the first two scenes.",
        process: "",
        outcome: ""
      },
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
      fullDescription: {
        overview: "A collection of interactive games and experiences developed using Unity. These projects showcase various gameplay mechanics, 3D environments, and interactive storytelling techniques.",
        process: "",
        outcome: ""
      },
      videoUrl: "https://youtube.com/watch?v=example2",
      images: [
        "/lovable-uploads/5068a9ad-ada9-4a79-870c-5e9d7c720d88.png",
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      ]
    },
    "Bachelor Pad - 3D Modeling": {
      title: "Bachelor Pad - 3D Modeling",
      description: "3D Modeling of a Bachelor Pad \n Blender-based Final Team Project of the Polytechnic of Turin Computer Graphics course",
      technologies: ["Blender", "3D Modeling"],
      fullDescription: {
        overview: "In this project, our team collaborated to create a detailed 3D room using a variety of modeling techniques. The goal was to design a realistic and immersive environment, incorporating architectural elements, furniture, and environmental props. We utilized Blender for 3D modeling, applying techniques like procedural modeling, UV unwrapping and sculpting to achieve detailed and accurate results.",
        process: "We began the project by defining the room's aesthetic through concept sketches and mood boards. Each team member was responsible for different parts of the design, including objects, textures, and layout, ensuring a cohesive final look. We focused on creating realistic materials using [mention texturing tools, e.g., Substance Painter, Photoshop] for wood, fabric, and metal surfaces. For lighting, we applied both natural and artificial sources to enhance the mood and depth of the scene.\n\nOnce all assets were modeled and textured, we proceeded to render the room using Blender Cycles, fine-tuning the settings for the best quality outputs. Our team carefully managed scene composition, light placement, and camera angles to emphasize key design elements.",
        outcome: "The project successfully demonstrates our team's ability to work together on a complex task, integrating multiple 3D modeling techniques to create a cohesive, realistic scene. The final render captures the depth, textures, and lighting effects, showcasing our technical skills and creativity in environment design. This project was an excellent exercise in 3D modeling, scene composition, and rendering."
      },
      videoUrl: null,
      images: [
        "/lovable-uploads/1cbdc5e6-b824-4fab-962d-08dfd43efcd4.png",
        "/lovable-uploads/ba1df1ec-eea4-4c8e-bc73-bd40b8b7b81f.png",
        "/lovable-uploads/312d75f9-ac84-4f98-9de6-c89b791ee307.png",
        "/lovable-uploads/aeca4cbc-85f1-46b4-ace8-2538ef5a99cd.png",
        "/lovable-uploads/5a8683b3-056f-4e59-a85d-9916aafe34fb.png"
      ]
    },
    "VR-FootyStick": {
      title: "VR-FootyStick",
      description: "Virtual Reality football training simulation",
      technologies: ["Unity", "VR Development", "C#", "3D Modeling"],
      fullDescription: {
        overview: "An innovative VR application designed to help football players improve their skills through immersive training scenarios. Features realistic physics and customizable training programs.",
        process: "",
        outcome: ""
      },
      videoUrl: "https://youtube.com/watch?v=example4",
      images: [
        "/lovable-uploads/1b6536e0-29fd-4eb5-8087-4bf42c73877c.png",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      ]
    },
    "Eriantys": {
      title: "Eriantys",
      description: "A strategic board game implementation with advanced AI gameplay",
      technologies: ["Java", "AI", "Game Development", "Strategy Games"],
      fullDescription: {
        overview: "A digital implementation of a strategic board game featuring advanced AI opponents. The project demonstrates software architecture design, AI algorithm implementation, and game development principles.",
        process: "",
        outcome: ""
      },
      videoUrl: null,
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
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-[#8B5CF6] mb-3">Overview</h2>
              <p className="text-gray-700">{project.fullDescription.overview}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#8B5CF6] mb-3">Process</h2>
              <p className="text-gray-700 whitespace-pre-line">{project.fullDescription.process}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#8B5CF6] mb-3">Outcome</h2>
              <p className="text-gray-700">{project.fullDescription.outcome}</p>
            </section>
          </div>
          
          {project.videoUrl != null && (
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
                  className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover cursor-pointer"
                  onClick={() => setSelectedImage(image)}
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
          <img
            src={selectedImage || ''}
            alt="Project detail"
            className="w-full h-full object-contain"
            onClick={() => setSelectedImage(null)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetails;