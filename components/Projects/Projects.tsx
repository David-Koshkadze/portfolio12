import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="h-screen pt-10">
      {/* Project Card */}
      <h1 className="text-2xl my-8 text-center">Projects I have done</h1>

      <div className="grid grid-cols-3 gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
