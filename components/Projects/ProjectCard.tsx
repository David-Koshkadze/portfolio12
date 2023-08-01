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
      className="relative w-full h-64 bg-cover bg-center overflow-hidden rounded-lg shadow-md transition-all duration-300 border-2 border-gray-200 cursor-pointer transform hover:scale-105"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-60 rounded-lg flex items-center justify-center">
        <div className="text-white text-center">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
          <div className="mt-4">
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full shadow mr-2 transform hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Live Demo
            </a>
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-600 text-white px-4 py-2 rounded-full shadow transform hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.172-11.829a.5.5 0 01.415.062L15 9.3V10.5a.5.5 0 01-1 0V9.7l-1.543-.773a.5.5 0 11.486-.874L14 8.928v-1.85a.5.5 0 011 0v1.01l1.672.835a.5.5 0 11-.484.874L14 9.074v1.81l1.587.793a.5.5 0 01-.415.902L14.5 12.882V13a.5.5 0 01-1 0v-.118l-1.587-.793a.5.5 0 11.414-.902L13 11.074v-1.811l-1.672-.837a.5.5 0 11.484-.874L12 8.928v-1.75a.5.5 0 111 0v1.802l1.5.75a.5.5 0 01-.328.938L12 10.372v1.936a2.5 2.5 0 11-1 0V10.37L8.828 9.412a.5.5 0 01-.328-.938L10 7.372v-1.8a.5.5 0 111 0v1.752l1.172.586a.5.5 0 11-.328.938L11 8.57v1.952a2.5 2.5 0 111 0V8.57l1.672-.836a.5.5 0 11.414.902L13 9.074v2.928l1.587-.793a.5.5 0 01-.415-.902L14.5 10.882V8.93l1.172-.586a.5.5 0 01.415-.063zM10 15a5 5 0 110-10 5 5 0 010 10z"
                  clipRule="evenodd"
                />
              </svg>
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
