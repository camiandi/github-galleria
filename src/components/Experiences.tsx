import React from "react";

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

  return (
    <section id="experiences" className="py-16 bg-gradient-to-b from-[#2a1f2e] to-[#1a1f2e]">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-[#8B5CF6] mb-12 text-center animate-fade-in">
          Professional Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-slide-up border border-[#8B5CF6]/10"
            >
              <h3 className="text-xl font-bold text-[#8B5CF6] mb-2">{experience.title}</h3>
              <p className="text-gray-300 font-medium mb-2">{experience.company}</p>
              <p className="text-gray-400 text-sm mb-4">{experience.period}</p>
              <p className="text-gray-300">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;