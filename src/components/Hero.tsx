import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#9b87f5] via-[#8B5CF6] to-[#6E59A5]">
      <div className="container px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up drop-shadow-lg">
          Camilla Andiloro
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto animate-slide-up">
          Computer Engineer passionate about Animation, Gaming and VFX
        </p>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-slide-up">
          Creating immersive digital experiences through code and creativity
        </p>
        <a
          href="#projects"
          className="inline-block bg-white text-[#8B5CF6] px-8 py-3 rounded-lg hover:bg-white/90 transition-colors animate-fade-in shadow-lg hover:scale-105 transform duration-200"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;