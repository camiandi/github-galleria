import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[80vh] relative flex items-center justify-center bg-gradient-to-br from-[#9b87f5] via-[#8B5CF6] to-[#FFDEE2]">
      <nav className="absolute top-6 right-8">
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="text-white hover:text-white/80 transition-colors font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#experiences" className="text-white hover:text-white/80 transition-colors font-medium">
              Experiences
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-white/80 transition-colors font-medium">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-white/80 transition-colors font-medium">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="container px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl animate-slide-up">
          <img
            //src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            src="src/components/images/photo-portfolio.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up drop-shadow-lg">
            Camilla Andiloro
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl animate-slide-up">
            Computer Engineer passionate about Animation, Gaming and VFX
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl animate-slide-up">
            Creating immersive digital experiences through code and creativity
          </p>
          {/* <a
            href="#projects"
            className="inline-block bg-white text-[#8B5CF6] px-8 py-3 rounded-lg hover:bg-white/90 transition-colors animate-fade-in shadow-lg hover:scale-105 transform duration-200"
          >
            View My Work
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;