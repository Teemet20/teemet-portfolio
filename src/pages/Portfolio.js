import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import config from "../config/config";
import teemet from "../assets/Teemet.jpg"
import { useState, useEffect } from 'react';

const descriptions = [
  "A passionate engineer building awesome things..",
  "Crafting elegant solutions to complex problems..",
  "Turning ideas into reality through code..",
  "Always learning, always growing.."
];

const Portfolio = () => {
  const [currentDescription, setCurrentDescription] = useState(descriptions[0]);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let currentDescIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const typeWriter = () => {
      const fullText = descriptions[currentDescIndex];
      if (isDeleting) {
        currentText = fullText.substring(0, currentIndex - 1);
        currentIndex--;
        typingSpeed = 50;
      } else {
        currentText = fullText.substring(0, currentIndex + 1);
        currentIndex++;
        typingSpeed = 100;
      }

      setDisplayText(currentText);

      if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        currentDescIndex = (currentDescIndex + 1) % descriptions.length;
      }

      setTimeout(typeWriter, typingSpeed);
    };

    typeWriter();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex-grow">
      {/* Home Section */}
      <section
        id="home"
        className={`min-h-screen flex items-center justify-center bg-gradient-to-r from-${config.theme.primaryColor} to-${config.theme.secondaryColor} text-white p-4`}
      >
        <div className="text-center mt-16 max-w-md mx-auto">
          {/* Profile image with rings container */}
          <div className="relative inline-block">
            {/* Decorative rings */}
            <div className="absolute inset-0">
              {/* Outer ring - vertical movement */}
              <div className="w-[180px] h-[180px] rounded-full border-4 border-gray-400/30 animate-float-vertical absolute top-1/2 left-1/2"></div>
              {/* Middle ring - horizontal movement */}
              <div className="w-[160px] h-[160px] rounded-full border-4 border-gray-400/40 animate-float-horizontal absolute top-1/2 left-1/2"></div>
            </div>
            
            {/* Profile image */}
            <img 
              src={teemet} 
              className="h-36 w-36 mx-auto object-cover rounded-full border-4 border-gray-400 relative z-10" 
              alt="Profile" 
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-8 font-orbitron text-white">
            Hi, I'm <span className="text-orange-300">{config.name}</span>
          </h2>
          <p className="text-lg md:text-xl mb-6 font-orbitron text-white">{displayText}</p>
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-white text-emerald-950 px-6 py-3 rounded-full font-semibold hover:bg-orange-300 hover:text-white font-orbitron"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section with Skills */}
      <section id="about" className="py-20 bg-black .bg-texture-only p-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-orbitron text-white">
              About <span className="text-orange-300">Me</span>
            </h2>
            <p className="text-base md:text-lg text-white mb-16">{config.about}</p>
            
            <div className="mt-16">
              <h3 className="text-xl md:text-2xl font-bold mb-12 font-orbitron text-center text-white">
                Tech <span className="text-orange-300">Stack</span>
              </h3>
              <Skills />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <section id="projects" className={`py-20 bg-gradient-to-r from-${config.theme.primaryColor} to-${config.theme.secondaryColor} text-white p-4`}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-orbitron text-white">
            My <span className="text-orange-300">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black p-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white font-orbitron">
            Get in <span className="text-orange-300">Touch</span>
          </h2>
          <p className="text-base md:text-lg text-white mb-6">
            Feel free to reach out for collaborations or just a chat!
          </p>
          <div className="space-x-4">
            <a href={`mailto:${config.socialLinks.email}`} className="text-orange-300 hover:text-orange-400 transition-colors duration-300 font-orbitron">
              Email
            </a>
            <a href={config.socialLinks.linkedin} className="text-orange-300 hover:text-orange-400 transition-colors duration-300 font-orbitron">
              LinkedIn
            </a>
            <a href={config.socialLinks.github} className="text-orange-300 hover:text-orange-400 transition-colors duration-300 font-orbitron">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;