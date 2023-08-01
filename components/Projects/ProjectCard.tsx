import React from 'react';

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
      className="relative w-full h-64 bg-cover bg-center overflow-hidden rounded-lg shadow-md transition-opacity transition-border border border-gray-300"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-60">
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-center">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
            <div className="mt-4">
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow mr-2"
              >
                Live Demo
              </a>
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-600 text-white px-4 py-2 rounded-lg shadow"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
