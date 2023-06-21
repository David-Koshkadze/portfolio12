import React from "react";

const ProjectsPage = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Projects</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-2xl font-bold mb-4">Project 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              fermentum enim nec dolor eleifend, a suscipit dui fringilla.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-2xl font-bold mb-4">Project 2</h2>
            <p className="text-gray-700">
              Sed non lacus lobortis, finibus metus vitae, sollicitudin sem.
              Quisque mollis lacus et ligula bibendum, eget rhoncus ligula
              tempus.
            </p>
          </div>
          {/* Add more projects here */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
