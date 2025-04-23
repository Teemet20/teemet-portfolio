import ProjectCard from "../components/ProjectCard";
import config from "../config/config";

const Photography = () => {
  return (
    <main className="flex-grow pt-16 bg-gray-100 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">My Photography</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.photography.map((photo, index) => (
              <ProjectCard
                key={index}
                title={photo.title}
                description={photo.description}
                image={photo.image}
                link={photo.link}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Photography;