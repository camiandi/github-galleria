import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[80vh] relative flex items-center justify-center bg-gradient-to-br from-[#9b87f5] via-[#8B5CF6] to-[#FFDEE2]">
      <nav className="fixed top-0 right-0 w-full bg-[#9b87f5]/90 backdrop-blur-sm z-50 py-4">
        <ul className="flex space-x-6 justify-end px-8">
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
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl animate-slide-up">
          <img
            //rc="https://storage.googleapis.com/gpt-engineer-file-uploads/FE7EdJxkkIbShKmCcyc5mBD2Ckj2/f43f8517-66c5-4f18-bf80-dab3e7f188c0?Expires=1736878436&GoogleAccessId=admin-2%40gpt-engineer-390607.iam.gserviceaccount.com&Signature=yBPdCJA9ssrF7Z89fryhD4Zhg059hdXAlC5vHrJN40yRyLge0Dsiab5M7T3ssC6vZDZiDm2e1O4tGWiIkJHPVrzWu%2F7dbA3tvZK%2BPD2TiSSyG1%2B4TBTK56%2FIPujumDkHaK6R%2F7ZD4vIx6UcYWVfxMNqZc%2BesKWcq4izUhHUA0H64UlqaNHqBjdLTz68FDmYs3L3IetRewRajpJ938fs5t8F8%2ByFABnBI0Y19Uyml6OwJLvgDEt31BVsnpe0SIzLqGypOyhI3RrmCYHcr7g04GB3CwZTIkeXzk5bxj4ByMIv2NfYipFtxacFkK5Z7cP7NGlh5TkvyfGOB5%2BQNT491EA%3D%3D"
            src="camiandi/github-galleria/src/components/images/photo-portfolio.jpg"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;