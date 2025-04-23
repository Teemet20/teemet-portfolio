import ProjectCard from "../components/ProjectCard";
import config from "../config/config";

const Portfolio = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex-grow pt-16">
      {/* Home Section */}
      <section
        id="home"
        className={`h-screen flex items-center justify-center bg-gradient-to-r from-${config.theme.primaryColor} to-${config.theme.secondaryColor} text-white`}
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">Hi, I'm {config.name}</h2>
          <p className="text-xl mb-6">{config.tagline}</p>
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">{config.about}</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
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
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            Feel free to reach out for collaborations or just a chat!
          </p>
          <div className="space-x-4">
            <a href={`mailto:${config.socialLinks.email}`} className="text-blue-500 hover:underline">
              Email
            </a>
            <a href={config.socialLinks.linkedin} className="text-blue-500 hover:underline">
              LinkedIn
            </a>
            <a href={config.socialLinks.github} className="text-blue-500 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;