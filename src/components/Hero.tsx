import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-slide-up">
          Camilla Andiloro
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-4 max-w-2xl mx-auto animate-slide-up">
          Computer Engineer passionate about Animation, Gaming and VFX
        </p>
        <p className="text-lg text-secondary/80 mb-8 max-w-2xl mx-auto animate-slide-up">
          Creating immersive digital experiences through code and creativity
        </p>
        <a
          href="#projects"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;