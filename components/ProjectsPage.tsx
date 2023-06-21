"use client";

import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Sed non lacus lobortis, finibus metus vitae, sollicitudin sem.",
    category: "UI/UX Design",
  },
  // Add more projects...
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-500">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-white">Projects</h1>
        <nav className="flex mb-8 space-x-4">
          <a
            className={`py-2 px-4 rounded-md ${
              activeCategory === ""
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleCategoryFilter("")}
          >
            All
          </a>
          <a
            className={`py-2 px-4 rounded-md ${
              activeCategory === "web-development"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleCategoryFilter("web-development")}
          >
            Web Development
          </a>
          <a
            className={`py-2 px-4 rounded-md ${
              activeCategory === "ui-ux-design"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleCategoryFilter("ui-ux-design")}
          >
            UI/UX Design
          </a>
          {/* Add more category as */}
        </nav>
        <div className="grid grid-cols-2 gap-6">
          {projectsData.map(
            (project) =>
              (activeCategory === "" ||
                project.category === activeCategory) && (
                <div
                  key={project.id}
                  className="bg-white rounded-lg p-4 shadow"
                >
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
