const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">View {image ? "Photo" : "Project"}</a>
    </div>
  );
};

export default ProjectCard;