import React from "react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "Korea Advanced Institute of Science and Technology",
      period: "03/2024 - 08/2024",
      description: "Student Researcher at LAVA Lab (KAIST) in the field of 3D Garment Reconstruction.",
    },
    {
      title: "Teaching Assistant",
      company: "Politecnico di Torino",
      period: "02/2022 - 07/2022",
      description: "Teaching Assistant for the Object Oriented Programming course at the Department of Computer Engineering.",
    }
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
    <section id="experiences" className="py-16 bg-gradient-to-b from-[#FFDEE2] to-[#E5DEFF]">
      <div className="container px-4 relative">
        <h2 className="text-4xl font-bold text-[#8B5CF6] mb-12 text-center animate-fade-in">
          Professional Experience
        </h2>
        <div className="relative max-w-5xl mx-auto">
          {experiences.length > 3 && (
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
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-slide-up h-full">
                  <h3 className="text-xl font-bold text-[#8B5CF6] mb-2">{experience.title}</h3>
                  <p className="text-gray-600 font-medium mb-2">{experience.company}</p>
                  <p className="text-gray-500 text-sm mb-4">{experience.period}</p>
                  <p className="text-gray-700">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;