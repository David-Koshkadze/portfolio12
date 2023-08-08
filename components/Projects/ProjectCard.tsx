import React from "react";

interface ProjectCardProps {
  imageUrl: string;
  liveDemoUrl: string;
  codeUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  liveDemoUrl,
  codeUrl,
  title,
  description,
}) => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center overflow-hidden rounded-lg shadow-md transition-all duration-300 border-2 border-gray-200 cursor-pointer transform hover:scale-105"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-60 rounded-lg flex items-center justify-center">
        <div className="text-white text-center">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
          <div className="mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
