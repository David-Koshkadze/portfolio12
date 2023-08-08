import React from "react";
import ProjectCard from "./ProjectCard";
import ImgOne from '@/public/pericare_image.png'

export default function Projects() {
  return (
    <section id="projects" className="h-screen pt-10">
      {/* Project Card */}
      <h1 className="text-2xl my-8 text-center">Projects I have done</h1>

      <div className="grid grid-cols-3 gap-10 ">
        <ProjectCard
          imageUrl={ImgOne}
          liveDemoUrl="https://example.com/project1-demo"
          codeUrl="https://github.com/username/project1"
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </section>
  );
}
