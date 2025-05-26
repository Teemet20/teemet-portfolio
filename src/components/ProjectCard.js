const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg hover:bg-black/70 transition-all duration-300 group">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      )}
      <h3 className="text-xl font-bold mb-2 font-orbitron group-hover:text-orange-300 transition-colors duration-300">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-300 hover:text-orange-400 transition-colors duration-300 font-orbitron inline-flex items-center"
      >
        View Project
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  );
};

export default ProjectCard;