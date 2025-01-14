import React from "react";

const Experiences = () => {
  const experiences = [
    {
      title: "Computer Animation Specialist",
      company: "Digital Arts Studio",
      period: "2022 - Present",
      description: "Creating and implementing advanced animation techniques using industry-standard tools like Blender and Maya.",
    },
    {
      title: "Game Development Intern",
      company: "Interactive Gaming Studios",
      period: "2021 - 2022",
      description: "Developed game mechanics and implemented visual effects using Unity and Unreal Engine.",
    },
    {
      title: "VFX Artist",
      company: "Visual Effects Lab",
      period: "2020 - 2021",
      description: "Created stunning visual effects for various multimedia projects using Houdini and Nuke.",
    },
  ];

  return (
    <section id="experiences" className="py-16 bg-gradient-to-b from-[#FFDEE2] to-[#E5DEFF]">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-[#8B5CF6] mb-12 text-center animate-fade-in">
          Professional Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-slide-up"
            >
              <h3 className="text-xl font-bold text-[#8B5CF6] mb-2">{experience.title}</h3>
              <p className="text-gray-600 font-medium mb-2">{experience.company}</p>
              <p className="text-gray-500 text-sm mb-4">{experience.period}</p>
              <p className="text-gray-700">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;