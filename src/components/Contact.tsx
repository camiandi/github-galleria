import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
        <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/camiandi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-secondary hover:text-accent transition-colors"
          >
            <Mail className="h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors"
          >
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;